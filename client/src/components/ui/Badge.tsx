import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Background color — status/priority badges use data-driven colors, not a fixed enum. */
  bg: string;
  color: string;
  children: ReactNode;
}

/** Small rounded status/priority pill. Colors are passed in since they're data-driven (status, priority) rather than fixed variants. */
export function Badge({ bg, color, className, style, children, ...rest }: BadgeProps) {
  return (
    <span
      className={cn('inline-block whitespace-nowrap rounded-full px-2.5 py-[5px] text-[11.5px] font-bold', className)}
      style={{ background: bg, color, ...style }}
      {...rest}
    >
      {children}
    </span>
  );
}