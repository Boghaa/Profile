import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ArchitectureDiagram } from "@/components/site/ArchitectureDiagram";
import { ScreenshotFrame } from "@/components/site/ScreenshotFrame";
import { projects, type Project } from "@/data/projects";
import { useI18n } from "@/i18n/I18nProvider";
import { StaggerContainer, StaggerItem, FadeUp } from "@/components/motion/Motion";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return {};
    return {
      meta: [
        { title: `${p.title} — Mostafa Ghazalah` },
        { name: "description", content: p.summary },
        { property: "og:title", content: `${p.title} · Case Study` },
        { property: "og:description", content: p.summary },
        ...(p.cover ? [{ property: "og:image", content: p.cover }] : []),
        ...(p.cover ? [{ name: "twitter:image", content: p.cover }] : []),
      ],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container-x py-32 text-center">
        <div className="label-mono">404</div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">Case study not found</h1>
        <Link
          to="/work"
          className="mt-6 inline-flex rounded-full border border-foreground/25 px-4 py-2 text-sm hover:border-foreground"
        >
          Back to work
        </Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: ({ error, reset }) => (
    <SiteLayout>
      <div className="container-x py-32 text-center">
        <div className="label-mono">Error</div>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">This case study didn't load.</h1>
        <p className="mt-2 text-muted-foreground text-sm">{error.message}</p>
        <button
          onClick={reset}
          className="mt-6 inline-flex rounded-full border border-foreground/25 px-4 py-2 text-sm hover:border-foreground"
        >
          Try again
        </button>
      </div>
    </SiteLayout>
  ),
  component: CaseStudy,
});

function CaseStudy() {
  const { t, lang } = useI18n();
  const { project: p } = Route.useLoaderData() as { project: Project };
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];
  const title = (lang === "ar" && p.titleAr) || p.title;
  const subtitle = (lang === "ar" && p.subtitleAr) || p.subtitle;
  const summary = (lang === "ar" && p.summaryAr) || p.summary;
  const nextTitle = (lang === "ar" && next.titleAr) || next.title;
  const nextSubtitle = (lang === "ar" && next.subtitleAr) || next.subtitle;
  const category = t.work.categories[p.category] ?? p.category;
  const arrow = lang === "ar" ? "←" : "→";

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="border-b rule">
        <div className="container-x pt-16 md:pt-20 pb-14">
          <div className="flex items-center gap-4 label-mono">
            <Link to="/work" className="hover:text-foreground">{t.caseStudy.back}</Link>
            <span>{t.caseStudy.caseLabel} {p.number}</span>
            <span>·</span>
            <span>{category}</span>
          </div>
          <FadeUp>
            <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02]">
              {title}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl">{subtitle}</p>
          </FadeUp>
          <div className="mt-10 grid gap-6 md:grid-cols-4 text-sm border-y rule py-6">
            <div>
              <div className="label-mono">{t.caseStudy.role}</div>
              <div className="mt-2 text-foreground/90">{p.role.join(" · ")}</div>
            </div>
            <div>
              <div className="label-mono">{t.caseStudy.domain}</div>
              <div className="mt-2 text-foreground/90">{p.domain}</div>
            </div>
            <div>
              <div className="label-mono">{t.caseStudy.platform}</div>
              <div className="mt-2 text-foreground/90">{p.platform}</div>
            </div>
            <div>
              <div className="label-mono">{t.caseStudy.number}</div>
              <div className="mt-2 text-foreground/90 font-mono">{p.number} / 07</div>
            </div>
          </div>
        </div>
      </section>

      {/* COVER + OVERVIEW */}
      <section className="container-x py-16 grid gap-12 md:grid-cols-12 items-start">
        <div className="md:col-span-7">
          {p.cover ? (
            <ScreenshotFrame src={p.cover} alt={`${title} — screenshot`} priority />
          ) : (
            <ArchitectureDiagram diagram={p.architecture[0]} />
          )}
        </div>
        <div className="md:col-span-5">
          <div className="label-mono">{t.caseStudy.overview}</div>
          <p className="mt-4 text-lg leading-relaxed text-foreground/90">{summary}</p>
        </div>
      </section>

      {/* SECTIONS */}
      <section className="container-x pb-10">
        <StaggerContainer className="grid gap-10 md:grid-cols-2">
          {p.sections.map((s, i) => (
            <StaggerItem key={s.title} className="rounded-xl border rule bg-[color:var(--paper-2)] p-6 md:p-8">
              <div className="label-mono">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="mt-2 text-xl md:text-2xl font-semibold tracking-tight">{s.title}</h3>
              {s.body && (
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.body}</p>
              )}
              {s.list && (
                <ul className="mt-4 space-y-1.5 text-sm">
                  {s.list.map((item) => (
                    <li key={item} className="flex gap-2 text-foreground/85">
                      <span className="text-muted-foreground">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ARCHITECTURE */}
      <section className="container-x py-16">
        <div className="label-mono">{t.caseStudy.architecture}</div>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight max-w-3xl">
          {t.caseStudy.architectureTitle}
        </h2>
        <div className="mt-10 grid gap-8">
          {p.architecture.map((d, i) => (
            <ArchitectureDiagram key={i} diagram={d} />
          ))}
        </div>
      </section>

      {/* GALLERY */}
      {p.gallery.length > 0 && (
        <section className="container-x py-16">
          <div className="label-mono">{t.caseStudy.screenshots}</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight max-w-3xl">
            {t.caseStudy.screenshotsTitle}
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {p.gallery.map((src, i) => (
              <ScreenshotFrame
                key={src}
                src={src}
                alt={`${title} — ${i + 1}`}
              />
            ))}
          </div>
        </section>
      )}

      {/* STACK + TAKEAWAYS */}
      <section className="container-x py-16 grid gap-12 md:grid-cols-2">
        <div>
          <div className="label-mono">{t.caseStudy.tech}</div>
          <div className="mt-6 flex flex-wrap gap-2">
            {p.techStack.map((tk) => (
              <span key={tk} className="text-xs rounded-full border rule px-3 py-1.5 text-foreground/80">
                {tk}
              </span>
            ))}
          </div>
        </div>
        <div>
          <div className="label-mono">{t.caseStudy.takeaways}</div>
          <ul className="mt-6 space-y-3 text-foreground/90">
            {p.takeaways.map((tk) => (
              <li key={tk} className="flex gap-3">
                <span className="font-mono text-xs text-muted-foreground mt-1">{arrow}</span>
                <span className="leading-relaxed">{tk}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* NEXT */}
      <section className="border-t rule">
        <Link
          to="/work/$slug"
          params={{ slug: next.slug }}
          className="block group"
        >
          <div className="container-x py-20 flex items-end justify-between gap-6">
            <div>
              <div className="label-mono">{t.caseStudy.next}</div>
              <div className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight group-hover:underline underline-offset-4">
                {nextTitle}
              </div>
              <div className="mt-2 text-muted-foreground">{nextSubtitle}</div>
            </div>
            <div className="text-2xl md:text-4xl transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
              {arrow}
            </div>
          </div>
        </Link>
      </section>
    </SiteLayout>
  );
}