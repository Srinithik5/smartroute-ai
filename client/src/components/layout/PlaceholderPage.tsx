import { PageContainer } from '@/components/layout/PageContainer';

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export function PlaceholderPage({
  title,
  description = 'This module is part of the SmartRoute AI platform and will be implemented in an upcoming phase.',
}: PlaceholderPageProps) {
  return (
    <PageContainer>
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-lg border border-border bg-background px-10 py-16 text-center">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-accent">
          <div className="h-3.5 w-3.5 rounded-sm bg-primary" />
        </div>
        <h1 className="mb-2 text-lg font-bold text-ink">{title}</h1>
        <p className="max-w-md text-sm leading-relaxed text-muted">{description}</p>
      </div>
    </PageContainer>
  );
}