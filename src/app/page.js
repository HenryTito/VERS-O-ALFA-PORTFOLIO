import Image from "next/image";
import './globals.css';
import Header from "./components/header"
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="main">
    <div className="layout-principal">
    <Header />
    <div className="content">
    <Hero />
    <AboutSection />
    <Projects />
  
    </div>
    </div>
    </main>
    
  );
}
