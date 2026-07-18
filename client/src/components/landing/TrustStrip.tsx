import { TRUST_METRICS } from '@/constants/landingContent';

export function TrustStrip() {
  return (
    <div className="border-y border-border px-12 py-7">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-5">
        <span className="text-[12.5px] font-semibold tracking-[0.04em] text-subtle">
          TRUSTED BY OPERATIONS TEAMS MANAGING
        </span>
        {TRUST_METRICS.map((metric) => (
          <span key={metric} className="text-sm font-bold text-body">
            {metric}
          </span>
        ))}
      </div>
    </div>
  );
}