import { Eyebrow } from "@/components/ui/primitives";

const ticks = [30, 35, 40, 45, 50, 55, 60];

/** Birthday age vs blood age, on a 30–60 age ruler. Sample result. */
export function BiologicalAge() {
  return (
    <section className="relative border-y border-raised bg-abyss bg-[radial-gradient(900px_520px_at_50%_60%,rgba(242,182,90,0.10),rgba(5,15,21,0)_70%)]">
      <div className="mx-auto max-w-[1280px] px-8 py-[104px]">
        <div className="dot-grid flex flex-col gap-16 rounded-[32px] border border-edge bg-[#07141B] p-[clamp(32px,5vw,72px)] shadow-[inset_0_0_120px_rgba(242,182,90,0.06)]">
          <div className="flex flex-col gap-[18px]">
            <Eyebrow tone="watch">Your biological age</Eyebrow>
            <h2 className="m-0 max-w-[960px] font-display text-[clamp(44px,6vw,88px)] leading-[0.98] font-semibold tracking-[-0.045em]">
              You eat clean. You train.
              <br />
              <span className="text-watch">Your blood says otherwise.</span>
            </h2>
          </div>

          <div className="-mx-2 overflow-x-auto px-2">
          <div role="img" aria-label="Sample: birthday age 36, blood age 41. Five years older inside." className="relative h-[230px] min-w-[560px]">
            <div className="absolute inset-x-0 top-[150px] h-0.5 bg-line" />
            <div
              className="age-band absolute top-[132px] h-[38px] rounded-lg border border-watch/50 bg-watch/20"
              style={{ left: "20%", width: "16.67%" }}
            />
            <div aria-hidden="true" className="absolute inset-x-0 top-[168px] flex justify-between text-[13px] text-faint">
              {ticks.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>

            {/* Birthday */}
            <div className="absolute top-5 flex -translate-x-1/2 flex-col items-center gap-2" style={{ left: "20%" }}>
              <div className="flex flex-col items-center rounded-2xl border border-line bg-midnight px-4 py-2.5">
                <span className="text-xs whitespace-nowrap text-dim">Your birthday</span>
                <span className="font-display text-[34px] leading-none font-semibold tracking-[-0.03em] text-muted">36</span>
              </div>
              <span className="h-[46px] w-0.5 bg-faint" />
              <span className="-mt-2 h-3.5 w-3.5 rounded-full bg-muted" />
            </div>

            {/* Blood */}
            <div className="age-pin absolute top-0 flex -translate-x-1/2 flex-col items-center gap-2" style={{ left: "36.67%" }}>
              <div className="flex flex-col items-center rounded-[18px] border border-watch bg-watch-deep px-5 py-3 shadow-[0_0_40px_rgba(242,182,90,0.35)]">
                <span className="text-xs whitespace-nowrap text-watch">Your blood</span>
                <span className="font-display text-5xl leading-none font-semibold tracking-[-0.04em] text-watch">41</span>
              </div>
              <span className="h-[50px] w-0.5 bg-watch" />
              <span className="relative -mt-2 h-[18px] w-[18px]">
                <span className="animate-ping-soft absolute inset-0 rounded-full bg-watch" />
                <span className="absolute inset-0 rounded-full bg-watch" />
              </span>
            </div>
          </div>
          </div>

          <div className="flex flex-wrap items-end justify-between gap-8 border-t border-raised pt-10">
            <div className="flex items-baseline gap-3.5">
              <span className="font-display text-[clamp(56px,6vw,88px)] leading-none font-semibold tracking-[-0.05em] text-watch">+5</span>
              <span className="font-display text-[clamp(20px,2vw,28px)] font-medium tracking-[-0.02em]">years older, inside.</span>
            </div>
            <p className="m-0 max-w-[440px] text-lg leading-normal text-soft">
              Counting calories isn&apos;t the same as being healthy. Aurea shows how fast you&apos;re really ageing, and what to
              change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
