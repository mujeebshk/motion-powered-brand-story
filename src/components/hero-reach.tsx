import { motion } from "framer-motion";
import { Layers, Headphones, BarChart3 } from "lucide-react";

const stats = [
  { icon: Layers, title: "Custom-Built", sub: "Solutions" },
  { icon: Headphones, title: "24/7", sub: "Support" },
  { icon: BarChart3, title: "20+", sub: "Industries Covered" },
] as const;

const countries = [
  { code: "IN", name: "India" },
  { code: "US", name: "United States" },
  { code: "GB", name: "United Kingdom" },
  { code: "CA", name: "Canada" },
  { code: "AE", name: "UAE" },
  { code: "AU", name: "Australia" },
] as const;

function Flag({ code }: { code: (typeof countries)[number]["code"] }) {
  const id = `flag-${code}`;
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 rounded-full" aria-hidden>
      <defs><clipPath id={id}><circle cx="12" cy="12" r="12" /></clipPath></defs>
      <g clipPath={`url(#${id})`}>
        {code === "IN" && (
          <>
            <rect width="24" height="8" fill="#FF9933" />
            <rect y="8" width="24" height="8" fill="#FFFFFF" />
            <rect y="16" width="24" height="8" fill="#138808" />
            <circle cx="12" cy="12" r="2.6" fill="none" stroke="#000080" strokeWidth="1" />
          </>
        )}
        {code === "US" && (
          <>
            <rect width="24" height="24" fill="#FFFFFF" />
            {[0, 4, 8, 12, 16, 20].map((y) => <rect key={y} y={y} width="24" height="2.1" fill="#B22234" />)}
            <rect width="12" height="12.5" fill="#3C3B6E" />
            <circle cx="3.5" cy="3.5" r="0.9" fill="#FFF" /><circle cx="7" cy="3.5" r="0.9" fill="#FFF" />
            <circle cx="5.2" cy="6.5" r="0.9" fill="#FFF" /><circle cx="8.8" cy="6.5" r="0.9" fill="#FFF" />
            <circle cx="3.5" cy="9.5" r="0.9" fill="#FFF" /><circle cx="7" cy="9.5" r="0.9" fill="#FFF" />
          </>
        )}
        {code === "GB" && (
          <>
            <rect width="24" height="24" fill="#012169" />
            <path d="M0 0L24 24M24 0L0 24" stroke="#FFF" strokeWidth="4.2" />
            <path d="M0 0L24 24M24 0L0 24" stroke="#C8102E" strokeWidth="2" />
            <path d="M12 0V24M0 12H24" stroke="#FFF" strokeWidth="6" />
            <path d="M12 0V24M0 12H24" stroke="#C8102E" strokeWidth="3.2" />
          </>
        )}
        {code === "CA" && (
          <>
            <rect width="24" height="24" fill="#FFFFFF" />
            <rect width="6.5" height="24" fill="#D80621" />
            <rect x="17.5" width="6.5" height="24" fill="#D80621" />
            <path d="M12 6.5l1.2 2.8 2.3-.7-.9 2.2 1.7 1.1-2.5.8.4 1.6-1.7-.4v2.6h-1v-2.6l-1.7.4.4-1.6-2.5-.8 1.7-1.1-.9-2.2 2.3.7z" fill="#D80621" />
          </>
        )}
        {code === "AE" && (
          <>
            <rect width="24" height="8" fill="#00732F" />
            <rect y="8" width="24" height="8" fill="#FFFFFF" />
            <rect y="16" width="24" height="8" fill="#000000" />
            <rect width="7" height="24" fill="#FF0000" />
          </>
        )}
        {code === "AU" && (
          <>
            <rect width="24" height="24" fill="#012169" />
            <rect width="12" height="11" fill="#012169" />
            <path d="M0 0L12 11M12 0L0 11" stroke="#FFF" strokeWidth="2" />
            <path d="M6 0V11M0 5.5H12" stroke="#FFF" strokeWidth="3" />
            <path d="M6 0V11M0 5.5H12" stroke="#C8102E" strokeWidth="1.5" />
            <circle cx="18" cy="7" r="1.1" fill="#FFF" /><circle cx="16.5" cy="13" r="1.2" fill="#FFF" />
            <circle cx="20" cy="12" r="0.9" fill="#FFF" /><circle cx="18" cy="17.5" r="1.1" fill="#FFF" />
            <circle cx="7" cy="17" r="1.5" fill="#FFF" />
          </>
        )}
      </g>
    </svg>
  );
}

export function HeroStatPills() {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-3.5">
      {stats.map((s, i) => (
        <motion.div
          key={s.title}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 + i * 0.1, duration: 0.5 }}
          whileHover={{ y: -2 }}
          className="flex items-center gap-3 rounded-full glass px-5 py-3 transition-colors hover:border-primary/50"
        >
          <s.icon className="h-5 w-5 shrink-0 text-primary" />
          <div className="text-left leading-tight">
            <p className="font-display text-sm font-bold text-foreground">{s.title}</p>
            <p className="text-xs text-muted-foreground">{s.sub}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function HeroCountryBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.95, duration: 0.6 }}
      className="relative mt-12 flex flex-col gap-4 border-t border-border/60 pt-7 lg:mt-14 lg:flex-row lg:items-center lg:justify-between"
    >
      <p className="shrink-0 font-display text-base font-bold tracking-tight text-foreground md:text-lg">Our Global Reach</p>
      <div className="flex flex-wrap items-center gap-2.5 md:gap-3">
        {countries.map((c, i) => (
          <motion.span
            key={c.code}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.05 + i * 0.06, duration: 0.4 }}
            whileHover={{ y: -2 }}
            className="inline-flex items-center gap-2.5 rounded-full glass px-4 py-2 text-xs font-medium text-foreground/90 transition-colors hover:border-primary/50 md:text-sm"
          >
            <Flag code={c.code} />
            {c.name}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}