import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { TrendingUp, Star, ChevronRight } from "lucide-react";
import { Reveal, WordReveal, Counter, Tilt, Magnetic } from "@/components/motion";
import { services, FinalCta } from "@/components/sections";
import { Ecosystem } from "@/components/ecosystem";
import { places } from "@/components/global-reach";
import { Globe } from "@/components/globe";
import { HeroStatPills, HeroCountryBar } from "@/components/hero-reach";
import { Industries } from "@/components/industries";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tech Marketics — Grow Faster, Rank Higher, Sell More" },
      { name: "description", content: "Animated, data-driven digital marketing and web development agency for ambitious brands." },
      { property: "og:title", content: "Tech Marketics — Grow Faster, Rank Higher, Sell More" },
      { property: "og:description", content: "Animated, data-driven digital marketing and web development agency for ambitious brands." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-14 pt-28 md:pt-32 lg:min-h-[calc(100vh-1rem)] lg:flex lg:flex-col lg:justify-center">
      <div aria-hidden className="pointer-events-none absolute -left-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-lime/20 blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute -right-24 top-16 h-96 w-96 rounded-full bg-lime/15 blur-[130px]" />
      <div aria-hidden className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-lime/15 blur-[130px]" />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-6">
          <div className="relative z-10 text-left">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold uppercase tracking-[0.26em] text-primary md:text-sm"
            >
              Global Reach
            </motion.p>
            <h1 className="mt-4 text-5xl font-bold leading-[1.04] tracking-tight sm:text-6xl lg:text-[4.25rem]">
              <WordReveal text="Growing brands" /><br />
              <WordReveal text="all over" />
              <WordReveal text="the world." className="text-primary" />
            </h1>
            <Reveal delay={0.45}>
              <p className="mt-6 max-w-lg text-base text-muted-foreground md:text-lg">
                Campaigns, websites and rankings that work across every continent and time zone – wherever your customers are.
              </p>
            </Reveal>
            <Reveal delay={0.6} className="mt-8 flex flex-wrap items-center gap-4">
              <Magnetic>
                <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-shadow hover:glow md:text-base">
                  Book a Free Strategy Call <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Magnetic>
              <Magnetic>
                <Link to="/work" className="group inline-flex items-center gap-2 rounded-full border border-foreground/40 bg-background/30 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur-md transition-colors hover:border-primary hover:text-primary md:text-base">
                  See Our Work <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Magnetic>
            </Reveal>
            <HeroStatPills />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto aspect-square w-full max-w-[460px] lg:max-w-[520px]"
          >
            <div aria-hidden className="pointer-events-none absolute inset-[10%] rounded-full bg-lime/25 blur-[95px]" />
            <Globe places={places} className="relative" />
          </motion.div>
        </div>

        <HeroCountryBar />
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-32">
      <Reveal><p className="text-sm uppercase tracking-[0.3em] text-primary">What we do</p></Reveal>
      <Reveal delay={0.1}><h2 className="mt-4 max-w-2xl text-4xl font-bold md:text-6xl">Everything your brand needs to <span className="text-gradient">dominate online.</span></h2></Reveal>
      <div className="mt-16 grid gap-5 md:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.t} delay={i * 0.08}>
            <Tilt className="group h-full">
              <div className="relative h-full overflow-hidden rounded-3xl glass p-8 transition-colors hover:border-primary/50">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-lime/0 blur-2xl transition-all duration-500 group-hover:bg-lime/30" />
                <div className="mb-6 inline-flex rounded-2xl bg-accent p-3 text-accent-foreground transition-transform group-hover:-rotate-12 group-hover:scale-110"><s.icon /></div>
                <h3 className="text-xl font-semibold">{s.t}</h3>
                <p className="mt-3 text-muted-foreground">{s.d}</p>
              </div>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-4">
      {[[150, "+", "Happy clients"], [320, "%", "Avg. traffic growth"], [12, "M+", "Ad spend managed"], [98, "%", "Client retention"]].map(([n, s, l]) => (
        <Reveal key={l as string} className="text-center">
          <p className="font-display text-6xl font-bold text-primary"><Counter to={n as number} suffix={s as string} /></p>
          <p className="mt-2 text-muted-foreground">{l}</p>
        </Reveal>
      ))}
    </section>
  );
}

function Feature() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-32 md:grid-cols-2">
      <Reveal>
        <p className="text-sm uppercase tracking-[0.3em] text-primary">Data-driven</p>
        <h2 className="mt-4 text-4xl font-bold md:text-5xl">See the bigger picture of your growth.</h2>
        <p className="mt-6 text-muted-foreground">Every campaign is tracked in real time. You get clear reports, honest numbers and a team that optimises daily.</p>
        <ul className="mt-8 space-y-3">
          {["Real-time campaign tracking", "Monthly growth strategy sessions", "Dedicated account manager"].map((x) => (
            <li key={x} className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-primary glow" />{x}</li>
          ))}
        </ul>
      </Reveal>
      <Reveal delay={0.2}>
        <motion.div animate={{ y: [0, -16, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="relative">
          <div className="absolute inset-10 rounded-full bg-lime/20 blur-[80px]" />
          <div className="relative rounded-3xl glass bg-card/70 p-8">
            <div className="flex items-center gap-3"><TrendingUp className="text-primary" /><p className="font-semibold">Conversion rate</p></div>
            <p className="mt-4 font-display text-6xl font-bold">8.7%</p>
            <svg viewBox="0 0 300 100" className="mt-6 w-full">
              <motion.path d="M0 90 C 40 80, 60 60, 100 65 S 160 30, 200 40 S 260 10, 300 5" fill="none" stroke="var(--lime)" strokeWidth="3" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2 }} />
            </svg>
          </div>
        </motion.div>
      </Reveal>
    </section>
  );
}

function Process() {
  const steps = [["Discover", "We audit your brand, market and competitors."], ["Strategize", "A custom growth roadmap built on data."], ["Launch", "Campaigns and websites go live, fast."], ["Scale", "We optimise and scale what works."]];
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <Reveal><h2 className="text-center text-4xl font-bold md:text-6xl">How we <span className="text-gradient">work</span></h2></Reveal>
      <div className="relative mt-16 grid gap-6 md:grid-cols-4">
        {steps.map(([t, d], i) => (
          <Reveal key={t} delay={i * 0.15}>
            <div className="rounded-3xl glass p-6">
              <p className="font-display text-5xl font-bold text-primary/30">0{i + 1}</p>
              <h3 className="mt-4 text-xl font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const t = [["Tech Marketics tripled our leads in 4 months. Best decision we made.", "Sara K., Founder, Nexora"], ["Our new website is stunning and converts like crazy.", "Rahul M., CEO, Orbit"], ["Finally an agency that shows real numbers every week.", "Ayesha F., CMO, Pulse"]];
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-5 md:grid-cols-3">
        {t.map(([q, a], i) => (
          <Reveal key={a} delay={i * 0.1}>
            <div className="h-full rounded-3xl glass p-8">
              <div className="flex gap-1 text-primary">{Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}</div>
              <p className="mt-5 text-lg">"{q}"</p>
              <p className="mt-6 text-sm text-muted-foreground">{a}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Home() {
  return (<><Hero /><Industries /><Services /><Ecosystem /><Stats /><Feature /><Process /><Testimonials /><FinalCta /></>);
}
