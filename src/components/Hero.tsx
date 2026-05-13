"use client";

import Image from "next/image";
import { ArrowRight, Leaf, PackageCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const badges = [
  { label: "Modern Herbal Wellness Drink", icon: Leaf },
  { label: "One Shot Drink", icon: PackageCheck },
  { label: "Temulawak Based", icon: Sparkles }
];

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pb-8 pt-24 md:pb-10 md:pt-28">
      <div className="absolute -left-24 top-24 h-80 w-40 rounded-full bg-butter/55 blur-sm" />
      <div className="absolute right-0 top-20 h-28 w-48 rounded-bl-full rounded-tl-full bg-saffron/20" />
      <Image
        src="/images/golden-powder.png"
        width={900}
        height={640}
        alt=""
        className="pointer-events-none absolute -right-32 top-16 -z-10 w-[560px] rotate-12 opacity-45 md:w-[720px]"
        priority
      />

      <div className="section-shell grid items-center gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange/10 bg-white/72 px-4 py-2 text-xs font-black text-burnt shadow-sm">
            <Leaf className="h-4 w-4 text-leaf" />
            Modern Herbal Wellness Drink
          </div>
          <h1 className="max-w-3xl text-balance text-5xl font-black leading-[0.96] text-cocoa md:text-7xl xl:text-[5rem]">
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
              className="inline-flex items-center justify-center gap-2 rounded-full bg-orange px-7 py-4 text-sm font-black text-white shadow-glow transition hover:-translate-y-1 hover:bg-burnt"
            >
              Try Temu Shot <ArrowRight size={17} />
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
                <div key={badge.label} className="flex items-center gap-3 rounded-2xl border border-orange/10 bg-white/78 p-3 text-xs font-bold text-cocoa shadow-sm">
                  <Icon className="h-5 w-5 shrink-0 text-orange" />
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
          className="relative min-h-[390px] md:min-h-[500px] lg:min-h-[520px]"
        >
          <div className="absolute inset-x-3 bottom-3 top-0 overflow-hidden rounded-[2rem] bg-gradient-to-br from-white/72 via-butter/22 to-orange/8 shadow-soft md:inset-x-0 md:bottom-0 md:rounded-[2.5rem]">
            <div className="absolute inset-x-10 bottom-8 h-44 rounded-[100%] bg-saffron/18 blur-3xl" />
            <Image
              src="/images/golden-powder.png"
              width={900}
              height={640}
              alt=""
              className="absolute left-[8%] top-[14%] w-[92%] max-w-[680px] opacity-80"
              priority
            />
            <Image
              src="/images/temulawak-leaf.png"
              width={332}
              height={755}
              alt=""
              className="absolute bottom-24 left-[14%] z-10 w-20 -rotate-12 opacity-90 md:w-28 lg:left-[16%] lg:w-32"
            />
            <div className="absolute left-1/2 top-5 z-20 w-[50%] max-w-[300px] -translate-x-1/2 md:top-7 md:w-[46%] lg:max-w-[340px]">
              <Image
                src="/images/product-bottle-tight.png"
                width={620}
                height={900}
                alt="Botol Temu Shot"
                priority
                className="w-full animate-float drop-shadow-2xl"
              />
            </div>
            <div className="absolute bottom-5 left-5 right-5 z-30 grid grid-cols-3 overflow-hidden rounded-3xl border border-orange/10 bg-white/88 shadow-sm backdrop-blur">
              {[
                ["50ml", "Praktis"],
                ["One Shot", "Minum & go"],
                ["Temulawak", "Herbal"]
              ].map(([title, caption]) => (
                <div key={title} className="border-r border-orange/10 px-3 py-3 text-center last:border-r-0">
                  <p className="text-sm font-black text-orange">{title}</p>
                  <p className="mt-0.5 text-[11px] font-bold text-cocoa/70">{caption}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
