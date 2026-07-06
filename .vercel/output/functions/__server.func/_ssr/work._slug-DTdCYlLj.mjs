import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SiteLayout } from "./SiteLayout-CJCt5DJo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work._slug-DTdCYlLj.js
var import_jsx_runtime = require_jsx_runtime();
var SplitNotFoundComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "container-x py-32 text-center",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "label-mono",
			children: "404"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-3 text-3xl font-semibold tracking-tight",
			children: "Case study not found"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/work",
			className: "mt-6 inline-flex rounded-full border border-foreground/25 px-4 py-2 text-sm hover:border-foreground",
			children: "Back to work"
		})
	]
}) });
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
