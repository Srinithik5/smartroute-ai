import { TESTIMONIALS } from '@/constants/landingContent';

export function Testimonials() {
  return (
    <div className="bg-surface-alt px-12 py-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto mb-14 max-w-[640px] text-center">
          <div className="mb-3 text-[13px] font-bold tracking-[0.06em] text-primary">
            TESTIMONIALS
          </div>
          <h2 className="text-[38px] font-extrabold tracking-[-0.02em] text-ink">
            Operations leaders trust SmartRoute
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="rounded-[18px] border border-border bg-background p-[30px]">
              <div className="mb-3.5 text-xl tracking-[2px] text-primary">★★★★★</div>
              <p className="mb-[22px] text-[15px] leading-[1.65] text-body">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-accent text-sm font-bold text-primary">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-ink">{t.name}</div>
                  <div className="text-[12.5px] text-subtle">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}