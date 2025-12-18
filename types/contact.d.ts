/** フォームステップ */
export type Step = "01" | "02" | "03";

/** お問い合わせフォームデータ */
export type FormData = {
  company: string;
  name: string;
  email: string;
  zip?: string;
  address?: string;
  tel: string;
  topics: string[];
  details: string;
};

/** メール送信リクエスト */
export type SendMailRequest = {
  company: string;
  name: string;
  email: string;
  zip: string;
  address: string;
  tel: string;
  topics: string[];
  details: string;
};

type JapanPostAddress = {
  dgacode: string | null;
  zip_code: string;
  pref_code: string;
  pref_name: string;
  pref_kana: string;
  pref_roma: string;
  city_code: string;
  city_name: string;
  city_kana: string;
  city_roma: string;
  town_name: string;
  town_kana: string;
  town_roma: string;
  biz_name: string | null;
  biz_kana: string | null;
  biz_roma: string | null;
  block_name: string | null;
  other_name: string | null;
  address: string | null;
  longitude: string | null;
  latitude: string | null;
};

/** 郵便番号検索レスポンス */
export type JapanPostZipcodeResponse = {
  page: number;
  limit: number;
  count: number;
  searchtype: "zipcode" | string;
  addresses: JapanPostAddress[];
};
