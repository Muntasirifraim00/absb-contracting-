type Props = { className?: string };

export function AbsbLogo({ className }: Props) {
  return (
    <svg viewBox="0 0 260 96" className={className} role="img" aria-label="Abdul Barik Solaiman Building Contracting">
      <g>
        {/* green chevrons */}
        <path d="M28 76 L58 8 L70 8 L40 76 Z" fill="var(--brand-green)" />
        <path d="M46 76 L76 8 L88 8 L58 76 Z" fill="var(--brand-green)" />
        <path d="M64 76 L94 8 L106 8 L76 76 Z" fill="var(--brand-green)" />
        {/* blue A */}
        <path d="M84 76 L114 8 L128 8 L158 76 L140 76 L121 30 L102 76 Z" fill="var(--brand-blue)" />
        {/* blue B */}
        <path d="M164 30 h26 a13 13 0 0 1 0 21 h-26 z M164 53 h28 a13 13 0 0 1 0 23 h-28 z" fill="var(--brand-blue)" />
        {/* green S */}
        <path d="M202 33 c0 -11 13 -15 24 -15 h20 l-6 14 h-20 c-6 0 -6 5 0 5 h12 c15 0 21 10 21 19 c0 12 -11 20 -25 20 h-24 l6 -14 h19 c6 0 6 -5 0 -5 h-12 c-13 0 -15 -12 -15 -24 z" fill="var(--brand-green)" />
      </g>
    </svg>
  );
}
