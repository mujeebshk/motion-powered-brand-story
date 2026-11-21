import { motion } from "framer-motion";
import googleAds from "@/assets/tools/googleads-logo.svg.asset.json";
import meta from "@/assets/tools/meta-logo.svg.asset.json";
import wordpress from "@/assets/tools/wordpress-logo.svg.asset.json";
import semrush from "@/assets/tools/semrush-logo.svg.asset.json";
import hubspot from "@/assets/tools/hubspot-logo.svg.asset.json";
import ga4 from "@/assets/tools/ga4-logo.svg.asset.json";
import { Reveal, Tilt } from "./motion";

const tools = [
  { name: "Google Ads", tag: "Paid Search", logo: googleAds.url },
  { name: "Meta", tag: "Social Ads", logo: meta.url },
  { name: "WordPress", tag: "Websites", logo: wordpress.url },
  { name: "Semrush", tag: "SEO Research", logo: semrush.url },
  { name: "HubSpot", tag: "CRM & Automation", logo: hubspot.url },
  { name: "Google Analytics 4", tag: "Analytics", logo: ga4.url },
];

export function Ecosystem() {
  return (
    <section className="relative mx-auto max-w-6xl overflow-hidden px-6 py-32">
      <div aria-hidden className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/10 blur-[120px]" />
      <div className="relative text-center">
        <Reveal><p className="text-sm uppercase tracking-[0.3em] text-primary">Our Digital Ecosystem</p></Reveal>
        <Reveal delay={0.1}><h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold md:text-6xl">Powered by <span className="text-gradient">leading technologies.</span></h2></Reveal>
        <Reveal delay={0.2}><p className="mx-auto mt-6 max-w-xl text-muted-foreground">The platforms and tools behind our digital marketing and technology solutions.</p></Reveal>
      </div>
      <div className="relative mt-16 grid grid-cols-2 gap-5 md:grid-cols-3">
        {tools.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08}>
            <Tilt className="group h-full">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, delay: i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                className="relative flex h-full flex-col items-center justify-center gap-5 overflow-hidden rounded-3xl glass px-6 py-10 text-center transition-colors duration-500 hover:border-primary/60"
              >
                <div className="absolute inset-0 bg-lime/0 transition-colors duration-500 group-hover:bg-lime/5" />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-secondary/70 p-4 transition-transform duration-500 group-hover:scale-110 group-hover:glow">
                  <img src={t.logo} alt={`${t.name} logo`} loading="lazy" className="h-full w-full object-contain" />
                </div>
                <div className="relative">
                  <h3 className="text-lg font-semibold md:text-xl">{t.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{t.tag}</p>
                </div>
              </motion.div>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
