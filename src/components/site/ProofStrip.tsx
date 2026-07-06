import { useI18n } from "@/i18n/I18nProvider";
import { StaggerContainer, StaggerItem } from "@/components/motion/Motion";

export function ProofStrip() {
  const { t } = useI18n();
  return (
    <section className="border-b rule bg-[color:var(--paper-2)]">
      <StaggerContainer
        className="container-x py-6 grid grid-cols-2 md:grid-cols-5 gap-4"
        stagger={0.05}
      >
        {t.proof.map((item) => (
          <StaggerItem
            key={item}
            className="label-mono !text-foreground/80 text-center md:text-start"
          >
            {item}
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}