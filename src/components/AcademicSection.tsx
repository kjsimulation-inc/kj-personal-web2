import React, { useState } from 'react';
import { Mic, FileText, ChevronDown, ChevronUp } from 'lucide-react';

export const AcademicSection: React.FC = () => {
  const [showAllSpeeches, setShowAllSpeeches] = useState(false);
  const [showAllPapers, setShowAllPapers] = useState(false);

  // 100% 原始網頁 index.html 精確演講紀錄
  const speeches = [
    '田冠鈞 (2013.07.18)。《初、中階主管-教導能力混成訓練班(七梯次)》。財團法人資訊工業策進會。',
    '田冠鈞 (2013.06.19)。《初、中階主管-招募面談系列之行為事例面談混成訓練班(七梯次)》。財團法人資訊工業策進會。',
    '田冠鈞 (2013.03.05)。《畢專行銷策略之探討》。淡江大學。',
    '田冠鈞 (2012.10.19)。《從巴菲特觀點看績效》。淡江大學。',
    '田冠鈞 (2012.03.13)。《混成訓練設計之心得分享》。淡江大學。',
    '田冠鈞 (2012.03.08)。《創新推廣理論在訓練單位的應用》。淡江大學。',
    '田冠鈞 (2012.02.29)。《教科專業在職場的需求與展望》。淡江大學。',
    '田冠鈞 (2011.11.21)。《從學術研究到企業實務之路》。國立台灣師範大學。',
    '田冠鈞 (2011.10.27)。《高績效訓練發展模式》。中華人力資本發展協會。',
    '田冠鈞 (2011.10.18)。《高階主管-教導能力混成訓練班》。信音電子(中國)股份有限公司。',
    '田冠鈞 (2011.06.06)。《「體驗學習」與「模擬教材」在教學策略上的應用原則》。淡江大學。',
    '田冠鈞 (2011.05.05)。《從學術研究到企業實務之路》。國立清華大學。',
    '田冠鈞 (2011.03.15)。《大學生進入職場前應有之準備》。淡江大學。',
    '田冠鈞 (2010.11.18)。《「招募面談」模擬教材開發心得分享》。台北榮民總醫院。',
    '田冠鈞 (2010.11.09)。《招募面談技巧混成訓練班》。奇美電子。',
    '田冠鈞 (2010.06.21)。《數位學習設計實務》。東南科技大學。',
    '田冠鈞 (2010.06.11)。《創新與創業的挑戰與樂趣》。台南大學。',
    '田冠鈞 (2010.05.31)。《創新與創業的挑戰與樂趣》。淡江大學。',
    '田冠鈞 (2009.09.24)。《情境模擬課程之發展應用》。公務人力發展中心。',
    '田冠鈞 (2009.06.25)。《21世紀個人競爭力的關鍵因素：數位能力》。行政院勞工委員會職業訓練局。',
    '田冠鈞 (2008.11.26)。《21世紀個人競爭力的關鍵因素：數位能力》。台北榮民總醫院。',
    '田冠鈞 (2007.12.18)。《應用模擬式教材解構農業知識》。農委會。',
    '田冠鈞 (2007.11.27)。《模擬訓練如何深化實體訓練成效》。中華民國組織學習協會。',
    '田冠鈞 (2007.11.02)。《模擬訓練如何深化實體訓練成效》。資策會。',
    '田冠鈞 (2007.10.24)。《當模擬遇上學習》。數位學習國家型科技計畫辦公室。',
    '田冠鈞 (2007.07.16)。《模擬教材的發展趨勢》。資策會。',
    '田冠鈞 (2007.07.05)。《數位學習之教學設計與教學策略》。國立政治大學。',
    '田冠鈞 (2006.12.19)。《數位學習的現況與發展趨勢》。國立空中大學。',
    '田冠鈞 (2004.12.06)。《模擬技術在數位學習的應用》。嘉義大學。',
    '田冠鈞 (2004.11.15)。《模擬技術在數位學習的應用》。國立台灣師範大學。',
    '田冠鈞 (2004.10.27)。《數位內容在教育訓練的最新趨勢》。中原大學。',
    '田冠鈞 (2004.09.12)。《教材研發中心之需求與展望》。資策會。',
    '田冠鈞 (2004.08.31)。《以企業價值鏈探討E-learning的價值與應用》。台北國際會議中心。',
    '田冠鈞 (2004.06.04)。《評鑑策略與技巧》。台積電 學習暨發展中心。',
    '田冠鈞 (2004.05.14)。《績效診斷》。台積電 學習暨發展中心。',
    '田冠鈞 (2004.04.09)。《教學設計原則》。台積電 學習暨發展中心。',
  ];

  // 100% 來自原始網頁 index.html 學術發表與博士論文/白皮書實據紀錄 (共 19 篇)
  const papers = [
    'Tian, K. J. (2003). Obstacles to the Implementation of E-Learning in Taiwanese Enterprises (Doctoral dissertation). Indiana University, Bloomington.',
    '田冠鈞 (2007.12.23)。《訓練成效評鑑：以「催收專員新人訓練模擬學程」為例》。台灣教育傳播暨科技學會2007年學術研討會發表。',
    '田冠鈞 (2007.09.01)。《問題導向之訓練學程設計》。數位學習網路科學園區電子報。',
    '田冠鈞 (2007.08.01)。《訓練成效分析的迷思》。數位學習網路科學園區電子報。',
    '田冠鈞 (2007.03.01)。《模擬教材的系統化教學設計-以「主管教導能力」為例》。教育研究月刊第155期。',
    '田冠鈞 (2006.10.01)。《教導技巧在企業應用的原則與做法》。能力雜誌第608期。',
    '田冠鈞 (2006.08.15)。《數位學習在台灣企業領域的發展現況》。兩岸教育科技應用學術研討會。',
    '田冠鈞 (2006.06.20)。《以數位模擬教材評鑑觀點探討「職場禮儀模擬訓練教材」之研究》。全球華人計算機教育應用大會。',
    '田冠鈞 (2006.04.01)。《模擬教材新應用》。數位學習網路科學園區電子報。',
    '田冠鈞 (2005.05.01)。《建構台灣之數位學習產業競爭優勢》。視聽教育雙月刊。',
    '田冠鈞 (2004.09.27)。《數位學習的未來趨勢》。元元科技專刊。',
    '田冠鈞 (2004.09.01)。《台灣高等教育發展數位學習的瓶頸與展望》。教育研究月刊25期。',
    '田冠鈞 (2004.09.01)。《模擬教材典範分享》。階梯雜誌。',
    '田冠鈞 (2004.05.15)。《由麥可波特的企業價值鏈理論，探討教育訓練的定位與價值》。能力雜誌579期。',
    '田冠鈞 (2004.04.15)。《提昇企業員工英文能力的最佳策略》。能力雜誌578期。',
    '田冠鈞 (2004.03.15)。《知識經濟時代的成功關鍵：教育訓練》。能力雜誌577期。',
    '田冠鈞 (2002.11.30)。《教育e化的現況與展望》。國民中學學生基本學力測驗推動委員會飛揚專刊第18期。',
    '田冠鈞 (2002.10.31)。《分析企業員工生產力與數位學習之關係》。中央大學專案計畫研究成果報告。',
    '田冠鈞 (2002)。《台灣數位學習產業白皮書》。數位學習產業聯盟。',
  ];

  const visibleSpeeches = showAllSpeeches ? speeches : speeches.slice(0, 5);
  const visiblePapers = showAllPapers ? papers : papers.slice(0, 5);

  return (
    <section id="academic" className="py-24 relative container mx-auto px-6 max-w-6xl">
      {/* Section Header */}
      <div className="text-center max-w-4xl mx-auto mb-12 space-y-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">學術著作與演講</h2>
        <div className="h-1 w-20 bg-[#00d2ff] mx-auto rounded-full shadow-[0_0_12px_#00d2ff]" />
      </div>

      {/* Glassmorphic Manifesto Card */}
      <div className="glass-card max-w-4xl mx-auto p-8 md:p-10 rounded-2xl border border-[#00d2ff]/25 bg-[#0c1726]/65 backdrop-blur-md shadow-[0_0_30px_rgba(0,210,255,0.08)] mb-14 text-left space-y-4">
        <div className="border-l-4 border-[#00d2ff] pl-4 py-1.5 text-[#00d2ff] font-serif text-lg font-semibold italic bg-[#00d2ff]/5 rounded-r-lg">
          「以學術理論為根基，在企業實務中淬煉真知與卓越著作」
        </div>
        <p className="text-base text-[#dce3f0] font-light leading-relaxed md:leading-loose">
          從清華大學人工智慧研究助理、美國印第安那大學博士研究，到淡江大學與清華大學任教，累積超過 36 場國內外公開演講發表與 19 篇國際期刊、博士論文與專書著作。將教學系統科技理論深刻印證於產業實務中。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Public Speeches */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="rounded-xl bg-[#00d2ff]/10 p-3 text-[#00d2ff] border border-[#00d2ff]/30 shadow-[0_0_15px_rgba(0,210,255,0.2)]">
              <Mic size={24} />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-white">公開演講與研討會</h3>
              <p className="text-xs text-[#8ca9c4]">共 {speeches.length} 篇公開演講與國際研討會發表</p>
            </div>
          </div>

          <div className="space-y-4">
            {visibleSpeeches.map((sp, idx) => (
              <div key={idx} className="glass-card p-5 rounded-xl text-sm text-[#dce3f0] font-light leading-relaxed hover:border-[#00d2ff] transition-all flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-[#00d2ff] mt-2 flex-shrink-0" />
                <span>{sp}</span>
              </div>
            ))}
          </div>

          {speeches.length > 5 && (
            <button
              onClick={() => setShowAllSpeeches(!showAllSpeeches)}
              className="w-full py-3.5 rounded-xl bg-[#0c1726] border border-[#00d2ff]/40 text-[#00d2ff] font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#00d2ff]/15 hover:border-[#00d2ff] transition-all duration-300 shadow-[0_0_15px_rgba(0,210,255,0.1)]"
            >
              {showAllSpeeches ? (
                <><span>收折演講列表</span><ChevronUp size={16} /></>
              ) : (
                <><span>顯示全部 {speeches.length} 篇演講發表</span><ChevronDown size={16} /></>
              )}
            </button>
          )}
        </div>

        {/* Publications */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="rounded-xl bg-[#00ff88]/10 p-3 text-[#00ff88] border border-[#00ff88]/30 shadow-[0_0_15px_rgba(0,255,136,0.2)]">
              <FileText size={24} />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-white">期刊、論文與專書著作</h3>
              <p className="text-xs text-[#8ca9c4]">共 {papers.length} 篇期刊、論文與書籍著作</p>
            </div>
          </div>

          <div className="space-y-4">
            {visiblePapers.map((p, idx) => (
              <div key={idx} className="glass-card p-5 rounded-xl text-sm text-[#dce3f0] font-light leading-relaxed hover:border-[#00ff88] transition-all flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-[#00ff88] mt-2 flex-shrink-0" />
                <span>{p}</span>
              </div>
            ))}
          </div>

          {papers.length > 5 && (
            <button
              onClick={() => setShowAllPapers(!showAllPapers)}
              className="w-full py-3.5 rounded-xl bg-[#0c1726] border border-[#00ff88]/40 text-[#00ff88] font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#00ff88]/15 hover:border-[#00ff88] transition-all duration-300 shadow-[0_0_15px_rgba(0,255,136,0.1)]"
            >
              {showAllPapers ? (
                <><span>收折著作列表</span><ChevronUp size={16} /></>
              ) : (
                <><span>顯示全部 {papers.length} 篇期刊著作</span><ChevronDown size={16} /></>
              )}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
