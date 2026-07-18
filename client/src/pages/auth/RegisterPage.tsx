import { useState, type FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthShell } from '@/components/auth/AuthShell';
import { AuthAlert } from '@/components/auth/AuthAlert';
import { FormField } from '@/components/auth/FormField';
import { PasswordInput } from '@/components/auth/PasswordInput';
import { PasswordStrengthMeter } from '@/components/auth/PasswordStrengthMeter';
import { RoleSelector } from '@/components/auth/RoleSelector';
import { SocialLoginButtons } from '@/components/auth/SocialLoginButtons';
import { Checkbox } from '@/components/auth/Checkbox';
import { ROUTES } from '@/constants/routes';
import {
  AUTH_ROLE_LANDING_ROUTE,
  MOCK_AUTH_DELAY_MS,
  MOCK_AUTH_SUCCESS_HOLD_MS,
  MOCK_REGISTER_EXISTS_EMAIL,
} from '@/constants/auth';
import { isValidEmail, isValidPassword, isValidPhone, passwordsMatch } from '@/utils/validators';
import type { AuthRoleKey, AuthStatus } from '@/types/auth';

interface FieldErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  terms?: string;
}

export function RegisterPage() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState<AuthRoleKey>('dispatcher');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<AuthStatus>('idle');
  const [message, setMessage] = useState<string | null>(null);

  const validate = (): boolean => {
    const nextErrors: FieldErrors = {};
    if (!fullName.trim()) nextErrors.fullName = 'Full name is required.';
    if (!phone.trim()) nextErrors.phone = 'Phone number is required.';
    else if (!isValidPhone(phone)) nextErrors.phone = 'Enter a valid phone number.';
    if (!email.trim()) nextErrors.email = 'Email is required.';
    else if (!isValidEmail(email)) nextErrors.email = 'Enter a valid email address.';
    if (!password) nextErrors.password = 'Password is required.';
    else if (!isValidPassword(password)) nextErrors.password = 'Password must be at least 8 characters.';
    if (!confirmPassword) nextErrors.confirmPassword = 'Please confirm your password.';
    else if (!passwordsMatch(password, confirmPassword)) nextErrors.confirmPassword = 'Passwords do not match.';
    if (!termsAccepted) nextErrors.terms = 'You must accept the Terms of Service to continue.';

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
      if (email.trim().toLowerCase() === MOCK_REGISTER_EXISTS_EMAIL) {
        setStatus('error');
        setMessage('An account with this email already exists.');
        return;
      }

      setStatus('success');
      setMessage('Account created — redirecting…');
      window.setTimeout(() => {
        navigate(AUTH_ROLE_LANDING_ROUTE[role]);
      }, MOCK_AUTH_SUCCESS_HOLD_MS);
    }, MOCK_AUTH_DELAY_MS);
  };

  const disabled = status === 'loading' || status === 'success';
  const alert =
    status === 'error' ? { type: 'error' as const, message } : status === 'success' ? { type: 'success' as const, message } : null;

  return (
    <AuthShell
      title="Create your account"
      subtitle="Set up SmartRoute AI for your team in minutes."
      footer={
        <span>
          Already have an account?{' '}
          <Link to={ROUTES.login} className="font-bold text-primary">
            Log in
          </Link>
        </span>
      }
    >
      <SocialLoginButtons />

      {alert && <AuthAlert type={alert.type} message={alert.message} />}

      <form onSubmit={handleSubmit} noValidate>
        <RoleSelector value={role} onChange={setRole} />

        <FormField
          label="Full name"
          placeholder="Priya Sharma"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          error={errors.fullName}
          disabled={disabled}
        />
        <FormField
          label="Company name"
          placeholder="Meridian Freight"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          disabled={disabled}
        />
        <FormField
          label="Phone"
          type="tel"
          placeholder="+1 (555) 123-4567"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          error={errors.phone}
          disabled={disabled}
        />
        <FormField
          label="Work email"
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
          disabled={disabled}
        />
        <PasswordInput
          label="Password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
          disabled={disabled}
        />
        <PasswordStrengthMeter password={password} />
        <PasswordInput
          label="Confirm password"
          placeholder="••••••••"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={errors.confirmPassword}
          disabled={disabled}
        />

        <Checkbox checked={termsAccepted} onChange={setTermsAccepted} error={errors.terms}>
          I agree to the SmartRoute AI Terms of Service and Privacy Policy.
        </Checkbox>

        <button
          type="submit"
          disabled={disabled}
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-[10px] border-none bg-primary py-[14px] text-[15px] font-bold text-background transition-opacity disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'loading' && (
            <span className="h-4 w-4 animate-srSpin rounded-full border-2 border-background border-t-transparent" />
          )}
          {status === 'loading' ? 'Creating account…' : 'Create account'}
        </button>
      </form>
    </AuthShell>
  );
}