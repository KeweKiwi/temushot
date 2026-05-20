import Image from "next/image";
import { ArrowUpRight, BookOpen, Clock3, Moon, Sparkles, Utensils } from "lucide-react";
import { articles } from "@/data/articles";
import { Reveal } from "./Reveal";

const articleStyles = [
  {
    label: "Gut Check",
    icon: Utensils,
    className: "from-orange/18 via-butter/28 to-white",
    iconClassName: "bg-orange text-white"
  },
  {
    label: "Late Night Habit",
    icon: Moon,
    className: "from-cocoa/12 via-orange/10 to-white",
    iconClassName: "bg-cocoa text-white"
  },
  {
    label: "Simple Routine",
    icon: Sparkles,
    className: "from-leaf/12 via-saffron/18 to-white",
    iconClassName: "bg-leaf text-white"
  }
];

export function BlogPreview() {
  const [featuredArticle, ...sideArticles] = articles;
  const FeaturedIcon = articleStyles[0].icon;

  return (
    <section id="blog" className="relative overflow-hidden py-12 md:py-16">
      <div className="absolute -left-24 top-24 -z-10 h-64 w-64 rounded-full bg-saffron/16 blur-3xl" />
      <div className="absolute -right-24 bottom-16 -z-10 h-72 w-72 rounded-full bg-orange/12 blur-3xl" />
      <div className="section-shell">
        <Reveal className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-orange">Read & Reflect</p>
            <h2 className="mt-3 text-4xl font-black text-cocoa md:text-5xl">Small Reads for Better Habits</h2>
            <p className="mt-4 text-base font-semibold leading-7 text-cocoa/68">
              Artikel singkat seputar pola makan, begadang, dan cara mulai rutinitas sehat tanpa terasa ribet.
            </p>
          </div>
          <a href={`/blog/${featuredArticle.slug}`} className="group inline-flex w-fit items-center gap-2 rounded-full border border-orange/20 bg-white/76 px-5 py-3 text-sm font-black text-burnt shadow-sm transition hover:-translate-y-1 hover:bg-white">
            Start Reading <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <a
              href={`/blog/${featuredArticle.slug}`}
              className={`premium-shine group relative flex min-h-[420px] overflow-hidden rounded-[2rem] border border-orange/12 bg-gradient-to-br ${articleStyles[0].className} p-6 shadow-soft transition hover:-translate-y-2 hover:border-orange/28 hover:bg-white hover:shadow-glow md:p-8`}
            >
              <div className="absolute -right-12 -top-12 h-52 w-52 rounded-full bg-orange/16 blur-3xl transition group-hover:bg-orange/24" />
              <div className="absolute -bottom-20 left-10 h-56 w-56 rounded-full bg-saffron/20 blur-3xl" />
              <Image
                src="/images/product-bottle-tight.png"
                width={620}
                height={900}
                alt=""
                className="pointer-events-none absolute -right-5 bottom-4 hidden w-44 rotate-6 opacity-95 drop-shadow-[0_28px_48px_rgba(93,46,24,0.22)] transition duration-700 group-hover:-translate-y-2 group-hover:rotate-3 md:block lg:w-52"
              />

              <div className="relative z-10 flex max-w-xl flex-col">
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`grid h-12 w-12 place-items-center rounded-2xl shadow-sm ${articleStyles[0].iconClassName}`}>
                    <FeaturedIcon className="h-5 w-5" />
                  </span>
                  <span className="rounded-full border border-orange/12 bg-white/78 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-burnt">
                    Featured Article
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-cocoa/8 px-3 py-2 text-xs font-black text-cocoa/70">
                    <Clock3 className="h-3.5 w-3.5" />
                    {featuredArticle.readTime}
                  </span>
                </div>

                <div className="mt-auto pt-20 md:pt-28">
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-orange">{articleStyles[0].label}</p>
                  <h3 className="mt-3 max-w-lg text-3xl font-black leading-tight text-cocoa md:text-4xl">
                    {featuredArticle.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-base font-semibold leading-8 text-cocoa/70">{featuredArticle.summary}</p>
                  <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange px-5 py-3 text-sm font-black text-white shadow-glow transition group-hover:bg-burnt">
                    Read Article <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </a>
          </Reveal>

          <div className="grid gap-5">
            {sideArticles.map((article, index) => {
              const style = articleStyles[index + 1];
              const Icon = style.icon;
              return (
                <Reveal key={article.title} delay={(index + 1) * 0.06}>
                  <a
                    href={`/blog/${article.slug}`}
                    className={`premium-shine group relative flex min-h-[198px] overflow-hidden rounded-[1.5rem] border border-orange/12 bg-gradient-to-br ${style.className} p-5 shadow-soft transition hover:-translate-y-2 hover:border-orange/28 hover:bg-white md:p-6`}
                  >
                    <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white/70 to-transparent" />
                    <div className="relative z-10 flex h-full w-full gap-4">
                      <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl shadow-sm ${style.iconClassName}`}>
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="flex min-w-0 flex-1 flex-col">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-black uppercase tracking-[0.14em] text-orange">{style.label}</span>
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-cocoa/55">
                            <Clock3 className="h-3.5 w-3.5" />
                            {article.readTime}
                          </span>
                        </div>
                        <h3 className="mt-3 text-xl font-black leading-7 text-cocoa">{article.title}</h3>
                        <p className="mt-2 line-clamp-2 text-sm font-semibold leading-6 text-cocoa/68">{article.summary}</p>
                        <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-black text-orange">
                          Read Article <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </div>
                    </div>
                  </a>
                </Reveal>
              );
            })}

            <Reveal delay={0.18}>
              <a
                href="#quiz"
                className="premium-shine group flex items-center justify-between gap-4 rounded-[1.5rem] border border-orange/12 bg-cocoa px-5 py-4 text-white shadow-soft transition hover:-translate-y-1 hover:bg-burnt"
              >
                <span>
                  <span className="block text-xs font-black uppercase tracking-[0.18em] text-butter">Need a quick check?</span>
                  <span className="mt-1 block text-lg font-black">Cari tahu kondisi gut kamu lewat quiz.</span>
                </span>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/12">
                  <BookOpen className="h-5 w-5" />
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
