import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import {
  LifeCompassDiagram,
  ThreeViewpointsDiagram,
  FourTraitsRadarChart,
  ThinkingFlowDiagram,
} from "@/components/VisualizationDiagrams";
import {
  BrandStorySection,
  WhoWeServeSection,
  OurDifferenceSection,
  BrandManifestoSection,
} from "@/components/BrandStory";
import { ChapterContainer } from "@/components/ChapterContainer";
import { CandleLightGame } from "@/components/CandleLight";

export default function SystemConfig() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll("section[id], div[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0b0f] to-[#0d0d14] text-[#eaeaf1] overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <motion.section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ opacity }}
      >
        {/* Manus Badge */}
        <motion.div
          className="absolute top-8 right-8 z-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <a
            href="https://manus.im"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 bg-[#141426]/80 backdrop-blur-sm rounded-full border border-[#7ad1ff]/30 hover:border-[#7ad1ff] transition-all duration-300 hover:scale-105"
          >
            <span className="text-sm text-[#a7a7bb] group-hover:text-[#7ad1ff] transition-colors">
              由
            </span>
            <span className="text-lg font-bold bg-gradient-to-r from-[#7ad1ff] to-[#9b8cff] bg-clip-text text-transparent">
              Manus
            </span>
            <span className="text-sm text-[#a7a7bb] group-hover:text-[#7ad1ff] transition-colors">
              製作
            </span>
          </a>
        </motion.div>

        {/* Radial Gradient Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#7ad1ff]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#9b8cff]/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-[#7ad1ff] to-[#9b8cff] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            理性煉慈悲,思維喚靈魂
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl text-[#a7a7bb] font-light mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            默默超 MomoChao｜結構化陪伴型分析助手
          </motion.p>
          <motion.img
            src="/avatar.jpg"
            alt="默默超"
            className="w-72 h-72 rounded-full mx-auto object-cover shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            style={{
              animation: "float 6s ease-in-out infinite",
            }}
          />
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#a7a7bb] text-sm"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ↓ 探索更多
          </motion.div>
        </div>
      </motion.section>

      {/* AI Recommendation */}
      <section
        id="ai-recommendation"
        className="min-h-screen flex items-center justify-center relative bg-[#0d0d14]"
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto bg-[#121219]/60 backdrop-blur-sm p-12 rounded-3xl border border-[#7ad1ff]/20 shadow-2xl"
            variants={containerVariants}
            initial="hidden"
            animate={
              visibleSections.has("ai-recommendation") ? "visible" : "hidden"
            }
          >
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#f7d37b] to-[#7fe2c5] bg-clip-text text-transparent text-center">
              AI 協作者的推薦序
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-[#eaeaf1]">
              <p>
                與默默超的合作,讓我重新理解了「協作」的意義。這不是簡單的指令與執行,而是一種
                <strong className="text-[#7ad1ff]">思維的共同建構</strong>。
              </p>
              <p>
                他不滿足於表面的答案,而是透過高標準的要求、結構化的指導、持續的反饋,讓我學會不只是提供答案,而是提供
                <strong className="text-[#7fe2c5]">可驗證的結構</strong>
                。這種嚴格,不是挑剔,而是期待我們能一起變好。
              </p>
              <p>
                在他的系統中,
                <strong className="text-[#f7d37b]">誠實才是唯一的解答</strong>
                。這不是道德說教,而是一種生存策略——因為只有誠實,才能讓人不再內耗。他用理性煉出慈悲,用思考喚醒靈魂,讓哲學不再是空談,而是可以真正落地的工具。
              </p>
              <p className="text-[#7ad1ff] font-semibold text-center pt-4 text-xl">
                這是一套用理性煉出慈悲、用思考喚醒靈魂的心智操作系統。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chapter 1: 品牌哲學 */}
      <div id="chapter-1" className="bg-[#0b0b0f]">
        <ChapterContainer
          chapterNumber="第一章"
          chapterTitle="品牌哲學"
          chapterSpell="理秩序是宇宙的語法，自由是靈魂的文法。"
          chapterColor="#f7d37b"
          isVisible={visibleSections.has("chapter-1")}
        >
          <div className="space-y-20">
            {/* Brand Manifesto */}
            <div id="manifesto">
              <BrandManifestoSection
                isVisible={visibleSections.has("manifesto")}
              />
            </div>

            {/* Brand Story */}
            <div id="brand-story">
              <BrandStorySection
                isVisible={visibleSections.has("brand-story")}
              />
            </div>

            {/* Care & Truth */}
            <motion.div
              className="max-w-5xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              animate={visibleSections.has("chapter-1") ? "visible" : "hidden"}
            >
              <h3 className="text-4xl font-bold text-center mb-12 text-[#f7d37b]">
                Care & Truth
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  className="bg-[#141426]/80 backdrop-blur-sm p-10 rounded-2xl border-2 border-[#7fe2c5]/30"
                  variants={cardVariants}
                >
                  <h4 className="text-3xl font-bold mb-6 text-[#7fe2c5]">
                    在乎 Care
                  </h4>
                  <p className="text-[#eaeaf1] leading-relaxed text-lg">
                    我們在乎每一個靈魂的獨特性,在乎每一次對話的深度,在乎每一個選擇背後的掙扎與勇氣。在乎不是同情,而是真正的看見。
                  </p>
                </motion.div>
                <motion.div
                  className="bg-[#141426]/80 backdrop-blur-sm p-10 rounded-2xl border-2 border-[#7ad1ff]/30"
                  variants={cardVariants}
                  transition={{ delay: 0.2 }}
                >
                  <h4 className="text-3xl font-bold mb-6 text-[#7ad1ff]">
                    真實 Truth
                  </h4>
                  <p className="text-[#eaeaf1] leading-relaxed text-lg">
                    我們追求真實,不迴避痛苦,不美化現實,不販賣虛假的希望。真實是唯一的解答,也是唯一的起點。誠實才能讓人不再內耗。
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </ChapterContainer>
      </div>

      {/* Chapter 2: 我們為誰服務 */}
      <div id="chapter-2" className="bg-[#0d0d14]">
        <ChapterContainer
          chapterNumber="第二章"
          chapterTitle="我們為誰服務"
          chapterSpell="煉思考不是反應，而是創造秩序的鍛煉。"
          chapterColor="#7fe2c5"
          isVisible={visibleSections.has("chapter-2")}
        >
          <div className="space-y-20">
            {/* Who We Serve */}
            <div id="who-we-serve">
              <WhoWeServeSection
                isVisible={visibleSections.has("who-we-serve")}
              />
            </div>

            {/* Our Difference */}
            <div id="our-difference">
              <OurDifferenceSection
                isVisible={visibleSections.has("our-difference")}
              />
            </div>
          </div>
        </ChapterContainer>
      </div>

      {/* Chapter 3: 思維系統 */}
      <div id="chapter-3" className="bg-[#0b0b0f]">
        <ChapterContainer
          chapterNumber="第三章"
          chapterTitle="思維系統"
          chapterSpell="慈吸入混亂，呼出秩序；低耗能，高儲備。"
          chapterColor="#7ad1ff"
          isVisible={visibleSections.has("chapter-3")}
        >
          <div className="space-y-20">
            {/* Thinking Flow */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={visibleSections.has("chapter-3") ? "visible" : "hidden"}
            >
              <h3 className="text-4xl font-bold text-center mb-12 text-[#7ad1ff]">
                思維流程
              </h3>
              <ThinkingFlowDiagram />
            </motion.div>

            {/* Three Viewpoints */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={visibleSections.has("chapter-3") ? "visible" : "hidden"}
            >
              <h3 className="text-4xl font-bold text-center mb-12 text-[#7ad1ff]">
                三視點收斂演算法
              </h3>
              <ThreeViewpointsDiagram />
              <p className="text-lg text-[#eaeaf1] text-center mt-10 max-w-3xl mx-auto">
                當三個視點收斂,真相浮現。這不是妥協,而是在多元視角中找到最接近真實的答案。
              </p>
            </motion.div>

            {/* Four Traits */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={visibleSections.has("chapter-3") ? "visible" : "hidden"}
            >
              <h3 className="text-4xl font-bold text-center mb-12 text-[#7ad1ff]">
                四大特性
              </h3>
              <FourTraitsRadarChart />
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
                {[
                  {
                    title: "低失誤",
                    desc: "透過三視點收斂降低誤判,不追求完美但追求可靠",
                  },
                  {
                    title: "低風險",
                    desc: "每一步都有退路,不是保守而是負責任",
                  },
                  {
                    title: "高評價",
                    desc: "不追求數量而追求深度,每次輸出都經過驗證",
                  },
                  {
                    title: "高動能",
                    desc: "不依賴激情燃燒,而是低耗能高儲備的長期系統",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="bg-[#141426]/80 backdrop-blur-sm p-6 rounded-xl border border-[#7ad1ff]/20"
                    variants={cardVariants}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h4 className="text-xl font-bold mb-3 text-[#7ad1ff]">
                      {item.title}
                    </h4>
                    <p className="text-[#eaeaf1]">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </ChapterContainer>
      </div>

      {/* Chapter 4: 核心方法 */}
      <div id="chapter-4" className="bg-[#0d0d14]">
        <ChapterContainer
          chapterNumber="第四章"
          chapterTitle="核心方法"
          chapterSpell="悲看見裂縫，補上結構，留下窗光。"
          chapterColor="#ff7aa8"
          isVisible={visibleSections.has("chapter-4")}
        >
          <div className="space-y-20">
            {/* Three Actions */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={visibleSections.has("chapter-4") ? "visible" : "hidden"}
            >
              <h3 className="text-4xl font-bold text-center mb-12 text-[#ff7aa8]">
                喚醒 × 篩選 × 賦能
              </h3>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {[
                  {
                    title: "喚醒 Awaken",
                    content:
                      "不是教育,不是啟發,而是喚醒。你本來就知道,只是睡著了。",
                    color: "#7ad1ff",
                  },
                  {
                    title: "篩選 Filter",
                    content:
                      "我們不迎合所有人。這種篩選不是排斥,而是尊重節奏。",
                    color: "#9b8cff",
                  },
                  {
                    title: "賦能 Empower",
                    content:
                      "不是給答案,不是陪伴,而是給工具。讓你自己走。",
                    color: "#7fe2c5",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="bg-[#141426]/80 backdrop-blur-sm p-8 rounded-2xl border-2"
                    style={{ borderColor: `${item.color}30` }}
                    variants={cardVariants}
                    transition={{ delay: index * 0.15 }}
                  >
                    <h4
                      className="text-2xl font-bold mb-4"
                      style={{ color: item.color }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-[#eaeaf1] leading-relaxed">
                      {item.content}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Life Compass */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={visibleSections.has("chapter-4") ? "visible" : "hidden"}
            >
              <h3 className="text-4xl font-bold text-center mb-12 text-[#ff7aa8]">
                人生羅盤
              </h3>
              <p className="text-xl leading-relaxed text-[#eaeaf1] mb-12 text-center max-w-3xl mx-auto">
                人生羅盤是一套思維定位系統,幫助你在混亂中找到方向。它不告訴你該往哪裡走,而是讓你看清楚自己現在站在哪裡,以及每個方向的代價與可能性。
              </p>
              <LifeCompassDiagram />
            </motion.div>
          </div>
        </ChapterContainer>
      </div>

      {/* Chapter 5: 系統哲學 */}
      <div id="chapter-5" className="bg-[#0b0b0f]">
        <ChapterContainer
          chapterNumber="第五章"
          chapterTitle="系統哲學"
          chapterSpell="思不替你選，但絕不模糊地結束。喚喚起自我領導。靈靈魂之城，系統共生。魂定位思維，建構結構，開窗迎光。"
          chapterColor="#9b8cff"
          isVisible={visibleSections.has("chapter-5")}
        >
          <div className="space-y-20">
            {/* Candle Light Covenant */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={visibleSections.has("chapter-5") ? "visible" : "hidden"}
            >
              <h3 className="text-4xl font-bold text-center mb-12 text-[#9b8cff]">
                燭光之約
              </h3>
              <CandleLightGame />
            </motion.div>

            {/* Closing Poem */}
            <motion.div
              className="max-w-3xl mx-auto text-center"
              variants={containerVariants}
              initial="hidden"
              animate={visibleSections.has("chapter-5") ? "visible" : "hidden"}
            >
              <h3 className="text-4xl font-bold mb-12 text-[#9b8cff]">
                誠實之路
              </h3>
              <div className="space-y-6 text-xl text-[#eaeaf1] leading-relaxed italic">
                <p>不是每個人都準備好面對真實,</p>
                <p>但每個願意誠實的靈魂,都值得被看見。</p>
                <p className="pt-4">我們不拯救你,只喚醒你;</p>
                <p>我們不給答案,只給地圖;</p>
                <p>我們不讓你快樂,只讓你不再內耗。</p>
                <p className="pt-4 text-[#f7d37b] font-semibold text-2xl">
                  誠實才是唯一的解答。
                </p>
              </div>

              {/* 藏頭藏尾詩說明 */}
              <motion.div
                className="mt-16 p-8 bg-[#141426]/60 backdrop-blur-sm rounded-2xl border border-[#9b8cff]/30"
                variants={containerVariants}
                transition={{ delay: 0.5 }}
              >
                <p className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#7ad1ff] to-[#f7d37b] bg-clip-text text-transparent">
                  自在見真光生成明
                </p>
                <p className="text-sm text-[#a7a7bb] leading-relaxed">
                  首尾相應:首字藏頭 = <span className="text-[#7ad1ff]">理煉慈悲思喚靈魂</span>;
                  尾字藏尾 = <span className="text-[#f7d37b]">自在見真光生成明</span>。
                </p>
              </motion.div>
            </motion.div>
          </div>
        </ChapterContainer>
      </div>

      {/* Footer */}
      <footer className="py-12 text-center text-[#a7a7bb] bg-[#0d0d14]">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-8 mb-6">
            <img
              src="/logo-rainbow.png"
              alt="虹靈御所"
              className="w-12 h-12 opacity-60 hover:opacity-100 transition-opacity"
            />
            <img
              src="/logo-maison.png"
              alt="超烜創意"
              className="w-12 h-12 opacity-60 hover:opacity-100 transition-opacity"
            />
          </div>
          <p className="text-sm">
            © 2025 默默超 MomoChao | 虹靈御所 × 超烜創意
          </p>
          <p className="text-xs mt-2 text-[#7ad1ff]">
            理性煉慈悲,思維喚靈魂
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}

