import { Eyebrow } from "@/components/ui/primitives";

const milestones = [
  { age: "45", title: "The fittest you've ever been.", body: "Stronger at 45 than you were at 25." },
  { age: "58", title: "Building the thing you always talked about.", body: "Energy for a second act, not a slow down.", low: true },
  { age: "72", title: "Kilimanjaro, with your grandchildren.", body: "Every step of the summit, on your own legs." },
  { age: "86", title: "Still the sharpest mind in the room.", body: "Still the one everyone calls for advice.", low: true },
  { age: "100", title: "Your 100th birthday. You give the speech.", body: "Standing. Clear-eyed. Full of life.", last: true },
];

export function Future() {
  return (
    <section id="next" className="relative overflow-hidden bg-void">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 -right-10 font-display text-[clamp(260px,36vw,560px)] leading-[0.8] font-semibold tracking-[-0.06em] text-transparent select-none"
        style={{ WebkitTextStroke: "1.5px rgba(79,227,203,0.14)" }}
      >
        100
      </div>
      <div
        aria-hidden="true"
        className="animate-glow pointer-events-none absolute -bottom-[300px] left-1/2 -ml-[700px] h-[700px] w-[1400px] rounded-full bg-[radial-gradient(closest-side,rgba(79,227,203,0.14),rgba(2,8,11,0))]"
      />
      <div className="relative mx-auto flex max-w-[1280px] flex-col gap-16 px-8 pt-28 pb-[104px]">
        <div className="flex max-w-[820px] flex-col gap-5">
          <Eyebrow>The rest of your life</Eyebrow>
          <h2 className="m-0 font-display text-[clamp(48px,6.4vw,96px)] leading-[0.95] font-semibold tracking-[-0.045em]">
            What would you do with <span className="text-mint">more good years?</span>
          </h2>
        </div>

        <div className="relative">
          <div aria-hidden="true" className="absolute inset-x-0 top-1.5 hidden h-0.5 bg-[linear-gradient(90deg,rgba(242,247,246,0.15),#4FE3CB)] lg:block" />
          <div aria-hidden="true" className="absolute inset-x-0 top-[126px] hidden h-0.5 bg-[linear-gradient(90deg,rgba(242,247,246,0.08),rgba(79,227,203,0.5))] lg:block" />
          <ol className="relative m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(210px,1fr))] items-start gap-5 p-0">
            {milestones.map((m) => (
              <li key={m.age} className={`relative flex flex-col gap-[18px] ${m.low ? "lg:pt-[120px]" : ""}`}>
                <span
                  aria-hidden="true"
                  className={`block h-3.5 w-3.5 rounded-full ${
                    m.last
                      ? "bg-mint shadow-[0_0_0_6px_rgba(79,227,203,0.18),0_0_30px_rgba(79,227,203,0.8)]"
                      : "bg-ink shadow-[0_0_0_5px_rgba(242,247,246,0.08)]"
                  }`}
                />
                <div
                  className={`flex min-h-[200px] flex-col gap-3 rounded-3xl p-6 ${
                    m.last
                      ? "border border-mint bg-[linear-gradient(180deg,rgba(79,227,203,0.14),rgba(11,31,42,0.9))] shadow-[0_0_60px_rgba(79,227,203,0.18)]"
                      : "border border-edge bg-midnight/75"
                  }`}
                >
                  <span className={`font-display text-[56px] leading-[0.9] font-semibold tracking-[-0.05em] ${m.last ? "text-gradient-mint" : "text-ink"}`}>
                    {m.age}
                  </span>
                  <span className="font-display text-xl leading-[1.2] font-semibold tracking-[-0.015em]">{m.title}</span>
                  <span className="text-[15px] leading-[1.45] text-muted">{m.body}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-6">
          <p className="m-0 font-display text-[clamp(32px,4vw,56px)] leading-none font-semibold tracking-[-0.04em]">
            Less luck. <span className="text-mint">More science.</span>
          </p>
          <p className="m-0 max-w-[380px] text-lg leading-normal text-muted">This is the life we&apos;re building Aurea for. Yours.</p>
        </div>
      </div>
    </section>
  );
}
