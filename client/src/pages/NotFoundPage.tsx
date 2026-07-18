import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { cn } from '@/utils/cn';

interface NotFoundPageProps {
  backTo?: string;
  fillViewport?: boolean;
}

export function NotFoundPage({ backTo = ROUTES.app.dashboard, fillViewport = false }: NotFoundPageProps) {
  const navigate = useNavigate();

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center px-[60px] py-16 text-center',
        fillViewport ? 'min-h-screen' : 'h-full',
      )}
    >
      <div className="mb-3 text-[72px] font-black tracking-[-0.03em] text-primary">404</div>
      <div className="mb-2 text-lg font-bold text-ink">Route not found</div>
      <p className="mb-7 text-sm text-muted">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={() => navigate(backTo)}
        className="cursor-pointer rounded-[10px] border-none bg-primary px-6 py-[13px] text-sm font-bold text-background"
      >
        Back to Dashboard
      </button>
    </div>
  );
}