import type { OrderStatus } from '@/types/order';

export const ORDER_STATUS_STYLE: Record<OrderStatus, { bg: string; color: string }> = {
  Draft: { bg: '#F5F6F8', color: '#3d4454' },
  Active: { bg: '#E5FCF5', color: '#000080' },
  Completed: { bg: '#E5FCF5', color: '#000080' },
  Cancelled: { bg: '#F5F6F8', color: '#8a92a3' },
};

// Merchants never see real priority — it stays "Pending AI Assessment" until the
// warehouse verifies the package (per the canonical order lifecycle).
export const PENDING_AI_ASSESSMENT_BADGE = {
  label: 'Pending AI Assessment',
  bg: '#F5F6F8',
  color: '#8a92a3',
} as const;