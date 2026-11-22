"use client";

import { useState } from "react";
import { Eyebrow } from "@/components/ui/primitives";

type Organ = "heart" | "metabolic" | "hormones" | "kidney" | "blood" | "nutrients" | "thyroid";

type System = {
  id: Organ;
  name: string;
  tells: string;
  missed: string;
  markers: string[];
};

const systems: System[] = [
  {
    id: "heart",
    name: "Heart",
    tells: "How likely your arteries are to clog, long before you ever feel chest pain.",
    missed: "A heart attack or stroke is often the first sign anything was wrong.",
    markers: ["ApoB", "Lp(a)", "LDL", "HDL", "Triglycerides", "hs-CRP"],
  },
  {
    id: "metabolic",
    name: "Blood sugar",
    tells: "How well your body handles sugar, years before diabetes shows up.",
    missed: "Type 2 diabetes, then slow damage to your eyes, kidneys, nerves and feet.",
    markers: ["HbA1c", "Fasting glucose", "Insulin", "Insulin resistance", "Uric acid"],
  },
  {
    id: "hormones",
    name: "Hormones",
    tells: "What is driving your energy, mood, sleep, drive and fertility.",
    missed: "Years of feeling tired, low or “off”, without ever knowing why.",
    markers: ["Testosterone", "Oestradiol", "AMH", "Cortisol", "Prolactin", "SHBG"],
  },
  {
    id: "kidney",
    name: "Kidneys & liver",
    tells: "How well your body filters and cleans itself every day.",
    missed: "Kidneys and liver can be badly damaged before you feel a thing.",
    markers: ["eGFR", "Creatinine", "Urine albumin", "ALT", "AST", "GGT"],
  },
  {
    id: "blood",
    name: "Blood & genes",
    tells: "Your genotype, your iron, and how well your blood carries oxygen.",
    missed: "Anaemia that quietly drains you, and inherited risks you could have planned for.",
    markers: ["Genotype", "G6PD", "Full blood count", "Ferritin", "Iron"],
  },
  {
    id: "nutrients",
    name: "Nutrients",
    tells: "The vitamins and minerals your body is quietly running low on.",
    missed: "Tiredness, weak bones and low immunity that start to feel “normal”.",
    markers: ["Vitamin D", "B12", "Folate", "Magnesium", "Omega-3"],
  },
  {
    id: "thyroid",
    name: "Thyroid & immunity",
    tells: "Your metabolism’s control dial, and infections hiding in your body.",
    missed: "Unexplained weight change and fatigue, or an infection like hepatitis B silently harming your liver.",
    markers: ["TSH", "Free T4", "Hepatitis B", "Hepatitis C", "H. pylori"],
  },
];

function organStyle(active: Organ, organ: Organ, line = false): React.CSSProperties {
  if (active === organ) {
    return line
      ? { fill: "none", stroke: "#4FE3CB", filter: "drop-shadow(0 0 10px rgba(79,227,203,0.9))", transition: "all .4s" }
      : { fill: "#4FE3CB", stroke: "none", filter: "drop-shadow(0 0 12px rgba(79,227,203,0.9))", transition: "all .4s" };
  }
  return line
    ? { fill: "none", stroke: "#1E4553", transition: "all .4s" }
    : { fill: "#1E4553", stroke: "none", transition: "all .4s" };
}

