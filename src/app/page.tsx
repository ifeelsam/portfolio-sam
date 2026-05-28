import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { FeaturedProjects } from "@/components/featured-projects";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { SiteShell } from "@/components/site-shell";

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <Experience />
      <FeaturedProjects />
      <About />
      <Contact />
      <Footer />
    </SiteShell>
  );
}
