const later = ["A diagnosis that comes as a shock.", "Fewer options. Harder fixes.", "Years lost to illness."];
const today = ["Small changes, made early.", "Problems fixed while they're small.", "Years added, not lost."];

function Point({ text, tone }: { text: string; tone: "watch" | "mint" }) {
  return (
    <li className="flex items-center gap-3 text-[17px] leading-[1.4]">
      <span aria-hidden="true" className={`h-2 w-2 flex-none rounded-full ${tone === "watch" ? "bg-watch" : "bg-mint"}`} />
      <span>{text}</span>
    </li>
  );
}

export function Closing() {
  return (
    <section id="contact" className="bg-abyss bg-[radial-gradient(1000px_520px_at_50%_110%,rgba(18,162,143,0.35),rgba(5,15,21,0)_70%)]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-7 px-8 pt-28 pb-[104px] text-center">
        <h2 className="m-0 max-w-[1000px] font-display text-[clamp(48px,7vw,100px)] leading-[0.96] font-semibold tracking-[-0.045em]">
          One decision today.
          <br />
          <span className="text-mint">Decades of good years.</span>
        </h2>
        <p className="m-0 max-w-[600px] text-xl leading-normal text-soft">
          What you choose now decides how you&apos;ll feel at 60, 70 and 90. It starts with knowing what&apos;s going on inside you.
        </p>
        <div className="mt-4 grid w-full max-w-[920px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 text-left">
          <div className="flex flex-col gap-4 rounded-3xl border border-watch/35 bg-watch-deep/35 p-7">
            <span className="text-xs font-semibold tracking-[0.12em] text-watch">FIND OUT LATER</span>
            <ul className="m-0 flex list-none flex-col gap-4 p-0">
              {later.map((t) => (
                <Point key={t} text={t} tone="watch" />
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-mint bg-[linear-gradient(180deg,rgba(79,227,203,0.14),rgba(11,31,42,0.8))] p-7 shadow-[0_0_60px_rgba(79,227,203,0.15)]">
            <span className="text-xs font-semibold tracking-[0.12em] text-mint">FIND OUT TODAY</span>
            <ul className="m-0 flex list-none flex-col gap-4 p-0">
              {today.map((t) => (
                <Point key={t} text={t} tone="mint" />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <footer className="border-t border-raised">
        <div className="mx-auto flex max-w-[1280px] flex-wrap justify-between gap-3 px-8 py-7 text-[13px] text-dim">
          <span>© 2026 Aurea Life Science Limited · We exist to give humanity more healthy years of life.</span>
          <span>Aurea does not replace emergency care.</span>
        </div>
      </footer>
    </section>
  );
}
