import { isSpUserAgent } from "@/utils/isMobile";

export const useIsMobile = () => {
  const isMobile = useState<boolean>("isMobile", () => false);

  if (process.server) {
    const event = useRequestEvent();
    const ua =
      (event?.node.req.headers["user-agent"] as string | undefined) ?? "";
    isMobile.value = isSpUserAgent(ua);
  }

  onMounted(() => {
    const ua = navigator.userAgent ?? "";
    isMobile.value = isSpUserAgent(ua);
  });

  return isMobile;
};
