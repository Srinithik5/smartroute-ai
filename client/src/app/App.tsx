import { Navigate, Route, Routes } from 'react-router-dom';
import { PATHS } from '@/routes/paths';
import LandingPage from '@/pages/landing/LandingPage';
import LoginPage from '@/pages/auth/LoginPage';
import RegisterPage from '@/pages/auth/RegisterPage';
import AppLayout from '@/components/layout/AppLayout';
import DashboardPage from '@/pages/dashboard/DashboardPage';
import RouteOptimizationPage from '@/pages/route-optimization/RouteOptimizationPage';
import DriverDashboardPage from '@/pages/driver/DriverDashboardPage';
import DeliveriesPage from '@/pages/deliveries/DeliveriesPage';
import VehiclesPage from '@/pages/vehicles/VehiclesPage';
import WarehousePage from '@/pages/warehouse/WarehousePage';
import AnalyticsPage from '@/pages/analytics/AnalyticsPage';
import ReportsPage from '@/pages/reports/ReportsPage';
import NotificationsPage from '@/pages/notifications/NotificationsPage';
import HelpPage from '@/pages/help/HelpPage';
import ProfilePage from '@/pages/profile/ProfilePage';
import SettingsPage from '@/pages/settings/SettingsPage';
import NotFoundPage from '@/pages/not-found/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route path={PATHS.landing} element={<LandingPage />} />
      <Route path={PATHS.login} element={<LoginPage />} />
      <Route path={PATHS.register} element={<RegisterPage />} />

      <Route path={PATHS.app.root} element={<AppLayout />}>
        <Route index element={<Navigate to={PATHS.app.dashboard} replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="route-optimization" element={<RouteOptimizationPage />} />
        <Route path="driver" element={<DriverDashboardPage />} />
        <Route path="deliveries" element={<DeliveriesPage />} />
        <Route path="vehicles" element={<VehiclesPage />} />
        <Route path="warehouse" element={<WarehousePage />} />
        <Route path="analytics" element={<AnalyticsPage />} />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="notifications" element={<NotificationsPage />} />
        <Route path="help" element={<HelpPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      <Route path="*" element={<Navigate to={PATHS.landing} replace />} />
    </Routes>
  );
}