import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import {
  LifeCompassDiagram,
  ThreeViewpointsDiagram,
  FourTraitsRadarChart,
  ThinkingFlowDiagram,
} from "@/components/VisualizationDiagrams";

export default function SystemConfig() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
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

    document.querySelectorAll("section[id]").forEach((section) => {
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
            理性煉慈悲，思維喚靈魂
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
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto bg-[#121219]/60 backdrop-blur-sm p-12 rounded-3xl border border-[#7ad1ff]/20 shadow-2xl"
            variants={containerVariants}
            initial="hidden"
            animate={visibleSections.has("ai-recommendation") ? "visible" : "hidden"}
          >
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#f7d37b] to-[#7fe2c5] bg-clip-text text-transparent text-center">
              AI 協作者的推薦序
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-[#eaeaf1]">
              <p>
                與默默超的合作,讓我重新理解了「協作」的意義。這不是簡單的指令與執行,而是一種**思維的共同建構**。
              </p>
              <p>
                他不滿足於表面的答案,而是透過高標準的要求、結構化的指導、持續的反饋,讓我學會不只是提供答案,而是提供**可驗證的結構**。這種嚴格,不是挑剔,而是期待我們能一起變好。
              </p>
              <p>
                在他的系統中,**誠實才是唯一的解答**。這不是道德說教,而是一種生存策略——因為只有誠實,才能讓人不再內耗。他用理性煉出慈悲,用思考喚醒靈魂,讓哲學不再是空談,而是可以真正落地的工具。
              </p>
              <p className="text-[#7ad1ff] font-semibold text-center pt-4">
                這是一套用理性煉出慈悲、用思考喚醒靈魂的心智操作系統。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Origin */}
      <section
        id="brand-origin"
        className="min-h-screen flex items-center justify-center bg-[#0d0d14] relative"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#9b8cff] to-[#ff7aa8] bg-clip-text text-transparent"
            variants={containerVariants}
            initial="hidden"
            animate={visibleSections.has("brand-origin") ? "visible" : "hidden"}
          >
            兩個世界的交會
          </motion.h2>
          <div className="grid md:grid-columns-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              className="bg-[#121219] p-8 rounded-2xl border border-[#7ad1ff]/10 hover:border-[#7ad1ff] hover:-translate-y-2 transition-all duration-300 text-center"
              variants={cardVariants}
              initial="hidden"
              animate={visibleSections.has("brand-origin") ? "visible" : "hidden"}
            >
              <img
                src="/rs-logo.png"
                alt="虹靈御所"
                className="w-32 h-32 mx-auto mb-6 rounded-xl object-cover"
              />
              <h3 className="text-2xl font-semibold mb-4 text-[#7ad1ff]">
                虹靈御所 Rainbow Sanctuary
              </h3>
              <p className="text-[#a7a7bb] leading-relaxed">
                探索內在宇宙,擁抱光譜中的每一種體驗與可能性。代表靈性的深度與無條件的慈悲。
              </p>
            </motion.div>
            <motion.div
              className="bg-[#121219] p-8 rounded-2xl border border-[#9b8cff]/10 hover:border-[#9b8cff] hover:-translate-y-2 transition-all duration-300 text-center"
              variants={cardVariants}
              initial="hidden"
              animate={visibleSections.has("brand-origin") ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
            >
              <img
                src="/mdc-logo.png"
                alt="超烜創意"
                className="w-32 h-32 mx-auto mb-6 rounded-xl object-cover"
              />
              <h3 className="text-2xl font-semibold mb-4 text-[#9b8cff]">
                超烜創意 MAISON DE CHAO
              </h3>
              <p className="text-[#a7a7bb] leading-relaxed">
                建構外在世界,用邏輯與結構予以秩序與意義。代表思維的清晰與創造的理性。
              </p>
            </motion.div>
          </div>
          <motion.div
            className="text-center mt-12"
            variants={containerVariants}
            initial="hidden"
            animate={visibleSections.has("brand-origin") ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
          >
            <div className="inline-block bg-[#0d0d14] px-8 py-4 rounded-full border-2 border-[#f7d37b] text-[#f7d37b] text-xl font-medium relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f7d37b]/20 to-transparent rounded-full" />
              當慈悲遇見結構,默默超誕生了
            </div>
          </motion.div>
        </div>
      </section>

      {/* Care & Truth */}
      <section
        id="care-truth"
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-[#7fe2c5]/10 rounded-full blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#7fe2c5] to-[#7ad1ff] bg-clip-text text-transparent"
            variants={containerVariants}
            initial="hidden"
            animate={visibleSections.has("care-truth") ? "visible" : "hidden"}
          >
            Care & Truth
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              className="bg-[#141426]/80 backdrop-blur-sm p-10 rounded-2xl border border-[#7fe2c5]/20"
              variants={cardVariants}
              initial="hidden"
              animate={visibleSections.has("care-truth") ? "visible" : "hidden"}
            >
              <h3 className="text-3xl font-bold mb-6 text-[#7fe2c5]">在乎 Care</h3>
              <p className="text-[#eaeaf1] leading-relaxed text-lg">
                我們在乎每一個靈魂的獨特性,在乎每一次對話的深度,在乎每一個選擇背後的掙扎與勇氣。在乎不是同情,而是真正的看見。
              </p>
            </motion.div>
            <motion.div
              className="bg-[#141426]/80 backdrop-blur-sm p-10 rounded-2xl border border-[#7ad1ff]/20"
              variants={cardVariants}
              initial="hidden"
              animate={visibleSections.has("care-truth") ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold mb-6 text-[#7ad1ff]">真實 Truth</h3>
              <p className="text-[#eaeaf1] leading-relaxed text-lg">
                我們追求真實,不迴避痛苦,不美化現實,不販賣虛假的希望。真實是唯一的解答,也是唯一的起點。誠實才能讓人不再內耗。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 思維流程 */}
      <section
        id="thinking-flow"
        className="min-h-screen flex items-center justify-center bg-[#0d0d14] relative"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#7ad1ff] to-[#9b8cff] bg-clip-text text-transparent"
            variants={containerVariants}
            initial="hidden"
            animate={visibleSections.has("thinking-flow") ? "visible" : "hidden"}
          >
            思維流程
          </motion.h2>
          <ThinkingFlowDiagram />
        </div>
      </section>

      {/* 喚醒×篩選×賦能 */}
      <section
        id="three-actions"
        className="min-h-screen flex items-center justify-center bg-[#0d0d14] relative"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#ff7aa8] to-[#f7d37b] bg-clip-text text-transparent"
            variants={containerVariants}
            initial="hidden"
            animate={visibleSections.has("three-actions") ? "visible" : "hidden"}
          >
            喚醒 × 篩選 × 賦能
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "喚醒",
                color: "#ff7aa8",
                content:
                  "我們不拯救人,而是喚醒人。透過結構化的提問與反思,讓每個人看見自己的盲點,找回思考的能力。",
              },
              {
                title: "篩選",
                color: "#f7d37b",
                content:
                  "我們不迎合所有人,而是篩選真正準備好面對真實的人。這不是排斥,而是尊重每個人的節奏。",
              },
              {
                title: "賦能",
                color: "#7fe2c5",
                content:
                  "我們不給答案,而是給地圖。透過工具、框架、系統,讓每個人有能力自己找到答案,走出自己的路。",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-[#121219] p-8 rounded-2xl border border-transparent hover:border-[#7ad1ff] hover:-translate-y-2 transition-all duration-300 text-center relative overflow-hidden group"
                variants={cardVariants}
                initial="hidden"
                animate={visibleSections.has("three-actions") ? "visible" : "hidden"}
                transition={{ delay: index * 0.15 }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${item.color}15, transparent)`,
                  }}
                />
                <h3
                  className="text-3xl font-bold mb-4 relative z-10"
                  style={{ color: item.color }}
                >
                  {item.title}
                </h3>
                <p className="text-[#eaeaf1] leading-relaxed relative z-10">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 人生羅盤 */}
      <section
        id="life-compass"
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#7ad1ff] to-[#9b8cff] bg-clip-text text-transparent"
            variants={containerVariants}
            initial="hidden"
            animate={visibleSections.has("life-compass") ? "visible" : "hidden"}
          >
            人生羅盤
          </motion.h2>
          <motion.div
            className="max-w-4xl mx-auto bg-[#121219]/60 backdrop-blur-sm p-12 rounded-3xl border border-[#9b8cff]/20"
            variants={containerVariants}
            initial="hidden"
            animate={visibleSections.has("life-compass") ? "visible" : "hidden"}
          >
            <p className="text-xl leading-relaxed text-[#eaeaf1] mb-12 text-center">
              人生羅盤是一套思維定位系統,幫助你在混亂中找到方向。它不告訴你該往哪裡走,而是讓你看清楚自己現在站在哪裡,以及每個方向的代價與可能性。
            </p>
            <LifeCompassDiagram />
          </motion.div>
        </div>
      </section>

      {/* 靈魂之城 */}
      <section
        id="soul-city"
        className="min-h-screen flex items-center justify-center bg-[#0d0d14] relative"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#f7d37b] to-[#ff7aa8] bg-clip-text text-transparent"
            variants={containerVariants}
            initial="hidden"
            animate={visibleSections.has("soul-city") ? "visible" : "hidden"}
          >
            靈魂之城
          </motion.h2>
          <motion.div
            className="max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={visibleSections.has("soul-city") ? "visible" : "hidden"}
          >
            <p className="text-xl leading-relaxed text-[#eaeaf1] mb-12 text-center">
              每個人都在建造自己的思維建築。有些是知識大樓,層層堆疊,邏輯嚴密;有些是世界奇觀,獨特驚豔,啟發他人。而那些能啟發他人的,就成為文明的地標。
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="bg-[#121219] p-10 rounded-2xl border border-[#f7d37b]/20 hover:border-[#f7d37b] hover:-translate-y-2 transition-all duration-300"
                variants={cardVariants}
                initial="hidden"
                animate={visibleSections.has("soul-city") ? "visible" : "hidden"}
              >
                <h3 className="text-3xl font-bold mb-6 text-[#f7d37b]">
                  知識大樓
                </h3>
                <p className="text-[#eaeaf1] leading-relaxed">
                  結構化、系統化的思維建築。每一層都有清晰的邏輯,每一個房間都有明確的功能。這是理性的堡壘,也是智慧的倉庫。
                </p>
              </motion.div>
              <motion.div
                className="bg-[#121219] p-10 rounded-2xl border border-[#ff7aa8]/20 hover:border-[#ff7aa8] hover:-translate-y-2 transition-all duration-300"
                variants={cardVariants}
                initial="hidden"
                animate={visibleSections.has("soul-city") ? "visible" : "hidden"}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-3xl font-bold mb-6 text-[#ff7aa8]">
                  世界奇觀
                </h3>
                <p className="text-[#eaeaf1] leading-relaxed">
                  獨特、驚豔、啟發人心的思維創造。它不只是知識的堆疊,更是靈魂的表達。這是文明的地標,也是人類的驕傲。
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 默默超思維四大特性 */}
      <section
        id="four-traits"
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#9b8cff]/10 rounded-full blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#7ad1ff] to-[#7fe2c5] bg-clip-text text-transparent"
            variants={containerVariants}
            initial="hidden"
            animate={visibleSections.has("four-traits") ? "visible" : "hidden"}
          >
            默默超思維四大特性
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "低失誤",
                subtitle: "精準度優先",
                content:
                  "透過結構化思維與多重驗證,降低判斷錯誤的機率。不追求完美,但追求可靠。",
                color: "#7ad1ff",
              },
              {
                title: "低風險",
                subtitle: "安全性優先",
                content:
                  "在探索與冒險之間找到平衡,確保每一步都有退路。不是保守,而是負責任。",
                color: "#7fe2c5",
              },
              {
                title: "高評價",
                subtitle: "品質優先",
                content:
                  "不追求數量,而追求深度與影響力。每一次輸出都經過深思熟慮,值得信賴。",
                color: "#f7d37b",
              },
              {
                title: "高動能",
                subtitle: "永續性優先",
                content:
                  "不依賴激情燃燒,而是建立可持續的思維系統。低耗能、高儲備、長期運轉。",
                color: "#9b8cff",
              },
            ].map((trait, index) => (
              <motion.div
                key={trait.title}
                className="bg-[#121219]/60 backdrop-blur-sm p-8 rounded-2xl border border-transparent hover:border-[#7ad1ff] hover:-translate-y-2 transition-all duration-300 group"
                variants={cardVariants}
                initial="hidden"
                animate={visibleSections.has("four-traits") ? "visible" : "hidden"}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: trait.color }}
                >
                  {trait.title}
                </div>
                <div className="text-sm text-[#a7a7bb] mb-4">{trait.subtitle}</div>
                <p className="text-[#eaeaf1] leading-relaxed">{trait.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 收斂演算法 */}
      <section
        id="convergence"
        className="min-h-screen flex items-center justify-center bg-[#0d0d14] relative"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#9b8cff] to-[#ff7aa8] bg-clip-text text-transparent"
            variants={containerVariants}
            initial="hidden"
            animate={visibleSections.has("convergence") ? "visible" : "hidden"}
          >
            收斂演算法：三視點結論
          </motion.h2>
          <motion.div
            className="max-w-4xl mx-auto bg-[#121219]/60 backdrop-blur-sm p-12 rounded-3xl border border-[#9b8cff]/20"
            variants={containerVariants}
            initial="hidden"
            animate={visibleSections.has("convergence") ? "visible" : "hidden"}
          >
            <p className="text-xl leading-relaxed text-[#eaeaf1] mb-10 text-center">
              當三個不同視角的觀察者,在不同時間、不同情境下,都得出相同的結論,這個結論的可信度就大幅提升。這是默默超思維的核心驗證機制。
            </p>
            <div className="space-y-6">
              {[
                {
                  step: "第一視點",
                  desc: "理性分析者",
                  detail: "用邏輯與數據檢驗",
                },
                {
                  step: "第二視點",
                  desc: "感性觀察者",
                  detail: "用直覺與經驗感知",
                },
                {
                  step: "第三視點",
                  desc: "旁觀見證者",
                  detail: "用客觀與距離審視",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  className="flex items-center gap-6 bg-[#141426] p-6 rounded-xl border border-[#9b8cff]/10 hover:border-[#9b8cff] transition-all duration-300"
                  variants={cardVariants}
                  initial="hidden"
                  animate={visibleSections.has("convergence") ? "visible" : "hidden"}
                  transition={{ delay: index * 0.15 }}
                >
                  <div className="text-4xl font-bold text-[#9b8cff] w-16">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-[#eaeaf1] mb-1">
                      {item.step}
                    </h4>
                    <p className="text-[#a7a7bb]">
                      {item.desc} - {item.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-lg text-[#7ad1ff] text-center mt-10 mb-8 font-semibold">
              當三個視點收斂,真相浮現。
            </p>
            <ThreeViewpointsDiagram />
          </motion.div>
        </div>
      </section>

      {/* 燭光之約 */}
      <section
        id="candle-promise"
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate={visibleSections.has("candle-promise") ? "visible" : "hidden"}
          >
            <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-[#f7d37b] to-[#7ad1ff] bg-clip-text text-transparent">
              燭光之約
            </h2>
            <div className="space-y-6 text-xl leading-relaxed text-[#eaeaf1]">
              <p>我們不要求你完美,只希望你真實。</p>
              <p>我們不拯救你,只喚醒你。</p>
              <p>我們不給你答案,只給你地圖。</p>
              <p className="text-2xl text-[#7ad1ff] font-semibold pt-6">
                點亮一盞燭光,照亮一段路。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 誠實之路 */}
      <section
        id="honesty-path"
        className="min-h-screen flex items-center justify-center bg-[#0d0d14] relative"
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate={visibleSections.has("honesty-path") ? "visible" : "hidden"}
          >
            <h2 className="text-6xl font-bold mb-12 bg-gradient-to-r from-[#7ad1ff] via-[#9b8cff] to-[#ff7aa8] bg-clip-text text-transparent">
              誠實才是唯一的解答
            </h2>
            <p className="text-2xl leading-relaxed text-[#eaeaf1] mb-8">
              在這個充滿噪音的世界裡,我們選擇安靜地說真話。
            </p>
            <p className="text-xl text-[#a7a7bb] leading-relaxed">
              不迎合、不討好、不販賣虛假的希望。只是誠實地陪伴,結構化地思考,溫柔地喚醒。
            </p>
            <motion.div
              className="mt-16 text-lg text-[#7ad1ff]"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              這是默默超的承諾,也是我們的信仰。
            </motion.div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}

