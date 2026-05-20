"use client";

import { motion } from "framer-motion";
import { benefits } from "@/data/benefits";
import { Reveal } from "./Reveal";

export function Benefits() {
  return (
    <section id="benefits" className="py-12 md:py-16">
      <div className="section-shell">
        <Reveal className="text-center">
          <h2 className="text-4xl font-black text-cocoa md:text-5xl">Why Your Body Needs It</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-cocoa/70">
            Temu Shot memberikan manfaat sederhana untuk mendukung rutinitas sehatmu.
          </p>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <motion.article
                key={benefit.title}
                whileHover={{ y: -10, scale: 1.015 }}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="premium-shine group rounded-[1.5rem] border border-orange/10 bg-white/78 p-6 text-center shadow-soft transition hover:bg-white"
              >
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-cream text-orange transition group-hover:rotate-3 group-hover:scale-105">
                  <Icon size={30} />
                </span>
                <h3 className="mt-5 text-xl font-black text-cocoa">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-7 text-cocoa/68">{benefit.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
