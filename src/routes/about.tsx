import { createFileRoute } from "@tanstack/react-router";
import { Zap, Eye, Heart, Rocket } from "lucide-react";
import { PageHeader, Reveal, Counter } from "@/components/motion";
import { FinalCta } from "@/components/sections";
export const Route = createFileRoute("/about")({
  head: () => ({ meta: [ { title: "About — Tech Marketics" }, { name: "description", content: "Meet Tech Marketics, a digital marketing and web development studio obsessed with growth." }, { property: "og:title", content: "About — Tech Marketics" }, { property: "og:description", content: "Meet Tech Marketics, a digital marketing and web development studio obsessed with growth." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" } ] }),
  component: Page,
});
const values = [[Zap, "Speed", "We move fast and launch faster."], [Eye, "Transparency", "Honest numbers, always."], [Heart, "Partnership", "Your growth is our growth."], [Rocket, "Innovation", "AI-first, always testing."]] as const;
function Page() {
  return (<>
    <PageHeader eyebrow="About us" title="A studio obsessed with your growth." sub="Tech Marketics is a team of marketers, designers and developers who build brands that win online." />
    <section className="mx-auto grid max-w-6xl gap-12 px-6 py-12 md:grid-cols-2">
      <Reveal><h2 className="text-4xl font-bold">Our story</h2></Reveal>
      <Reveal delay={0.1}><p className="text-lg text-muted-foreground">We started with one belief: great marketing should be measurable. Today we help startups and established businesses grow with a mix of creativity, data and technology — from the first logo to the millionth visitor.</p></Reveal>
    </section>
    <section className="mx-auto grid max-w-6xl gap-5 px-6 py-12 md:grid-cols-4">
      {values.map(([I, t, d], i) => <Reveal key={t} delay={i * 0.1}><div className="h-full rounded-3xl glass p-6"><I className="text-primary" /><h3 className="mt-4 text-lg font-semibold">{t}</h3><p className="mt-2 text-sm text-muted-foreground">{d}</p></div></Reveal>)}
    </section>
    <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-3">
      {[[5, "+", "Years of experience"], [25, "+", "Team members"], [400, "+", "Projects delivered"]].map(([n, s, l]) => <Reveal key={l as string} className="text-center"><p className="font-display text-6xl font-bold text-primary"><Counter to={n as number} suffix={s as string} /></p><p className="mt-2 text-muted-foreground">{l}</p></Reveal>)}
    </section><FinalCta /></>);
}
