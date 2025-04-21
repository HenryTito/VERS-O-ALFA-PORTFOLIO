import Image from "next/image";
import './globals.css';
import Header from "./components/header"
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Projects from "./components/Projects";
import Projetos from "./components/Projetos";

export default function Home() {
  return (
    <main className="main">
    
    <Header />
    <div className="content">
    <Hero />
    <AboutSection />
    <Projetos />
  
    </div>
    </main>
    
  );
}
