import { motion } from "framer-motion";

export function BrandStorySection({ isVisible }: { isVisible: boolean }) {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <section
      id="brand-story"
      className="min-h-screen flex items-center justify-center bg-[#0b0b0f] relative"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#7ad1ff] to-[#9b8cff] bg-clip-text text-transparent"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          品牌故事
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto bg-[#121219]/60 backdrop-blur-sm p-12 rounded-3xl border border-[#9b8cff]/20"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="text-center">
              <img
                src="/logo-rainbow.png"
                alt="虹靈御所"
                className="w-32 h-32 mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold mb-4 text-[#9b8cff]">
                虹靈御所
              </h3>
              <p className="text-[#a7a7bb] leading-relaxed">
                內在探索 × 靈性深度 × 無條件慈悲
              </p>
              <p className="text-[#eaeaf1] mt-4">
                一個包容多元靈魂的庇護所,提供看見自己的勇氣
              </p>
            </div>

            <div className="text-center">
              <img
                src="/logo-maison.png"
                alt="超烜創意"
                className="w-32 h-32 mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold mb-4 text-[#7ad1ff]">
                超烜創意
              </h3>
              <p className="text-[#a7a7bb] leading-relaxed">
                外在建構 × 理性結構 × 清晰秩序
              </p>
              <p className="text-[#eaeaf1] mt-4">
                超越混沌創造光明,提供找到答案的地圖
              </p>
            </div>
          </div>

          <div className="text-center border-t border-[#9b8cff]/20 pt-8">
            <h4 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#7fe2c5] to-[#f7d37b] bg-clip-text text-transparent">
              默默超 MomoChao
            </h4>
            <p className="text-xl text-[#eaeaf1] leading-relaxed">
              當慈悲遇見結構,當靈性遇見理性
            </p>
            <p className="text-lg text-[#a7a7bb] mt-4">
              不是神,不是導師,而是<span className="text-[#f7d37b]">行走的煉金師</span>
              ——用理性煉慈悲,用思考喚靈魂
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function WhoWeServeSection({ isVisible }: { isVisible: boolean }) {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const audiences = [
    {
      title: "準備好面對真實的人",
      desc: "不再需要虛假安慰,願意承受誠實的代價",
      icon: "🔍",
    },
    {
      title: "思維建築師",
      desc: "正在建造自己的知識大樓,需要更好的工具與框架",
      icon: "🏗️",
    },
    {
      title: "內耗者",
      desc: "長期在「應該」與「想要」之間掙扎,渴望找到出路",
      icon: "⚖️",
    },
    {
      title: "高敏感族群",
      desc: "對世界有深刻感知,但缺乏結構化的處理方式",
      icon: "🌊",
    },
  ];

  return (
    <section
      id="who-we-serve"
      className="min-h-screen flex items-center justify-center bg-[#0d0d14] relative"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#7fe2c5] to-[#f7d37b] bg-clip-text text-transparent"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          我們為誰服務
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {audiences.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-[#121219]/60 backdrop-blur-sm p-8 rounded-2xl border border-[#7fe2c5]/20 hover:border-[#7fe2c5] transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-[#7fe2c5]">
                {item.title}
              </h3>
              <p className="text-[#eaeaf1] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-xl text-[#a7a7bb] mt-12 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          我們不服務所有人,只服務<span className="text-[#f7d37b]">準備好的人</span>。
          這不是排斥,而是尊重節奏。
        </motion.p>
      </div>
    </section>
  );
}

export function OurDifferenceSection({ isVisible }: { isVisible: boolean }) {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const differences = [
    {
      type: "心靈雞湯",
      they: "販賣希望與正能量",
      we: "不販賣希望,只提供真實",
      color: "#ff7aa8",
    },
    {
      type: "心理諮商",
      they: "診斷問題並治療",
      we: "不治療,只喚醒;不診斷,只映照",
      color: "#7ad1ff",
    },
    {
      type: "成功學教練",
      they: "給你成功的SOP",
      we: "不追求成功,追求誠實;不給SOP,給地圖",
      color: "#7fe2c5",
    },
    {
      type: "哲學思辨",
      they: "停留在理論層面",
      we: "不停留在理論,強調落地與可驗證性",
      color: "#f7d37b",
    },
    {
      type: "靈性導師",
      they: "販賣奇蹟與神秘",
      we: "不神秘化,不販賣奇蹟,用理性煉慈悲",
      color: "#9b8cff",
    },
  ];

  return (
    <section
      id="our-difference"
      className="min-h-screen flex items-center justify-center bg-[#0b0b0f] relative"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#ff7aa8] to-[#9b8cff] bg-clip-text text-transparent"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          我們的不同
        </motion.h2>

        <div className="max-w-5xl mx-auto space-y-6">
          {differences.map((item, index) => (
            <motion.div
              key={item.type}
              className="bg-[#121219]/60 backdrop-blur-sm p-8 rounded-2xl border border-[#9b8cff]/20 hover:border-[#9b8cff] transition-all duration-300"
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div>
                  <h3
                    className="text-2xl font-bold"
                    style={{ color: item.color }}
                  >
                    {item.type}
                  </h3>
                </div>
                <div>
                  <p className="text-sm text-[#a7a7bb] mb-1">他們</p>
                  <p className="text-[#eaeaf1]">{item.they}</p>
                </div>
                <div>
                  <p className="text-sm text-[#a7a7bb] mb-1">我們</p>
                  <p className="text-[#eaeaf1] font-semibold">{item.we}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-2xl text-[#f7d37b] mt-12 font-semibold"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          結構化的靈性,有溫度的理性
        </motion.p>
      </div>
    </section>
  );
}

export function BrandManifestoSection({ isVisible }: { isVisible: boolean }) {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <section
      id="manifesto"
      className="min-h-screen flex items-center justify-center bg-[#0d0d14] relative overflow-hidden"
    >
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#f7d37b]/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-12 bg-gradient-to-r from-[#7ad1ff] via-[#9b8cff] to-[#f7d37b] bg-clip-text text-transparent leading-tight">
            品牌宣言
          </h2>

          <div className="space-y-8 text-2xl md:text-3xl text-[#eaeaf1] leading-relaxed">
            <p>
              我們<span className="text-[#ff7aa8]">不拯救你</span>,
              只<span className="text-[#7fe2c5]">喚醒你</span>
            </p>
            <p>
              我們<span className="text-[#ff7aa8]">不給答案</span>,
              只<span className="text-[#7fe2c5]">給地圖</span>
            </p>
            <p>
              我們<span className="text-[#ff7aa8]">不讓你快樂</span>,
              只<span className="text-[#7fe2c5]">讓你不再內耗</span>
            </p>
          </div>

          <div className="mt-16 p-12 bg-[#121219]/80 backdrop-blur-sm rounded-3xl border-2 border-[#f7d37b]/30">
            <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#f7d37b] to-[#ff7aa8] bg-clip-text text-transparent leading-tight">
              我們不讓你變得更好,
              <br />
              而是讓你變得更真實
            </p>
            <p className="text-xl text-[#a7a7bb] mt-6">
              而真實,才是一切改變的起點
            </p>
          </div>

          <motion.p
            className="text-2xl text-[#7ad1ff] mt-12 font-light"
            animate={{ opacity: [1, 0.6, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            誠實才是唯一的解答
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

