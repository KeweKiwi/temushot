"use client";

import Image from "next/image";
import { ArrowRight, Instagram, Mail, MessageCircle, Music2 } from "lucide-react";
import { FormEvent, useState } from "react";
import { contacts } from "@/data/site";
import { Reveal } from "./Reveal";
import { JamoeIboeLogo } from "./JamoeIboeLogo";

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <section id="contact" className="relative overflow-hidden py-12 md:py-20">
      <Image
        src="/images/golden-powder.png"
        width={900}
        height={640}
        alt=""
        className="absolute -bottom-12 -right-24 w-[620px] rotate-6 opacity-50"
      />
      <Reveal className="section-shell warm-card relative grid gap-8 overflow-hidden rounded-[2rem] p-6 md:grid-cols-[0.9fr_1.1fr] md:p-10">
        <div className="flex flex-col justify-center">
          <JamoeIboeLogo />
          <h2 className="mt-6 text-4xl font-black leading-tight text-cocoa md:text-5xl">Ayo mulai dari satu shot hari ini.</h2>
          <p className="mt-4 text-base leading-8 text-cocoa/70">
            Menjaga kesehatan tidak harus ribet. Jadikan Temu Shot bagian kecil dari rutinitas harianmu.
          </p>
          <a
            href={contacts.instagramUrl}
            className="premium-cta mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-orange px-6 py-4 text-sm font-black text-white shadow-glow transition hover:-translate-y-1 hover:bg-burnt"
          >
            <span className="relative z-10 inline-flex items-center gap-2">Coba Temu Shot Sekarang <ArrowRight size={17} /></span>
          </a>
          <div className="mt-7 space-y-3 text-sm font-bold text-cocoa/78">
            <a href={contacts.instagramUrl} className="flex items-center gap-3 transition hover:text-orange">
              <Instagram size={18} className="text-orange" /> {contacts.instagram}
            </a>
            <p className="flex items-center gap-3">
              <Music2 size={18} className="text-orange" /> TikTok {contacts.tiktok}
            </p>
            <a href={`mailto:${contacts.email}`} className="flex items-center gap-3 transition hover:text-orange">
              <Mail size={18} className="text-orange" /> {contacts.email}
            </a>
            <p className="flex items-center gap-3">
              <MessageCircle size={18} className="text-orange" /> {contacts.whatsapp}
            </p>
          </div>
        </div>

        <div className="relative">
          {sent ? (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-[1.5rem] bg-white/95 backdrop-blur">
              <span className="mx-auto mb-3 grid h-16 w-16 place-items-center rounded-full bg-leaf/10 text-leaf">
                <MessageCircle size={28} />
              </span>
              <p className="text-xl font-black text-leaf">Thank you!</p>
              <p className="mt-2 text-sm font-bold text-cocoa/60">Your message has been received.</p>
            </div>
          ) : null}
          <form onSubmit={onSubmit} className="premium-lift grid gap-3 rounded-[1.5rem] bg-white/74 p-5 shadow-sm">
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                required
                name="name"
                aria-label="Nama kamu"
                placeholder="Nama kamu"
                className="rounded-2xl border border-orange/12 bg-cream/60 px-4 py-4 text-sm font-semibold outline-none transition focus:border-orange"
              />
              <input
                required
                type="email"
                inputMode="email"
                name="email"
                aria-label="Email kamu"
                placeholder="Email kamu"
                className="rounded-2xl border border-orange/12 bg-cream/60 px-4 py-4 text-sm font-semibold outline-none transition focus:border-orange"
              />
            </div>
            <textarea
              required
              name="message"
              rows={5}
              aria-label="Message"
              placeholder="Message"
              className="resize-none rounded-2xl border border-orange/12 bg-cream/60 px-4 py-4 text-sm font-semibold outline-none transition focus:border-orange"
            />
            <button className="premium-cta rounded-full bg-orange px-6 py-4 text-sm font-black text-white shadow-glow transition hover:-translate-y-1 hover:bg-burnt">
              <span className="relative z-10">Send Message</span>
            </button>
          </form>
        </div>
      </Reveal>
    </section>
  );
}
