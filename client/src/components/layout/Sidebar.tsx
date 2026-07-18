import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { Logo } from '@/components/ui/Logo';
import { useAppShell } from '@/contexts/AppShellContext';
import { ROUTES } from '@/constants/routes';
import { cn } from '@/utils/cn';

export function Sidebar() {
  const {
    navItems,
    user,
    isMobile,
    sidebarCollapsed,
    toggleSidebar,
    mobileDrawerOpen,
    toggleMobileDrawer,
    closeMobileDrawer,
    role,
  } = useAppShell();
  const location = useLocation();
  const navigate = useNavigate();

  const showLabels = isMobile || !sidebarCollapsed;
  const width = isMobile ? 248 : sidebarCollapsed ? 76 : 248;
  const profilePath = role === 'merchant' ? ROUTES.merchant.profile : ROUTES.app.profile;

  const go = (path: string) => {
    navigate(path);
    if (isMobile) closeMobileDrawer();
  };

  return (
    <>
      <AnimatePresence>
        {isMobile && mobileDrawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={toggleMobileDrawer}
            className="fixed inset-0 z-[199] bg-[rgba(11,13,23,0.45)]"
          />
        )}
      </AnimatePresence>

      <motion.aside
        animate={{
          width,
          x: isMobile ? (mobileDrawerOpen ? 0 : '-100%') : 0,
        }}
        transition={{ duration: isMobile ? 0.25 : 0.2, ease: 'easeInOut' }}
        className={cn(
          'z-[200] flex flex-shrink-0 flex-col overflow-hidden bg-primary px-3.5 py-5',
          isMobile ? 'fixed inset-y-0 left-0 h-screen' : 'relative h-auto',
        )}
      >
        <div
          className="flex cursor-pointer items-center gap-2.5 px-2 pb-[22px] pt-1.5"
          onClick={() => go(ROUTES.landing)}
        >
          <Logo size={30} variant="onDark" showLabel={false} />
          {showLabels && (
            <span className="whitespace-nowrap text-[15.5px] font-extrabold text-background">
              SmartRoute AI
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-[3px] overflow-y-auto">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <div
                key={item.key}
                onClick={() => go(item.path)}
                className={cn(
                  'flex cursor-pointer items-center gap-3 rounded-[10px] px-3 py-[11px] transition-colors duration-150 hover:bg-white/[0.08]',
                  active ? 'bg-accent' : 'bg-transparent',
                )}
              >
                <div
                  className={cn(
                    'h-2 w-2 flex-shrink-0 rounded-full',
                    active ? 'bg-primary' : 'bg-navy-dot-inactive',
                  )}
                />
                {showLabels && (
                  <span
                    className={cn(
                      'whitespace-nowrap text-sm font-semibold',
                      active ? 'text-primary' : 'text-navy-label-inactive',
                    )}
                  >
                    {item.label}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-[3px] border-t border-white/[0.12] pt-3.5">
          <div
            onClick={() => go(profilePath)}
            className="flex cursor-pointer items-center gap-3 rounded-[10px] px-3 py-[11px] hover:bg-white/[0.08]"
          >
            <div className="flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-full bg-accent text-[11px] font-extrabold text-primary">
              {user.initials}
            </div>
            {showLabels && (
              <div className="overflow-hidden whitespace-nowrap">
                <div className="text-[13px] font-bold text-background">{user.name}</div>
                <div className="text-[11px] text-navy-muted">{user.role}</div>
              </div>
            )}
          </div>
          <div
            onClick={toggleSidebar}
            className="flex cursor-pointer items-center gap-3 rounded-[10px] px-3 py-[11px] hover:bg-white/[0.08]"
          >
            <div
              className="h-2 w-2 flex-shrink-0 rounded-sm border-[1.5px] border-navy-muted transition-transform duration-150"
              style={{ transform: sidebarCollapsed ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
            {showLabels && (
              <span className="whitespace-nowrap text-[13px] font-semibold text-navy-muted">
                Collapse
              </span>
            )}
          </div>
        </div>
      </motion.aside>
    </>
  );
}