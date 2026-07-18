import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Logo } from '@/components/ui/Logo';
import { ROUTES } from '@/constants/routes';
import { cn } from '@/utils/cn';
import type { UserRole } from '@/types/role';

export function AuthPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const isRegister = location.pathname === ROUTES.register;

  const [selectedRole, setSelectedRole] = useState<UserRole>('dispatcher');

  const authTitle = isRegister ? 'Create your account' : 'Welcome back';
  const authSubtitle = isRegister
    ? 'Set up SmartRoute AI for your team in minutes.'
    : 'Log in to your operations dashboard.';
  const authCta = isRegister ? 'Create account' : 'Log in';

  const handleSubmit = () => {
    navigate(selectedRole === 'merchant' ? ROUTES.merchant.dashboard : ROUTES.app.dashboard);
  };

  const roleChipClass = (active: boolean) =>
    cn(
      'flex-1 cursor-pointer rounded-[10px] border-[1.5px] p-[11px] text-center text-[13.5px] font-bold',
      active ? 'border-primary bg-primary text-background' : 'border-border-strong bg-background text-body',
    );

  return (
    <div className="grid min-h-screen grid-cols-2">
      <div className="flex items-center justify-center p-12">
        <div className="w-full max-w-[380px]">
          <Logo size={32} labelClassName="text-[17px]" className="mb-10" onClick={() => navigate(ROUTES.landing)} />

          <h1 className="mb-2 text-[28px] font-extrabold tracking-[-0.02em] text-ink">{authTitle}</h1>
          <p className="mb-6 text-[14.5px] text-muted">{authSubtitle}</p>

          <div className="mb-6">
            <label className="mb-2 block text-[13px] font-semibold text-body">Continue as</label>
            <div className="flex gap-2.5">
              <div className={roleChipClass(selectedRole === 'dispatcher')} onClick={() => setSelectedRole('dispatcher')}>
                Operations Team
              </div>
              <div className={roleChipClass(selectedRole === 'merchant')} onClick={() => setSelectedRole('merchant')}>
                Merchant
              </div>
            </div>
          </div>

          {isRegister && (
            <div className="mb-4">
              <label className="mb-[7px] block text-[13px] font-semibold text-body">Full name</label>
              <input
                placeholder="Priya Sharma"
                className="w-full rounded-[10px] border-[1.5px] border-border-strong px-3.5 py-[13px] font-sans text-[14.5px] outline-none"
              />
            </div>
          )}
          <div className="mb-4">
            <label className="mb-[7px] block text-[13px] font-semibold text-body">Work email</label>
            <input
              placeholder="you@company.com"
              className="w-full rounded-[10px] border-[1.5px] border-border-strong px-3.5 py-[13px] font-sans text-[14.5px] outline-none"
            />
          </div>
          <div className="mb-6">
            <label className="mb-[7px] block text-[13px] font-semibold text-body">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-[10px] border-[1.5px] border-border-strong px-3.5 py-[13px] font-sans text-[14.5px] outline-none"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="mb-4 w-full cursor-pointer rounded-[10px] border-none bg-primary py-[14px] text-[15px] font-bold text-background"
          >
            {authCta}
          </button>
          <div className="text-center text-[13.5px] text-muted">
            {isRegister ? (
              <span>
                Already have an account?{' '}
                <a onClick={() => navigate(ROUTES.login)} className="cursor-pointer font-bold text-primary">
                  Log in
                </a>
              </span>
            ) : (
              <span>
                New to SmartRoute?{' '}
                <a onClick={() => navigate(ROUTES.register)} className="cursor-pointer font-bold text-primary">
                  Create an account
                </a>
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center overflow-hidden bg-primary p-12">
        <div
          className="absolute inset-0"
          style={{
            background:
              'repeating-linear-gradient(0deg,rgba(255,255,255,0.04) 0 2px,transparent 2px 48px),repeating-linear-gradient(90deg,rgba(255,255,255,0.04) 0 2px,transparent 2px 48px)',
          }}
        />
        <div className="relative max-w-[360px] rounded-xl border border-white/[0.15] bg-white/[0.07] p-8 backdrop-blur-[6px]">
          <div className="mb-3 text-[13px] font-bold text-accent">LIVE FLEET SNAPSHOT</div>
          <div className="mb-1.5 text-[32px] font-black text-background">1,284 deliveries</div>
          <div className="mb-7 text-[13.5px] text-navy-subtle">completed today across 6 regions</div>
          <div className="flex gap-2.5">
            <div className="h-1.5 flex-1 rounded-full bg-accent" />
            <div className="h-1.5 flex-1 rounded-full bg-white/25" />
            <div className="h-1.5 flex-1 rounded-full bg-white/25" />
          </div>
        </div>
      </div>
    </div>
  );
}