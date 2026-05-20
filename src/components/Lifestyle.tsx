import { CalendarClock, Check, Moon, Salad, Utensils, Zap } from "lucide-react";
import { Reveal } from "./Reveal";

const fitItems = [
  { text: "Sering mengonsumsi junk food", icon: Utensils },
  { text: "Memiliki jadwal makan tidak teratur", icon: CalendarClock },
  { text: "Sering begadang karena tugas atau pekerjaan", icon: Moon },
  { text: "Punya aktivitas padat setiap hari", icon: Zap },
  { text: "Tetap ingin menjaga kesehatan di tengah kesibukan", icon: Salad }
];

export function Lifestyle() {
  return (
    <section id="lifestyle" className="py-12 md:py-16">
      <Reveal className="section-shell warm-card overflow-hidden rounded-[2rem] p-6 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-orange">Lifestyle Fit</p>
            <h2 className="mt-3 text-4xl font-black text-cocoa md:text-5xl">Perfect for Your Busy Lifestyle</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-cocoa/72">
              Dengan satu shot Temu Shot, kamu bisa mulai langkah kecil untuk rutinitas yang lebih
              sehat.
            </p>
            <div className="premium-cta mt-7 inline-flex rounded-full bg-orange px-5 py-3 text-sm font-black text-white shadow-glow">
              <span className="relative z-10">Small Shot, Big Benefit.</span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {fitItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.text} delay={index * 0.05} className="premium-lift flex items-center gap-4 rounded-2xl bg-white/72 p-4 shadow-sm">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-cream text-orange">
                    <Icon size={21} />
                  </span>
                  <span className="text-sm font-bold leading-6 text-cocoa/78">{item.text}</span>
                </Reveal>
              );
            })}
            <div className="premium-shine rounded-2xl bg-butter/55 p-5 text-sm font-bold leading-7 text-cocoa/74 sm:col-span-2">
              <Check className="mb-3 h-6 w-6 text-orange" />
              Healthy does not have to be complicated. Start small, stay consistent.
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
