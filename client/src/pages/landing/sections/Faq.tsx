import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FAQS } from '@/data/landing';
import { Eyebrow } from '@/components/ui';

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div id="faq" className="mx-auto max-w-[840px] px-6 py-24 md:px-12">
      <div className="mb-14 text-center">
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="m-0 text-[32px] font-extrabold tracking-[-0.02em] text-[#0b0d17] sm:text-[38px]">
          Frequently asked questions
        </h2>
      </div>
      {FAQS.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={faq.question}
            onClick={() => setOpenIndex(isOpen ? null : index)}
            className="cursor-pointer border-b border-[#eceef2] px-1 py-[22px]"
          >
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold text-[#0b0d17]">{faq.question}</span>
              <span
                className="text-xl font-normal text-brand-primary transition-transform duration-200"
                style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
              >
                +
              </span>
            </div>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="m-0 mt-3.5 max-w-[680px] overflow-hidden text-[14.5px] leading-[1.65] text-[#6b7280]"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}