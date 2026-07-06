import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { experience } from "@/data/experience";
import { capabilityGroups } from "@/data/capabilities";
import { useI18n } from "@/i18n/I18nProvider";
import { StaggerContainer, StaggerItem, FadeUp } from "@/components/motion/Motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mostafa Ghazalah" },
      {
        name: "description",
        content:
          "Backend Architect and Senior Backend Engineer. Approximately 16 production systems across ERP, CRM, logistics, tourism, hotel booking, POS, healthcare, HR, WhatsApp automation, real-time chat, meetings and multi-tenant SaaS.",
      },
      { property: "og:title", content: "About — Mostafa Ghazalah" },
      {
        property: "og:description",
        content: "Engineering systems around real business operations.",
      },
      { property: "og:image", content: "/profile/portrait.jpg" },
      { name: "twitter:image", content: "/profile/portrait.jpg" },
    ],
  }),
  component: AboutPage,
});

const progression = [
  "Odoo Development",
  "Advanced Backend Development",
  "API Architecture",
  "Infrastructure",
  "Multi-Tenant Systems",
  "Backend Architecture",
  "Platform Engineering",
];

const focus = [
  "Backend Architecture",
  "Platform Engineering",
  "System Design",
  "Advanced PostgreSQL",
  "Cloud Architecture",
  "Security",
  "Production Reliability",
];

function AboutPage() {
  const { t } = useI18n();
  return (
    <SiteLayout>
      <section className="border-b rule">
        <div className="container-x pt-20 md:pt-28 pb-16 grid gap-12 md:grid-cols-12 items-end">
          <div className="md:col-span-7">
            <SectionHeader
              eyebrow={t.about.eyebrow}
              title={t.about.title}
              description={t.about.body}
            />
            <div className="mt-6 inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--cobalt)]" />
              <span className="label-mono !text-foreground/70">
                {t.about.availabilityTitle}
              </span>
            </div>
          </div>
          <div className="md:col-span-5">
            <img
              src="/profile/portrait.jpg"
              alt="Mostafa Ghazalah"
              className="w-full h-[420px] object-cover rounded-xl border rule"
            />
          </div>
        </div>
      </section>

      <section className="container-x py-20 grid gap-12 md:grid-cols-12">
        <FadeUp className="md:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/90">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p className="text-muted-foreground">{t.about.p3}</p>
        </FadeUp>
        <div className="md:col-span-5 space-y-8">
          <div>
            <div className="label-mono">{t.about.progression}</div>
            <ol className="mt-4 space-y-1 text-sm">
              {progression.map((p, i) => (
                <li key={p} className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted-foreground w-6">{String(i + 1).padStart(2, "0")}</span>
                  <span>{p}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <div className="label-mono">{t.about.focus}</div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {focus.map((f) => (
                <span key={f} className="text-xs rounded-full border rule px-2.5 py-1 text-foreground/80">
                  {f}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-lg border rule bg-[color:var(--paper-2)] p-5">
            <div className="label-mono">{t.about.availabilityTitle}</div>
            <ul className="mt-3 space-y-1.5 text-sm text-foreground/85">
              {t.about.availabilityItems.map((it) => (
                <li key={it} className="flex gap-2">
                  <span className="text-[color:var(--cobalt)]">·</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t rule bg-[color:var(--paper-2)]">
        <div className="container-x py-20">
          <SectionHeader eyebrow={t.about.experience} title={t.about.experienceTitle} />
          <StaggerContainer className="mt-10 divide-y rule border-y rule">
            {experience.map((r) => (
              <StaggerItem key={r.company} className="py-6 grid gap-4 md:grid-cols-12 items-start">
                <div className="md:col-span-3 label-mono">{r.period}</div>
                <div className="md:col-span-4">
                  <div className="text-lg font-semibold tracking-tight">{r.company}</div>
                  <div className="text-sm text-muted-foreground">{r.title}</div>
                </div>
                <div className="md:col-span-5 flex flex-wrap gap-1.5">
                  {r.themes.map((th) => (
                    <span key={th} className="text-[11px] rounded-full border rule px-2 py-0.5 text-foreground/70">
                      {th}
                    </span>
                  ))}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="container-x py-20">
        <SectionHeader eyebrow={t.about.capabilities} title={t.about.capabilitiesTitle} />
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {capabilityGroups.map((g) => (
            <div key={g.title}>
              <div className="label-mono">{g.title}</div>
              <ul className="mt-3 space-y-1.5 text-sm">
                {g.items.map((i) => (
                  <li key={i} className="text-foreground/85">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}