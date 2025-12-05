import { defineEventHandler, createError } from "h3";
import nodemailer from "nodemailer";
import type { SendMailRequest } from "@/types/contact";

const SMTP = {
  host: "lead888.sakura.ne.jp",
  port: 587,
  user: "info@lead-k.jp",
  pass: "uhPQD2YM",
  from: "info@lead-k.jp",
  to: "mashino.ryota@att-br.jp",
};

export default defineEventHandler(async (event) => {
  const body = await readBody<SendMailRequest>(event);

  const { host, port, user, pass, from, to } = SMTP;
  if (!host || !user || !pass || !from || !to) {
    throw createError({
      statusCode: 500,
      statusMessage: "SMTP config is missing",
    });
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    auth: { user, pass },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const company = body.company || "（未入力）";
  const topicsText = body.topics.length ? body.topics.join("、") : "（未選択）";

  const mailText = `社名：　${company}

名前：　${body.name}

メールアドレス：　${body.email}

郵便番号：${body.zip}

住所：${body.address}

電話番号：${body.tel}

お問い合わせ内容：${topicsText}

お問い合わせ詳細：
${body.details}
`;

  try {
    await transporter.sendMail({
      from,
      to,
      subject: "HPからのお問い合わせです",
      text: mailText,
    });
    return { ok: true };
  } catch (error) {
    throw createError({
      statusCode: 502,
      statusMessage: "Failed to send mail",
      data: error,
    });
  }
});
