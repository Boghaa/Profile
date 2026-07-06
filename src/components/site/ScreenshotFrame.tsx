import { ScreenshotReveal } from "@/components/motion/Motion";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  className?: string;
};

export function ScreenshotFrame({ src, alt, caption, priority, className }: Props) {
  return (
    <ScreenshotReveal className={className}>
      <figure>
        <div className="rounded-xl border rule overflow-hidden bg-[color:var(--paper-2)] shadow-[0_20px_60px_-25px_rgba(20,24,40,0.25)]">
          <div className="flex items-center gap-1.5 border-b rule bg-[color:var(--paper)] px-3 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--rule)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--rule)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--rule)]" />
            <span className="ms-3 label-mono truncate">{alt}</span>
          </div>
          <img
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className="block w-full h-auto"
          />
        </div>
        {caption && <figcaption className="mt-3 label-mono">{caption}</figcaption>}
      </figure>
    </ScreenshotReveal>
  );
}