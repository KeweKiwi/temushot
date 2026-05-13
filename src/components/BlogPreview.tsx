import { ArrowUpRight } from "lucide-react";
import { articles } from "@/data/articles";
import { Reveal } from "./Reveal";

export function BlogPreview() {
  return (
    <section className="py-12 md:py-16">
      <div className="section-shell">
        <Reveal className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-orange">Blog Preview</p>
            <h2 className="mt-3 text-4xl font-black text-cocoa md:text-5xl">Read & Reflect</h2>
          </div>
          <button className="inline-flex w-fit items-center gap-2 rounded-full border border-orange/30 bg-white/60 px-5 py-3 text-sm font-black text-burnt transition hover:bg-white">
            Read More <ArrowUpRight size={17} />
          </button>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {articles.map((article, index) => (
            <Reveal key={article.title} delay={index * 0.06} className="rounded-[1.5rem] border border-orange/12 bg-white/72 p-6 shadow-soft transition hover:-translate-y-2 hover:bg-white">
              <span className="text-xs font-black uppercase tracking-[0.16em] text-orange">Article 0{index + 1}</span>
              <h3 className="mt-4 text-xl font-black leading-7 text-cocoa">{article.title}</h3>
              <p className="mt-3 text-sm leading-7 text-cocoa/68">{article.summary}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