function BodyMap({ active, name }: { active: Organ; name: string }) {
  return (
    <div role="img" aria-label={`Body outline with the ${name.toLowerCase()} highlighted.`} className="mx-auto flex flex-[0_1_300px] justify-center">
      <svg viewBox="0 0 300 600" width="260" height="520" aria-hidden="true" className="overflow-visible">
        <g fill="#12303E" stroke="#24434F" strokeWidth="1.5" style={{ filter: "drop-shadow(0 0 14px rgba(79,227,203,0.18))" }}>
          <ellipse cx="150" cy="62" rx="30" ry="36" />
          <rect x="138" y="92" width="24" height="24" rx="8" />
          <path d="M98 122 Q150 104 202 122 L214 250 Q208 300 198 322 L102 322 Q92 300 86 250 Z" />
          <path d="M90 126 L104 130 L82 252 L76 334 L56 332 L62 248 Z" />
          <path d="M210 126 L196 130 L218 252 L224 334 L244 332 L238 248 Z" />
          <path d="M106 318 L148 318 L140 460 L136 584 L110 584 L108 460 Z" />
          <path d="M152 318 L194 318 L192 460 L190 584 L164 584 L160 460 Z" />
        </g>
        <path
          d="M150 122 L150 318 M150 132 L86 250 M150 132 L214 250 M142 318 L124 570 M158 318 L176 570"
          strokeWidth="3"
          strokeLinecap="round"
          style={organStyle(active, "blood", true)}
        />
        <ellipse cx="150" cy="54" rx="16" ry="14" style={organStyle(active, "hormones")} />
        <path
          d="M150 108 C146 100 134 100 134 108 C134 116 146 116 150 108 C154 116 166 116 166 108 C166 100 154 100 150 108 Z"
          style={organStyle(active, "thyroid")}
        />
        <path
          d="M140 186 C118 172 116 152 130 148 C137 146 140 151 140 154 C140 151 144 146 151 148 C164 152 162 172 140 186 Z"
          style={organStyle(active, "heart")}
        />
        <path d="M152 196 C172 186 200 188 200 202 C200 218 180 226 160 220 C150 216 148 202 152 196 Z" style={organStyle(active, "kidney")} />
        <ellipse cx="126" cy="244" rx="9" ry="15" style={organStyle(active, "kidney")} />
        <ellipse cx="174" cy="244" rx="9" ry="15" style={organStyle(active, "kidney")} />
        <path d="M118 262 C130 252 172 254 184 262 C178 272 126 272 118 262 Z" style={organStyle(active, "metabolic")} />
        <ellipse cx="150" cy="292" rx="30" ry="18" style={organStyle(active, "nutrients")} />
      </svg>
    </div>
  );
}

export function Systems() {
  const [activeId, setActiveId] = useState<Organ>("heart");
  const active = systems.find((s) => s.id === activeId) ?? systems[0];

  return (
    <section id="systems" className="mx-auto max-w-[1280px] px-8 pt-6 pb-[104px]">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div className="flex flex-col gap-3.5">
          <Eyebrow>What we look at</Eyebrow>
          <h2 className="m-0 font-display text-[clamp(40px,5vw,72px)] leading-none font-semibold tracking-[-0.04em]">
            What&apos;s really
            <br />
            going on in there?
          </h2>
        </div>
        <p className="m-0 max-w-[360px] text-lg leading-normal text-muted">
          Tap a part of you to see what we look at, and what happens if no one does.
        </p>
      </div>

      <div className="mb-5 flex flex-wrap gap-2.5" role="tablist" aria-label="Parts of the body">
        {systems.map((s) => {
          const selected = s.id === activeId;
          return (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls="systems-panel"
              onClick={() => setActiveId(s.id)}
              className={`min-h-[46px] cursor-pointer rounded-full border px-5 text-[15px] transition-colors ${
                selected ? "border-mint bg-mint font-semibold text-abyss" : "border-line bg-transparent font-medium text-ink hover:border-mint/60"
              }`}
            >
              {s.name}
            </button>
          );
        })}
      </div>

      <div
        id="systems-panel"
        role="tabpanel"
        className="flex flex-wrap items-center gap-12 rounded-[32px] border border-edge bg-[radial-gradient(600px_500px_at_22%_50%,rgba(79,227,203,0.10),rgba(0,0,0,0)_70%),linear-gradient(135deg,#0F2A36_0%,#0B1F2A_60%)] p-[clamp(28px,4vw,56px)]"
      >
        <BodyMap active={active.id} name={active.name} />

        <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-7">
          <span className="font-display text-[clamp(36px,4vw,56px)] leading-none font-semibold tracking-[-0.04em]">{active.name}</span>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
            <div className="flex flex-col gap-2.5 rounded-[20px] border border-mint/35 bg-mint/[0.08] p-[22px]">
              <span className="text-xs font-semibold tracking-[0.12em] text-mint">WHAT IT TELLS YOU</span>
              <span className="text-lg leading-[1.45]">{active.tells}</span>
            </div>
            <div className="flex flex-col gap-2.5 rounded-[20px] border border-watch/40 bg-watch/[0.08] p-[22px]">
              <span className="text-xs font-semibold tracking-[0.12em] text-watch">IF IT&apos;S MISSED</span>
              <span className="text-lg leading-[1.45]">{active.missed}</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[13px] text-dim">What we look at</span>
            <div className="flex flex-wrap gap-2">
              {active.markers.map((m) => (
                <span key={m} className="rounded-full border border-line bg-raised px-[15px] py-[9px] text-sm font-medium">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
