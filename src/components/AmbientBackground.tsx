import React from 'react';

export const AmbientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#0b0d14]">
      {/* Primary Gemini-style Center Deep Blue Radial Halo (Intensity reduced by 20%) */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[125vw] h-[125vh] max-w-[1450px] max-h-[1450px] rounded-full animate-orb-1"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(30, 75, 150, 0.46) 0%, rgba(18, 45, 95, 0.28) 30%, rgba(12, 25, 55, 0.12) 55%, transparent 75%)',
          filter: 'blur(55px)',
          mixBlendMode: 'screen',
        }}
      />

      {/* Secondary Dynamic Deep Indigo / Cyan Accent Halo (Intensity reduced by 20%) */}
      <div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[85vw] h-[85vh] max-w-[950px] max-h-[950px] rounded-full animate-orb-2 opacity-70"
        style={{
          background: 'radial-gradient(circle at 50% 45%, rgba(0, 140, 255, 0.22) 0%, rgba(20, 50, 105, 0.14) 45%, transparent 75%)',
          filter: 'blur(70px)',
          mixBlendMode: 'screen',
        }}
      />
    </div>
  );
};
