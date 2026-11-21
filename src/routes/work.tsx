import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PageHeader, Reveal } from "@/components/motion";
import { FinalCta } from "@/components/sections";
export const Route = createFileRoute("/work")({
  head: () => ({ meta: [ { title: "Our Work — Tech Marketics" }, { name: "description", content: "Case studies and projects: websites, campaigns and brands Tech Marketics helped grow." }, { property: "og:title", content: "Our Work — Tech Marketics" }, { property: "og:description", content: "Case studies and projects: websites, campaigns and brands Tech Marketics helped grow." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" } ] }),
  component: Page,
});
const work = [["Nexora", "Web Development", "+210% conversions"], ["Orbit", "Paid Ads", "6.8x ROAS"], ["Pulse", "Branding", "Full rebrand"], ["Cloudly", "SEO", "#1 for 40 keywords"], ["Rise", "Social Media", "500K followers"], ["Trace", "E-commerce", "$2M revenue"]];
function Page() {
  return (<>
    <PageHeader eyebrow="Portfolio" title="Work that moves the needle." sub="A few of the brands we have helped grow, launch and scale." />
    <section className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2">
      {work.map(([n, c, r], i) => (
        <Reveal key={n} delay={(i % 2) * 0.15}>
          <motion.a href="#" whileHover="hover" className="group block overflow-hidden rounded-3xl glass">
            <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
              <motion.div variants={{ hover: { scale: 1.1, rotate: 3 } }} transition={{ duration: 0.6 }} className="absolute inset-0 flex items-center justify-center">
                <div className="absolute h-2/3 w-2/3 rounded-full bg-lime/20 blur-3xl" />
                <span className="relative font-display text-7xl font-bold text-gradient">{n}</span>
              </motion.div>
              <motion.div variants={{ hover: { opacity: 1, scale: 1 } }} initial={{ opacity: 0, scale: 0.5 }} className="absolute right-5 top-5 rounded-full bg-primary p-3 text-primary-foreground"><ArrowUpRight /></motion.div>
            </div>
            <div className="flex items-center justify-between p-6"><div><h3 className="text-xl font-semibold">{n}</h3><p className="text-sm text-muted-foreground">{c}</p></div><span className="rounded-full bg-accent px-3 py-1 text-sm text-accent-foreground">{r}</span></div>
          </motion.a>
        </Reveal>))}
    </section><FinalCta /></>);
}
