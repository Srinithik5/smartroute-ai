import { BIG_STATS } from '@/data/landing';
import { Container } from '@/components/ui';

export function Stats() {
  return (
    <Container className="grid grid-cols-2 gap-6 py-[88px] text-center lg:grid-cols-4">
      {BIG_STATS.map((stat) => (
        <div key={stat.label}>
          <div className="text-[32px] font-black tracking-[-0.02em] text-brand-primary sm:text-[44px]">
            {stat.value}
          </div>
          <div className="mt-1.5 text-sm font-medium text-[#6b7280]">{stat.label}</div>
        </div>
      ))}
    </Container>
  );
}