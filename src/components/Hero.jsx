"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "../styles/hero.css";

const PROJECTS = [
  {
    title: "Projet 01",
    video: "/videos/projet-01.mp4",
    poster: "/projet-01.jpg",
  },
  {
    title: "Projet 02",
    video: "/videos/projet-02.mp4",
    poster: "/projet-02.jpg",
  },
  {
    title: "Projet 03",
    video: "/videos/projet-03.mp4",
    poster: "/projet-03.jpg",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const videoRef = useRef(null);

  const current = PROJECTS[index];

  const changeTo = (nextIndex) => {
    if (nextIndex === index || isFading) return;

    setIsFading(true);
    window.setTimeout(() => {
      setIndex(nextIndex);
      window.setTimeout(() => setIsFading(false), 60);
    }, 220);
  };

  const prev = () => changeTo((index - 1 + PROJECTS.length) % PROJECTS.length);
  const next = () => changeTo((index + 1) % PROJECTS.length);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.currentTime = 0;
    const p = v.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  }, [index]);

  return (
    <section className="hero">
      <div className="hero-bg" />

      <div className="hero-container">
        {/* LEFT */}
        <div className="hero-left">
          <h1 className="hero-title">Mohamed Henni Production</h1>
          <p className="hero-subtitle">Vidéaste • Réalisation • Storytelling</p>

          <div className="hero-buttons">
            <button className="hero-btn primary" onClick={next}>
              Voir le projet suivant
            </button>
            <a className="hero-btn ghost" href="/contact">
              Travaillons ensemble
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          {/* PLAYER */}
          <div className={`player ${isFading ? "fade" : ""}`}>
            <video
              key={current.video}
              ref={videoRef}
              className="player-video"
              src={current.video}
              poster={current.poster}
              autoPlay
              muted
              playsInline
              loop
              preload="metadata"
            />
            <div className="player-overlay" />
            <div className="player-meta">
              <div>
                <div className="kicker">PROJET</div>
                <div className="title">{current.title}</div>
              </div>

              <div className="player-actions">
                <button className="circle" onClick={prev} aria-label="Précédent">
                  ←
                </button>
                <button className="circle" onClick={next} aria-label="Suivant">
                  →
                </button>
              </div>
            </div>
          </div>

          {/* NETFLIX STRIP */}
          <div className="strip" aria-label="Carousel projets">
            {PROJECTS.map((p, i) => {
              const active = i === index;
              return (
                <button
                  key={p.video}
                  className={`card ${active ? "active" : ""}`}
                  onClick={() => changeTo(i)}
                  aria-label={`Lire ${p.title}`}
                >
                  <div className="thumbWrap">
                    <Image
                      src={p.poster}
                      alt={p.title}
                      fill
                      className="thumbImg"
                      sizes="(max-width: 900px) 160px, 180px"
                      priority={active}
                    />
                  </div>

                  <div className="card-gradient" />
                  <div className="card-title">{p.title}</div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}