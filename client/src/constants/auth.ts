import { ROUTES } from '@/constants/routes';
import type { AuthRoleKey, AuthRoleOption } from '@/types/auth';

export const AUTH_ROLE_OPTIONS: AuthRoleOption[] = [
  { key: 'merchant', label: 'Merchant' },
  { key: 'dispatcher', label: 'Dispatcher' },
  { key: 'warehouse-manager', label: 'Warehouse Manager' },
  { key: 'driver', label: 'Driver' },
  { key: 'administrator', label: 'Administrator' },
];

export const AUTH_ROLE_LANDING_ROUTE: Record<AuthRoleKey, string> = {
  merchant: ROUTES.merchant.dashboard,
  dispatcher: ROUTES.app.dashboard,
  'warehouse-manager': ROUTES.app.warehouse,
  driver: ROUTES.app.driver,
  administrator: ROUTES.app.dashboard,
};

// Mock-only trigger values for demonstrating the Error state UI without a backend.
export const MOCK_LOGIN_FAILURE_EMAIL = 'fail@smartroute.ai';
export const MOCK_REGISTER_EXISTS_EMAIL = 'exists@smartroute.ai';
export const MOCK_FORGOT_PASSWORD_NOT_FOUND_EMAIL = 'notfound@smartroute.ai';

export const MOCK_AUTH_DELAY_MS = 900;
export const MOCK_AUTH_SUCCESS_HOLD_MS = 600;