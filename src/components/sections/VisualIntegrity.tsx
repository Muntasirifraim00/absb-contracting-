import { ArrowRight, ClipboardCheck, Crosshair, HardHat, ShieldCheck } from "lucide-react";
import { CardMedia, PillarCard } from "@/components/sections/VisualPillar";
import { placeholderImage, type Pillar } from "@/lib/section-images";

const ITEMS: Pillar[] = [
  {
    icon: Crosshair,
    title: "Drawing to reality",
    sub: "100% follow-through",
    note: "Approved drawings. No deviation.",
    image: placeholderImage,
    alt: "Blueprint wireframe resolving into the finished villa",
  },
  {
    icon: ShieldCheck,
    title: "Quality at every step",
    sub: "Multi-stage checks",
    note: "Every stage is inspected, verified and documented.",
    image: placeholderImage,
    alt: "Site survey instrument checking a concrete structure",
  },
  {
    icon: ClipboardCheck,
    title: "Documented & traceable",
    sub: "Complete transparency",
    note: "Reports, inspections and photos for full clarity.",
    image: placeholderImage,
    alt: "Inspection checklist on a clipboard beside a safety helmet",
  },
  {
    icon: HardHat,
    title: "Engineered supervision",
    sub: "Experts on site",
    note: "Zero deviation, every single day.",
    image: placeholderImage,
    alt: "ABSB engineers reviewing drawings on an active site",
  },
];

export function VisualIntegrity() {
  return (
    <section className="bg-navy-deep px-4 py-6 lg:px-10 lg:py-12">
      <div className="mx-auto w-full max-w-[1600px]">
        <p className="text-[11px] font-extrabold uppercase tracking-wide text-brand-green lg:text-base">
          Visual Integrity
        </p>
        <span className="mt-1.5 block h-[3px] w-10 bg-brand-green lg:w-14" />

        <h2 className="mt-2 text-[1.72rem] font-extrabold uppercase leading-[1.04] tracking-[-0.02em] text-white lg:mt-3 lg:text-[3.8rem]">
          <span className="text-brand-green">Zero Deviation.</span>
          <br />
          Perfect Execution<span className="text-brand-green">.</span>
        </h2>

        <p className="mt-2 text-[0.85rem] font-bold leading-snug text-white lg:mt-5 lg:text-[1.35rem]">
          What you see is what you get.
          <br />
          Every detail, executed <span className="text-brand-green">exactly as planned.</span>
        </p>

        {/* Pillars */}
        <div className="mt-3 space-y-2 lg:mt-8 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0">
          {ITEMS.map((pillar) => (
            <PillarCard key={pillar.title} pillar={pillar} />
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-2 overflow-hidden rounded-2xl border border-white/12 bg-navy/40 lg:mt-6">
          <div className="grid grid-cols-[1.08fr_1fr] items-center gap-2.5 p-2.5 lg:grid-cols-2 lg:gap-8 lg:p-6">
            <div>
              <span className="grid h-9 w-9 place-items-center rounded-full border border-brand-green/40 lg:h-12 lg:w-12">
                <Crosshair className="h-4 w-4 text-brand-green lg:h-6 lg:w-6" strokeWidth={1.8} />
              </span>
              <p className="mt-2.5 text-[0.82rem] font-extrabold uppercase leading-tight text-white lg:mt-5 lg:text-[1.9rem]">
                Zero Deviation.
                <br />
                <span className="text-brand-green">Zero Compromise.</span>
              </p>
              <span className="mt-2 block h-px w-24 bg-brand-green/60 lg:mt-4 lg:w-36" />
              <p className="mt-2 text-[0.78rem] font-bold leading-snug text-white lg:mt-4 lg:text-[1.15rem]">
                Precision in plan.
                <br />
                Perfection in build.
              </p>
            </div>
            <CardMedia
              image={placeholderImage}
              alt="Completed villa measured against its blueprint"
              className="h-[190px] w-full lg:h-[320px]"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-2 flex items-center gap-2.5 rounded-2xl border border-brand-blue/60 bg-[linear-gradient(105deg,var(--navy)_0%,var(--brand-blue)_130%)] px-2.5 py-3 lg:mt-6 lg:gap-6 lg:px-8 lg:py-5">
          <ShieldCheck
            className="h-7 w-7 shrink-0 text-brand-green lg:h-10 lg:w-10"
            strokeWidth={1.8}
          />
          <span className="w-px shrink-0 self-stretch bg-white/25" />
          <p className="min-w-0 flex-1 text-[0.8rem] font-extrabold uppercase leading-tight text-white lg:text-[1.45rem]">
            We don&rsquo;t just follow standards.
            <br />
            <span className="text-brand-green">We set them.</span>
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
