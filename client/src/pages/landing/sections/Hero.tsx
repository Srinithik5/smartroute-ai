import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PATHS } from '@/routes/paths';
import { HERO_STATS } from '@/data/landing';
import { Container } from '@/components/ui';

export function Hero() {
  const navigate = useNavigate();

  return (
    <Container className="grid grid-cols-1 items-center gap-14 py-16 pb-[60px] pt-24 lg:grid-cols-[1.05fr_0.95fr]">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-accent px-3.5 py-2 text-[13px] font-bold text-brand-primary">
          <div className="h-[7px] w-[7px] animate-srPulse rounded-full bg-brand-primary" />
          AI-Powered Logistics Platform
        </div>
        <h1 className="m-0 mb-6 text-[42px] font-black leading-[1.05] tracking-[-0.03em] text-[#0b0d17] sm:text-[58px]">
          Intelligent routes.
          <br />
          Flawless deliveries.
        </h1>
        <p className="m-0 mb-9 max-w-[520px] text-lg leading-relaxed text-[#4b5566]">
          SmartRoute AI optimizes every delivery route in real time — combining live traffic
          data, AI recommendations, and voice-guided navigation so your fleet moves faster,
          safer, and smarter.
        </p>
        <div className="mb-11 flex flex-wrap gap-3.5">
          <button
            onClick={() => navigate(PATHS.app.dashboard)}
            className="cursor-pointer rounded-[11px] border-none bg-brand-primary px-7 py-4 text-[15.5px] font-bold text-brand-background shadow-[0_12px_24px_-8px_rgba(0,0,128,0.35)]"
          >
            Explore Dashboard
          </button>
          <button
            onClick={() => navigate(PATHS.app.routeOptimization)}
            className="cursor-pointer rounded-[11px] border-[1.5px] border-[#d9dce3] bg-brand-background px-7 py-4 text-[15.5px] font-bold text-brand-primary"
          >
            See Route Optimization
          </button>
        </div>
        <div className="flex gap-9">
          {HERO_STATS.map((stat) => (
            <div key={stat.label}>
              <div className="text-[26px] font-extrabold tracking-[-0.02em] text-brand-primary">
                {stat.value}
              </div>
              <div className="text-[13px] font-medium text-[#6b7280]">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
        className="relative"
      >
        <div className="relative rounded-[28px] bg-brand-primary p-5 shadow-[0_40px_80px_-30px_rgba(0,0,128,0.45)]">
          <div
            className="relative h-[440px] overflow-hidden rounded-[18px]"
            style={{
              background:
                'repeating-linear-gradient(0deg,#0a0a94 0 2px,#000080 2px 46px),repeating-linear-gradient(90deg,#0a0a94 0 2px,#000080 2px 46px)',
            }}
          >
            <svg width="100%" height="100%" viewBox="0 0 400 440" className="absolute inset-0">
              <path
                d="M 40 380 C 100 340, 90 260, 160 230 S 260 150, 230 90 S 320 40, 350 40"
                fill="none"
                stroke="#E5FCF5"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="10 10"
                className="animate-srDash"
                style={{ strokeDashoffset: 20 }}
              />
              <circle cx="40" cy="380" r="10" fill="#FEFFFE" />
              <circle cx="160" cy="230" r="7" fill="#E5FCF5" />
              <circle cx="230" cy="90" r="7" fill="#E5FCF5" />
              <circle cx="350" cy="40" r="12" fill="#E5FCF5" stroke="#FEFFFE" strokeWidth="3" />
            </svg>
            <div className="absolute bottom-3.5 left-4 animate-srFloat rounded-[10px] bg-brand-background px-3 py-2.5 text-xs font-bold text-brand-primary shadow-[0_8px_20px_rgba(0,0,0,0.2)]">
              📍 Warehouse Hub
            </div>
            <div
              className="absolute right-3 top-3.5 animate-srFloat rounded-[10px] bg-brand-accent px-3 py-2.5 text-xs font-bold text-brand-primary shadow-[0_8px_20px_rgba(0,0,0,0.2)]"
              style={{ animationDelay: '0.3s' }}
            >
              ✓ Delivery #128
            </div>
          </div>
          <div className="mt-4 flex justify-between px-1.5">
            <div className="text-[12.5px] font-semibold text-brand-accent">ETA · 24 min</div>
            <div className="text-[12.5px] font-semibold text-brand-accent">
              18.2 km optimized route
            </div>
          </div>
        </div>
      </motion.div>
    </Container>
  );
}