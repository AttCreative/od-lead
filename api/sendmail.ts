import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";
import type { SendMailRequest } from "@/types/contact";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, message: "Method Not Allowed" });
  }

  const body = (req.body ?? {}) as Partial<SendMailRequest>;

  const SMTP_HOST = process.env.SMTP_HOST;
  const SMTP_PORT = Number(process.env.SMTP_PORT ?? "");
  const SMTP_USER = process.env.SMTP_USER;
  const SMTP_PASS = process.env.SMTP_PASS;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !body.email) {
    return res.status(500).json({
      ok: false,
      message: "SMTP config is missing",
    });
  }

  const is465 = SMTP_PORT === 465;

  const company = body.company || "（未入力）";
  const zip = body.zip || "（未入力）";
  const address = body.address || "（未入力）";
  const topicsText = body.topics?.length
    ? body.topics.join("、")
    : "（未選択）";

  const mailText = `社名：　${company}

名前：　${body.name}

メールアドレス：　${body.email}

郵便番号：${zip}

住所：${address}

電話番号：${body.tel}

お問い合わせ内容：${topicsText}

お問い合わせ詳細：
${body.details}
`;

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: is465,
      requireTLS: !is465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
      tls: { servername: SMTP_HOST },
    });

    await transporter.verify();

    await transporter.sendMail({
      from: SMTP_USER,
      to: SMTP_USER,
      replyTo: body.email,
      subject: "HPからのお問い合わせです",
      text: mailText,

      envelope: {
        from: SMTP_USER,
        to: SMTP_USER,
      },
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(502).json({
      ok: false,
      message: "Failed to send mail",
      detail: error,
    });
  }
}
