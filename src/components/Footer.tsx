import { Instagram, Mail, Music2 } from "lucide-react";
import { contacts, navItems } from "@/data/site";
import { JamoeIboeLogo } from "./JamoeIboeLogo";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-burnt to-cocoa px-4 py-10 text-cream">
      <div className="section-shell grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <h2 className="text-2xl font-black tracking-[0.16em]">TEMU SHOT</h2>
          <p className="mt-2 text-sm font-semibold text-cream/78">Happy Gut, Happy Tummy</p>
          <div className="mt-5">
            <JamoeIboeLogo light />
          </div>
          <div className="mt-5 flex gap-3">
            <a href={contacts.instagramUrl} aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-white/20">
              <Instagram size={18} />
            </a>
            <span aria-label="TikTok" className="grid h-10 w-10 place-items-center rounded-full bg-white/10">
              <Music2 size={18} />
            </span>
            <a href={`mailto:${contacts.email}`} aria-label="Email" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-white/20">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-butter">Quick Links</p>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm font-semibold text-cream/78">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-butter">Stay Healthy, Stay Happy.</p>
          <p className="mt-4 max-w-xs text-sm leading-7 text-cream/78">
            One shot every day. A small step to a healthier you.
          </p>
        </div>
      </div>
      <p className="section-shell mt-8 border-t border-white/15 pt-6 text-center text-xs font-semibold text-cream/70">
        &copy; 2026 Temu Shot
      </p>
    </footer>
  );
}
