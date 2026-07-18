export function SocialLoginButtons() {
  return (
    <div className="mb-6 flex flex-col gap-6">
      <div className="flex gap-2.5">
        <button
          type="button"
          className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-[10px] border-[1.5px] border-border-strong bg-background py-3 text-[13.5px] font-semibold text-body transition-colors hover:bg-surface"
        >
          <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#4285F4] text-[10px] font-bold text-background">
            G
          </span>
          Google
        </button>
        <button
          type="button"
          className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-[10px] border-[1.5px] border-border-strong bg-background py-3 text-[13.5px] font-semibold text-body transition-colors hover:bg-surface"
        >
          <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-sm bg-[#00A4EF] text-[10px] font-bold text-background">
            M
          </span>
          Microsoft
        </button>
      </div>
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-border" />
        <span className="text-xs font-semibold text-subtle">OR</span>
        <div className="h-px flex-1 bg-border" />
      </div>
    </div>
  );
}