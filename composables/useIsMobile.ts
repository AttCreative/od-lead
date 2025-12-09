import { isMobileUserAgent } from "@/utils/isMobile";

export const useIsMobile = () => {
  const nuxtApp = useNuxtApp();
  const isMobile = useState<boolean>("isMobile", () => false);

  // SSR のとき（初回ロードや リロード）
  if (process.server) {
    const event = useRequestEvent();
    const ua =
      (event?.node.req.headers["user-agent"] as string | undefined) ?? "";
    isMobile.value = isMobileUserAgent(ua);
  }

  // クライアント遷移のとき（NuxtLink でページ移動したとき）
  if (process.client && !nuxtApp.isHydrating) {
    const ua = navigator.userAgent ?? "";
    isMobile.value = isMobileUserAgent(ua);
  }

  return isMobile;
};
