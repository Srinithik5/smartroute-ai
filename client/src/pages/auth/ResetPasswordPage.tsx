import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthShell } from '@/components/auth/AuthShell';
import { AuthAlert } from '@/components/auth/AuthAlert';
import { PasswordInput } from '@/components/auth/PasswordInput';
import { PasswordStrengthMeter } from '@/components/auth/PasswordStrengthMeter';
import { ROUTES } from '@/constants/routes';
import { MOCK_AUTH_DELAY_MS } from '@/constants/auth';
import { isValidPassword, passwordsMatch } from '@/utils/validators';
import type { AuthStatus } from '@/types/auth';

interface FieldErrors {
  password?: string;
  confirmPassword?: string;
}

export function ResetPasswordPage() {
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<AuthStatus>('idle');

  const validate = (): boolean => {
    const nextErrors: FieldErrors = {};
    if (!password) nextErrors.password = 'Password is required.';
    else if (!isValidPassword(password)) nextErrors.password = 'Password must be at least 8 characters.';
    if (!confirmPassword) nextErrors.confirmPassword = 'Please confirm your password.';
    else if (!passwordsMatch(password, confirmPassword)) nextErrors.confirmPassword = 'Passwords do not match.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;
    if (!validate()) return;

    setStatus('loading');
    window.setTimeout(() => {
      setStatus('success');
    }, MOCK_AUTH_DELAY_MS);
  };

  const disabled = status === 'loading' || status === 'success';

  return (
    <AuthShell title="Set a new password" subtitle="Choose a strong password for your SmartRoute AI account.">
      {status === 'success' ? (
        <>
          <AuthAlert type="success" message="Your password has been reset successfully." />
          <button
            type="button"
            onClick={() => navigate(ROUTES.login)}
            className="w-full cursor-pointer rounded-[10px] border-none bg-primary py-[14px] text-[15px] font-bold text-background"
          >
            Back to log in
          </button>
        </>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <PasswordInput
            label="New password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
            disabled={disabled}
          />
          <PasswordStrengthMeter password={password} />
          <PasswordInput
            label="Confirm new password"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={errors.confirmPassword}
            disabled={disabled}
          />

          <button
            type="submit"
            disabled={disabled}
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-[10px] border-none bg-primary py-[14px] text-[15px] font-bold text-background transition-opacity disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === 'loading' && (
              <span className="h-4 w-4 animate-srSpin rounded-full border-2 border-background border-t-transparent" />
            )}
            {status === 'loading' ? 'Resetting password…' : 'Reset password'}
          </button>
          <p className="mt-4 text-center text-[13.5px] text-muted">
            <Link to={ROUTES.login} className="font-bold text-primary">
              Back to log in
            </Link>
          </p>
        </form>
      )}
    </AuthShell>
  );
}