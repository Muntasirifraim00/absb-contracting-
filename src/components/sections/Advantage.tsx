import { useEffect, useState } from "react";
import {
  ArrowRight,
  Compass,
  Crosshair,
  FileCheck2,
  Handshake,
  Settings,
  ShieldCheck,
  Users,
} from "lucide-react";
import blueprint from "@/assets/blueprint-villa.png.asset.json";
import { useReducedMotion, useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

const PILLARS = [
  {
    icon: Crosshair,
    title: ["Engineered", "Precision"],
    note: ["1mm tolerance.", "Zero compromise."],
    detail:
      "Every line on the drawing is held to the millimetre on site, from setting out to final finish.",
  },
  {
    icon: ShieldCheck,
    title: ["End-to-end", "Control"],
    note: ["In-house expertise.", "Zero dependency."],
    detail:
      "Our own engineers, crews and equipment run each stage, so nothing waits on a third party.",
  },
  {
    icon: Handshake,
    title: ["Contractual", "Certainty"],
    note: ["Fixed price.", "Zero surprises."],
    detail:
      "Scope, price and programme are locked before work starts and honoured through handover.",
  },
];

const STRENGTH = [
  {
    icon: Users,
    title: "Engineers, not salesmen",
    note: "Direct access to technical minds, not middlemen.",
  },
  {
    icon: Settings,
    title: "Owned assets, zero delay",
    note: "Fleet, manpower, warehouse and equipment ensure uninterrupted execution.",
  },
  {
    icon: ShieldCheck,
    title: "Dual licensing authority",
    note: "Building Contracting + Maintenance License for complete project lifecycle.",
  },
  {
    icon: FileCheck2,
    title: "Transparent. Accountable. Reliable.",
    note: "Clear communication, weekly updates and zero hiding.",
  },
];

const ROTATION_MS = 6000;

export function Advantage() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const { ref, visible } = useReveal<HTMLDivElement>();

  useEffect(() => {
    if (reduced || paused || !visible) return;
    const id = setInterval(
      () => setActive((current) => (current + 1) % PILLARS.length),
      ROTATION_MS,
    );
    return () => clearInterval(id);
  }, [reduced, paused, visible]);

  return (
    <section className="relative overflow-hidden bg-navy-deep px-4 py-6 lg:px-10 lg:py-14">
      <img
        src={blueprint.url}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-[-24%] top-[4%] w-[85%] opacity-25 mix-blend-screen motion-safe:animate-float lg:right-[-8%] lg:top-[2%] lg:w-[46%] lg:opacity-30"
        style={{ filter: "invert(1) hue-rotate(180deg)" }}
      />

      <div className="relative mx-auto w-full max-w-[1600px]">
        {/* Intro */}
        <div
          ref={ref}
          className="group lg:grid lg:grid-cols-12 lg:items-center lg:gap-12"
          data-visible={visible}
        >
          <div className="lg:col-span-7">
            <p className="text-[11px] font-extrabold uppercase tracking-wide text-brand-green lg:text-base">
              The ABSB Advantage
            </p>
            <span className="mt-1.5 block h-[3px] w-10 origin-left bg-brand-green transition-transform duration-700 group-data-[visible=false]:scale-x-0 lg:w-14" />

            <h2 className="mt-2 text-[2.05rem] font-extrabold uppercase leading-[0.98] tracking-[-0.02em] text-white lg:mt-3 lg:text-[4.2rem]">
              {["Engineering", "Certainty."].map((word, i) => (
                <span key={word} className="block overflow-hidden pb-[0.06em]">
                  <span
                    className="block transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-data-[visible=false]:translate-y-full"
                    style={{ transitionDelay: `${120 + i * 120}ms` }}
                  >
                    <span className={i === 1 ? "text-brand-green" : undefined}>{word}</span>
                  </span>
                </span>
              ))}
            </h2>

            <p className="mt-2.5 text-[1rem] font-extrabold uppercase leading-tight text-white transition-all delay-[420ms] duration-700 group-data-[visible=false]:translate-y-3 group-data-[visible=false]:opacity-0 lg:mt-4 lg:text-[1.7rem]">
              Not just construction.
              <br />
              <span className="text-brand-green">Complete control.</span>
            </p>

            <span className="mt-3 block h-[3px] w-14 origin-left bg-brand-green transition-transform delay-[520ms] duration-700 group-data-[visible=false]:scale-x-0 lg:mt-4 lg:w-16" />

            <div className="mt-3 max-w-[46ch] space-y-2.5 text-[0.8rem] font-bold leading-[1.45] text-white transition-all delay-[600ms] duration-700 group-data-[visible=false]:translate-y-3 group-data-[visible=false]:opacity-0 lg:mt-5 lg:max-w-[52ch] lg:space-y-3 lg:text-[1.05rem]">
              <p>
                ABSB delivers G+1 turnkey villas, premium fit-outs and integrated MEP systems with
                engineering precision, operational control and contractual protection at every
                stage.
              </p>
              <p>
                We don&apos;t just build structures. We engineer certainty, eliminate risk and
                deliver lasting value.
              </p>
            </div>
          </div>

          <div className="mt-5 lg:col-span-5 lg:mt-0">
            <Radar active={active} onSelect={setActive} />
          </div>
        </div>

        {/* Pillar showcase */}
        <div
          className="mt-4 flex flex-col gap-2 lg:mt-10 lg:h-[300px] lg:flex-row lg:gap-4"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          {PILLARS.map(({ icon: Icon, title, note, detail }, i) => {
            const isActive = i === active;
            return (
              <button
                key={title[0]}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                data-active={isActive}
                className={cn(
                  "group/panel relative flex flex-col items-stretch justify-start overflow-hidden rounded-2xl border p-3 text-left transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] lg:p-5",
                  isActive
                    ? "border-brand-green/45 bg-navy/70 lg:flex-[2.4]"
                    : "border-white/12 bg-navy/40 hover:border-white/30 lg:flex-[1]",
                )}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -inset-y-12 -left-1/4 w-1/4 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/panel:opacity-100 motion-safe:group-hover/panel:animate-sheen"
                />

                <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-4">
                  <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-full border border-brand-blue/40 bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--brand-blue)_45%,transparent)_0%,transparent_72%)] lg:h-16 lg:w-16">
                    {isActive && (
                      <span
                        aria-hidden
                        className="absolute inset-0 rounded-full border border-brand-green/50 motion-safe:animate-halo"
                      />
                    )}
                    <Icon className="h-5 w-5 text-brand-green lg:h-7 lg:w-7" strokeWidth={1.8} />
                  </span>
                  <p className="text-[0.85rem] font-extrabold uppercase leading-tight text-white lg:text-[1.25rem]">
                    {title[0]}
                    <br className="hidden lg:block" />
                    <span className="lg:hidden"> </span>
                    {title[1]}
                  </p>
                </div>

                <span
                  className="mt-2.5 block h-[2px] w-8 bg-brand-green transition-all duration-700 data-[active=true]:w-14 lg:mt-4"
                  data-active={isActive}
                />

                <div
                  data-active={isActive}
                  className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 data-[active=true]:grid-rows-[1fr] data-[active=true]:opacity-100"
                >
                  <div className="overflow-hidden">
                    <p className="pt-2 text-[0.68rem] font-extrabold uppercase leading-tight text-brand-green lg:pt-3 lg:text-[0.95rem]">
                      {note[0]} {note[1]}
                    </p>
                    <p className="mt-1.5 text-[0.78rem] font-medium leading-snug text-white/90 lg:mt-2.5 lg:text-[1.05rem]">
                      {detail}
                    </p>
                  </div>
                </div>

                {/* Auto-advance progress */}
                <span className="absolute inset-x-0 bottom-0 h-[3px] overflow-hidden bg-white/10">
                  {isActive && (
                    <span
                      key={`${active}-${paused}`}
                      className={cn(
                        "block h-full origin-left bg-brand-green",
                        reduced || paused
                          ? "scale-x-100"
                          : "motion-safe:animate-progress motion-reduce:scale-x-100",
                      )}
                    />
                  )}
                </span>
              </button>
            );
          })}
        </div>

        <Strength />

        {/* CTA */}
        <div className="group mt-3 rounded-2xl border border-brand-blue/60 bg-[linear-gradient(105deg,var(--navy)_0%,var(--brand-blue)_120%)] px-3 py-4 lg:mt-8 lg:flex lg:items-center lg:justify-between lg:gap-8 lg:px-8 lg:py-6">
          <div className="flex items-center gap-3 lg:gap-5">
            <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-full border border-brand-green/50 lg:h-16 lg:w-16">
              <span
                aria-hidden
                className="absolute inset-0 rounded-full border border-brand-green/40 motion-safe:animate-halo"
              />
              <Compass
                className="h-6 w-6 text-brand-green transition-transform duration-700 group-hover:rotate-45 lg:h-8 lg:w-8"
                strokeWidth={1.8}
              />
            </span>
            <div className="min-w-0">
              <p className="text-[0.95rem] font-extrabold uppercase leading-tight text-white lg:text-[1.5rem]">
                Let&apos;s Engineer Your Vision
              </p>
              <p className="mt-0.5 text-[0.8rem] font-medium text-white/90 lg:text-[1.05rem]">
                With precision. With confidence. With ABSB.
              </p>
            </div>
          </div>
          <a
            href="#"
            className="relative mt-3.5 flex items-center justify-between gap-3 overflow-hidden rounded-md bg-brand-green px-4 py-3 lg:mt-0 lg:shrink-0 lg:px-8 lg:py-4"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-y-8 -left-1/3 w-1/3 rotate-12 bg-white/30 opacity-0 group-hover:opacity-100 motion-safe:group-hover:animate-sheen"
            />
            <span className="relative flex-1 text-center text-[0.95rem] font-extrabold uppercase tracking-wide text-navy-deep lg:text-[1.1rem]">
              Start Your Project
            </span>
            <ArrowRight
              className="relative h-5 w-5 text-navy-deep transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={2.4}
            />
          </a>
        </div>
      </div>
    </section>
  );
}

