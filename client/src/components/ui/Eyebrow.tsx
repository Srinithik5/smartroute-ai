import { cn } from '@/utils/cn';

interface EyebrowProps {
  children: string;
  /** Use the mint tone for dark (navy) section backgrounds. */
  onDark?: boolean;
  className?: string;
}

/** Small uppercase section label, e.g. "PLATFORM", "WORKFLOW", "FAQ". */
export function Eyebrow({ children, onDark = false, className }: EyebrowProps) {
  return (
    <div
      className={cn(
        'mb-3 text-[13px] font-bold tracking-[0.06em]',
        onDark ? 'text-brand-accent' : 'text-brand-primary',
        className,
      )}
    >
      {children}
    </div>
  );
}