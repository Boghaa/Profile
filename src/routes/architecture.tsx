import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ArchitectureDiagram } from "@/components/site/ArchitectureDiagram";
import { useI18n } from "@/i18n/I18nProvider";
import { FadeUp } from "@/components/motion/Motion";

export const Route = createFileRoute("/architecture")({
  head: () => ({
    meta: [
      { title: "Architecture — Mostafa Ghazalah" },
      {
        name: "description",
        content:
          "Architecture principles, multi-tenant data isolation, real-time systems, integration layers, production infrastructure and security & reliability.",
      },
      { property: "og:title", content: "Architecture Beyond Frameworks" },
      {
        property: "og:description",
        content:
          "Authentication boundaries, tenant-aware data access, domain models, API contracts, transaction lifecycles, integration layers and production infrastructure.",
      },
    ],
  }),
  component: ArchitecturePage,
});

const sections = [
  {
    title: "API-First Platform Architecture",
    body:
      "Every platform I ship starts with a strict API contract. Web, mobile and integrations are all first-class clients of the same versioned surface.",
    diagram: {
      title: "API-first platform",
      layers: [
        ["React / Next.js / Mobile"],
        ["Nginx"],
        ["REST API Layer"],
        ["Authentication & Authorization"],
        ["Domain Services"],
        ["PostgreSQL · Business Models"],
      ],
    },
  },
  {
    title: "Multi-Tenant Data Isolation",
    body:
      "Authentication is not authorization. Authentication identity is not automatically equal to tenant data context. Tenant APIs must operate inside the correct tenant database boundary.",
    diagram: {
      title: "Tenant-aware access",
      layers: [
        ["Public API Instance"],
        ["JWT"],
        ["Tenant Resolution"],
        ["Token-Bound Environment"],
        ["DB A", "DB B", "DB C"],
      ],
    },
  },
  {
    title: "Real-Time Collaboration Architecture",
    body:
      "The business backend owns users, permissions, metadata, membership and token generation. LiveKit owns audio and video media transport. Separating these responsibilities gives cleaner failure and scaling stories.",
    diagram: {
      title: "Media plane separation",
      layers: [
        ["Frontend"],
        ["API Platform"],
        ["Chat", "Meeting Control"],
        ["LiveKit"],
      ],
    },
  },
  {
    title: "Integration Layer Architecture",
    body:
      "External partners are placed behind a stable integration abstraction. New suppliers become adapters, not rewrites of business code.",
    diagram: {
      title: "Supplier integration",
      layers: [
        ["Core Platform"],
        ["Integration Abstraction Layer"],
        ["API A", "API B", "API C", "Future Connector"],
      ],
    },
  },
  {
    title: "Production Infrastructure",
    body:
      "Linux, Nginx, PostgreSQL, application services, firewall, Fail2ban, backups, log analysis, deployment and production troubleshooting.",
    diagram: {
      title: "Production path",
      layers: [
        ["Users"],
        ["Internet"],
        ["Nginx"],
        ["Application Services"],
        ["PostgreSQL"],
        ["Backup & Monitoring"],
      ],
    },
  },
];

const principles = [
  "Authentication and authorization are separate concerns.",
  "Tenant boundaries must be enforced at the data-access level.",
  "Secrets must not be embedded in source code.",
  "Write operations using independent cursors require explicit transaction management.",
  "Production incidents require root-cause investigation, not only restarting services.",
  "APIs should never expose raw stack traces to end users.",
  "User-facing validation errors should be structured and understandable.",
];

function ArchitecturePage() {
  const { t } = useI18n();
  return (
    <SiteLayout>
      <section className="border-b rule">
        <div className="container-x pt-20 md:pt-28 pb-16">
          <SectionHeader
            eyebrow={t.architecture.eyebrow}
            title={t.architecture.title}
            description={t.architecture.body}
          />
        </div>
      </section>

      <div className="container-x py-16 flex flex-col gap-16">
        {sections.map((s, i) => (
          <FadeUp key={s.title} as="section" className="grid gap-8 md:grid-cols-12 items-start">
            <div className="md:col-span-5">
              <div className="label-mono">Section {String(i + 1).padStart(2, "0")}</div>
              <h3 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
            <div className="md:col-span-7">
              <ArchitectureDiagram diagram={s.diagram} />
            </div>
          </FadeUp>
        ))}
      </div>

      <section className="border-t rule bg-[color:var(--paper-2)]">
        <div className="container-x py-20">
          <SectionHeader
            eyebrow="Section 06"
            title="Security & reliability principles."
          />
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {principles.map((p, i) => (
              <li key={p} className="rounded-lg border rule bg-[color:var(--paper)] p-5">
                <div className="label-mono">Principle {String(i + 1).padStart(2, "0")}</div>
                <p className="mt-2 text-foreground/90 leading-relaxed">{p}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-x py-20">
        <SectionHeader
          eyebrow="Incident response"
          title="Linux incident investigation."
          description="A suspicious high-CPU process was discovered on a Linux server. It restarted after termination, indicating persistence. Investigation covered the process tree, parent processes, working directory, binaries, configuration files, cron jobs, systemd units, startup scripts, and the Linux audit framework (auditctl, ausearch)."
        />
        <p className="mt-8 max-w-3xl text-muted-foreground leading-relaxed">
          Engineering lesson: treat recurring unauthorized execution as an incident-response problem
          involving persistence analysis and root-cause investigation — not only as a process-termination
          problem.
        </p>
      </section>
    </SiteLayout>
  );
}