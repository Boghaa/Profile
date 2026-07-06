import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { r as useI18n } from "./theme-CfYm4Gxm.mjs";
import { t as SiteLayout } from "./SiteLayout-CJCt5DJo.mjs";
import { i as StaggerItem, r as StaggerContainer } from "./Motion-CdRtcX4l.mjs";
import { t as SectionHeader } from "./SectionHeader-78QZADMl.mjs";
import { n as projects, t as additionalSystems } from "./projects-Ofb4XAHS.mjs";
import { t as ProjectCard } from "./ProjectCard-CTFFLAgv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work.index-DneKuVSv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var categories = [
	"All",
	"SaaS",
	"Real-Time",
	"Business Operations",
	"Healthcare",
	"Travel"
];
function WorkPage() {
	const { t } = useI18n();
	const [cat, setCat] = (0, import_react.useState)("All");
	const filtered = cat === "All" ? projects : projects.filter((p) => p.categories.includes(cat));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b rule",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x pt-20 md:pt-28 pb-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: t.work.eyebrow,
					title: t.work.title,
					description: t.work.body
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between flex-wrap gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "label-mono",
					children: t.work.featuredLabel
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5",
					children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setCat(c),
						className: `text-xs rounded-full border px-3 py-1.5 transition ${cat === c ? "bg-foreground text-background border-foreground" : "rule text-muted-foreground hover:text-foreground"}`,
						children: t.work.categories[c] ?? c
					}, c))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerContainer, {
				className: "mt-10 grid gap-6 md:grid-cols-2",
				children: filtered.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, { p }) }, p.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t rule bg-[color:var(--paper-2)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: t.work.additionalEyebrow,
					title: t.work.additionalTitle
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
					children: additionalSystems.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border rule bg-[color:var(--paper)] p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "label-mono",
								children: s.kind
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 font-semibold tracking-tight",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground leading-relaxed",
								children: s.summary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex flex-wrap gap-1.5",
								children: s.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] rounded-full border rule px-2 py-0.5 text-foreground/70",
									children: t
								}, t))
							})
						]
					}, s.title))
				})]
			})
		})
	] });
}
//#endregion
export { WorkPage as component };
