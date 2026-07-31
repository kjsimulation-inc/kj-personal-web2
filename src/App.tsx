import { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CareerMilestones } from './components/CareerMilestones';
import { PortfolioCoursesSection } from './components/PortfolioCoursesSection';
import { CoursesSection } from './components/CoursesSection';
import { FairytalesSection } from './components/FairytalesSection';
import { AcademicSection } from './components/AcademicSection';
import { AmbientBackground } from './components/AmbientBackground';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [heroAnimTrigger, setHeroAnimTrigger] = useState(0);

  // Auto-highlight active section in left Sidebar as user scrolls
  useEffect(() => {
    const sectionIds = [
      'hero',
      'about',
      'resume',
      'portfolio-courses',
      'courses',
      'fairytales',
      'academic',
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -45% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleSelectSection = (id: string) => {
    setActiveSection(id);
    if (id === 'hero') {
      setHeroAnimTrigger((prev) => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0d14] text-[#dce3f0] font-sans antialiased selection:bg-[#00d2ff]/30 selection:text-[#00d2ff]">
      {/* Gemini Deep Blue Ambient Background */}
      <AmbientBackground />

      <div className="flex relative z-10">
        {/* Left Vertical Navigation Sidebar */}
        <Sidebar activeSection={activeSection} setActiveSection={handleSelectSection} />

        {/* Main Content Area */}
        <main className="flex-1 lg:ml-72 min-h-screen">
          <Hero animTrigger={heroAnimTrigger} />
          <About />
          <CareerMilestones />
          <PortfolioCoursesSection />
          <CoursesSection />
          <FairytalesSection />
          <AcademicSection />

          {/* Minimalist Footer with only Kwan-Jun Tian © 2026 */}
          <footer className="py-12 border-t border-[#1b2d47] text-center text-[#8ca9c4]">
            <p className="text-sm tracking-wide font-normal">Kwan-Jun Tian © 2026</p>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
