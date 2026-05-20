import Image from "next/image";
import { CheckCircle2, FlaskConical, Package, Sparkles, Timer } from "lucide-react";
import { Reveal } from "./Reveal";

const details = [
  ["Nama produk", "Temu Shot"],
  ["Varian", "Temulawak"],
  ["Ukuran", "50ml"],
  ["Jenis", "Modern Herbal Wellness Drink"]
];

const highlights = [
  "Praktis untuk sekali minum",
  "Mudah dibawa ke mana saja",
  "Rasa lebih ringan dan friendly",
  "Tampilan modern dan aesthetic",
  "Berbahan dasar temulawak",
  "Cocok untuk gaya hidup aktif"
];

export function ProductHighlight() {
  return (
    <section id="product" className="py-12 md:py-16">
      <Reveal className="section-shell">
        <div className="mb-8 text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-orange">Not Your Typical Jamu</p>
          <h2 className="mt-3 text-4xl font-black text-cocoa md:text-5xl">Meet Temu Shot</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-cocoa/70">
            Inovasi minuman herbal modern berbahan dasar temulawak dalam kemasan one shot drink.
            Praktis, ringan, dan siap jadi bagian dari rutinitasmu.
          </p>
        </div>

        <div className="warm-card grid gap-7 rounded-[2rem] p-5 md:grid-cols-[0.85fr_0.95fr_0.9fr] md:p-8 lg:p-10">
          <div className="grid content-center gap-4">
            <div className="premium-shine rounded-[1.5rem] bg-gradient-to-br from-orange to-saffron p-5 text-white shadow-glow">
              <Timer className="mb-4 h-7 w-7" />
              <p className="text-3xl font-black">One shot.</p>
              <p className="text-3xl font-black">Everyday.</p>
              <p className="mt-3 text-sm font-bold leading-6 text-white/82">Cara paling simple buat mulai rutinitas herbal modern.</p>
            </div>
            {details.map(([label, value], index) => (
              <Reveal key={label} delay={index * 0.04} className="premium-lift flex items-center gap-3 rounded-2xl bg-cream/80 p-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-orange shadow-sm">
                  {index % 2 === 0 ? <Package size={19} /> : <FlaskConical size={19} />}
                </span>
                <span>
                  <span className="block text-xs font-black uppercase tracking-[0.12em] text-clay">{label}</span>
                  <span className="block text-base font-black text-cocoa">{value}</span>
                </span>
              </Reveal>
            ))}
          </div>

          <div className="premium-lift premium-shine relative aspect-square self-center overflow-hidden rounded-[1.5rem] bg-cocoa shadow-[0_28px_80px_rgba(93,43,22,0.22)] ring-1 ring-orange/10">
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-cocoa/24 via-transparent to-white/10" />
            <Image
              src="/images/temushot-swirl.png"
              alt="Temu Shot dengan splash temulawak orange"
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 768px) 33vw, 100vw"
              className="object-cover transition duration-700 hover:scale-[1.035]"
            />
          </div>

          <div className="premium-lift rounded-[1.5rem] bg-butter/45 p-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-orange">
                <Sparkles size={20} />
              </span>
              <h3 className="text-2xl font-black text-cocoa">Keunggulan</h3>
            </div>
            <div className="space-y-3">
              {highlights.map((item, index) => (
                <Reveal key={item} delay={index * 0.04} className="flex items-start gap-3 text-sm font-bold leading-6 text-cocoa/78">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                  <span>{item}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
