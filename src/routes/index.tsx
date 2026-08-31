import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  ThumbsUp,
  ShieldCheck,
  Phone,
  Menu,
  UserRound,
  Clock,
  Truck,
  HardHat,
  ConstructionIcon,
  Award,
  ShieldCheck as ShieldCheck2,
  FileCheck2,
  Headset,
  Users,
} from "lucide-react";
import heroDesktop from "@/assets/hero-desktop.png.asset.json";
import heroMobile from "@/assets/hero-mobile.png.asset.json";
import logo from "@/assets/absb-logo.png.asset.json";
import { Advantage } from "@/components/sections/Advantage";
import { Precision } from "@/components/sections/Precision";
import { Financial } from "@/components/sections/Financial";


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
      <Hero />
      <Results />
      <Advantage />
      <Precision />
      <Financial />
    </main>
  );
}


function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-navy-deep">
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
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy-deep/70 to-transparent lg:hidden" />
      <div className="absolute inset-0 hidden lg:block bg-[linear-gradient(90deg,var(--navy-deep)_0%,color-mix(in_oklab,var(--navy-deep)_92%,transparent)_28%,color-mix(in_oklab,var(--navy-deep)_35%,transparent)_50%,transparent_72%)]" />

      <div className="relative flex h-full flex-col">
        {/* Header */}
        <header className="mx-auto grid w-full max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 pt-4 lg:flex lg:justify-between lg:gap-4 lg:px-8 lg:pt-5">
          <div className="flex min-w-0 items-center gap-3 lg:gap-4">
            <img src={logo.url} alt="ABSB logo" className="h-9 w-auto shrink-0 lg:h-16" />
            <div className="hidden leading-tight tracking-[0.08em] lg:block">
              <p className="whitespace-nowrap text-base font-semibold text-white">ABDUL BARIK SOLAIMAN</p>
              <p className="whitespace-nowrap text-sm font-medium text-white/85">BUILDING CONTRACTING</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 xl:flex">
            {NAV.map((item, i) => (
              <a key={item} href="#" className="relative py-1 text-[15px] text-white/90 transition-colors hover:text-brand-green">
                {item}
                {i === 0 && <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-brand-green" />}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 lg:gap-4">
            <a
              href="tel:+971554097614"
              className="flex items-center gap-2 rounded-lg border border-white/25 px-2.5 py-1.5 lg:gap-3 lg:rounded-xl lg:px-5 lg:py-2.5"
            >
              <Phone className="h-3.5 w-3.5 shrink-0 fill-brand-green text-brand-green lg:h-5 lg:w-5" />
              <span className="leading-tight text-white">
                <span className="block text-[10px] lg:text-[15px]">Call Now</span>
                <span className="block whitespace-nowrap text-[10px] font-medium lg:text-[15px]">+971 55 409 7614</span>
              </span>
            </a>
            <button aria-label="Open menu" className="shrink-0 p-1 text-white">
              <Menu className="h-6 w-6 lg:h-9 lg:w-9" strokeWidth={2.5} />
            </button>
          </div>
        </header>

        {/* Hero copy */}
        <div className="mx-auto w-full max-w-[1600px] px-4 pt-6 lg:px-8 lg:pt-10">
          <p className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.02em] text-brand-green lg:text-base">
            Engineering certainty. Built into every detail.
          </p>
          <span className="mt-2 block h-[3px] w-12 bg-brand-green lg:mt-3 lg:w-16" />

          <h1 className="mt-4 max-w-[9ch] text-[2.4rem] font-bold leading-[1.06] tracking-[-0.02em] text-white sm:text-5xl lg:mt-6 lg:text-[4.35rem]">
            Engineering Precision. Built for <span className="text-brand-green">Certainty.</span>
          </h1>

          <p className="mt-4 max-w-[32ch] text-[0.82rem] leading-[1.5] text-white/85 lg:mt-6 lg:max-w-[30ch] lg:text-xl">
            G+1 turnkey villas, premium fit-outs and optimized MEP systems, delivered with engineering control across
            every critical stage.
          </p>

          <div className="mt-5 flex items-center gap-2.5 lg:mt-9 lg:gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-md bg-brand-blue px-3 py-2.5 text-[12px] font-semibold text-white transition-opacity hover:opacity-90 lg:gap-4 lg:px-7 lg:py-4 lg:text-[1.05rem]"
            >
              Start Your Project <ArrowRight className="h-3.5 w-3.5 lg:h-5 lg:w-5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-md border border-white/50 px-3 py-2.5 text-[12px] font-semibold text-white transition-colors hover:bg-white/10 lg:gap-4 lg:px-7 lg:py-4 lg:text-[1.05rem]"
            >
              View Projects <ArrowRight className="h-3.5 w-3.5 lg:h-5 lg:w-5" />
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-auto px-4 pb-4 lg:px-8 lg:pb-7">
          <div className="mx-auto w-full max-w-[1600px] rounded-xl border border-white/15 bg-navy-deep/70 backdrop-blur-sm">
            <div className="grid grid-cols-3 divide-x divide-white/15 lg:grid-cols-4">
              <Stat icon={<Building2 className="h-5 w-5 text-brand-blue lg:h-8 lg:w-8" strokeWidth={2} />} value="150+" label="PROJECTS" note="Successfully Delivered" />
              <Stat icon={<ThumbsUp className="h-5 w-5 text-brand-blue lg:h-8 lg:w-8" strokeWidth={2} />} value="98%" label="SATISFACTION" note="Client Happiness" />
              <Stat icon={<ShieldCheck className="h-5 w-5 text-brand-blue lg:h-8 lg:w-8" strokeWidth={2} />} value="100%" label="COMPLIANCE" note="Municipality Approved" />
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

          <div className="mt-3 flex items-center justify-center gap-3 whitespace-nowrap text-[11px] text-white lg:hidden">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-brand-green" />
              Engineering Team Online
            </span>
            <span className="h-4 w-px bg-white/25" />
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-brand-green" />
              Response &lt; 2 Hrs
            </span>
          </div>
        </div>
      </div>
    </section>
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
    <div className="px-1.5 py-3 text-center lg:px-6 lg:py-7">
      <div className="flex flex-col items-center gap-0.5 lg:flex-row lg:justify-center lg:gap-4">
        <span className="shrink-0">{icon}</span>
        <div>
          <p className="text-[1.15rem] font-bold leading-tight text-white lg:text-4xl">{value}</p>
          <p className="text-[9px] font-semibold tracking-wide text-brand-green lg:text-base">{label}</p>
        </div>
      </div>
      <p className="mt-1 text-[8.5px] leading-tight text-white/85 lg:text-[15px]">{note}</p>
    </div>
  );
}

const METRICS = [
  { icon: Building2, value: "150+", label: "PROJECTS", note: "SUCCESSFULLY DELIVERED" },
  { icon: ThumbsUp, value: "98%", label: "SATISFACTION", note: "CLIENT HAPPINESS" },
  { icon: ShieldCheck, value: "100%", label: "COMPLIANCE", note: "MUNICIPALITY APPROVED" },
  { icon: Truck, value: "10,000+", label: "M³ CONCRETE", note: "POURED WITH PRECISION" },
  { icon: HardHat, value: "140,200+", label: "SAFE MAN-HOURS", note: "ZERO LOST TIME INCIDENTS" },
  { icon: ConstructionIcon, value: "12", label: "ACTIVE SITES", note: "ACROSS DUBAI" },
];

const TRUST = [
  { icon: Award, title: "QUALITY ASSURED", note: "1MM TOLERANCE ENGINEERING" },
  { icon: ShieldCheck2, title: "SAFETY FIRST", note: "HSE CERTIFIED WORKSITES" },
  { icon: Users, title: "ON-TIME DELIVERY", note: "ZERO-DELAY COMMITMENT" },
  { icon: FileCheck2, title: "FINANCIAL CERTAINTY", note: "FIXED-PRICE CONTRACTS" },
];

function Results() {
  return (
    <section className="flex min-h-[100svh] flex-col justify-center bg-[oklch(0.97_0.005_255)] px-4 py-6 lg:px-10 lg:py-10">
      <div className="mx-auto w-full max-w-[1600px]">
        <p className="text-[10px] font-bold uppercase tracking-wide text-brand-green lg:text-base">
          Trusted by clients. Proven by numbers.
        </p>
        <span className="mt-1.5 block h-[3px] w-10 bg-brand-green lg:w-14" />

        <h2 className="mt-2.5 text-[1.55rem] font-extrabold uppercase leading-[1.05] tracking-[-0.01em] text-navy-deep lg:mt-4 lg:text-[3.4rem]">
          Engineering Results
          <br />
          You Can Rely On
        </h2>

        <p className="mt-2.5 text-[10px] font-bold uppercase leading-snug text-navy-deep lg:mt-4 lg:text-[1.05rem]">
          Every number reflects our commitment to
          <br />
          precision, safety, compliance and client satisfaction.
        </p>

        {/* Metric cards */}
        <div className="mt-3.5 grid grid-cols-2 gap-2.5 lg:mt-7 lg:grid-cols-6 lg:gap-4">
          {METRICS.map(({ icon: Icon, value, label, note }) => (
            <div
              key={label}
              className="flex flex-col items-center rounded-xl bg-navy-deep px-2 py-3 text-center lg:rounded-2xl lg:px-3 lg:py-6"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full border border-white/25 lg:h-14 lg:w-14">
                <Icon className="h-4 w-4 text-brand-blue lg:h-7 lg:w-7" strokeWidth={2.2} />
              </span>
              <p className="mt-2 text-[1.35rem] font-extrabold leading-none text-brand-green lg:mt-4 lg:text-[2.6rem]">
                {value}
              </p>
              <p className="mt-1 text-[10px] font-bold uppercase leading-tight text-white lg:mt-1.5 lg:text-[1.05rem]">
                {label}
              </p>
              <p className="mt-0.5 text-[8px] font-bold uppercase leading-tight text-white/85 lg:mt-1 lg:text-[0.8rem]">
                {note}
              </p>
              <span className="mt-2 block h-[2px] w-8 bg-brand-green lg:mt-3 lg:w-12" />
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-3 rounded-xl bg-navy-deep px-2.5 py-3 lg:mt-4 lg:rounded-2xl lg:px-6 lg:py-6">
          <p className="text-center text-[11px] font-extrabold uppercase text-white lg:text-[1.35rem]">
            Built on trust. Delivered with integrity.
          </p>
          <span className="mx-auto mt-1.5 block h-[2px] w-10 bg-brand-green lg:w-14" />
          <div className="mt-2.5 grid grid-cols-4 divide-x divide-white/20 lg:mt-4">
            {TRUST.map(({ icon: Icon, title, note }) => (
              <div key={title} className="flex flex-col items-center px-1 text-center lg:flex-row lg:items-center lg:gap-3 lg:px-5 lg:text-left">
                <Icon className="h-5 w-5 shrink-0 text-brand-green lg:h-9 lg:w-9" strokeWidth={2.2} />
                <div className="mt-1.5 lg:mt-0">
                  <p className="text-[8.5px] font-extrabold uppercase leading-tight text-white lg:text-[1.05rem]">{title}</p>
                  <p className="mt-0.5 text-[7.5px] font-bold uppercase leading-tight text-white/80 lg:text-[0.85rem]">{note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support bar */}
        <div className="mt-2.5 flex items-center justify-center gap-3 rounded-xl border border-brand-green/40 bg-white px-3 py-2.5 lg:mt-4 lg:gap-6 lg:py-4">
          <Headset className="h-6 w-6 shrink-0 text-brand-green lg:h-9 lg:w-9" strokeWidth={2.2} />
          <div className="text-center lg:flex lg:items-center lg:gap-5">
            <p className="text-[10px] font-extrabold uppercase leading-tight text-navy-deep lg:text-[1.15rem]">
              Engineering Team Online
            </p>
            <span className="hidden h-6 w-px bg-navy-deep/25 lg:block" />
            <p className="text-[10px] font-extrabold uppercase leading-tight text-brand-green lg:text-[1.15rem]">
              Response &lt; 2 Hrs
            </p>
          </div>
          <span className="rounded-md bg-brand-green px-2 py-1 text-[11px] font-extrabold text-white lg:px-3 lg:py-1.5 lg:text-[1.35rem]">
            24/7
          </span>
        </div>
      </div>
    </section>
  );
}
