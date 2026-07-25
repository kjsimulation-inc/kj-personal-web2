import React from 'react';
import { Book, ExternalLink } from 'lucide-react';

interface Fairytale {
  id: number;
  title: string;
  url: string;
  icon: string;
}

export const FairytalesSection: React.FC = () => {
  const fairytales: Fairytale[] = [
    { id: 1, title: '影子的影子在哪裡', url: 'https://sites.google.com/a/kjsimulation.com/kjweb/fairy_tale/fairy_tale_1?authuser=0', icon: 'book' },
    { id: 2, title: '河流的故鄉', url: 'https://sites.google.com/a/kjsimulation.com/kjweb/fairy_tale/fairy_tale_2?authuser=0', icon: 'water' },
    { id: 3, title: '森林裡的昆蟲運動大會', url: 'https://sites.google.com/a/kjsimulation.com/kjweb/fairy_tale/fairy_tale_3?authuser=0', icon: 'bug' },
    { id: 4, title: '螢火蟲的故事', url: 'https://sites.google.com/a/kjsimulation.com/kjweb/fairy_tale/fairy_tale_4?authuser=0', icon: 'lightbulb' },
    { id: 5, title: '小竟與老榕樹', url: 'https://sites.google.com/a/kjsimulation.com/kjweb/fairy_tale/fairy_tale_5?authuser=0', icon: 'tree' },
    { id: 7, title: '小竟與石頭', url: 'https://sites.google.com/a/kjsimulation.com/kjweb/fairy_tale/fairy_tale_7?authuser=0', icon: 'gem' },
    { id: 8, title: '森林裡的貓與樹', url: 'https://sites.google.com/a/kjsimulation.com/kjweb/fairy_tale/fairy_tale_8?authuser=0', icon: 'tree' },
    { id: 9, title: '螢火蟲的小燈泡是做什麼的呀?', url: 'https://sites.google.com/a/kjsimulation.com/kjweb/fairy_tale/fairy_tale_9?authuser=0', icon: 'lightbulb' },
    { id: 10, title: '不結網的小蜘蛛', url: 'https://sites.google.com/a/kjsimulation.com/kjweb/fairy_tale/fairy_tale_10?authuser=0', icon: 'tree' },
    { id: 11, title: '小青蛙', url: 'https://sites.google.com/a/kjsimulation.com/kjweb/fairy_tale/fairy_tale_11?authuser=0', icon: 'water' },
    { id: 6, title: '寂寞的孩子和更寂寞的樹∼談「小竟與老榕樹」', url: 'https://sites.google.com/a/kjsimulation.com/kjweb/fairy_tale/fairy_tale_6?authuser=0', icon: 'tree' },
  ];

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
          大學畢業後，在機緣巧合下，我曾寫過幾篇童話，贏得一些獎項。雖然童話之路並沒有持續下去，但這意外之喜卻讓我更有勇氣，去挑戰未知領域！我相信多年之後，我勇於創作各種領域的數位課程，就是當年那幾篇小小童話所帶給我的信心吧！所以我決定把當年的青澀作品放在這裡，當作對自己的鼓勵！
        </p>
        <p className="text-base text-[#dce3f0] font-light leading-relaxed md:leading-loose">
          雖然外在世界迫使我必須長大，但我永遠珍惜與呵護，內心深處的那顆赤子之心...
        </p>
      </div>

      {/* Fairytale Links Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fairytales.map((ft) => (
          <a
            key={ft.id}
            href={ft.url}
            target="_blank"
            rel="noreferrer"
            className="glass-card p-6 rounded-2xl group flex items-center justify-between transition-all duration-300 hover:border-[#00ff88] hover:shadow-[0_0_20px_rgba(0,255,136,0.2)] hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-[#00ff88]/10 p-3 text-[#00ff88] group-hover:scale-110 transition-transform">
                <Book size={20} />
              </div>
              <h4 className="font-serif text-base font-bold text-white group-hover:text-[#00ff88] transition-colors">
                {ft.title}
              </h4>
            </div>
            <ExternalLink size={18} className="text-[#8ca9c4] group-hover:text-[#00ff88] transition-colors flex-shrink-0" />
          </a>
        ))}
      </div>
    </section>
  );
};
