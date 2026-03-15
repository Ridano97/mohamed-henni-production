"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "../styles/hero.css";

const VIDEOS = [
  "60d5e56d96a92dd2b2671bdacf8578a7",
  "f844c9c01fe0e2cb470aea9e9d9d0274",
  "e58eccbeab95ec00d15c8d3ffe4c89c0",
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
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % VIDEOS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className={`hero ${isReady ? "is-ready" : ""}`}>
      {VIDEOS.map((id, i) => (
        <iframe
          key={id}
          className="hero-video-bg"
          src={`${CF_STREAM_BASE}/${id}?autoplay=true&muted=true&loop=true&controls=false&preload=true`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          style={{
            pointerEvents: "none",
            border: "none",
            opacity: i === index ? 1 : 0,
            transition: "opacity 1000ms cubic-bezier(0.16, 1, 0.3, 1)",
            zIndex: i === index ? 0 : -1,
          }}
          title={`Hero video ${i + 1}`}
        />
      ))}

      <div className="hero-overlay" />
      <div className="hero-noise" />

      <div className="hero-container">
        <div className="hero-logo-wrap">
          <div className="hero-logo">
            <Image
              src="/Blanc2-v4.png"
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