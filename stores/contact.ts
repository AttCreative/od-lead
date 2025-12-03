import { defineStore } from "pinia";
import type { FormData } from "@/types/contact";

const initialState: FormData = {
  company: "",
  name: "",
  email: "",
  zip: "",
  address: "",
  tel: "",
  topics: [],
  details: "",
  agree: false,
};

export const useContactStore = defineStore("contact", () => {
  const formState = reactive<FormData>({ ...initialState });

  const setFormData = (formData: Readonly<FormData>) => {
    Object.assign(formState, {
      ...formData,
      topics: [...formData.topics],
    });
  };

  const reset = () => Object.assign(formState, { ...initialState });

  return {
    formState,
    setFormData,
    reset,
  };
});
