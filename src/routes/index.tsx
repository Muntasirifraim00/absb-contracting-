import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Building2, ThumbsUp, ShieldCheck, Phone, Menu, UserRound, Clock } from "lucide-react";
import { AbsbLogo } from "@/components/AbsbLogo";
import heroDesktop from "@/assets/hero-desktop.png.asset.json";
import heroMobile from "@/assets/hero-mobile.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ABSB | Engineering Precision. Built for Certainty." },
      {
        name: "description",
        content:
          "Abdul Barik Solaiman Building Contracting delivers G+1 turnkey villas, premium fit-outs and optimized MEP systems across the UAE.",
      },
      { property: "og:title", content: "ABSB | Engineering Precision. Built for Certainty." },
      {
        property: "og:description",
        content: "G+1 turnkey villas, premium fit-outs and optimized MEP systems with engineering control at every stage.",
      },
    ],
  }),
  component: Index,
});

const NAV = ["Home", "Services", "Projects", "Calculator", "About", "Contact"];

function Index() {
  return (
    <main className="font-display bg-navy-deep">
      <section className="relative min-h-screen w-full overflow-hidden bg-navy-deep">
        {/* Background imagery */}
        <img
          src={heroMobile.url}
          alt="Completed modern villa at dusk beside an active construction site"
          className="absolute inset-0 h-full w-full object-cover object-bottom lg:hidden"
        />
        <img
          src={heroDesktop.url}
          alt="Completed modern villa at dusk beside an active construction site"
          className="absolute inset-0 hidden h-full w-full object-cover lg:block"
        />
        {/* Tints */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy-deep/70 to-transparent lg:hidden" />
        <div className="absolute inset-0 hidden lg:block bg-[linear-gradient(90deg,var(--navy-deep)_0%,color-mix(in_oklab,var(--navy-deep)_92%,transparent)_28%,color-mix(in_oklab,var(--navy-deep)_35%,transparent)_50%,transparent_72%)]" />

        <div className="relative flex min-h-screen flex-col">
          {/* Header */}
          <header className="mx-auto grid w-full max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 pt-6 lg:flex lg:gap-4 lg:justify-between lg:px-8 lg:pt-5">
            <div className="flex min-w-0 flex-col items-start gap-1 lg:flex-row lg:items-center lg:gap-4">
              <AbsbLogo className="h-10 w-auto shrink-0 lg:h-16" />
              <div className="leading-tight tracking-[0.08em]">
                <p className="whitespace-nowrap text-[11px] font-semibold text-white lg:text-base">ABDUL BARIK SOLAIMAN</p>
                <p className="whitespace-nowrap text-[10px] font-medium text-white/85 lg:text-sm">BUILDING CONTRACTING</p>
              </div>
            </div>

            <nav className="hidden items-center gap-8 xl:flex">
              {NAV.map((item, i) => (
                <a
                  key={item}
                  href="#"
                  className="relative py-1 text-[15px] text-white/90 transition-colors hover:text-brand-green"
                >
                  {item}
                  {i === 0 && (
                    <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-brand-green" />
                  )}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <a
                href="tel:+971554097614"
                className="flex items-center gap-2.5 rounded-xl border border-white/25 px-3 py-2 lg:gap-3 lg:px-5 lg:py-2.5"
              >
                <Phone className="h-4 w-4 shrink-0 lg:h-5 lg:w-5 fill-brand-green text-brand-green" />
                <span className="leading-tight text-white">
                  <span className="block text-[12px] lg:text-[15px]">Call Now</span>
                  <span className="block whitespace-nowrap text-[12px] font-medium lg:text-[15px]">+971 55 409 7614</span>
                </span>
              </a>
              <button aria-label="Open menu" className="shrink-0 p-1 text-white">
                <Menu className="h-8 w-8 lg:h-9 lg:w-9" strokeWidth={2.5} />
              </button>
            </div>
          </header>

          {/* Hero copy */}
          <div className="mx-auto w-full max-w-[1600px] px-5 pt-9 lg:px-8 lg:pt-10">
            <p className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.02em] text-brand-green lg:text-base">
              Engineering certainty. Built into every detail.
            </p>
            <span className="mt-3 block h-[3px] w-16 bg-brand-green" />

            <h1 className="mt-6 max-w-[9ch] text-[3.35rem] font-bold leading-[1.06] tracking-[-0.02em] text-white sm:text-6xl lg:mt-6 lg:text-[4.35rem]">
              Engineering Precision. Built for <span className="text-brand-green">Certainty.</span>
            </h1>

            <p className="mt-6 max-w-[30ch] text-[1.05rem] leading-[1.55] text-white/85 lg:mt-6 lg:text-xl">
              G+1 turnkey villas, premium fit-outs and optimized MEP systems, delivered with engineering control across
              every critical stage.
            </p>

            <div className="mt-8 flex items-center gap-3 lg:mt-9 lg:gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-md bg-brand-blue px-3.5 py-3.5 text-[14px] lg:gap-4 lg:px-7 lg:py-4 lg:text-[1.05rem] font-semibold text-white transition-opacity hover:opacity-90 lg:px-7"
              >
                Start Your Project <ArrowRight className="h-4 w-4 lg:h-5 lg:w-5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-md border border-white/50 px-3.5 py-3.5 text-[14px] lg:gap-4 lg:px-7 lg:py-4 lg:text-[1.05rem] font-semibold text-white transition-colors hover:bg-white/10 lg:px-7"
              >
                View Projects <ArrowRight className="h-4 w-4 lg:h-5 lg:w-5" />
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-auto px-6 pb-6 pt-[24rem] lg:px-8 lg:pb-7 lg:pt-6">
            <div className="mx-auto w-full max-w-[1600px] rounded-xl border border-white/15 bg-navy-deep/70 backdrop-blur-sm">
              <div className="grid grid-cols-3 divide-x divide-white/15 lg:grid-cols-4">
                <Stat icon={<Building2 className="h-8 w-8 text-brand-blue" strokeWidth={2} />} value="150+" label="PROJECTS" note="Successfully Delivered" />
                <Stat icon={<ThumbsUp className="h-8 w-8 text-brand-blue" strokeWidth={2} />} value="98%" label="SATISFACTION" note="Client Happiness" />
                <Stat icon={<ShieldCheck className="h-8 w-8 text-brand-blue" strokeWidth={2} />} value="100%" label="COMPLIANCE" note="Municipality Approved" />
                <div className="hidden items-center justify-center gap-4 px-6 py-7 lg:flex">
                  <UserRound className="h-9 w-9 text-brand-green" strokeWidth={2} />
                  <div className="leading-tight text-white">
                    <p className="text-[1.05rem]">Engineering Team Online</p>
                    <p className="text-[1.05rem]">
                      Response <span className="font-semibold text-brand-green">&lt; 2 Hrs</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-center gap-4 whitespace-nowrap text-[13px] text-white lg:hidden">
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-green" />
                Engineering Team Online
              </span>
              <span className="h-5 w-px bg-white/25" />
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-brand-green" />
                Response &lt; 2 Hrs
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({
  icon,
  value,
  label,
  note,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  note: string;
}) {
  return (
    <div className="px-2 py-6 text-center lg:px-6 lg:py-7">
      <div className="flex flex-col items-center gap-1 lg:flex-row lg:justify-center lg:gap-4">
        <span className="shrink-0">{icon}</span>
        <div>
          <p className="text-[1.9rem] font-bold leading-tight text-white lg:text-4xl">{value}</p>
          <p className="text-[13px] font-semibold tracking-wide text-brand-green lg:text-base">{label}</p>
        </div>
      </div>
      <p className="mt-1.5 text-[12px] text-white/85 lg:text-[15px]">{note}</p>
    </div>
  );
}
