import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "@/assets/tech-marketics-logo.png.asset.json";
import { Magnetic } from "./motion";

const nav = [
  { to: "/", label: "Home" }, { to: "/services", label: "Services" }, { to: "/work", label: "Work" },
  { to: "/pricing", label: "Pricing" }, { to: "/about", label: "About" }, { to: "/contact", label: "Contact" }, { to: "/blog", label: "Blog" },
] as const;

export function CtaButton({ children, to = "/contact", variant = "solid" }: { children: React.ReactNode; to?: "/contact" | "/work" | "/services" | "/pricing"; variant?: "solid" | "ghost" }) {
  return (
    <Magnetic>
      <Link to={to} className={variant === "solid"
        ? "group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-shadow hover:glow"
        : "group inline-flex items-center gap-2 rounded-full glass px-6 py-3 font-semibold text-foreground transition-colors hover:border-primary"}>
        {children}<ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
      </Link>
    </Magnetic>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const f = () => setScrolled(window.scrollY > 30); f(); window.addEventListener("scroll", f); return () => window.removeEventListener("scroll", f); }, []);
  return (
    <motion.header initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="fixed inset-x-0 top-4 z-50 px-4">
      <div className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-2.5 transition-all ${scrolled ? "glass" : ""}`}>
        <Link to="/" className="shrink-0"><img src={logo.url} alt="Tech Marketics" className="h-10 w-auto scale-[1.6] origin-left" /></Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }} className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-primary" }}>{n.label}</Link>
          ))}
        </nav>
        <div className="hidden md:block"><CtaButton>Book a Call</CtaButton></div>
        <button aria-label="Menu" className="md:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mx-auto mt-2 flex max-w-6xl flex-col rounded-3xl glass bg-background/90 p-4 md:hidden">
            {nav.map((n) => <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="px-3 py-3 text-lg">{n.label}</Link>)}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border px-6 pb-10 pt-20">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo.url} alt="Tech Marketics" className="h-16 w-auto scale-150 origin-left" />
          <p className="mt-6 max-w-sm text-muted-foreground">Digital marketing & web development studio helping brands grow faster with data, design and performance.</p>
        </div>
        <div><h4 className="mb-4 font-semibold">Pages</h4>{nav.map((n) => <Link key={n.to} to={n.to} className="block py-1 text-muted-foreground hover:text-primary">{n.label}</Link>)}</div>
        <div><h4 className="mb-4 font-semibold">Social</h4>{["Instagram", "LinkedIn", "Facebook", "YouTube"].map((s) => <a key={s} href="#" className="block py-1 text-muted-foreground hover:text-primary">{s}</a>)}</div>
      </div>
      <div className="mx-auto mt-16 max-w-6xl overflow-hidden">
        <p className="select-none whitespace-nowrap text-center font-display text-[14vw] font-bold leading-none text-foreground/5">TECH MARKETICS</p>
      </div>
      <p className="mt-6 text-center text-sm text-muted-foreground">© 2026 Tech Marketics™. All rights reserved.</p>
    </footer>
  );
}
