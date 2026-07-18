import { useState, type FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthShell } from '@/components/auth/AuthShell';
import { AuthAlert } from '@/components/auth/AuthAlert';
import { FormField } from '@/components/auth/FormField';
import { PasswordInput } from '@/components/auth/PasswordInput';
import { RoleSelector } from '@/components/auth/RoleSelector';
import { SocialLoginButtons } from '@/components/auth/SocialLoginButtons';
import { Switch } from '@/components/auth/Switch';
import { ROUTES } from '@/constants/routes';
import { AUTH_ROLE_LANDING_ROUTE, MOCK_AUTH_DELAY_MS, MOCK_AUTH_SUCCESS_HOLD_MS, MOCK_LOGIN_FAILURE_EMAIL } from '@/constants/auth';
import { isValidEmail, isValidPassword } from '@/utils/validators';
import type { AuthRoleKey, AuthStatus } from '@/types/auth';

interface FieldErrors {
  email?: string;
  password?: string;
}

export function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [role, setRole] = useState<AuthRoleKey>('dispatcher');
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<AuthStatus>('idle');
  const [message, setMessage] = useState<string | null>(null);

  const validate = (): boolean => {
    const nextErrors: FieldErrors = {};
    if (!email.trim()) nextErrors.email = 'Email is required.';
    else if (!isValidEmail(email)) nextErrors.email = 'Enter a valid email address.';
    if (!password) nextErrors.password = 'Password is required.';
    else if (!isValidPassword(password)) nextErrors.password = 'Password must be at least 8 characters.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;
    if (!validate()) return;

    setStatus('loading');
    setMessage(null);

    window.setTimeout(() => {
      if (email.trim().toLowerCase() === MOCK_LOGIN_FAILURE_EMAIL) {
        setStatus('error');
        setMessage('Invalid email or password. Please try again.');
        return;
      }

      setStatus('success');
      setMessage('Login successful — redirecting…');
      window.setTimeout(() => {
        navigate(AUTH_ROLE_LANDING_ROUTE[role]);
      }, MOCK_AUTH_SUCCESS_HOLD_MS);
    }, MOCK_AUTH_DELAY_MS);
  };

  const alert =
    status === 'error' ? { type: 'error' as const, message } : status === 'success' ? { type: 'success' as const, message } : null;

  return (
    <AuthShell
      title="Welcome back"
      subtitle="Log in to your operations dashboard."
      footer={
        <span>
          New to SmartRoute?{' '}
          <Link to={ROUTES.register} className="font-bold text-primary">
            Create an account
          </Link>
        </span>
      }
    >
      <SocialLoginButtons />

      {alert && <AuthAlert type={alert.type} message={alert.message} />}

      <form onSubmit={handleSubmit} noValidate>
        <RoleSelector value={role} onChange={setRole} />

        <FormField
          label="Work email"
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
          disabled={status === 'loading' || status === 'success'}
        />
        <PasswordInput
          label="Password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
          disabled={status === 'loading' || status === 'success'}
        />

        <div className="mb-6 flex items-center justify-between">
          <Switch checked={remember} onChange={setRemember} label="Remember me" />
          <Link to={ROUTES.forgotPassword} className="text-[13px] font-semibold text-primary">
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-[10px] border-none bg-primary py-[14px] text-[15px] font-bold text-background transition-opacity disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'loading' && (
            <span className="h-4 w-4 animate-srSpin rounded-full border-2 border-background border-t-transparent" />
          )}
          {status === 'loading' ? 'Logging in…' : 'Log in'}
        </button>
      </form>
    </AuthShell>
  );
}