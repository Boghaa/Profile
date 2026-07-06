import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as useI18n } from "./theme-CfYm4Gxm.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as motion, t as useReducedMotion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProjectCard-CTFFLAgv.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectCard({ p }) {
	const { lang, t } = useI18n();
	const reduce = useReducedMotion();
	const title = lang === "ar" && p.titleAr || p.title;
	const subtitle = lang === "ar" && p.subtitleAr || p.subtitle;
	const category = t.work.categories[p.category] ?? p.category;
	const arrow = lang === "ar" ? "←" : "→";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		whileHover: reduce ? void 0 : { y: -4 },
		transition: {
			duration: .35,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: "h-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/work/$slug",
			params: { slug: p.slug },
			className: "group block h-full rounded-xl border rule bg-[color:var(--paper-2)] overflow-hidden hover:border-foreground/40 hover:shadow-[0_20px_45px_-30px_rgba(0,0,0,0.35)] transition-all",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aspect-[16/10] overflow-hidden bg-[color:var(--paper)] flex items-center justify-center",
				children: p.cover ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: p.cover,
					alt: title,
					loading: "lazy",
					decoding: "async",
					className: "w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-8 w-full h-full flex flex-col justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "label-mono",
						children: "Architecture-led"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-xs text-muted-foreground leading-relaxed",
						children: p.architecture[0]?.layers.map((r) => r.join(" · ")).slice(0, 4).join("  ↓  ")
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-5 md:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between label-mono",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.number }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: category })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 text-lg md:text-xl font-semibold tracking-tight",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 text-sm text-muted-foreground",
						children: subtitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.caseStudy.caseLabel }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1",
							children: arrow
						})]
					})
				]
			})]
		})
	});
}
//#endregion
export { ProjectCard as t };
