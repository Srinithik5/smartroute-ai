import { cn } from '@/utils/cn';

interface DashboardStatCardProps {
  label: string;
  value: string | number;
  variant?: 'light' | 'dark';
}

export function DashboardStatCard({ label, value, variant = 'light' }: DashboardStatCardProps) {
  const isDark = variant === 'dark';

  return (
    <div className={cn('rounded-lg p-[22px]', isDark ? 'bg-primary' : 'border border-border bg-background')}>
      <div className={cn('mb-2.5 text-[12.5px] font-semibold', isDark ? 'text-navy-muted' : 'text-subtle')}>
        {label}
      </div>
      <div className={cn('text-[32px] font-extrabold tracking-[-0.02em]', isDark ? 'text-background' : 'text-ink')}>
        {value}
      </div>
    </div>
  );
}