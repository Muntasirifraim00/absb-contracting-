import { ArrowRight, Crosshair, ShieldCheck, Handshake, Users, Settings, FileCheck2, Compass } from "lucide-react";
import blueprint from "@/assets/blueprint-villa.png.asset.json";

const PILLARS = [
  { icon: Crosshair, title: ["ENGINEERED", "PRECISION"], note: ["1mm TOLERANCE.", "ZERO COMPROMISE."] },
  { icon: ShieldCheck, title: ["END-TO-END", "CONTROL"], note: ["IN-HOUSE EXPERTISE.", "ZERO DEPENDENCY."] },
  { icon: Handshake, title: ["CONTRACTUAL", "CERTAINTY"], note: ["FIXED PRICE.", "ZERO SURPRISES."] },
];

const STRENGTH = [
  { icon: Users, title: "ENGINEERS, NOT SALESMEN", note: "Direct access to technical minds, not middlemen." },
  { icon: Settings, title: "OWNED ASSETS, ZERO DELAY", note: "Fleet, manpower, warehouse and equipment ensure uninterrupted execution." },
  { icon: ShieldCheck, title: "DUAL LICENSING AUTHORITY", note: "Building Contracting + Maintenance License for complete project lifecycle." },
  { icon: FileCheck2, title: "TRANSPARENT. ACCOUNTABLE. RELIABLE.", note: "Clear communication, weekly updates and zero hiding." },
];

export function Advantage() {
  return (
    <section className="relative overflow-hidden bg-navy-deep px-4 py-6 lg:px-10 lg:py-12">
      <img
        src={blueprint.url}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-[-14%] top-[6%] w-[75%] opacity-40 mix-blend-screen lg:right-[-4%] lg:top-[4%] lg:w-[42%] lg:opacity-50"
        style={{ filter: "invert(1) hue-rotate(180deg)" }}
      />

      <div className="relative mx-auto w-full max-w-[1600px]">
        <p className="text-[11px] font-extrabold uppercase tracking-wide text-brand-green lg:text-base">
          The ABSB Advantage
        </p>
        <span className="mt-1.5 block h-[3px] w-10 bg-brand-green lg:w-14" />

        <h2 className="mt-2 text-[2.05rem] font-extrabold uppercase leading-[0.98] tracking-[-0.02em] text-white lg:mt-3 lg:text-[4rem]">
          Engineering
          <br />
          <span className="text-brand-green">Certainty.</span>
        </h2>

        <p className="mt-2.5 text-[1rem] font-extrabold uppercase leading-tight text-white lg:mt-4 lg:text-[1.7rem]">
          Not just construction.
          <br />
          <span className="text-brand-green">Complete control.</span>
        </p>

        <span className="mt-3 block h-[3px] w-14 bg-brand-green lg:mt-4 lg:w-16" />

        <div className="mt-3 max-w-[46ch] space-y-2.5 text-[0.8rem] font-bold leading-[1.45] text-white lg:mt-5 lg:max-w-[52ch] lg:space-y-3 lg:text-[1.05rem]">
          <p>
            ABSB delivers G+1 turnkey villas, premium fit-outs and integrated MEP systems with engineering precision,
            operational control and contractual protection at every stage.
          </p>
          <p>We don&apos;t just build structures. We engineer certainty, eliminate risk and deliver lasting value.</p>
        </div>

        {/* Pillars */}
        <div className="mt-4 rounded-2xl border border-white/15 bg-navy/60 px-2 py-4 lg:mt-8 lg:px-6 lg:py-7">
          <div className="grid grid-cols-3 divide-x divide-white/20">
            {PILLARS.map(({ icon: Icon, title, note }) => (
              <div key={title[0]} className="flex flex-col items-center px-1.5 text-center lg:px-6">
                <Icon className="h-8 w-8 text-brand-green lg:h-12 lg:w-12" strokeWidth={1.8} />
                <p className="mt-2.5 text-[0.72rem] font-extrabold uppercase leading-tight text-white lg:mt-4 lg:text-[1.2rem]">
                  {title[0]}
                  <br />
                  {title[1]}
                </p>
                <span className="mt-2 block h-[2px] w-8 bg-brand-green lg:mt-3 lg:w-12" />
                <p className="mt-2 text-[0.62rem] font-extrabold uppercase leading-tight text-white lg:mt-3 lg:text-[0.9rem]">
                  {note[0]}
                  <br />
                  {note[1]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Our strength */}
        <div className="mt-3 rounded-2xl border border-white/12 bg-navy/50 px-3 py-4 lg:mt-6 lg:px-7 lg:py-7">
          <p className="text-[0.95rem] font-extrabold uppercase text-brand-green lg:text-[1.5rem]">Our Strength</p>
          <span className="mt-1.5 block h-[3px] w-10 bg-brand-green lg:w-14" />

          <div className="mt-2 divide-y divide-white/12 lg:mt-4 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:divide-y-0">
            {STRENGTH.map(({ icon: Icon, title, note }) => (
              <div key={title} className="flex items-center gap-3 py-3 lg:gap-5 lg:py-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-blue/20 lg:h-16 lg:w-16">
                  <Icon className="h-5 w-5 text-brand-green lg:h-8 lg:w-8" strokeWidth={1.8} />
                </span>
                <span className="h-full w-px shrink-0 self-stretch bg-white/20" />
                <div className="min-w-0">
                  <p className="text-[0.8rem] font-extrabold uppercase leading-tight text-white lg:text-[1.15rem]">
                    {title}
                  </p>
                  <p className="mt-0.5 text-[0.78rem] font-medium leading-snug text-white/85 lg:text-[1rem]">{note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-3 rounded-2xl border border-brand-blue/60 bg-[linear-gradient(105deg,var(--navy)_0%,var(--brand-blue)_120%)] px-3 py-4 lg:mt-6 lg:flex lg:items-center lg:justify-between lg:gap-8 lg:px-8 lg:py-6">
          <div className="flex items-center gap-3 lg:gap-5">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-brand-green/50 lg:h-16 lg:w-16">
              <Compass className="h-6 w-6 text-brand-green lg:h-8 lg:w-8" strokeWidth={1.8} />
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
            className="mt-3.5 flex items-center justify-between gap-3 rounded-md bg-brand-green px-4 py-3 lg:mt-0 lg:shrink-0 lg:px-8 lg:py-4"
          >
            <span className="flex-1 text-center text-[0.95rem] font-extrabold uppercase tracking-wide text-navy-deep lg:text-[1.1rem]">
              Start Your Project
            </span>
            <ArrowRight className="h-5 w-5 text-navy-deep" strokeWidth={2.4} />
          </a>
        </div>
      </div>
    </section>
  );
}
