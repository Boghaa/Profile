import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { n as ThemeProvider, t as I18nProvider } from "./theme-CfYm4Gxm.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as projects } from "./projects-Ofb4XAHS.mjs";
import { t as Route$7 } from "./work._slug-CDCxi-_x.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CdPwSjhk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BW13QtTu.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Mostafa Ghazalah — Backend Architect & Senior Backend Engineer" },
			{
				name: "description",
				content: "Backend Architect and Senior Backend Engineer building API-first platforms, multi-tenant SaaS, real-time systems, and production infrastructure with Python, Odoo, PostgreSQL, Linux, React and Next.js."
			},
			{
				name: "author",
				content: "Mostafa Ghazalah"
			},
			{
				property: "og:title",
				content: "Mostafa Ghazalah — Backend Architect"
			},
			{
				property: "og:description",
				content: "API-first backend platforms, multi-tenant SaaS, real-time systems, and production infrastructure."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) })
	});
}
var $$splitComponentImporter$4 = () => import("./work-4KK0cFTh.mjs");
var Route$5 = createFileRoute("/work")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var BASE_URL = "";
var Route$4 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
		"/",
		"/work",
		"/architecture",
		"/about",
		...projects.map((p) => `/work/${p.slug}`)
	].map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$3 = () => import("./architecture-D7ogKzYY.mjs");
var Route$3 = createFileRoute("/architecture")({
	head: () => ({ meta: [
		{ title: "Architecture — Mostafa Ghazalah" },
		{
			name: "description",
			content: "Architecture principles, multi-tenant data isolation, real-time systems, integration layers, production infrastructure and security & reliability."
		},
		{
			property: "og:title",
			content: "Architecture Beyond Frameworks"
		},
		{
			property: "og:description",
			content: "Authentication boundaries, tenant-aware data access, domain models, API contracts, transaction lifecycles, integration layers and production infrastructure."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./about-C_BLBm6y.mjs");
var Route$2 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About — Mostafa Ghazalah" },
		{
			name: "description",
			content: "Backend Architect and Senior Backend Engineer. Approximately 16 production systems across ERP, CRM, logistics, tourism, hotel booking, POS, healthcare, HR, WhatsApp automation, real-time chat, meetings and multi-tenant SaaS."
		},
		{
			property: "og:title",
			content: "About — Mostafa Ghazalah"
		},
		{
			property: "og:description",
			content: "Engineering systems around real business operations."
		},
		{
			property: "og:image",
			content: "/profile/portrait.jpg"
		},
		{
			name: "twitter:image",
			content: "/profile/portrait.jpg"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./routes-BaSUUKLU.mjs");
var Route$1 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./work.index-DneKuVSv.mjs");
var Route = createFileRoute("/work/")({
	head: () => ({ meta: [
		{ title: "Work — Mostafa Ghazalah" },
		{
			name: "description",
			content: "Production systems across SaaS, real-time collaboration, tourism, healthcare, HR, logistics, retail, CRM, booking and financial operations."
		},
		{
			property: "og:title",
			content: "Work — Mostafa Ghazalah"
		},
		{
			property: "og:description",
			content: "Case studies and selected production systems in backend architecture and platform engineering."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var WorkRoute = Route$5.update({
	id: "/work",
	path: "/work",
	getParentRoute: () => Route$6
});
var SitemapDotxmlRoute = Route$4.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$6
});
var ArchitectureRoute = Route$3.update({
	id: "/architecture",
	path: "/architecture",
	getParentRoute: () => Route$6
});
var AboutRoute = Route$2.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$6
});
var IndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$6
});
var WorkIndexRoute = Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => WorkRoute
});
var WorkRouteChildren = {
	WorkSlugRoute: Route$7.update({
		id: "/$slug",
		path: "/$slug",
		getParentRoute: () => WorkRoute
	}),
	WorkIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ArchitectureRoute,
	SitemapDotxmlRoute,
	WorkRoute: WorkRoute._addFileChildren(WorkRouteChildren)
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
