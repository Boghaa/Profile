import { FadeUp } from "@/components/motion/Motion";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, description, align = "left" }: Props) {
  return (
    <FadeUp className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      {eyebrow && <div className="label-mono">{eyebrow}</div>}
      <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </FadeUp>
  );
}