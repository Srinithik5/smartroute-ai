import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

/** Centers content at the landing page's 1280px max-width with standard side padding. */
export function Container({ className, children, ...rest }: ContainerProps) {
  return (
    <div className={cn('mx-auto max-w-[1280px] px-6 md:px-12', className)} {...rest}>
      {children}
    </div>
  );
}