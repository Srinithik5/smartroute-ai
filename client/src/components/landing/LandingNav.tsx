import { useNavigate } from 'react-router-dom';
import { Logo } from '@/components/ui/Logo';
import { ROUTES } from '@/constants/routes';

export function LandingNav() {
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-background/90 px-12 py-[18px] backdrop-blur-[10px]">
      <Logo size={34} labelClassName="text-lg" />
      <div className="flex items-center gap-9">
        <a href="#features" className="text-[14.5px] font-medium text-body no-underline">
          Features
        </a>
        <a href="#workflow" className="text-[14.5px] font-medium text-body no-underline">
          How it Works
        </a>
        <a href="#faq" className="text-[14.5px] font-medium text-body no-underline">
          FAQ
        </a>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate(ROUTES.login)}
          className="cursor-pointer border-none bg-transparent px-4 py-2.5 text-[14.5px] font-semibold text-primary"
        >
          Log in
        </button>
        <button
          onClick={() => navigate(ROUTES.app.dashboard)}
          className="cursor-pointer rounded-[9px] border-none bg-primary px-[22px] py-[11px] text-[14.5px] font-semibold text-background transition-colors duration-150 hover:bg-primary-hover"
        >
          Get Started →
        </button>
      </div>
    </div>
  );
}