import { CupSoda, Hand, RefreshCcw } from "lucide-react";
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
      <div className="section-shell grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
        <Reveal className="flex flex-col justify-center">
          <h2 className="text-4xl font-black text-cocoa md:text-5xl">How To Drink</h2>
          <p className="mt-5 max-w-md text-base leading-8 text-cocoa/72">
            Nikmati Temu Shot cukup 1 botol per hari. Minum langsung dalam satu kali shot, kapan
            saja sesuai kebutuhanmu. Simple, praktis, dan siap jadi bagian dari rutinitas harianmu.
          </p>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={index * 0.08} className="rounded-[1.5rem] border border-orange/12 bg-white/74 p-6 text-center shadow-soft">
                <span className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-butter text-orange">
                  <Icon size={28} />
                </span>
                <span className="mx-auto mb-3 grid h-7 w-7 place-items-center rounded-full bg-orange text-sm font-black text-white">
                  {index + 1}
                </span>
                <h3 className="text-2xl font-black text-cocoa">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-cocoa/66">{step.body}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
