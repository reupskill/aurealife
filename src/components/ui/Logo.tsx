type LogoMarkProps = {
  size?: number;
  className?: string;
};

/** The Aurea "halo peak" mark: open ring, A-peak, mint dot. */
export function LogoMark({ size = 30, className }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path d="M28 6.14 A16 16 0 1 1 12 6.14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M12.5 27.5 L20 14 L27.5 27.5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="4.2" r="2.8" fill="#4FE3CB" />
    </svg>
  );
}

export function Logo() {
  return (
    <a href="#top" aria-label="Aurea home" className="flex items-center gap-2.5 text-ink no-underline">
      <LogoMark />
      <span className="font-display text-[22px] font-semibold tracking-[-0.02em]">aurea</span>
    </a>
  );
}
