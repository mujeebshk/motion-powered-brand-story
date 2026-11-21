import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHeader, Reveal, Tilt } from "@/components/motion";
import { services, FinalCta } from "@/components/sections";
export const Route = createFileRoute("/services")({
  head: () => ({ meta: [ { title: "Services — Tech Marketics" }, { name: "description", content: "SEO, social media, paid ads, branding, web development and content by Tech Marketics." }, { property: "og:title", content: "Services — Tech Marketics" }, { property: "og:description", content: "SEO, social media, paid ads, branding, web development and content by Tech Marketics." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" } ] }),
  component: Page,
});
function Page() {
  return (<>
    <PageHeader eyebrow="Services" title="Growth services built for results." sub="Pick one or combine them all — every service is designed to drive measurable growth." />
    <section className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2">
      {services.map((s, i) => (
        <Reveal key={s.t} delay={(i % 2) * 0.1}><Tilt className="group h-full"><div className="h-full rounded-3xl glass p-10 transition-colors hover:border-primary/50">
          <div className="flex items-center justify-between"><div className="rounded-2xl bg-accent p-4 text-accent-foreground transition-transform group-hover:rotate-12"><s.icon className="h-7 w-7" /></div><span className="font-display text-5xl font-bold text-foreground/10">0{i + 1}</span></div>
          <h3 className="mt-8 text-2xl font-semibold">{s.t}</h3><p className="mt-3 text-muted-foreground">{s.d}</p>
          <ul className="mt-6 space-y-2 text-sm">{["Strategy & audit", "Execution & optimisation", "Weekly reporting"].map((x) => <li key={x} className="flex gap-2"><Check className="h-4 w-4 text-primary" />{x}</li>)}</ul>
        </div></Tilt></Reveal>))}
    </section><FinalCta /></>);
}
