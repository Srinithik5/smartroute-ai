interface PagePlaceholderProps {
  title: string;
  phase: string;
}

/**
 * Temporary stub so routing compiles end-to-end during Phase 1 scaffolding.
 * Each of these is replaced with its full implementation in its own phase
 * (see task list) — the file is edited in place, never renamed.
 */
export function PagePlaceholder({ title, phase }: PagePlaceholderProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2 p-14 text-center">
      <div className="text-xl font-extrabold text-[#0b0d17]">{title}</div>
      <p className="m-0 text-sm text-[#8a92a3]">Coming in {phase}.</p>
    </div>
  );
}