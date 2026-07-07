import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

export type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-primary text-brand-background hover:bg-[#0000a8] shadow-[0_12px_24px_-8px_rgba(0,0,128,0.35)]',
  secondary:
    'bg-brand-background text-brand-primary border-[1.5px] border-[#d9dce3] hover:bg-brand-accent/40',
  accent: 'bg-brand-accent text-brand-primary hover:brightness-[0.98]',
  ghost: 'bg-transparent text-brand-primary hover:bg-brand-accent/60',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-[13px] rounded-[9px]',
  md: 'px-5 py-3 text-[14.5px] rounded-[10px]',
  lg: 'px-7 py-4 text-[15.5px] rounded-[11px]',
};

type ConflictingHtmlProps = 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'onAnimationEnd';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, ConflictingHtmlProps> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...rest }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        className={cn(
          'inline-flex cursor-pointer select-none items-center justify-center border-none font-bold transition-colors duration-150',
          VARIANT_CLASSES[variant],
          SIZE_CLASSES[size],
          className,
        )}
        {...rest}
      >
        {children}
      </motion.button>
    );
  },
);

Button.displayName = 'Button';