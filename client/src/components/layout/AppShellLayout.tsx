import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from '@/components/layout/Sidebar';
import { Topbar } from '@/components/layout/Topbar';
import { PAGE_TITLES } from '@/constants/navigation';

export function AppShellLayout() {
  const location = useLocation();
  const segment = location.pathname.split('/').filter(Boolean).pop() ?? '';
  const pageTitle = PAGE_TITLES[segment] ?? 'Page Not Found';

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col bg-background">
        <Topbar pageTitle={pageTitle} />
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}