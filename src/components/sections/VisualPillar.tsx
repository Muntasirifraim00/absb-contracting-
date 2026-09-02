import { cn } from "@/lib/utils";
import type { ImageAsset, Pillar } from "@/lib/section-images";

export function CardMedia({
  image,
  alt,
  className,
}: {
  image: ImageAsset;
  alt: string;
  className?: string | undefined;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-white/12 bg-navy",
        className,
      )}
    >
      <img src={image.url} alt={alt} loading="lazy" className="h-full w-full object-cover" />
    </div>
  );
}

export function PillarCard({
  pillar: { icon: Icon, title, sub, note, image, alt },
  className,
}: {
  pillar: Pillar;
  className?: string | undefined;
}) {
  return (
    <article
      className={cn(
        "flex items-stretch gap-2 rounded-2xl border border-white/12 bg-navy/40 p-2 lg:gap-5 lg:p-4",
        className,
      )}
    >
      <div className="flex min-w-0 flex-1 items-center gap-2 lg:gap-4">
        <span className="grid h-13 w-13 shrink-0 place-items-center rounded-full border border-brand-blue/40 bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--brand-blue)_45%,transparent)_0%,transparent_72%)] lg:h-20 lg:w-20">
          <Icon className="h-6 w-6 text-brand-green lg:h-9 lg:w-9" strokeWidth={1.8} />
        </span>
        <div className="min-w-0">
          <h3 className="text-[0.82rem] font-extrabold uppercase leading-tight text-white lg:text-[1.3rem]">
            {title}
          </h3>
          <p className="mt-0.5 text-[0.62rem] font-extrabold uppercase leading-tight text-brand-green lg:mt-1 lg:text-[0.95rem]">
            {sub}
          </p>
          <p className="mt-1.5 border-l-2 border-white/25 pl-2 text-[0.68rem] font-bold leading-snug text-white/90 lg:mt-3 lg:pl-3 lg:text-[1rem]">
            {note}
          </p>
        </div>
      </div>
      <CardMedia image={image} alt={alt} className="min-h-[118px] w-[45%] shrink-0 lg:w-[42%]" />
    </article>
  );
}
