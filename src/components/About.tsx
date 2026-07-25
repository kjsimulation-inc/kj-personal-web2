import React from 'react';
import { Globe, Phone, Mail, User, GraduationCap, Lightbulb, Compass, Heart, ChevronRight } from 'lucide-react';

export const About: React.FC = () => {
  const infoItems = [
    {
      icon: Globe,
      label: '公司網頁',
      value: 'www.kjsimulation.com',
      url: 'https://www.kjsimulation.com',
    },
    {
      icon: Phone,
      label: '公司電話',
      value: '+886-2-26789120',
      url: 'tel:+886-2-26789120',
    },
    {
      icon: Mail,
      label: '郵箱',
      value: 'kwanjuntyan@gmail.com',
      url: 'mailto:kwanjuntyan@gmail.com',
    },
    {
      icon: User,
      label: 'FB',
      value: 'www.facebook.com/kwanjuntyan',
      url: 'https://www.facebook.com/kwanjuntyan',
    },
    {
      icon: GraduationCap,
      label: '學歷',
      value: '印第安那大學教學系統科技 博士',
    },
    {
      icon: Lightbulb,
      label: '興趣',
      value: '創作、探索、分享',
    },
    {
      icon: Compass,
      label: '休閒',
      value: '水電維修、自助旅行、爬山、看電影',
    },
    {
      icon: Heart,
      label: '心願',
      value: '希望這世界能因我的存在，而多添一點點美好…',
    },
  ];

  return (
    <section id="about" className="py-24 relative container mx-auto px-6 max-w-6xl">
      {/* Section Header */}
      <div className="text-center max-w-4xl mx-auto mb-12 space-y-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">關於田冠鈞</h2>
        <div className="h-1 w-20 bg-[#00d2ff] mx-auto rounded-full shadow-[0_0_12px_#00d2ff]" />
      </div>

      {/* Glassmorphic Manifesto Card */}
      <div className="glass-card max-w-4xl mx-auto p-8 md:p-10 rounded-2xl border border-[#00d2ff]/25 bg-[#0c1726]/65 backdrop-blur-md shadow-[0_0_30px_rgba(0,210,255,0.08)] mb-12 text-left space-y-4">
        <div className="border-l-4 border-[#00d2ff] pl-4 py-1.5 text-[#00d2ff] font-serif text-lg font-semibold italic bg-[#00d2ff]/5 rounded-r-lg">
          「Hi, 我是田冠鈞，現任木人巷公司的執行長/創辦人，從事數位課程的開發設計已近二十年！」
        </div>
        <p className="text-base text-[#dce3f0] font-light leading-relaxed md:leading-loose">
          我熱愛這個工作，因為我從小就對「如何有效學習」有濃厚興趣！<br />
          成立這間公司，讓我擁有廣闊的揮灑空間，不僅可以發揮天分，還可以享受學習、成長、與創造的樂趣，為此我常懷感謝！
        </p>
      </div>

      {/* Profile Photo & Exact Original Contact/Bio Items Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Original Profile Photo */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group rounded-2xl overflow-hidden border-2 border-[#00d2ff]/40 shadow-[0_0_30px_rgba(0,210,255,0.2)]">
            <img
              src="/img/my-profile-img.jpg"
              alt="田冠鈞"
              className="w-full h-auto max-h-[460px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070e17]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
          </div>
        </div>

        {/* Right Column: 8 Exact Bio & Contact Bullet Items */}
        <div className="lg:col-span-7 glass-card p-8 rounded-2xl border border-[#00d2ff]/20 bg-[#0c1726]/70 backdrop-blur-md space-y-4">
          <h3 className="font-serif text-2xl font-bold text-white mb-6 flex items-center gap-2 border-b border-[#1b2d47] pb-4">
            <span className="h-3 w-3 rounded-full bg-[#00d2ff] shadow-[0_0_10px_#00d2ff]" />
            個人簡介與聯絡資訊
          </h3>

          <div className="space-y-3.5">
            {infoItems.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm md:text-base group">
                <ChevronRight size={18} className="text-[#00d2ff] mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                <div className="flex flex-wrap items-baseline gap-2">
                  <strong className="text-white font-medium min-w-[80px]">{item.label}:</strong>
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#00d2ff] hover:underline hover:text-[#00ff88] transition-colors break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-[#dce3f0] font-light leading-relaxed">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
