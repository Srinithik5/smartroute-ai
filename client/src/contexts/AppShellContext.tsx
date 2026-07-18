import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import type { NavItemDef } from '@/types/navigation';
import type { CurrentUser, UserRole } from '@/types/role';
import { useIsMobile } from '@/hooks/useIsMobile';

interface AppShellContextValue {
  role: UserRole;
  user: CurrentUser;
  navItems: NavItemDef[];
  isMobile: boolean;
  sidebarCollapsed: boolean;
  toggleSidebar: () => void;
  mobileDrawerOpen: boolean;
  toggleMobileDrawer: () => void;
  closeMobileDrawer: () => void;
}

const AppShellContext = createContext<AppShellContextValue | null>(null);

interface AppShellProviderProps {
  role: UserRole;
  user: CurrentUser;
  navItems: NavItemDef[];
  children: ReactNode;
}

export function AppShellProvider({ role, user, navItems, children }: AppShellProviderProps) {
  const isMobile = useIsMobile();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const value = useMemo<AppShellContextValue>(
    () => ({
      role,
      user,
      navItems,
      isMobile,
      sidebarCollapsed,
      toggleSidebar: () => setSidebarCollapsed((c) => !c),
      mobileDrawerOpen,
      toggleMobileDrawer: () => setMobileDrawerOpen((o) => !o),
      closeMobileDrawer: () => setMobileDrawerOpen(false),
    }),
    [role, user, navItems, isMobile, sidebarCollapsed, mobileDrawerOpen],
  );

  return <AppShellContext.Provider value={value}>{children}</AppShellContext.Provider>;
}

export function useAppShell(): AppShellContextValue {
  const ctx = useContext(AppShellContext);
  if (!ctx) {
    throw new Error('useAppShell must be used within an AppShellProvider');
  }
  return ctx;
}