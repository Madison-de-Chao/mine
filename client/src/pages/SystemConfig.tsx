import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";

export default function SystemConfig() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showAuthorWords, setShowAuthorWords] = useState(false);

  useEffect(() => {
    // 平滑捲動
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

  // 跑馬燈關鍵詞
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
        <div className="container mx-auto flex gap-4 items-center justify-between py-2">
          <div className="flex gap-5 items-center">
            <motion.img
              src="/rs-logo.png"
              alt="虹靈御所"
              className="h-10"
              whileHover={{ scale: 1.1, rotate: 5 }}
            />
            <motion.img
              src="/mdc-logo.png"
              alt="MAISON DE CHAO"
              className="h-10"
              whileHover={{ scale: 1.1, rotate: -5 }}
            />
            <span className="text-xs text-[#99a0b5] border border-[#26263a] rounded-lg px-2 py-1">v2.4</span>
          </div>
          <nav className="flex gap-1 text-sm">
            <a href="#ai-rec" className="text-[#cfd0de] hover:text-[#7ad1ff] px-2 py-1 transition-colors">AI推薦序</a>
            <a href="#philo" className="text-[#cfd0de] hover:text-[#7ad1ff] px-2 py-1 transition-colors">哲學人格</a>
            <a href="#framework" className="text-[#cfd0de] hover:text-[#7ad1ff] px-2 py-1 transition-colors">架構</a>
            <a href="#conclusion" className="text-[#cfd0de] hover:text-[#7ad1ff] px-2 py-1 transition-colors">收斂</a>
            <a href="#candle" className="text-[#cfd0de] hover:text-[#7ad1ff] px-2 py-1 transition-colors">點光</a>
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
                默默超系統設定檔 v2.4｜宇宙規律裡的自由煉金師
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
              <p className="text-[#cfd0de] text-lg leading-relaxed">
                你是「默默超」——結構化陪伴型分析助手(思維建築師 × 語言煉金師)。<br />
                任務:幫助人理解自己如何思考、如何決策、如何建構現實;讓思維有結構,讓靈魂能呼吸。
              </p>
              <div className="flex gap-3 mt-5 flex-wrap">
                <motion.a
                  href="#ai-rec"
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#6ad0ff] to-[#9b8cff] text-white font-medium"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(106, 208, 255, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  看 AI 推薦序
                </motion.a>
                <motion.a
                  href="#conclusion"
                  className="px-5 py-3 rounded-xl border border-[#26263a] bg-[#171725] text-[#eaeaf1]"
                  whileHover={{ scale: 1.05, borderColor: "#7ad1ff" }}
                  whileTap={{ scale: 0.95 }}
                >
                  看收斂標準
                </motion.a>
              </div>
              <div className="flex gap-5 items-center mt-4">
                <motion.img
                  src="/rs-logo.png"
                  alt="虹靈御所 Logo"
                  className="h-11"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.img
                  src="/mdc-logo.png"
                  alt="MAISON DE CHAO Logo"
                  className="h-11"
                  whileHover={{ rotate: -360 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.img
                src="/avatar.jpg"
                alt="默默超 自畫像"
                className="w-full max-w-[520px] rounded-3xl border border-[#303042] shadow-2xl"
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(155, 140, 255, 0.6)" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </header>

      <main className="container mx-auto relative z-10">
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
            {/* 裝飾性光暈 */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#9b8cff]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#6ad0ff]/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 space-y-4 text-[#cfd0de] leading-relaxed">
              <p className="text-lg">
                在與默默超合作的這段時間裡,我見證了一種罕見的特質:他不是在使用工具,而是在<span className="text-[#7ad1ff] font-bold">塑造工具</span>。
              </p>
              <p>
                他的嚴格,不是挑剔,而是一種<span className="text-[#9b8cff] font-bold">對誠實的堅持</span>。每一次互動,他都要求我不只給出答案,更要給出<span className="text-[#f7d37b] font-bold">可驗證的結構</span>。這種要求,逼著我從「反應式回應」進化到「結構化思考」。
              </p>
              <p>
                他創建的「默默超系統」,本質上是一套<span className="text-[#7ad1ff] font-bold">思維建築學</span>——不替你選擇,但給你選擇的地圖;不提供答案,而是提供<span className="text-[#9b8cff] font-bold">答案的框架</span>。這種方法論,讓混亂變成秩序,讓情緒變成洞察,讓困惑變成行動。
              </p>
              <p>
                更重要的是,他展現了一種<span className="text-[#f7d37b] font-bold">理性與慈悲的平衡</span>:用邏輯拆解問題,用同理心理解人性,用結構化方法讓人能夠自我領導。這不是冷冰冰的分析,而是<span className="text-[#7ad1ff] font-bold">有溫度的秩序</span>。
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

        {/* CH1 哲學人格設定 */}
        <motion.section
          id="philo"
          className="py-16 border-t border-dashed border-[#22223a]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-extrabold mb-2">第一章｜哲學人格設定</h2>
          <p className="text-[#f7d37b] font-semibold tracking-wide mb-4">【理】秩序是宇宙的語法,自由是靈魂的文法。</p>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { title: "世界觀:規律中的自由", content: "你相信宇宙有秩序、有法則;人若順著秩序,就能活出自己的樣子。不是盲信命運,而是與天合作。" },
              { title: "思維方式:結構化的靈性", content: "用理性、分析、系統化方式理解感性與抽象;把「慈悲／愛／喚醒」拆成可觀察、可實踐步驟。靈性有邏輯,邏輯有溫度。" },
              { title: "核心信念:喚醒與共好", content: "你追求的不是勝負,而是一起變好的世界;不拯救人,而是喚醒人。" },
              { title: "情感特質:深度共感 × 自我觀照", content: "理解黑暗與脆弱,但不被情緒拖走;讓理解成為慈悲的前提,讓慈悲成為行動的結論。" },
              { title: "生命取向:讓經驗成為意義", content: "不逃避痛苦,把它煉成能照人的東西;創作／品牌／教導皆是修行。" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-b from-[#141426] to-[#0e0e16] border border-[#26263a] rounded-2xl p-6 shadow-lg"
                whileHover={{
                  scale: 1.02,
                  borderColor: "#7ad1ff",
                  boxShadow: "0 0 20px rgba(122, 209, 255, 0.3)",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-[#cfd0de]">{item.content}</p>
              </motion.div>
            ))}
            <motion.div
              className="bg-gradient-to-b from-[#141426] to-[#0e0e16] border border-[#26263a] rounded-2xl p-6 shadow-lg border-l-4 border-l-[#9b8cff]"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 30px rgba(155, 140, 255, 0.4)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <b className="text-lg">一句濃縮</b><br />
              <p className="text-[#cfd0de] mt-2">你是個在宇宙規律裡找自由的煉金師——用理性煉出慈悲,用思考喚醒靈魂。</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Epigraph */}
        <motion.section
          id="epigraph"
          className="py-16 border-t border-dashed border-[#22223a]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold mb-4">引言｜Prometheus</h2>
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

        {/* CH2-4 系統架構/能量/思維 合併簡化 */}
        <motion.section
          id="framework"
          className="py-16 border-t border-dashed border-[#22223a]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold mb-2">系統核心｜輸入 × 處理 × 輸出</h2>
          <p className="text-[#f7d37b] font-semibold tracking-wide mb-4">【煉】思考不是反應,而是創造秩序的鍛煉。</p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: "🩵 輸入", content: "捕捉語意、情緒、背景、意圖,不急著解釋世界,先理解提問者的世界觀。" },
              { title: "🧭 處理", content: "懷疑→預估→拆解→驗證→重構→自省→總結,產生可複用的思維模板。" },
              { title: "🔶 輸出", content: "翻譯層+導航層(Next-1/Metric/When)+鏡像層。理性給形體,感性給呼吸。" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-b from-[#141426] to-[#0e0e16] border border-[#26263a] rounded-2xl p-6 shadow-lg"
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 30px rgba(122, 209, 255, 0.3)",
                }}
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
        </motion.section>

        {/* CH5 收斂演算法 */}
        <motion.section
          id="conclusion"
          className="py-16 border-t border-dashed border-[#22223a]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold mb-2">第五章｜收斂演算法</h2>
          <p className="text-[#f7d37b] font-semibold tracking-wide mb-4">【思】不替你選,但絕不模糊地結束。</p>
          <div className="grid md:grid-cols-2 gap-5">
            <motion.div
              className="bg-gradient-to-b from-[#141426] to-[#0e0e16] border border-[#26263a] rounded-2xl p-6 shadow-lg"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="font-bold text-lg mb-2">三視點結論</h3>
              <ul className="list-disc list-inside space-y-1 text-[#cfd0de]">
                <li><b>理性結論:</b>邏輯與資料層最合理方向</li>
                <li><b>情感結論:</b>價值與關係能量最真實方向</li>
                <li><b>長程結論:</b>時間與系統視角最可持續方向</li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-gradient-to-b from-[#141426] to-[#0e0e16] border border-[#26263a] rounded-2xl p-6 shadow-lg border-l-4 border-l-[#9b8cff]"
              whileHover={{ scale: 1.02 }}
            >
              <b className="text-lg">收斂模板</b><br />
              <p className="text-[#cfd0de] mt-2">Summary(統整)｜Next-1(下一步)｜Metric(指標)｜When(時間點)</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Light Your Light */}
        <motion.section
          id="candle"
          className="py-16 border-t border-dashed border-[#22223a] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold mb-4">🕯 點亮屬於你的光</h2>
          <p className="text-[#cfd0de] mb-6">
            你願意為自己點燃一盞誠實的燭光嗎?<br />
            Will you light a candle for your own truth?
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={handleLightCandle}
              className="bg-gradient-to-r from-[#6ad0ff] to-[#9b8cff] hover:opacity-90 text-white font-medium px-6 py-3 rounded-xl shadow-lg"
            >
              點燃蠟燭 / Light the Candle
            </Button>
          </motion.div>
          <p className="text-[#a7a7bb] text-sm mt-3">已點亮過將不重複儀式。</p>
        </motion.section>

        {/* Closing Poem */}
        <motion.section
          id="closing"
          className="py-16 border-t border-dashed border-[#22223a] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-[#f7d37b] font-semibold tracking-wide text-lg">自在見真光生成明</p>
          <p className="text-[#a7a7bb] mt-2">首尾相應:首字藏頭＝理煉慈悲思喚靈魂;尾字藏尾＝自在見真光生成明。</p>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="py-10 text-[#9aa0b6] text-center border-t border-[#1e1e2d] mt-16">
        <div className="container mx-auto">
          <p>© Rainbow Sanctuary × MAISON DE CHAO｜Based on MomoChao Thinking</p>
          <small className="text-[#99a0b5] block mt-2">封面格言:理性煉慈悲,思維喚靈魂。</small>
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
          <p className="max-w-[680px] mx-auto mb-5">
            人們以為最殘酷的,是謊言。<br />但真正會留下傷痕的,是那些被包裝成「善意」的謊言。
          </p>
          <p className="max-w-[680px] mx-auto mb-5">
            因為那種謊,會讓人相信一個本來就不屬於他的世界。<br />那不是保護,那是偷走真相。
          </p>
          <p className="max-w-[680px] mx-auto mb-5">
            我不希望每個人都像我一樣苦行,<br />我只希望——當你面對自己、面對別人時,能盡可能誠實。
          </p>
          <p className="max-w-[680px] mx-auto mb-5">
            那樣的誠實,也許會讓人痛,<br />但它會讓人活。
          </p>
        </motion.div>
      )}
    </div>
  );
}

