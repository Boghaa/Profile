import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as FadeUp } from "./Motion-CdRtcX4l.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SectionHeader-78QZADMl.js
var import_jsx_runtime = require_jsx_runtime();
function SectionHeader({ eyebrow, title, description, align = "left" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FadeUp, {
		className: align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl",
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "label-mono",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05]",
				children: title
			}),
			description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base md:text-lg text-muted-foreground leading-relaxed",
				children: description
			})
		]
	});
}
//#endregion
export { SectionHeader as t };
