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

  // duplication pour créer une boucle infinie
  const track = [...LOGOS, ...LOGOS];

  return (
    <section className={styles.partners} id="partenaires">

      <div className={styles.container}>

        <h2 className={styles.title}>
          Ils me font confiance
        </h2>

        <p className={styles.subtitle}>
          Groupes industriels, institutions et acteurs majeurs.
        </p>

        <div className={styles.marquee}>

          <div className={styles.track}>

            {track.map((logo, index) => (
              <div className={styles.logo} key={index}>

                <Image
                  src={`/partners/${logo}`}
                  alt={logo}
                  width={180}
                  height={70}
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