import { motion } from "framer-motion";
import { Search, Megaphone, Target, Palette, Code2, PenTool } from "lucide-react";
import { Reveal } from "./motion";

export const services = [
  { icon: Search, t: "SEO Optimization", d: "Rank on page one with technical SEO, content and authority building." },
  { icon: Megaphone, t: "Social Media", d: "Scroll-stopping content and community growth across every platform." },
  { icon: Target, t: "Paid Ads", d: "Google, Meta & TikTok campaigns tuned for maximum ROAS." },
  { icon: Palette, t: "Branding", d: "Identities, logos and visual systems that people remember." },
  { icon: Code2, t: "Web Development", d: "Fast, animated, conversion-focused websites and stores." },
  { icon: PenTool, t: "Content Creation", d: "Video, copy and design that tells your story and sells." },
];

export function FinalCta() {
  return (
    <section className="px-6 py-24">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-primary px-8 py-20 text-center text-primary-foreground">
          <motion.div aria-hidden animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute -left-32 -top-32 h-96 w-96 rounded-full border-[40px] border-primary-foreground/10" />
          <h2 className="relative text-4xl font-bold md:text-6xl">Ready to grow your brand?</h2>
          <p className="relative mx-auto mt-4 max-w-lg opacity-80">Get a free audit and a custom growth plan in 48 hours.</p>
          <a href="/contact" className="relative mt-8 inline-block rounded-full bg-background px-8 py-4 font-semibold text-foreground transition-transform hover:scale-105">Let's Talk →</a>
        </div>
      </Reveal>
    </section>
  );
}

