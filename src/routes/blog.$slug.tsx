import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Calendar, Clock, Lightbulb, Quote, User } from "lucide-react";
import { Reveal, WordReveal } from "@/components/motion";
import { CtaButton } from "@/components/site";
import { getPost, type Block } from "@/components/blog-posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.post;
    const title = p ? `${p.title} — Tech Marketics Blog` : "Article not found — Tech Marketics";
    const description = p?.excerpt ?? "This article could not be found.";
    return { meta: [ { title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "article" }, ...(p ? [{ property: "og:image", content: p.ogImage }, { name: "twitter:image", content: p.ogImage }] : []), { name: "twitter:card", content: "summary_large_image" }, ...(p ? [] : [{ name: "robots", content: "noindex" }]) ] };
  },
  notFoundComponent: () => (
    <div className="px-6 pb-24 pt-40 text-center">
      <h1 className="text-4xl font-bold">Article not found</h1>
      <Link to="/blog" className="mt-6 inline-block text-primary">← Back to blog</Link>
    </div>
  ),
  component: Article,
});

function BlockView({ b, i }: { b: Block; i: number }) {
  switch (b.type) {
    case "h2":
      return <Reveal><h2 id={b.id} className="scroll-mt-32 pt-8 text-3xl font-bold md:text-4xl"><span className="mr-3 font-display text-primary/40">{String(i).padStart(2, "0")}</span>{b.text}</h2></Reveal>;
    case "p":
      return <Reveal><p className="text-lg leading-relaxed text-muted-foreground">{b.text}</p></Reveal>;
    case "list":
      return (
        <ul className="space-y-3">
          {b.items.map((x, k) => (
            <motion.li key={x} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: k * 0.07 }} className="flex gap-3 text-lg text-muted-foreground">
              <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-primary glow" /><span>{x}</span>
            </motion.li>
          ))}
        </ul>
      );
    case "steps":
      return (
        <div className="grid gap-4 sm:grid-cols-2">
          {b.items.map((s, k) => (
            <motion.div key={s.t} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: k * 0.08 }} whileHover={{ y: -4 }} className="rounded-3xl glass p-6 transition-colors hover:border-primary/50">
              <p className="font-display text-sm text-primary">0{k + 1}</p>
              <h3 className="mt-2 text-xl font-semibold">{s.t}</h3>
              <p className="mt-2 text-muted-foreground">{s.d}</p>
            </motion.div>
          ))}
        </div>
      );
    case "quote":
      return (
        <Reveal>
          <blockquote className="relative overflow-hidden rounded-3xl border border-primary/30 bg-accent/40 p-8 md:p-10">
            <Quote className="absolute -right-2 -top-2 h-24 w-24 text-primary/10" />
            <p className="relative font-display text-2xl font-semibold leading-snug md:text-3xl">"{b.text}"</p>
          </blockquote>
        </Reveal>
      );
    case "stats":
      return (
        <div className="grid gap-4 sm:grid-cols-3">
          {b.items.map((s, k) => (
            <motion.div key={s.l} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: k * 0.1 }} className="rounded-3xl glass p-6 text-center">
              <p className="font-display text-4xl font-bold text-primary">{s.v}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.l}</p>
            </motion.div>
          ))}
        </div>
      );
    case "image":
      return (
        <motion.figure initial={{ opacity: 0, y: 40, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="group">
          <div className="overflow-hidden rounded-3xl border border-border">
            <img src={b.src} alt={b.alt} loading="lazy" className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <figcaption className="mt-3 flex items-center gap-2 text-sm text-muted-foreground"><span className="h-px w-6 bg-primary" />{b.caption}</figcaption>
        </motion.figure>
      );
    case "gallery":
      return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {b.items.map((g, k) => (
            <motion.div key={g.src} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: k * 0.12, duration: 0.7 }} className={`group overflow-hidden rounded-3xl border border-border ${k === 0 ? "col-span-2 md:col-span-1" : ""}`}>
              <img src={g.src} alt={g.alt} loading="lazy" className="aspect-[4/5] h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </motion.div>
          ))}
        </div>
      );
    case "tip":
      return (
        <Reveal>
          <div className="flex gap-4 rounded-3xl border-l-4 border-primary bg-secondary/60 p-6">
            <Lightbulb className="h-6 w-6 shrink-0 text-primary" />
            <p><span className="font-semibold text-primary">Pro tip: </span>{b.text}</p>
          </div>
        </Reveal>
      );
  }
}

function Article() {
  const { post } = Route.useLoaderData();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  const coverRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: coverProg } = useScroll({ target: coverRef, offset: ["start end", "end start"] });
  const coverY = useTransform(coverProg, [0, 1], ["-8%", "8%"]);
  const headings = post.body.filter((b): b is Extract<Block, { type: "h2" }> => b.type === "h2");
  const [active, setActive] = useState(headings[0]?.id ?? "");

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: "-30% 0px -60% 0px" });
    headings.forEach((h) => { const el = document.getElementById(h.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [headings]);

  let h2Count = 0;
  return (<>
    <motion.div aria-hidden style={{ scaleX: progress }} className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-primary glow" />
    <article>
      <header className="relative overflow-hidden px-6 pb-12 pt-40">
        <div aria-hidden className="absolute left-1/2 top-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-lime/10 blur-[120px]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"><ArrowLeft className="h-4 w-4" /> All articles</Link>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 text-sm uppercase tracking-[0.3em] text-primary">{post.category}</motion.p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl"><WordReveal text={post.title} /></h1>
          <Reveal delay={0.6}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2"><User className="h-4 w-4 text-primary" />{post.author}</span>
              <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" />{post.date}</span>
              <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-primary" />{post.readTime}</span>
            </div>
          </Reveal>
        </div>
      </header>

      <Reveal delay={0.3} className="mx-auto max-w-6xl px-6">
        <div ref={coverRef} className="relative aspect-[16/9] overflow-hidden rounded-[2rem] border border-primary/20">
          <motion.img style={{ y: coverY, scale: 1.18 }} src={post.cover} alt={post.coverAlt} className="h-full w-full object-cover" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </div>
      </Reveal>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[240px_1fr]">
        <aside className="hidden lg:block">
          <nav className="sticky top-32 space-y-1">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">On this page</p>
            {headings.map((h) => (
              <a key={h.id} href={`#${h.id}`} className={`block border-l-2 py-1.5 pl-4 text-sm transition-colors ${active === h.id ? "border-primary text-primary" : "border-border text-muted-foreground hover:text-foreground"}`}>{h.text}</a>
            ))}
          </nav>
        </aside>
        <div className="max-w-3xl space-y-6">
          {post.body.map((b, i) => <BlockView key={i} b={b} i={b.type === "h2" ? ++h2Count : 0} />)}
          <div className="flex flex-wrap gap-2 pt-8">
            {post.tags.map((t) => <span key={t} className="rounded-full glass px-4 py-1.5 text-sm text-muted-foreground">#{t}</span>)}
          </div>
          <Reveal>
            <div className="mt-8 flex flex-col items-start gap-6 rounded-3xl glass p-8 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-bold">Want this done for your brand?</h3>
                <p className="mt-2 text-muted-foreground">Get a free social media audit and growth plan in 48 hours.</p>
              </div>
              <CtaButton>Book a Free Call</CtaButton>
            </div>
          </Reveal>
        </div>
      </div>
    </article>
  </>);
}
