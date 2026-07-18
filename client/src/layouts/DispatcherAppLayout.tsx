import { AppShellProvider } from '@/contexts/AppShellContext';
import { AppShellLayout } from '@/components/layout/AppShellLayout';
import { DISPATCHER_NAV_ITEMS } from '@/constants/navigation';
import { CURRENT_USER_BY_ROLE } from '@/constants/users';

export function DispatcherAppLayout() {
  return (
    <AppShellProvider
      role="dispatcher"
      user={CURRENT_USER_BY_ROLE.dispatcher}
      navItems={DISPATCHER_NAV_ITEMS}
    >
      <AppShellLayout />
    </AppShellProvider>
  );
}