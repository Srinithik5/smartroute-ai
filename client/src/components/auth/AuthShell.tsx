import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Logo } from '@/components/ui/Logo';
import { ROUTES } from '@/constants/routes';

interface AuthShellProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer?: ReactNode;
}

export function AuthShell({ title, subtitle, children, footer }: AuthShellProps) {
  const navigate = useNavigate();

  return (
    <div className="grid min-h-screen grid-cols-2">
      <div className="flex items-center justify-center p-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="w-full max-w-[380px]"
        >
          <Logo
            size={32}
            labelClassName="text-[17px]"
            className="mb-10"
            onClick={() => navigate(ROUTES.landing)}
          />
          <h1 className="mb-2 text-[28px] font-extrabold tracking-[-0.02em] text-ink">{title}</h1>
          <p className="mb-6 text-[14.5px] text-muted">{subtitle}</p>
          {children}
          {footer && <div className="mt-4 text-center text-[13.5px] text-muted">{footer}</div>}
        </motion.div>
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