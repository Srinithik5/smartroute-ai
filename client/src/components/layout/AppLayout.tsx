import { Outlet } from 'react-router-dom';

/**
 * Temporary pass-through shell so nested app routes render during Phase 1.
 * Replaced with the full Sidebar/Topbar shell in Phase 3.
 */
export default function AppLayout() {
  return (
    <div className="h-screen w-full overflow-hidden">
      <Outlet />
    </div>
  );
}