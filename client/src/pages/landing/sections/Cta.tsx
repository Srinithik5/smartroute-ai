import { useNavigate } from 'react-router-dom';
import { PATHS } from '@/routes/paths';
import { Container } from '@/components/ui';

export function Cta() {
  const navigate = useNavigate();

  return (
    <Container className="mb-24">
      <div className="relative overflow-hidden rounded-[28px] bg-brand-primary px-6 py-[72px] text-center md:px-12">
        <div className="absolute -right-[60px] -top-[60px] h-[220px] w-[220px] rounded-full bg-[rgba(229,252,245,0.08)]" />
        <h2 className="relative m-0 mb-4 text-[28px] font-extrabold tracking-[-0.02em] text-brand-background sm:text-[36px]">
          Ready to optimize your fleet?
        </h2>
        <p className="relative m-0 mb-8 text-base text-[#c7cbe0]">
          Join operations teams already saving hours and fuel every day.
        </p>
        <button
          onClick={() => navigate(PATHS.app.dashboard)}
          className="relative cursor-pointer rounded-[11px] border-none bg-brand-accent px-8 py-4 text-[15.5px] font-extrabold text-brand-primary"
        >
          Get Started Free →
        </button>
      </div>
    </Container>
  );
}