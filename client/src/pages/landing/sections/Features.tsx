import { FEATURES } from '@/data/landing';
import { Container, Card, Eyebrow } from '@/components/ui';

export function Features() {
  return (
    <div id="features" className="py-24">
      <Container>
        <div className="mx-auto mb-16 max-w-[640px] text-center">
          <Eyebrow>PLATFORM</Eyebrow>
          <h2 className="m-0 mb-4 text-[32px] font-extrabold tracking-[-0.02em] text-[#0b0d17] sm:text-[38px]">
            Everything your fleet needs, in one place
          </h2>
          <p className="m-0 text-base leading-relaxed text-[#6b7280]">
            From first mile to last mile — plan, optimize, and deliver with intelligence built in.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <Card key={feature.title} hoverElevate className="cursor-default">
              <div className="mb-5 flex h-[46px] w-[46px] items-center justify-center rounded-xl bg-brand-accent">
                <div
                  className="h-[18px] w-[18px] bg-brand-primary"
                  style={{ borderRadius: feature.shape }}
                />
              </div>
              <h3 className="m-0 mb-2.5 text-[18px] font-bold text-[#0b0d17]">{feature.title}</h3>
              <p className="m-0 text-[14.5px] leading-relaxed text-[#6b7280]">{feature.desc}</p>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}