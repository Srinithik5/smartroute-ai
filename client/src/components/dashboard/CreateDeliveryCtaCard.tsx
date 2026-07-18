import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';

export function CreateDeliveryCtaCard() {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      onClick={() => navigate(ROUTES.merchant.createDelivery)}
      className="cursor-pointer rounded-lg bg-primary p-[22px]"
    >
      <div className="mb-1.5 text-[15px] font-extrabold text-background">+ Create Delivery Request</div>
      <div className="text-[12.5px] text-navy-subtle">Submit a new pickup for warehouse intake</div>
    </motion.div>
  );
}