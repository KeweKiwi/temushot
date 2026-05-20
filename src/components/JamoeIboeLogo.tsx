import Image from "next/image";

type JamoeIboeLogoProps = {
  light?: boolean;
  compact?: boolean;
};

export function JamoeIboeLogo({ light = false, compact = false }: JamoeIboeLogoProps) {
  return (
    <span
      className={[
        "inline-flex items-center",
        light ? "rounded-2xl bg-cream/95 px-3 py-2 shadow-sm" : ""
      ].join(" ")}
    >
      <Image
        src="/images/jamu-iboe-logo.png"
        width={441}
        height={325}
        alt="Jamu Iboe Since 1910"
        className={[
          "h-auto object-contain drop-shadow-[0_8px_18px_rgba(93,46,24,0.12)]",
          compact ? "w-[66px]" : "w-[110px]"
        ].join(" ")}
      />
    </span>
  );
}
