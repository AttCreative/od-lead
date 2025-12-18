import { isSpUserAgent } from "@/utils/isMobile";

export default defineNuxtRouteMiddleware((to) => {
  let isMobile = false;

  // SSR のとき（初回ロードや リロード）
  if (process.server) {
    const event = useRequestEvent();
    const ua = event?.node.req.headers["user-agent"] as string | undefined;
    isMobile = isSpUserAgent(ua);
  }

  // クライアント遷移のとき（NuxtLink でページ移動したとき）
  if (process.client) {
    if (typeof navigator !== "undefined") {
      isMobile = isSpUserAgent(navigator.userAgent);
    }
  }

  // リダイレクト処理
  if (to.path === "/sales" && isMobile) {
    return navigateTo("/sp/sales");
  }
  if (to.path === "/sp/sales" && !isMobile) {
    return navigateTo("/sales");
  }

  if (to.path === "/rental" && isMobile) {
    return navigateTo("/sp/rental");
  }
  if (to.path === "/sp/rental" && !isMobile) {
    return navigateTo("/rental");
  }

  if (to.path === "/renovation" && isMobile) {
    return navigateTo("/sp/renovation");
  }
  if (to.path === "/sp/renovation" && !isMobile) {
    return navigateTo("/renovation");
  }
});
