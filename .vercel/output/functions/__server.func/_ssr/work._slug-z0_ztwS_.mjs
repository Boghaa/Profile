import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as SiteLayout } from "./SiteLayout-CJCt5DJo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work._slug-z0_ztwS_.js
var import_jsx_runtime = require_jsx_runtime();
var SplitErrorComponent = ({ error, reset }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "container-x py-32 text-center",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "label-mono",
			children: "Error"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-3 text-2xl font-semibold tracking-tight",
			children: "This case study didn't load."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-muted-foreground text-sm",
			children: error.message
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: reset,
			className: "mt-6 inline-flex rounded-full border border-foreground/25 px-4 py-2 text-sm hover:border-foreground",
			children: "Try again"
		})
	]
}) });
//#endregion
export { SplitErrorComponent as errorComponent };
