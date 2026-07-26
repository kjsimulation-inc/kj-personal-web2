import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface HeroProps {
  animTrigger?: number;
}

export const Hero: React.FC<HeroProps> = ({ animTrigger = 0 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 1. Title ("田冠鈞 博士") - GSAP Blur & Fade In
      tl.from('.hero-anim-name', {
        y: 40,
        opacity: 0,
        filter: 'blur(12px)',
        duration: 1.1,
      })
      // 2. 4 Chinese text lines gradually revealing in sequence
      .from('.hero-anim-tag', {
        x: -30,
        opacity: 0,
        filter: 'blur(8px)',
        duration: 0.85,
        stagger: 0.18,
        clearProps: 'transform,opacity,filter',
      }, '-=0.5');
  }, containerRef);

    return () => ctx.revert();
  }, [animTrigger]);

  const tags = [
    '教學設計師',
    '知識萃取專家',
    'AI技術探索者',
    '學習理論實踐者',
  ];

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="./img/hero-bg.jpg"
          alt="田冠鈞博士"
          className="h-full w-full object-cover object-center opacity-100 filter brightness-[1.05] contrast-[1.05] transition-all duration-700"
        />
        {/* Solid Mask Overlay (50% opacity, no gradient) */}
        <div className="absolute inset-0 bg-[#070e17]/50" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-9 space-y-6">
            <h1 className="hero-anim-name font-serif text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              田冠鈞 <span className="text-2xl md:text-3xl font-sans font-normal text-[#8ca9c4]">博士</span>
            </h1>



            {/* 4 Lines of Pure Text (No buttons, No English) */}
            <div ref={tagsRef} className="mt-8 space-y-4 pt-2 max-w-md">
              {tags.map((title, idx) => (
                <div
                  key={idx}
                  className="hero-anim-tag flex items-center space-x-3.5 text-xl md:text-2xl font-medium text-white/95 tracking-wide group"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00d2ff] shadow-[0_0_10px_#00d2ff] opacity-80 group-hover:opacity-100 group-hover:scale-125 group-hover:bg-[#00ff88] group-hover:shadow-[0_0_12px_#00ff88] transition-all duration-300" />
                  <span className="group-hover:text-[#00d2ff] transition-colors duration-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                    {title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

