"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle2, Leaf, PackageCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const badges = [
  { label: "Modern Herbal Wellness Drink", icon: Leaf },
  { label: "One Shot Drink", icon: PackageCheck },
  { label: "Temulawak Based", icon: Sparkles }
];

const heroStats = [
  { value: "50ml", label: "sekali minum" },
  { value: "1x/day", label: "daily ritual" },
  { value: "Fresh", label: "modern taste" }
];

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pb-10 pt-24 md:pb-14 md:pt-28">
      <div className="absolute -left-28 top-20 h-72 w-44 rounded-full bg-butter/45 blur-2xl" />
      <div className="absolute right-0 top-24 h-28 w-52 rounded-bl-full rounded-tl-full bg-saffron/24" />
      <div className="absolute bottom-10 left-1/2 -z-10 h-72 w-[46rem] -translate-x-1/2 rounded-full bg-orange/10 blur-3xl" />

      <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr]">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange/10 bg-white/76 px-4 py-2 text-xs font-black text-burnt shadow-sm">
            <Leaf className="h-4 w-4 text-leaf" />
            Modern Herbal Wellness Drink
          </div>
          <h1 className="max-w-3xl text-balance text-5xl font-black leading-[0.94] text-cocoa md:text-7xl xl:text-[5.35rem]">
            Happy Gut,
            <span className="block text-orange">Happy Tummy.</span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14, duration: 0.65 }}
            className="mt-5 max-w-xl text-base font-semibold leading-8 text-cocoa/78 md:text-lg"
          >
            Temu Shot adalah minuman herbal modern berbahan temulawak dalam bentuk one shot drink
            yang praktis, mudah dibawa, dan cocok untuk gaya hidup aktif generasi masa kini.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.65 }}
            className="mt-7 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#contact"
              className="premium-cta group inline-flex items-center justify-center gap-2 rounded-full bg-orange px-7 py-4 text-sm font-black text-white shadow-glow transition hover:-translate-y-1 hover:bg-burnt"
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                Start Small Today <ArrowRight size={17} className="transition group-hover:translate-x-1" />
              </span>
            </a>
            <a
              href="#product"
              className="inline-flex items-center justify-center rounded-full border border-orange/55 bg-white/70 px-7 py-4 text-sm font-black text-burnt transition hover:-translate-y-1 hover:bg-white"
            >
              Explore Product
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34, duration: 0.65 }}
            className="mt-7 grid max-w-2xl gap-3 sm:grid-cols-3"
          >
            {badges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div key={badge.label} className="premium-lift flex min-h-[66px] items-center gap-3 rounded-2xl border border-orange/10 bg-white/78 p-3 text-xs font-bold text-cocoa shadow-sm backdrop-blur transition hover:border-orange/30">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-orange/10 text-orange">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>{badge.label}</span>
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 26 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[520px] md:min-h-[600px] lg:min-h-[610px]"
        >
          <div className="premium-shine absolute inset-x-2 bottom-0 top-0 overflow-hidden rounded-[2.25rem] border border-white/70 bg-white/66 shadow-soft backdrop-blur md:inset-x-0 md:rounded-[2.8rem]">
            <Image
              src="/images/temushot1.png"
              alt="Temu Shot dengan temulawak"
              fill
              priority
              sizes="(min-width: 1024px) 620px, 100vw"
              className="scale-[1.03] object-cover object-[54%_50%]"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-cocoa/46" />
            <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-cocoa/72 via-cocoa/20 to-transparent" />

            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45, duration: 0.55 }}
              className="absolute left-5 top-5 rounded-3xl border border-white/50 bg-white/84 p-4 shadow-soft backdrop-blur"
            >
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-burnt">Daily ritual</p>
              <p className="mt-1 text-xl font-black text-cocoa">One Shot.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.55, duration: 0.55 }}
              className="absolute right-5 top-6 hidden rounded-full border border-white/45 bg-white/82 px-4 py-3 text-sm font-black text-orange shadow-soft backdrop-blur sm:inline-flex"
            >
              Not Your Typical Jamu
            </motion.div>

            <div className="absolute bottom-5 left-5 right-5 z-30 rounded-[1.75rem] border border-white/35 bg-white/88 p-3 shadow-soft backdrop-blur">
              <div className="grid grid-cols-3 overflow-hidden rounded-[1.25rem] border border-orange/10 bg-cream/70">
                {heroStats.map((stat) => (
                  <div key={stat.value} className="border-r border-orange/10 px-3 py-4 text-center last:border-r-0">
                    <p className="text-base font-black text-orange">{stat.value}</p>
                    <p className="mt-1 text-[11px] font-bold text-cocoa/70">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between gap-3 px-1">
                <div>
                  <p className="text-sm font-black text-cocoa">A small step to a healthier you.</p>
                  <p className="mt-0.5 text-xs font-semibold text-cocoa/60">Simple, practical, made for your routine.</p>
                </div>
                <CheckCircle2 className="hidden h-8 w-8 shrink-0 text-leaf sm:block" />
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, rotate: -3 }}
            animate={{ opacity: 1, y: 0, rotate: -3 }}
            transition={{ delay: 0.32, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -left-1 bottom-16 hidden w-44 rounded-[1.6rem] border border-orange/12 bg-white/90 p-3 shadow-soft backdrop-blur md:block lg:-left-6"
          >
            <div className="overflow-hidden rounded-[1.1rem] bg-cream">
              <Image
                src="/images/product-bottle-tight.png"
                width={620}
                height={900}
                alt=""
                className="mx-auto w-24 drop-shadow-xl"
              />
            </div>
            <p className="mt-3 text-xs font-black uppercase tracking-[0.16em] text-burnt">50ml</p>
            <p className="text-sm font-extrabold text-cocoa">praktis sekali minum</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22, rotate: 4 }}
            animate={{ opacity: 1, y: 0, rotate: 4 }}
            transition={{ delay: 0.42, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -right-1 top-28 hidden w-48 rounded-[1.6rem] border border-white/50 bg-cocoa/88 p-4 text-white shadow-soft backdrop-blur md:block lg:-right-6"
          >
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-butter">Gen Z friendly</p>
            <p className="mt-2 text-lg font-black leading-tight">Healthy doesn&apos;t have to be complicated.</p>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/16">
              <div className="h-full w-3/4 rounded-full bg-saffron" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
