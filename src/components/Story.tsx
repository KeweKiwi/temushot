import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";

const proofItems = ["Practical", "Friendly Taste", "Daily Habit"];

export function Story() {
  return (
    <section id="story" className="py-8 md:py-14">
      <Reveal className="section-shell">
        <div className="mb-6 grid gap-3 rounded-[2rem] border border-orange/10 bg-white/70 p-4 shadow-soft md:grid-cols-3">
          {proofItems.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-[1.25rem] bg-cream/70 px-4 py-3 text-sm font-black text-cocoa">
              <CheckCircle2 className="h-5 w-5 text-orange" />
              {item}
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="section-shell warm-card grid gap-8 overflow-hidden rounded-[2rem] p-6 md:grid-cols-[0.95fr_1.05fr] md:p-10">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-orange">Our Story</p>
          <h2 className="mt-3 max-w-xl text-4xl font-black leading-tight text-cocoa md:text-5xl">
            Dari tradisi, hadir lebih modern.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-8 text-cocoa/74">
            <p>
              Jamu sudah lama jadi bagian dari tradisi kesehatan Indonesia. Temu Shot mengemas
              manfaat temulawak dalam bentuk yang lebih praktis, ringan, dan dekat dengan rutinitas
              generasi sekarang.
            </p>
            <p>
              Satu botol kecil, satu langkah kecil. Dibuat untuk kamu yang aktif, sering terburu-buru,
              tapi mulai ingin lebih aware dengan tubuh sendiri.
            </p>
          </div>
          <p className="mt-6 font-black text-orange">Tradition meets modern wellness.</p>
        </div>

        <Reveal delay={0.1} className="relative min-h-[420px] overflow-hidden rounded-[1.75rem] border border-orange/10 bg-gradient-to-br from-white via-cream to-butter/30 md:min-h-[500px]">
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange/24 blur-3xl md:h-96 md:w-96" />
          <div className="absolute left-1/2 top-[52%] h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange/15" />
          <div className="absolute left-1/2 top-[52%] h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-saffron/25" />
          <div className="story-bottle-floor absolute left-1/2 top-[78%] h-20 w-64 -translate-x-1/2 rounded-full bg-cocoa/16 blur-2xl md:w-80" />
          <div className="absolute inset-x-12 top-10 h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent" />
          <div className="absolute -right-16 top-10 h-48 w-48 rounded-full bg-saffron/18 blur-3xl" />

          <div className="group absolute inset-0 z-10 grid place-items-center">
            <div className="story-bottle-float">
              <div className="relative transition duration-700 ease-out group-hover:rotate-[3deg] group-hover:scale-[1.07]">
                <div className="story-bottle-shadow absolute left-1/2 top-[73%] h-14 w-52 -translate-x-1/2 rounded-full bg-cocoa/20 blur-2xl transition duration-700 group-hover:w-64 group-hover:bg-burnt/26" />
                <div className="story-bottle-glow absolute left-1/2 top-12 h-72 w-40 -translate-x-1/2 rounded-full bg-white/34 blur-2xl" />
                <div className="pointer-events-none absolute left-[58%] top-16 z-20 h-[68%] w-10 overflow-hidden rounded-full opacity-80 mix-blend-screen">
                  <div className="h-full w-full animate-soft-shine bg-gradient-to-r from-transparent via-white/80 to-transparent" />
                </div>
                <Image
                  src="/images/product-bottle-tight.png"
                  width={620}
                  height={900}
                  alt="Botol Temu Shot"
                  priority
                  sizes="(min-width: 768px) 330px, 72vw"
                  className="relative z-10 w-[230px] drop-shadow-[0_34px_54px_rgba(93,46,24,0.28)] transition duration-700 ease-out group-hover:drop-shadow-[0_46px_76px_rgba(184,81,27,0.38)] sm:w-[260px] md:w-[300px] lg:w-[330px]"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </Reveal>
    </section>
  );
}
