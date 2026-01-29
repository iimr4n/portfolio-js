import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import RevealProvider from "../components/RevealProvider";

export default function Home() {
  return (
    <RevealProvider>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Footer />
    </RevealProvider>
  );
}
