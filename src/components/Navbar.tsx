"use client";

import { Menu, X } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useState } from "react";
import { navItems } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <motion.div className="absolute left-0 top-0 h-1 origin-left bg-orange" style={{ scaleX }} />
      <nav className="section-shell warm-card flex items-center justify-between rounded-full px-4 py-3 md:px-6">
        <a href="#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-cream text-orange shadow-sm">
            <span className="h-5 w-5 rounded-full border-2 border-orange border-r-saffron" />
          </span>
          <span>
            <span className="block text-sm font-black tracking-[0.12em] text-cocoa">TEMU SHOT</span>
            <span className="block text-[11px] font-semibold text-clay">by Jamoe Iboe</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 text-sm text-cocoa md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="font-semibold transition hover:text-orange">
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-orange px-5 py-3 text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-burnt md:inline-flex"
        >
          Try Temu Shot
        </a>

        <button
          className="grid h-11 w-11 place-items-center rounded-full bg-cream text-cocoa md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-shell mt-3 rounded-[1.5rem] border border-orange/15 bg-white/95 p-3 shadow-soft md:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-sm font-bold text-cocoa hover:bg-cream"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-2xl bg-orange px-4 py-3 text-center text-sm font-bold text-white"
          >
            Try Temu Shot
          </a>
        </motion.div>
      ) : null}
    </header>
  );
}
