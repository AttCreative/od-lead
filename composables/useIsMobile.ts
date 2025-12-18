import { isSpUserAgent } from "@/utils/isMobile";
import { isTabletUserAgent } from "@/utils/isMobile";

export const useIsMobile = () => {
  const nuxtApp = useNuxtApp();
  const isMobile = useState<boolean>("isMobile", () => false);

  // SSR のとき（初回ロードや リロード）
  if (process.server) {
    const event = useRequestEvent();
    const ua =
      (event?.node.req.headers["user-agent"] as string | undefined) ?? "";
    isMobile.value = isSpUserAgent(ua);
  }

  // クライアント遷移のとき（NuxtLink でページ移動したとき）
  if (process.client && !nuxtApp.isHydrating) {
    const ua = navigator.userAgent ?? "";
    isMobile.value = isSpUserAgent(ua);
  }

  return isMobile;
};

export const useIsTablet = () => {
  const nuxtApp = useNuxtApp();
  const isTablet = useState<boolean>("isTablet", () => false);

  // SSR のとき（初回ロードや リロード）
  if (process.server) {
    const event = useRequestEvent();
    const ua =
      (event?.node.req.headers["user-agent"] as string | undefined) ?? "";
    console.log("SSR UA:", ua);
    isTablet.value = isTabletUserAgent(ua);
  }

  // クライアント遷移のとき（NuxtLink でページ移動したとき）
  if (process.client && !nuxtApp.isHydrating) {
    const ua = navigator.userAgent ?? "";
    console.log("Client UA:", ua);
    isTablet.value = isTabletUserAgent(ua);
  }

  return isTablet;
};
