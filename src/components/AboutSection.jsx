"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import "../styles/about-section.css";

export default function AboutSection() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll("[data-reveal]");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <section className="about" id="apropos" ref={ref}>
      <div className="about-container">
        {/* LEFT: PHOTOS */}
        <div className="about-left">
          <div className="photo-stack">
            <div className="photo photo-1" data-reveal style={{ "--d": "0ms" }}>
              <Image
                src="/about-1.jpg"
                alt="Photo 1"
                fill
                className="img"
                sizes="(max-width: 900px) 90vw, 520px"
                priority={false}
              />
            </div>

            <div className="photo photo-2" data-reveal style={{ "--d": "140ms" }}>
              <Image
                src="/about-3.jpg"
                alt="Photo 3"
                fill
                className="img"
                sizes="(max-width: 900px) 90vw, 520px"
              />
            </div>

            <div className="photo photo-3" data-reveal style={{ "--d": "280ms" }}>
              <Image
                src="/about-2.jpg"
                alt="Photo 2"
                fill
                className="img"
                sizes="(max-width: 900px) 90vw, 520px"
              />
            </div>
          </div>
        </div>

        {/* RIGHT: TEXT */}
        <div className="about-right" data-reveal style={{ "--d": "120ms" }}>
          <div className="about-title-row">
            <h2 className="about-title">L’IMAGE, PENSÉE POUR PERFORMER</h2>
            <span className="about-line" />
          </div>

          <div className="about-text">
            <p>
              Vidéaste spécialisé en communication corporate et industrielle, j’accompagne les grands groupes
              et acteurs majeurs dans des environnements exigeants : sites industriels, protocoles HSE,
              zones restreintes, confidentialité R&D.
            </p>

            <p>
              Je ne produis pas “des vidéos”. Je conçois des contenus pensés pour vos enjeux :
              performance, sécurité, productivité, marque employeur.
            </p>

            <p>
              Films institutionnels, vidéos techniques, photographie industrielle, motion design,
              captation d’événements : de la stratégie éditoriale à la post-production,
              chaque projet est optimisé pour vos supports.
            </p>

            <p className="about-signature">Vous avez l’expertise. Je la rends visible.</p>
          </div>

          <a className="about-cta" href="/contact">Discutons-en</a>
        </div>
      </div>
    </section>
  );
}