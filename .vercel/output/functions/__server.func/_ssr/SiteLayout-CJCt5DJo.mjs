import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as useTheme, r as useI18n } from "./theme-CfYm4Gxm.mjs";
import { g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Moon, t as Sun } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteLayout-CJCt5DJo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var nav = [
	{
		to: "/",
		key: "home"
	},
	{
		to: "/work",
		key: "work"
	},
	{
		to: "/architecture",
		key: "architecture"
	},
	{
		to: "/about",
		key: "about"
	}
];
var contact = {
	email: "deshaagazala@gmail.com",
	emailHref: "mailto:deshaagazala@gmail.com",
	phone: "+20 100 511 5908",
	phoneHref: "https://wa.me/201005115908",
	linkedin: "https://www.linkedin.com/in/mostafa-ghazalah-5772b51b1",
	github: "https://github.com/Boghaa",
	location: "Tanta, Egypt",
	locationAr: "طنطا، مصر"
};
function LangToggle({ className }) {
	const { lang, toggle, t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: toggle,
		"aria-label": lang === "en" ? "Switch to Arabic" : "Switch to English",
		className: "font-mono text-[11px] tracking-widest uppercase rounded-full border border-foreground/20 px-3 py-1.5 hover:border-foreground transition-colors " + (className ?? ""),
		children: t.common.langLabelShort
	});
}
function ThemeToggle({ className }) {
	const { theme, toggle } = useTheme();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: toggle,
		"aria-label": theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
		className: "inline-flex items-center justify-center h-8 w-8 rounded-full border border-foreground/20 hover:border-foreground transition-colors " + (className ?? ""),
		children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { size: 14 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { size: 14 })
	});
}
function Nav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const { location } = useRouterState();
	const { t } = useI18n();
	(0, import_react.useEffect)(() => setOpen(false), [location.pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b rule bg-[color:var(--paper)]/85 backdrop-blur transition-colors",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x flex h-16 items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-baseline gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[15px] font-semibold tracking-tight text-foreground",
						children: "Mostafa Ghazalah"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "label-mono hidden sm:inline",
						children: t.nav.role
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden md:flex items-center gap-7",
					children: [
						nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: n.to,
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors data-[status=active]:text-foreground",
							activeProps: { "data-status": "active" },
							children: t.nav[n.key]
						}, n.to)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							className: "text-sm rounded-full border border-foreground/20 px-3 py-1.5 hover:border-foreground transition-colors",
							children: t.nav.contact
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 ps-2 border-s rule",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangToggle, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:hidden flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangToggle, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "inline-flex items-center gap-2 rounded-md border border-foreground/20 px-3 py-1.5 text-sm",
							onClick: () => setOpen((v) => !v),
							"aria-expanded": open,
							"aria-label": open ? t.common.closeMenu : t.common.openMenu,
							children: open ? "×" : "≡"
						})
					]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "md:hidden border-t rule",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x py-4 flex flex-col gap-3",
				children: [nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: n.to,
					className: "text-base text-foreground py-1",
					children: t.nav[n.key]
				}, n.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#contact",
					className: "text-base text-foreground py-1",
					children: t.nav.contact
				})]
			})
		})]
	});
}
function Footer() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t rule mt-24 transition-colors",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x py-14 grid gap-10 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-lg font-semibold tracking-tight",
						children: t.footer.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "label-mono mt-1",
						children: t.footer.role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted-foreground max-w-sm",
						children: t.footer.body
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "label-mono mt-4",
						children: t.footer.location
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "label-mono",
					children: t.footer.navigate
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2 text-sm",
					children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						className: "hover:text-foreground text-muted-foreground",
						children: t.nav[n.key]
					}) }, n.to))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "label-mono",
					children: t.footer.contact
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: contact.emailHref,
							className: "hover:text-foreground text-muted-foreground",
							children: contact.email
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: contact.phoneHref,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "hover:text-foreground text-muted-foreground",
							dir: "ltr",
							children: contact.phone
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: contact.linkedin,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "hover:text-foreground text-muted-foreground",
							children: "LinkedIn"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: contact.github,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "hover:text-foreground text-muted-foreground",
							children: "GitHub"
						}) })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x py-6 border-t rule flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-xs text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" ",
				t.footer.title,
				". ",
				t.footer.rights
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-mono",
				children: t.footer.version
			})]
		})]
	});
}
function ContactCTA() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "border-t rule bg-[color:var(--ink)] text-[color:var(--paper)] mt-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x py-24 md:py-32",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "label-mono !text-white/60",
					children: t.contact.eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-3xl md:text-6xl font-semibold tracking-tight leading-[1.02] max-w-4xl",
					children: t.contact.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-base md:text-lg text-white/70 max-w-2xl",
					children: t.contact.body
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-wrap gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: contact.emailHref,
							className: "rounded-full bg-[color:var(--paper)] text-[color:var(--ink)] px-5 py-3 text-sm font-medium hover:bg-white/90 transition",
							children: [
								t.contact.email,
								" — ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									dir: "ltr",
									children: contact.email
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: contact.linkedin,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "rounded-full border border-white/25 px-5 py-3 text-sm font-medium hover:border-white/60 transition",
							children: t.contact.linkedin
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: contact.github,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "rounded-full border border-white/25 px-5 py-3 text-sm font-medium hover:border-white/60 transition",
							children: t.contact.github
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: contact.phoneHref,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "rounded-full border border-white/25 px-5 py-3 text-sm font-medium hover:border-white/60 transition",
							dir: "ltr",
							children: [
								t.contact.phone,
								" — ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									dir: "ltr",
									children: contact.phone
								})
							]
						})
					]
				})
			]
		})
	});
}
function SiteLayout({ children, hideContact }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			}),
			!hideContact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCTA, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { SiteLayout as t };
