import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'accent';
type ButtonSize = 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-background shadow-brand-btn hover:bg-primary-hover',
  secondary:
    'bg-background text-primary border-[1.5px] border-border-strong hover:bg-surface',
  ghost: 'bg-transparent text-primary hover:bg-surface',
  accent: 'bg-accent text-primary hover:brightness-95',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  md: 'px-4 py-2.5 text-sm rounded',
  lg: 'px-7 py-4 text-[15.5px] rounded-[11px]',
};

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap font-bold transition-colors duration-150 cursor-pointer',
        VARIANT_CLASSES[variant],
        SIZE_CLASSES[size],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}