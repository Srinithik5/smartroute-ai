import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';

import { LandingPage } from '@/pages/LandingPage';
import { LoginPage } from '@/pages/auth/LoginPage';
import { RegisterPage } from '@/pages/auth/RegisterPage';
import { ForgotPasswordPage } from '@/pages/auth/ForgotPasswordPage';
import { ResetPasswordPage } from '@/pages/auth/ResetPasswordPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

import { DispatcherAppLayout } from '@/layouts/DispatcherAppLayout';
import { MerchantAppLayout } from '@/layouts/MerchantAppLayout';

import { DashboardPage } from '@/pages/dispatcher/DashboardPage';
import { RouteOptimizationPage } from '@/pages/dispatcher/RouteOptimizationPage';
import { DriverViewPage } from '@/pages/dispatcher/DriverViewPage';
import { DeliveriesPage } from '@/pages/dispatcher/DeliveriesPage';
import { VehiclesPage } from '@/pages/dispatcher/VehiclesPage';
import { WarehousePage } from '@/pages/dispatcher/WarehousePage';
import { AiPriorityEnginePage } from '@/pages/dispatcher/AiPriorityEnginePage';
import { AssignmentCenterPage } from '@/pages/dispatcher/AssignmentCenterPage';
import { OpsCenterPage } from '@/pages/dispatcher/OpsCenterPage';
import { AnalyticsPage } from '@/pages/dispatcher/AnalyticsPage';
import { ReportsPage } from '@/pages/dispatcher/ReportsPage';

import { MerchantDashboardPage } from '@/pages/merchant/MerchantDashboardPage';
import { CreateDeliveryPage } from '@/pages/merchant/CreateDeliveryPage';
import { OrdersPage } from '@/pages/merchant/OrdersPage';
import { DraftOrdersPage } from '@/pages/merchant/DraftOrdersPage';
import { ActiveOrdersPage } from '@/pages/merchant/ActiveOrdersPage';
import { CompletedOrdersPage } from '@/pages/merchant/CompletedOrdersPage';
import { CancelledOrdersPage } from '@/pages/merchant/CancelledOrdersPage';

import { NotificationsPage } from '@/pages/shared/NotificationsPage';
import { HelpCenterPage } from '@/pages/shared/HelpCenterPage';
import { ProfilePage } from '@/pages/shared/ProfilePage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.landing} element={<LandingPage />} />
      <Route path={ROUTES.login} element={<LoginPage />} />
      <Route path={ROUTES.register} element={<RegisterPage />} />
      <Route path={ROUTES.forgotPassword} element={<ForgotPasswordPage />} />
      <Route path={ROUTES.resetPassword} element={<ResetPasswordPage />} />

      <Route path={ROUTES.app.root} element={<DispatcherAppLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="route" element={<RouteOptimizationPage />} />
        <Route path="driver" element={<DriverViewPage />} />
        <Route path="deliveries" element={<DeliveriesPage />} />
        <Route path="vehicles" element={<VehiclesPage />} />
        <Route path="warehouse" element={<WarehousePage />} />
        <Route path="ai-priority-engine" element={<AiPriorityEnginePage />} />
        <Route path="assignment-center" element={<AssignmentCenterPage />} />
        <Route path="ops-center" element={<OpsCenterPage />} />
        <Route path="analytics" element={<AnalyticsPage />} />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="notifications" element={<NotificationsPage />} />
        <Route path="help" element={<HelpCenterPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage backTo={ROUTES.app.dashboard} />} />
      </Route>

      <Route path={ROUTES.merchant.root} element={<MerchantAppLayout />}>
        <Route index element={<MerchantDashboardPage />} />
        <Route path="merchant-dashboard" element={<MerchantDashboardPage />} />
        <Route path="create-delivery" element={<CreateDeliveryPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="draft-orders" element={<DraftOrdersPage />} />
        <Route path="active-orders" element={<ActiveOrdersPage />} />
        <Route path="completed-orders" element={<CompletedOrdersPage />} />
        <Route path="cancelled-orders" element={<CancelledOrdersPage />} />
        <Route path="notifications" element={<NotificationsPage />} />
        <Route path="help" element={<HelpCenterPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage backTo={ROUTES.merchant.dashboard} />} />
      </Route>

      <Route path="*" element={<NotFoundPage fillViewport backTo={ROUTES.landing} />} />
    </Routes>
  );
}