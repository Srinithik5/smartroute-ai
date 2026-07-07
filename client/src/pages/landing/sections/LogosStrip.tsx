import { TRUST_METRICS } from '@/data/landing';
import { Container } from '@/components/ui';

export function LogosStrip() {
  return (
    <div className="border-y border-[#eceef2] px-6 py-7 md:px-12">
      <Container className="flex flex-wrap items-center justify-between gap-5 !px-0">
        <span className="text-[12.5px] font-semibold tracking-[0.04em] text-[#8a92a3]">
          TRUSTED BY OPERATIONS TEAMS MANAGING
        </span>
        {TRUST_METRICS.map((metric) => (
          <span key={metric} className="text-sm font-bold text-[#3d4454]">
            {metric}
          </span>
        ))}
      </Container>
    </div>
  );
}