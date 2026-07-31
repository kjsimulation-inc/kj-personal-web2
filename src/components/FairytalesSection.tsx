import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, BookOpen, Droplets, Bug, Sparkles, Trees, Gem, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { fairytalesData } from '../data/fairytalesData';
import type { FairytaleItem } from '../data/fairytalesData';

export const FairytalesSection: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<FairytaleItem | null>(null);

  // Keyboard navigation & lock body scroll when modal is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedStory) return;

      if (e.key === 'Escape') {
        setSelectedStory(null);
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    if (selectedStory) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedStory]);

  const currentIndex = selectedStory ? fairytalesData.findIndex((item) => item.id === selectedStory.id) : -1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedStory(fairytalesData[currentIndex - 1]);
    } else {
      setSelectedStory(fairytalesData[fairytalesData.length - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < fairytalesData.length - 1) {
      setSelectedStory(fairytalesData[currentIndex + 1]);
    } else {
      setSelectedStory(fairytalesData[0]);
    }
  };

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case 'water':
        return <Droplets size={20} />;
      case 'bug':
        return <Bug size={20} />;
      case 'lightbulb':
        return <Sparkles size={20} />;
      case 'tree':
        return <Trees size={20} />;
      case 'gem':
        return <Gem size={20} />;
      default:
        return <Book size={20} />;
    }
  };

  return (
    <section id="fairytales" className="py-24 relative container mx-auto px-6 max-w-6xl">
      {/* Section Header */}
      <div className="text-center max-w-4xl mx-auto mb-12 space-y-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">童話作品集</h2>
        <div className="h-1 w-20 bg-[#00ff88] mx-auto rounded-full shadow-[0_0_12px_#00ff88]" />
      </div>

      {/* Glassmorphic Manifesto Card */}
      <div className="glass-card max-w-4xl mx-auto p-8 md:p-10 rounded-2xl border border-[#00ff88]/25 bg-[#0c1726]/65 backdrop-blur-md shadow-[0_0_30px_rgba(0,255,136,0.08)] mb-14 text-left space-y-4">
        <div className="border-l-4 border-[#00ff88] pl-4 py-1.5 text-[#00ff88] font-serif text-lg font-semibold italic bg-[#00ff88]/5 rounded-r-lg">
          「內在的我，一直是個不願長大的孩子～單純、誠懇、倔強、好奇、想飛...」
        </div>
        <p className="text-base text-[#dce3f0] font-light leading-relaxed md:leading-loose">
          大學畢業後，在機緣巧合下，我曾寫過幾篇童話，贏得一些獎項。雖然童話之路並沒有持續下去，但這意外之喜，卻讓我對於「挑戰未知領域」保持樂觀！我相信，多年之後我在職場勇於創作各種跨領域教材，就是奠基於當年那幾篇小小童話！所以我決定把這些青澀作品放在這裡，勉勵自己莫望初衷！
        </p>
        <p className="text-base text-[#dce3f0] font-light leading-relaxed md:leading-loose">
          雖然外在世界迫使我必須長大，但我永遠珍惜與呵護，內心深處的那顆赤子之心...
        </p>
      </div>

      {/* Fairytale Links Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fairytalesData.map((ft) => (
          <button
            key={ft.id}
            onClick={() => setSelectedStory(ft)}
            className="glass-card p-6 rounded-2xl group flex items-center justify-between text-left transition-all duration-300 hover:border-[#00ff88] hover:shadow-[0_0_20px_rgba(0,255,136,0.2)] hover:-translate-y-1 cursor-pointer w-full"
          >
            <div className="flex items-center gap-4 min-w-0 pr-2">
              <div className="rounded-xl bg-[#00ff88]/10 p-3 text-[#00ff88] group-hover:scale-110 transition-transform flex-shrink-0">
                {renderIcon(ft.icon)}
              </div>
              <h4 className="font-serif text-base font-bold text-white group-hover:text-[#00ff88] transition-colors truncate">
                {ft.title}
              </h4>
            </div>
            <BookOpen size={18} className="text-[#8ca9c4] group-hover:text-[#00ff88] transition-colors flex-shrink-0" />
          </button>
        ))}
      </div>

      {/* Glassmorphic Story Modal */}
      <AnimatePresence>
        {selectedStory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStory(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="glass-card relative border border-[#00ff88]/30 bg-[#0c1726]/95 backdrop-blur-xl max-w-3xl w-full max-h-[85vh] flex flex-col rounded-2xl shadow-[0_0_50px_rgba(0,255,136,0.15)] z-10 overflow-hidden"
            >
              {/* Modal Header */}
              <div className="p-6 md:p-8 border-b border-[#00ff88]/15 flex items-start justify-between bg-[#00ff88]/5">
                <div className="space-y-2 pr-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ff88]/10 text-[#00ff88] text-xs font-mono font-medium">
                    {selectedStory.publishDate}
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-white tracking-wide">
                    {selectedStory.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedStory(null)}
                  className="rounded-xl p-2 text-[#8ca9c4] hover:text-white hover:bg-white/10 transition-colors cursor-pointer flex-shrink-0"
                  aria-label="關閉童話內容"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Body - Scrollable Story Text */}
              <div className="p-6 md:p-10 overflow-y-auto space-y-6 custom-scrollbar text-left flex-1">
                {selectedStory.paragraphs.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-[#dce3f0] text-base md:text-lg font-light leading-relaxed md:leading-loose tracking-wide hover:text-white transition-colors"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Modal Footer - Navigation Bar */}
              <div className="p-4 md:px-8 border-t border-[#00ff88]/15 bg-[#070e17]/90 flex items-center justify-between">
                <button
                  onClick={handlePrev}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-[#8ca9c4] hover:text-[#00ff88] hover:bg-[#00ff88]/10 transition-all cursor-pointer"
                >
                  <ChevronLeft size={18} />
                  <span>上一篇</span>
                </button>

                <div className="text-xs font-mono text-[#8ca9c4]">
                  {currentIndex + 1} / {fairytalesData.length}
                </div>

                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-[#8ca9c4] hover:text-[#00ff88] hover:bg-[#00ff88]/10 transition-all cursor-pointer"
                >
                  <span>下一篇</span>
                  <ChevronRight size={18} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
