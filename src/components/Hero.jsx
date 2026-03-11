"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "../styles/hero.css";

const PROJECTS = [
  { video: "/videos/projet-01.mp4", poster: "/projet-01.jpg" },
  { video: "/videos/projet-02.mp4", poster: "/projet-02.jpg" },
  { video: "/videos/projet-03.mp4", poster: "/projet-03.jpg" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 120);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % PROJECTS.length);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = async () => {
      try {
        video.currentTime = 0;
        await video.play();
      } catch {}
    };

    tryPlay();
  }, [index]);

  const current = PROJECTS[index];

  return (
    <section id="home" className={`hero ${isReady ? "is-ready" : ""}`}>
      <video
        key={current.video}
        ref={videoRef}
        className="hero-video-bg"
        src={current.video}
        poster={current.poster}
        muted
        playsInline
        autoPlay
        loop
        preload="metadata"
      />

      <div className="hero-overlay" />
      <div className="hero-noise" />

      <div className="hero-container">
        <div className="hero-logo-wrap">
          <div className="hero-logo">
            <Image
              src="/Blanc2-v3.png"
              alt="Mohamed Henni Production"
              fill
              priority
              className="hero-logo-img"
              sizes="100vw"
            />
          </div>
        </div>

        <p className="hero-subtitle">
          VIDÉASTE • INDUSTRIE • ÉVÉNEMENTIEL • MARIAGE
        </p>
      </div>
    </section>
  );
}