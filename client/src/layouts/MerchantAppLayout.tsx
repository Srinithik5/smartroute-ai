import { AppShellProvider } from '@/contexts/AppShellContext';
import { AppShellLayout } from '@/components/layout/AppShellLayout';
import { MERCHANT_NAV_ITEMS } from '@/constants/navigation';
import { CURRENT_USER_BY_ROLE } from '@/constants/users';

export function MerchantAppLayout() {
  return (
    <AppShellProvider
      role="merchant"
      user={CURRENT_USER_BY_ROLE.merchant}
      navItems={MERCHANT_NAV_ITEMS}
    >
      <AppShellLayout />
    </AppShellProvider>
  );
}