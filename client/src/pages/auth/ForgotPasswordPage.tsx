import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { AuthShell } from '@/components/auth/AuthShell';
import { AuthAlert } from '@/components/auth/AuthAlert';
import { FormField } from '@/components/auth/FormField';
import { ROUTES } from '@/constants/routes';
import { MOCK_AUTH_DELAY_MS, MOCK_FORGOT_PASSWORD_NOT_FOUND_EMAIL } from '@/constants/auth';
import { isValidEmail } from '@/utils/validators';
import type { AuthStatus } from '@/types/auth';

export function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | undefined>();
  const [status, setStatus] = useState<AuthStatus>('idle');
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;

    if (!email.trim()) {
      setError('Email is required.');
      return;
    }
    if (!isValidEmail(email)) {
      setError('Enter a valid email address.');
      return;
    }
    setError(undefined);
    setStatus('loading');
    setMessage(null);

    window.setTimeout(() => {
      if (email.trim().toLowerCase() === MOCK_FORGOT_PASSWORD_NOT_FOUND_EMAIL) {
        setStatus('error');
        setMessage('No account found with that email address.');
        return;
      }

      setStatus('success');
      setMessage('If an account exists for that email, a password reset link has been sent.');
    }, MOCK_AUTH_DELAY_MS);
  };

  const alert =
    status === 'error' ? { type: 'error' as const, message } : status === 'success' ? { type: 'success' as const, message } : null;
  const disabled = status === 'loading' || status === 'success';

  return (
    <AuthShell
      title="Reset your password"
      subtitle="Enter your work email and we'll send you a link to reset your password."
      footer={
        <span>
          Remembered your password?{' '}
          <Link to={ROUTES.login} className="font-bold text-primary">
            Back to log in
          </Link>
        </span>
      }
    >
      {alert && <AuthAlert type={alert.type} message={alert.message} />}

      <form onSubmit={handleSubmit} noValidate>
        <FormField
          label="Work email"
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={error}
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
          {status === 'loading' ? 'Sending reset link…' : 'Send reset link'}
        </button>
      </form>
    </AuthShell>
  );
}