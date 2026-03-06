"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "../styles/navbar.css";

const LINKS = [
  { name: "Accueil", href: "/#home" },
  { name: "À propos", href: "/#apropos" },
  { name: "Projets & Réalisations", href: "/projets" }, // page
  { name: "Partenaires", href: "/#partenaires" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Bloque le scroll quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link href="#home" className="logo" onClick={close} aria-label="Accueil">
          <div className="logo-img">
            <Image
              src="/Blanc1.png"
              alt="Logo Mohamed Henni"
              fill
              priority
              className="logo-image"
              sizes="(max-width: 900px) 140px, 220px"
            />
          </div>
        </Link>

        {/* Navigation desktop */}
        <nav className="nav-links" aria-label="Navigation principale">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={close}>
              {l.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link href="#contact" className="cta" onClick={close}>
          Travaillons ensemble
        </Link>

        {/* Burger mobile */}
        <button
          className="burger"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className={`burger-line ${open ? "open" : ""}`} />
          <span className={`burger-line ${open ? "open" : ""}`} />
        </button>
      </div>

      {/* Overlay mobile */}
      <div
        className={`mobile-overlay ${open ? "show" : ""}`}
        onClick={close}
      />

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        className={`mobile-panel ${open ? "show" : ""}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="mobile-inner">

          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={close}
              className="mobile-link"
            >
              {l.name}
            </Link>
          ))}

          <Link href="#contact" onClick={close} className="mobile-cta">
            Travaillons ensemble
          </Link>

        </div>
      </div>
    </header>
  );
}