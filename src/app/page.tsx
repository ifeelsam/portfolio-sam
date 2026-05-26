import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Palette } from "@/components/palette";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Palette />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
