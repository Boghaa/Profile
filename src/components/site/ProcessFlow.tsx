import { useI18n } from "@/i18n/I18nProvider";
import { StaggerContainer, StaggerItem } from "@/components/motion/Motion";

export function ProcessFlow() {
  const { t } = useI18n();
  return (
    <StaggerContainer className="grid gap-4 md:grid-cols-7" stagger={0.06}>
      {t.process.map((s, i) => (
        <StaggerItem
          key={i}
          className="rounded-lg border rule p-5 bg-[color:var(--paper)] transition-colors hover:border-foreground/40"
        >
          <div className="label-mono">{String(i + 1).padStart(2, "0")}</div>
          <div className="mt-2 font-semibold tracking-tight text-sm">{s.t}</div>
          <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{s.d}</p>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}