import type { JapanPostZipcodeResponse } from "@/types/contact";

export default defineEventHandler(async (event) => {
  const {
    public: {
      zipCodeTokenUrl: TOKEN_URL,
      zipCodeSearchUrl: SEARCH_URL,
      zipCodeClientId: CLIENT_ID,
      zipCodeSecretKey: SECRET_KEY,
      zipCodeXForwardedFor: X_FORWARDED_FOR,
    },
  } = useRuntimeConfig();

  const code = getRouterParam(event, "code") || "";
  if (!/^\d{7}$/.test(code)) {
    throw createError({
      statusCode: 400,
      statusMessage: "郵便番号は7桁で指定してください",
    });
  }

  // アクセストークン取得
  const tokenResponse = await $fetch<{ token?: string }>(TOKEN_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-forwarded-for": X_FORWARDED_FOR,
    },
    body: {
      grant_type: "client_credentials",
      client_id: CLIENT_ID,
      secret_key: SECRET_KEY,
    },
    timeout: 8000,
  }).catch((error) => {
    throw createError({
      statusCode: 502,
      statusMessage: "日本郵便トークン取得に失敗しました",
      data: error,
    });
  });

  if (!tokenResponse.token) {
    throw createError({
      statusCode: 401,
      statusMessage: "日本郵便の認証に失敗しました",
    });
  }

  // 郵便番号検索
  const searchResponse = await $fetch<JapanPostZipcodeResponse>(
    `${SEARCH_URL}/${code}`,
    {
      headers: { Authorization: `Bearer ${tokenResponse.token}` },
      query: { choikitype: 1, searchtype: 1, page: 1, limit: 1000 },
      timeout: 8000,
    }
  ).catch((error) => {
    throw createError({
      statusCode: 502,
      statusMessage: "日本郵便の検索に失敗しました",
      data: error,
    });
  });

  if (!searchResponse.addresses) return "";
  return `${searchResponse.addresses[0].pref_name}${searchResponse.addresses[0].city_name}${searchResponse.addresses[0].town_name}`;
});
