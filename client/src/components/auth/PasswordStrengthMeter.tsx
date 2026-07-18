import { cn } from '@/utils/cn';
import { getPasswordStrength } from '@/utils/validators';
import type { PasswordStrengthLevel } from '@/types/auth';

const LEVEL_BAR_COLOR: Record<PasswordStrengthLevel, string> = {
  weak: 'bg-danger',
  fair: 'bg-warning',
  good: 'bg-primary',
  strong: 'bg-success',
};

const LEVEL_TEXT_COLOR: Record<PasswordStrengthLevel, string> = {
  weak: 'text-danger',
  fair: 'text-warning',
  good: 'text-primary',
  strong: 'text-success',
};

const LEVEL_LABEL: Record<PasswordStrengthLevel, string> = {
  weak: 'Weak',
  fair: 'Fair',
  good: 'Good',
  strong: 'Strong',
};

interface PasswordStrengthMeterProps {
  password: string;
}

export function PasswordStrengthMeter({ password }: PasswordStrengthMeterProps) {
  if (!password) return null;

  const { score, level } = getPasswordStrength(password);
  const filled = Math.max(score, 1);

  return (
    <div className="-mt-2 mb-4">
      <div className="flex gap-1.5">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface">
            <div
              className={cn(
                'h-full rounded-full transition-all duration-300',
                i < filled ? LEVEL_BAR_COLOR[level] : 'bg-surface',
              )}
            />
          </div>
        ))}
      </div>
      <div className="mt-1.5 text-xs font-semibold text-muted">
        Password strength: <span className={cn('font-bold', LEVEL_TEXT_COLOR[level])}>{LEVEL_LABEL[level]}</span>
      </div>
    </div>
  );
}