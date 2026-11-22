import { Logo } from "@/components/ui/Logo";
import { BodyScan } from "./BodyScan";

/**
 * Alternative second lines approved for A/B testing:
 * "Then change it." | "Then rewrite it." | "Before it finds you." |
 * "Then add years to it." | "Then outlive it." | "It's in your blood."
 */
export const HERO_LINE_TWO = "Then change it.";

const navLinks = [
  { href: "#membership", label: "Membership" },
  { href: "#systems", label: "What we test" },
  { href: "#next", label: "The future" },
];

const marqueeItems = [
  "ApoB", "HbA1c", "Testosterone", "eGFR", "Ferritin", "hs-CRP", "Vitamin D", "Genotype",
  "TSH", "Lp(a)", "Insulin", "AMH", "PSA", "G6PD", "Cortisol", "Omega-3",
];

export function Hero() {
  return (
    <header className="relative bg-abyss bg-[radial-gradient(900px_700px_at_70%_45%,rgba(18,162,143,0.22)_0%,rgba(5,15,21,0)_65%)]">
      <nav aria-label="Main" className="relative z-30 mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-8 py-6">
        <Logo />
        <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hidden text-sm font-medium text-muted no-underline hover:text-ink sm:inline">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center rounded-full bg-ink px-5 text-sm font-medium text-abyss no-underline"
          >
            Talk to us
          </a>
        </div>
      </nav>

      <section id="top" className="relative z-20 mx-auto flex max-w-[1280px] flex-wrap items-center gap-10 px-8 pt-6 pb-[72px]">
        <div className="flex min-w-0 flex-[1_1_540px] flex-col gap-7">
          <span className="inline-flex items-center gap-2 self-start rounded-full border border-line bg-raised/60 px-3.5 py-2 text-[13px] text-soft">
            <span className="animate-glow h-2 w-2 rounded-full bg-mint" />
            Coming soon
          </span>
          <h1 className="m-0 font-display text-[clamp(54px,7.4vw,108px)] leading-[0.95] font-semibold tracking-[-0.045em]">
            See your future.
            <br />
            <span className="text-gradient-mint-x">{HERO_LINE_TWO}</span>
          </h1>
          <p className="m-0 max-w-[480px] text-[clamp(18px,1.5vw,21px)] leading-normal text-soft">
            One simple blood test shows you how your body is really doing, and how to feel your best for years to come.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#membership"
              className="inline-flex min-h-14 items-center gap-2.5 rounded-full bg-mint px-7 text-[15px] font-semibold text-abyss no-underline"
            >
              Explore the membership <span aria-hidden="true">→</span>
            </a>
            <a
              href="#systems"
              className="inline-flex min-h-14 items-center rounded-full border border-line px-7 text-[15px] font-medium text-ink no-underline"
            >
              What we test
            </a>
          </div>
        </div>

        <div className="flex min-w-0 flex-[1_1_460px] justify-center">
          <div className="-mb-[190px] origin-top scale-[0.7] sm:mb-0 sm:scale-100">
            <BodyScan />
          </div>
        </div>
      </section>

      <div
        aria-hidden="true"
        className="relative z-20 overflow-hidden border-y border-raised bg-abyss/70 py-[18px] whitespace-nowrap"
      >
        <div className="animate-marquee inline-flex gap-10 pl-10 font-display text-[15px] text-faint">
          {[...marqueeItems, ...marqueeItems].map((m, i) => (
            <span key={i} className="inline-flex gap-10">
              <span>{m}</span>
              <span className="text-mint">✦</span>
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
