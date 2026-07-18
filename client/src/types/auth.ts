export type AuthRoleKey =
  | 'merchant'
  | 'dispatcher'
  | 'warehouse-manager'
  | 'driver'
  | 'administrator';

export interface AuthRoleOption {
  key: AuthRoleKey;
  label: string;
}

export type PasswordStrengthLevel = 'weak' | 'fair' | 'good' | 'strong';

export interface PasswordStrengthResult {
  score: number;
  level: PasswordStrengthLevel;
}

export type AuthStatus = 'idle' | 'loading' | 'error' | 'success';