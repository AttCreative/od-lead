import { isSpUserAgent, isTabletUserAgent } from "@/utils/isMobile";

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

export const useIsTablet = () => {
  const isTablet = useState<boolean>("isTablet", () => false);

  if (process.server) {
    const event = useRequestEvent();
    const ua =
      (event?.node.req.headers["user-agent"] as string | undefined) ?? "";
    isTablet.value = isTabletUserAgent(ua);
  }

  onMounted(() => {
    const ua = navigator.userAgent ?? "";
    isTablet.value = isTabletUserAgent(ua);
  });

  return isTablet;
};
