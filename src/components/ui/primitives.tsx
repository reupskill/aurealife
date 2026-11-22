import type { ReactNode } from "react";

export function Eyebrow({ children, tone = "mint" }: { children: ReactNode; tone?: "mint" | "watch" }) {
  return (
    <span
      className={`text-xs font-medium tracking-[0.14em] uppercase ${tone === "mint" ? "text-mint" : "text-watch"}`}
    >
      {children}
    </span>
  );
}

export type Status = "good" | "watch" | "act";

const statusStyles: Record<Status, { label: string; text: string; bg: string }> = {
  good: { label: "In range", text: "text-good", bg: "bg-good-deep" },
  watch: { label: "Watch", text: "text-watch", bg: "bg-watch-deep" },
  act: { label: "Act", text: "text-act", bg: "bg-act-deep" },
};

/** Result status badge. Colour is always paired with its word. */
export function StatusText({ status }: { status: Status }) {
  const s = statusStyles[status];
  return <span className={s.text}>{s.label}</span>;
}

export function StatusCount({ status, count }: { status: Status; count: number }) {
  const s = statusStyles[status];
  return (
    <div className={`flex flex-col rounded-xl px-2 py-2.5 ${s.bg}`}>
      <span className={`font-display text-xl font-semibold ${s.text}`}>{count}</span>
      <span className="text-[10px]">{s.label}</span>
    </div>
  );
}

/** A phone frame for app mockups. */
export function Phone({
  children,
  width = 250,
  height = 500,
  label,
  className = "",
  glow = false,
}: {
  children: ReactNode;
  width?: number;
  height?: number;
  label: string;
  className?: string;
  glow?: boolean;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`rounded-[40px] bg-[#02080B] p-[9px] ${className}`}
      style={{
        width,
        height,
        boxShadow: glow
          ? "0 40px 100px rgba(0,0,0,0.6), 0 0 80px rgba(79,227,203,0.12)"
          : "0 30px 80px rgba(0,0,0,0.55)",
      }}
    >
      <div className="flex h-full flex-col gap-3 rounded-[32px] border border-line bg-midnight px-4 py-6">
        {children}
      </div>
    </div>
  );
}

export function Tile({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[28px] border border-edge bg-[linear-gradient(160deg,#0F2A36_0%,#0B1F2A_70%)] ${className}`}
    >
      {children}
    </div>
  );
}
