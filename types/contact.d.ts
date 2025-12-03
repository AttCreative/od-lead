export type Step = "01" | "02" | "03";

export type FormData = {
  company: string;
  name: string;
  email: string;
  zip: string;
  address: string;
  tel: string;
  topics: string[];
  details: string;
  agree: boolean;
};
