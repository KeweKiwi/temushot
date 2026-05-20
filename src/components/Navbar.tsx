"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import type { MouseEvent } from "react";
import { useState } from "react";
import { navItems } from "@/data/site";
import { JamoeIboeLogo } from "./JamoeIboeLogo";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  function handleAnchorClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    if (!href.startsWith("#")) return;
    event.preventDefault();
    setOpen(false);

    const target = document.querySelector(href);
    if (!target) return;

    window.history.pushState(null, "", href);
    window.requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 md:px-4 md:pt-4">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-28 bg-gradient-to-b from-cream via-cream/82 to-transparent" />
      <motion.div className="absolute left-0 top-0 h-1 origin-left bg-orange" style={{ scaleX }} />
      <nav className="section-shell relative flex items-center justify-between gap-3 overflow-hidden rounded-[2rem] border border-white/70 bg-white/78 px-3 py-2 shadow-[0_18px_60px_rgba(93,46,24,0.14)] backdrop-blur-2xl md:rounded-full md:px-4">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/56 via-cream/20 to-white/44" />
        <a href="#home" className="group relative z-10 flex min-w-0 items-center gap-3" onClick={(event) => handleAnchorClick(event, "#home")}>
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-orange to-saffron text-sm font-black tracking-[0.08em] text-white shadow-glow transition duration-500 group-hover:rotate-3 group-hover:scale-105">
            TS
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-black tracking-[0.14em] text-cocoa md:text-base">TEMU SHOT</span>
            <span className="block truncate text-[11px] font-bold text-clay">Happy Gut, Happy Tummy</span>
          </span>
          <span className="hidden h-10 w-px bg-gradient-to-b from-transparent via-orange/22 to-transparent md:block" />
          <span className="hidden items-center gap-2 rounded-full border border-orange/10 bg-cream/72 px-3 py-1.5 shadow-inner md:flex">
            <span className="text-[10px] font-black uppercase tracking-[0.16em] text-clay/80">by</span>
            <JamoeIboeLogo compact />
          </span>
        </a>

        <div className="temu-desktop-nav relative z-10 items-center gap-1 rounded-full border border-orange/10 bg-cream/64 p-1.5 text-sm text-cocoa shadow-inner">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={(event) => handleAnchorClick(event, item.href)} className="rounded-full px-3.5 py-2 font-bold transition hover:bg-white hover:text-orange hover:shadow-sm">
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          onClick={(event) => handleAnchorClick(event, "#contact")}
          className="premium-cta temu-desktop-cta relative z-10 items-center gap-2 rounded-full bg-orange px-5 py-3 text-sm font-black text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-burnt"
        >
          <span className="relative z-10 inline-flex items-center gap-2">
            Try Temu Shot <ArrowRight size={16} />
          </span>
        </a>

        <button
          className="temu-mobile-menu-button relative z-10 h-11 w-11 place-items-center rounded-full border border-orange/10 bg-cream text-cocoa shadow-sm"
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
          className="temu-mobile-menu-panel section-shell mt-3 rounded-[1.5rem] border border-orange/15 bg-white/95 p-3 shadow-soft backdrop-blur"
        >
          <div className="mb-2 flex items-center justify-between rounded-2xl bg-cream/70 px-4 py-3">
            <span className="text-xs font-black uppercase tracking-[0.16em] text-cocoa">Jamu Iboe</span>
            <JamoeIboeLogo compact />
          </div>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => handleAnchorClick(event, item.href)}
              className="block rounded-2xl px-4 py-3 text-sm font-bold text-cocoa hover:bg-cream"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(event) => handleAnchorClick(event, "#contact")}
            className="mt-2 block rounded-2xl bg-orange px-4 py-3 text-center text-sm font-black text-white shadow-glow"
          >
            Try Temu Shot
          </a>
        </motion.div>
      ) : null}
    </header>
  );
}
