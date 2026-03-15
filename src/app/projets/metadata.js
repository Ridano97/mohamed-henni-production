// src/app/projets/metadata.js
// ⚠️  Ce fichier est SÉPARÉ de page.jsx car une page "use client"
//     ne peut pas exporter metadata directement.
//     Next.js détecte automatiquement ce fichier pour la page /projets.

export const metadata = {
  title: "Projets & Réalisations | Vidéaste Dunkerque",
  description:
    "Découvrez les réalisations vidéo de Mohamed Henni Production : films d'entreprise, vidéos industrielles pour Total et DFDS, événementiel, mariages et bien plus. Vidéaste basé à Dunkerque.",
  alternates: {
    canonical: "https://mohamed-henni-production.vercel.app/projets",
  },
  openGraph: {
    title: "Projets & Réalisations | Mohamed Henni Production",
    description:
      "Films d'entreprise, vidéos industrielles, événementiel, mariages. Découvrez toutes les réalisations de Mohamed Henni, vidéaste à Dunkerque.",
    url: "https://mohamed-henni-production.vercel.app/projets",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Projets vidéo – Mohamed Henni Production Dunkerque",
      },
    ],
  },
};