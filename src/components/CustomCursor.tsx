import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button'))) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Outer Cyan Glow Orb */}
      <div
        className="pointer-events-none fixed z-50 rounded-full transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${position.x - (isHovered ? 30 : 20)}px, ${position.y - (isHovered ? 30 : 20)}px) scale(${isHovered ? 1.5 : 1})`,
          width: `${isHovered ? 60 : 40}px`,
          height: `${isHovered ? 60 : 40}px`,
          background: 'radial-gradient(circle, rgba(0, 210, 255, 0.4) 0%, rgba(0, 210, 255, 0) 70%)',
          filter: 'blur(4px)',
        }}
      />
      {/* Inner Dot */}
      <div
        className="pointer-events-none fixed z-50 rounded-full bg-[#00d2ff] transition-all duration-75 ease-out shadow-[0_0_10px_#00d2ff]"
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px) scale(${isHovered ? 0.5 : 1})`,
          width: '8px',
          height: '8px',
        }}
      />
    </>
  );
};
