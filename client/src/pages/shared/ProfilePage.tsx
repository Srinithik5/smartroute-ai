import { PlaceholderPage } from '@/components/layout/PlaceholderPage';
import { useAppShell } from '@/contexts/AppShellContext';

export function ProfilePage() {
  const { user } = useAppShell();

  return (
    <PlaceholderPage
      title="Profile"
      description={`Account settings for ${user.name} (${user.role}) will be available here in a future phase.`}
    />
  );
}