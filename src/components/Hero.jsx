"use client";

import { useEffect, useState } from "react";
import "../styles/hero.css";

const VIDEOS = [
  "f8ba19506357ddfd00d67a01ccb08256",
];

const CF_STREAM_BASE = "https://iframe.cloudflarestream.com";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 120);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (VIDEOS.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % VIDEOS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className={`hero ${isReady ? "is-ready" : ""}`}>
      <div className="hero-video-stage">
        {VIDEOS.map((id, i) => (
          <iframe
            key={id}
            className={`hero-video-bg ${i === index ? "is-active" : ""}`}
            src={`${CF_STREAM_BASE}/${id}?autoplay=true&muted=true&loop=true&controls=false&preload=true`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            title={`Hero video ${i + 1}`}
          />
        ))}
      </div>

      <div className="hero-overlay" />
      <div className="hero-noise" />

      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">L&apos;IMAGE AU SERVICE DE VOS ENJEUX</h1>
          <p className="hero-description">
            Je transforme votre expertise en contenu qui performe.
          </p>
        </div>
      </div>

      <p className="hero-categories">
        CORPORATE • INDUSTRIE • CHANTIER • ÉVÉNEMENTIEL • MARIAGE
      </p>
    </section>
  );
}
