import { j as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as projects } from "./projects-Ofb4XAHS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work._slug-CDCxi-_x.js
var $$splitComponentImporter = () => import("./work._slug-Cez6RVk_.mjs");
var $$splitErrorComponentImporter = () => import("./work._slug-z0_ztwS_.mjs");
var $$splitNotFoundComponentImporter = () => import("./work._slug-DTdCYlLj.mjs");
var Route = createFileRoute("/work/$slug")({
	loader: ({ params }) => {
		const project = projects.find((p) => p.slug === params.slug);
		if (!project) throw notFound();
		return { project };
	},
	head: ({ loaderData }) => {
		const p = loaderData?.project;
		if (!p) return {};
		return { meta: [
			{ title: `${p.title} — Mostafa Ghazalah` },
			{
				name: "description",
				content: p.summary
			},
			{
				property: "og:title",
				content: `${p.title} · Case Study`
			},
			{
				property: "og:description",
				content: p.summary
			},
			...p.cover ? [{
				property: "og:image",
				content: p.cover
			}] : [],
			...p.cover ? [{
				name: "twitter:image",
				content: p.cover
			}] : []
		] };
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
