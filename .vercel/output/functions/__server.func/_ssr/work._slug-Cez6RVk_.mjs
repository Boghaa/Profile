import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as useI18n } from "./theme-CfYm4Gxm.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SiteLayout } from "./SiteLayout-CJCt5DJo.mjs";
import { i as StaggerItem, n as ScreenshotReveal, r as StaggerContainer, t as FadeUp } from "./Motion-CdRtcX4l.mjs";
import { t as ArchitectureDiagram } from "./ArchitectureDiagram-BLdms8so.mjs";
import { n as projects } from "./projects-Ofb4XAHS.mjs";
import { t as Route } from "./work._slug-CDCxi-_x.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work._slug-Cez6RVk_.js
var import_jsx_runtime = require_jsx_runtime();
function ScreenshotFrame({ src, alt, caption, priority, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenshotReveal, {
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl border rule overflow-hidden bg-[color:var(--paper-2)] shadow-[0_20px_60px_-25px_rgba(20,24,40,0.25)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1.5 border-b rule bg-[color:var(--paper)] px-3 py-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-[color:var(--rule)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-[color:var(--rule)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-[color:var(--rule)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ms-3 label-mono truncate",
						children: alt
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt,
				loading: priority ? "eager" : "lazy",
				decoding: "async",
				className: "block w-full h-auto"
			})]
		}), caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "mt-3 label-mono",
			children: caption
		})] })
	});
}
function CaseStudy() {
	const { t, lang } = useI18n();
	const { project: p } = Route.useLoaderData();
	const next = projects[(projects.findIndex((x) => x.slug === p.slug) + 1) % projects.length];
	const title = lang === "ar" && p.titleAr || p.title;
	const subtitle = lang === "ar" && p.subtitleAr || p.subtitle;
	const summary = lang === "ar" && p.summaryAr || p.summary;
	const nextTitle = lang === "ar" && next.titleAr || next.title;
	const nextSubtitle = lang === "ar" && next.subtitleAr || next.subtitle;
	const category = t.work.categories[p.category] ?? p.category;
	const arrow = lang === "ar" ? "←" : "→";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b rule",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x pt-16 md:pt-20 pb-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 label-mono",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/work",
								className: "hover:text-foreground",
								children: t.caseStudy.back
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								t.caseStudy.caseLabel,
								" ",
								p.number
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: category })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FadeUp, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02]",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl",
						children: subtitle
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 grid gap-6 md:grid-cols-4 text-sm border-y rule py-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "label-mono",
								children: t.caseStudy.role
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 text-foreground/90",
								children: p.role.join(" · ")
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "label-mono",
								children: t.caseStudy.domain
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 text-foreground/90",
								children: p.domain
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "label-mono",
								children: t.caseStudy.platform
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 text-foreground/90",
								children: p.platform
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "label-mono",
								children: t.caseStudy.number
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 text-foreground/90 font-mono",
								children: [p.number, " / 07"]
							})] })
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-16 grid gap-12 md:grid-cols-12 items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:col-span-7",
				children: p.cover ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenshotFrame, {
					src: p.cover,
					alt: `${title} — screenshot`,
					priority: true
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchitectureDiagram, { diagram: p.architecture[0] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "label-mono",
					children: t.caseStudy.overview
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg leading-relaxed text-foreground/90",
					children: summary
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x pb-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerContainer, {
				className: "grid gap-10 md:grid-cols-2",
				children: p.sections.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StaggerItem, {
					className: "rounded-xl border rule bg-[color:var(--paper-2)] p-6 md:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "label-mono",
							children: String(i + 1).padStart(2, "0")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 text-xl md:text-2xl font-semibold tracking-tight",
							children: s.title
						}),
						s.body && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground leading-relaxed",
							children: s.body
						}),
						s.list && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-1.5 text-sm",
							children: s.list.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2 text-foreground/85",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "·"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
							}, item))
						})
					]
				}, s.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "label-mono",
					children: t.caseStudy.architecture
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-3xl md:text-4xl font-semibold tracking-tight max-w-3xl",
					children: t.caseStudy.architectureTitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-8",
					children: p.architecture.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchitectureDiagram, { diagram: d }, i))
				})
			]
		}),
		p.gallery.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "label-mono",
					children: t.caseStudy.screenshots
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-3xl md:text-4xl font-semibold tracking-tight max-w-3xl",
					children: t.caseStudy.screenshotsTitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-8 md:grid-cols-2",
					children: p.gallery.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenshotFrame, {
						src,
						alt: `${title} — ${i + 1}`
					}, src))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-16 grid gap-12 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "label-mono",
				children: t.caseStudy.tech
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex flex-wrap gap-2",
				children: p.techStack.map((tk) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs rounded-full border rule px-3 py-1.5 text-foreground/80",
					children: tk
				}, tk))
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "label-mono",
				children: t.caseStudy.takeaways
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 space-y-3 text-foreground/90",
				children: p.takeaways.map((tk) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-xs text-muted-foreground mt-1",
						children: arrow
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "leading-relaxed",
						children: tk
					})]
				}, tk))
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t rule",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/work/$slug",
				params: { slug: next.slug },
				className: "block group",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x py-20 flex items-end justify-between gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "label-mono",
							children: t.caseStudy.next
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 text-3xl md:text-5xl font-semibold tracking-tight group-hover:underline underline-offset-4",
							children: nextTitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-muted-foreground",
							children: nextSubtitle
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-2xl md:text-4xl transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1",
						children: arrow
					})]
				})
			})
		})
	] });
}
//#endregion
export { CaseStudy as component };
