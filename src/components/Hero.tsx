import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-anim-title', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });

      gsap.from('.hero-anim-tag', {
        x: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.2,
        ease: 'power3.out',
        clearProps: 'opacity,transform',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const tags = [
    { title: '教學設計師', desc: 'Instructional Designer' },
    { title: '知識萃取專家', desc: 'Knowledge Extraction Expert' },
    { title: 'AI技術探索者', desc: 'AI Learning Explorer' },
    { title: '學習理論實踐者', desc: 'Learning Theory Practitioner' },
  ];

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12">
      {/* Background Image - 100% Crisp & Vivid Portrait Display */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/hero-bg.jpg"
          alt="田冠鈞博士"
          className="h-full w-full object-cover object-center opacity-100 filter brightness-[1.05] contrast-[1.05] transition-all duration-700"
        />
        {/* Gradient strictly focused on left text area (0% to 55%), leaving right portrait 100% clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070e17] via-[#070e17]/60 via-50% to-transparent to-75%" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070e17] via-transparent to-[#070e17]/20" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-9 space-y-6">
            <h1 className="hero-anim-title font-serif text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              田冠鈞 <span className="text-2xl md:text-3xl font-sans font-normal text-[#8ca9c4]">博士</span>
            </h1>

            <p className="hero-anim-title text-xl md:text-2xl font-light text-white leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              以 <span className="font-semibold text-[#00d2ff]">數位學習</span> 建構未來，
              用 <span className="font-semibold text-[#00ff88]">教學設計</span> 萃取智慧。
            </p>

            {/* 4 Stacked Rows styled in Image 2's Pill Capsule Aesthetic */}
            <div ref={tagsRef} className="mt-8 space-y-3.5 pt-2 max-w-md">
              {tags.map((t, idx) => (
                <div
                  key={idx}
                  className="hero-anim-tag group relative flex items-center justify-between rounded-full bg-[#070e17]/85 border border-[#00d2ff]/40 px-6 py-3.5 backdrop-blur-md transition-all duration-300 hover:border-[#00d2ff] hover:bg-[#00d2ff]/20 hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] hover:translate-x-1 cursor-pointer"
                >
                  <span className="font-medium text-base text-white group-hover:text-[#00d2ff] transition-colors tracking-wide">
                    {t.title}
                  </span>
                  <span className="text-xs text-[#8ca9c4] group-hover:text-white transition-colors font-light">
                    {t.desc}
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
