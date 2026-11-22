import { Eyebrow, Phone, StatusCount, StatusText, type Status } from "@/components/ui/primitives";

const features = [
  { n: "01", title: "See everything at once", body: "Every part of you, in one glance." },
  { n: "02", title: "Watch it get better", body: "Every test shows you how far you've come." },
  { n: "03", title: "Know what to do next", body: "Small, simple steps that fit your life." },
];

const results: { name: string; status: Status }[] = [
  { name: "Heart", status: "good" },
  { name: "Metabolic", status: "watch" },
  { name: "Hormones", status: "good" },
  { name: "Nutrients", status: "act" },
  { name: "Kidney", status: "good" },
];

const planSteps = ["Morning sun, 15 min", "Vitamin D-rich foods daily", "Retest in 12 weeks"];

function ResultsScreen() {
  return (
    <Phone label="Results by body system. Sample data.">
      <span className="font-display text-lg font-semibold">Your results</span>
      <div className="grid grid-cols-3 gap-1.5">
        <StatusCount status="good" count={96} />
        <StatusCount status="watch" count={9} />
        <StatusCount status="act" count={2} />
      </div>
      <div className="flex flex-col rounded-[14px] bg-raised px-3 py-0.5">
        {results.map((r, i) => (
          <div key={r.name} className={`flex justify-between py-2.5 text-[13px] ${i < results.length - 1 ? "border-b border-line" : ""}`}>
            <span>{r.name}</span>
            <StatusText status={r.status} />
          </div>
        ))}
      </div>
    </Phone>
  );
}

function TrendScreen() {
  return (
    <Phone label="HbA1c improving over three tests. Sample data." width={280} height={560} glow>
      <span className="text-xs text-muted">Metabolic</span>
      <span className="-mt-2.5 font-display text-xl font-semibold">HbA1c</span>
      <div className="flex items-baseline gap-1.5">
        <span className="font-display text-[44px] font-medium tracking-[-0.03em]">5.9</span>
        <span className="text-sm text-muted">%</span>
        <span className="ml-auto rounded-full bg-watch-deep px-2.5 py-[3px] text-[11px] font-medium text-watch">Watch</span>
      </div>
      <div className="flex flex-col gap-2 rounded-2xl bg-raised px-3.5 pt-4 pb-3">
        <svg width="100%" height="120" viewBox="0 0 220 120" preserveAspectRatio="none" aria-hidden="true">
          <rect x="0" y="62" width="220" height="58" fill="#173B2E" />
          <path d="M20 16 L110 38 L200 54" fill="none" stroke="#4FE3CB" strokeWidth="3" strokeLinecap="round" />
          <circle cx="20" cy="16" r="5" fill="#F2B65A" />
          <circle cx="110" cy="38" r="5" fill="#F2B65A" />
          <circle cx="200" cy="54" r="6" fill="#4FE3CB" />
        </svg>
        <div className="flex justify-between text-[11px] text-muted">
          <span>6.4</span>
          <span>6.1</span>
          <span>5.9</span>
        </div>
      </div>
      <div className="rounded-2xl bg-tint p-3.5 text-[13px] leading-[1.45]">
        Down three tests in a row. You&apos;re nearly back in range. Keep going.
      </div>
    </Phone>
  );
}

function PlanScreen() {
  return (
    <Phone label="Personal plan with three steps. Sample data.">
      <span className="font-display text-lg font-semibold">Your plan</span>
      <div className="rounded-[14px] bg-raised p-3 text-[13px] leading-[1.45]">
        <span className="mb-1.5 block text-[11px] font-semibold tracking-[0.1em] text-mint">AUREA INSIGHT</span>
        Your vitamin D is low. Caught early. Here&apos;s your fix.
      </div>
      {planSteps.map((step, i) => (
        <div key={step} className="flex items-center gap-2.5 rounded-[14px] bg-raised p-3 text-[13px]">
          <span className="flex h-[22px] w-[22px] flex-none items-center justify-center rounded-full bg-mint text-[11px] font-semibold text-midnight">
            {i + 1}
          </span>
          {step}
        </div>
      ))}
      <span className="mt-auto flex min-h-10 items-center justify-center rounded-full bg-mint text-[13px] font-semibold text-midnight">
        Ask Aurea anything
      </span>
    </Phone>
  );
}

export function AppShowcase() {
  return (
    <section className="bg-[radial-gradient(900px_700px_at_72%_50%,rgba(18,162,143,0.16),rgba(5,15,21,0)_70%),linear-gradient(180deg,#050F15_0%,#0B1F2A_100%)]">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-16 px-8 pt-24 pb-28">
        <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-9">
          <div className="flex flex-col gap-4">
            <Eyebrow>The Aurea app</Eyebrow>
            <h2 className="m-0 font-display text-[clamp(40px,5vw,72px)] leading-none font-semibold tracking-[-0.04em]">
              Your body, decoded.
              <br />
              <span className="text-mint">In plain words.</span>
            </h2>
          </div>
          <div className="flex flex-col border-b border-raised">
            {features.map((f) => (
              <div key={f.n} className="flex items-start gap-5 border-t border-raised py-[22px]">
                <span className="flex-none pt-1.5 font-display text-sm font-semibold text-mint">{f.n}</span>
                <div className="flex flex-col gap-1.5">
                  <span className="font-display text-2xl font-semibold tracking-[-0.02em]">{f.title}</span>
                  <span className="text-[17px] leading-[1.45] text-muted">{f.body}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex min-w-0 flex-[1_1_600px] justify-center">
          <div className="relative h-[640px] w-[640px] max-w-full">
            <div className="absolute top-20 left-0 z-10 origin-center scale-90 -rotate-[7deg] opacity-90">
              <ResultsScreen />
            </div>
            <div className="absolute top-24 right-0 z-10 origin-center scale-90 rotate-[7deg] opacity-90">
              <PlanScreen />
            </div>
            <div className="animate-float absolute top-5 left-1/2 z-30 -ml-[140px]" style={{ animationDelay: "-1.5s" }}>
              <TrendScreen />
            </div>
            <div className="animate-float absolute bottom-[30px] -left-3 z-40 flex flex-col gap-0.5 rounded-[18px] bg-mint px-[18px] py-3.5 text-abyss shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
              <span className="text-xs font-medium">Healthy years</span>
              <span className="font-display text-2xl font-semibold tracking-[-0.02em]">+1.2 this year</span>
            </div>
            <div
              className="animate-float absolute top-0 -right-2 z-40 flex items-center gap-2.5 rounded-[18px] bg-ink px-[18px] py-3.5 text-midnight shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
              style={{ animationDelay: "-3s" }}
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#18704A]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F2F7F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <span className="text-sm font-semibold">Blood pressure back in range</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
