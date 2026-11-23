import { motion, type Variants } from "framer-motion";
import {
  ShoppingCart, HeartPulse, Building2, GraduationCap, ConciergeBell, Cpu, Factory, TrendingUp,
  Landmark, UtensilsCrossed, Plane, Dumbbell, Sparkles, Car, Rocket, Truck,
  type LucideIcon,
} from "lucide-react";

const industries: { name: string; icon: LucideIcon; blurb: string }[] = [
  { name: "E-commerce", icon: ShoppingCart, blurb: "Stores that sell around the clock" },
  { name: "Healthcare", icon: HeartPulse, blurb: "Trusted, compliant patient journeys" },
  { name: "Real Estate", icon: Building2, blurb: "Listings that fill the pipeline" },
  { name: "Education", icon: GraduationCap, blurb: "Courses and enrolments that grow" },
  { name: "Hospitality", icon: ConciergeBell, blurb: "Bookings, reviews and loyalty" },
  { name: "Technology", icon: Cpu, blurb: "Product-led demand generation" },
  { name: "Manufacturing", icon: Factory, blurb: "B2B lead engines that keep working" },
  { name: "Retail & D2C", icon: TrendingUp, blurb: "Repeat buyers and higher order value" },
  { name: "Finance", icon: Landmark, blurb: "Compliant, high-intent growth" },
  { name: "Food & Beverage", icon: UtensilsCrossed, blurb: "More orders, delivery and footfall" },
  { name: "Travel & Tourism", icon: Plane, blurb: "Turn inspiration into itineraries" },
  { name: "Fitness & Wellness", icon: Dumbbell, blurb: "Memberships that keep renewing" },
  { name: "Beauty & Cosmetics", icon: Sparkles, blurb: "Scroll-stopping brand demand" },
  { name: "Automotive", icon: Car, blurb: "Test drives and showroom visits" },
  { name: "SaaS & Startups", icon: Rocket, blurb: "Trials that turn into revenue" },
  { name: "Logistics", icon: Truck, blurb: "Visibility that wins contracts" },
];

const ease = [0.22, 1, 0.36, 1] as const;

const row: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease } },
};

function Card({ name, icon: Icon, blurb, i }: { name: string; icon: LucideIcon; blurb: string; i: number }) {
  return (
    <div className="group relative w-[210px] shrink-0 sm:w-[236px]">
      <div className="relative flex h-full flex-col items-start gap-3 overflow-hidden rounded-2xl border border-border bg-card/60 p-4 backdrop-blur transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-primary/60 group-hover:shadow-[var(--glow)]">
        <span aria-hidden className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-primary/25 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
        <span aria-hidden className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-lime/0 blur-2xl transition-all duration-500 group-hover:bg-lime/25" />

        <motion.span
          animate={{ opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 3.4 + (i % 4) * 0.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.22 }}
          className="relative inline-flex rounded-xl bg-accent p-2.5 text-accent-foreground transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110"
        >
          <Icon className="h-5 w-5" strokeWidth={2} />
        </motion.span>

        <span className="relative">
          <span className="block text-sm font-semibold leading-snug text-foreground">{name}</span>
          <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">{blurb}</span>
        </span>

        <span aria-hidden className="mt-auto h-px w-0 self-stretch bg-gradient-to-r from-primary to-transparent transition-all duration-500 group-hover:w-full" />
      </div>
    </div>
  );
}

export function Industries() {
  const loop = [...industries, ...industries];

  return (
    <section className="relative overflow-hidden border-y border-border px-6 py-24">
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-lime/10 blur-[110px]" />
      <div aria-hidden className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-lime/5 blur-[110px]" />

      {/* animated grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in oklab, var(--foreground) 7%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--foreground) 7%, transparent) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 90% 80% at 50% 50%, black 30%, transparent 78%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 50% 50%, black 30%, transparent 78%)",
        }}
      />
      <motion.div
        aria-hidden
        initial={{ y: "-30%" }}
        animate={{ y: "130%" }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-transparent via-lime/8 to-transparent blur-2xl"
      />

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

      {/* single animated line covering every industry */}
      <motion.div
        variants={row}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="group relative mt-14 w-full"
      >
        <div className="w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_16%,black_84%,transparent)]">
          <div className="flex w-max gap-4 [animation:marquee_52s_linear_infinite] hover:[animation-play-state:paused]">
            {loop.map((item, i) => (
              <Card key={`${item.name}-${i}`} {...item} i={i % industries.length} />
            ))}
          </div>
        </div>

        {/* rail line under the cards */}
        <div aria-hidden className="pointer-events-none absolute inset-x-0 -bottom-6 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <motion.div
          aria-hidden
          initial={{ x: "-20%" }}
          animate={{ x: "120%" }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none absolute -bottom-6 h-px w-1/4 bg-gradient-to-r from-transparent via-primary to-transparent"
        />
      </motion.div>
    </section>
  );
}
