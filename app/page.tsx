import About from "@/components/home/about/About";
import Contact from "@/components/home/contact/Contact";
import Experience from "@/components/home/experience/Experience";
import Hero from "@/components/home/hero/Hero";
import Projects from "@/components/home/projects/Projects";
import Services from "@/components/home/services/Services";
import Skills from "@/components/home/skills/Skills";
import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/navbar/Navbar";

export default function Home() {
  return (
    <>
      <div id="top" />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
