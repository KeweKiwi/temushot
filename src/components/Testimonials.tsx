"use client";

import { motion } from "framer-motion";
import { Quote, Sparkles, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Reveal } from "./Reveal";

const reviewStats = [
  "Friendly taste",
  "Praktis dibawa",
  "Cocok buat rutinitas"
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden py-12 md:py-16">
      <div className="absolute left-1/2 top-16 -z-10 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-orange/10 blur-3xl" />
      <div className="section-shell">
        <Reveal className="mx-auto mb-8 max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-orange">Real routine, real words</p>
          <h2 className="mt-3 text-4xl font-black text-cocoa md:text-5xl">What They Say</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-semibold leading-7 text-cocoa/68">
            Cerita singkat dari customer yang butuh sesuatu yang praktis, ringan, dan cocok masuk ke rutinitas padat.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {reviewStats.map((stat) => (
              <span key={stat} className="inline-flex items-center gap-2 rounded-full border border-orange/10 bg-white/76 px-4 py-2 text-xs font-black text-burnt shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-orange" />
                {stat}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.07, duration: 0.55 }}
              className="group relative min-h-[330px] overflow-hidden rounded-[1.75rem] border border-orange/14 bg-white/78 p-5 shadow-soft backdrop-blur transition hover:-translate-y-2 hover:border-orange/28 hover:bg-white hover:shadow-glow"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-saffron/20 blur-2xl transition group-hover:bg-orange/20" />
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-orange via-saffron to-butter opacity-70" />

              <div className="flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-orange text-white shadow-glow">
                  <Quote size={22} />
                </span>
                <div className="flex gap-1 text-saffron" aria-label="Rating 5 dari 5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>

              <p className="mt-5 text-base font-extrabold leading-8 text-cocoa">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="mt-7 flex items-end justify-between gap-4">
                <div>
                  <p className="text-lg font-black text-cocoa">{testimonial.name}</p>
                  <p className="mt-1 text-xs font-black uppercase tracking-[0.14em] text-orange">{testimonial.role}</p>
                </div>
                <span className="shrink-0 rounded-full border border-orange/12 bg-cream px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.12em] text-burnt">
                  {testimonial.highlight}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
