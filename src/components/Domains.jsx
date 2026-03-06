"use client";

import { useEffect, useRef } from "react";
import "../styles/domains.css";

function FactoryIcon() {
  return (
    <svg viewBox="0 0 24 24" className="domain-svg" aria-hidden="true">
      <path
        d="M3 20V10l5 3V8l5 3V6l8 5v9H3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M7 20v-4M11 20v-3M15 20v-4M19 20v-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HelmetIcon() {
  return (
    <svg viewBox="0 0 24 24" className="domain-svg" aria-hidden="true">
      <path
        d="M4 14a8 8 0 1 1 16 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 6v8M8.5 9.5l6.5 4.5M4 14h16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 14v1.5A2.5 2.5 0 0 0 7.5 18H10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Domains() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const items = root.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.45,
        rootMargin: "0px 0px -20% 0px",
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="domains" ref={rootRef}>
      <div className="domains-container">
        <div className="domains-heading" data-reveal>
          <span className="domains-kicker">Expertises</span>

          <h2 className="domains-title">
            Nos Domaines <br /> d&apos;Intervention
          </h2>

          <p className="domains-intro">
            Une approche visuelle pensée pour les environnements exigeants,
            les marques, les sites industriels et les projets de terrain.
          </p>
        </div>

        <div className="domains-grid">
          <article
            className="domain-card domain-orange"
            data-reveal
            style={{ transitionDelay: "160ms" }}
          >
            <div className="domain-glow" />

            <div className="domain-icon-wrap">
              <FactoryIcon />
            </div>

            <h3 className="domain-title">Vidéo Corporate &amp; Industrielle</h3>

            <p className="domain-text">
              Films institutionnels, formation sécurité, présentation de
              processus industriels et communication interne.
            </p>
          </article>

          <article
            className="domain-card domain-grey"
            data-reveal
            style={{ transitionDelay: "340ms" }}
          >
            <div className="domain-glow" />

            <div className="domain-icon-wrap">
              <HelmetIcon />
            </div>

            <h3 className="domain-title">Suivi de Chantier</h3>

            <p className="domain-text">
              Timelapse longue durée, inspection par drone et documentation
              technique de l’évolution des travaux.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}