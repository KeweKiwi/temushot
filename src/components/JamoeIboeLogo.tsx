import { Leaf } from "lucide-react";

type JamoeIboeLogoProps = {
  light?: boolean;
  compact?: boolean;
};

export function JamoeIboeLogo({ light = false, compact = false }: JamoeIboeLogoProps) {
  return (
    <span className="inline-flex items-center gap-3">
      <span
        className={[
          "grid place-items-center rounded-full border-2",
          compact ? "h-10 w-10" : "h-12 w-12",
          light ? "border-cream/70 bg-white/10 text-cream" : "border-orange/25 bg-cream text-orange"
        ].join(" ")}
      >
        <Leaf className={compact ? "h-5 w-5" : "h-6 w-6"} />
      </span>
      <span className="leading-none">
        <span className={["block font-black tracking-[0.14em]", compact ? "text-sm" : "text-base", light ? "text-cream" : "text-cocoa"].join(" ")}>
          JAMOE IBOE
        </span>
        <span className={["mt-1 block text-[10px] font-bold uppercase tracking-[0.18em]", light ? "text-cream/70" : "text-clay"].join(" ")}>
          Herbal Heritage
        </span>
      </span>
    </span>
  );
}
