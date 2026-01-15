import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen text-slate-200 font-sans selection:bg-primary/30 selection:text-sky-100 relative isolate">
      {/* Global Background Layer */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        {/* Base dark layer */}
        <div className="absolute inset-0 bg-slate-950 z-0"></div>
        
        {/* Geometric Patterns */}
        <div className="absolute inset-0 bg-grid-pattern z-20 mask-image-gradient"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950 z-30"></div>
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}

export default App;