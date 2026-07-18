import type { CurrentUser, UserRole } from '@/types/role';

export const CURRENT_USER_BY_ROLE: Record<UserRole, CurrentUser> = {
  dispatcher: { name: 'Arjun Kapoor', role: 'Dispatcher', initials: 'AK' },
  merchant: { name: 'Devansh Mehta', role: 'Merchant', initials: 'DM' },
};