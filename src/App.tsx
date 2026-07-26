import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CareerMilestones } from './components/CareerMilestones';
import { PortfolioCoursesSection } from './components/PortfolioCoursesSection';
import { CoursesSection } from './components/CoursesSection';
import { FairytalesSection } from './components/FairytalesSection';
import { AcademicSection } from './components/AcademicSection';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [heroAnimTrigger, setHeroAnimTrigger] = useState(0);

  const handleSelectSection = (id: string) => {
    setActiveSection(id);
    if (id === 'hero') {
      setHeroAnimTrigger((prev) => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#070e17] text-[#dce3f0] font-sans antialiased selection:bg-[#00d2ff]/30 selection:text-[#00d2ff]">
      {/* Background Subtle Tech Ambient Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#00d2ff]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-10 w-[500px] h-[500px] bg-[#00ff88]/5 rounded-full blur-3xl" />
      </div>

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
