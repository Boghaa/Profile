import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as motion, t as useReducedMotion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Motion-CdRtcX4l.js
var import_jsx_runtime = require_jsx_runtime();
var EASE = [
	.22,
	1,
	.36,
	1
];
function FadeUp({ children, delay = 0, y = 20, className, once = true, as = "div" }) {
	const reduce = useReducedMotion();
	const Comp = motion[as];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, {
		className,
		initial: reduce ? false : {
			opacity: 0,
			y
		},
		whileInView: reduce ? void 0 : {
			opacity: 1,
			y: 0
		},
		viewport: {
			once,
			amount: .2
		},
		transition: {
			duration: .55,
			delay,
			ease: EASE
		},
		children
	});
}
function StaggerContainer({ children, className, stagger = .08, delay = 0, once = true }) {
	const reduce = useReducedMotion();
	const variants = {
		hidden: {},
		show: { transition: {
			staggerChildren: reduce ? 0 : stagger,
			delayChildren: reduce ? 0 : delay
		} }
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: "hidden",
		whileInView: "show",
		viewport: {
			once,
			amount: .15
		},
		variants,
		children
	});
}
function StaggerItem({ children, className, y = 18, as = "div", ...rest }) {
	const reduce = useReducedMotion();
	const Comp = motion[as];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, {
		className,
		variants: reduce ? {
			hidden: {},
			show: {}
		} : {
			hidden: {
				opacity: 0,
				y
			},
			show: {
				opacity: 1,
				y: 0,
				transition: {
					duration: .55,
					ease: EASE
				}
			}
		},
		...rest,
		children
	});
}
function ScreenshotReveal({ children, className, delay = 0 }) {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: reduce ? false : {
			opacity: 0,
			y: 12,
			scale: .985
		},
		whileInView: reduce ? void 0 : {
			opacity: 1,
			y: 0,
			scale: 1
		},
		viewport: {
			once: true,
			amount: .2
		},
		transition: {
			duration: .7,
			delay,
			ease: EASE
		},
		children
	});
}
//#endregion
export { StaggerItem as i, ScreenshotReveal as n, StaggerContainer as r, FadeUp as t };
