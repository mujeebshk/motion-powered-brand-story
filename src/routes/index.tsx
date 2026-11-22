import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { TrendingUp, Star } from "lucide-react";
import { Reveal, WordReveal, Counter, Tilt } from "@/components/motion";
import { CtaButton } from "@/components/site";
import { services, FinalCta } from "@/components/sections";
import { Ecosystem } from "@/components/ecosystem";
import { GlobalReach } from "@/components/global-reach";
import { HeroDecor } from "@/components/hero-decor";
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
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 200]);
  const scale = useTransform(scrollY, [0, 600], [1, 1.3]);
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-32 text-center">
      <motion.div style={{ y, scale }} aria-hidden className="absolute left-1/2 top-[55%] h-[900px] w-[900px] -translate-x-1/2">
        <div className="absolute inset-0 rounded-full arc spin-slow" />
        <div className="absolute inset-[18%] rounded-full bg-lime/20 blur-[100px]" />
        <div className="absolute inset-[16%] rounded-full border border-primary/30 bg-background shadow-[inset_0_40px_80px_-20px] shadow-primary/40" />
      </motion.div>
      <HeroDecor />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="relative mb-8 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm">
        <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-semibold text-primary-foreground">New</span>
        AI-powered growth campaigns
      </motion.div>
      <h1 className="relative max-w-5xl text-5xl font-bold leading-[1.05] md:text-8xl">
        <WordReveal text="Grow Faster." /><br />
        <WordReveal text="Rank Higher." className="text-gradient" /><br />
        <WordReveal text="Sell More." />
      </h1>
      <Reveal delay={0.9}><p className="relative mx-auto mt-8 max-w-xl text-lg text-muted-foreground">We blend data, design and technology to turn your brand into a growth machine — from first click to loyal customer.</p></Reveal>
      <Reveal delay={1.1} className="relative mt-10 flex flex-wrap justify-center gap-4">
        <CtaButton>Book a Free Strategy Call</CtaButton>
        <CtaButton to="/work" variant="ghost">See Our Work</CtaButton>
      </Reveal>
      <Reveal delay={1.4} className="relative mt-20 w-full max-w-5xl"><Dashboard /></Reveal>
    </section>
  );
}

function Dashboard() {
  const bars = [40, 65, 45, 80, 60, 95, 75, 100, 85, 70, 90, 110];
  return (
    <div className="rounded-3xl glass bg-card/60 p-6 text-left">
      <div className="mb-6 flex items-center justify-between">
        <p className="font-display text-lg font-semibold">Growth Dashboard</p>
        <span className="rounded-full bg-accent px-3 py-1 text-xs text-accent-foreground">Live</span>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        {[["Traffic", "248K", "+64%"], ["Leads", "3,912", "+128%"], ["ROAS", "6.4x", "+2.1x"], ["Revenue", "$1.2M", "+87%"]].map(([k, v, c]) => (
          <div key={k} className="rounded-2xl bg-secondary/60 p-4">
            <p className="text-xs text-muted-foreground">{k}</p>
            <p className="mt-1 font-display text-2xl font-bold">{v}</p>
            <p className="text-xs text-primary">{c}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex h-32 items-end gap-2">
        {bars.map((b, i) => (
          <motion.div key={i} initial={{ height: 0 }} whileInView={{ height: `${(b / 110) * 100}%` }} viewport={{ once: true }} transition={{ delay: 0.05 * i, duration: 0.8 }} className="flex-1 rounded-t-md bg-gradient-to-t from-primary/20 to-primary" />
        ))}
      </div>
    </div>
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
  return (<><Hero /><Industries /><Services /><Ecosystem /><GlobalReach /><Stats /><Feature /><Process /><Testimonials /><FinalCta /></>);
}
