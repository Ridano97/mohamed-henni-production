"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/projects-preview.module.css";

const PHOTOS = [
  "/projects/photo1.jpg",
  "/projects/photo3-v2.jpg",
  "/projects/photo11.jpg",
  "/projects/photo4-v3.jpg",
  "/projects/photo6-v3.jpg",
  "/projects/photo5.jpg",
  "/projects/photo7.jpg",
  "/projects/photo8.jpg",
  "/projects/photo9.jpg",
  "/projects/photo10.jpg",
];

export default function ProjectsPreview() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const items = root.querySelectorAll("[data-reveal]");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add(styles.visible);
          io.unobserve(e.target);
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section ref={rootRef} className={styles.section} aria-label="Aperçu des projets">
      <div className={styles.container}>
        <div className={styles.header} data-reveal>
          <div className={styles.leftTitle}>
            <div className={styles.bar} />
            <h2 className={styles.h2}>
              De La Vision <br /> À L’Image
            </h2>
          </div>

          <p className={styles.desc}>
            Découvrez mes projets vidéos et photos réalisés pour différentes marques et entreprises.
            Cliquez sur un visuel pour parcourir l’ensemble des créations.
          </p>
        </div>

        <div className={styles.grid}>
          {PHOTOS.map((src, i) => (
            <Link
              key={src}
              href="/projets"
              className={`${styles.card} ${styles[`card${i + 1}`]}`}
              data-reveal
              style={{ "--d": `${i * 90}ms` }}
              aria-label={`Voir les projets (visuel ${i + 1})`}
            >
              <Image
                src={src}
                alt=""
                fill
                className={styles.img}
                sizes="(max-width: 900px) 100vw, 33vw"
                priority={i < 2}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}