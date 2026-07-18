import { useNavigate } from 'react-router-dom';
import { useAppShell } from '@/contexts/AppShellContext';
import { ROUTES } from '@/constants/routes';
import { cn } from '@/utils/cn';

interface TopbarProps {
  pageTitle: string;
}

export function Topbar({ pageTitle }: TopbarProps) {
  const { isMobile, toggleMobileDrawer, user, role } = useAppShell();
  const navigate = useNavigate();

  const notificationsPath = role === 'merchant' ? ROUTES.merchant.notifications : ROUTES.app.notifications;
  const profilePath = role === 'merchant' ? ROUTES.merchant.profile : ROUTES.app.profile;

  return (
    <div
      className={cn(
        'flex h-16 flex-shrink-0 items-center justify-between border-b border-border',
        isMobile ? 'px-3.5' : 'px-7',
      )}
    >
      <div className="flex min-w-0 items-center gap-3">
        {isMobile && (
          <button
            aria-label="Open navigation"
            onClick={toggleMobileDrawer}
            className="flex h-9 w-9 flex-shrink-0 flex-col items-center justify-center gap-[3px] rounded-[10px] bg-surface"
          >
            <span className="h-0.5 w-4 rounded-full bg-primary" />
            <span className="h-0.5 w-4 rounded-full bg-primary" />
            <span className="h-0.5 w-4 rounded-full bg-primary" />
          </button>
        )}
        <div
          className={cn(
            'overflow-hidden text-ellipsis whitespace-nowrap font-extrabold tracking-tight text-ink',
            isMobile ? 'text-[15.5px]' : 'text-lg',
          )}
        >
          {pageTitle}
        </div>
      </div>

      <div className={cn('flex flex-shrink-0 items-center', isMobile ? 'gap-2' : 'gap-3.5')}>
        {!isMobile && (
          <div className="flex w-[260px] items-center gap-2 rounded-[10px] bg-surface px-3.5 py-[9px]">
            <div className="h-[13px] w-[13px] flex-shrink-0 rounded-full border-2 border-subtle" />
            <span className="text-[13.5px] text-subtle">Search deliveries, vehicles…</span>
          </div>
        )}
        <button
          aria-label="Notifications"
          onClick={() => navigate(notificationsPath)}
          className="relative flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-[10px] bg-surface"
        >
          <div className="h-[15px] w-[15px] rounded-t-[6px] rounded-b-sm border-2 border-body" />
          <div className="absolute right-[9px] top-2 h-2 w-2 rounded-full border-2 border-background bg-primary" />
        </button>
        <button
          aria-label="AI Assistant"
          className="flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-[10px] bg-accent transition-transform duration-150 hover:scale-105"
        >
          <div className="h-3.5 w-3.5 rounded-sm bg-primary" />
        </button>
        <button
          aria-label="Profile"
          onClick={() => navigate(profilePath)}
          className="flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-full bg-primary text-[13px] font-extrabold text-accent"
        >
          {user.initials}
        </button>
      </div>
    </div>
  );
}