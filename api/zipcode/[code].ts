import type { VercelRequest, VercelResponse } from "@vercel/node";
import type { JapanPostZipcodeResponse } from "@/types/contact";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const code = String(req.query.code ?? "");
  if (!/^\d{7}$/.test(code)) {
    return res.status(400).json({ message: "郵便番号は7桁で指定してください" });
  }

  const TOKEN_URL = process.env.ZIPCODE_TOKEN_URL;
  const SEARCH_URL = process.env.ZIPCODE_SEARCH_URL;
  const CLIENT_ID = process.env.ZIPCODE_CLIENT_ID;
  const SECRET_KEY = process.env.ZIPCODE_SECRET_KEY;
  const X_FORWARDED_FOR = process.env.ZIPCODE_X_FORWARDED_FOR;

  if (
    !TOKEN_URL ||
    !SEARCH_URL ||
    !CLIENT_ID ||
    !SECRET_KEY ||
    !X_FORWARDED_FOR
  ) {
    return res.status(500).json({ message: "環境変数が不足しています" });
  }

  // アクセストークン取得
  let token: string | undefined;
  try {
    const tokenResp = await fetch(TOKEN_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-forwarded-for": X_FORWARDED_FOR,
      },
      body: JSON.stringify({
        grant_type: "client_credentials",
        client_id: CLIENT_ID,
        secret_key: SECRET_KEY,
      }),
      signal: abortAfterMs(8000),
    });

    if (!tokenResp.ok) {
      const detail = await safeText(tokenResp);
      return res.status(502).json({
        message: "日本郵便トークン取得に失敗しました",
        status: tokenResp.status,
        detail,
      });
    }

    const tokenJson = (await tokenResp.json().catch(() => ({}))) as {
      token?: string;
    };
    token = tokenJson.token;
  } catch (err: any) {
    return res.status(isAbort(err) ? 504 : 502).json({
      message: "日本郵便トークン取得で通信エラーが発生しました",
      detail: err?.message ?? String(err),
    });
  }

  if (!token) {
    return res.status(401).json({ message: "日本郵便の認証に失敗しました" });
  }

  // 郵便番号検索
  try {
    const url = new URL(`${SEARCH_URL.replace(/\/$/, "")}/${code}`);
    url.searchParams.set("choikitype", "1");
    url.searchParams.set("searchtype", "1");
    url.searchParams.set("page", "1");
    url.searchParams.set("limit", "1000");

    const searchResp = await fetch(url.toString(), {
      headers: { Authorization: `Bearer ${token}` },
      signal: abortAfterMs(8000),
    });

    if (!searchResp.ok) {
      const detail = await safeText(searchResp);
      return res.status(502).json({
        message: "日本郵便の検索に失敗しました",
        status: searchResp.status,
        detail,
      });
    }

    const searchJson = (await searchResp.json()) as JapanPostZipcodeResponse;
    if (!searchJson.addresses || searchJson.addresses.length === 0) {
      return res.status(200).send("");
    }

    const firstAddresses = searchJson.addresses[0];
    return res
      .status(200)
      .send(
        `${firstAddresses.pref_name}${firstAddresses.city_name}${firstAddresses.town_name}`,
      );
  } catch (err: any) {
    return res.status(isAbort(err) ? 504 : 502).json({
      message: "日本郵便の検索で通信エラーが発生しました",
      detail: err?.message ?? String(err),
    });
  }
}

const abortAfterMs = (ms: number): AbortSignal => {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), ms);
  controller.signal.addEventListener?.("abort", () => clearTimeout(t), {
    once: true,
  });
  return controller.signal;
};

const isAbort = (err: any): boolean => {
  return err?.name === "AbortError";
};

const safeText = async (resp: Response): Promise<string> => {
  try {
    return await resp.text();
  } catch {
    return "";
  }
};
