import { useEffect, useRef } from "react";

export type GlobePlace = { name: string; lng: number; lat: number };

type V3 = [number, number, number];
const RAD = Math.PI / 180;
const toV = (lng: number, lat: number): V3 => [Math.cos(lat * RAD) * Math.sin(lng * RAD), Math.sin(lat * RAD), Math.cos(lat * RAD) * Math.cos(lng * RAD)];

function slerp(a: V3, b: V3, t: number): V3 {
  const d = Math.min(1, Math.max(-1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2]));
  const w = Math.acos(d);
  if (w < 1e-6) return a;
  const s = Math.sin(w);
  const k1 = Math.sin((1 - t) * w) / s, k2 = Math.sin(t * w) / s;
  return [a[0] * k1 + b[0] * k2, a[1] * k1 + b[1] * k2, a[2] * k1 + b[2] * k2];
}

/** Dotted, spinning, draggable globe with animated arcs travelling between places worldwide. Canvas only, runs after mount. */
export function Globe({ places, className = "" }: { places: GlobePlace[]; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx0 = canvas.getContext("2d");
    if (!ctx0) return;
    const ctx: CanvasRenderingContext2D = ctx0;
    let raf = 0;
    let alive = true;
    let lime = "#C6FF00";
    let fg = "#fff";
    const readTheme = () => {
      const css = getComputedStyle(document.documentElement);
      lime = css.getPropertyValue("--lime").trim() || "#C6FF00";
      fg = css.getPropertyValue("--foreground").trim() || "#fff";
    };
    readTheme();
    const obs = new MutationObserver(readTheme);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let rot = 0.35;
    const tilt = -0.26;
    let drag: { x: number; rot: number } | null = null;
    let vel = 0;

    const onDown = (e: PointerEvent) => { drag = { x: e.clientX, rot }; canvas.setPointerCapture(e.pointerId); };
    const onMove = (e: PointerEvent) => { if (!drag) return; const nr = drag.rot + (e.clientX - drag.x) * 0.006; vel = nr - rot; rot = nr; };
    const onUp = () => { drag = null; };
    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerup", onUp);
    canvas.addEventListener("pointercancel", onUp);

    let dots: V3[] = [];
    (async () => {
      const [{ geoEquirectangular, geoPath }, topo, landMod] = await Promise.all([
        import("d3-geo"), import("topojson-client"), import("world-atlas/land-110m.json"),
      ]);
      const land = (landMod as { default?: unknown }).default ?? landMod;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const geo = topo.feature(land as any, (land as any).objects.land);
      const W = 720, H = 360;
      const off = document.createElement("canvas"); off.width = W; off.height = H;
      const octx = off.getContext("2d");
      if (!octx) return;
      const proj = geoEquirectangular().scale(W / (2 * Math.PI)).translate([W / 2, H / 2]);
      octx.fillStyle = "#000"; octx.beginPath();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      geoPath(proj, octx).call(null, geo as any);
      octx.fill();
      const img = octx.getImageData(0, 0, W, H).data;
      const out: V3[] = [];
      const step = 1.35;
      for (let lat = -58; lat <= 84; lat += step) {
        const n = Math.max(1, Math.round((360 / step) * Math.cos(lat * RAD)));
        for (let i = 0; i < n; i++) {
          const lng = -180 + (i * 360) / n;
          const px = Math.floor(((lng + 180) / 360) * W), py = Math.floor(((90 - lat) / 180) * H);
          if (img[(py * W + px) * 4 + 3]! > 100) out.push(toV(lng, lat));
        }
      }
      if (alive) dots = out;
    })();

    const pv = places.map((p) => toV(p.lng, p.lat));
    const n = pv.length;
    const arcs = pv.flatMap((from, i) => [5].map((k) => ({ from, to: pv[(i + k) % n]!, offset: (i * 0.41) % 1.6 })));
    const rings = [
      { rx: 1.24, ry: 0.42, rot: -0.36, speed: 0.35 },
      { rx: 1.18, ry: 0.48, rot: 0.44, speed: -0.28 },
      { rx: 1.12, ry: 0.96, rot: -0.18, speed: 0.22 },
    ];

    const start = performance.now();
    const draw = (now: number) => {
      const t = (now - start) / 1000;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth, h = canvas.clientHeight;
      if (canvas.width !== Math.round(w * dpr)) { canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr); }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      const R = Math.min(w, h) * 0.38, cx = w / 2, cy = h / 2;

      if (!drag) { if (Math.abs(vel) > 0.0005) { rot += vel; vel *= 0.95; } else if (!reduce) rot += 0.0016; }
      const cr = Math.cos(rot), sr = Math.sin(rot), ct = Math.cos(tilt), st = Math.sin(tilt);
      const tf = (v: V3): V3 => { const x = v[0] * cr + v[2] * sr, z0 = -v[0] * sr + v[2] * cr; const y = v[1] * ct - z0 * st, z = v[1] * st + z0 * ct; return [x, y, z]; };

      // outer orbital rings (back half)
      const drawRingHalf = (back: boolean) => {
        for (const r of rings) {
          ctx.save();
          ctx.translate(cx, cy);
          ctx.rotate(r.rot);
          ctx.beginPath();
          ctx.ellipse(0, 0, R * r.rx, R * r.ry, 0, back ? Math.PI : 0, back ? Math.PI * 2 : Math.PI);
          ctx.strokeStyle = lime;
          ctx.shadowColor = lime;
          ctx.shadowBlur = back ? 6 : 16;
          ctx.globalAlpha = back ? 0.22 : 0.65;
          ctx.lineWidth = back ? 1 : 1.5;
          ctx.stroke();
          ctx.restore();
        }
      };
      drawRingHalf(true);

      // sphere body + vivid lime Fresnel rim glow
      const g = ctx.createRadialGradient(cx - R * 0.25, cy - R * 0.25, R * 0.15, cx, cy, R);
      g.addColorStop(0, "rgba(14,18,12,0.92)"); g.addColorStop(0.72, "rgba(12,18,9,0.94)"); g.addColorStop(0.92, "rgba(165,245,0,0.16)"); g.addColorStop(1, "rgba(198,255,0,0.34)");
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.fillStyle = g; ctx.fill();
      ctx.save(); ctx.shadowColor = lime; ctx.shadowBlur = 44; ctx.strokeStyle = lime; ctx.globalAlpha = 0.85; ctx.lineWidth = 2; ctx.stroke(); ctx.restore();
      ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.strokeStyle = lime; ctx.globalAlpha = 0.95; ctx.lineWidth = 1.1; ctx.stroke(); ctx.restore();

      // land dots
      ctx.fillStyle = fg;
      for (const d of dots) {
        const p = tf(d);
        if (p[2] <= 0) continue;
        ctx.globalAlpha = 0.22 + p[2] * 0.72;
        ctx.fillRect(cx + p[0] * R - 0.85, cy - p[1] * R - 0.85, 1.7, 1.7);
      }
      ctx.globalAlpha = 1;

      // arcs
      const SEG = 60;
      ctx.lineCap = "round";
      ctx.shadowColor = lime;
      for (const a of arcs) {
        const cyc = ((t * 0.28 + a.offset) % 1.6);
        const head = Math.min(1, cyc / 0.9), tail = Math.max(0, (cyc - 0.9) / 0.7);
        if (head <= tail) continue;
        const ang = Math.acos(Math.min(1, a.from[0] * a.to[0] + a.from[1] * a.to[1] + a.from[2] * a.to[2]));
        const lift = 0.04 + ang * 0.07;
        let prev: [number, number, boolean] | null = null;
        for (let i = Math.floor(tail * SEG); i <= Math.ceil(head * SEG); i++) {
          const u = Math.min(head, Math.max(tail, i / SEG));
          const v = slerp(a.from, a.to, u); const e = 1 + lift * Math.sin(Math.PI * u);
          const p = tf([v[0] * e, v[1] * e, v[2] * e]);
          const vis = p[2] > 0 || p[0] * p[0] + p[1] * p[1] > 1;
          const sx = cx + p[0] * R, sy = cy - p[1] * R;
          if (prev && prev[2] && vis) {
            ctx.beginPath(); ctx.moveTo(prev[0], prev[1]); ctx.lineTo(sx, sy);
            ctx.strokeStyle = lime; ctx.shadowBlur = 10; ctx.globalAlpha = 0.35 + 0.65 * ((u - tail) / Math.max(0.001, head - tail)); ctx.lineWidth = 2; ctx.stroke();
          }
          prev = [sx, sy, vis];
        }
        ctx.shadowBlur = 0; ctx.globalAlpha = 1;
        if (head >= 1 && tail < 0.5) ripple(a.to, (cyc - 0.9) / 0.35);
      }
      pv.forEach((v, i) => dot(v, ((t * 0.7 + i * 0.13) % 1)));
      drawRingHalf(false);

      function dot(v: V3, pulse: number) {
        const p = tf(v);
        if (p[2] <= 0.05) return;
        const sx = cx + p[0] * R, sy = cy - p[1] * R;
        const glow = ctx.createRadialGradient(sx, sy, 0, sx, sy, 12);
        glow.addColorStop(0, "rgba(230,255,140,0.85)");
        glow.addColorStop(0.4, "rgba(198,255,0,0.35)");
        glow.addColorStop(1, "rgba(198,255,0,0)");
        ctx.fillStyle = glow;
        ctx.globalAlpha = p[2];
        ctx.beginPath(); ctx.arc(sx, sy, 12, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(sx, sy, 3 + pulse * 8, 0, Math.PI * 2);
        ctx.strokeStyle = lime; ctx.globalAlpha = (1 - pulse) * p[2] * 0.7; ctx.lineWidth = 1.2; ctx.stroke();
        ctx.beginPath(); ctx.arc(sx, sy, 2.5, 0, Math.PI * 2); ctx.fillStyle = lime; ctx.globalAlpha = p[2]; ctx.fill();
        ctx.globalAlpha = 1;
      }
      function ripple(v: V3, k: number) {
        if (k < 0 || k > 1) return;
        const p = tf(v);
        if (p[2] <= 0.05) return;
        ctx.beginPath(); ctx.arc(cx + p[0] * R, cy - p[1] * R, 4 + k * 22, 0, Math.PI * 2);
        ctx.strokeStyle = lime; ctx.globalAlpha = (1 - k) * p[2]; ctx.lineWidth = 2; ctx.stroke(); ctx.globalAlpha = 1;
      }

      if (alive) raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => {
      alive = false; cancelAnimationFrame(raf); obs.disconnect();
      canvas.removeEventListener("pointerdown", onDown); canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerup", onUp); canvas.removeEventListener("pointercancel", onUp);
    };
  }, [places]);

  return <canvas ref={ref} aria-label="Spinning globe with glowing lines connecting cities around the world" role="img" className={`h-full w-full cursor-grab touch-pan-y active:cursor-grabbing ${className}`} />;
}
