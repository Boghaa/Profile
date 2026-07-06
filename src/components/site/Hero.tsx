import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "@/i18n/I18nProvider";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { t } = useI18n();
  const reduce = useReducedMotion();
  const seq = (i: number) =>
    reduce
      ? { initial: false }
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay: 0.05 + i * 0.09, ease: EASE },
        };
  return (
    <section className="relative border-b rule">
      <div className="container-x pt-16 md:pt-24 pb-16 md:pb-24 grid gap-12 md:grid-cols-12 items-end">
        <div className="md:col-span-7">
          <motion.div className="label-mono" {...seq(0)}>{t.hero.eyebrow}</motion.div>
          <motion.h1
            className="mt-6 text-4xl md:text-7xl font-semibold tracking-tight leading-[0.98]"
            {...seq(1)}
          >
            {t.hero.title}
          </motion.h1>
          <motion.p
            className="mt-6 md:mt-8 text-base md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            {...seq(2)}
          >
            {t.hero.body}
          </motion.p>
          <motion.div className="mt-6 inline-flex items-center gap-2" {...seq(3)}>
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--cobalt)]" />
            <span className="label-mono !text-foreground/70">{t.hero.availability}</span>
          </motion.div>
          <motion.div className="mt-8 flex flex-wrap gap-3" {...seq(4)}>
            <Link
              to="/work"
              className="rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              {t.hero.ctaWork} →
            </Link>
            <Link
              to="/architecture"
              className="rounded-full border border-foreground/25 px-5 py-3 text-sm font-medium hover:border-foreground transition"
            >
              {t.hero.ctaArch}
            </Link>
          </motion.div>
        </div>
        <motion.div className="md:col-span-5" {...seq(5)}>
          <div className="relative">
            <div className="absolute -inset-3 rounded-2xl border rule pointer-events-none" />
            <div className="relative rounded-xl overflow-hidden border rule">
              <img
                src="/profile/portrait.jpg"
                alt="Portrait of Mostafa Ghazalah"
                className="w-full h-[380px] md:h-[520px] object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                <div className="label-mono !text-white/70">{t.hero.portraitCaption}</div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 hidden md:block rtl:left-auto rtl:-right-4">
              <div className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground bg-[color:var(--paper)] border rule rounded px-2 py-1">
                python · api · postgres · nginx · linux
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}