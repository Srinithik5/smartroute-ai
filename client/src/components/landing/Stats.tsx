import { BIG_STATS } from '@/constants/landingContent';

export function Stats() {
  return (
    <div className="mx-auto grid max-w-[1280px] grid-cols-4 gap-6 px-12 py-[88px] text-center">
      {BIG_STATS.map((s) => (
        <div key={s.label}>
          <div className="text-[44px] font-black tracking-[-0.02em] text-primary">{s.value}</div>
          <div className="mt-1.5 text-sm font-medium text-muted">{s.label}</div>
        </div>
      ))}
    </div>
  );
}