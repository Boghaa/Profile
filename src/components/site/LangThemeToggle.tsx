import { Moon, Sun } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { useTheme } from "@/lib/theme";

export function LangToggle({ className }: { className?: string }) {
  const { lang, toggle, t } = useI18n();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={lang === "en" ? "Switch to Arabic" : "Switch to English"}
      className={
        "font-mono text-[11px] tracking-widest uppercase rounded-full border border-foreground/20 px-3 py-1.5 hover:border-foreground transition-colors " +
        (className ?? "")
      }
    >
      {t.common.langLabelShort}
    </button>
  );
}

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggle } = useTheme();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className={
        "inline-flex items-center justify-center h-8 w-8 rounded-full border border-foreground/20 hover:border-foreground transition-colors " +
        (className ?? "")
      }
    >
      {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
    </button>
  );
}