import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BookOpen, CheckCircle2, Clock3, Droplets, Leaf, Moon, Sparkles, Utensils } from "lucide-react";
import { notFound } from "next/navigation";
import { articles } from "@/data/articles";
import { JamoeIboeLogo } from "@/components/JamoeIboeLogo";

type BlogArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

const articleMeta = {
  "gen-z-masalah-pencernaan": {
    label: "Gut Check",
    accent: "from-orange via-saffron to-butter",
    insight: "Pencernaan sering jadi sinyal pertama saat rutinitas mulai berantakan.",
    takeaways: ["Jam makan tidak teratur bikin tubuh kehilangan ritme", "Junk food dan begadang bisa memicu rasa begah", "Rutinitas kecil lebih mudah dijaga daripada perubahan ekstrem"],
    visual: {
      mood: "gut",
      title: "Gut check for fast days.",
      subtitle: "Sinyal kecil dari tubuh sering muncul saat jadwal makan dan istirahat mulai berantakan.",
      image: "/images/temushot1.png",
      alt: "Temu Shot dengan temulawak dan bahan herbal",
      gradient: "from-[#fff3d8] via-[#ffbc55] to-[#f56b1c]",
      overlay: "bg-cocoa/20",
      chips: ["Makan telat", "Begah", "Junk food"]
    }
  },
  "begadang-junk-food": {
    label: "Late Night Habit",
    accent: "from-cocoa via-burnt to-orange",
    insight: "Begadang dan makanan praktis sering terasa normal, tapi tubuh tetap mencatat polanya.",
    takeaways: ["Kurang tidur bisa memengaruhi energi harian", "Makanan tinggi minyak atau gula bikin tubuh terasa berat", "Mulai aware bisa dari satu kebiasaan kecil setiap hari"],
    visual: {
      mood: "night",
      title: "Late night choices add up.",
      subtitle: "Deadline, snack cepat, dan tidur singkat bisa bikin tubuh terasa lebih berat esok harinya.",
      image: "/images/product-bottle-tight.png",
      alt: "Botol Temu Shot untuk rutinitas malam yang lebih seimbang",
      gradient: "from-[#31170f] via-[#78341d] to-[#f26f22]",
      overlay: "bg-cocoa/0",
      chips: ["Begadang", "Snack cepat", "Energy drop"]
    }
  },
  "cara-simple-jaga-kesehatan": {
    label: "Simple Routine",
    accent: "from-leaf via-saffron to-orange",
    insight: "Hidup sehat lebih gampang dimulai dari langkah kecil yang bisa diulang.",
    takeaways: ["Minum cukup air dan makan lebih teratur", "Siapkan ritual kecil yang mudah dibawa", "Konsistensi kecil lebih realistis untuk lifestyle padat"],
    visual: {
      mood: "routine",
      title: "Small rituals, easier days.",
      subtitle: "Rutinitas sehat terasa lebih realistis saat dibuat simpel, ringan, dan mudah diulang.",
      image: "/images/temulawak-drink.png",
      alt: "Ilustrasi minuman temulawak untuk rutinitas sehat harian",
      gradient: "from-[#ecf7df] via-[#ffe6a8] to-[#f47a22]",
      overlay: "bg-white/12",
      chips: ["Air cukup", "Stretch", "One shot"]
    }
  }
} as const;

