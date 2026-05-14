export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <defs>
        <linearGradient id="fpg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1D4ED8" />
          <stop offset="55%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#FF1E56" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="14" fill="#0B1A3A" />
      <rect x="14" y="36" width="6" height="14" rx="1.5" fill="#2563EB" />
      <rect x="24" y="28" width="6" height="22" rx="1.5" fill="#4F46E5" />
      <rect x="34" y="20" width="6" height="30" rx="1.5" fill="url(#fpg)" />
      <path d="M44 50 L50 14 L56 22 L48 50 Z" fill="#FF1E56" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-9 w-9" />
      <div className="flex flex-col leading-none">
        <span className="text-lg font-bold tracking-tight">FinPilot</span>
        <span className="text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
          Your Financial Autopilot
        </span>
      </div>
    </div>
  );
}
