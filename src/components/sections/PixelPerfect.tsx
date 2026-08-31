import { ArrowRight, Award, Crosshair, Eye, Grid2x2, Search, ShieldCheck } from "lucide-react";
import { CardMedia, PillarCard } from "@/components/sections/VisualPillar";
import { placeholderImage, type Pillar } from "@/lib/section-images";

const ITEMS: Pillar[] = [
  {
    icon: Crosshair,
    title: "Precise alignment",
    sub: "Every line. Every angle.",
    note: "Perfect alignment in every element for a clean, balanced finish.",
    image: placeholderImage,
    alt: "Villa facade with alignment guides overlaid",
  },
  {
    icon: Grid2x2,
    title: "Flawless finish",
    sub: "Smooth. Sharp. Sophisticated.",
    note: "High-quality materials and expert execution for a seamless, pixel-perfect finish.",
    image: placeholderImage,
    alt: "Close-up of a precisely jointed cladding panel",
  },
  {
    icon: Search,
    title: "Details that matter",
    sub: "We don’t overlook anything.",
    note: "Every joint, edge and corner is crafted with precision and care.",
    image: placeholderImage,
    alt: "Sharp corner detail between wall and ceiling trim",
  },
  {
    icon: Eye,
    title: "Consistent appearance",
    sub: "Beautiful today. Timeless tomorrow.",
    note: "A consistent look that maintains its beauty for years to come.",
    image: placeholderImage,
    alt: "Villa exterior lit at dusk",
  },
  {
    icon: Award,
    title: "Built to impress",
    sub: "Quality you can see.",
    note: "Visual excellence that enhances value, builds trust and leaves a lasting impression.",
    image: placeholderImage,
    alt: "Illuminated villa entrance with premium finishes",
  },
];

export function PixelPerfect() {
  return (
    <section className="bg-navy-deep px-4 py-6 lg:px-10 lg:py-12">
      <div className="mx-auto w-full max-w-[1600px]">
        <p className="text-[11px] font-extrabold uppercase tracking-wide text-brand-green lg:text-base">
          Visual Integrity
        </p>
        <span className="mt-1.5 block h-[3px] w-10 bg-brand-green lg:w-14" />

        <h2 className="mt-2 text-[1.72rem] font-extrabold uppercase leading-[1.04] tracking-[-0.02em] text-white lg:mt-3 lg:text-[3.8rem]">
          <span className="text-brand-green">Pixel Perfect.</span>
          <br />
          Built To Impress<span className="text-brand-green">.</span>
        </h2>

        <p className="mt-2 text-[0.85rem] font-bold leading-snug text-white lg:mt-5 lg:text-[1.35rem]">
          From smallest details to overall finish,
          <br />
          we deliver a <span className="text-brand-green">flawless visual outcome.</span>
        </p>

        {/* Pillars */}
        <div className="mt-3 space-y-2 lg:mt-8 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0">
          {ITEMS.map((pillar) => (
            <PillarCard key={pillar.title} pillar={pillar} />
          ))}

          {/* Closing statement, sharing the pillar grid */}
          <div className="overflow-hidden rounded-2xl border border-white/12 bg-navy/40">
            <div className="grid grid-cols-[1.08fr_1fr] items-center gap-2.5 p-2.5 lg:gap-5 lg:p-4">
              <div>
                <p className="text-[0.82rem] font-extrabold uppercase leading-tight text-white lg:text-[1.35rem]">
                  Good is common.
                  <br />
                  <span className="text-brand-green">Excellence is our standard.</span>
                </p>
                <span className="mt-2 block h-px w-24 bg-brand-green/60 lg:mt-3 lg:w-28" />
                <div className="mt-2 flex items-center gap-2 lg:mt-3 lg:gap-3">
                  <Crosshair
                    className="h-5 w-5 shrink-0 text-brand-green lg:h-7 lg:w-7"
                    strokeWidth={1.8}
                  />
                  <p className="text-[0.78rem] font-extrabold uppercase leading-tight text-white lg:text-[1rem]">
                    Pixel Perfect.
                    <br />
                    Visibly Better.
                  </p>
                </div>
              </div>
              <CardMedia
                image={placeholderImage}
                alt="Blueprint wireframe of the villa"
                className="h-[190px] w-full lg:h-[200px]"
              />
            </div>
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
            Every detail. Every time.
            <br />
            <span className="text-brand-green">That&rsquo;s our promise.</span>
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
