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
          <div className="relative mt-7 overflow-hidden rounded-[1.7rem] bg-cocoa shadow-soft">
            <Image
              src="/images/temushot1.png"
              width={1024}
              height={1024}
              alt="Temu Shot siap diminum"
              className="aspect-[16/10] w-full object-cover opacity-88"
            />
            <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-white/88 p-4 shadow-sm backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-orange text-white">
                  <Sparkles size={20} />
                </span>
                <p className="text-sm font-black leading-5 text-cocoa">
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
              <Reveal key={step.title} delay={index * 0.08} className="flex items-center gap-5 rounded-[1.5rem] border border-orange/12 bg-white/78 p-5 shadow-soft transition hover:-translate-y-1 hover:bg-white">
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
