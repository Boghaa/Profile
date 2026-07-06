import { contact } from "@/data/navigation";
import { useI18n } from "@/i18n/I18nProvider";

export function ContactCTA() {
  const { t } = useI18n();
  return (
    <section id="contact" className="border-t rule bg-[color:var(--ink)] text-[color:var(--paper)] mt-24">
      <div className="container-x py-24 md:py-32">
        <div className="label-mono !text-white/60">{t.contact.eyebrow}</div>
        <h2 className="mt-4 text-3xl md:text-6xl font-semibold tracking-tight leading-[1.02] max-w-4xl">
          {t.contact.title}
        </h2>
        <p className="mt-6 text-base md:text-lg text-white/70 max-w-2xl">{t.contact.body}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={contact.emailHref}
            className="rounded-full bg-[color:var(--paper)] text-[color:var(--ink)] px-5 py-3 text-sm font-medium hover:bg-white/90 transition"
          >
            {t.contact.email} — <span dir="ltr">{contact.email}</span>
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/25 px-5 py-3 text-sm font-medium hover:border-white/60 transition"
          >
            {t.contact.linkedin}
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/25 px-5 py-3 text-sm font-medium hover:border-white/60 transition"
          >
            {t.contact.github}
          </a>
          <a
            href={contact.phoneHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/25 px-5 py-3 text-sm font-medium hover:border-white/60 transition"
            dir="ltr"
          >
            {t.contact.phone} — <span dir="ltr">{contact.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}