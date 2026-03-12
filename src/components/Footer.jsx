"use client";

import Link from "next/link";
import Image from "next/image";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-top">

          {/* LEFT */}
          <div className="footer-brand">
            <Link
              href="/#home"
              className="footer-logo-wrap"
              aria-label="Retour accueil"
            >
              <div className="footer-logo">
                <Image
                  src="/logo-footer.png"
                  alt="Mohamed Henni Production"
                  fill
                  className="footer-logo-img"
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 520px"
                />
              </div>
            </Link>

            <div className="footer-contact">
              <a href="mailto:mohamedhenniproduction@gmail.com">
                mohamedhenniproduction@gmail.com
              </a>
              <a href="tel:+33760121990">
                +33 7 60 12 19 90
              </a>
            </div>
          </div>

          {/* CENTER - SOCIALS */}
          <div className="footer-socials">
            <a
              href="https://www.facebook.com/MohamedHenniProd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Image
                src="/facebook.png"
                alt="Facebook"
                width={40}
                height={40}
                className="footer-social-img"
              />
            </a>

            <a
              href="https://www.instagram.com/mohamed_henni/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Image
                src="/instagram.png"
                alt="Instagram"
                width={40}
                height={40}
                className="footer-social-img"
              />
            </a>

            <a
              href="https://www.youtube.com/@MLaLife_FR"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <Image
                src="/youtube.png"
                alt="YouTube"
                width={40}
                height={40}
                className="footer-social-img"
              />
            </a>

            <a
              href="https://fr.linkedin.com/in/mohamed-henni-630187141"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Image
                src="/linkedin.png"
                alt="LinkedIn"
                width={40}
                height={40}
                className="footer-social-img"
              />
            </a>
          </div>

          {/* RIGHT */}
          <nav className="footer-nav" aria-label="Navigation du pied de page">
            <Link href="/#apropos">À PROPOS</Link>
            <Link href="/#partenaires">PARTENAIRES</Link>
            <Link href="/projets">PROJETS &amp; COLLABORATIONS</Link>
            <Link href="/mentions-legales">MENTIONS LÉGALES</Link>
          </nav>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <p>Copyright © 2026 - Tous droits réservés</p>
          <p>Développé par RIO DIGITAL LAB</p>
        </div>
      </div>
    </footer>
  );
}