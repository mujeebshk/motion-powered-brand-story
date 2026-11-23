import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import { PageHeader, Reveal, Tilt } from "@/components/motion";
import { FinalCta } from "@/components/sections";
import { posts } from "@/components/blog-posts";

const desc = "Growth guides, social media marketing tips and digital strategy insights from the Tech Marketics team.";
export const Route = createFileRoute("/blog/")({
  head: () => ({ meta: [ { title: "Blog — Tech Marketics" }, { name: "description", content: desc }, { property: "og:title", content: "Blog — Tech Marketics" }, { property: "og:description", content: desc }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" } ] }),
  component: BlogIndex,
});

const topics = ["Social Media Marketing", "SEO", "Paid Ads", "Branding", "Web Development", "Content"];

function BlogIndex() {
  const [featured] = posts;
  return (<>
    <PageHeader eyebrow="Blog" title="Ideas that grow brands." sub="Practical guides, playbooks and insights from the team behind hundreds of growth campaigns." />
    <Reveal className="mx-auto flex max-w-6xl flex-wrap justify-center gap-3 px-6">
      {topics.map((t, i) => (
        <motion.span key={t} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + i * 0.06 }}
          className={`rounded-full px-4 py-2 text-sm ${i === 0 ? "bg-primary text-primary-foreground" : "glass text-muted-foreground"}`}>{t}</motion.span>
      ))}
    </Reveal>
    {featured && (
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <Tilt className="group">
            <Link to="/blog/$slug" params={{ slug: featured.slug }} className="relative grid overflow-hidden rounded-[2rem] glass transition-colors hover:border-primary/50 md:grid-cols-2">
              <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto">
                <img src={featured.cover} alt={featured.coverAlt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute left-5 top-5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">Featured</span>
              </div>
              <div className="relative flex flex-col justify-center p-8 md:p-12">
                <div aria-hidden className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-lime/0 blur-3xl transition-all duration-700 group-hover:bg-lime/25" />
                <p className="text-sm uppercase tracking-[0.25em] text-primary">{featured.category}</p>
                <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">{featured.title}</h2>
                <p className="mt-4 text-muted-foreground">{featured.excerpt}</p>
                <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" />{featured.date}</span>
                  <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-primary" />{featured.readTime}</span>
                </div>
                <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-shadow group-hover:glow">
                  Read article <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </span>
              </div>
            </Link>
          </Tilt>
        </Reveal>
      </section>
    )}
    <FinalCta />
  </>);
}
