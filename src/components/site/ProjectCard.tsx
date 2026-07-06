import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";
import { useI18n } from "@/i18n/I18nProvider";

export function ProjectCard({ p }: { p: Project }) {
  const { lang, t } = useI18n();
  const reduce = useReducedMotion();
  const title = (lang === "ar" && p.titleAr) || p.title;
  const subtitle = (lang === "ar" && p.subtitleAr) || p.subtitle;
  const category = t.work.categories[p.category] ?? p.category;
  const arrow = lang === "ar" ? "←" : "→";
  return (
    <motion.div
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Link
        to="/work/$slug"
        params={{ slug: p.slug }}
        className="group block h-full rounded-xl border rule bg-[color:var(--paper-2)] overflow-hidden hover:border-foreground/40 hover:shadow-[0_20px_45px_-30px_rgba(0,0,0,0.35)] transition-all"
      >
        <div className="aspect-[16/10] overflow-hidden bg-[color:var(--paper)] flex items-center justify-center">
        {p.cover ? (
          <img
            src={p.cover}
            alt={title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
          />
        ) : (
          <div className="p-8 w-full h-full flex flex-col justify-between">
            <div className="label-mono">Architecture-led</div>
            <div className="font-mono text-xs text-muted-foreground leading-relaxed">
              {p.architecture[0]?.layers
                .map((r) => r.join(" · "))
                .slice(0, 4)
                .join("  ↓  ")}
            </div>
          </div>
        )}
        </div>
        <div className="p-5 md:p-6">
          <div className="flex items-center justify-between label-mono">
            <span>{p.number}</span>
            <span>{category}</span>
          </div>
          <div className="mt-2 text-lg md:text-xl font-semibold tracking-tight">{title}</div>
          <div className="mt-1 text-sm text-muted-foreground">{subtitle}</div>
          <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors">
            <span>{t.caseStudy.caseLabel}</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">{arrow}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}