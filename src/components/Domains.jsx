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

function CorporateIcon() {
  return (
    <svg viewBox="0 0 24 24" className="domain-svg" aria-hidden="true">
      <rect
        x="3" y="7" width="18" height="13"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M3 13h18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M10 13v2m4-2v2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function EventIcon() {
  return (
    <svg viewBox="0 0 24 24" className="domain-svg" aria-hidden="true">
      <path
        d="M9 18V6l12 6-12 6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M3 6v12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function WeddingIcon() {
  return (
    <svg viewBox="0 0 24 24" className="domain-svg" aria-hidden="true">
      <path
        d="M12 21C12 21 4 15.5 4 9.5a4.5 4.5 0 0 1 8-2.83A4.5 4.5 0 0 1 20 9.5C20 15.5 12 21 12 21Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12 6V3M10 4h4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

const cards = [
  {
    color: "domain-orange",
    delay: "160ms",
    icon: <FactoryIcon />,
    title: "Vidéo Corporate & Industrielle",
    text: "Films institutionnels, formation sécurité, présentation de processus industriels et communication interne.",
  },
  {
    color: "domain-grey",
    delay: "280ms",
    icon: <HelmetIcon />,
    title: "Suivi de Chantier",
    text: "Timelapse longue durée, inspection par drone et documentation technique de l'évolution des travaux.",
  },
  {
    color: "domain-navy",
    delay: "400ms",
    icon: <CorporateIcon />,
    title: "Corporate",
    text: "Films institutionnels, reportages d'entreprise, clips de communication interne ou externe — nous transformons votre vision en contenu vidéo professionnel qui inspire.",
  },
  {
    color: "domain-orange",
    delay: "520ms",
    icon: <EventIcon />,
    title: "Événementiel & Artistique",
    text: "Concerts, spectacles, soirées de gala ou lancements de produit — des captations dynamiques et des aftermovies cinématographiques qui font revivre chaque moment.",
  },
  {
    color: "domain-grey",
    delay: "640ms",
    icon: <WeddingIcon />,
    title: "Mariage",
    text: "Votre mariage est unique, votre film doit l'être aussi. Avec une approche douce, discrète et profondément humaine, nous capturons chaque regard, chaque rire et chaque émotion.",
  },
];

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

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Ligne 1 : 3 cartes */}
          <div className="domains-grid-row">
            {cards.slice(0, 3).map((card, i) => (
              <article
                key={i}
                className={`domain-card ${card.color}`}
                data-reveal
                style={{ transitionDelay: card.delay }}
              >
                <div className="domain-glow" />
                <div className="domain-icon-wrap">{card.icon}</div>
                <h3 className="domain-title">{card.title}</h3>
                <p className="domain-text">{card.text}</p>
              </article>
            ))}
          </div>

          {/* Ligne 2 : 2 cartes centrées */}
          <div className="domains-grid-row domains-grid-row--centered">
            {cards.slice(3).map((card, i) => (
              <article
                key={i + 3}
                className={`domain-card ${card.color}`}
                data-reveal
                style={{ transitionDelay: card.delay }}
              >
                <div className="domain-glow" />
                <div className="domain-icon-wrap">{card.icon}</div>
                <h3 className="domain-title">{card.title}</h3>
                <p className="domain-text">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
