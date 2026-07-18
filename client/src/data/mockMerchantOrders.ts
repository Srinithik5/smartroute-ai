import type { MerchantOrder, MerchantOrderView } from '@/types/order';
import { ORDER_STATUS_STYLE, PENDING_AI_ASSESSMENT_BADGE } from '@/constants/orderStatus';

export const MOCK_MERCHANT_ORDERS: MerchantOrder[] = [
  { id: 'SR-20144', customer: 'Nikhil Bansal', pickup: '14 Cannon St, Newark, NJ', destination: '220 5th Ave, New York, NY', packageType: 'Parcel', packageCategory: 'Electronics', status: 'Draft', createdTime: 'Today, 8:12 AM' },
  { id: 'SR-20145', customer: 'Sunita Rao', pickup: '77 Bloomfield Ave, Newark, NJ', destination: '410 Ocean Ave, Jersey City, NJ', packageType: 'Parcel', packageCategory: 'Apparel', status: 'Active', createdTime: 'Today, 9:05 AM' },
  { id: 'SR-20146', customer: 'George Abraham', pickup: '9 Ferry St, Newark, NJ', destination: '58 Willow St, Brooklyn, NY', packageType: 'Pallet', packageCategory: 'Home Appliances', status: 'Active', createdTime: 'Today, 9:40 AM' },
  { id: 'SR-20147', customer: 'Meenal Deshpande', pickup: '201 Broad St, Newark, NJ', destination: '12 Bergen Ave, Jersey City, NJ', packageType: 'Document', packageCategory: 'Documents', status: 'Completed', createdTime: 'Yesterday, 4:20 PM' },
  { id: 'SR-20148', customer: 'Omar Farouk', pickup: '55 Market St, Newark, NJ', destination: '901 Grand St, Hoboken, NJ', packageType: 'Parcel', packageCategory: 'Medical Supplies', status: 'Completed', createdTime: 'Yesterday, 2:05 PM' },
  { id: 'SR-20149', customer: 'Lena Novak', pickup: '3 Raymond Blvd, Newark, NJ', destination: '77 Wall St, Manhattan, NY', packageType: 'Parcel', packageCategory: 'Electronics', status: 'Cancelled', createdTime: 'Jul 4, 11:10 AM' },
  { id: 'SR-20150', customer: 'Tariq Malik', pickup: '18 Mulberry St, Newark, NJ', destination: '300 Boulevard E, Weehawken, NJ', packageType: 'Parcel', packageCategory: 'Perishables', status: 'Draft', createdTime: 'Today, 10:02 AM' },
  { id: 'SR-20151', customer: 'Claire Dubois', pickup: '400 Springfield Ave, Newark, NJ', destination: '145 4th Ave, Brooklyn, NY', packageType: 'Parcel', packageCategory: 'Apparel', status: 'Active', createdTime: 'Today, 10:35 AM' },
];

export const MOCK_MERCHANT_ORDERS_VIEW: MerchantOrderView[] = MOCK_MERCHANT_ORDERS.map((order) => {
  const style = ORDER_STATUS_STYLE[order.status];
  return {
    ...order,
    statusBg: style.bg,
    statusColor: style.color,
    priorityLabel: PENDING_AI_ASSESSMENT_BADGE.label,
    priorityBg: PENDING_AI_ASSESSMENT_BADGE.bg,
    priorityColor: PENDING_AI_ASSESSMENT_BADGE.color,
  };
});

export const MERCHANT_DRAFT_COUNT = MOCK_MERCHANT_ORDERS.filter((o) => o.status === 'Draft').length;
export const MERCHANT_ACTIVE_COUNT = MOCK_MERCHANT_ORDERS.filter((o) => o.status === 'Active').length;
export const MERCHANT_COMPLETED_COUNT = MOCK_MERCHANT_ORDERS.filter((o) => o.status === 'Completed').length;

// The prototype hardcodes this tile's value as a static literal (not derived from order data).
export const MERCHANT_PENDING_WAREHOUSE_INTAKE = 3;