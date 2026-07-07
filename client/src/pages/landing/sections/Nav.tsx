import { useNavigate } from 'react-router-dom';
import { Logo } from '@/components/ui';
import { PATHS } from '@/routes/paths';

const NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#workflow', label: 'How it Works' },
  { href: '#faq', label: 'FAQ' },
];

export function Nav() {
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 z-40 flex items-center justify-between border-b border-[#eceef2] bg-brand-background/90 px-6 py-[18px] backdrop-blur-md md:px-12">
      <Logo size={34} labelClassName="text-[18px]" />

      <div className="hidden items-center gap-9 md:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-[14.5px] font-medium text-[#3d4454] no-underline"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate(PATHS.login)}
          className="cursor-pointer border-none bg-transparent px-4 py-2.5 text-[14.5px] font-semibold text-brand-primary"
        >
          Log in
        </button>
        <button
          onClick={() => navigate(PATHS.app.dashboard)}
          className="cursor-pointer rounded-[9px] border-none bg-brand-primary px-[22px] py-[11px] text-[14.5px] font-semibold text-brand-background transition-colors duration-150 hover:bg-[#0000a8]"
        >
          Get Started →
        </button>
      </div>
    </div>
  );
}