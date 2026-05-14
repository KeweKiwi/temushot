import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock3, Leaf } from "lucide-react";
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

  return (
    <main className="relative min-h-screen overflow-hidden px-4 pb-16 pt-8">
      <Image
        src="/images/golden-powder.png"
        width={900}
        height={640}
        alt=""
        className="pointer-events-none absolute -right-40 top-16 -z-10 w-[720px] rotate-12 opacity-30"
        priority
      />

      <div className="section-shell">
        <nav className="mb-8 flex items-center justify-between gap-4 rounded-full border border-orange/12 bg-white/80 px-5 py-4 shadow-sm backdrop-blur">
          <Link href="/#blog" className="inline-flex items-center gap-2 text-sm font-black text-burnt transition hover:text-orange">
            <ArrowLeft size={17} /> Back
          </Link>
          <JamoeIboeLogo compact />
        </nav>

        <article className="mx-auto max-w-4xl">
          <div className="rounded-[2rem] border border-orange/12 bg-white/82 p-6 shadow-soft md:p-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-butter/70 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-burnt">
              <Leaf size={15} />
              Read & Reflect
            </div>
            <h1 className="text-4xl font-black leading-tight text-cocoa md:text-6xl">{article.title}</h1>
            <p className="mt-5 text-lg leading-8 text-cocoa/72">{article.summary}</p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-orange/15 bg-cream px-4 py-2 text-sm font-black text-orange">
              <Clock3 size={16} />
              {article.readTime}
            </div>

            <div className="mt-8 overflow-hidden rounded-[1.5rem] bg-cocoa">
              <Image
                src="/images/temushot1.png"
                width={1024}
                height={1024}
                alt="Temu Shot"
                className="aspect-[16/8] w-full object-cover opacity-90"
                priority
              />
            </div>

            <div className="mt-9 space-y-6 text-base font-medium leading-8 text-cocoa/78 md:text-lg">
              {article.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 rounded-[1.5rem] bg-gradient-to-br from-orange to-saffron p-6 text-white">
              <p className="text-2xl font-black">Ayo mulai dari satu shot hari ini.</p>
              <p className="mt-2 max-w-2xl text-sm font-bold leading-6 text-white/84">
                Healthy does not have to be complicated. Start small, stay consistent, dan jadikan Temu Shot bagian dari rutinitasmu.
              </p>
              <Link href="/#contact" className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-sm font-black text-orange transition hover:-translate-y-1">
                Coba Temu Shot
              </Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
