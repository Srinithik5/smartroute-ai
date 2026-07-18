import { Logo } from '@/components/ui/Logo';
import { FOOTER_COLUMNS } from '@/constants/landingContent';

export function Footer() {
  return (
    <div className="border-t border-border px-12 pb-8 pt-14">
      <div className="mx-auto grid max-w-[1280px] grid-cols-[1.4fr_repeat(3,1fr)] gap-8">
        <div>
          <Logo size={28} labelClassName="text-base" className="mb-3.5" />
          <p className="max-w-[260px] text-[13.5px] leading-relaxed text-subtle">
            Intelligent logistics and route optimization for modern supply chains.
          </p>
        </div>
        <div>
          <div className="mb-3.5 text-[13px] font-bold text-ink">Customer</div>
          <div className="cursor-pointer text-[13.5px] font-bold text-primary">
            Track your delivery →
          </div>
        </div>
        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title}>
            <div className="mb-3.5 text-[13px] font-bold text-ink">{col.title}</div>
            {col.links.map((link) => (
              <div key={link} className="mb-2.5 text-[13.5px] text-muted">
                {link}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="mx-auto mt-10 max-w-[1280px] border-t border-border pt-6 text-[12.5px] text-subtle">
        © 2026 SmartRoute AI. All rights reserved.
      </div>
    </div>
  );
}