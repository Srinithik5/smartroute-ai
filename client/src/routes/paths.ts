/**
 * Central route path registry. Import these constants instead of writing
 * raw path strings so the route map can change shape without a find/replace.
 */
export const PATHS = {
  landing: '/',
  login: '/login',
  register: '/register',
  app: {
    root: '/app',
    dashboard: '/app/dashboard',
    routeOptimization: '/app/route-optimization',
    driver: '/app/driver',
    deliveries: '/app/deliveries',
    vehicles: '/app/vehicles',
    warehouse: '/app/warehouse',
    analytics: '/app/analytics',
    reports: '/app/reports',
    notifications: '/app/notifications',
    help: '/app/help',
    profile: '/app/profile',
    settings: '/app/settings',
  },
} as const;