import type { InputHTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function FormField({ label, error, className, id, ...rest }: FormFieldProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="mb-4">
      <label htmlFor={inputId} className="mb-[7px] block text-[13px] font-semibold text-body">
        {label}
      </label>
      <input
        id={inputId}
        className={cn(
          'w-full rounded-[10px] border-[1.5px] px-3.5 py-[13px] font-sans text-[14.5px] outline-none',
          error ? 'border-danger' : 'border-border-strong',
          className,
        )}
        {...rest}
      />
      {error && <p className="mt-1.5 text-xs font-medium text-danger">{error}</p>}
    </div>
  );
}