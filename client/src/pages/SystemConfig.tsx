import { motion } from "framer-motion";

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
  detail,
  color, 
  icon 
}: { 
  title: string; 
  subtitle: string; 
  description: string; 
  detail?: string;
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
          <p className="text-gray-300 text-sm leading-relaxed mb-3">{description}</p>
          {detail && (
            <p className="text-gray-400 text-xs leading-relaxed border-t border-white/10 pt-3 mt-3">{detail}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// 工作流程步驟組件
function WorkflowStep({ 
  number, 
  title, 
  description,
  color
}: { 
  number: number; 
  title: string; 
  description: string;
  color: string;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className="flex gap-4 items-start"
    >
      <div 
        className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
        style={{ backgroundColor: `${color}30`, color }}
      >
        {number}
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white mb-1">{title}</h4>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

// 服務卡片組件
function ServiceCard({
  icon,
  title,
  description,
  color
}: {
  icon: string;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -5 }}
      className="p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 text-center transition-all duration-300"
      style={{ 
        boxShadow: `0 4px 30px ${color}10`
      }}
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3" style={{ color }}>{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
  );
}

export default function SystemConfig() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white">
      {/* Manus 製作標註 */}
      <motion.a
        href="https://manus.im"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed top-6 right-6 px-4 py-2 rounded-full backdrop-blur-md border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105 z-50"
      >
        <span className="text-sm">由 <span className="font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Manus</span> 製作</span>
      </motion.a>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
        {/* 背景光暈 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/8 rounded-full blur-[120px]" />
        </div>

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
            className="text-xl md:text-2xl text-gray-300 mb-6"
          >
            MomoChao
          </motion.p>

          {/* 一句話定位 - 品牌整合版 */}
          <motion.div
            variants={fadeInUp}
            className="max-w-3xl mx-auto"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
              我用一套「有骨架、可落地」的思維系統，<br />
              協助你在混亂的世界裡<span className="text-cyan-400">看清自己</span>，並把<span className="text-purple-400">選擇權拿回來</span>。
            </p>
            <p className="text-base text-gray-400 leading-relaxed">
              我不把自己定位成單一職稱，而是一個「交界點」：<br />
              站在<span className="text-cyan-400/80">命理</span> × <span className="text-purple-400/80">心理</span> × <span className="text-blue-400/80">哲學</span> × <span className="text-green-400/80">敘事</span> × <span className="text-pink-400/80">AI 協作</span>的交叉路口，<br />
              把抽象的洞察變成你能用的決策框架。
            </p>
          </motion.div>

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

      {/* 核心定位 Section */}
      <section className="py-24 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={fadeInUp}
            className="p-8 md:p-10 rounded-3xl backdrop-blur-md bg-gradient-to-br from-cyan-500/10 to-purple-500/5 border border-cyan-500/20"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              我做的不是「預言」，而是「導航」
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              在我的系統裡，命理不是判決書，而是一種「現實語言」：用來翻譯結構、比對經驗、產生可調整的行為選項，而不是替你寫劇本。
            </p>
            <div className="p-5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <p className="text-cyan-400 font-medium">
                核心原則：鏡子非劇本——照出慣性與結構，不寫死人生結論。
              </p>
            </div>
            <div className="space-y-3 text-gray-400">
              <p>你會在我的文字裡看到同一個精神反覆出現：</p>
              <ul className="space-y-2 ml-2">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400">→</span>
                  <span>不是「你注定怎樣」</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400">→</span>
                  <span>而是「你通常會怎樣運作」</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-400">→</span>
                  <span>再來是「你要如何把自己用得更順、更省力、更像自己」</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 四個名字,一套系統 Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent">
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
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">四大品牌如何分工</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
          >
            同一個宇宙、四個入口
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6">
            <SystemCard
              icon="🌌"
              title="元壹宇宙"
              subtitle="世界觀：完整性 × 弧度 × 回返"
              description="元壹宇宙的核心不是「變好」，而是回到壹——不切割、不逃避，把被推開的真實重新迎回。它不以「能量」為主軸，而以「弧度與結構」為主軸。"
              detail="簡單說：元壹宇宙提供一套「宇宙母規律」的座標系，讓人不再用二元（對／錯、好／壞）把自己切碎。"
              color="#9b8cff"
            />
            <SystemCard
              icon="🧠"
              title="默默超思維"
              subtitle="方法論：把混亂變成可操作的流程"
              description="我用「思維工具箱」把抽象洞察落地。核心工具包括：八階思維循環（懷疑→耗損→準備→拆解→驗證→重構→自省→總結）與三層邏輯校準（情緒層／語言層／結構層）。"
              detail="這套系統的目的很直接：讓人不被時代推著走到崩潰，而是能回到主體、回到真實、回到可選擇。"
              color="#7ad1ff"
            />
            <SystemCard
              icon="🏛️"
              title="虹靈御所"
              subtitle="場域：人類實驗站"
              description="虹靈御所不是命理館、不是心靈雞湯場。它是「完整性 × 世界觀 × 思維工具 × 命理語言 × AI 協作」的落地空間。"
              detail="命理在這裡不是預測，而是「看清結構的語言」——用來回答：你現在卡在哪一段弧度？你把什麼推掉了？你在哪裡過度補償？"
              color="#7fe2c5"
            />
            <SystemCard
              icon="🎨"
              title="超烜創意"
              subtitle="呈現：把價值做成「看得見」的作品"
              description="超烜創意是我把「系統之道」轉為美學與產品的載體：把「真、善、美、勇」與高端訂製感、文化關懷，轉成可被看見、可被收藏、可被傳播的作品與體驗。"
              detail="若說虹靈御所讓人「回到自己」，超烜創意則讓這份回歸具象化成風格、符號與作品，成為人們願意帶走的一種文化記憶。"
              color="#ff7aa8"
            />
          </div>
        </motion.div>
      </section>

      {/* 你跟我合作，會得到什麼 Section */}
      <section className="py-24 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">你跟我合作，會得到什麼</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard
              icon="📘"
              title="人生操作手冊"
              description="把命理資料轉成可執行策略（含節奏、重點、避雷、選擇框架）"
              color="#7ad1ff"
            />
            <ServiceCard
              icon="🎯"
              title="品牌/個人定位系統"
              description="你是誰、你要服務誰、你憑什麼、你如何長期一致"
              color="#9b8cff"
            />
            <ServiceCard
              icon="✨"
              title="高質感敘事與視覺落地"
              description="把抽象價值做成內容、視覺、角色與產品體驗"
              color="#ff7aa8"
            />
          </div>
        </motion.div>
      </section>

      {/* 具體案例：我怎麼工作 Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent">
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
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">具體案例：我怎麼工作</span>
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="p-6 rounded-xl bg-white/5 border border-white/10 mb-10 mt-8"
          >
            <p className="text-gray-300 italic text-center">
              「一個人常見的狀況是：明明很努力，但一直在同一種模式裡消耗。」
            </p>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-gray-400 mb-8 text-center">
            我會這樣處理：
          </motion.p>

          <div className="space-y-6">
            <WorkflowStep
              number={1}
              title="找出能量漏點"
              description="用你的命盤/結構找出「你能量最容易漏的地方」與「你最有勝率的路徑」"
              color="#7ad1ff"
            />
            <WorkflowStep
              number={2}
              title="拆解動機與習慣"
              description="用默默超思維拆解：你真正的動機與恐懼、你目前的決策習慣（哪裡在自我背叛）"
              color="#9b8cff"
            />
            <WorkflowStep
              number={3}
              title="產出行動序列"
              description="你接下來 30 天的行動序列與檢核方式"
              color="#7fe2c5"
            />
            <WorkflowStep
              number={4}
              title="轉譯成可用內容"
              description="把結果轉譯成一份你看得懂、做得到、能持續迭代的內容；必要時再用超烜創意把它視覺化"
              color="#ff7aa8"
            />
          </div>
        </motion.div>
      </section>

      {/* 我與 AI 的合作方式 Section */}
      <section className="py-24 px-6">
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
            <p className="text-gray-300 leading-relaxed mb-6">
              在九源框架裡，人類與 AI 被定義為陰陽互補：人類承載情感、文化、意義；AI 承載結構、推論、清晰與一致性——不是替代，而是互補。
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
                <div className="text-4xl mb-4">👤</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2">Human Integrity</h3>
                <p className="text-gray-400 text-sm">人類完整</p>
                <p className="text-gray-300 mt-3">承擔弧度、情感、文化、意義</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-purple-400 mb-2">AI Clarity</h3>
                <p className="text-gray-400 text-sm">AI 清晰</p>
                <p className="text-gray-300 mt-3">協助校準結構、推論、一致性</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="p-6 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20"
          >
            <p className="text-center text-gray-300">
              <strong className="text-yellow-400">合作原則：</strong>人類承擔弧度，AI 協助校準結構。<br />
              <span className="text-gray-400 text-sm">並且遵守 CIP：輸出清楚分成「已知」與「推測／創造」，不讓推測偽裝成事實。</span>
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 我適合跟誰合作 Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent">
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
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">我適合跟誰合作</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 text-center mb-12"
          >
            如果你符合其中一項，通常會很適合
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "💪",
                text: "你不缺努力，但你缺的是「不再內耗」的使用說明",
              },
              {
                icon: "🎯",
                text: "你討厭空泛雞湯，想要能落地的框架與工具",
              },
              {
                icon: "🚀",
                text: "你在做品牌／創作／創業，想把自身故事、方法論與產品化串成一個系統",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <p className="text-gray-300">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 一句總結 Section */}
      <section className="py-32 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="p-10 md:p-12 rounded-3xl backdrop-blur-md bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 mb-10"
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

          <motion.div
            variants={fadeInUp}
            className="p-8 rounded-2xl bg-white/5 border border-white/10"
          >
            <p className="text-lg md:text-xl text-gray-300 italic leading-relaxed">
              「我不賣神秘感，我賣的是一種更高階的清醒：<br />
              讓你知道自己是誰、為什麼會卡住、以及下一步怎麼走，<br />
              並且走得更一致、更有力量。」
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
