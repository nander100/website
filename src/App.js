import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  
  const handleNavClick = (section) => {
    setActiveSection(section);
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <Navigation activeSection={activeSection} onNavClick={handleNavClick} />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <About />
        <Experience />
        <Projects />
        <Publications />
        <Education />
        <Skills />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;