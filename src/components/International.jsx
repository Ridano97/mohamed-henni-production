"use client";

import { useEffect, useRef } from "react";
import "../styles/international.css";

export default function International() {
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
        threshold: 0.35,
        rootMargin: "0px 0px -15% 0px",
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="international" ref={rootRef}>
      <div className="international-world" aria-hidden="true" />

      <div className="international-container">
        <div className="international-heading" data-reveal>
          <span className="section-kicker international-kicker">International</span>

          <h2 className="section-title international-title">
            Rayonnement <br /> International
          </h2>

          <p className="section-intro international-intro">
            Des collaborations menées au-delà des frontières, dans des contextes
            exigeants, industriels, événementiels et corporate.
          </p>
        </div>

        <div className="international-grid">
          <article
            className="country-card country-white"
            data-reveal
            style={{ transitionDelay: "120ms" }}
          >
            <div className="country-glow" />
            <div className="country-tag">🇸🇦</div>

            <h3 className="country-title">ARABIE SAOUDITE</h3>

            <p className="country-text">
              Production vidéo <br />
              Agence de voyage
            </p>
          </article>

          <article
            className="country-card country-grey"
            data-reveal
            style={{ transitionDelay: "260ms" }}
          >
            <div className="country-glow" />
            <div className="country-tag">🇮🇶</div>

            <h3 className="country-title">IRAK</h3>

            <p className="country-text">
              Promotion immobilière <br />
              Total energie <br />
              Suivi de chantier
            </p>
          </article>

          <article
            className="country-card country-orange"
            data-reveal
            style={{ transitionDelay: "420ms" }}
          >
            <div className="country-glow" />
            <div className="country-tag">🇪🇸</div>

            <h3 className="country-title">ESPAGNE</h3>

            <p className="country-text">
              Leroy Merlin <br />
              HYROX <br />
              Groupe ADEO
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}