"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import "../../styles/projets.css";

const PROJECTS = [
  // ── Artistique & Événement ──
  {
    title: "CROUSTY RICE",
    category: "Artistique & Événement",
    videoId: "65c69bc21b6ef2d87678af74d05083ff",
  },
  {
    title: "CHAPPELLE DU PORT DUNKERQUE",
    category: "Artistique & Événement",
    videoId: "b22aef93e3b6ecb2fdabcb71bfcc45d7",
  },

  // ── Entreprise ──
  {
    title: "MATERNITÉ ANGÈLE BARBION",
    category: "Entreprise",
    videoId: "9fcfce68bbf6ee3323b3bea5b2267ced",
  },
  {
    title: "DFDS LONDRES",
    category: "Entreprise",
    videoId: "5ed663c8861c674fe1e14d187589d9ef",
    description: "Présentation institutionnelle et storytelling.",
  },
  {
    title: "OSAKA",
    category: "Entreprise",
    videoId: "8c1e109e92608a9e3e6c5c0ee861d422",
  },
  {
    title: "THE SMILES KNOKKE",
    category: "Entreprise",
    videoId: "4e4edde0b3b29c54c0f81d53144d5ff9",
  },
  {
    title: "ALUMINIUM DUNKERQUE",
    category: "Entreprise",
    videoId: "042b2bc38defb7830b80675fb344a7d4",
  },

  {
    title: "ALUMINIUM DUNKERQUE PASSION",
    category: "Entreprise",
    videoId: "e58eccbeab95ec00d15c8d3ffe4c89c0",
  },

  {
    title: "lYCÉE GUY DEBEYRE - ORGANISATION DU TRANSPORT",
    category: "Entreprise",
    videoId: "36ebbf5575263a824e84e77e67c10830",
  },

  // ── Mariage ──
  {
    title: "ÉLODIE & QUENTIN",
    category: "Mariage",
    videoId: "0d57fb418d859dd105c136ad07796383",
  },
  {
    title: "KAMILLE & BENJAMIN",
    category: "Mariage",
    videoId: "afbc3addb86852539219d10688c6c970",
  },

  // ── Industrie ──
  {
    title: "TOTAL IRAK",
    category: "Industrie",
    videoId: "60d5e56d96a92dd2b2671bdacf8578a7",
  },
  {
    title: "MOOC IRAK - TOTAL ENERGIES",
    category: "Industrie",
    videoId: "532566ba5e337c4be840ceaf6031d55e",
  },
  {
    title: "CHANTIER OA8",
    category: "Industrie",
    videoId: "838057b1b93aac767501e29a7b523d7b",
  },
  {
    title: "SPIE BATIGNOLLES",
    category: "Industrie",
    videoId: "2d4fce9f71c84b8223284d70178f775b",
  },
  {
    title: "CHANTIER RIA",
    category: "Industrie",
    videoId: "f844c9c01fe0e2cb470aea9e9d9d0274",
  },
];

const FILTERS = ["Tous", "Artistique & Événement", "Entreprise", "Mariage", "Industrie"];

const CF_STREAM_BASE = "https://iframe.cloudflarestream.com";
const CF_THUMB_BASE  = "https://videodelivery.net";

export default function ProjetsPage() {
  const [activeFilter,  setActiveFilter]  = useState("Tous");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [hoveredKey,    setHoveredKey]    = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "Tous") return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setSelectedVideo(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedVideo ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedVideo]);

  const heroProject = PROJECTS[0];

  return (
    <main className="projects-page">

      {/* ── HERO ── */}
      <section className="projects-hero">
        <iframe
          className="projects-hero-video"
          src={`${CF_STREAM_BASE}/${heroProject.videoId}?autoplay=true&muted=true&loop=true&controls=false&preload=true`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          style={{ pointerEvents: "none", border: "none" }}
          title="Hero background video"
        />
        <div className="projects-hero-overlay" />
        <div className="projects-container projects-hero-container">
          <div className="projects-hero-content">
            <span className="projects-kicker">Réalisations</span>
            <h1 className="projects-title">
              De La Vision <br />À L&apos;Image
            </h1>
            <p className="projects-intro">
              Découvrez une sélection de productions vidéo conçues pour la
              marque, l&apos;entreprise, l&apos;événementiel et les univers exigeants.
            </p>
            <a href="#projects-grid" className="projects-hero-cta">
              Voir les projets
            </a>
          </div>
        </div>
      </section>

      {/* ── GRILLE ── */}
      <section className="projects-content" id="projects-grid">
        <div className="projects-container">
          <div className="projects-section-heading">
            <div className="projects-heading">
              <span className="projects-kicker">Sélection</span>
              <h2 className="projects-section-title">Projets &amp; Réalisations</h2>
            </div>
            <div className="projects-toolbar">
              <div className="projects-filters" aria-label="Filtres projets">
                {FILTERS.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    className={`projects-filter ${activeFilter === filter ? "is-active" : ""}`}
                    onClick={() => setActiveFilter(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => {
              const key       = `${project.videoId}-${index}`;
              const isHovered = hoveredKey === key;

              return (
                <article key={key} className="project-card">
                  <button
                    type="button"
                    className="project-media"
                    onClick={() => setSelectedVideo(project)}
                    onMouseEnter={() => setHoveredKey(key)}
                    onMouseLeave={() => setHoveredKey(null)}
                    onFocus={() => setHoveredKey(key)}
                    onBlur={() => setHoveredKey(null)}
                    aria-label={`Ouvrir ${project.title}`}
                  >
                    <Image
                      className="project-video"
                      src={`${CF_THUMB_BASE}/${project.videoId}/thumbnails/thumbnail.jpg?time=2s&width=800`}
                      alt={project.title}
                      fill
                      sizes="(max-width: 900px) 100vw, 50vw"
                    />

                    {isHovered && (
                      <iframe
                        className="project-video project-video-hover"
                        src={`${CF_STREAM_BASE}/${project.videoId}?autoplay=true&muted=true&loop=true&controls=false&preload=true`}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        style={{ pointerEvents: "none", border: "none", position: "absolute", inset: 0 }}
                        title={project.title}
                      />
                    )}

                    <div className="project-overlay" />
                    <div className="project-play"><span /></div>
                    <div className="project-meta">
                      <span className="project-category">{project.category}</span>
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                    </div>
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {selectedVideo && (
        <div
          className="projects-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedVideo.title}
          onClick={() => setSelectedVideo(null)}
        >
          <div className="projects-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="projects-lightbox-close"
              aria-label="Fermer la vidéo"
              onClick={() => setSelectedVideo(null)}
            >
              <span /><span />
            </button>
            <div className="projects-lightbox-video-wrap">
              <iframe
                className="projects-lightbox-video"
                src={`${CF_STREAM_BASE}/${selectedVideo.videoId}?autoplay=true&controls=true&preload=true`}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
                style={{ border: "none" }}
                title={selectedVideo.title}
              />
            </div>
            <div className="projects-lightbox-info">
              <span className="project-category">{selectedVideo.category}</span>
              <h3>{selectedVideo.title}</h3>
              <p>{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}