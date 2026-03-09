"use client";

import { useMemo, useRef, useState } from "react";
import "../../styles/projets.css";

const PROJECTS = [
  {
    title: "Projet 01",
    category: "Corporate",
    video: "/videos/projet-01.mp4",
    description: "Film corporate et image de marque.",
  },
  {
    title: "Projet 02",
    category: "Événement",
    video: "/videos/projet-02.mp4",
    description: "Captation et narration d’événement.",
  },
  {
    title: "Projet 03",
    category: "Publicité",
    video: "/videos/projet-03.mp4",
    description: "Contenu promotionnel et storytelling visuel.",
  },
];

const FILTERS = ["Tous", "Corporate", "Événement", "Publicité"];

export default function ProjetsPage() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoRefs = useRef({});

  const filteredProjects = useMemo(() => {
    if (activeFilter === "Tous") return PROJECTS;
    return PROJECTS.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const handleMouseEnter = (key) => {
    const video = videoRefs.current[key];
    if (!video) return;

    video.currentTime = 0;
    video.play().catch(() => {});
  };

  const handleMouseLeave = (key) => {
    const video = videoRefs.current[key];
    if (!video) return;

    video.pause();
    video.currentTime = 0;
  };

  return (
    <main className="projects-page">
      <section className="projects-hero">
        <div className="projects-container">
          <div className="projects-heading">
            <span className="projects-kicker">Réalisations</span>

            <h1 className="projects-title">
              Projets &amp; Réalisations
            </h1>

            <p className="projects-intro">
              Une sélection de productions vidéo pensées pour la marque,
              l’entreprise, l’événementiel et la publicité.
            </p>
          </div>
        </div>
      </section>

      <section className="projects-content">
        <div className="projects-container">
          <div className="projects-toolbar">
            <div className="projects-filters" aria-label="Filtres projets">
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={`projects-filter ${
                    activeFilter === filter ? "is-active" : ""
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => {
              const key = `${project.title}-${index}`;

              return (
                <article key={key} className="project-card">
                  <button
                    type="button"
                    className="project-media"
                    onClick={() => setSelectedVideo(project)}
                    onMouseEnter={() => handleMouseEnter(key)}
                    onMouseLeave={() => handleMouseLeave(key)}
                    onFocus={() => handleMouseEnter(key)}
                    onBlur={() => handleMouseLeave(key)}
                    aria-label={`Ouvrir ${project.title}`}
                  >
                    <video
                      ref={(el) => {
                        videoRefs.current[key] = el;
                      }}
                      className="project-video"
                      src={project.video}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />

                    <div className="project-overlay" />

                    <div className="project-play">
                      <span />
                    </div>

                    <div className="project-meta">
                      <span className="project-category">
                        {project.category}
                      </span>

                      <h2 className="project-title">
                        {project.title}
                      </h2>

                      <p className="project-description">
                        {project.description}
                      </p>
                    </div>
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {selectedVideo && (
        <div
          className="projects-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedVideo.title}
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="projects-lightbox-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="projects-lightbox-close"
              aria-label="Fermer la vidéo"
              onClick={() => setSelectedVideo(null)}
            >
              <span />
              <span />
            </button>

            <div className="projects-lightbox-video-wrap">
              <video
                className="projects-lightbox-video"
                src={selectedVideo.video}
                controls
                autoPlay
                playsInline
                preload="metadata"
              />
            </div>

            <div className="projects-lightbox-info">
              <span className="project-category">
                {selectedVideo.category}
              </span>

              <h3>{selectedVideo.title}</h3>

              <p>{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}