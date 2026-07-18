import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  children: ReactNode;
  error?: string;
}

export function Checkbox({ checked, onChange, children, error }: CheckboxProps) {
  return (
    <div className="mb-6">
      <div className="flex items-start gap-2.5">
        <button
          type="button"
          role="checkbox"
          aria-checked={checked}
          onClick={() => onChange(!checked)}
          className={cn(
            'mt-0.5 flex h-[18px] w-[18px] flex-shrink-0 cursor-pointer items-center justify-center rounded-[5px] border-[1.5px] transition-colors duration-150',
            checked ? 'border-primary bg-primary' : 'border-border-strong bg-background',
          )}
        >
          {checked && (
            <span className="h-[7px] w-[4px] -translate-y-px rotate-45 border-b-2 border-r-2 border-background" />
          )}
        </button>
        <label onClick={() => onChange(!checked)} className="cursor-pointer text-[13px] leading-relaxed text-body">
          {children}
        </label>
      </div>
      {error && <p className="mt-1.5 text-xs font-medium text-danger">{error}</p>}
    </div>
  );
}