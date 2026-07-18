import { AUTH_ROLE_OPTIONS } from '@/constants/auth';
import type { AuthRoleKey } from '@/types/auth';
import { cn } from '@/utils/cn';

interface RoleSelectorProps {
  value: AuthRoleKey;
  onChange: (role: AuthRoleKey) => void;
  label?: string;
}

export function RoleSelector({ value, onChange, label = 'Continue as' }: RoleSelectorProps) {
  return (
    <div className="mb-6">
      <label className="mb-2 block text-[13px] font-semibold text-body">{label}</label>
      <div className="flex flex-wrap gap-2.5">
        {AUTH_ROLE_OPTIONS.map((option) => {
          const active = value === option.key;
          return (
            <div
              key={option.key}
              onClick={() => onChange(option.key)}
              className={cn(
                'basis-[calc(50%-5px)] cursor-pointer rounded-[10px] border-[1.5px] p-[11px] text-center text-[13.5px] font-bold transition-colors duration-150',
                active
                  ? 'border-primary bg-primary text-background'
                  : 'border-border-strong bg-background text-body',
              )}
            >
              {option.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}