function Radar({ active, onSelect }: { active: number; onSelect: (index: number) => void }) {
  return (
    <div className="relative mx-auto aspect-square w-[240px] lg:w-full lg:max-w-[420px]">
      {/* Sweep */}
      <span
        aria-hidden
        className="absolute inset-[6%] rounded-full opacity-70 motion-safe:animate-reticle"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, color-mix(in oklab, var(--brand-green) 30%, transparent) 34deg, transparent 62deg)",
        }}
      />
      {/* Rings */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-full border border-dashed border-brand-blue/45 motion-safe:animate-reticle-reverse"
      />
      <span
        aria-hidden
        className="absolute inset-[14%] rounded-full border border-white/12 motion-safe:animate-reticle"
      />
      <span aria-hidden className="absolute inset-[30%] rounded-full border border-white/10" />

      {/* Centre */}
      <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-brand-green/40 bg-navy-deep lg:h-24 lg:w-24">
        <span
          aria-hidden
          className="absolute inset-0 rounded-full border border-brand-green/40 motion-safe:animate-halo"
        />
        <Compass className="h-6 w-6 text-brand-green lg:h-9 lg:w-9" strokeWidth={1.6} />
      </span>

      {/* Nodes */}
      {PILLARS.map(({ icon: Icon, title }, i) => {
        const angle = ((-90 + i * 120) * Math.PI) / 180;
        const isActive = i === active;
        return (
          <button
            key={title[0]}
            type="button"
            onClick={() => onSelect(i)}
            aria-label={`${title[0]} ${title[1]}`}
            aria-pressed={isActive}
            className={cn(
              "absolute grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border bg-navy-deep transition-all duration-500 lg:h-16 lg:w-16",
              isActive
                ? "scale-110 border-brand-green shadow-[0_0_24px_color-mix(in_oklab,var(--brand-green)_45%,transparent)]"
                : "border-white/20 hover:border-white/45",
            )}
            style={{ left: `${50 + 38 * Math.cos(angle)}%`, top: `${50 + 38 * Math.sin(angle)}%` }}
          >
            <Icon
              className={cn(
                "h-5 w-5 transition-colors lg:h-7 lg:w-7",
                isActive ? "text-brand-green" : "text-white/70",
              )}
              strokeWidth={1.8}
            />
          </button>
        );
      })}
    </div>
  );
}

