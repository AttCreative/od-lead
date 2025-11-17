export function usePageTitle(chunk?: string) {
  const full = chunk ? `${chunk} ｜ Lead` : "Lead";
  useHead({ title: full });
}
