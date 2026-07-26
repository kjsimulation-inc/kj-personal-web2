import React, { useState } from 'react';
import { Home, User, Briefcase, LayoutGrid, Video, BookOpen, GraduationCap, Menu, X } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (id: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: '首頁', icon: Home },
    { id: 'about', label: '關於田冠鈞', icon: User },
    { id: 'resume', label: '職涯與學歷', icon: Briefcase },
    { id: 'portfolio-courses', label: '數位課程作品集', icon: LayoutGrid },
    { id: 'courses', label: 'Youtube作品集', icon: Video },
    { id: 'fairytales', label: '童話作品集', icon: BookOpen },
    { id: 'academic', label: '學術著作與演講', icon: GraduationCap },
  ];

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-5 right-5 z-50 p-3 rounded-full bg-[#0c1726]/90 border border-[#00d2ff]/40 text-[#00d2ff] backdrop-blur-md shadow-[0_0_20px_rgba(0,210,255,0.3)]"
        aria-label="Toggle Navigation"
      >
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile Backdrop Overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="lg:hidden fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity"
        />
      )}

      {/* Vertical Sidebar Navigation Container */}
      <aside
        className={`fixed top-0 left-0 bottom-0 z-40 w-72 bg-[#070e17]/95 border-r border-[#1b2d47] p-6 flex flex-col justify-between backdrop-blur-xl transition-transform duration-300 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="space-y-8">
          {/* Profile Avatar Header */}
          <div className="flex flex-col items-center text-center pt-4">
            <div className="relative group cursor-pointer" onClick={() => scrollTo('hero')}>
              <div className="h-24 w-24 rounded-full p-1 bg-gradient-to-tr from-[#00d2ff] to-[#00ff88] shadow-[0_0_25px_rgba(0,210,255,0.4)] group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/img/my-profile-img2.jpg"
                  alt="田冠鈞博士"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-white/20 pointer-events-none" />
            </div>

            <h1 className="mt-4 font-serif text-xl font-bold text-white tracking-wide">
              田冠鈞
            </h1>
            <div className="mt-1.5 h-0.5 w-8 bg-[#00d2ff] rounded-full" />
          </div>

          {/* Navigation Links List */}
          <nav className="space-y-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`group flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-xs md:text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-[#00d2ff]/15 text-[#00d2ff] border border-[#00d2ff]/40 shadow-[0_0_15px_rgba(0,210,255,0.2)]'
                      : 'text-[#8ca9c4] hover:bg-[#112035]/60 hover:text-[#00d2ff]'
                  }`}
                >
                  <Icon
                    size={17}
                    className={`transition-transform duration-300 group-hover:scale-110 ${
                      isActive ? 'text-[#00d2ff] animate-pulse' : 'text-[#8ca9c4] group-hover:text-[#00d2ff]'
                    }`}
                  />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
};
