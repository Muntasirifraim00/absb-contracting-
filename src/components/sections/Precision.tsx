import { ArrowRight, Check, Crosshair, Ruler, ShieldCheck, Timer } from "lucide-react";
import deviationAllowed from "@/assets/deviation-allowed.png.asset.json";
import { useCountUp, useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

const SPECS = [
  {
    id: "01",
    icon: ShieldCheck,
    title: "Zero Compromise",
    sub: "Quality without exception",
    note: "We don’t accept “good enough”. Every material, process and detail meets the highest standard.",
    metric: { label: "Quality standard", target: 100, unit: "%", decimals: 0 },
  },
  {
    id: "02",
    icon: Timer,
    title: "Zero Delay",
    sub: "Committed to timelines",
    note: "With in-house resources, owned assets and strict planning, we deliver on time, every time.",
    metric: { label: "On-time delivery", target: 100, unit: "%", decimals: 0 },
  },
  {
    id: "03",
    icon: Ruler,
    title: "1mm Tolerance",
    sub: "Precision in every millimeter",
    note: "From structural alignment to finishing, our 1mm tolerance policy ensures perfect execution.",
    metric: { label: "Alignment tolerance", target: 1, unit: "mm", decimals: 2 },
  },
];

const MARQUEE = ["Zero Compromise", "Zero Delay", "1mm Tolerance", "Engineering Control"];

const PROMISES = ["No hidden variations", "No last-minute surprises", "No excuses"];

export function Precision() {
  return (
    <section className="relative overflow-hidden bg-navy-deep px-4 py-6 lg:px-10 lg:py-14">
      {/* Drifting survey grid */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.16] motion-safe:animate-grid-drift"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in oklab, var(--brand-blue) 55%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--brand-blue) 55%, transparent) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(120% 80% at 50% 0%, black 20%, transparent 78%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1600px]">
        <Header />

        <Marquee />

        <div className="mt-4 lg:mt-10 lg:grid lg:grid-cols-12 lg:items-start lg:gap-10">
          <div className="lg:col-span-5 lg:sticky lg:top-10">
            <Console />
          </div>

          <div className="mt-3 space-y-2.5 lg:col-span-7 lg:mt-0 lg:space-y-4">
            {SPECS.map((spec, i) => (
              <SpecRow key={spec.id} spec={spec} delay={i * 110} />
            ))}
          </div>
        </div>

        <Promise />

        {/* CTA */}
        <div className="group mt-3 flex items-center gap-3 rounded-2xl border border-brand-blue/60 bg-[linear-gradient(105deg,var(--navy)_0%,var(--brand-blue)_130%)] px-3 py-3 lg:mt-8 lg:gap-6 lg:px-8 lg:py-5">
          <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full border border-brand-green/40 lg:h-14 lg:w-14">
            <span
              aria-hidden
              className="absolute inset-0 rounded-full border border-brand-green/50 motion-safe:animate-halo"
            />
            <Crosshair className="h-5 w-5 text-brand-green lg:h-7 lg:w-7" strokeWidth={1.8} />
          </span>
          <p className="min-w-0 flex-1 text-[0.8rem] font-extrabold uppercase leading-tight text-white lg:text-[1.45rem]">
            Engineered for certainty.
            <br />
            Delivered with confidence.
          </p>
          <a
            href="#"
            aria-label="Start your project"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-brand-green transition-transform duration-300 group-hover:scale-105 lg:h-14 lg:w-14"
          >
            <ArrowRight
              className="h-5 w-5 text-navy-deep transition-transform duration-300 group-hover:translate-x-0.5 lg:h-7 lg:w-7"
              strokeWidth={2.4}
            />
          </a>
        </div>
      </div>
    </section>
  );
}

function Header() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  const lines = [
    { accent: "Zero", rest: " Compromise." },
    { accent: "Zero", rest: " Delay." },
    { accent: "1mm", rest: " Tolerance." },
  ];

  return (
    <div ref={ref} className="group" data-visible={visible}>
      <p className="text-[11px] font-extrabold uppercase tracking-wide text-brand-green lg:text-base">
        The ABSB Advantage
      </p>
      <span className="mt-1.5 block h-[3px] w-10 origin-left bg-brand-green transition-transform duration-700 lg:w-14 group-data-[visible=false]:scale-x-0" />

      <h2 className="mt-2 text-[1.72rem] font-extrabold uppercase leading-[1.04] tracking-[-0.02em] text-white lg:mt-3 lg:text-[3.8rem]">
        {lines.map((line, i) => (
          <span key={line.rest} className="block overflow-hidden pb-[0.06em]">
            <span
              className="block transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-data-[visible=false]:translate-y-full"
              style={{ transitionDelay: `${120 + i * 110}ms` }}
            >
              <span className="text-brand-green">{line.accent}</span>
              {line.rest}
            </span>
          </span>
        ))}
      </h2>

      <p className="mt-3 max-w-[46ch] text-[0.95rem] font-bold leading-snug text-white transition-all duration-700 delay-500 lg:mt-5 lg:text-[1.35rem] group-data-[visible=false]:translate-y-3 group-data-[visible=false]:opacity-0">
        Our engineering-first approach ensures{" "}
        <span className="text-brand-green">absolute precision</span>, no compromises and zero room
        for error.
      </p>
    </div>
  );
}

