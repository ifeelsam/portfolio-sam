import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Proof } from "@/components/proof";
import { SiteShell } from "@/components/site-shell";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <Proof />
      <Work />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </SiteShell>
  );
}
