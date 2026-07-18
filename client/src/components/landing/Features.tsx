import { FEATURES } from '@/constants/landingContent';

export function Features() {
  return (
    <div id="features" className="mx-auto max-w-[1280px] px-12 py-24">
      <div className="mx-auto mb-16 max-w-[640px] text-center">
        <div className="mb-3 text-[13px] font-bold tracking-[0.06em] text-primary">PLATFORM</div>
        <h2 className="mb-4 text-[38px] font-extrabold tracking-[-0.02em] text-ink">
          Everything your fleet needs, in one place
        </h2>
        <p className="text-base leading-relaxed text-muted">
          From first mile to last mile — plan, optimize, and deliver with intelligence built in.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="cursor-default rounded-[18px] border border-border bg-background p-[30px] transition-all duration-200 hover:-translate-y-1 hover:shadow-brand-hover"
          >
            <div className="mb-5 flex h-[46px] w-[46px] items-center justify-center rounded-xl bg-accent">
              <div
                className="h-[18px] w-[18px] bg-primary"
                style={{ borderRadius: f.shape }}
              />
            </div>
            <h3 className="mb-2.5 text-lg font-bold text-ink">{f.title}</h3>
            <p className="text-[14.5px] leading-relaxed text-muted">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}