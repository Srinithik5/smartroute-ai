import { useMediaQuery } from '@/hooks/useMediaQuery';
import { MOBILE_BREAKPOINT_PX } from '@/constants/navigation';

export function useIsMobile(): boolean {
  return useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT_PX}px)`);
}