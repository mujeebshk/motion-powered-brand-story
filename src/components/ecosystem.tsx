import { motion } from "framer-motion";
import { Reveal, Tilt } from "./motion";
import { tools } from "./tools";

function LogoRow({ reverse = false }: { reverse?: boolean }) {
  const list = reverse ? [...tools].reverse() : tools;
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
      <div className={`flex shrink-0 gap-4 pr-4 ${reverse ? "marquee-reverse" : "marquee"}`}>
        {[...list, ...list].map((t, i) => (
          <div key={i} className="flex shrink-0 items-center gap-3 rounded-full glass px-5 py-3">
            <img src={t.logo} alt="" aria-hidden loading="lazy" className="h-6 w-6 object-contain" />
            <span className="whitespace-nowrap text-sm font-medium">{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Ecosystem() {
  return (
    <section className="relative overflow-hidden py-32">
      <div aria-hidden className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/10 blur-[140px]" />
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <Reveal><p className="text-sm uppercase tracking-[0.3em] text-primary">Our Digital Ecosystem</p></Reveal>
        <Reveal delay={0.1}><h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold md:text-6xl">Powered by <span className="text-gradient">leading technologies.</span></h2></Reveal>
        <Reveal delay={0.2}><p className="mx-auto mt-6 max-w-xl text-muted-foreground">The platforms and tools behind our digital marketing and technology solutions.</p></Reveal>
      </div>

      <Reveal delay={0.25} className="relative mt-14 space-y-4">
        <LogoRow />
        <LogoRow reverse />
      </Reveal>

      <div className="relative mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-4 px-6 md:grid-cols-4 md:gap-5">
        {tools.slice(0, 8).map((t, i) => (
          <Reveal key={t.name} delay={(i % 4) * 0.08 + Math.floor(i / 4) * 0.05}>
            <Tilt className="group h-full">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, delay: (i % 5) * 0.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative flex h-full flex-col items-center justify-center gap-4 overflow-hidden rounded-3xl glass px-4 py-8 text-center transition-colors duration-500 hover:border-primary/60"
              >
                <div className="absolute inset-0 bg-lime/0 transition-colors duration-500 group-hover:bg-lime/5" />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/70 p-3.5 transition-transform duration-500 group-hover:scale-110 group-hover:glow md:h-20 md:w-20 md:p-4">
                  <img src={t.logo} alt={`${t.name} logo`} loading="lazy" className="h-full w-full object-contain" />
                </div>
                <div className="relative">
                  <h3 className="text-base font-semibold md:text-lg">{t.name}</h3>
                  <p className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">{t.tag}</p>
                </div>
              </motion.div>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
