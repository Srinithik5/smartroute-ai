export type UserRole = 'dispatcher' | 'merchant';

export interface CurrentUser {
  name: string;
  role: 'Dispatcher' | 'Merchant';
  initials: string;
}