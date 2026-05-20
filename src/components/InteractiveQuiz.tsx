"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Reveal } from "./Reveal";

const questions = [
  "Apakah kamu sering begadang?",
  "Apakah kamu sering makan junk food?",
  "Apakah kamu mudah lelah?",
  "Apakah muka kamu terlihat kusam?",
  "Apakah perut kamu sering begah?"
];

function getResult(score: number) {
  if (score <= 1) return "Gut kamu cukup aman, tetap jaga rutinitas sehatmu.";
  if (score <= 3) return "Tubuhmu mulai kasih sinyal, yuk mulai lebih aware.";
  return "Saatnya mulai langkah kecil untuk hidup lebih sehat.";
}

export function InteractiveQuiz() {
  const [checked, setChecked] = useState<boolean[]>(questions.map(() => false));
  const score = checked.filter(Boolean).length;
  const result = useMemo(() => getResult(score), [score]);

  return (
    <section id="quiz" className="py-12 md:py-16">
      <Reveal className="section-shell grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="warm-card rounded-[2rem] p-6 md:p-8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-orange">Interactive Quiz</p>
          <h2 className="mt-3 text-3xl font-black text-cocoa md:text-4xl">Seberapa Sehat Gut Kamu?</h2>
          <p className="mt-3 text-sm leading-7 text-cocoa/68">Centang kebiasaan yang sering kamu alami.</p>

          <div className="mt-7 space-y-3">
            {questions.map((question, index) => (
              <motion.button
                type="button"
                key={question}
                whileHover={{ x: 6, scale: 1.01 }}
                whileTap={{ scale: 0.985 }}
                onClick={() =>
                  setChecked((current) => current.map((value, itemIndex) => (itemIndex === index ? !value : value)))
                }
                className="flex w-full items-center gap-4 rounded-2xl border border-orange/12 bg-white/70 p-4 text-left text-sm font-bold text-cocoa/78 transition hover:border-orange/35 hover:bg-white"
              >
                <span
                  className={`grid h-6 w-6 shrink-0 place-items-center rounded-lg border transition ${
                    checked[index] ? "border-orange bg-orange text-white" : "border-clay/35 bg-cream"
                  }`}
                >
                  {checked[index] ? <CheckCircle2 size={16} /> : null}
                </span>
                {question}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="warm-card flex flex-col justify-center rounded-[2rem] p-6 md:p-8">
          <span className="text-sm font-black uppercase tracking-[0.18em] text-orange">Score Kamu</span>
          <div className="mt-4 flex items-end gap-2">
            <span className="text-6xl font-black text-orange">{score}</span>
            <span className="pb-2 text-2xl font-black text-cocoa/45">/5</span>
          </div>
          <div className="mt-6 h-3 overflow-hidden rounded-full bg-cream">
            <motion.div
              animate={{ width: `${(score / questions.length) * 100}%` }}
              transition={{ type: "spring", stiffness: 120, damping: 22 }}
              className="h-full rounded-full bg-orange"
            />
          </div>
          <motion.div
            key={result}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 rounded-2xl bg-butter/45 p-5"
          >
            <p className="text-base font-black text-cocoa">{result}</p>
            <a
              href="#contact"
              className="premium-cta mt-5 inline-flex rounded-full bg-orange px-5 py-3 text-sm font-black text-white transition hover:bg-burnt"
            >
              <span className="relative z-10">Start small with Temu Shot</span>
            </a>
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
}
