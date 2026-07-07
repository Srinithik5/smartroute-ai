import type { HTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

export type CardVariant = 'default' | 'accent' | 'primary';

const VARIANT_CLASSES: Record<CardVariant, string> = {
  default: 'bg-brand-background border border-[#eceef2]',
  accent: 'bg-brand-accent border-none',
  primary: 'bg-brand-primary border-none',
};

type ConflictingHtmlProps = 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'onAnimationEnd';

interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, ConflictingHtmlProps> {
  variant?: CardVariant;
  /** Lift + shadow on hover, matching the prototype's interactive cards. */
  hoverElevate?: boolean;
  children: ReactNode;
}

export function Card({ variant = 'default', hoverElevate = false, className, children, ...rest }: CardProps) {
  return (
    <motion.div
      whileHover={hoverElevate ? { y: -4, boxShadow: '0 20px 40px -16px rgba(0,0,128,0.18)' } : undefined}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={cn('rounded-2xl p-[22px]', VARIANT_CLASSES[variant], className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}