import { LogoMark } from "@/components/ui/Logo";
import { Eyebrow, Tile } from "@/components/ui/primitives";

const chips: { name: string; watch?: boolean }[] = [
  { name: "ApoB" }, { name: "HbA1c", watch: true }, { name: "Testosterone" }, { name: "eGFR" },
  { name: "Ferritin" }, { name: "Vitamin D", watch: true }, { name: "Genotype" }, { name: "TSH" },
  { name: "Lp(a)" }, { name: "Cortisol" }, { name: "AMH" }, { name: "hs-CRP" },
];

const insightNodes = [
  [60, 70, "#4FE3CB"], [262, 64, "#4FE3CB"], [44, 200, "#F2B65A"], [276, 214, "#4FE3CB"],
  [160, 40, "#4FE3CB"], [120, 262, "#F2B65A"], [210, 262, "#4FE3CB"],
] as const;

function TileCopy({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <div className="flex flex-col gap-2">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h3 className="m-0 font-display text-[28px] leading-[1.1] font-semibold tracking-[-0.02em]">{title}</h3>
      <p className="m-0 text-base leading-normal text-muted">{body}</p>
    </div>
  );
}

function KitBox() {
  return (
    <div className="animate-turn preserve-3d relative h-[130px] w-[200px]" role="img" aria-label="The Aurea test kit box">
      <div
        className="absolute inset-0 flex flex-col justify-between rounded-[10px] border border-line-strong bg-[linear-gradient(135deg,#163A47,#0B1F2A)] p-4"
        style={{ transform: "translateZ(40px)" }}
      >
        <LogoMark size={28} className="text-ink" />
        <span className="font-display text-[15px] font-semibold tracking-[-0.01em]">aurea</span>
      </div>
      <div
        className="absolute top-0 left-[60px] h-[130px] w-[80px] rounded-md border border-line-strong bg-[#0A1C25]"
        style={{ transform: "rotateY(90deg) translateZ(100px)" }}
      />
      <div
        className="absolute top-[25px] left-0 h-[80px] w-[200px] rounded-md border border-line-strong bg-[#1E4553]"
        style={{ transform: "rotateX(90deg) translateZ(65px)" }}
      />
    </div>
  );
}

function InsightVisual() {
  return (
    <div
      role="img"
      aria-label="Many results coming together into one simple insight. Sample data."
      className="relative flex h-[240px] items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-x-0 -top-[30px] bottom-0 flex scale-[0.82] justify-center">
        <svg viewBox="0 0 320 300" width="320" height="300" aria-hidden="true" className="absolute inset-0 m-auto">
          <g stroke="#4FE3CB" strokeOpacity="0.35" strokeWidth="1.2" fill="none">
            {insightNodes.map(([x, y]) => (
              <path key={`${x}-${y}`} d={`M${x} ${y} L160 150`} />
            ))}
          </g>
          {insightNodes.map(([x, y, c]) => (
            <circle key={`c${x}-${y}`} cx={x} cy={y} r="5" fill={c} />
          ))}
          <circle className="animate-ping-soft origin-fill" cx="160" cy="150" r="14" fill="#4FE3CB" opacity="0.5" />
          <circle cx="160" cy="150" r="14" fill="#4FE3CB" />
        </svg>
        <div
          className="animate-float relative mt-[150px] flex w-[240px] flex-col gap-1.5 self-start rounded-[18px] bg-ink px-4 py-3.5 text-midnight shadow-[0_24px_60px_rgba(0,0,0,0.5)]"
          style={{ animationDelay: "-1.5s" }}
        >
          <span className="text-[11px] font-semibold tracking-[0.1em] text-teal-ink">AUREA INSIGHT</span>
          <span className="text-sm leading-[1.4] font-medium">Your sugar is creeping up. Start with a walk after dinner.</span>
        </div>
      </div>
    </div>
  );
}

