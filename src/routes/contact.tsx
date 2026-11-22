import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { PageHeader, Reveal } from "@/components/motion";
import { GlobalReach } from "@/components/global-reach";
export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [ { title: "Contact — Tech Marketics" }, { name: "description", content: "Book a free strategy call with Tech Marketics and get a custom growth plan." }, { property: "og:title", content: "Contact — Tech Marketics" }, { property: "og:description", content: "Book a free strategy call with Tech Marketics and get a custom growth plan." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" } ] }),
  component: Page,
});
const field = "w-full rounded-2xl border border-input bg-secondary/50 px-5 py-4 outline-none transition-colors focus:border-primary";
function Page() {
  const [sent, setSent] = useState(false);
  return (<>
    <PageHeader eyebrow="Contact" title="Let us build something big." sub="Tell us about your brand and goals. We reply within 24 hours." />
    <section className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-5">
      <Reveal className="space-y-4 md:col-span-2">
        {[[Mail, "hello@techmarketics.com"], [Phone, "+91 98765 43210"], [MapPin, "Remote · Worldwide"]].map(([I, t]) => { const Icon = I as typeof Mail; return <div key={t as string} className="flex items-center gap-4 rounded-3xl glass p-6"><div className="rounded-2xl bg-accent p-3 text-accent-foreground"><Icon /></div><span>{t as string}</span></div>; })}
      </Reveal>
      <Reveal delay={0.15} className="md:col-span-3">
        {sent ? (
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex h-full flex-col items-center justify-center rounded-3xl glass p-12 text-center"><CheckCircle2 className="h-16 w-16 text-primary" /><h3 className="mt-4 text-2xl font-semibold">Thanks! We will be in touch soon.</h3></motion.div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4 rounded-3xl glass p-8">
            <div className="grid gap-4 md:grid-cols-2"><input required placeholder="Your name" className={field} /><input required type="email" placeholder="Email" className={field} /></div>
            <select className={field} defaultValue=""><option value="" disabled>Service you need</option><option>SEO</option><option>Social Media</option><option>Paid Ads</option><option>Branding</option><option>Web Development</option></select>
            <textarea required rows={5} placeholder="Tell us about your project" className={field} />
            <button className="w-full rounded-full bg-primary py-4 font-semibold text-primary-foreground transition-shadow hover:glow">Send message</button>
          </form>)}
      </Reveal>
    </section>
    <GlobalReach compact /></>);
}
