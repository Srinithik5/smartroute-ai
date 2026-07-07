import { cn } from '@/utils/cn';

interface LogoProps {
  /** Pixel size of the mark (square). Defaults to 34. */
  size?: number;
  /** Show the "SmartRoute AI" wordmark next to the mark. */
  withLabel?: boolean;
  labelClassName?: string;
  className?: string;
}

/** Brand mark: navy rounded square with a mint dot, plus optional wordmark. */
export function Logo({ size = 34, withLabel = true, labelClassName, className }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <div
        className="flex flex-shrink-0 items-center justify-center rounded-[9px] bg-brand-primary"
        style={{ width: size, height: size }}
      >
        <div
          className="rounded-full bg-brand-accent"
          style={{ width: size * 0.35, height: size * 0.35 }}
        />
      </div>
      {withLabel && (
        <span className={cn('whitespace-nowrap font-extrabold tracking-tight text-brand-primary', labelClassName)}>
          SmartRoute AI
        </span>
      )}
    </div>
  );
}