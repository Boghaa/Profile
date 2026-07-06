import { Link } from "@tanstack/react-router";
import { contact, nav } from "@/data/navigation";
import { useI18n } from "@/i18n/I18nProvider";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t rule mt-24 transition-colors">
      <div className="container-x py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="text-lg font-semibold tracking-tight">{t.footer.title}</div>
          <div className="label-mono mt-1">{t.footer.role}</div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            {t.footer.body}
          </p>
          <div className="label-mono mt-4">{t.footer.location}</div>
        </div>
        <div>
          <div className="label-mono">{t.footer.navigate}</div>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-foreground text-muted-foreground">
                  {t.nav[n.key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="label-mono">{t.footer.contact}</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={contact.emailHref} className="hover:text-foreground text-muted-foreground">
                {contact.email}
              </a>
            </li>
            <li>
              <a href={contact.phoneHref} target="_blank" rel="noopener noreferrer" className="hover:text-foreground text-muted-foreground" dir="ltr">
                {contact.phone}
              </a>
            </li>
            <li>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground text-muted-foreground"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground text-muted-foreground"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-x py-6 border-t rule flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} {t.footer.title}. {t.footer.rights}</div>
        <div className="font-mono">{t.footer.version}</div>
      </div>
    </footer>
  );
}