"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section className="py-12 md:py-16">
      <div className="section-shell">
        <Reveal className="mb-8 text-center">
          <h2 className="text-4xl font-black text-cocoa md:text-5xl">What They Say</h2>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.07, duration: 0.55 }}
              className="relative overflow-hidden rounded-[1.5rem] border border-orange/16 bg-white/78 shadow-soft transition hover:-translate-y-2 hover:bg-white"
            >
              <div className="relative h-48 bg-gradient-to-br from-butter to-orange/20">
                {testimonial.image ? (
                  <Image src={testimonial.image} alt={testimonial.name} fill sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
                ) : (
                  <div className="grid h-full place-items-center bg-gradient-to-br from-orange to-saffron text-white">
                    <span className="grid h-20 w-20 place-items-center rounded-full bg-white/20 text-3xl font-black">KA</span>
                  </div>
                )}
                <span className="absolute bottom-4 left-4 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-orange shadow-sm">
                  <Quote size={20} />
                </span>
              </div>
              <div className="p-5">
                <p className="text-sm font-semibold leading-7 text-cocoa/74">"{testimonial.quote}"</p>
                <p className="mt-5 text-base font-black text-cocoa">{testimonial.name}</p>
                <p className="mt-1 text-xs font-black uppercase tracking-[0.14em] text-orange">{testimonial.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
