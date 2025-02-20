import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Gallery2 from './components/Gallery2';
import Colors from './components/Colors';
import Map from './components/Map';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef(null);
  const sections = [
    { id: 'hero', label: 'Home', component: Hero },
    { id: 'features', label: 'Features', component: Features },
    { id: 'gallery', label: 'Gallery', component: Gallery },
    { id: 'gallery2', label: 'Showcase', component: Gallery2 },
    { id: 'colors', label: 'Colors', component: Colors },
    { id: 'map', label: 'Locations', component: Map },
    { id: 'testimonials', label: 'Reviews', component: Testimonials }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollPosition = containerRef.current.scrollTop;
      const sectionHeight = window.innerHeight;
      const newActiveSection = Math.min(
        Math.floor((scrollPosition + (sectionHeight / 2)) / sectionHeight),
        sections.length - 1
      );
      
      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [activeSection, sections.length]);

  const scrollToSection = (index) => {
    const container = containerRef.current;
    if (!container) return;
    const sectionHeight = window.innerHeight;
    container.scrollTo({
      top: index * sectionHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <Header activeSection={activeSection} sections={sections} onNavigate={scrollToSection} />
      
      <div 
        ref={containerRef} 
        className="scroll-container h-screen overflow-y-auto"
        style={{
          scrollSnapType: 'y mandatory',
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {sections.map((section, index) => {
          const SectionComponent = section.component;
          return (
            <section 
              key={section.id}
              id={section.id}
              className="section-container snap-start min-h-screen w-full flex items-center justify-center"
              style={{ scrollSnapAlign: 'start' }}
            >
              <SectionComponent />
            </section>
          );
        })}
        
        {/* Last section with both content and footer */}
        <section 
          className="snap-start min-h-screen w-full flex flex-col"
          style={{ scrollSnapAlign: 'start' }}
        >
          <div className="flex-grow flex items-center justify-center">

          </div>
          <div className="w-full bg-gray-900 text-white">
            <Footer />
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;