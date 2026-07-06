import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as useI18n } from "./theme-CfYm4Gxm.mjs";
import { n as motion, t as useReducedMotion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ArchitectureDiagram-BLdms8so.js
var import_jsx_runtime = require_jsx_runtime();
function ArchitectureDiagram({ diagram }) {
	const { t } = useI18n();
	const reduce = useReducedMotion();
	const tr = (label) => t.diagram.layers[label] ?? label;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border rule bg-[color:var(--paper-2)] p-6 md:p-10",
		children: [
			diagram.title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "label-mono mb-6",
				children: diagram.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "flex flex-col items-stretch gap-3",
				initial: "hidden",
				whileInView: "show",
				viewport: {
					once: true,
					amount: .25
				},
				variants: {
					hidden: {},
					show: { transition: { staggerChildren: reduce ? 0 : .12 } }
				},
				children: diagram.layers.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					className: "flex flex-col items-center",
					variants: reduce ? {
						hidden: {},
						show: {}
					} : {
						hidden: {
							opacity: 0,
							y: 10
						},
						show: {
							opacity: 1,
							y: 0,
							transition: {
								duration: .45,
								ease: [
									.22,
									1,
									.36,
									1
								]
							}
						}
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-3 w-full",
						style: { gridTemplateColumns: `repeat(${row.length}, minmax(0, 1fr))` },
						children: row.map((node) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-md border rule bg-[color:var(--paper)] px-4 py-3 text-center text-sm font-medium text-foreground transition-colors hover:border-[color:var(--cobalt)]",
							children: tr(node)
						}, node))
					}), i < diagram.layers.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						"aria-hidden": true,
						className: "my-1 w-px bg-[color:var(--cobalt)]/60 origin-top",
						initial: reduce ? false : {
							scaleY: 0,
							height: 24
						},
						whileInView: reduce ? void 0 : {
							scaleY: 1,
							height: 24
						},
						viewport: {
							once: true,
							amount: .4
						},
						transition: {
							duration: .5,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						style: { height: 24 }
					})]
				}, i))
			}),
			diagram.caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "label-mono mt-6",
				children: diagram.caption
			})
		]
	});
}
//#endregion
export { ArchitectureDiagram as t };
