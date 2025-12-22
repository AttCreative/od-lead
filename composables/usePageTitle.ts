export function usePageTitle(chunk?: string) {
  const full = chunk ? `${chunk} ｜ リード株式会社` : "リード株式会社";
  useHead({ title: full });
}
