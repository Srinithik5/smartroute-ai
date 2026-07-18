import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { HERO_STATS } from '@/constants/landingContent';

export function Hero() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto grid max-w-[1280px] grid-cols-[1.05fr_0.95fr] items-center gap-14 px-12 pb-[60px] pt-24">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-pill bg-accent px-3.5 py-2 text-[13px] font-bold text-primary">
          <div className="h-[7px] w-[7px] animate-srPulse rounded-full bg-primary" />
          AI-Powered Logistics Platform
        </div>
        <h1 className="mb-6 text-[58px] font-black leading-[1.05] tracking-[-0.03em] text-ink">
          Intelligent routes.
          <br />
          Flawless deliveries.
        </h1>
        <p className="mb-9 max-w-[520px] text-lg leading-relaxed text-[#4b5566]">
          SmartRoute AI optimizes every delivery route in real time — combining live traffic
          data, AI recommendations, and voice-guided navigation so your fleet moves faster,
          safer, and smarter.
        </p>
        <div className="mb-11 flex gap-3.5">
          <button
            onClick={() => navigate(ROUTES.app.dashboard)}
            className="cursor-pointer rounded-[11px] border-none bg-primary px-7 py-4 text-[15.5px] font-bold text-background shadow-brand-btn"
          >
            Explore Dashboard
          </button>
          <button
            onClick={() => navigate(ROUTES.app.route)}
            className="cursor-pointer rounded-[11px] border-[1.5px] border-[#d9dce3] bg-background px-7 py-4 text-[15.5px] font-bold text-primary"
          >
            See Route Optimization
          </button>
        </div>
        <div className="flex gap-9">
          {HERO_STATS.map((stat) => (
            <div key={stat.label}>
              <div className="text-[26px] font-extrabold tracking-[-0.02em] text-primary">
                {stat.value}
              </div>
              <div className="text-[13px] font-medium text-muted">{stat.label}</div>
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
        <div className="relative rounded-[28px] bg-primary p-5 shadow-brand-hero">
          <div
            className="relative h-[440px] overflow-hidden rounded-[18px]"
            style={{
              background:
                'repeating-linear-gradient(0deg,#0a0a94 0 2px,#000080 2px 46px),repeating-linear-gradient(90deg,#0a0a94 0 2px,#000080 2px 46px)',
            }}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 400 440"
              className="absolute inset-0"
            >
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
            <div className="absolute bottom-3.5 left-4 animate-srFloat rounded-[10px] bg-background px-3 py-[9px] text-xs font-bold text-primary shadow-[0_8px_20px_rgba(0,0,0,0.2)]">
              📍 Warehouse Hub
            </div>
            <div
              className="absolute right-3 top-3.5 rounded-[10px] bg-accent px-3 py-[9px] text-xs font-bold text-primary shadow-[0_8px_20px_rgba(0,0,0,0.2)]"
              style={{ animation: 'srFloat 3.8s ease-in-out .3s infinite' }}
            >
              ✓ Delivery #128
            </div>
          </div>
          <div className="mt-4 flex justify-between px-1.5">
            <div className="text-[12.5px] font-semibold text-accent">ETA · 24 min</div>
            <div className="text-[12.5px] font-semibold text-accent">18.2 km optimized route</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}