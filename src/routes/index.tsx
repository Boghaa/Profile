import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { ProofStrip } from "@/components/site/ProofStrip";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ProjectCard } from "@/components/site/ProjectCard";
import { ProcessFlow } from "@/components/site/ProcessFlow";
import { ArchitectureDiagram } from "@/components/site/ArchitectureDiagram";
import { projects, additionalSystems } from "@/data/projects";
import { capabilities, capabilityGroups } from "@/data/capabilities";
import { experience } from "@/data/experience";
import { useI18n } from "@/i18n/I18nProvider";
import { StaggerContainer, StaggerItem, FadeUp } from "@/components/motion/Motion";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { t } = useI18n();
  const featured = projects.slice(0, 4);
  return (
    <SiteLayout>
      <Hero />
      <ProofStrip />

      {/* WHAT I BUILD */}
      <section className="container-x py-24 md:py-32">
        <SectionHeader
          eyebrow={t.home.capabilitiesEyebrow}
          title={t.home.capabilitiesTitle}
          description={t.home.capabilitiesBody}
        />
        <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-2">
          {capabilities.map((c) => (
            <StaggerItem
              key={c.number}
              className="rounded-xl border rule bg-[color:var(--paper-2)] p-6 md:p-8"
            >
              <div className="flex items-baseline justify-between">
                <div className="label-mono">{c.number}</div>
                <div className="label-mono">{t.home.capabilityBadge}</div>
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">{c.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{c.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {c.themes.map((t) => (
                  <span key={t} className="text-xs rounded-full border rule px-2.5 py-1 text-foreground/80">
                    {t}
                  </span>
                ))}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* FEATURED WORK */}
      <section className="border-t rule">
        <div className="container-x py-24 md:py-32">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <SectionHeader
              eyebrow={t.home.featuredEyebrow}
              title={t.home.featuredTitle}
              description={t.home.featuredBody}
            />
            <Link
              to="/work"
              className="text-sm underline underline-offset-4 hover:text-foreground text-muted-foreground"
            >
              {t.home.allProjects}
            </Link>
          </div>
          <StaggerContainer className="mt-10 grid gap-6 md:grid-cols-2">
            {featured.map((p) => (
              <StaggerItem key={p.slug}>
                <ProjectCard p={p} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ARCHITECTURE SPOTLIGHT */}
      <section className="border-t rule bg-[color:var(--paper-2)]">
        <div className="container-x py-24 md:py-32 grid gap-12 md:grid-cols-12 items-start">
          <div className="md:col-span-5">
            <SectionHeader
              eyebrow={t.home.archEyebrow}
              title={t.home.archTitle}
              description={t.home.archBody}
            />
            <Link
              to="/architecture"
              className="inline-flex mt-8 rounded-full border border-foreground/25 px-4 py-2 text-sm hover:border-foreground transition"
            >
              {t.home.archLink}
            </Link>
          </div>
          <div className="md:col-span-7">
            <ArchitectureDiagram
              diagram={{
                title: t.diagram.tokenBoundTitle,
                layers: [
                  ["Frontend / Mobile"],
                  ["Nginx"],
                  ["Public API Instance"],
                  ["JWT Authentication"],
                  ["Trusted Tenant DB Resolution"],
                  ["Token-Bound Odoo Environment"],
                  ["Tenant A", "Tenant B", "Tenant C"],
                ],
              }}
            />
          </div>
        </div>
      </section>

      {/* HOW I BUILD */}
      <section className="container-x py-24 md:py-32">
        <SectionHeader
          eyebrow={t.home.processEyebrow}
          title={t.home.processTitle}
          description={t.home.processBody}
        />
        <div className="mt-12">
          <ProcessFlow />
        </div>
      </section>

      {/* SELECTED PRODUCTION SYSTEMS */}
      <section className="border-t rule bg-[color:var(--paper-2)]">
        <div className="container-x py-24 md:py-32">
          <SectionHeader
            eyebrow={t.home.additionalEyebrow}
            title={t.home.additionalTitle}
            description={t.home.additionalBody}
          />
          <StaggerContainer className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {additionalSystems.map((s) => (
              <StaggerItem key={s.title} className="rounded-lg border rule bg-[color:var(--paper)] p-5">
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
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ENGINEERING EXPERIENCE */}
      <section className="container-x py-24 md:py-32">
        <SectionHeader
          eyebrow={t.home.expEyebrow}
          title={t.home.expTitle}
        />
        <StaggerContainer className="mt-12 divide-y rule border-y rule">
          {experience.map((r) => (
            <StaggerItem
              key={r.company}
              as="div"
              className="py-6 grid gap-4 md:grid-cols-12 items-start"
            >
              <div className="md:col-span-3 label-mono">{r.period}</div>
              <div className="md:col-span-4">
                <div className="text-lg font-semibold tracking-tight">{r.company}</div>
                <div className="text-sm text-muted-foreground">{r.title}</div>
              </div>
              <div className="md:col-span-5 flex flex-wrap gap-1.5">
                {r.themes.slice(0, 6).map((th) => (
                  <span key={th} className="text-[11px] rounded-full border rule px-2 py-0.5 text-foreground/70">
                    {th}
                  </span>
                ))}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* TECHNICAL CAPABILITIES */}
      <section className="border-t rule bg-[color:var(--paper-2)]">
        <div className="container-x py-24 md:py-32">
          <SectionHeader
            eyebrow={t.home.techEyebrow}
            title={t.home.techTitle}
          />
          <FadeUp className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
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
          </FadeUp>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="container-x py-24 md:py-32 grid gap-10 md:grid-cols-12 items-center">
        <div className="md:col-span-5">
          <img
            src="/profile/portrait.jpg"
            alt="Mostafa Ghazalah"
            loading="lazy"
            className="w-full h-[420px] object-cover rounded-xl border rule"
          />
        </div>
        <div className="md:col-span-7">
          <SectionHeader
            eyebrow={t.home.aboutEyebrow}
            title={t.home.aboutTitle}
            description={t.home.aboutBody}
          />
          <Link
            to="/about"
            className="inline-flex mt-8 rounded-full border border-foreground/25 px-4 py-2 text-sm hover:border-foreground transition"
          >
            {t.home.aboutLink}
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
