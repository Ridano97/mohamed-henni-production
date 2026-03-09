"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "@/styles/stats.module.css";

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(!!mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  return reduced;
}

export default function Stats() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const reducedMotion = usePrefersReducedMotion();

  const ITEMS = useMemo(
    () => [
      { end: 10, prefix: "+", suffix: "", label: "ans d’expérience" },
      { end: 5000, prefix: "+", suffix: "", label: "vidéos réalisées" },
      { end: 4, prefix: "+", suffix: "M", label: "de vues sur les réseaux" },
    ],
    []
  );

  const [values, setValues] = useState(ITEMS.map(() => 0));

  // Reveal + count animation
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;

          el.classList.add(styles.visible);

          if (reducedMotion) {
            setValues(ITEMS.map((it) => it.end));
            io.unobserve(el);
            return;
          }

          const duration = 1400;
          const start = performance.now();

          const tick = (now) => {
            const t = Math.min(1, (now - start) / duration);
            const k = easeOutCubic(t);

            setValues(ITEMS.map((it) => Math.round(it.end * k)));

            if (t < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          io.unobserve(el);
        });
      },
      { threshold: 0.35 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [ITEMS, reducedMotion]);

  // Micro parallax background
  useEffect(() => {
    if (reducedMotion) return;

    const el = sectionRef.current;
    const bg = bgRef.current;
    if (!el || !bg) return;

    let raf = 0;

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;

        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || 1;

        // progress 0..1 when section is in view (loose)
        const start = vh;
        const end = -rect.height;
        const p = (rect.top - end) / (start - end);
        const clamped = Math.max(0, Math.min(1, p));

        // very subtle move: -12px .. +12px
        const y = (clamped - 0.5) * 24;

        bg.style.setProperty("--py", `${y.toFixed(2)}px`);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reducedMotion]);

  return (
    <section ref={sectionRef} className={styles.stats} aria-label="Statistiques">
      <div ref={bgRef} className={styles.bg} />
      <div className={styles.overlay} />

      <div className={styles.inner}>
        <div className={styles.row}>
          {ITEMS.map((it, i) => (
            <div key={it.label} className={styles.item}>
              <div className={styles.value}>
                {it.prefix}
                {values[i]}
                {it.suffix}
              </div>
              <div className={styles.label}>{it.label}</div>
            </div>
          ))}
        </div>

        <div className={styles.title}>
          REJOIGNEZ LES MARQUES QUI M’ONT FAIT CONFIANCE
        </div>
      </div>
    </section>
  );
}