function ArticleVisual({ meta }: { meta: (typeof articleMeta)[keyof typeof articleMeta] }) {
  const { visual } = meta;
  const Icon = visual.mood === "night" ? Moon : visual.mood === "routine" ? Droplets : Utensils;
  const isNight = visual.mood === "night";
  const eyebrowClass = isNight ? "bg-white/12 text-white" : "bg-white/74 text-orange";
  const iconClass = isNight ? "bg-white/16 text-white" : "bg-orange/12 text-orange";
  const chipClass = isNight ? "border-white/24 bg-white/12 text-white" : "border-orange/18 bg-white/72 text-cocoa";
  const textClass = isNight ? "text-white" : "text-cocoa";
  const subtitleClass = isNight ? "text-white/80" : "text-cocoa/72";
  const mediaClass =
    visual.mood === "gut"
      ? "absolute bottom-[-34%] right-[-22%] h-[142%] w-auto object-contain opacity-95 drop-shadow-[0_30px_56px_rgba(93,43,22,0.28)] md:bottom-[-30%] md:right-[-20%] md:h-[136%]"
      : visual.mood === "night"
        ? "absolute bottom-3 right-[-12px] h-auto w-[170px] object-contain drop-shadow-[0_38px_64px_rgba(0,0,0,0.44)] md:bottom-4 md:right-[-26px] md:w-[220px]"
        : "absolute bottom-[-14%] right-[-16%] h-[116%] max-h-[400px] w-auto object-contain drop-shadow-[0_30px_54px_rgba(107,48,21,0.22)] md:right-[-24%] md:h-[108%]";

  return (
    <div data-article-visual className={`relative overflow-hidden rounded-[2rem] bg-gradient-to-br ${visual.gradient} p-6 shadow-[0_26px_80px_rgba(93,43,22,0.18)] md:min-h-[430px] md:p-7`}>
      <div className={`absolute inset-0 ${isNight ? "bg-gradient-to-r from-cocoa/64 via-cocoa/18 to-transparent" : "bg-gradient-to-r from-white/46 via-white/10 to-transparent"}`} />
      <div className="absolute -right-10 -top-12 h-56 w-56 rounded-full bg-white/24 blur-3xl" />
      <div className="absolute -bottom-16 right-4 h-72 w-72 rounded-full bg-saffron/24 blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-cocoa/10" />

      {visual.mood === "night" && (
        <>
          <div className="absolute right-8 top-8 h-14 w-14 rounded-full bg-butter shadow-[0_0_44px_rgba(255,224,151,0.8)]" />
          <div className="absolute right-14 top-10 h-14 w-14 rounded-full bg-[#512316]" />
        </>
      )}

      <div className="relative z-20 grid min-h-[430px] gap-5 md:min-h-[376px] md:grid-cols-[0.58fr_0.42fr] md:items-center">
        <div data-visual-copy className={`${textClass}`}>
          <p className={`inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.14em] shadow-sm backdrop-blur ${eyebrowClass}`}>
            <BookOpen size={15} />
            Read & Reflect
          </p>

          <div className="mt-8 md:mt-10">
            <span className={`grid h-11 w-11 place-items-center rounded-full shadow-sm backdrop-blur ${iconClass}`}>
              <Icon size={21} />
            </span>
            <p className="mt-4 max-w-[18rem] text-3xl font-black leading-tight md:text-[2rem]">{visual.title}</p>
            <p className={`mt-3 max-w-[17.5rem] text-sm font-semibold leading-6 ${subtitleClass}`}>{visual.subtitle}</p>
            <div className="mt-5 flex max-w-[18rem] flex-wrap gap-2">
              {visual.chips.map((chip) => (
                <span key={chip} className={`rounded-full border px-3 py-1.5 text-xs font-black backdrop-blur ${chipClass}`}>
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div data-visual-media className="pointer-events-none relative min-h-[190px] md:min-h-[352px]">
          <div className="absolute bottom-8 right-2 h-32 w-44 rounded-full bg-cocoa/20 blur-2xl md:h-44 md:w-60" />
          <div className="absolute bottom-16 right-0 h-48 w-48 rounded-full bg-white/22 blur-3xl md:h-64 md:w-64" />
          {visual.mood === "routine" ? (
            <div className="absolute right-1 top-3 grid h-12 w-12 place-items-center rounded-full bg-white/62 text-leaf shadow-sm">
              <CheckCircle2 className="h-6 w-6" />
            </div>
          ) : null}
          <Image
            src={visual.image}
            width={1024}
            height={1024}
            alt={visual.alt}
            className={`z-10 ${mediaClass}`}
            priority
          />
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found | Temu Shot"
    };
  }

  return {
    title: `${article.title} | Temu Shot`,
    description: article.summary
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const meta = articleMeta[article.slug as keyof typeof articleMeta] ?? articleMeta["gen-z-masalah-pencernaan"];

  return (
    <main className="relative min-h-screen overflow-hidden bg-cream px-4 pb-16 pt-6">
      <div className="absolute -left-28 top-24 -z-10 h-80 w-80 rounded-full bg-saffron/20 blur-3xl" />
      <div className="absolute -right-24 top-8 -z-10 h-96 w-96 rounded-full bg-orange/16 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 -z-10 h-72 w-[48rem] -translate-x-1/2 rounded-full bg-butter/24 blur-3xl" />

      <div className="section-shell">
        <nav className="mb-8 flex items-center justify-between gap-4 rounded-full border border-orange/12 bg-white/84 px-5 py-4 shadow-sm backdrop-blur">
          <Link href="/#blog" className="inline-flex items-center gap-2 text-sm font-black text-burnt transition hover:text-orange">
            <ArrowLeft size={17} /> Back to articles
          </Link>
          <JamoeIboeLogo compact />
        </nav>

        <article className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-[2.4rem] border border-orange/12 bg-white/82 shadow-soft backdrop-blur">
            <div className="grid gap-8 p-6 md:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <span className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${meta.accent} px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white shadow-sm`}>
                    <Leaf size={15} />
                    {meta.label}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-orange/15 bg-cream px-4 py-2 text-sm font-black text-orange">
                    <Clock3 size={16} />
                    {article.readTime}
                  </span>
                </div>

                <h1 className="text-4xl font-black leading-tight text-cocoa md:text-6xl">{article.title}</h1>
                <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-cocoa/72">{article.summary}</p>

                <div className="mt-7 rounded-[1.5rem] border border-orange/12 bg-cream/70 p-5">
                  <div className="flex gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-orange/12 text-orange">
                      <Sparkles size={18} />
                    </span>
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-orange">Quick insight</p>
                      <p className="mt-2 text-base font-black leading-7 text-cocoa">{meta.insight}</p>
                    </div>
                  </div>
                </div>
              </div>

              <ArticleVisual meta={meta} />
            </div>

            <div className="grid gap-8 border-t border-orange/10 p-6 md:p-10 lg:grid-cols-[0.72fr_0.28fr]">
              <div className="space-y-6 text-base font-medium leading-8 text-cocoa/78 md:text-lg">
                {article.content.map((paragraph, index) => (
                  <section key={paragraph} className="rounded-[1.5rem] border border-orange/10 bg-white/70 p-5 md:p-6">
                    <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-orange">Point 0{index + 1}</p>
                    <p>{paragraph}</p>
                  </section>
                ))}
              </div>

              <aside className="space-y-4">
                <div className="rounded-[1.5rem] border border-orange/12 bg-cream/82 p-5">
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-orange">Key takeaways</p>
                  <div className="mt-4 space-y-3">
                    {meta.takeaways.map((item) => (
                      <div key={item} className="flex gap-3 text-sm font-bold leading-6 text-cocoa/76">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.5rem] bg-cocoa p-5 text-white">
                  <p className="text-xl font-black">Try the 50ml ritual.</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-white/76">Satu botol kecil untuk mulai rutinitas sehat yang lebih gampang dijaga.</p>
                  <Link href="/#contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-orange px-5 py-3 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-burnt">
                    Coba Temu Shot <ArrowUpRight size={16} />
                  </Link>
                </div>
              </aside>
            </div>

            <div className="border-t border-orange/10 p-6 md:p-10">
              <div className="rounded-[1.75rem] bg-gradient-to-br from-orange to-saffron p-6 text-white md:p-8">
                <p className="text-3xl font-black">Ayo mulai dari satu shot hari ini.</p>
                <p className="mt-3 max-w-2xl text-sm font-bold leading-6 text-white/86">
                  Healthy does not have to be complicated. Start small, stay consistent, dan jadikan Temu Shot bagian dari rutinitasmu.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link href="/#contact" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-black text-orange transition hover:-translate-y-1">
                    Coba Temu Shot
                  </Link>
                  <Link href="/#blog" className="inline-flex items-center justify-center rounded-full border border-white/35 px-5 py-3 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white/12">
                    Artikel Lainnya
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
