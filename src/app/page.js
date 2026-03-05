import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Stats from "@/components/Stats"
import Partners from "@/components/Partners";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <Stats />
      <Partners />
    </main>
  );
}