import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHeader, Reveal } from "@/components/motion";
export const Route = createFileRoute("/pricing")({
  head: () => ({ meta: [ { title: "Pricing — Tech Marketics" }, { name: "description", content: "Simple, transparent digital marketing plans for startups, growing brands and enterprises." }, { property: "og:title", content: "Pricing — Tech Marketics" }, { property: "og:description", content: "Simple, transparent digital marketing plans for startups, growing brands and enterprises." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" } ] }),
  component: Page,
});
const plans = [
  { n: "Starter", p: "$499", d: "For new brands getting started.", f: ["Social media (2 platforms)", "Basic SEO setup", "Monthly report", "Email support"] },
  { n: "Growth", p: "$1,299", d: "For brands ready to scale fast.", f: ["Social media (4 platforms)", "Full SEO + content", "Paid ads management", "Weekly reports", "Dedicated manager"], hot: true },
  { n: "Enterprise", p: "Custom", d: "For large teams and big goals.", f: ["Everything in Growth", "Custom website build", "Multi-market campaigns", "24/7 priority support"] },
];
function Page() {
  return (<>
    <PageHeader eyebrow="Pricing" title="Simple plans. Serious growth." sub="No hidden fees. Cancel anytime. Every plan starts with a free audit." />
    <section className="mx-auto grid max-w-6xl items-stretch gap-6 px-6 md:grid-cols-3">
      {plans.map((pl, i) => (
        <Reveal key={pl.n} delay={i * 0.12}>
          <div className={`relative flex h-full flex-col rounded-3xl p-8 transition-transform hover:-translate-y-2 ${pl.hot ? "border border-primary bg-card glow" : "glass"}`}>
            {pl.hot && <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">Most popular</span>}
            <h3 className="text-xl font-semibold">{pl.n}</h3><p className="mt-2 text-sm text-muted-foreground">{pl.d}</p>
            <p className="mt-6 font-display text-5xl font-bold">{pl.p}<span className="text-base font-normal text-muted-foreground">{pl.p !== "Custom" && "/mo"}</span></p>
            <ul className="mt-8 flex-1 space-y-3">{pl.f.map((x) => <li key={x} className="flex gap-3 text-sm"><Check className="h-5 w-5 text-primary" />{x}</li>)}</ul>
            <Link to="/contact" className={`mt-8 rounded-full py-3 text-center font-semibold transition-opacity hover:opacity-90 ${pl.hot ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>Get started</Link>
          </div>
        </Reveal>))}
    </section></>);
}
