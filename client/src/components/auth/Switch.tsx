import { cn } from '@/utils/cn';

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}

export function Switch({ checked, onChange, label }: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="flex cursor-pointer items-center gap-2.5"
    >
      <span
        className={cn(
          'relative h-[22px] w-[38px] flex-shrink-0 rounded-full transition-colors duration-150',
          checked ? 'bg-primary' : 'bg-surface',
        )}
      >
        <span
          className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-background shadow-sm transition-all duration-150"
          style={{ left: checked ? '21px' : '3px' }}
        />
      </span>
      <span className="text-[13.5px] font-medium text-body">{label}</span>
    </button>
  );
}