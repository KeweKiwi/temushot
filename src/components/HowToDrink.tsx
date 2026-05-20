import Image from "next/image";
import { CupSoda, Hand, RefreshCcw, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  {
    title: "Shake",
    body: "Kocok kemasan terlebih dahulu.",
    icon: RefreshCcw
  },
  {
    title: "Open",
    body: "Buka tutup kemasan.",
    icon: Hand
  },
  {
    title: "Drink",
    body: "Minum langsung dalam satu kali shot.",
    icon: CupSoda
  }
];

export function HowToDrink() {
  return (
    <section className="py-12 md:py-16">
      <div className="section-shell grid gap-7 lg:grid-cols-[1fr_1.08fr]">
        <Reveal className="flex flex-col justify-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-orange">One Shot Ritual</p>
          <h2 className="text-4xl font-black text-cocoa md:text-5xl">How To Drink</h2>
          <p className="mt-5 max-w-md text-base leading-8 text-cocoa/72">
            Nikmati Temu Shot cukup 1 botol per hari. Minum langsung dalam satu kali shot, kapan
            saja sesuai kebutuhanmu. Simple, praktis, dan siap jadi bagian dari rutinitas harianmu.
          </p>
          <div className="premium-shine relative mt-7 overflow-hidden rounded-[1.7rem] bg-cocoa shadow-[0_24px_70px_rgba(93,43,22,0.22)] ring-1 ring-orange/10">
            <Image
              src="/images/temushot-splash-ritual.png"
              width={1024}
              height={1024}
              alt="Temu Shot dengan splash temulawak siap diminum"
              className="aspect-[16/10] w-full object-cover object-[50%_45%] opacity-95"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cocoa/18 via-transparent to-white/8" />
            <div className="absolute inset-x-5 bottom-5 z-20 rounded-2xl border border-white/15 bg-cocoa/92 p-4 shadow-[0_18px_44px_rgba(42,18,8,0.28)] backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-orange text-white">
                  <Sparkles size={20} />
                </span>
                <p className="text-sm font-black leading-5 text-cream">
                  Shake, open, drink. Satu langkah kecil buat rutinitas yang lebih sehat.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid content-center gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={index * 0.08} className="premium-lift flex items-center gap-5 rounded-[1.5rem] border border-orange/12 bg-white/78 p-5 shadow-soft transition hover:bg-white">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-butter text-orange">
                  <Icon size={28} />
                </span>
                <div>
                  <span className="mb-2 grid h-7 w-7 place-items-center rounded-full bg-orange text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <h3 className="text-2xl font-black text-cocoa">{step.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-cocoa/66">{step.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
