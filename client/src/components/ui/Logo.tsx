import { cn } from '@/utils/cn';

interface LogoProps {
  size?: number;
  variant?: 'onLight' | 'onDark';
  showLabel?: boolean;
  labelClassName?: string;
  onClick?: () => void;
  className?: string;
}

export function Logo({
  size = 34,
  variant = 'onLight',
  showLabel = true,
  labelClassName,
  onClick,
  className,
}: LogoProps) {
  const dotSize = Math.round(size * 0.35);
  const squareBg = variant === 'onLight' ? 'bg-primary' : 'bg-accent';
  const dotBg = variant === 'onLight' ? 'bg-accent' : 'bg-primary';
  const labelColor = variant === 'onLight' ? 'text-primary' : 'text-background';

  return (
    <div
      className={cn('flex items-center gap-2.5', onClick && 'cursor-pointer', className)}
      onClick={onClick}
    >
      <div
        className={cn('flex flex-shrink-0 items-center justify-center rounded-[9px]', squareBg)}
        style={{ width: size, height: size }}
      >
        <div className={cn('rounded-full', dotBg)} style={{ width: dotSize, height: dotSize }} />
      </div>
      {showLabel && (
        <span className={cn('whitespace-nowrap font-extrabold tracking-tight', labelColor, labelClassName)}>
          SmartRoute AI
        </span>
      )}
    </div>
  );
}