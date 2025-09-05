import Header from "../components/Header";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import "./globals.css";

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}