function Marquee() {
  return (
    <div
      className="relative mt-4 overflow-hidden border-y border-white/12 py-2 lg:mt-7 lg:py-3"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
      }}
    >
      <div className="flex w-max motion-safe:animate-marquee">
        {[0, 1].map((copy) => (
          <div key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
            {MARQUEE.map((word) => (
              <span
                key={word}
                className="flex items-center gap-3 whitespace-nowrap px-3 text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-white/75 lg:gap-6 lg:px-6 lg:text-[0.95rem]"
              >
                {word}
                <span className="h-1.5 w-1.5 rotate-45 bg-brand-green" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Console() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const tolerance = useCountUp(1, visible);

  return (
    <div
      ref={ref}
      data-visible={visible}
      className="relative overflow-hidden rounded-2xl border border-white/12 bg-navy/50 p-3 transition-all duration-700 data-[visible=false]:translate-y-4 data-[visible=false]:opacity-0 lg:p-5"
    >
      <div className="flex items-center justify-between">
        <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.2em] text-brand-green lg:text-[0.8rem]">
          Live precision check
        </p>
        <span className="flex items-center gap-1.5 text-[0.62rem] font-bold uppercase tracking-wide text-white/70 lg:text-[0.75rem]">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-green motion-safe:animate-pulse" />
          Calibrated
        </span>
      </div>

      <div className="relative mt-2.5 overflow-hidden rounded-xl border border-brand-blue/25 bg-navy-deep lg:mt-4">
        <img
          src={deviationAllowed.url}
          alt="Surveyor checking villa alignment with a total station at dusk"
          className="h-[190px] w-full object-cover lg:h-[300px]"
        />

        {/* Scanning beam */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-brand-green shadow-[0_0_18px_4px_color-mix(in_oklab,var(--brand-green)_60%,transparent)] motion-safe:animate-scan-y"
        />

        {/* Rotating reticle */}
        <span
          aria-hidden
          className="pointer-events-none absolute right-3 top-3 grid h-10 w-10 place-items-center lg:h-14 lg:w-14"
        >
          <span className="absolute inset-0 rounded-full border border-dashed border-brand-green/50 motion-safe:animate-reticle" />
          <span className="absolute inset-2 rounded-full border border-brand-blue/60 motion-safe:animate-reticle-reverse" />
          <span className="h-1 w-1 rounded-full bg-brand-green" />
        </span>

        {/* Corner brackets */}
        {[
          "left-2 top-2 border-l-2 border-t-2",
          "right-2 top-2 border-r-2 border-t-2",
          "left-2 bottom-2 border-b-2 border-l-2",
          "right-2 bottom-2 border-b-2 border-r-2",
        ].map((pos) => (
          <span
            key={pos}
            aria-hidden
            className={cn("pointer-events-none absolute h-4 w-4 border-brand-green/70", pos)}
          />
        ))}
      </div>

      <div className="mt-2.5 flex items-end justify-between gap-3 lg:mt-4">
        <div>
          <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.18em] text-white/60 lg:text-[0.75rem]">
            Deviation allowed
          </p>
          <p className="text-[1.6rem] font-extrabold leading-none text-white tabular-nums lg:text-[2.6rem]">
            {tolerance.toFixed(2)}
            <span className="ml-1 text-[0.9rem] font-bold text-brand-green lg:text-[1.2rem]">
              mm
            </span>
          </p>
        </div>
        <div className="flex-1">
          <span className="block h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <span
              className="block h-full rounded-full bg-brand-green transition-[width] duration-[1400ms] ease-out"
              style={{ width: visible ? "100%" : "0%" }}
            />
          </span>
          <p className="mt-1 text-right text-[0.6rem] font-bold uppercase tracking-wide text-white/60 lg:text-[0.72rem]">
            Within tolerance
          </p>
        </div>
      </div>
    </div>
  );
}

function SpecRow({ spec, delay }: { spec: (typeof SPECS)[number]; delay: number }) {
  const { ref, visible } = useReveal<HTMLElement>();
  const { icon: Icon, id, title, sub, note, metric } = spec;
  const count = useCountUp(metric.target, visible);

  return (
    <article
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className="group relative overflow-hidden rounded-2xl border border-white/12 bg-navy/45 p-3 transition-all duration-700 hover:-translate-y-0.5 hover:border-brand-green/40 data-[visible=false]:translate-y-5 data-[visible=false]:opacity-0 lg:p-5"
    >
      {/* Hairline that draws across on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-brand-green to-transparent transition-transform duration-700 group-hover:scale-x-100"
      />
      {/* Light sweep on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-y-12 -left-1/4 w-1/4 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 motion-safe:group-hover:animate-sheen"
      />

      <div className="relative flex items-start gap-3 lg:gap-5">
        <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-full border border-brand-blue/40 bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--brand-blue)_45%,transparent)_0%,transparent_72%)] lg:h-[72px] lg:w-[72px]">
          <span
            aria-hidden
            className="absolute inset-0 rounded-full border border-brand-green/40 opacity-0 group-hover:opacity-100 motion-safe:group-hover:animate-halo"
          />
          <Icon
            className="h-6 w-6 text-brand-green transition-transform duration-500 group-hover:scale-110 lg:h-9 lg:w-9"
            strokeWidth={1.8}
          />
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="text-[1.02rem] font-extrabold uppercase leading-tight text-white lg:text-[1.5rem]">
              {title}
            </h3>
            <span
              aria-hidden
              className="shrink-0 text-[1.5rem] font-black leading-none text-transparent lg:text-[2.6rem] [-webkit-text-stroke:1px_color-mix(in_oklab,var(--color-white)_22%,transparent)]"
            >
              {id}
            </span>
          </div>
          <p className="mt-0.5 text-[0.72rem] font-extrabold uppercase leading-tight text-brand-green lg:text-[1rem]">
            {sub}
          </p>
          <p className="mt-1.5 text-[0.8rem] font-medium leading-snug text-white/90 lg:mt-2.5 lg:text-[1.05rem]">
            {note}
          </p>

          {/* Metric meter */}
          <div className="mt-2.5 lg:mt-4">
            <div className="flex items-center justify-between text-[0.62rem] font-extrabold uppercase tracking-[0.14em] text-white/60 lg:text-[0.78rem]">
              <span>{metric.label}</span>
              <span className="text-brand-green tabular-nums">
                {count.toFixed(metric.decimals)}
                {metric.unit}
              </span>
            </div>
            <span className="mt-1.5 block h-1 w-full overflow-hidden rounded-full bg-white/10">
              <span
                className="block h-full rounded-full bg-gradient-to-r from-brand-blue to-brand-green transition-[width] duration-[1600ms] ease-out"
                style={{ width: visible ? "100%" : "0%", transitionDelay: `${delay + 150}ms` }}
              />
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

function Promise() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-visible={visible}
      className="group mt-3 overflow-hidden rounded-2xl border border-white/12 bg-navy/45 p-3 lg:mt-8 lg:p-6"
    >
      <div className="lg:flex lg:items-center lg:justify-between lg:gap-10">
        <div className="flex gap-3">
          <span className="w-[3px] shrink-0 origin-top bg-brand-green transition-transform duration-700 group-data-[visible=false]:scale-y-0" />
          <div>
            <p className="text-[1.05rem] font-extrabold uppercase leading-tight text-white lg:text-[1.9rem]">
              From Design
              <br />
              <span className="text-brand-green">To Reality</span>
            </p>
            <p className="mt-2 text-[0.85rem] font-bold leading-snug text-white lg:mt-3 lg:text-[1.1rem]">
              What we promise on paper,
              <br />
              we deliver in reality.
            </p>
          </div>
        </div>

        {/* Promise rail */}
        <div className="relative mt-4 lg:mt-0 lg:flex-1">
          <span
            aria-hidden
            className="absolute left-3 top-3 h-[calc(100%-1.5rem)] w-px origin-top bg-brand-green/40 transition-transform duration-[1200ms] group-data-[visible=false]:scale-y-0 lg:hidden"
          />
          <span
            aria-hidden
            className="absolute left-0 top-3 hidden h-px w-full origin-left bg-brand-green/40 transition-transform duration-[1200ms] group-data-[visible=false]:scale-x-0 lg:block"
          />
          <ul className="relative space-y-3 lg:flex lg:justify-between lg:space-y-0">
            {PROMISES.map((text, i) => (
              <li
                key={text}
                style={{ transitionDelay: `${300 + i * 160}ms` }}
                className="flex items-center gap-3 transition-all duration-500 lg:w-[30%] lg:flex-col lg:items-start lg:gap-2 group-data-[visible=false]:translate-y-2 group-data-[visible=false]:opacity-0"
              >
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-brand-green/50 bg-navy-deep">
                  <Check className="h-3.5 w-3.5 text-brand-green" strokeWidth={3} />
                </span>
                <span className="text-[0.85rem] font-bold leading-snug text-white lg:text-[1.05rem]">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
