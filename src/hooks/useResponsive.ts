import { useScreenWidth } from "./useScreenWidth";

export function useResponsive() {
    const width = useScreenWidth();
    return {
        width,
        isMobile: width < 743,
        isTablet: width >= 743 && width < 1235,
        isDesktop: width >= 1235,
    };
}
