import { Globe2 } from "lucide-react";
import { Globe, type GlobePlace } from "./globe";
import { Reveal, Counter } from "./motion";

export const places: GlobePlace[] = [
  { name: "New York", lng: -74.0, lat: 40.71 },
  { name: "London", lng: -0.13, lat: 51.51 },
  { name: "Dubai", lng: 55.27, lat: 25.2 },
  { name: "Singapore", lng: 103.82, lat: 1.35 },
  { name: "Sydney", lng: 151.21, lat: -33.87 },
  { name: "Toronto", lng: -79.38, lat: 43.65 },
  { name: "Berlin", lng: 13.4, lat: 52.52 },
  { name: "Tokyo", lng: 139.69, lat: 35.69 },
  { name: "Riyadh", lng: 46.68, lat: 24.71 },
  { name: "Cape Town", lng: 18.42, lat: -33.92 },
  { name: "São Paulo", lng: -46.63, lat: -23.55 },
  { name: "Mexico City", lng: -99.13, lat: 19.43 },
  { name: "Los Angeles", lng: -118.24, lat: 34.05 },
  { name: "Mumbai", lng: 72.88, lat: 19.08 },
  { name: "Lagos", lng: 3.38, lat: 6.52 },
  { name: "Seoul", lng: 126.98, lat: 37.57 },
];

export function GlobalReach({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`relative mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2 ${compact ? "py-20" : "py-20 md:py-24"}`}>
      <div className="relative z-10">
        <Reveal><p className="text-sm uppercase tracking-[0.3em] text-primary">Global Reach</p></Reveal>
        <Reveal delay={0.1}><h2 className="mt-4 text-4xl font-bold md:text-6xl">Growing brands <span className="text-gradient">all over the world.</span></h2></Reveal>
        <Reveal delay={0.2}><p className="mt-6 max-w-md text-muted-foreground">Campaigns, websites and rankings that work across every continent and every time zone — wherever your customers are.</p></Reveal>
        <Reveal delay={0.3} className="mt-8 grid max-w-md grid-cols-3 gap-4">
          {[[12, "+", "Countries"], [150, "+", "Brands"], [24, "/7", "Support"]].map(([n, s, l]) => (
            <div key={l as string} className="rounded-2xl glass p-4">
              <p className="font-display text-3xl font-bold text-primary"><Counter to={n as number} suffix={s as string} /></p>
              <p className="mt-1 text-xs text-muted-foreground">{l}</p>
            </div>
          ))}
        </Reveal>
        <Reveal delay={0.4} className="mt-6 flex flex-wrap gap-2">
          {["North America", "South America", "Europe", "Middle East", "Africa", "Asia", "Australia"].map((r) => (
            <span key={r} className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs"><Globe2 className="h-3 w-3 text-primary" />{r}</span>
          ))}
        </Reveal>
      </div>
      <Reveal delay={0.2} className="relative aspect-square w-full">
        <div aria-hidden className="absolute inset-[10%] rounded-full bg-lime/15 blur-[90px]" />
        <Globe places={places} className="relative" />
      </Reveal>
    </section>
  );
}
