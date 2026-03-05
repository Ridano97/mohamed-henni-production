"use client";

import { useEffect, useState, useRef } from "react";
import "../styles/hero.css";

const PROJECTS = [
  { video: "/videos/projet-01.mp4", poster: "/projet-01.jpg" },
  { video: "/videos/projet-02.mp4", poster: "/projet-02.jpg" },
  { video: "/videos/projet-03.mp4", poster: "/projet-03.jpg" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const videoRef = useRef(null);

  // 🔥 Auto slide toutes les 8 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % PROJECTS.length);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  // 🔥 Restart video quand ça change
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    video.play().catch(() => {});
  }, [index]);

  const current = PROJECTS[index];

  return (
    <section className="hero">
      <div className="hero-bg" />

      <div className="hero-container">
        <h1 className="hero-title">
          Mohamed Henni Production
        </h1>

        <p className="hero-subtitle">
          Vidéaste • Réalisation • Storytelling
        </p>
        {/* 🎬 GRANDE VIDEO */}
        <div className="hero-video-wrapper">
          <video
            key={current.video}
            ref={videoRef}
            className="hero-video"
            src={current.video}
            poster={current.poster}
            muted
            playsInline
            autoPlay
            loop
            preload="metadata"
          />

          <div className="hero-video-overlay" />
        </div>
      </div>
    </section>
  );
}