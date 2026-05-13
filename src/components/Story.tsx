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

        <div className="relative min-h-[320px] overflow-hidden rounded-[1.5rem] md:min-h-[460px]">
          <Image
            src="/images/temushot1.png"
            alt="Temu Shot product with temulawak and herbal elements"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <Image
            src="/images/temulawak-leaf.png"
            width={332}
            height={755}
            alt=""
            className="pointer-events-none absolute -bottom-3 -right-3 w-20 rotate-12 opacity-50 md:w-28"
          />
        </div>
      </Reveal>
    </section>
  );
}
