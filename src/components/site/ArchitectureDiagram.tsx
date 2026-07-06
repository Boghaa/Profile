import { motion, useReducedMotion } from "framer-motion";
import type { ArchitectureDiagram as Diagram } from "@/data/projects";
import { useI18n } from "@/i18n/I18nProvider";

export function ArchitectureDiagram({ diagram }: { diagram: Diagram }) {
  const { t } = useI18n();
  const reduce = useReducedMotion();
  const tr = (label: string) => t.diagram.layers[label] ?? label;
  return (
    <div className="rounded-xl border rule bg-[color:var(--paper-2)] p-6 md:p-10">
      {diagram.title && (
        <div className="label-mono mb-6">{diagram.title}</div>
      )}
      <motion.div
        className="flex flex-col items-stretch gap-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: reduce ? 0 : 0.12 } } }}
      >
        {diagram.layers.map((row, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center"
            variants={
              reduce
                ? { hidden: {}, show: {} }
                : {
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
                  }
            }
          >
            <div
              className="grid gap-3 w-full"
              style={{ gridTemplateColumns: `repeat(${row.length}, minmax(0, 1fr))` }}
            >
              {row.map((node) => (
                <div
                  key={node}
                  className="rounded-md border rule bg-[color:var(--paper)] px-4 py-3 text-center text-sm font-medium text-foreground transition-colors hover:border-[color:var(--cobalt)]"
                >
                  {tr(node)}
                </div>
              ))}
            </div>
            {i < diagram.layers.length - 1 && (
              <motion.div
                aria-hidden
                className="my-1 w-px bg-[color:var(--cobalt)]/60 origin-top"
                initial={reduce ? false : { scaleY: 0, height: 24 }}
                whileInView={reduce ? undefined : { scaleY: 1, height: 24 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ height: 24 }}
              />
            )}
          </motion.div>
        ))}
      </motion.div>
      {diagram.caption && (
        <div className="label-mono mt-6">{diagram.caption}</div>
      )}
    </div>
  );
}