function Strength() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="group mt-3 rounded-2xl border border-white/12 bg-navy/50 px-3 py-4 lg:mt-8 lg:px-7 lg:py-7"
      data-visible={visible}
    >
      <p className="text-[0.95rem] font-extrabold uppercase text-brand-green lg:text-[1.5rem]">
        Our Strength
      </p>
      <span className="mt-1.5 block h-[3px] w-10 origin-left bg-brand-green transition-transform duration-700 group-data-[visible=false]:scale-x-0 lg:w-14" />

      <div className="mt-2 divide-y divide-white/12 lg:mt-5 lg:grid lg:grid-cols-2 lg:gap-4 lg:divide-y-0">
        {STRENGTH.map(({ icon: Icon, title, note }, i) => (
          <div
            key={title}
            style={{ transitionDelay: `${i * 110}ms` }}
            className="group/item relative flex items-center gap-3 py-2.5 transition-all duration-700 group-data-[visible=false]:translate-y-3 group-data-[visible=false]:opacity-0 lg:gap-5 lg:rounded-xl lg:border lg:border-white/10 lg:bg-navy-deep/40 lg:p-4 lg:hover:border-brand-green/40"
          >
            <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-blue/20 lg:h-16 lg:w-16">
              <Icon
                className="h-5 w-5 text-brand-green transition-transform duration-500 group-hover/item:scale-110 lg:h-8 lg:w-8"
                strokeWidth={1.8}
              />
            </span>
            <span className="h-full w-px shrink-0 self-stretch bg-white/20 transition-colors duration-500 group-hover/item:bg-brand-green/60" />
            <div className="min-w-0">
              <p className="text-[0.8rem] font-extrabold uppercase leading-tight text-white lg:text-[1.15rem]">
                {title}
              </p>
              <p className="mt-0.5 text-[0.78rem] font-medium leading-snug text-white/85 lg:text-[1rem]">
                {note}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
