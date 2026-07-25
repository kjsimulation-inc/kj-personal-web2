import React, { useState } from 'react';
import { Play, ExternalLink, X, ChevronDown, ChevronUp } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  youtubeId: string;
  url: string;
  desc: string;
}

export const CoursesSection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [showAllCourses, setShowAllCourses] = useState(false);

  const courses: Course[] = [
    {
      id: '0A-vjT-9vrI',
      title: '0-1_課程緣起～企業主管的感慨',
      youtubeId: '0A-vjT-9vrI',
      url: 'https://youtu.be/0A-vjT-9vrI',
      desc: '這段影片說明課程的設計緣起，探討職場新人普遍面臨的適應挑戰。',
    },
    {
      id: 'VUE7ZYlPe9k',
      title: '0-2_課程內容及規劃',
      youtubeId: 'VUE7ZYlPe9k',
      url: 'https://youtu.be/VUE7ZYlPe9k',
      desc: '講解全套職場能力課程的結構、模組劃分與學習脈絡。',
    },
    {
      id: 'tBsF2R2YWKo',
      title: '1-1_職場是價值交換的場所',
      youtubeId: 'tBsF2R2YWKo',
      url: 'https://youtu.be/tBsF2R2YWKo',
      desc: '提出「價值交換」關鍵論述，奠定整套職場課程的核心哲學。',
    },
    {
      id: '98962_nMb6M',
      title: '1-2_價值交換的六個延伸觀點',
      youtubeId: '98962_nMb6M',
      url: 'https://youtu.be/98962_nMb6M',
      desc: '闡述價值交換延伸原則，培養雇主需要的能力以換取嚮往的報酬。',
    },
    {
      id: 'eeBN84FadAA',
      title: '1-3_把自己當成一人公司',
      youtubeId: 'eeBN84FadAA',
      url: 'https://youtu.be/eeBN84FadAA',
      desc: '鼓勵學員以 CEO 思維經營自己，累積個人資產與創業家精神。',
    },
    {
      id: 'kyVTKoJlBIA',
      title: '1-4_如何達成最有利的價值交換',
      youtubeId: 'kyVTKoJlBIA',
      url: 'https://youtu.be/kyVTKoJlBIA',
      desc: '透過認識雇主、認識自己、找出最有利交換與滾雪球策略，達成能力與報酬雙贏。',
    },
    {
      id: 'H6DUMS4WilI',
      title: '1-5_職場提供的報酬有哪些',
      youtubeId: 'H6DUMS4WilI',
      url: 'https://youtu.be/H6DUMS4WilI',
      desc: '以馬斯洛需求階層剖析職場多元報酬，引導新人辨認內在渴望。',
    },
    {
      id: 'yUM3Nnalgf0',
      title: '1-6_獲利是企業的天職與美德',
      youtubeId: 'yUM3Nnalgf0',
      url: 'https://youtu.be/yUM3Nnalgf0',
      desc: '破除刻板印象，理解企業獲利正向價值，發展幫助企業獲利的核心能力。',
    },
    {
      id: 'oKid72itb3M',
      title: '2-1_觀念先改變，能力才能提昇',
      youtubeId: 'oKid72itb3M',
      url: 'https://youtu.be/oKid72itb3M',
      desc: '強調個人心態與信念對能力發展的深遠影響，建立正確職場成功信念。',
    },
    {
      id: 'HI2DKaJYekA',
      title: '2-2_成功信念一：企業是更好的學校',
      youtubeId: 'HI2DKaJYekA',
      url: 'https://youtu.be/HI2DKaJYekA',
      desc: '把職場當成實戰學校，保持終身學習熱情，讓能力歷久彌新。',
    },
    {
      id: 'x6mHYerfrOA',
      title: '2-3_成功信念二：你是來服務客戶，不是被客戶服務',
      youtubeId: 'x6mHYerfrOA',
      url: 'https://youtu.be/x6mHYerfrOA',
      desc: '放下學校「被服務」心態，轉化為提供卓越客戶價值的高手。',
    },
    {
      id: 'HHUKxNb9kyY',
      title: '2-4_成功信念三：放下自尊心',
      youtubeId: 'HHUKxNb9kyY',
      url: 'https://youtu.be/HHUKxNb9kyY',
      desc: '放下過度自尊與玻璃心，虛心求教、勇於認錯，快速突破成長瓶頸。',
    },
    {
      id: 'T4Iyd10WHVA',
      title: '2-5_成功信念四：追求成果的卓越，而不是條件的公平',
      youtubeId: 'T4Iyd10WHVA',
      url: 'https://youtu.be/T4Iyd10WHVA',
      desc: '擺脫條件比較的困境，專注在展現卓越成果與自身實力。',
    },
    {
      id: 'v8e-J6WRpi4',
      title: '2-6_成功信念五：接受無常 擁抱變化',
      youtubeId: 'v8e-J6WRpi4',
      url: 'https://youtu.be/v8e-J6WRpi4',
      desc: '接受環境快速變化的本質，保持適應彈性，順應局勢創新突破。',
    },
    {
      id: 'qVGz8Fa5gUU',
      title: '3-1_認識職場所需能力，是新人的必修課',
      youtubeId: 'qVGz8Fa5gUU',
      url: 'https://youtu.be/qVGz8Fa5gUU',
      desc: '全面性剖析職場職能地圖，為自己打造可長可久的職涯發展藍圖。',
    },
    {
      id: 'FiAeal0Ct5I',
      title: '3-2_職能的起源與影響',
      youtubeId: 'FiAeal0Ct5I',
      url: 'https://youtu.be/FiAeal0Ct5I',
      desc: '探討 1970 年代美國外交選才困境與職能起源，彌補學用落差。',
    },
    {
      id: 'aAMOnZgl-Lg',
      title: '3-3_職場能力有哪些分類：(一)Spencer冰山模型',
      youtubeId: 'aAMOnZgl-Lg',
      url: 'https://youtu.be/aAMOnZgl-Lg',
      desc: '依據冰山模型剖析知識、技能、自我概念、特質與動機五大層次。',
    },
    {
      id: 'rEc1pBA9ia0',
      title: '3-4_職場能力有哪些分類：(二)企業常用模型',
      youtubeId: 'rEc1pBA9ia0',
      url: 'https://youtu.be/rEc1pBA9ia0',
      desc: '解析專業職能、核心職能與管理職能三大實務模型之應用。',
    },
    {
      id: 'IKZMpQsSyOc',
      title: '3-5_發展出讓企業獲利的能力',
      youtubeId: 'IKZMpQsSyOc',
      url: 'https://youtu.be/IKZMpQsSyOc',
      desc: '套用波特價值鏈模型，協助企業提高收入與降低成本，成為關鍵人才。',
    },
  ];

  const visibleCourses = showAllCourses ? courses : courses.slice(0, 6);

  return (
    <section id="courses" className="py-24 relative container mx-auto px-6 max-w-6xl">
      {/* Section Header */}
      <div className="text-center max-w-4xl mx-auto mb-12 space-y-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">Youtube作品集</h2>
        <div className="h-1 w-20 bg-[#00d2ff] mx-auto rounded-full shadow-[0_0_12px_#00d2ff]" />
      </div>

      {/* Glassmorphic Manifesto Card */}
      <div className="glass-card max-w-4xl mx-auto p-8 md:p-10 rounded-2xl border border-[#00d2ff]/25 bg-[#0c1726]/65 backdrop-blur-md shadow-[0_0_30px_rgba(0,210,255,0.08)] mb-14 text-left space-y-4">
        <div className="border-l-4 border-[#00d2ff] pl-4 py-1.5 text-[#00d2ff] font-serif text-lg font-semibold italic bg-[#00d2ff]/5 rounded-r-lg">
          「感謝當初歷經親自錄影之苦，才培養出夠高的眼界看見 AI 之美！」
        </div>
        <p className="text-base text-[#dce3f0] font-light leading-relaxed md:leading-loose">
          我在 2023 年底，曾錄製一系列的 Youtube 影片，想傳授應屆畢業生一些職場能力！但這計畫尚未完成，就因 AI 的興起而中斷了～因為我發現，AI 將會大幅改變傳統錄影的工作流程！未來我只要負責撰稿，就可讓 AI 自動生成我的聲音、動作、表情～再也不用忍受上妝、背稿、咬字之苦了…
        </p>
        <p className="text-base text-[#dce3f0] font-light leading-relaxed md:leading-loose">
          感受到 AI 的魅力，我決定全心投入 AI 的研發，最後不僅大幅提昇公司的生產力與創造力，還因此接獲許多大廠訂單…結果，我就沒空再去完成當初這套課程了，呵呵！回首再看這些影片，我心中卻充滿感謝～感謝當初老天讓我歷經錄影之苦，才培養出夠高的眼界，能看到到 AI 之美，也才有後續創新突破的樂趣啊！
        </p>
      </div>

      {/* Grid Display (First 6 by default) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleCourses.map((c) => (
          <div
            key={c.id}
            className="glass-card rounded-2xl overflow-hidden group cursor-pointer flex flex-col justify-between"
            onClick={() => setSelectedVideo(c.youtubeId)}
          >
            <div className="relative aspect-video bg-[#050b14] overflow-hidden">
              <img
                src={`https://img.youtube.com/vi/${c.youtubeId}/hqdefault.jpg`}
                alt={c.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-85 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1726] via-transparent to-transparent opacity-80" />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-full bg-[#00d2ff] p-4 text-[#030f1e] shadow-[0_0_20px_#00d2ff] transition-transform duration-300 group-hover:scale-125">
                  <Play size={24} className="fill-current ml-0.5" />
                </div>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-serif text-base font-bold text-white group-hover:text-[#00d2ff] transition-colors leading-snug">
                    {c.title}
                  </h4>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-[#8ca9c4] hover:text-[#00d2ff] p-1.5 rounded-lg hover:bg-[#00d2ff]/10 transition-colors flex-shrink-0"
                    title="在 YouTube 開啟"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
                <p className="mt-2 text-xs text-[#dce3f0] font-light leading-relaxed line-clamp-2">
                  {c.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Expand / Collapse Button */}
      {courses.length > 6 && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAllCourses(!showAllCourses)}
            className="w-full max-w-md mx-auto py-3.5 rounded-xl bg-[#0c1726] border border-[#00d2ff]/40 text-[#00d2ff] font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#00d2ff]/15 hover:border-[#00d2ff] transition-all duration-300 shadow-[0_0_15px_rgba(0,210,255,0.15)]"
          >
            {showAllCourses ? (
              <><span>收折影音課程</span><ChevronUp size={18} /></>
            ) : (
              <><span>顯示全部 {courses.length} 支影音課程</span><ChevronDown size={18} /></>
            )}
          </button>
        </div>
      )}

      {/* Video Modal Lightbox */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl rounded-2xl bg-[#0c1726] border border-[#00d2ff]/40 p-2 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 rounded-full bg-[#070e17] p-2 text-white hover:text-[#00d2ff]"
            >
              <X size={20} />
            </button>
            <div className="aspect-video w-full rounded-xl overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="Course Video"
                className="w-full h-full border-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
