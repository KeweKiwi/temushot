"use client";

import { motion } from "framer-motion";
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
              className="relative rounded-[1.5rem] border border-orange/16 bg-white/76 p-6 shadow-soft transition hover:-translate-y-2 hover:bg-white"
            >
              <span className="absolute -bottom-3 left-8 h-6 w-6 rotate-45 border-b border-r border-orange/16 bg-white" />
              <p className="relative text-sm font-semibold leading-7 text-cocoa/74">"{testimonial.quote}"</p>
              <p className="relative mt-5 text-sm font-black text-orange">- {testimonial.name}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
