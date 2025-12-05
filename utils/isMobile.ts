export const isMobileUserAgent = (ua?: string | null): boolean => {
  if (!ua) return false;
  const lower = ua.toLowerCase();
  return /iphone|android.*mobile|windows phone/.test(lower);
};
