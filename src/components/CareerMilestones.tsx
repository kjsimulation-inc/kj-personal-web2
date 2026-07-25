import React, { useState } from 'react';
import { Calendar, Building, GraduationCap, Award, ChevronDown, ChevronUp } from 'lucide-react';

export const CareerMilestones: React.FC = () => {
  const [showAllExperiences, setShowAllExperiences] = useState(false);

  const experiences = [
    {
      period: '2008.01 ~ PRESENT',
      role: '木人巷股份有限公司 執行長/創辦人',
      details: [
        '親手設計二十多套數位課程，主題涵蓋職場所需的各式核心職能。',
        '主筆「來到木人巷」電子報，讀者涵蓋台灣千大企業之人資訓練部門。',
        '詳情請見 www.kjsimulation.com',
      ],
    },
    {
      period: '2012.02 ~ 2012.07',
      role: '清華大學學習科學研究所 兼任助理教授',
      details: [
        '指導研究生深入探討學習理論於數位場域之實踐，推動教學科技的前瞻研究與跨領域應用。',
      ],
    },
    {
      period: '2004.08 ~ 2008.07',
      role: '淡江大學教育科技系所 專任助理教授',
      details: [
        '授課主題包含「教學設計、教學策略、學習策略、創新推廣、測驗評量、研究方法、企業實務、Flash 軟體設計」等。',
        '帶領研發團隊為台新銀行、緯創資通、奇美電子等多家企業，開發客製化模擬訓練教材。',
      ],
    },
    {
      period: '2004.03 ~ 2004.12',
      role: '資策會 數位學習產業推動與發展計畫 顧問',
      details: [
        '協助「數位教材研發中心」之評估規劃。',
      ],
    },
    {
      period: '2002.03 ~ 2007.12',
      role: '數位學習產業聯盟 執行顧問',
      details: [
        '為聯盟創始會員之一，並主筆「數位學習產業白皮書」。',
      ],
    },
    {
      period: '2001.09 ~ 2002.07',
      role: '中央大學學習科技研究中心 亞卓市副執行長',
      details: [
        '協助亞卓市建立營運模式。',
        '參與「數位學習國家型科技計畫」先期規劃工作。',
      ],
    },
    {
      period: '2001.01 ~ 2001.07',
      role: '象山集團-勁學網資訊科技股份有限公司 總經理',
      details: [
        '象山集團轄有勁報、中天電視、Power989 廣播電台、道生教育機構等多家企業，勁學網為其跨足數位學習之公司。',
      ],
    },
    {
      period: '1998.07 ~ 2001.01',
      role: '諾普科技有限公司 總經理/創辦人',
      details: [
        '諾普科技為專業的企業資源規劃軟體 (ERP) 設計公司。',
        '帶領研發團隊成功開發出「進銷存、會計、薪資、倉儲、銀行基金交易、餐飲管理」等各式軟體系統。',
      ],
    },
    {
      period: '1994.07 ~ 1998.06',
      role: '美國 CRLT (Center for Research on Learning and Technology) MIS',
      details: [
        'CRLT 是 AT&T 捐贈給印第安那大學的技術展示中心，擁有當時最先進的多媒體電腦暨通訊設備。',
        '工作四年，績效卓越，獲頒「優秀員工」獎牌。',
      ],
    },
    {
      period: '1993.09 ~ 1994.07',
      role: '美國 ERIC (Educational Resources Information Center) 資料庫程式設計師',
      details: [
        'ERIC 是美國教育部所成立之教育資料搜尋中心，供全美教師使用。負責開發其進銷存系統。',
      ],
    },
    {
      period: '1992.07 ~ 1993.07',
      role: '清華大學資訊所人工智慧自然語言實驗室 研究助理',
      details: [
        '研究人工智慧在自然語言處理的應用，如新式輸入法、語音辨識等技術。',
      ],
    },
    {
      period: '1990.08 ~ 1992.05',
      role: '中華民國陸軍 通訊少尉',
      details: [
        '擔任野戰部隊通訊排排長。',
      ],
    },
  ];

  const education = [
    {
      period: '2002.12 ~ 2003.08',
      role: '美國印第安那大學教學系統科技所 博士',
      details: [
        '於2002年底再度赴美，完成博士論文「台灣企業界推廣數位學習之障礙」。',
      ],
    },
    {
      period: '1993.07 ~ 1998.06',
      role: '美國印第安那大學教學系統科技所 博士候選人',
      details: [
        '1993年直接申請進入博士班。',
        '1998年通過博士候選人口試後，即回台創業。',
      ],
    },
    {
      period: '1992.07 ~ 1993.07',
      role: '清華大學人工智慧實驗室 研究助理',
      details: [
        '1992：清華大學攝影比賽第二名',
        '1992：中國時報童話徵文全國第一名',
        '1992：陳國政童話徵文全國第五名',
      ],
    },
    {
      period: '1986.07 ~ 1990.07',
      role: '國立清華大學電機工程學系 學士',
      details: [
        '1986：山地服務社社員',
        '1987：合唱團學藝股長',
        '1988：學生會副主席',
      ],
    },
    {
      period: '1984.07 ~ 1986.07',
      role: '建國中學',
      details: [
        '1985：數學競試全校第二十名',
        '1985：數學科展全學年第二名',
      ],
    },
  ];

  const visibleExperiences = showAllExperiences ? experiences : experiences.slice(0, 5);

  return (
    <section id="resume" className="py-24 relative container mx-auto px-6 max-w-6xl">
      {/* Section Header */}
      <div className="text-center max-w-4xl mx-auto mb-12 space-y-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">職涯與學歷</h2>
        <div className="h-1 w-20 bg-[#00d2ff] mx-auto rounded-full shadow-[0_0_12px_#00d2ff]" />
      </div>

      {/* Glassmorphic Manifesto Card */}
      <div className="glass-card max-w-4xl mx-auto p-8 md:p-10 rounded-2xl border border-[#00d2ff]/25 bg-[#0c1726]/65 backdrop-blur-md shadow-[0_0_30px_rgba(0,210,255,0.08)] mb-14 text-left space-y-4">
        <div className="border-l-4 border-[#00d2ff] pl-4 py-1.5 text-[#00d2ff] font-serif text-lg font-semibold italic bg-[#00d2ff]/5 rounded-r-lg">
          「我的求學歷程與職涯發展，是一個螺旋交織的漸進聚焦過程！」
        </div>
        <p className="text-base text-[#dce3f0] font-light leading-relaxed md:leading-loose">
          大學雖畢業於電機系，卻因對「人類如何學習」深感興趣，遂進入「人工智慧研究室」擔任研究助理。也因此職務認識「認知科學」，遂決定赴美攻讀「教學系統科技」博士。
        </p>
        <p className="text-base text-[#dce3f0] font-light leading-relaxed md:leading-loose">
          回台後先創業成立了 ERP 軟體設計公司，後又在淡江大學「教育科技系」擔任助理教授，然後再度創業，成立了木人巷公司，從此聚焦在數位學習，深耕茁壯至今。最近更融合 AI 技術，讓公司的生產力與創造力提昇到前所未有的高度！
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Experience Column with Collapsible Feature (First 5 by default) */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="rounded-xl bg-[#00d2ff]/10 p-3 text-[#00d2ff] border border-[#00d2ff]/30 shadow-[0_0_15px_rgba(0,210,255,0.2)]">
              <Building size={24} />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-white">經歷 (Professional Experience)</h3>
              <p className="text-xs text-[#8ca9c4]">共 {experiences.length} 項經歷（前 5 項精選展示）</p>
            </div>
          </div>

          <div className="relative border-l-2 border-[#1b2d47] ml-4 pl-6 space-y-6">
            {visibleExperiences.map((exp, idx) => (
              <div key={idx} className="glass-card p-6 rounded-xl relative group">
                {/* Node Circle */}
                <div className="absolute -left-[31px] top-6 h-4 w-4 rounded-full bg-[#070e17] border-2 border-[#00d2ff] group-hover:bg-[#00d2ff] group-hover:shadow-[0_0_12px_#00d2ff] transition-all duration-300" />
                <div className="inline-flex items-center gap-1.5 rounded-md bg-[#00d2ff]/10 px-3 py-1 text-xs font-semibold text-[#00d2ff] mb-3">
                  <Calendar size={12} />
                  <span>{exp.period}</span>
                </div>
                <h4 className="font-serif text-lg font-semibold text-white group-hover:text-[#00d2ff] transition-colors">
                  {exp.role}
                </h4>
                <ul className="mt-3 space-y-1.5 text-sm text-[#dce3f0] font-light leading-relaxed list-disc list-inside">
                  {exp.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {experiences.length > 5 && (
            <button
              onClick={() => setShowAllExperiences(!showAllExperiences)}
              className="w-full py-3.5 rounded-xl bg-[#0c1726] border border-[#00d2ff]/40 text-[#00d2ff] font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#00d2ff]/15 hover:border-[#00d2ff] transition-all duration-300 shadow-[0_0_15px_rgba(0,210,255,0.1)]"
            >
              {showAllExperiences ? (
                <><span>收折職涯經歷</span><ChevronUp size={16} /></>
              ) : (
                <><span>顯示全部 {experiences.length} 項職涯經歷</span><ChevronDown size={16} /></>
              )}
            </button>
          )}
        </div>

        {/* Education Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="rounded-xl bg-[#00ff88]/10 p-3 text-[#00ff88] border border-[#00ff88]/30 shadow-[0_0_15px_rgba(0,255,136,0.2)]">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-white">學歷與榮譽 (Education)</h3>
              <p className="text-xs text-[#8ca9c4]">共 {education.length} 項學歷與競賽經歷</p>
            </div>
          </div>

          <div className="relative border-l-2 border-[#1b2d47] ml-4 pl-6 space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="glass-card p-6 rounded-xl relative group">
                {/* Node Circle */}
                <div className="absolute -left-[31px] top-6 h-4 w-4 rounded-full bg-[#070e17] border-2 border-[#00ff88] group-hover:bg-[#00ff88] group-hover:shadow-[0_0_12px_#00ff88] transition-all duration-300" />
                <div className="inline-flex items-center gap-1.5 rounded-md bg-[#00ff88]/10 px-3 py-1 text-xs font-semibold text-[#00ff88] mb-3">
                  <Award size={12} />
                  <span>{edu.period}</span>
                </div>
                <h4 className="font-serif text-lg font-semibold text-white group-hover:text-[#00ff88] transition-colors">
                  {edu.role}
                </h4>
                <ul className="mt-3 space-y-1.5 text-sm text-[#dce3f0] font-light leading-relaxed list-disc list-inside">
                  {edu.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
