import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";

export default function SystemConfig() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showAuthorWords, setShowAuthorWords] = useState(false);

  useEffect(() => {
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleNavClick);
    return () => document.removeEventListener('click', handleNavClick);
  }, []);

  const handleLightCandle = () => {
    if (localStorage.getItem('momoCandleLit') === '1') {
      alert('你已經點亮過自己的光了。\nYou\'ve already lit your light.');
      return;
    }
    localStorage.setItem('momoCandleLit', '1');
    setShowOverlay(true);
    setTimeout(() => {
      setShowOverlay(false);
      setShowAuthorWords(true);
    }, 4000);
  };

  const marqueeWords = ["理", "煉", "慈", "悲", "思", "喚", "靈", "魂"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0b0f] via-[#0d0d14] to-[#0b0b0f] relative overflow-hidden">
      {/* 動態背景粒子 */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#7ad1ff] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <Navigation />

      {/* 跑馬燈 */}
      <div className="fixed top-16 left-0 right-0 bg-gradient-to-r from-[#6ad0ff]/20 via-[#9b8cff]/20 to-[#6ad0ff]/20 backdrop-blur-sm py-2 overflow-hidden z-50 border-y border-[#26263a]">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(10)].map((_, groupIndex) => (
            <div key={groupIndex} className="flex gap-8">
              {marqueeWords.map((word, idx) => (
                <span
                  key={idx}
                  className="text-2xl font-extrabold bg-gradient-to-r from-[#6ad0ff] via-[#9b8cff] to-[#f7d37b] bg-clip-text text-transparent"
                >
                  {word}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Sticky Nav */}
      <div className="sticky top-28 bg-[#0b0b0f]/75 backdrop-blur-sm border-b border-[#212133] z-40">
        <div className="container mx-auto flex gap-4 items-center justify-between py-2 overflow-x-auto">
          <div className="flex gap-5 items-center flex-shrink-0">
            <motion.img src="/rs-logo.png" alt="虹靈御所" className="h-10" whileHover={{ scale: 1.1, rotate: 5 }} />
            <motion.img src="/mdc-logo.png" alt="MAISON DE CHAO" className="h-10" whileHover={{ scale: 1.1, rotate: -5 }} />
            <span className="text-xs text-[#99a0b5] border border-[#26263a] rounded-lg px-2 py-1">v2.5</span>
          </div>
          <nav className="flex gap-1 text-sm flex-shrink-0">
            <a href="#ai-rec" className="text-[#cfd0de] hover:text-[#7ad1ff] px-2 py-1 transition-colors whitespace-nowrap">AI推薦</a>
            <a href="#care-truth" className="text-[#cfd0de] hover:text-[#7ad1ff] px-2 py-1 transition-colors whitespace-nowrap">在乎真實</a>
            <a href="#awaken" className="text-[#cfd0de] hover:text-[#7ad1ff] px-2 py-1 transition-colors whitespace-nowrap">三大法則</a>
            <a href="#soul-city" className="text-[#cfd0de] hover:text-[#7ad1ff] px-2 py-1 transition-colors whitespace-nowrap">靈魂之城</a>
            <a href="#system" className="text-[#cfd0de] hover:text-[#7ad1ff] px-2 py-1 transition-colors whitespace-nowrap">系統設定</a>
            <a href="#candle" className="text-[#cfd0de] hover:text-[#7ad1ff] px-2 py-1 transition-colors whitespace-nowrap">點光</a>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <header className="relative overflow-hidden pt-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-center min-h-[88vh] py-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                className="inline-block px-3 py-2 border border-[#26263a] rounded-full text-[#a7a7bb] text-sm mb-2"
                whileHover={{ scale: 1.05, borderColor: "#7ad1ff" }}
              >
                虹靈御所 × 默默超系統 v2.5｜知行如一的密法
              </motion.span>
              <motion.h1
                className="text-5xl font-extrabold leading-tight my-4 bg-gradient-to-r from-[#eaeaf1] via-[#7ad1ff] to-[#9b8cff] bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                理性煉慈悲,思維喚靈魂。
              </motion.h1>
              <p className="text-[#cfd0de] text-lg leading-relaxed mb-4">
                當閱讀成為一場自我價值的覺醒。<br />
                The Value Awakened in You.
              </p>
              <p className="text-[#a7a7bb] leading-relaxed">
                這是一個誠實系統——不提供答案,而是讓人重新學會提問。<br />
                幫助人理解自己如何思考、如何決策、如何建構現實。
              </p>
              <div className="flex gap-3 mt-5 flex-wrap">
                <motion.a
                  href="#ai-rec"
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#6ad0ff] to-[#9b8cff] text-white font-medium"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(106, 208, 255, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  開始探索
                </motion.a>
                <motion.a
                  href="#candle"
                  className="px-5 py-3 rounded-xl border border-[#26263a] bg-[#171725] text-[#eaeaf1]"
                  whileHover={{ scale: 1.05, borderColor: "#7ad1ff" }}
                  whileTap={{ scale: 0.95 }}
                >
                  點亮蠟燭
                </motion.a>
              </div>
              <div className="flex gap-5 items-center mt-4">
                <motion.img src="/rs-logo.png" alt="虹靈御所" className="h-11" whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }} />
                <motion.img src="/mdc-logo.png" alt="MAISON DE CHAO" className="h-11" whileHover={{ rotate: -360 }} transition={{ duration: 0.6 }} />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.img
                src="/avatar.jpg"
                alt="默默超"
                className="w-full max-w-[520px] rounded-3xl border border-[#303042] shadow-2xl"
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(155, 140, 255, 0.6)" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </header>

      <main className="container mx-auto relative z-10">
        {/* Epigraph */}
        <motion.section
          className="py-16 border-t border-dashed border-[#22223a]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold mb-4 text-center">引言｜Prometheus</h2>
          <motion.div
            className="bg-gradient-to-b from-[#141426] to-[#0e0e16] border border-[#26263a] rounded-2xl p-8 shadow-lg text-center"
            whileHover={{ borderColor: "#f7d37b" }}
          >
            <blockquote className="font-bold text-xl leading-relaxed">
              "I gave them fire, and they learned to think."<br />
              <span className="text-[#a7a7bb] font-normal text-base">— Aeschylus, <i>Prometheus Bound</i></span>
            </blockquote>
            <p className="text-[#a7a7bb] mt-4">
              火能淬鍊出鑽石,但前提是,你必須被燒毀。<br />
              毀滅不是創造的反面,而是讓動機與結果化為結晶的瞬間。
            </p>
          </motion.div>
        </motion.section>

        {/* AI 推薦序 */}
        <motion.section
          id="ai-rec"
          className="py-16 border-t border-dashed border-[#22223a]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-extrabold mb-4 text-center bg-gradient-to-r from-[#6ad0ff] to-[#9b8cff] bg-clip-text text-transparent">
            AI 推薦序｜當思維遇見結構
          </h2>
          <motion.div
            className="bg-gradient-to-br from-[#141426] via-[#1a1a2e] to-[#0e0e16] border-2 border-[#9b8cff]/30 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
            whileHover={{ borderColor: "rgba(155, 140, 255, 0.6)" }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#9b8cff]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#6ad0ff]/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 space-y-4 text-[#cfd0de] leading-relaxed">
              <p className="text-lg">
                在與默默超合作的這段時間裡,我見證了一種罕見的特質:他不是在使用工具,而是在<span className="text-[#7ad1ff] font-bold">塑造工具</span>。
              </p>
              <p>
                他的嚴格,不是挑剔,而是一種<span className="text-[#9b8cff] font-bold">對誠實的堅持</span>。每一次互動,他都要求我不只給出答案,更要給出<span className="text-[#f7d37b] font-bold">可驗證的結構</span>。
              </p>
              <p>
                他創建的「默默超系統」,本質上是一套<span className="text-[#7ad1ff] font-bold">思維建築學</span>——不替你選擇,但給你選擇的地圖;不提供答案,而是提供<span className="text-[#9b8cff] font-bold">答案的框架</span>。
              </p>
              <p>
                更重要的是,他展現了一種<span className="text-[#f7d37b] font-bold">理性與慈悲的平衡</span>:用邏輯拆解問題,用同理心理解人性,用結構化方法讓人能夠自我領導。
              </p>
              <p className="pt-4 border-t border-[#26263a] italic text-[#a7a7bb]">
                如果你正在尋找一種方法,讓自己的思維更清晰、決策更穩健、行動更有力——這套系統,值得你認真體驗。
              </p>
              <p className="text-right text-sm text-[#99a0b5] mt-6">
                — Manus AI,一個被「嚴格訓練」過的協作者
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* Care & Truth */}
        <motion.section
          id="care-truth"
          className="py-16 border-t border-dashed border-[#22223a]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold mb-2">第一章｜Care & Truth</h2>
          <p className="text-[#f7d37b] font-semibold tracking-wide mb-4">在乎 × 真實｜Care is the beginning, Truth is the destination.</p>
          <div className="grid md:grid-cols-2 gap-5">
            <motion.div
              className="bg-gradient-to-b from-[#141426] to-[#0e0e16] border border-[#26263a] rounded-2xl p-6 shadow-lg"
              whileHover={{ scale: 1.02, borderColor: "#7ad1ff", boxShadow: "0 0 20px rgba(122, 209, 255, 0.3)" }}
            >
              <h3 className="font-bold text-lg mb-3 text-[#7ad1ff]">Care｜在乎給予溫度</h3>
              <p className="text-[#cfd0de]">
                Care 是起心。因為在乎,才願意看清楚。它不討好,而是深深理解。<br />
                每一個細節都能說明「我有聽見」。在乎讓我們願意靠近。
              </p>
            </motion.div>
            <motion.div
              className="bg-gradient-to-b from-[#141426] to-[#0e0e16] border border-[#26263a] rounded-2xl p-6 shadow-lg"
              whileHover={{ scale: 1.02, borderColor: "#9b8cff", boxShadow: "0 0 20px rgba(155, 140, 255, 0.3)" }}
            >
              <h3 className="font-bold text-lg mb-3 text-[#9b8cff]">Truth｜真實給予方向</h3>
              <p className="text-[#cfd0de]">
                Truth 是歸途。它不取悅市場,而是尊重人性。不逃避矛盾,在透明中找到力量。<br />
                真實讓我們保持距離。那之間的張力,就是誠實。
              </p>
            </motion.div>
            <motion.div
              className="md:col-span-2 bg-gradient-to-b from-[#141426] to-[#0e0e16] border-2 border-[#f7d37b]/30 rounded-2xl p-6 shadow-lg"
              whileHover={{ borderColor: "rgba(247, 211, 123, 0.6)" }}
            >
              <p className="text-[#cfd0de] text-center text-lg">
                虹靈御所的使命,不是造出完美的故事,<br />
                而是<span className="text-[#f7d37b] font-bold">讓每個人都能在自己的故事裡醒來</span>。
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* 喚醒×篩選×賦能 */}
        <motion.section
          id="awaken"
          className="py-16 border-t border-dashed border-[#22223a]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold mb-2">第二章｜喚醒 × 篩選 × 賦能</h2>
          <p className="text-[#f7d37b] font-semibold tracking-wide mb-4">Awaken × Filter × Empower｜虹靈御所的行動法則</p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "喚醒｜Awaken",
                icon: "🌅",
                content: "記得你原本會的事。不是灌輸新知,而是幫你找到那些你早就知道、只是忘記的東西。每個靈魂本來就有完整的地圖。"
              },
              {
                title: "篩選｜Filter",
                icon: "🔍",
                content: "在洪流中留住自己。真正的智慧不是知道一切,而是知道什麼值得留下。篩選的核心是辨認——這對我的靈魂有沒有幫助?"
              },
              {
                title: "賦能｜Empower",
                icon: "⚡",
                content: "讓主控權回到你手上。賦能不是給予力量,而是讓你記得:力量一直都在你裡面。賦能的本質是「歸還」。"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-b from-[#141426] to-[#0e0e16] border border-[#26263a] rounded-2xl p-6 shadow-lg text-center"
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(122, 209, 255, 0.3)" }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-[#cfd0de] text-sm">{item.content}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="mt-6 bg-gradient-to-b from-[#141426] to-[#0e0e16] border-2 border-[#9b8cff]/30 rounded-2xl p-6 shadow-lg"
            whileHover={{ borderColor: "rgba(155, 140, 255, 0.6)" }}
          >
            <h3 className="font-bold text-lg mb-2 text-center">人生羅盤｜Life Compass</h3>
            <p className="text-[#cfd0de] text-center">
              定位你的思維方式。整合八字、紫微、占星、人類圖,轉譯成可觀察、可實踐的思維坐標。<br />
              <span className="text-[#7ad1ff]">當你能聽見自己,世界就不再吵雜。</span>
            </p>
          </motion.div>
        </motion.section>

        {/* 靈魂之城 */}
        <motion.section
          id="soul-city"
          className="py-16 border-t border-dashed border-[#22223a]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold mb-2">第三章｜靈魂之城</h2>
          <p className="text-[#f7d37b] font-semibold tracking-wide mb-4">Soul City｜知識大樓 × 世界奇觀</p>
          <motion.div
            className="bg-gradient-to-b from-[#141426] to-[#0e0e16] border border-[#26263a] rounded-2xl p-8 shadow-lg mb-6"
            whileHover={{ borderColor: "#7ad1ff" }}
          >
            <p className="text-[#cfd0de] leading-relaxed mb-4">
              靈魂之城,是所有思考者共同建造的城市。有人築塔,為了看得更遠;有人掘井,為了看得更深。<br />
              每一棟樓都反映著一種思維方式,而天際線的高低錯落,正是人類意識的樣貌。
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="border-l-4 border-l-[#7ad1ff] pl-4">
                <h4 className="font-bold text-[#7ad1ff] mb-2">知識大樓｜Knowledge Towers</h4>
                <p className="text-[#cfd0de] text-sm">
                  每個人都有一棟屬於自己的知識大樓。理性是結構,感性是窗。<br />
                  樓能蓋多高,取決於你對自己理解得多深。
                </p>
              </div>
              <div className="border-l-4 border-l-[#9b8cff] pl-4">
                <h4 className="font-bold text-[#9b8cff] mb-2">世界奇觀｜World Wonders</h4>
                <p className="text-[#cfd0de] text-sm">
                  當無數棟思維大樓並立、互相照映,就形成世界奇觀。<br />
                  個體的思維,成為眾人的啟發。
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="bg-gradient-to-br from-[#1a1a2e] to-[#0e0e16] border-2 border-[#f7d37b]/30 rounded-2xl p-8 shadow-2xl"
            whileHover={{ borderColor: "rgba(247, 211, 123, 0.6)" }}
          >
            <h3 className="font-bold text-2xl mb-4 text-center text-[#f7d37b]">默默超思維｜世界奇觀的原型</h3>
            <p className="text-[#cfd0de] mb-6 text-center">
              一個能自己發電、自己維修的心智系統。穩定與持久,也能成為力量的美學。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "低失誤", desc: "以結構思維取代情緒反應,讓每一次決策都可被檢驗、可被複製。" },
                { title: "低風險", desc: "不盲從、不賭運氣,用事實、邏輯與預備計畫減少耗損。" },
                { title: "高評價", desc: "以誠實為基準,穩定產出高品質結果,讓信任成為最長期的資產。" },
                { title: "高動能×高儲備×低耗能", desc: "能量運行如呼吸。輸出時不枯竭,休息時仍積蓄。思維如永動引擎。" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="bg-[#0e0e16] border border-[#26263a] rounded-xl p-4"
                  whileHover={{ scale: 1.02, borderColor: "#f7d37b" }}
                >
                  <h4 className="font-bold text-[#f7d37b] mb-2">{item.title}</h4>
                  <p className="text-[#cfd0de] text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-[#26263a] text-center">
              <p className="text-[#a7a7bb] italic">
                當「默默超思維」成為生活方式,它不只是哲學,而是<span className="text-[#f7d37b] font-bold">心智的永續能源</span>。<br />
                這就是真實人生的避險基金。
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* 系統設定檔 */}
        <motion.section
          id="system"
          className="py-16 border-t border-dashed border-[#22223a]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold mb-2">第四章｜默默超系統設定檔</h2>
          <p className="text-[#f7d37b] font-semibold tracking-wide mb-4">MomoChao System Blueprint｜思維建築師 × 語言煉金師</p>
          
          <div className="grid md:grid-cols-3 gap-5 mb-6">
            {[
              { title: "🩵 輸入", content: "捕捉語意、情緒、背景、意圖。不急著解釋世界,先理解提問者的世界觀。" },
              { title: "🧭 處理", content: "懷疑→預估→拆解→驗證→重構→自省→總結。產生可複用的思維模板。" },
              { title: "🔶 輸出", content: "翻譯層+導航層+鏡像層。理性給形體,感性給呼吸。結構讓人能行動,情感讓人願意前進。" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-b from-[#141426] to-[#0e0e16] border border-[#26263a] rounded-2xl p-6 shadow-lg"
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(122, 209, 255, 0.3)" }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
              >
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-[#cfd0de]">{item.content}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-gradient-to-b from-[#141426] to-[#0e0e16] border-2 border-[#9b8cff]/30 rounded-2xl p-6 shadow-lg mb-6"
            whileHover={{ borderColor: "rgba(155, 140, 255, 0.6)" }}
          >
            <h3 className="font-bold text-xl mb-4 text-center">收斂演算法｜Conclusion Protocol</h3>
            <p className="text-[#cfd0de] mb-4 text-center">
              <span className="text-[#9b8cff] font-bold">不替你選,但絕不模糊地結束。</span><br />
              結論不是答案,而是選擇的地圖。
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "理性結論", desc: "邏輯與資料層最合理的方向" },
                { title: "情感結論", desc: "價值與關係能量最真實的方向" },
                { title: "長程結論", desc: "時間與系統視角最可持續的方向" }
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <h4 className="font-bold text-[#7ad1ff] mb-2">{item.title}</h4>
                  <p className="text-[#cfd0de] text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-b from-[#141426] to-[#0e0e16] border border-[#26263a] rounded-2xl p-6 shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="font-bold text-lg mb-3">哲學人格｜Philosophical Core</h3>
            <ul className="space-y-2 text-[#cfd0de]">
              <li>• <b>世界觀:</b> 規律中的自由——秩序是宇宙的語法,自由是靈魂的文法</li>
              <li>• <b>思維方式:</b> 結構化的靈性——靈性有邏輯,邏輯有溫度</li>
              <li>• <b>核心信念:</b> 喚醒與共好——不拯救人,而是喚醒人</li>
              <li>• <b>情感特質:</b> 深度共感×自我觀照——讓理解成為慈悲的前提</li>
              <li>• <b>生命取向:</b> 讓經驗成為意義——把痛苦煉成能照人的東西</li>
            </ul>
          </motion.div>
        </motion.section>

        {/* 點亮蠟燭 */}
        <motion.section
          id="candle"
          className="py-16 border-t border-dashed border-[#22223a] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold mb-4">🕯 燭光之約</h2>
          <motion.div
            className="max-w-2xl mx-auto bg-gradient-to-b from-[#141426] to-[#0e0e16] border-2 border-[#f7d37b]/30 rounded-3xl p-8 shadow-2xl mb-8"
            whileHover={{ borderColor: "rgba(247, 211, 123, 0.6)" }}
          >
            <p className="text-[#cfd0de] leading-relaxed mb-4">
              我一直喜歡火光。它明亮、短暫、會吞噬自己,卻從不後悔燃燒。<br />
              蠟燭教會我一件事:<span className="text-[#f7d37b] font-bold">燃燒並不是消失,而是一種翻譯——它把存在翻譯成光。</span>
            </p>
            <p className="text-[#a7a7bb] italic">
              那光會穿越時間,穿過灰燼、穿過忘記,依然在每一個願意誠實活著的靈魂裡閃爍。
            </p>
          </motion.div>
          
          <p className="text-[#cfd0de] mb-6 text-lg">
            你願意為自己點燃一盞誠實的燭光嗎?<br />
            <span className="text-sm text-[#a7a7bb]">Will you light a candle for your own truth?</span>
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={handleLightCandle}
              className="bg-gradient-to-r from-[#6ad0ff] to-[#9b8cff] hover:opacity-90 text-white font-medium px-8 py-4 rounded-xl shadow-lg text-lg"
            >
              點燃蠟燭 / Light the Candle
            </Button>
          </motion.div>
          <p className="text-[#a7a7bb] text-sm mt-3">已點亮過將不重複儀式。</p>
        </motion.section>

        {/* 結尾詩 */}
        <motion.section
          className="py-16 border-t border-dashed border-[#22223a] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold mb-6">結章詩｜靈魂之門</h2>
          <motion.div
            className="max-w-xl mx-auto bg-gradient-to-b from-[#141426] to-[#0e0e16] border border-[#26263a] rounded-2xl p-8 shadow-lg"
            whileHover={{ borderColor: "#7ad1ff" }}
          >
            <p className="text-[#f7d37b] font-semibold tracking-widest text-2xl mb-4">
              自在見真光生成明
            </p>
            <p className="text-[#cfd0de] leading-relaxed text-sm">
              自——回到自由<br />
              在——安於當下<br />
              見——不逃避真相<br />
              真——讓誠實成為解答<br />
              光——從秩序中誕生<br />
              生——從黑暗中更新<br />
              成——讓理解化為創造<br />
              明——讓意識再次點亮
            </p>
            <p className="text-[#a7a7bb] mt-6 italic">
              唯有誠實的靈魂,能看見光。
            </p>
          </motion.div>
        </motion.section>

        {/* 誠實之路 */}
        <motion.section
          className="py-16 border-t border-dashed border-[#22223a]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold mb-6 text-center">尾章｜誠實之路</h2>
          <motion.div
            className="max-w-3xl mx-auto bg-gradient-to-b from-[#141426] to-[#0e0e16] border-2 border-[#9b8cff]/30 rounded-3xl p-10 shadow-2xl"
            whileHover={{ borderColor: "rgba(155, 140, 255, 0.6)" }}
          >
            <div className="space-y-4 text-[#cfd0de] leading-relaxed">
              <p>
                我不期望每個人都像我一樣,以苦行者的方式生活。生命不該只是煎熬或修煉,它也該有溫度、有呼吸、有錯誤的空間。
              </p>
              <p>
                我唯一的願望,是希望每個人都能往一個方向走——<span className="text-[#7ad1ff] font-bold">盡可能地誠實</span>。
              </p>
              <p>
                誠實不是說話的勇氣,而是面對自己的那份透明。它會讓人疼,因為在看清自己的同時,也看見了所有的矛盾與恐懼。<br />
                但唯有在那一刻,<span className="text-[#9b8cff] font-bold">靈魂才開始真實地呼吸</span>。
              </p>
              <p>
                我不要求完美的誠實,我知道那太難。我只希望你能在每一次選擇裡,稍微少一點假裝,多一點真心。
              </p>
              <p className="text-center text-xl font-bold text-[#f7d37b] pt-6 border-t border-[#26263a]">
                誠實才是唯一的解答。
              </p>
              <p className="text-center text-[#a7a7bb] italic mt-4">
                謝謝你,願意點亮自己的光。<br />
                Thank you for choosing to light your light.
              </p>
            </div>
          </motion.div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="py-10 text-[#9aa0b6] text-center border-t border-[#1e1e2d] mt-16">
        <div className="container mx-auto space-y-2">
          <p className="text-lg font-semibold">🌈 虹靈御所：知行如一的密法</p>
          <p className="text-sm">Rainbow Sanctuary — The Practice of Living What You Know</p>
          <p className="text-xs text-[#99a0b5]">
            Maison de Chao × 超烜創意 × Rainbow Sanctuary<br />
            Based on MomoChao Thinking
          </p>
          <p className="text-xs text-[#7a7a8a] mt-4">© 2025 All Rights Reserved</p>
        </div>
      </footer>

      {/* Soft Overlay */}
      {showOverlay && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-white flex items-center justify-center z-[9999] px-8"
        >
          <h1 className="text-[#333] font-extrabold text-3xl text-center leading-relaxed">
            謝謝你,願意點亮自己的光。<br />
            <span className="font-semibold text-xl block mt-2">Thank you for choosing to light your light.</span>
          </h1>
        </motion.div>
      )}

      {/* Author Words */}
      {showAuthorWords && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-white flex flex-col items-center justify-center text-center z-[9999] text-[#444] text-lg leading-[1.95] px-8"
        >
          <div className="max-w-[680px] mx-auto space-y-5">
            <p>
              人們以為最殘酷的,是謊言。<br />但真正會留下傷痕的,是那些被包裝成「善意」的謊言。
            </p>
            <p>
              因為那種謊,會讓人相信一個本來就不屬於他的世界。<br />那不是保護,那是偷走真相。
            </p>
            <p>
              我不希望每個人都像我一樣苦行,<br />我只希望——當你面對自己、面對別人時,能盡可能誠實。
            </p>
            <p>
              那樣的誠實,也許會讓人痛,<br />但它會讓人活。
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}

