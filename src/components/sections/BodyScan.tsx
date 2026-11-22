const readings = [
  { cls: "left-[77%] top-[10%]", label: "Thyroid · TSH", value: "1.8", status: "good", delay: "0s" },
  { cls: "right-[80%] top-[19%]", label: "Heart · ApoB", value: "82 mg/dL", status: "good", delay: "-1.5s" },
  { cls: "left-[83%] top-[31%]", label: "Liver · ALT", value: "24 U/L", status: "good", delay: "-3s" },
  { cls: "right-[82%] top-[39%]", label: "Kidney · eGFR", value: "96", status: "good", delay: "0s" },
  { cls: "left-[80%] top-[49%]", label: "Metabolic · HbA1c", value: "5.9 %", status: "watch", delay: "-1.5s" },
] as const;

const nodes = [
  { cx: 150, cy: 108, to: "M150 108 L230 92", color: "#4FE3CB" },
  { cx: 136, cy: 164, to: "M136 164 L40 150", color: "#4FE3CB" },
  { cx: 170, cy: 206, to: "M170 206 L250 214", color: "#4FE3CB" },
  { cx: 132, cy: 238, to: "M132 238 L36 260", color: "#4FE3CB" },
  { cx: 158, cy: 270, to: "M158 270 L240 318", color: "#F2B65A" },
];

export const bodyClipShapes = (
  <>
    <ellipse cx="150" cy="62" rx="30" ry="36" />
    <rect x="138" y="92" width="24" height="24" rx="8" />
    <path d="M98 122 Q150 104 202 122 L214 250 Q208 300 198 322 L102 322 Q92 300 86 250 Z" />
    <path d="M90 126 L104 130 L82 252 L76 334 L56 332 L62 248 Z" />
    <path d="M210 126 L196 130 L218 252 L224 334 L244 332 L238 248 Z" />
    <path d="M106 318 L148 318 L140 460 L136 584 L110 584 L108 460 Z" />
    <path d="M152 318 L194 318 L192 460 L190 584 L164 584 L160 460 Z" />
  </>
);

/** Animated holographic body scan with floating biomarker readings. */
export function BodyScan() {
  return (
    <div
      role="img"
      aria-label="An animated body scan lighting up thyroid, heart, liver, kidney and metabolic markers. Sample values."
      className="relative h-[640px] w-[340px]"
    >
      <svg viewBox="0 0 300 600" width="340" height="640" aria-hidden="true" className="absolute inset-0 overflow-visible">
        <defs>
          <linearGradient id="auBody" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#1A4A57" />
            <stop offset="1" stopColor="#0B1F2A" />
          </linearGradient>
          <linearGradient id="auBeam" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#4FE3CB" stopOpacity="0" />
            <stop offset="0.85" stopColor="#4FE3CB" stopOpacity="0.35" />
            <stop offset="1" stopColor="#4FE3CB" stopOpacity="0.9" />
          </linearGradient>
          <clipPath id="auClip">{bodyClipShapes}</clipPath>
        </defs>
        <g style={{ filter: "drop-shadow(0 0 18px rgba(79,227,203,0.35))" }}>
          <g clipPath="url(#auClip)">
            <rect x="0" y="0" width="300" height="600" fill="url(#auBody)" />
            <g stroke="#4FE3CB" strokeOpacity="0.12" strokeWidth="1">
              {Array.from({ length: 13 }, (_, i) => (
                <line key={i} x1="0" y1={60 + i * 40} x2="300" y2={60 + i * 40} />
              ))}
            </g>
            <rect className="animate-scan" x="0" y="0" width="300" height="120" fill="url(#auBeam)" />
          </g>
        </g>
        {nodes.map((n) => (
          <g key={`${n.cx}-${n.cy}`}>
            <path d={n.to} stroke="#4FE3CB" strokeOpacity="0.5" strokeWidth="1" fill="none" />
            <circle className="animate-ping-soft origin-fill" cx={n.cx} cy={n.cy} r="5" fill={n.color} />
            <circle cx={n.cx} cy={n.cy} r="5" fill={n.color} />
          </g>
        ))}
      </svg>

      {readings.map((r) => {
        const watch = r.status === "watch";
        return (
          <div
            key={r.label}
            className={`animate-float absolute flex flex-col gap-0.5 whitespace-nowrap rounded-[14px] border px-3.5 py-2.5 backdrop-blur-md ${r.cls} ${
              watch ? "border-watch bg-watch-deep/90" : "border-line bg-raised/85"
            }`}
            style={{ animationDelay: r.delay }}
          >
            <span className={`text-[11px] ${watch ? "text-watch" : "text-muted"}`}>{r.label}</span>
            <span className="font-display text-base font-medium">
              {r.value}{" "}
              <span className={`text-[11px] ${watch ? "text-watch" : "text-good"}`}>{watch ? "Watch" : "In range"}</span>
            </span>
          </div>
        );
      })}
    </div>
  );
}
