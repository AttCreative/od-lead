import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/images/common/company-logo.svg",
        },
        { rel: "apple-touch-icon", href: "/images/common/company-logo.svg" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Oswald&display=swap",
        },
      ],
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          name: "description",
          content:
            "リード株式会社の最新情報やお知らせを掲載しています。サービス更新、重要なお知らせなどをご確認いただけます。",
        },
        {
          name: "keywords",
          content: "リード, リード株式会社, LEAD, 不動産, リフォーム, 横浜",
        },
      ],
    },
  },
  css: ["~/assets/reset.css", "~/assets/global.css"],
  modules: ["@pinia/nuxt", "@nuxt/image"],
  image: {
    provider: "ipx",
  },

  runtimeConfig: {
    zipCodeTokenUrl: process.env.ZIPCODE_TOKEN_URL || "",
    zipCodeSearchUrl: process.env.ZIPCODE_SEARCH_URL || "",
    zipCodeClientId: process.env.ZIPCODE_CLIENT_ID || "",
    zipCodeSecretKey: process.env.ZIPCODE_SECRET_KEY || "",
    zipCodeXForwardedFor: process.env.ZIPCODE_X_FORWARDED_FOR || "",
    smtpHost: process.env.SMTP_HOST || "",
    smtpPort: process.env.SMTP_PORT || "",
    smtpUser: process.env.SMTP_USER || "",
    smtpPass: process.env.SMTP_PASS || "",
    smtpFrom: process.env.SMTP_FROM || "",
  },
});
