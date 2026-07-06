import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { nav } from "@/data/navigation";
import { useI18n } from "@/i18n/I18nProvider";
import { LangToggle, ThemeToggle } from "./LangThemeToggle";

export function Nav() {
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const { t } = useI18n();
  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b rule bg-[color:var(--paper)]/85 backdrop-blur transition-colors">
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="text-[15px] font-semibold tracking-tight text-foreground">
            Mostafa Ghazalah
          </span>
          <span className="label-mono hidden sm:inline">{t.nav.role}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors data-[status=active]:text-foreground"
              activeProps={{ "data-status": "active" } as never}
            >
              {t.nav[n.key]}
            </Link>
          ))}
          <a
            href="#contact"
            className="text-sm rounded-full border border-foreground/20 px-3 py-1.5 hover:border-foreground transition-colors"
          >
            {t.nav.contact}
          </a>
          <div className="flex items-center gap-2 ps-2 border-s rule">
            <LangToggle />
            <ThemeToggle />
          </div>
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <LangToggle />
          <ThemeToggle />
          <button
            className="inline-flex items-center gap-2 rounded-md border border-foreground/20 px-3 py-1.5 text-sm"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? t.common.closeMenu : t.common.openMenu}
          >
            {open ? "×" : "≡"}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t rule">
          <div className="container-x py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="text-base text-foreground py-1">
                {t.nav[n.key]}
              </Link>
            ))}
            <a href="#contact" className="text-base text-foreground py-1">
              {t.nav.contact}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}