import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as useI18n } from "./theme-CfYm4Gxm.mjs";
import { t as SiteLayout } from "./SiteLayout-CJCt5DJo.mjs";
import { i as StaggerItem, r as StaggerContainer, t as FadeUp } from "./Motion-CdRtcX4l.mjs";
import { t as SectionHeader } from "./SectionHeader-78QZADMl.mjs";
import { n as capabilityGroups, r as experience } from "./capabilities-BUilAakm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-C_BLBm6y.js
var import_jsx_runtime = require_jsx_runtime();
var progression = [
	"Odoo Development",
	"Advanced Backend Development",
	"API Architecture",
	"Infrastructure",
	"Multi-Tenant Systems",
	"Backend Architecture",
	"Platform Engineering"
];
var focus = [
	"Backend Architecture",
	"Platform Engineering",
	"System Design",
	"Advanced PostgreSQL",
	"Cloud Architecture",
	"Security",
	"Production Reliability"
];
function AboutPage() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b rule",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x pt-20 md:pt-28 pb-16 grid gap-12 md:grid-cols-12 items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
						eyebrow: t.about.eyebrow,
						title: t.about.title,
						description: t.about.body
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 inline-flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[color:var(--cobalt)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "label-mono !text-foreground/70",
							children: t.about.availabilityTitle
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/profile/portrait.jpg",
						alt: "Mostafa Ghazalah",
						className: "w-full h-[420px] object-cover rounded-xl border rule"
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-20 grid gap-12 md:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FadeUp, {
				className: "md:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/90",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t.about.p1 }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t.about.p2 }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground",
						children: t.about.p3
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-5 space-y-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "label-mono",
						children: t.about.progression
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-4 space-y-1 text-sm",
						children: progression.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs text-muted-foreground w-6",
								children: String(i + 1).padStart(2, "0")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p })]
						}, p))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "label-mono",
						children: t.about.focus
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-1.5",
						children: focus.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs rounded-full border rule px-2.5 py-1 text-foreground/80",
							children: f
						}, f))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border rule bg-[color:var(--paper-2)] p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "label-mono",
							children: t.about.availabilityTitle
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-1.5 text-sm text-foreground/85",
							children: t.about.availabilityItems.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[color:var(--cobalt)]",
									children: "·"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: it })]
							}, it))
						})]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t rule bg-[color:var(--paper-2)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: t.about.experience,
					title: t.about.experienceTitle
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerContainer, {
					className: "mt-10 divide-y rule border-y rule",
					children: experience.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StaggerItem, {
						className: "py-6 grid gap-4 md:grid-cols-12 items-start",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "md:col-span-3 label-mono",
								children: r.period
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-lg font-semibold tracking-tight",
									children: r.company
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm text-muted-foreground",
									children: r.title
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "md:col-span-5 flex flex-wrap gap-1.5",
								children: r.themes.map((th) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] rounded-full border rule px-2 py-0.5 text-foreground/70",
									children: th
								}, th))
							})
						]
					}, r.company))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: t.about.capabilities,
				title: t.about.capabilitiesTitle
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-5",
				children: capabilityGroups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "label-mono",
					children: g.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-1.5 text-sm",
					children: g.items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "text-foreground/85",
						children: i
					}, i))
				})] }, g.title))
			})]
		})
	] });
}
//#endregion
export { AboutPage as component };
