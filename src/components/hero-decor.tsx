import { motion } from "framer-motion";
import { TrendingUp, Sparkles, MousePointerClick } from "lucide-react";
import { tools } from "./tools";

const pick = (n: string) => tools.find((t) => t.name === n)!;
const bubbles = [
  { t: pick("Google Ads"), pos: "left-[8%] top-[22%]", size: "h-16 w-16", d: 0 },
  { t: pick("Meta"), pos: "right-[9%] top-[20%]", size: "h-16 w-16", d: 0.6 },
  { t: pick("Instagram"), pos: "left-[4%] top-[52%]", size: "h-12 w-12", d: 1.2 },
  { t: pick("Shopify"), pos: "right-[5%] top-[50%]", size: "h-12 w-12", d: 0.3 },
  { t: pick("YouTube"), pos: "left-[14%] top-[74%]", size: "h-14 w-14", d: 0.9 },
  { t: pick("ChatGPT"), pos: "right-[14%] top-[74%]", size: "h-14 w-14", d: 1.5 },
];

/** Decorative floating logos, stat chips, dot grid and sparkles around the home hero. */
export function HeroDecor() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-dots [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      {Array.from({ length: 14 }).map((_, i) => (
        <motion.span key={i} className="absolute h-1 w-1 rounded-full bg-primary"
          style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 90 + 5}%` }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.6, 0.5] }}
          transition={{ duration: 3 + (i % 4), delay: i * 0.35, repeat: Infinity }} />
      ))}
      <div className="hidden lg:block">
        {bubbles.map(({ t, pos, size, d }) => (
          <motion.div key={t.name} className={`absolute ${pos}`}
            initial={{ opacity: 0, scale: 0.4 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2 + d * 0.5, type: "spring", stiffness: 120 }}>
            <motion.div animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }} transition={{ duration: 5 + d, repeat: Infinity, ease: "easeInOut" }}
              className={`${size} flex items-center justify-center rounded-2xl glass p-3 glow`}>
              <img src={t.logo} alt="" className="h-full w-full object-contain" />
            </motion.div>
          </motion.div>
        ))}
        <motion.div className="absolute left-[16%] top-[38%]" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.6, duration: 0.8 }}>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="flex items-center gap-3 rounded-2xl glass px-4 py-3 text-left">
            <span className="rounded-xl bg-accent p-2 text-accent-foreground"><TrendingUp className="h-4 w-4" /></span>
            <span><span className="block font-display text-lg font-bold">+248%</span><span className="text-xs text-muted-foreground">Organic traffic</span></span>
          </motion.div>
        </motion.div>
        <motion.div className="absolute right-[15%] top-[36%]" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.8, duration: 0.8 }}>
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }} className="flex items-center gap-3 rounded-2xl glass px-4 py-3 text-left">
            <span className="rounded-xl bg-accent p-2 text-accent-foreground"><MousePointerClick className="h-4 w-4" /></span>
            <span><span className="block font-display text-lg font-bold">6.4x ROAS</span><span className="text-xs text-muted-foreground">Paid campaigns</span></span>
          </motion.div>
        </motion.div>
        <motion.div className="absolute left-1/2 top-[13%] -translate-x-1/2" animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }}>
          <Sparkles className="h-5 w-5 text-primary/60" />
        </motion.div>
      </div>
    </div>
  );
}
