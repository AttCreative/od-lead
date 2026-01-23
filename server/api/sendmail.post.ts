import { defineEventHandler, createError } from "h3";
import nodemailer from "nodemailer";
import type { SendMailRequest } from "@/types/contact";

export default defineEventHandler(async (event) => {
  const body = await readBody<SendMailRequest>(event);

  const runtimeConfig = useRuntimeConfig();

  const SMTP_HOST = runtimeConfig.smtpHost as string;
  const SMTP_PORT = Number(runtimeConfig.smtpPort);
  const SMTP_USER = runtimeConfig.smtpUser as string;
  const SMTP_PASS = runtimeConfig.smtpPass as string;
  const SMTP_TO = runtimeConfig.smtpTo as string;

  if (
    !SMTP_HOST ||
    !SMTP_PORT ||
    !SMTP_USER ||
    !SMTP_PASS ||
    !SMTP_TO ||
    !body.email
  ) {
    throw createError({
      statusCode: 500,
      statusMessage: "SMTP config is missing",
    });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const company = body.company || "（未入力）";
  const zip = body.zip || "（未入力）";
  const address = body.address || "（未入力）";
  const topicsText = body.topics.length ? body.topics.join("、") : "（未選択）";

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
    await transporter.sendMail({
      from: body.email,
      to: SMTP_TO as string,
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
