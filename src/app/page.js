import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Stats from "@/components/Stats";
import Partners from "@/components/Partners";
import ProjectsPreview from "@/components/ProjectsPreview";
import Domains from "@/components/Domains";
import International from "@/components/International";

export const metadata = {
  title: "Mohamed Henni Production | Vidéaste Dunkerque",
  description:
    "Vidéaste professionnel basé à Dunkerque. Spécialisé en productions vidéo pour entreprises, industrie, événementiel et mariages. Réalisations pour Total, DFDS, Aluminium Dunkerque et plus.",
  alternates: {
    canonical: "https://mohamed-henni-production.vercel.app",
  },
  openGraph: {
    title: "Mohamed Henni Production | Vidéaste Dunkerque",
    description:
      "Vidéaste professionnel basé à Dunkerque. Productions vidéo entreprise, industrie, événementiel, mariage.",
    url: "https://mohamed-henni-production.vercel.app",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mohamed Henni Production – Vidéaste Dunkerque",
      },
    ],
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <Domains />
      <Stats />
      <Partners />
      <ProjectsPreview />
      <International />
    </main>
  );
}