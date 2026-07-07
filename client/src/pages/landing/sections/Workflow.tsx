import { WORKFLOW_STEPS } from '@/data/landing';
import { Container, Eyebrow } from '@/components/ui';

export function Workflow() {
  return (
    <div id="workflow" className="bg-brand-primary px-6 py-24 md:px-12">
      <Container className="!px-0">
        <div className="mx-auto mb-16 max-w-[640px] text-center">
          <Eyebrow onDark>WORKFLOW</Eyebrow>
          <h2 className="m-0 text-[32px] font-extrabold tracking-[-0.02em] text-brand-background sm:text-[38px]">
            From order to doorstep in four steps
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WORKFLOW_STEPS.map((step) => (
            <div
              key={step.n}
              className="rounded-2xl border border-white/10 bg-white/[0.06] p-[26px]"
            >
              <div className="mb-4 text-[34px] font-black text-brand-accent">{step.n}</div>
              <h4 className="m-0 mb-2 text-[16.5px] font-bold text-brand-background">
                {step.title}
              </h4>
              <p className="m-0 text-[13.5px] leading-[1.55] text-[#c7cbe0]">{step.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}