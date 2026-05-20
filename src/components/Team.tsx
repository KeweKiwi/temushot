import Image from "next/image";
import { Sparkles } from "lucide-react";
import { teamMembers } from "@/data/team";
import { Reveal } from "./Reveal";

export function Team() {
  return (
    <section id="team" className="py-12 md:py-16">
      <div className="section-shell">
        <Reveal className="mb-8 text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-orange">Behind The Shot</p>
          <h2 className="mt-3 text-4xl font-black text-cocoa md:text-5xl">Meet The Team</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-cocoa/70">
            Tim yang merancang Temu Shot sebagai jamu modern yang lebih dekat, ringan, dan relevan untuk generasi sekarang.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <Reveal
              key={member.name}
              delay={index * 0.06}
              className="premium-lift premium-shine group overflow-hidden rounded-[1.7rem] border border-orange/12 bg-white/78 shadow-soft transition hover:bg-white"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-butter/70 to-orange/20">
                {member.image ? (
                  <Image src={member.image} alt={member.name} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                ) : (
                  <div className="grid h-full place-items-center bg-gradient-to-br from-orange to-saffron text-white">
                    <div className="text-center">
                      <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-white/20 text-3xl font-black">KA</span>
                      <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em]">Photo Soon</p>
                    </div>
                  </div>
                )}
                <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/88 text-orange shadow-sm">
                  <Sparkles size={18} />
                </span>
              </div>
              <div className="p-5">
                <p className="text-xl font-black text-cocoa">{member.name}</p>
                <p className="mt-1 text-sm font-bold text-orange">{member.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
