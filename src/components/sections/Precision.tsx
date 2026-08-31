import { ArrowRight, ShieldCheck, Timer, Ruler, Crosshair, CheckCircle2 } from "lucide-react";
import blueprint from "@/assets/blueprint-villa.png.asset.json";

const ITEMS = [
  {
    icon: ShieldCheck,
    title: "ZERO COMPROMISE",
    sub: "QUALITY WITHOUT EXCEPTION",
    note: "We don\u2019t accept \u201Cgood enough\u201D. Every material, process and detail meets the highest standard.",
  },
  {
    icon: Timer,
    title: "ZERO DELAY",
    sub: "COMMITTED TO TIMELINES",
    note: "With in-house resources, owned assets and strict planning, we deliver on time, every time.",
  },
  {
    icon: Ruler,
    title: "1MM TOLERANCE",
    sub: "PRECISION IN EVERY MILLIMETER",
    note: "From structural alignment to finishing, our 1mm tolerance policy ensures perfect execution.",
  },
];

export function Precision() {
  return (
    <section className="bg-navy-deep px-4 py-6 lg:px-10 lg:py-12">
      <div className="mx-auto w-full max-w-[1600px]">
        <p className="text-[11px] font-extrabold uppercase tracking-wide text-brand-green lg:text-base">
          The ABSB Advantage
        </p>
        <span className="mt-1.5 block h-[3px] w-10 bg-brand-green lg:w-14" />

        <h2 className="mt-2 text-[2.05rem] font-extrabold uppercase leading-[1.02] tracking-[-0.02em] text-white lg:mt-3 lg:text-[3.8rem]">
          <span className="text-brand-green">Zero</span> Compromise<span className="text-brand-green">.</span>
          <br />
          <span className="text-brand-green">Zero</span> Delay<span className="text-brand-green">.</span>
          <br />
          <span className="text-brand-green">1mm</span> Tolerance<span className="text-brand-green">.</span>
        </h2>

        <p className="mt-3 max-w-[44ch] text-[0.95rem] font-bold leading-snug text-white lg:mt-5 lg:text-[1.35rem]">
          Our engineering-first approach ensures <span className="text-brand-green">absolute precision</span>, no
          compromises and zero room for error.
        </p>

        <span className="mt-3.5 block h-[2px] w-full bg-brand-green/70 lg:mt-6" />

        <div className="mt-1 divide-y divide-white/15 lg:mt-4 lg:grid lg:grid-cols-3 lg:gap-6 lg:divide-y-0">
          {ITEMS.map(({ icon: Icon, title, sub, note }) => (
            <div key={title} className="flex items-start gap-3.5 py-3 lg:flex-col lg:gap-4 lg:rounded-2xl lg:border lg:border-white/12 lg:bg-navy/50 lg:p-6">
              <span className="grid h-[68px] w-[68px] shrink-0 place-items-center rounded-full bg-brand-blue/15 lg:h-20 lg:w-20">
                <Icon className="h-8 w-8 text-brand-green lg:h-10 lg:w-10" strokeWidth={1.8} />
              </span>
              <span className="w-[2px] shrink-0 self-stretch bg-brand-green lg:hidden" />
              <div className="min-w-0">
                <p className="text-[1.05rem] font-extrabold uppercase leading-tight text-white lg:text-[1.4rem]">
                  {title}
                </p>
                <p className="mt-0.5 text-[0.8rem] font-extrabold uppercase leading-tight text-brand-green lg:text-[1rem]">
                  {sub}
                </p>
                <p className="mt-1 text-[0.85rem] font-medium leading-snug text-white/90 lg:text-[1rem]">{note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* From design to reality */}
        <div className="mt-3 overflow-hidden rounded-2xl border border-white/15 bg-navy/50 lg:mt-8">
          <div className="grid items-center gap-3 px-3.5 py-4 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-7">
            <div>
              <div className="flex gap-3">
                <span className="w-[3px] shrink-0 bg-brand-green" />
                <p className="text-[1.05rem] font-extrabold uppercase leading-tight text-white lg:text-[1.7rem]">
                  From Design
                  <br />
                  <span className="text-brand-green">To Reality</span>
                </p>
              </div>
              <p className="mt-2.5 text-[0.85rem] font-bold leading-snug text-white lg:mt-4 lg:text-[1.05rem]">
                What we promise on paper,
                <br />
                we deliver in reality.
              </p>
              <ul className="mt-2.5 space-y-1.5 lg:mt-4 lg:space-y-2.5">
                {["No hidden variations", "No last-minute surprises", "No excuses"].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-[0.85rem] font-medium text-white lg:text-[1.05rem]">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-green lg:h-5 lg:w-5" strokeWidth={2} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={blueprint.url}
              alt="Blueprint wireframe of a G+1 villa"
              className="mx-auto max-h-[190px] w-full object-contain opacity-90 mix-blend-screen lg:max-h-none"
              style={{ filter: "invert(1) hue-rotate(180deg)" }}
            />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-3 flex items-center gap-3 rounded-2xl border border-brand-blue/60 bg-[linear-gradient(105deg,var(--navy)_0%,var(--brand-blue)_130%)] px-3 py-3 lg:mt-6 lg:gap-6 lg:px-8 lg:py-5">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-brand-green/40 lg:h-14 lg:w-14">
            <Crosshair className="h-5 w-5 text-brand-green lg:h-7 lg:w-7" strokeWidth={1.8} />
          </span>
          <p className="min-w-0 flex-1 text-[0.95rem] font-extrabold uppercase leading-tight text-white lg:text-[1.45rem]">
            Engineered for certainty.
            <br />
            Delivered with confidence.
          </p>
          <a
            href="#"
            aria-label="Start your project"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-brand-green lg:h-14 lg:w-14"
          >
            <ArrowRight className="h-5 w-5 text-navy-deep lg:h-7 lg:w-7" strokeWidth={2.4} />
          </a>
        </div>
      </div>
    </section>
  );
}
