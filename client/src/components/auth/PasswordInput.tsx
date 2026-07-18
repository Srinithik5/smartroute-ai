import { useState, type InputHTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

interface PasswordInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  error?: string;
}

export function PasswordInput({ label, error, className, id, ...rest }: PasswordInputProps) {
  const [visible, setVisible] = useState(false);
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="mb-4">
      <label htmlFor={inputId} className="mb-[7px] block text-[13px] font-semibold text-body">
        {label}
      </label>
      <div className="relative">
        <input
          id={inputId}
          type={visible ? 'text' : 'password'}
          className={cn(
            'w-full rounded-[10px] border-[1.5px] px-3.5 py-[13px] pr-11 font-sans text-[14.5px] outline-none',
            error ? 'border-danger' : 'border-border-strong',
            className,
          )}
          {...rest}
        />
        <button
          type="button"
          aria-label={visible ? 'Hide password' : 'Show password'}
          onClick={() => setVisible((v) => !v)}
          className="absolute right-3 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center text-subtle"
        >
          {visible ? (
            <span className="relative block h-3 w-4">
              <span className="absolute inset-0 rounded-full border-2 border-current" />
              <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rotate-45 bg-current" />
            </span>
          ) : (
            <span className="block h-3 w-4 rounded-full border-2 border-current" />
          )}
        </button>
      </div>
      {error && <p className="mt-1.5 text-xs font-medium text-danger">{error}</p>}
    </div>
  );
}