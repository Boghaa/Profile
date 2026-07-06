import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as useI18n } from "./theme-CfYm4Gxm.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SiteLayout } from "./SiteLayout-CJCt5DJo.mjs";
import { n as motion, t as useReducedMotion } from "../_libs/framer-motion.mjs";
import { i as StaggerItem, r as StaggerContainer, t as FadeUp } from "./Motion-CdRtcX4l.mjs";
import { t as SectionHeader } from "./SectionHeader-78QZADMl.mjs";
import { n as capabilityGroups, r as experience, t as capabilities } from "./capabilities-BUilAakm.mjs";
import { t as ArchitectureDiagram } from "./ArchitectureDiagram-BLdms8so.mjs";
import { n as projects, t as additionalSystems } from "./projects-Ofb4XAHS.mjs";
import { t as ProjectCard } from "./ProjectCard-CTFFLAgv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BaSUUKLU.js
var import_jsx_runtime = require_jsx_runtime();
var EASE = [
	.22,
	1,
	.36,
	1
];
function Hero() {
	const { t } = useI18n();
	const reduce = useReducedMotion();
	const seq = (i) => reduce ? { initial: false } : {
		initial: {
			opacity: 0,
			y: 18
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: .55,
			delay: .05 + i * .09,
			ease: EASE
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative border-b rule",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x pt-16 md:pt-24 pb-16 md:pb-24 grid gap-12 md:grid-cols-12 items-end",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						className: "label-mono",
						...seq(0),
						children: t.hero.eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
						className: "mt-6 text-4xl md:text-7xl font-semibold tracking-tight leading-[0.98]",
						...seq(1),
						children: t.hero.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						className: "mt-6 md:mt-8 text-base md:text-xl text-muted-foreground max-w-2xl leading-relaxed",
						...seq(2),
						children: t.hero.body
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						className: "mt-6 inline-flex items-center gap-2",
						...seq(3),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[color:var(--cobalt)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "label-mono !text-foreground/70",
							children: t.hero.availability
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						className: "mt-8 flex flex-wrap gap-3",
						...seq(4),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/work",
							className: "rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:opacity-90 transition",
							children: [t.hero.ctaWork, " →"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/architecture",
							className: "rounded-full border border-foreground/25 px-5 py-3 text-sm font-medium hover:border-foreground transition",
							children: t.hero.ctaArch
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "md:col-span-5",
				...seq(5),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-3 rounded-2xl border rule pointer-events-none" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative rounded-xl overflow-hidden border rule",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/profile/portrait.jpg",
								alt: "Portrait of Mostafa Ghazalah",
								className: "w-full h-[380px] md:h-[520px] object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "label-mono !text-white/70",
									children: t.hero.portraitCaption
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -bottom-4 -left-4 hidden md:block rtl:left-auto rtl:-right-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-[10px] tracking-widest uppercase text-muted-foreground bg-[color:var(--paper)] border rule rounded px-2 py-1",
								children: "python · api · postgres · nginx · linux"
							})
						})
					]
				})
			})]
		})
	});
}
function ProofStrip() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b rule bg-[color:var(--paper-2)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerContainer, {
			className: "container-x py-6 grid grid-cols-2 md:grid-cols-5 gap-4",
			stagger: .05,
			children: t.proof.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerItem, {
				className: "label-mono !text-foreground/80 text-center md:text-start",
				children: item
			}, item))
		})
	});
}
function ProcessFlow() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerContainer, {
		className: "grid gap-4 md:grid-cols-7",
		stagger: .06,
		children: t.process.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StaggerItem, {
			className: "rounded-lg border rule p-5 bg-[color:var(--paper)] transition-colors hover:border-foreground/40",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "label-mono",
					children: String(i + 1).padStart(2, "0")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 font-semibold tracking-tight text-sm",
					children: s.t
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs text-muted-foreground leading-relaxed",
					children: s.d
				})
			]
		}, i))
	});
}
function Index() {
	const { t } = useI18n();
	const featured = projects.slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProofStrip, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-24 md:py-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: t.home.capabilitiesEyebrow,
				title: t.home.capabilitiesTitle,
				description: t.home.capabilitiesBody
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerContainer, {
				className: "mt-12 grid gap-6 md:grid-cols-2",
				children: capabilities.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StaggerItem, {
					className: "rounded-xl border rule bg-[color:var(--paper-2)] p-6 md:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "label-mono",
								children: c.number
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "label-mono",
								children: t.home.capabilityBadge
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-2xl font-semibold tracking-tight",
							children: c.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground leading-relaxed",
							children: c.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex flex-wrap gap-2",
							children: c.themes.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs rounded-full border rule px-2.5 py-1 text-foreground/80",
								children: t
							}, t))
						})
					]
				}, c.number))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t rule",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x py-24 md:py-32",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-6 flex-wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
						eyebrow: t.home.featuredEyebrow,
						title: t.home.featuredTitle,
						description: t.home.featuredBody
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/work",
						className: "text-sm underline underline-offset-4 hover:text-foreground text-muted-foreground",
						children: t.home.allProjects
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerContainer, {
					className: "mt-10 grid gap-6 md:grid-cols-2",
					children: featured.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, { p }) }, p.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t rule bg-[color:var(--paper-2)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x py-24 md:py-32 grid gap-12 md:grid-cols-12 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
						eyebrow: t.home.archEyebrow,
						title: t.home.archTitle,
						description: t.home.archBody
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/architecture",
						className: "inline-flex mt-8 rounded-full border border-foreground/25 px-4 py-2 text-sm hover:border-foreground transition",
						children: t.home.archLink
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchitectureDiagram, { diagram: {
						title: t.diagram.tokenBoundTitle,
						layers: [
							["Frontend / Mobile"],
							["Nginx"],
							["Public API Instance"],
							["JWT Authentication"],
							["Trusted Tenant DB Resolution"],
							["Token-Bound Odoo Environment"],
							[
								"Tenant A",
								"Tenant B",
								"Tenant C"
							]
						]
					} })
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-24 md:py-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: t.home.processEyebrow,
				title: t.home.processTitle,
				description: t.home.processBody
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessFlow, {})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t rule bg-[color:var(--paper-2)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x py-24 md:py-32",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: t.home.additionalEyebrow,
					title: t.home.additionalTitle,
					description: t.home.additionalBody
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerContainer, {
					className: "mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4",
					children: additionalSystems.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StaggerItem, {
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
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-24 md:py-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: t.home.expEyebrow,
				title: t.home.expTitle
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerContainer, {
				className: "mt-12 divide-y rule border-y rule",
				children: experience.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StaggerItem, {
					as: "div",
					className: "py-6 grid gap-4 md:grid-cols-12 items-start",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "md:col-span-3 label-mono",
							children: r.period
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-lg font-semibold tracking-tight",
								children: r.company
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm text-muted-foreground",
								children: r.title
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "md:col-span-5 flex flex-wrap gap-1.5",
							children: r.themes.slice(0, 6).map((th) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] rounded-full border rule px-2 py-0.5 text-foreground/70",
								children: th
							}, th))
						})
					]
				}, r.company))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t rule bg-[color:var(--paper-2)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x py-24 md:py-32",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: t.home.techEyebrow,
					title: t.home.techTitle
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeUp, {
					className: "mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-5",
					children: capabilityGroups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "label-mono",
						children: g.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-1.5 text-sm",
						children: g.items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "text-foreground/85",
							children: i
						}, i))
					})] }, g.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-24 md:py-32 grid gap-10 md:grid-cols-12 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:col-span-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/profile/portrait.jpg",
					alt: "Mostafa Ghazalah",
					loading: "lazy",
					className: "w-full h-[420px] object-cover rounded-xl border rule"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: t.home.aboutEyebrow,
					title: t.home.aboutTitle,
					description: t.home.aboutBody
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/about",
					className: "inline-flex mt-8 rounded-full border border-foreground/25 px-4 py-2 text-sm hover:border-foreground transition",
					children: t.home.aboutLink
				})]
			})]
		})
	] });
}
//#endregion
export { Index as component };
