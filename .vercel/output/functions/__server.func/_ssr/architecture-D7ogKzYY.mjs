import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as useI18n } from "./theme-CfYm4Gxm.mjs";
import { t as SiteLayout } from "./SiteLayout-CJCt5DJo.mjs";
import { t as FadeUp } from "./Motion-CdRtcX4l.mjs";
import { t as SectionHeader } from "./SectionHeader-78QZADMl.mjs";
import { t as ArchitectureDiagram } from "./ArchitectureDiagram-BLdms8so.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/architecture-D7ogKzYY.js
var import_jsx_runtime = require_jsx_runtime();
var sections = [
	{
		title: "API-First Platform Architecture",
		body: "Every platform I ship starts with a strict API contract. Web, mobile and integrations are all first-class clients of the same versioned surface.",
		diagram: {
			title: "API-first platform",
			layers: [
				["React / Next.js / Mobile"],
				["Nginx"],
				["REST API Layer"],
				["Authentication & Authorization"],
				["Domain Services"],
				["PostgreSQL · Business Models"]
			]
		}
	},
	{
		title: "Multi-Tenant Data Isolation",
		body: "Authentication is not authorization. Authentication identity is not automatically equal to tenant data context. Tenant APIs must operate inside the correct tenant database boundary.",
		diagram: {
			title: "Tenant-aware access",
			layers: [
				["Public API Instance"],
				["JWT"],
				["Tenant Resolution"],
				["Token-Bound Environment"],
				[
					"DB A",
					"DB B",
					"DB C"
				]
			]
		}
	},
	{
		title: "Real-Time Collaboration Architecture",
		body: "The business backend owns users, permissions, metadata, membership and token generation. LiveKit owns audio and video media transport. Separating these responsibilities gives cleaner failure and scaling stories.",
		diagram: {
			title: "Media plane separation",
			layers: [
				["Frontend"],
				["API Platform"],
				["Chat", "Meeting Control"],
				["LiveKit"]
			]
		}
	},
	{
		title: "Integration Layer Architecture",
		body: "External partners are placed behind a stable integration abstraction. New suppliers become adapters, not rewrites of business code.",
		diagram: {
			title: "Supplier integration",
			layers: [
				["Core Platform"],
				["Integration Abstraction Layer"],
				[
					"API A",
					"API B",
					"API C",
					"Future Connector"
				]
			]
		}
	},
	{
		title: "Production Infrastructure",
		body: "Linux, Nginx, PostgreSQL, application services, firewall, Fail2ban, backups, log analysis, deployment and production troubleshooting.",
		diagram: {
			title: "Production path",
			layers: [
				["Users"],
				["Internet"],
				["Nginx"],
				["Application Services"],
				["PostgreSQL"],
				["Backup & Monitoring"]
			]
		}
	}
];
var principles = [
	"Authentication and authorization are separate concerns.",
	"Tenant boundaries must be enforced at the data-access level.",
	"Secrets must not be embedded in source code.",
	"Write operations using independent cursors require explicit transaction management.",
	"Production incidents require root-cause investigation, not only restarting services.",
	"APIs should never expose raw stack traces to end users.",
	"User-facing validation errors should be structured and understandable."
];
function ArchitecturePage() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b rule",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x pt-20 md:pt-28 pb-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: t.architecture.eyebrow,
					title: t.architecture.title,
					description: t.architecture.body
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-x py-16 flex flex-col gap-16",
			children: sections.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FadeUp, {
				as: "section",
				className: "grid gap-8 md:grid-cols-12 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "label-mono",
							children: ["Section ", String(i + 1).padStart(2, "0")]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 text-2xl md:text-3xl font-semibold tracking-tight",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground leading-relaxed",
							children: s.body
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchitectureDiagram, { diagram: s.diagram })
				})]
			}, s.title))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t rule bg-[color:var(--paper-2)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Section 06",
					title: "Security & reliability principles."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 grid gap-4 md:grid-cols-2",
					children: principles.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-lg border rule bg-[color:var(--paper)] p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "label-mono",
							children: ["Principle ", String(i + 1).padStart(2, "0")]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-foreground/90 leading-relaxed",
							children: p
						})]
					}, p))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Incident response",
				title: "Linux incident investigation.",
				description: "A suspicious high-CPU process was discovered on a Linux server. It restarted after termination, indicating persistence. Investigation covered the process tree, parent processes, working directory, binaries, configuration files, cron jobs, systemd units, startup scripts, and the Linux audit framework (auditctl, ausearch)."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 max-w-3xl text-muted-foreground leading-relaxed",
				children: "Engineering lesson: treat recurring unauthorized execution as an incident-response problem involving persistence analysis and root-cause investigation — not only as a process-termination problem."
			})]
		})
	] });
}
//#endregion
export { ArchitecturePage as component };
