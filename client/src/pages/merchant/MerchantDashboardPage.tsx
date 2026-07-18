import { motion } from 'framer-motion';
import { PageContainer } from '@/components/layout/PageContainer';
import { DashboardStatCard } from '@/components/dashboard/DashboardStatCard';
import { RecentOrdersCard } from '@/components/dashboard/RecentOrdersCard';
import { CreateDeliveryCtaCard } from '@/components/dashboard/CreateDeliveryCtaCard';
import { ShippingTipsCard } from '@/components/dashboard/ShippingTipsCard';
import {
  MOCK_MERCHANT_ORDERS_VIEW,
  MERCHANT_DRAFT_COUNT,
  MERCHANT_ACTIVE_COUNT,
  MERCHANT_COMPLETED_COUNT,
  MERCHANT_PENDING_WAREHOUSE_INTAKE,
} from '@/data/mockMerchantOrders';

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

export function MerchantDashboardPage() {
  const recentOrders = MOCK_MERCHANT_ORDERS_VIEW.slice(0, 5);

  return (
    <PageContainer>
      <motion.div
        initial="initial"
        animate="animate"
        variants={fadeUp}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="mb-6 grid grid-cols-1 gap-[18px] sm:grid-cols-2 xl:grid-cols-4"
      >
        <DashboardStatCard label="DRAFT ORDERS" value={MERCHANT_DRAFT_COUNT} />
        <DashboardStatCard label="ACTIVE ORDERS" value={MERCHANT_ACTIVE_COUNT} />
        <DashboardStatCard label="COMPLETED THIS MONTH" value={MERCHANT_COMPLETED_COUNT} />
        <DashboardStatCard
          label="PENDING WAREHOUSE INTAKE"
          value={MERCHANT_PENDING_WAREHOUSE_INTAKE}
          variant="dark"
        />
      </motion.div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1.3fr_1fr]">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeUp}
          transition={{ duration: 0.35, delay: 0.05, ease: 'easeOut' }}
        >
          <RecentOrdersCard orders={recentOrders} />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeUp}
          transition={{ duration: 0.35, delay: 0.1, ease: 'easeOut' }}
          className="flex flex-col gap-5"
        >
          <CreateDeliveryCtaCard />
          <ShippingTipsCard />
        </motion.div>
      </div>
    </PageContainer>
  );
}