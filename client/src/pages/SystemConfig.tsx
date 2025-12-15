import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";

// 動畫變體
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// 四個名字卡片組件
function SystemCard({ 
  title, 
  subtitle, 
  description, 
  color, 
  icon 
}: { 
  title: string; 
  subtitle: string; 
  description: string; 
  color: string; 
  icon: string;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ scale: 1.02, y: -5 }}
      className="relative p-6 rounded-2xl backdrop-blur-md border transition-all duration-300"
      style={{
        background: `linear-gradient(135deg, ${color}15 0%, ${color}05 100%)`,
        borderColor: `${color}30`,
        boxShadow: `0 4px 30px ${color}10`
      }}
    >
      <div className="flex items-start gap-4">
        <span className="text-4xl">{icon}</span>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-1" style={{ color }}>{title}</h3>
          <p className="text-sm text-gray-400 mb-3">{subtitle}</p>
          <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

// 工作流程步驟組件
function WorkflowStep({ 
  number, 
  title, 
  description 
}: { 
  number: number; 
  title: string; 
  description: string; 
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className="flex gap-4 items-start"
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold">
        {number}
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white mb-1">{title}</h4>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

export default function SystemConfig() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative overflow-hidden">
        {/* 背景光暈 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        {/* Manus 製作標註 */}
        <motion.a
          href="https://manus.im"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute top-24 right-6 px-4 py-2 rounded-full backdrop-blur-md border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105 z-10"
        >
          <span className="text-sm">由 <span className="font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Manus</span> 製作</span>
        </motion.a>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto relative z-10"
        >
          {/* 頭像 */}
          <motion.div
            variants={fadeInUp}
            className="mb-8"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-2xl shadow-cyan-500/20"
            >
              <img src="/avatar.jpg" alt="默默超" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>

          {/* 主標題 */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            我是默默超
          </motion.h1>

          {/* 副標題 */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-300 mb-4"
          >
            MomoChao
          </motion.p>

          {/* 一句話定位 */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            一個把「完整性（Zero-Law）」落在現實世界的人
          </motion.p>

          {/* 品牌 Logo */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-8 mt-10"
          >
            <img src="/rs-logo.png" alt="虹靈御所" className="h-16 opacity-80 hover:opacity-100 transition-opacity" />
            <span className="text-gray-500">×</span>
            <img src="/mdc-logo.png" alt="MAISON DE CHAO" className="h-16 opacity-80 hover:opacity-100 transition-opacity" />
          </motion.div>

          {/* 向下滾動提示 */}
          <motion.div
            variants={fadeInUp}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-16"
          >
            <span className="text-gray-500 text-sm">向下滾動探索更多</span>
            <div className="mt-2 text-gray-500">↓</div>
          </motion.div>
        </motion.div>
      </section>

      {/* 我是誰 Section */}
      <section id="who" className="py-24 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">我是誰</span>
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="p-8 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10"
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              在元壹宇宙的七層架構裡，我被定義為<strong className="text-cyan-400">「人類端的原點／入口（Origin Node）」</strong>：
              讓抽象的宇宙規律不只停留在概念，而能被一個人的生命、選擇與行動真正示範出來。
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              我做的事不是單純「講道理」或「算命」。
            </p>
            <p className="text-xl text-white font-semibold">
              我做的是：<span className="text-cyan-400">把破碎收回整體</span>、<span className="text-purple-400">把混亂變成結構</span>、<span className="text-blue-400">把未完成的弧度走回圓</span>。
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 四個名字,一套系統 Section */}
      <section id="system" className="py-24 px-6 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-4 text-center"
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">四個名字，一套系統</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
          >
            這四個名字，其實是一套系統的四個面向
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6">
            <SystemCard
              icon="🌌"
              title="元壹宇宙"
              subtitle="我使用的世界觀座標"
              description="不是宗教，而是一個用來放置人生的宇宙級框架。它逼問的不是「你要什麼」，而是：你願不願意把你不想面對的那一半也算進來。"
              color="#7ad1ff"
            />
            <SystemCard
              icon="🧠"
              title="默默超思維"
              subtitle="把人生變可操作的工具層"
              description="元壹宇宙給方向；默默超思維提供「怎麼走」的操作系統。其核心不是聰明，而是完整。讓人不被時代推著走到崩潰，而是能回到主體、回到真實。"
              color="#9b8cff"
            />
            <SystemCard
              icon="🏛️"
              title="虹靈御所"
              subtitle="把系統落地的場域"
              description="不是命理館、不是心靈雞湯場。命理在這裡不是預測，而是「看清結構的語言」。提供的不是一句結論，而是一份可被使用的「人生操作說明」。"
              color="#7fe2c5"
            />
            <SystemCard
              icon="🎨"
              title="超烜創意"
              subtitle="系統之道轉為美學與產品"
              description="把「真、善、美、勇」與高端訂製感、文化關懷，轉成可被看見、可被收藏、可被傳播的作品與體驗。讓回歸具象化成風格、符號與作品。"
              color="#ff7aa8"
            />
          </div>
        </motion.div>
      </section>

      {/* 我與 AI 的合作方式 Section */}
      <section id="ai" className="py-24 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-4 text-center"
          >
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">我與 AI 的合作方式</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-2xl text-center text-white mb-12"
          >
            雙核心，而非外包
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="p-8 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 mb-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
                <div className="text-4xl mb-4">👤</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2">人類 (Human Integrity)</h3>
                <p className="text-gray-400 text-sm">承載情感、文化、意義</p>
                <p className="text-gray-300 mt-3">承擔弧度</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-purple-400 mb-2">AI (AI Clarity)</h3>
                <p className="text-gray-400 text-sm">承載結構、推論、清晰與一致性</p>
                <p className="text-gray-300 mt-3">協助校準結構</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="p-6 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20"
          >
            <p className="text-center text-gray-300">
              <strong className="text-yellow-400">CIP 原則：</strong>輸出清楚分成「已知」與「推測／創造」，不讓推測偽裝成事實。
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 我怎麼工作 Section */}
      <section id="workflow" className="py-24 px-6 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-4 text-center"
          >
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">我怎麼工作</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 text-center mb-12"
          >
            一個具體例子
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="p-6 rounded-xl bg-white/5 border border-white/10 mb-8"
          >
            <p className="text-gray-300 italic text-center">
              「我知道我想改，但我不知道該從哪裡下手。」
            </p>
          </motion.div>

          <div className="space-y-6">
            <WorkflowStep
              number={1}
              title="三層校準"
              description="分開此刻的情緒、實際說出的語言、背後的結構矛盾"
            />
            <WorkflowStep
              number={2}
              title="八階循環拆解"
              description="把問題拆成可驗證的假設與可行步驟"
            />
            <WorkflowStep
              number={3}
              title="命理作為結構儀表板"
              description="幫對方看見盲點與傾向，而不是把選擇權丟出去"
            />
            <WorkflowStep
              number={4}
              title="輸出路線圖"
              description="可執行的原則、下一步行動、以及「弧度要如何走回圓」的路線圖"
            />
          </div>
        </motion.div>
      </section>

      {/* 一句總結 Section */}
      <section id="summary" className="py-32 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="p-12 rounded-3xl backdrop-blur-md bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-white/10"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white leading-relaxed">
              <span className="text-cyan-400">元壹宇宙</span>提供座標；
              <span className="text-purple-400">默默超思維</span>提供方法；<br className="hidden md:block" />
              <span className="text-green-400">虹靈御所</span>提供落地；
              <span className="text-pink-400">超烜創意</span>提供載體。
            </h2>
            <p className="text-xl text-gray-300">
              而我，是把這四者接成同一條路的<strong className="text-white">人類端入口</strong>。
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-6 mb-6">
            <img src="/rs-logo.png" alt="虹靈御所" className="h-10 opacity-60" />
            <img src="/mdc-logo.png" alt="MAISON DE CHAO" className="h-10 opacity-60" />
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 默默超 MomoChao. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            理性煉慈悲，思維喚靈魂
          </p>
        </div>
      </footer>
    </div>
  );
}
