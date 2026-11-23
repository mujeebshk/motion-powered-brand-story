import { motion } from "framer-motion";
import { ShoppingCart, HeartPulse, Building2, GraduationCap, ConciergeBell, Cpu, Factory, TrendingUp, type LucideIcon } from "lucide-react";

const industries: { name: string; icon: LucideIcon }[] = [
  { name: "E-commerce", icon: ShoppingCart },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Real Estate", icon: Building2 },
  { name: "Education", icon: GraduationCap },
  { name: "Hospitality", icon: ConciergeBell },
  { name: "Technology", icon: Cpu },
  { name: "Manufacturing", icon: Factory },
  { name: "Retail & D2C", icon: TrendingUp },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Industries() {
  return (
    <section className="relative overflow-hidden border-y border-border px-6 py-24">
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-lime/10 blur-[110px]" />
      <div aria-hidden className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-lime/5 blur-[110px]" />

      <div className="relative mx-auto max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.6em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          className="inline-block rounded-full bg-gradient-to-r from-transparent via-secondary to-transparent px-6 py-1 text-xs font-semibold uppercase md:px-10 md:text-sm text-primary"
        >
          Built for ambitious brands
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
          className="mt-5 text-4xl font-bold leading-tight md:text-6xl"
        >
          Partnering with forward-thinking businesses <span className="text-primary">across industries.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25, ease }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
        >
          From emerging brands to established enterprises, we build digital experiences that drive real business growth.
        </motion.p>
      </div>

      <ul className="relative mx-auto mt-14 flex max-w-7xl flex-wrap justify-center gap-2.5 md:grid md:max-w-4xl md:grid-cols-4 md:gap-3 xl:flex xl:max-w-7xl xl:flex-nowrap xl:gap-2">
        {industries.map(({ name, icon: Icon }, i) => (
          <motion.li
            className="shrink-0"
            key={name}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.35 + i * 0.07, ease }}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
              whileHover={{ scale: 1.06, y: -4 }}
              className="group relative flex cursor-default items-center gap-2 overflow-hidden rounded-full border border-border bg-card/60 px-4 py-2.5 md:gap-2.5 md:justify-center md:px-5 md:py-3 xl:px-3.5 backdrop-blur transition-colors duration-300 hover:border-primary/60 hover:shadow-[var(--glow)]"
            >
              <span aria-hidden className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
              <Icon className="h-4 w-4 text-primary md:h-5 md:w-5 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" strokeWidth={2} />
              <span className="text-sm font-medium text-foreground md:text-base xl:text-[15px]">{name}</span>
            </motion.div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
