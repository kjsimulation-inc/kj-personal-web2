import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

interface PortfolioCourseItem {
  id: string;
  title: string;
  category: string;
  img: string;
  url: string;
  desc: string;
}

export const PortfolioCoursesSection: React.FC = () => {
  const [showAllPortfolio, setShowAllPortfolio] = useState(false);

  const portfolioItems: PortfolioCourseItem[] = [
    {
      id: 'cl-1',
      title: '主動學習',
      category: '核心職能',
      img: '/img/CL-1-compressor.jpg',
      url: 'https://www.kjsimulation.com/?avada_portfolio=20398',
      desc: '鼓勵學員進入職場後，放下學校條件式公平信念，改採職場成果式公平，專注提昇自身能力，化解不公平，踏上成功之路！',
    },
    {
      id: 'pm-1',
      title: '專案管理技巧',
      category: '核心職能',
      img: '/img/PM-1-compressor.jpg',
      url: 'https://www.kjsimulation.com/?avada_portfolio=18842',
      desc: '掌握目標拆解、時程管控、風險預防與資源協調的核心原則，讓專案精準交付。',
    },
    {
      id: 'tw-1',
      title: '團隊合作',
      category: '核心職能',
      img: '/img/TW_02-compressor.jpg',
      url: 'https://www.kjsimulation.com/?avada_portfolio=18800',
      desc: '強化跨部門協作、溝通默契與團隊信任，建立以高績效為導向的黃金陣容。',
    },
    {
      id: 'mbo-1',
      title: '工作目標設定',
      category: '核心職能',
      img: '/img/MBO-1-compressor.jpg',
      url: 'https://www.kjsimulation.com/?avada_portfolio=130',
      desc: '運用 SMART 原則與 KPI/OKR 制定清晰可行的個人與組織工作發展計畫。',
    },
    {
      id: 'rcd-1',
      title: '向上溝通~報連商技巧',
      category: '核心職能',
      img: '/img/RCD-1-compressor.jpg',
      url: 'https://www.kjsimulation.com/?avada_portfolio=136',
      desc: '學習日本企業核心「報告、連絡、相談」精髓，精準對齊主管期望與決策重點。',
    },
    {
      id: 'eicc-1',
      title: '職場倫理~員工行為準則',
      category: '核心職能',
      img: '/img/EICC-1-compressor.jpg',
      url: 'https://www.kjsimulation.com/?avada_portfolio=139',
      desc: '恪守企業誠信規範、資安合規與專業敬業精神，奠定堅實職涯基石。',
    },
    {
      id: 'acco-1',
      title: '當責',
      category: '核心職能',
      img: '/img/ACCO-1-compressor.jpg',
      url: 'https://www.kjsimulation.com/?avada_portfolio=143',
      desc: '從「負責」邁向「當責」，承擔成果、勇於交出最終圓滿解答。',
    },
    {
      id: 'pdca-1',
      title: '持續改善~PDCA循環',
      category: '核心職能',
      img: '/img/PDCA-1-compressor.jpg',
      url: 'https://www.kjsimulation.com/?avada_portfolio=148',
      desc: '靈活套用 Plan-Do-Check-Act 改善循環，讓作業品質與流程效益持續躍升。',
    },
    {
      id: 'inno-1',
      title: '創新設計',
      category: '核心職能',
      img: '/img/INNO-1-compressor.jpg',
      url: 'https://www.kjsimulation.com/?avada_portfolio=13292',
      desc: '結合設計思考與使用者痛點洞察，突破框架打造新世代創新產品與服務。',
    },
    {
      id: 'inno2-1',
      title: '創新推廣',
      category: '核心職能',
      img: '/img/INNO2-1-compressor.jpg',
      url: 'https://www.kjsimulation.com/?avada_portfolio=13298',
      desc: '解析創新擴散理論，化解組織阻力，加速新方案於企業內部順利普及落地。',
    },
    {
      id: 'prob-1',
      title: '問題解決技巧',
      category: '核心職能',
      img: '/img/PROB-1-compressor.jpg',
      url: 'https://www.kjsimulation.com/?avada_portfolio=13304',
      desc: '系統化釐清問題根因（5-Why、魚骨圖），釐清盲點並產出最優解決對策。',
    },
    {
      id: 'ps-1',
      title: '故事型簡報技巧',
      category: '專業職能',
      img: '/img/PS-1-compressor.jpg',
      url: 'https://www.kjsimulation.com/?avada_portfolio=171',
      desc: '運用情節架構與視覺說服張力，打造引人入勝且深具說服力的商務簡報。',
    },
    {
      id: 'ori-1',
      title: '職場成功信念',
      category: '核心職能',
      img: '/img/ORI-1-compressor.jpg',
      url: 'https://www.kjsimulation.com/?avada_portfolio=259',
      desc: '建立企業是更好的學校、服務客戶、放下自尊心等符合職場需求的正確信念。',
    },
    {
      id: 'pss-1',
      title: '顧問式銷售話術',
      category: '專業職能',
      img: '/img/PSS-1-compressor.jpg',
      url: 'https://www.kjsimulation.com/?avada_portfolio=13338',
      desc: '從客戶需求出發，提供客製化解決方案，建立長遠高價值商務信任關係。',
    },
    {
      id: 'tm-1',
      title: '時間管理九原則',
      category: '專業職能',
      img: '/img/TM-1-compressor.jpg',
      url: 'https://www.kjsimulation.com/?avada_portfolio=13332',
      desc: '掌握輕重緩急象限與專注時間塊，在高壓環境中倍增工作效能。',
    },
    {
      id: 'mm-1',
      title: '會議管理',
      category: '專業職能',
      img: '/img/MM-1-compressor.jpg',
      url: 'https://www.kjsimulation.com/?avada_portfolio=175',
      desc: '會前目標擬定、會中議程主持與會後決議追蹤，大幅精簡開會時間成本。',
    },
    {
      id: 'fm-1',
      title: '電腦檔案管理',
      category: '專業職能',
      img: '/img/FM-1-compressor.jpg',
      url: 'https://www.kjsimulation.com/?avada_portfolio=13323',
      desc: '建立邏輯化檔案目錄命名架構與版本控管系統，讓資料秒查秒用。',
    },
    {
      id: 'cs-1',
      title: '客戶服務(情境模擬)',
      category: '核心職能',
      img: '/img/CS-1-compressor.jpg',
      url: 'https://www.kjsimulation.com/?avada_portfolio=256',
      desc: '透過情境模擬訓練客訴應對技巧與同理心溝通，提升顧客滿意度與忠誠度。',
    },
    {
      id: 'ts-1',
      title: '招募面談(情境模擬)',
      category: '管理職能',
      img: '/img/TS-1-compressor.jpg',
      url: 'https://www.kjsimulation.com/?avada_portfolio=168',
      desc: '運用行為事例面談技巧 (STAR)，精準辨識潛力人才並為企業選拔最適員工。',
    },
    {
      id: 'coa-1',
      title: '教導面談(情境模擬)',
      category: '管理職能',
      img: '/img/COA-1-compressor.jpg',
      url: 'https://www.kjsimulation.com/?avada_portfolio=164',
      desc: '發展主管高階教導與建設性反饋能力，激發部屬潛能並帶領團隊成長。',
    },
    {
      id: 'pa-1',
      title: '績效診斷',
      category: '管理職能',
      img: '/img/PA-1-compressor.jpg',
      url: 'https://www.kjsimulation.com/?avada_portfolio=13310',
      desc: '系統化診斷團隊績效瓶頸，開出對症下藥改善處方，驅動組織營運突破。',
    },
  ];

  const visibleItems = showAllPortfolio ? portfolioItems : portfolioItems.slice(0, 6);

  return (
    <section id="portfolio-courses" className="py-24 relative container mx-auto px-6 max-w-6xl">
      {/* Section Header */}
      <div className="text-center max-w-4xl mx-auto mb-12 space-y-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">數位課程作品集</h2>
        <div className="h-1 w-20 bg-[#00d2ff] mx-auto rounded-full shadow-[0_0_12px_#00d2ff]" />
      </div>

      {/* Glassmorphic Manifesto Card */}
      <div className="glass-card max-w-4xl mx-auto p-8 md:p-10 rounded-2xl border border-[#00d2ff]/25 bg-[#0c1726]/65 backdrop-blur-md shadow-[0_0_30px_rgba(0,210,255,0.08)] mb-14 text-left space-y-4">
        <div className="border-l-4 border-[#00d2ff] pl-4 py-1.5 text-[#00d2ff] font-serif text-lg font-semibold italic bg-[#00d2ff]/5 rounded-r-lg">
          「二十年磨一劍，將天賦與認知科學融合成企業經典課程」
        </div>
        <p className="text-base text-[#dce3f0] font-light leading-relaxed md:leading-loose">
          成立木人巷公司之後，我除了為客戶開發專屬課程，也為公司創作了二十多門套裝職能課程！許多客戶都好奇：為什麼我可以寫出這麼多跨領域教材？我想這得歸功於天賦加努力所產生的綜效吧！
        </p>
        <p className="text-base text-[#dce3f0] font-light leading-relaxed md:leading-loose">
          我從小學東西就特別快，博士時期所研究的「認知科學、學習理論」更打通了我的任督二脈。近年來AI崛起，我發憤忘食，樂以忘憂，未來將站在AI巨人的肩榜上，繼續提昇創作的廣度、深度、與效率！
        </p>
      </div>

      {/* Grid Display (First 6 by default) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleItems.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="glass-card rounded-2xl overflow-hidden group flex flex-col justify-between transition-all duration-300 hover:border-[#00d2ff] hover:shadow-[0_0_25px_rgba(0,210,255,0.25)] hover:-translate-y-1"
          >
            <div className="relative aspect-video bg-[#050b14] overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1726] via-transparent to-transparent opacity-80" />
              
              <div className="absolute top-3 right-3 rounded-md bg-[#00d2ff]/20 border border-[#00d2ff]/40 px-2.5 py-1 text-[11px] font-semibold text-[#00d2ff] backdrop-blur-md">
                {item.category}
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-serif text-lg font-bold text-white group-hover:text-[#00d2ff] transition-colors leading-snug">
                    {item.title}
                  </h4>
                  <ExternalLink size={16} className="text-[#8ca9c4] group-hover:text-[#00d2ff] transition-colors flex-shrink-0" />
                </div>
                <p className="mt-2 text-xs text-[#dce3f0] font-light leading-relaxed line-clamp-3">
                  {item.desc}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Expand / Collapse Button */}
      {portfolioItems.length > 6 && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAllPortfolio(!showAllPortfolio)}
            className="w-full max-w-md mx-auto py-3.5 rounded-xl bg-[#0c1726] border border-[#00d2ff]/40 text-[#00d2ff] font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#00d2ff]/15 hover:border-[#00d2ff] transition-all duration-300 shadow-[0_0_15px_rgba(0,210,255,0.15)]"
          >
            {showAllPortfolio ? (
              <><span>收折數位課程作品</span><ChevronUp size={18} /></>
            ) : (
              <><span>顯示全部 {portfolioItems.length} 套數位課程作品</span><ChevronDown size={18} /></>
            )}
          </button>
        </div>
      )}
    </section>
  );
};
