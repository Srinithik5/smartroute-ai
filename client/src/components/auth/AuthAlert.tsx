import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';

interface AuthAlertProps {
  type: 'error' | 'success';
  message: string | null;
}

export function AuthAlert({ type, message }: AuthAlertProps) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, height: 0, marginBottom: 0 }}
          animate={{ opacity: 1, height: 'auto', marginBottom: 16 }}
          exit={{ opacity: 0, height: 0, marginBottom: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="overflow-hidden"
        >
          <div
            role="alert"
            className={cn(
              'rounded-[10px] px-4 py-3 text-[13.5px] font-semibold',
              type === 'error' ? 'bg-danger/10 text-danger' : 'bg-success/10 text-success',
            )}
          >
            {message}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}