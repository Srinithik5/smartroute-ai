import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';

export function Cta() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto mb-24 max-w-[1280px] px-12">
      <div className="relative overflow-hidden rounded-[28px] bg-primary p-[72px_48px] text-center">
        <div className="absolute -right-[60px] -top-[60px] h-[220px] w-[220px] rounded-full bg-accent/[0.08]" />
        <h2 className="relative mb-4 text-[36px] font-extrabold tracking-[-0.02em] text-background">
          Ready to optimize your fleet?
        </h2>
        <p className="relative mb-8 text-base text-navy-subtle">
          Join operations teams already saving hours and fuel every day.
        </p>
        <button
          onClick={() => navigate(ROUTES.app.dashboard)}
          className="relative cursor-pointer rounded-[11px] border-none bg-accent px-8 py-4 text-[15.5px] font-extrabold text-primary"
        >
          Get Started Free →
        </button>
      </div>
    </div>
  );
}