export function Membership() {
  return (
    <section id="membership" className="dot-grid relative px-8 pt-[104px] pb-28">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex flex-col gap-3.5">
            <Eyebrow>The membership</Eyebrow>
            <h2 className="m-0 max-w-[760px] font-display text-[clamp(36px,4.4vw,60px)] leading-[1.02] font-semibold tracking-[-0.035em]">
              One membership.
              <br />
              Everything it takes to live longer.
            </h2>
          </div>
          <a
            href="#systems"
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-line px-[22px] text-sm font-medium text-ink no-underline"
          >
            See what we look at <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="grid auto-rows-[minmax(260px,auto)] grid-cols-1 gap-4 lg:grid-cols-12">
          {/* Statement */}
          <Tile className="flex flex-col justify-between gap-10 bg-[radial-gradient(500px_360px_at_85%_100%,rgba(79,227,203,0.16),rgba(0,0,0,0)_70%),linear-gradient(160deg,#0F2A36_0%,#0B1F2A_70%)] p-11 lg:col-span-7 lg:row-span-2">
            <Eyebrow>The truth</Eyebrow>
            <p className="m-0 font-display text-[clamp(32px,3.6vw,52px)] leading-[1.08] font-medium tracking-[-0.035em] text-faint">
              You feel fine. You look fine.{" "}
              <span className="text-ink">But feeling fine and being well aren&apos;t the same thing.</span>{" "}
              <span className="text-mint">Aurea helps you know the difference.</span>
            </p>
            <svg viewBox="0 0 600 90" width="100%" height="90" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="auEcg" x1="0" x2="1">
                  <stop offset="0" stopColor="#4FE3CB" stopOpacity="0" />
                  <stop offset="0.5" stopColor="#4FE3CB" stopOpacity="0.9" />
                  <stop offset="1" stopColor="#4FE3CB" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <path
                d="M0 50 H160 L180 50 L196 18 L214 80 L230 34 L246 50 H380 L398 50 L412 26 L428 72 L442 50 H600"
                fill="none"
                stroke="url(#auEcg)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Tile>

          {/* Answers */}
          <Tile className="flex flex-col lg:col-span-5">
            <div className="flex min-h-[200px] flex-auto items-center justify-center bg-[radial-gradient(240px_170px_at_50%_55%,rgba(79,227,203,0.18),rgba(0,0,0,0))] [perspective:900px]">
              <KitBox />
            </div>
            <div className="px-8 pb-[30px]">
              <TileCopy
                eyebrow="The answers"
                title="Already inside you."
                body="Everything that shapes your future is in your blood today. We help you read it."
              />
            </div>
          </Tile>

          {/* Insight */}
          <Tile className="flex flex-col lg:col-span-5">
            <InsightVisual />
            <div className="px-8 pb-[30px]">
              <TileCopy eyebrow="The insight" title="It sees the whole you." body="Then tells you the one thing worth changing first." />
            </div>
          </Tile>

          {/* 100+ */}
          <Tile className="flex flex-col justify-between gap-6 p-9 lg:col-span-5">
            <div className="flex flex-wrap items-baseline gap-3.5">
              <span className="text-gradient-mint font-display text-8xl leading-[0.85] font-semibold tracking-[-0.06em]">100+</span>
              <span className="max-w-[180px] font-display text-xl leading-[1.2] font-medium tracking-[-0.01em]">
                things we look at, from one drop.
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {chips.map((c) => (
                <span
                  key={c.name}
                  className={`rounded-full border border-line bg-raised/70 px-3 py-[7px] text-[13px] ${c.watch ? "text-watch" : "text-ink"}`}
                >
                  {c.name}
                </span>
              ))}
            </div>
          </Tile>

          {/* App */}
          <Tile className="flex flex-wrap items-stretch bg-[radial-gradient(420px_320px_at_80%_60%,rgba(79,227,203,0.16),rgba(0,0,0,0)_70%),linear-gradient(160deg,#0F2A36_0%,#0B1F2A_70%)] lg:col-span-7">
            <div className="flex min-w-0 flex-[1_1_260px] flex-col justify-end p-9">
              <TileCopy
                eyebrow="The app"
                title="Watch yourself get healthier."
                body="See how far you've come, and how many good years you've added."
              />
            </div>
            <div className="relative min-h-[300px] flex-[0_1_280px] overflow-hidden">
              <div
                role="img"
                aria-label="Aurea app showing healthy years gained. Sample data."
                className="absolute top-9 left-[30px] h-[420px] w-[220px] rounded-[36px] bg-[#02080B] p-2 shadow-[0_24px_60px_rgba(0,0,0,0.55)]"
              >
                <div className="flex h-full flex-col gap-3 rounded-[29px] border border-line bg-midnight px-4 py-6">
                  <span className="text-[11px] text-muted">Healthy years gained</span>
                  <span className="font-display text-[54px] leading-none font-semibold tracking-[-0.05em] text-mint">+4.2</span>
                  <svg width="100%" height="60" viewBox="0 0 180 60" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0 52 C30 50 50 40 80 36 S130 20 180 6" fill="none" stroke="#4FE3CB" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M0 52 C30 50 50 40 80 36 S130 20 180 6 L180 60 L0 60 Z" fill="#4FE3CB" opacity="0.12" />
                  </svg>
                  <div className="flex justify-between rounded-xl bg-raised px-3 py-2.5 text-xs">
                    <span>Blood pressure</span>
                    <span className="text-good">In range</span>
                  </div>
                  <div className="flex justify-between rounded-xl bg-raised px-3 py-2.5 text-xs">
                    <span>HbA1c</span>
                    <span className="text-watch">Watch</span>
                  </div>
                </div>
              </div>
            </div>
          </Tile>
        </div>
      </div>
    </section>
  );
}
