"use client";

import Image from "next/image";
import styles from "@/styles/partners.module.css";

const LOGOS = [
  "actenium.png",
  "adeo.png",
  "aluminium.png",
  "arcelor.png",
  "cma-cgm.png",
  "dalkia.png",
  "decathlon.png",
  "dunkerque.png",
  "edf.png",
  "eiffage.png",
  "jura.png",
  "leroymerlin.png",
  "maxresdefault.png",
  "port.png",
  "tadao.png",
  "verkor.png",
  "vinci.png",
  "eurovia.png",
  "ziegler.png",
];

export default function Partners() {
  const track = [...LOGOS, ...LOGOS];

  return (
    <section className={styles.partners} id="partenaires">
      <div className={styles.container}>
        <span className="domains-kicker">Partenaires</span>

        <div className={styles.marquee}>
          <div className={styles.track}>
            {track.map((logo, index) => (
              <div className={styles.logo} key={index}>
                <Image
                  src={`/partners/${logo}`}
                  alt={logo}
                  width={160}
                  height={60}
                  className={styles.img}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
