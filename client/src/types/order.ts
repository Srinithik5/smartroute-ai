export type OrderStatus = 'Draft' | 'Active' | 'Completed' | 'Cancelled';
export type PackageType = 'Parcel' | 'Document' | 'Pallet';

export interface MerchantOrder {
  id: string;
  customer: string;
  pickup: string;
  destination: string;
  packageType: PackageType;
  packageCategory: string;
  status: OrderStatus;
  createdTime: string;
}

export interface MerchantOrderView extends MerchantOrder {
  statusBg: string;
  statusColor: string;
  priorityLabel: string;
  priorityBg: string;
  priorityColor: string;
}