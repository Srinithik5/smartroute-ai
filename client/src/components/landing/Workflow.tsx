import { WORKFLOW_STEPS } from '@/constants/landingContent';

export function Workflow() {
  return (
    <div id="workflow" className="bg-primary px-12 py-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto mb-16 max-w-[640px] text-center">
          <div className="mb-3 text-[13px] font-bold tracking-[0.06em] text-accent">
            WORKFLOW
          </div>
          <h2 className="text-[38px] font-extrabold tracking-[-0.02em] text-background">
            From order to doorstep in four steps
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {WORKFLOW_STEPS.map((w) => (
            <div
              key={w.n}
              className="rounded-2xl border border-white/[0.12] bg-white/[0.06] p-[26px]"
            >
              <div className="mb-4 text-[34px] font-black text-accent">{w.n}</div>
              <h4 className="mb-2 text-[16.5px] font-bold text-background">{w.title}</h4>
              <p className="text-[13.5px] leading-[1.55] text-navy-subtle">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}