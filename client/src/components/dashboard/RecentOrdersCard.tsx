import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import type { MerchantOrderView } from '@/types/order';

interface RecentOrdersCardProps {
  orders: MerchantOrderView[];
}

export function RecentOrdersCard({ orders }: RecentOrdersCardProps) {
  const navigate = useNavigate();

  return (
    <div className="rounded-lg border border-border bg-background p-[22px]">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-[15px] font-bold text-ink">Recent Orders</div>
        <span
          onClick={() => navigate(ROUTES.merchant.orders)}
          className="cursor-pointer text-[13px] font-semibold text-primary"
        >
          View all →
        </span>
      </div>
      {orders.map((order) => (
        <div
          key={order.id}
          className="flex items-center justify-between rounded-sm border-b border-[#f2f3f6] px-2 py-3 transition-colors duration-150 last:border-b-0 hover:bg-surface-alt"
        >
          <div>
            <div className="text-[13.5px] font-bold text-ink">
              {order.id} · {order.customer}
            </div>
            <div className="text-xs text-subtle">{order.destination}</div>
          </div>
          <span
            className="rounded-pill px-2.5 py-[5px] text-[11.5px] font-bold"
            style={{ background: order.statusBg, color: order.statusColor }}
          >
            {order.status}
          </span>
        </div>
      ))}
    </div>
  );
}