import { ArrowRight, FileText, TrendingUp, ShieldCheck, Settings, DollarSign, Clock, Award, Lock } from "lucide-react";

const ITEMS = [
  {
    icon: FileText,
    title: "FIXED-PRICE GUARANTEE",
    sub: "NO HIDDEN COSTS. NO SURPRISES.",
    note: "The price we agree is the price you pay. Fully transparent. Fully protected.",
  },
  {
    icon: TrendingUp,
    title: "COST-EFFICIENT BY DESIGN",
    sub: "SMART PLANNING. MAXIMUM VALUE.",
    note: "Optimized resources, validated materials and streamlined workflows reduce waste and deliver maximum value for your investment.",
  },
  {
    icon: ShieldCheck,
    title: "RISK PROTECTION",
    sub: "WE PROTECT YOUR PROJECT.",
    note: "From approvals to handover, we manage every risk so your project stays on track, on time and within budget.",
  },
  {
    icon: Settings,
    title: "OPERATIONAL EFFICIENCY",
    sub: "OWNED ASSETS. SKILLED TEAM.",
    note: "Our owned assets, in-house team and proven systems ensure smooth execution, faster delivery and uncompromised quality.",
  },
];

const MEANS = [
  { icon: DollarSign, title: ["BUDGET", "CERTAINTY"], note: "No Cost Overruns" },
  { icon: Clock, title: ["ON-TIME", "DELIVERY"], note: "Every Time" },
  { icon: Award, title: ["PREMIUM", "QUALITY"], note: "Every Detail" },
  { icon: Lock, title: ["COMPLETE", "PEACE OF MIND"], note: "From Start to Finish" },
];

export function Financial() {
  return (
    <section className="bg-navy-deep px-4 py-6 lg:px-10 lg:py-12">
      <div className="mx-auto w-full max-w-[1600px]">
        <p className="text-[11px] font-extrabold uppercase tracking-wide text-brand-green lg:text-base">
          The ABSB Advantage
        </p>
        <span className="mt-1.5 block h-[3px] w-10 bg-brand-green lg:w-14" />

        <h2 className="mt-2 text-[1.85rem] font-extrabold uppercase leading-[1] tracking-[-0.02em] text-white lg:mt-3 lg:text-[3.6rem]">
          Financial Confidence.
          <br />
          <span className="text-brand-green">Operational Excellence.</span>
        </h2>

        <span className="mt-2.5 block h-[3px] w-14 bg-brand-green lg:mt-4 lg:w-16" />

        <p className="mt-2.5 text-[0.9rem] font-extrabold uppercase leading-tight text-white lg:mt-4 lg:text-[1.4rem]">
          Transparent pricing. Optimized operations.
          <br />
          <span className="text-brand-green">Maximum protection.</span>
        </p>

        <p className="mt-2 max-w-[56ch] text-[0.85rem] font-medium leading-snug text-white/90 lg:mt-3 lg:text-[1.1rem]">
          We combine financial certainty with operational efficiency to deliver unmatched value and peace of mind.
        </p>

        <div className="mt-3 space-y-2.5 lg:mt-7 lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
          {ITEMS.map(({ icon: Icon, title, sub, note }) => (
            <div
              key={title}
              className="flex items-start gap-3.5 rounded-2xl border border-brand-blue/25 bg-navy/40 px-3 py-3.5 lg:gap-5 lg:px-6 lg:py-6"
            >
              <span className="grid h-[62px] w-[62px] shrink-0 place-items-center rounded-full bg-brand-blue/15 lg:h-[76px] lg:w-[76px]">
                <Icon className="h-7 w-7 text-brand-green lg:h-9 lg:w-9" strokeWidth={1.8} />
              </span>
              <span className="w-[2px] shrink-0 self-stretch bg-brand-green" />
              <div className="min-w-0">
                <p className="text-[1rem] font-extrabold uppercase leading-tight text-white lg:text-[1.35rem]">
                  {title}
                </p>
                <p className="mt-0.5 text-[0.78rem] font-extrabold uppercase leading-tight text-brand-green lg:text-[1rem]">
                  {sub}
                </p>
                <p className="mt-1 text-[0.83rem] font-medium leading-snug text-white/90 lg:text-[1rem]">{note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* What this means for you */}
        <div className="mt-3 rounded-2xl border border-brand-green/40 bg-navy/40 px-2.5 py-4 lg:mt-6 lg:px-8 lg:py-7">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 bg-brand-green lg:w-24" />
            <p className="text-[0.85rem] font-extrabold uppercase text-brand-green lg:text-[1.3rem]">
              What This Means For You
            </p>
            <span className="h-[2px] w-10 bg-brand-green lg:w-24" />
          </div>
          <div className="mt-3 grid grid-cols-4 divide-x divide-white/20 lg:mt-6">
            {MEANS.map(({ icon: Icon, title, note }) => (
              <div key={note} className="flex flex-col items-center px-1 text-center lg:px-6">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-blue/20 lg:h-16 lg:w-16">
                  <Icon className="h-5 w-5 text-brand-green lg:h-8 lg:w-8" strokeWidth={1.9} />
                </span>
                <p className="mt-2 text-[0.68rem] font-extrabold uppercase leading-tight text-white lg:mt-3 lg:text-[1.05rem]">
                  {title[0]}
                  <br />
                  {title[1]}
                </p>
                <p className="mt-0.5 text-[0.6rem] font-medium leading-tight text-white/85 lg:mt-1 lg:text-[0.95rem]">
                  {note}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-3 flex items-center gap-3 rounded-2xl border border-brand-blue/60 bg-[linear-gradient(105deg,var(--navy)_0%,var(--brand-blue)_130%)] px-3 py-3 lg:mt-6 lg:gap-6 lg:px-8 lg:py-5">
          <ShieldCheck className="h-9 w-9 shrink-0 text-brand-green lg:h-12 lg:w-12" strokeWidth={1.8} />
          <span className="w-px shrink-0 self-stretch bg-white/25" />
          <p className="min-w-0 flex-1 text-[0.95rem] font-extrabold uppercase leading-tight text-white lg:text-[1.45rem]">
            Your vision. Our commitment.
            <br />
            <span className="text-brand-green">Zero compromise.</span>
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
