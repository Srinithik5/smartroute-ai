import { FOOTER_COLUMNS } from '@/data/landing';
import { Container, Logo } from '@/components/ui';

export function Footer() {
  return (
    <div className="border-t border-[#eceef2] px-6 pb-8 pt-14 md:px-12">
      <Container className="grid grid-cols-1 gap-8 !px-0 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Logo size={28} labelClassName="text-base" className="mb-3.5" />
          <p className="m-0 max-w-[260px] text-[13.5px] leading-relaxed text-[#8a92a3]">
            Intelligent logistics and route optimization for modern supply chains.
          </p>
        </div>
        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title}>
            <div className="mb-3.5 text-[13px] font-bold text-[#0b0d17]">{col.title}</div>
            {col.links.map((link) => (
              <div key={link} className="mb-2.5 text-[13.5px] text-[#6b7280]">
                {link}
              </div>
            ))}
          </div>
        ))}
      </Container>
      <Container className="mt-10 !px-0 border-t border-[#eceef2] pt-6 text-[12.5px] text-[#8a92a3]">
        © 2026 SmartRoute AI. All rights reserved.
      </Container>
    </div>
  );
}