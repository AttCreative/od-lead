import { isSpUserAgent } from "@/utils/isMobile";

export default defineNuxtRouteMiddleware((to) => {
  if (to.path.startsWith("/sp/")) return;

  let isMobile = false;

  if (process.server) {
    const event = useRequestEvent();
    const ua = event?.node.req.headers["user-agent"] as string | undefined;
    isMobile = isSpUserAgent(ua);
  }

  if (process.client) {
    isMobile = isSpUserAgent(navigator.userAgent);
  }

  if (to.path === "/sales" && isMobile) return navigateTo("/sp/sales");
  if (to.path === "/rental" && isMobile) return navigateTo("/sp/rental");
  if (to.path === "/renovation" && isMobile)
    return navigateTo("/sp/renovation");
});
