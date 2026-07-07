import { TESTIMONIALS } from '@/data/landing';
import { Container, Eyebrow } from '@/components/ui';

export function Testimonials() {
  return (
    <div className="bg-[#F7FAF9] px-6 py-24 md:px-12">
      <Container className="!px-0">
        <div className="mx-auto mb-14 max-w-[640px] text-center">
          <Eyebrow>TESTIMONIALS</Eyebrow>
          <h2 className="m-0 text-[32px] font-extrabold tracking-[-0.02em] text-[#0b0d17] sm:text-[38px]">
            Operations leaders trust SmartRoute
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl border border-[#eceef2] bg-brand-background p-[30px]"
            >
              <div className="mb-3.5 text-xl tracking-[2px] text-brand-primary">★★★★★</div>
              <p className="m-0 mb-[22px] text-[15px] leading-[1.65] text-[#3d4454]">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-brand-accent text-sm font-bold text-brand-primary">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0b0d17]">{testimonial.name}</div>
                  <div className="text-[12.5px] text-[#8a92a3]">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}