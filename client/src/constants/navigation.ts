import type { NavItemDef } from '@/types/navigation';
import { ROUTES } from '@/constants/routes';

export const DISPATCHER_NAV_ITEMS: NavItemDef[] = [
  { key: 'dashboard', label: 'Dashboard', path: ROUTES.app.dashboard },
  { key: 'route', label: 'Route Optimization', path: ROUTES.app.route },
  { key: 'driver', label: 'Driver View', path: ROUTES.app.driver },
  { key: 'deliveries', label: 'Delivery Management', path: ROUTES.app.deliveries },
  { key: 'vehicles', label: 'Vehicle Management', path: ROUTES.app.vehicles },
  { key: 'warehouse', label: 'Warehouse Management', path: ROUTES.app.warehouse },
  { key: 'ai-priority-engine', label: 'AI Priority Engine', path: ROUTES.app.aiPriorityEngine },
  { key: 'assignment-center', label: 'Assignment Center', path: ROUTES.app.assignmentCenter },
  { key: 'ops-center', label: 'Live Operations Center', path: ROUTES.app.opsCenter },
  { key: 'analytics', label: 'Analytics', path: ROUTES.app.analytics },
  { key: 'reports', label: 'Reports', path: ROUTES.app.reports },
  { key: 'notifications', label: 'Notifications', path: ROUTES.app.notifications },
  { key: 'help', label: 'Help Center', path: ROUTES.app.help },
];

export const MERCHANT_NAV_ITEMS: NavItemDef[] = [
  { key: 'merchant-dashboard', label: 'Dashboard', path: ROUTES.merchant.dashboard },
  { key: 'create-delivery', label: 'Create Delivery Request', path: ROUTES.merchant.createDelivery },
  { key: 'orders', label: 'Orders', path: ROUTES.merchant.orders },
  { key: 'draft-orders', label: 'Draft Orders', path: ROUTES.merchant.draftOrders },
  { key: 'active-orders', label: 'Active Orders', path: ROUTES.merchant.activeOrders },
  { key: 'completed-orders', label: 'Completed Orders', path: ROUTES.merchant.completedOrders },
  { key: 'cancelled-orders', label: 'Cancelled Orders', path: ROUTES.merchant.cancelledOrders },
  { key: 'notifications', label: 'Notifications', path: ROUTES.merchant.notifications },
  { key: 'help', label: 'Help & Support', path: ROUTES.merchant.help },
];

export const PAGE_TITLES: Record<string, string> = {
  dashboard: 'Operations Dashboard',
  route: 'Route Optimization',
  driver: 'Driver Dashboard',
  deliveries: 'Delivery Management',
  vehicles: 'Vehicle Management',
  warehouse: 'Warehouse Management',
  'ai-priority-engine': 'AI Priority Engine',
  'assignment-center': 'Assignment & Fleet Control Center',
  'ops-center': 'Live Operations Control Center',
  analytics: 'Analytics',
  reports: 'Reports',
  notifications: 'Notifications',
  help: 'Help Center',
  profile: 'Profile',
  'merchant-dashboard': 'Merchant Dashboard',
  'create-delivery': 'Create Delivery Request',
  orders: 'Orders',
  'draft-orders': 'Draft Orders',
  'active-orders': 'Active Orders',
  'completed-orders': 'Completed Orders',
  'cancelled-orders': 'Cancelled Orders',
  notfound: 'Page Not Found',
};

export const MOBILE_BREAKPOINT_PX = 860;