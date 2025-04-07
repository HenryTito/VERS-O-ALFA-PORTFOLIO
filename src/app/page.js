import Image from "next/image";
import Hero from "./components/Hero"
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection"

export default function Home() {
  return( 
    <main className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <div className='container mt-10 mx-auto px-12 py-4'>
    <Hero />
    <AboutSection className='container mt-24' />
    
      </div>
    </main>
  )
  
}
