import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Stats from "@/components/Stats"
import Partners from "@/components/Partners";
import ProjectsPreview from "@/components/ProjectsPreview";
import Domains from "@/components/Domains";
import International from "@/components/International";

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