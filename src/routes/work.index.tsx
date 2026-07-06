import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ProjectCard } from "@/components/site/ProjectCard";
import { projects, additionalSystems } from "@/data/projects";
import { useI18n } from "@/i18n/I18nProvider";
import { StaggerContainer, StaggerItem } from "@/components/motion/Motion";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work — Mostafa Ghazalah" },
      {
        name: "description",
        content:
          "Production systems across SaaS, real-time collaboration, tourism, healthcare, HR, logistics, retail, CRM, booking and financial operations.",
      },
      { property: "og:title", content: "Work — Mostafa Ghazalah" },
      {
        property: "og:description",
        content:
          "Case studies and selected production systems in backend architecture and platform engineering.",
      },
    ],
  }),
  component: WorkPage,
});

const categories = ["All", "SaaS", "Real-Time", "Business Operations", "Healthcare", "Travel"] as const;
type Cat = (typeof categories)[number];

function WorkPage() {
  const { t } = useI18n();
  const [cat, setCat] = useState<Cat>("All");
  const filtered = cat === "All" ? projects : projects.filter((p) => p.categories.includes(cat));

  return (
    <SiteLayout>
      <section className="border-b rule">
        <div className="container-x pt-20 md:pt-28 pb-16">
          <SectionHeader
            eyebrow={t.work.eyebrow}
            title={t.work.title}
            description={t.work.body}
          />
        </div>
      </section>

      <section className="container-x py-16">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="label-mono">{t.work.featuredLabel}</div>
          <div className="flex flex-wrap gap-1.5">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`text-xs rounded-full border px-3 py-1.5 transition ${
                  cat === c
                    ? "bg-foreground text-background border-foreground"
                    : "rule text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.work.categories[c] ?? c}
              </button>
            ))}
          </div>
        </div>

        <StaggerContainer className="mt-10 grid gap-6 md:grid-cols-2">
          {filtered.map((p) => (
            <StaggerItem key={p.slug}>
              <ProjectCard p={p} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <section className="border-t rule bg-[color:var(--paper-2)]">
        <div className="container-x py-20">
          <SectionHeader
            eyebrow={t.work.additionalEyebrow}
            title={t.work.additionalTitle}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {additionalSystems.map((s) => (
              <div key={s.title} className="rounded-lg border rule bg-[color:var(--paper)] p-5">
                <div className="label-mono">{s.kind}</div>
                <div className="mt-2 font-semibold tracking-tight">{s.title}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.summary}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span key={t} className="text-[11px] rounded-full border rule px-2 py-0.5 text-foreground/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}