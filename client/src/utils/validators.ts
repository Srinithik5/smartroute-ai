import type { PasswordStrengthLevel, PasswordStrengthResult } from '@/types/auth';

export const PASSWORD_MIN_LENGTH = 8;

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function isValidPhone(value: string): boolean {
  return /^[+]?[\d\s().-]{7,20}$/.test(value.trim());
}

export function isValidPassword(value: string): boolean {
  return value.length >= PASSWORD_MIN_LENGTH;
}

export function passwordsMatch(a: string, b: string): boolean {
  return a.length > 0 && a === b;
}

export function getPasswordStrength(value: string): PasswordStrengthResult {
  let score = 0;
  if (value.length >= 8) score += 1;
  if (value.length >= 12) score += 1;
  if (/[A-Z]/.test(value) && /[a-z]/.test(value)) score += 1;
  if (/\d/.test(value)) score += 1;
  if (/[^A-Za-z0-9]/.test(value)) score += 1;

  const clamped = Math.min(score, 4);
  const levels: PasswordStrengthLevel[] = ['weak', 'weak', 'fair', 'good', 'strong'];
  return { score: clamped, level: levels[clamped] };
}