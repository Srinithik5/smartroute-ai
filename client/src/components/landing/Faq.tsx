import { useState } from 'react';
import { FAQS } from '@/constants/landingContent';

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex((current) => (current === i ? null : i));

  return (
    <div id="faq" className="mx-auto max-w-[840px] px-12 py-24">
      <div className="mb-14 text-center">
        <div className="mb-3 text-[13px] font-bold tracking-[0.06em] text-primary">FAQ</div>
        <h2 className="text-[38px] font-extrabold tracking-[-0.02em] text-ink">
          Frequently asked questions
        </h2>
      </div>
      {FAQS.map((q, i) => {
        const open = openIndex === i;
        return (
          <div
            key={q.question}
            onClick={() => toggle(i)}
            className="cursor-pointer border-b border-border px-1 py-[22px]"
          >
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold text-ink">{q.question}</span>
              <span
                className="text-xl font-normal text-primary transition-transform duration-200"
                style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
              >
                +
              </span>
            </div>
            {open && (
              <p className="mt-3.5 max-w-[680px] text-[14.5px] leading-[1.65] text-muted">
                {q.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}