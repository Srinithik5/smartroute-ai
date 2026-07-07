import { useNavigate } from 'react-router-dom';
import { PATHS } from '@/routes/paths';
import { Button } from '@/components/ui';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="flex h-full flex-col items-center justify-center p-[60px]">
      <div className="mb-3 text-[72px] font-black tracking-[-0.03em] text-brand-primary">404</div>
      <div className="mb-2 text-lg font-bold text-[#0b0d17]">Route not found</div>
      <p className="m-0 mb-7 text-sm text-[#6b7280]">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button onClick={() => navigate(PATHS.app.dashboard)}>
        Back to Dashboard
      </Button>
    </div>
  );
}