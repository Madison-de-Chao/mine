import { motion } from "framer-motion";

// 弧度視覺化組件 - 壹→伊→壹
export function ArcDiagram() {
  return (
    <div className="flex justify-center py-8">
      <svg viewBox="0 0 500 280" className="w-full max-w-2xl">
        {/* 背景光暈 */}
        <defs>
          <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7ad1ff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#7ad1ff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f7d37b" />
            <stop offset="50%" stopColor="#7ad1ff" />
            <stop offset="100%" stopColor="#9b8cff" />
          </linearGradient>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#f7d37b" />
          </marker>
          <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#9b8cff" />
          </marker>
        </defs>
        
        {/* 弧度路徑 */}
        <motion.path
          d="M 80 200 Q 250 30 420 200"
          fill="none"
          stroke="url(#arcGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
        
        {/* 壹 - 起點 */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <circle cx="80" cy="200" r="35" fill="#f7d37b" opacity="0.9" />
          <circle cx="80" cy="200" r="45" fill="none" stroke="#f7d37b" strokeWidth="2" opacity="0.3" />
          <text x="80" y="208" textAnchor="middle" fill="#0b0b0f" fontSize="24" fontWeight="bold">壹</text>
          <text x="80" y="260" textAnchor="middle" fill="#f7d37b" fontSize="14">本源 Origin</text>
        </motion.g>
        
        {/* 伊 - 頂點 */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <circle cx="250" cy="60" r="40" fill="url(#glowGradient)" />
          <circle cx="250" cy="60" r="35" fill="#7ad1ff" opacity="0.9" />
          <circle cx="250" cy="60" r="50" fill="none" stroke="#7ad1ff" strokeWidth="2" opacity="0.3" />
          <text x="250" y="68" textAnchor="middle" fill="#0b0b0f" fontSize="24" fontWeight="bold">伊</text>
          <text x="250" y="20" textAnchor="middle" fill="#7ad1ff" fontSize="14">位移 Displaced</text>
        </motion.g>
        
        {/* 壹 - 回返 */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <circle cx="420" cy="200" r="35" fill="#9b8cff" opacity="0.9" />
          <circle cx="420" cy="200" r="45" fill="none" stroke="#9b8cff" strokeWidth="2" opacity="0.3" />
          <text x="420" y="208" textAnchor="middle" fill="#0b0b0f" fontSize="24" fontWeight="bold">壹</text>
          <text x="420" y="260" textAnchor="middle" fill="#9b8cff" fontSize="14">回返 Return</text>
        </motion.g>
        
        {/* 箭頭標示 */}
        <motion.path
          d="M 115 175 L 200 90"
          stroke="#f7d37b"
          strokeWidth="2"
          strokeDasharray="5,5"
          markerEnd="url(#arrowhead)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          transition={{ delay: 2.5 }}
          viewport={{ once: true }}
        />
        <motion.path
          d="M 300 90 L 385 175"
          stroke="#9b8cff"
          strokeWidth="2"
          strokeDasharray="5,5"
          markerEnd="url(#arrowhead2)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          transition={{ delay: 2.7 }}
          viewport={{ once: true }}
        />
        
        {/* 標籤 */}
        <motion.text
          x="150"
          y="120"
          fill="#f7d37b"
          fontSize="12"
          opacity="0.8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          transition={{ delay: 2.8 }}
          viewport={{ once: true }}
        >
          推開
        </motion.text>
        <motion.text
          x="330"
          y="120"
          fill="#9b8cff"
          fontSize="12"
          opacity="0.8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          transition={{ delay: 3 }}
          viewport={{ once: true }}
        >
          迎回
        </motion.text>
      </svg>
    </div>
  );
}

// 完整性哲學章節
interface PhilosophySectionProps {
  isVisible: boolean;
}

export function IntegrityPhilosophySection({ isVisible }: PhilosophySectionProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className="space-y-12"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {/* 核心觀點 */}
      <motion.div
        className="max-w-4xl mx-auto bg-[#141426]/80 backdrop-blur-sm p-10 rounded-2xl border border-[#f7d37b]/30"
        variants={cardVariants}
      >
        <h3 className="text-3xl font-bold mb-6 text-[#f7d37b]">核心觀點</h3>
        <p className="text-2xl text-[#eaeaf1] mb-6 leading-relaxed">
          世界缺乏的並非「正確性」，而是「<span className="text-[#f7d37b] font-semibold">完整性</span>」。
        </p>
        <p className="text-lg text-[#a7a7bb] leading-relaxed">
          近代人類文明長期由二元分類主導：正確／錯誤、成功／失敗、有用／無用。
          這種框架提高了效率，但帶來一個被廣泛忽略的後果：
          大量仍具價值的「未完成部分」被丟棄了。
        </p>
      </motion.div>

      {/* 錯誤不是廢棄物 */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <motion.div
          className="bg-[#141426]/80 backdrop-blur-sm p-8 rounded-2xl border border-[#7fe2c5]/30"
          variants={cardVariants}
          transition={{ delay: 0.1 }}
        >
          <h4 className="text-2xl font-bold mb-6 text-[#7fe2c5]">錯誤不是廢棄物</h4>
          <ul className="space-y-4 text-[#eaeaf1]">
            <li className="flex items-start gap-3">
              <span className="text-[#7fe2c5] mt-1">•</span>
              <span>錯誤是尚未成熟的部分</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#7fe2c5] mt-1">•</span>
              <span>失敗是前進方向的組成</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#7fe2c5] mt-1">•</span>
              <span>陰影是結構的一側</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#7fe2c5] mt-1">•</span>
              <span>幻覺是創造力的雛形</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#7fe2c5] mt-1">•</span>
              <span>不確定性是突破的入口</span>
            </li>
          </ul>
          <p className="mt-6 text-[#f7d37b] italic text-lg">
            「錯誤本身不構成問題；丟棄錯誤才構成問題。」
          </p>
        </motion.div>

        <motion.div
          className="bg-[#141426]/80 backdrop-blur-sm p-8 rounded-2xl border border-[#7ad1ff]/30"
          variants={cardVariants}
          transition={{ delay: 0.2 }}
        >
          <h4 className="text-2xl font-bold mb-6 text-[#7ad1ff]">弧度模型</h4>
          <p className="text-[#eaeaf1] mb-6 leading-relaxed">
            完整性哲學以「弧度模型」取代「二元模型」：
          </p>
          <ul className="space-y-4 text-[#eaeaf1]">
            <li className="flex items-start gap-3">
              <span className="text-[#7ad1ff] mt-1">◦</span>
              <span>所有狀態都在圓周上的不同位置</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#7ad1ff] mt-1">◦</span>
              <span>所有碎片皆為未完成的弧線</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#7ad1ff] mt-1">◦</span>
              <span>每一段皆指向圓心</span>
            </li>
          </ul>
          <p className="mt-6 text-[#f7d37b] italic text-lg">
            「錯誤不是偏離；錯誤是通往完整的一條路徑。」
          </p>
        </motion.div>
      </div>

      {/* 完整性的功能 */}
      <motion.div
        className="max-w-4xl mx-auto"
        variants={cardVariants}
        transition={{ delay: 0.3 }}
      >
        <h4 className="text-2xl font-bold mb-8 text-center text-[#f7d37b]">完整性的功能</h4>
        <div className="grid grid-cols-3 gap-6">
          {[
            { title: "不丟棄", desc: "保留所有生成物" },
            { title: "不切割", desc: "維持整體連結" },
            { title: "徹底理解", desc: "並完整整合" },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="text-center p-6 bg-[#141426]/60 rounded-xl border border-[#f7d37b]/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-3xl font-bold text-[#f7d37b] mb-2">{item.title}</p>
              <p className="text-sm text-[#a7a7bb]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

// 伊(ANOTHER)存在論章節
export function AnotherOntologySection({ isVisible }: PhilosophySectionProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className="space-y-12"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {/* 伊的本質 */}
      <motion.div
        className="max-w-4xl mx-auto bg-[#141426]/80 backdrop-blur-sm p-10 rounded-2xl border border-[#7ad1ff]/30"
        variants={cardVariants}
      >
        <h3 className="text-3xl font-bold mb-6 text-[#7ad1ff]">伊的本質</h3>
        <p className="text-lg text-[#eaeaf1] mb-6 leading-relaxed">
          伊（ANOTHER）並非源自幻想或心理的分裂，
          更不是另一個靈魂、另一個意識或另一個生命。
        </p>
        <p className="text-lg text-[#a7a7bb] mb-8 leading-relaxed">
          它是一個「語言 × 宇宙 × 心理 × 責任」共同構成的存在本質。
        </p>
        <div className="p-6 bg-[#7ad1ff]/10 rounded-xl border border-[#7ad1ff]/40 text-center">
          <p className="text-2xl text-[#7ad1ff] font-bold">
            「伊」是被推開的「壹」
          </p>
        </div>
      </motion.div>

      {/* 弧度視覺化 */}
      <motion.div
        className="max-w-4xl mx-auto"
        variants={cardVariants}
        transition={{ delay: 0.1 }}
      >
        <h4 className="text-2xl font-bold mb-4 text-center text-[#7ad1ff]">壹 → 伊 → 壹 的弧度</h4>
        <ArcDiagram />
        <p className="text-center text-[#a7a7bb] mt-4">
          弧度從壹出發，在伊累積，最終回返到壹
        </p>
      </motion.div>

      {/* 語音哲學與責任外包 */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <motion.div
          className="bg-[#141426]/80 backdrop-blur-sm p-8 rounded-2xl border border-[#9b8cff]/30"
          variants={cardVariants}
          transition={{ delay: 0.2 }}
        >
          <h4 className="text-2xl font-bold mb-6 text-[#9b8cff]">語音哲學</h4>
          <p className="text-[#eaeaf1] mb-4">在台語中，「伊（Ī）」的發音同時承載：</p>
          <ul className="space-y-3 text-[#eaeaf1]">
            <li className="flex items-start gap-3">
              <span className="text-[#9b8cff] mt-1">•</span>
              <span>他／她／它（第三人稱）</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#9b8cff] mt-1">•</span>
              <span>彼（the other / 他者）</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#9b8cff] mt-1">•</span>
              <span>"一" 的古語韻母</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#9b8cff] mt-1">•</span>
              <span>語言中"不是我"的投射位置</span>
            </li>
          </ul>
          <p className="mt-6 text-[#7ad1ff] italic text-lg">
            「壹即伊，伊即壹」
          </p>
        </motion.div>

        <motion.div
          className="bg-[#141426]/80 backdrop-blur-sm p-8 rounded-2xl border border-[#ff7aa8]/30"
          variants={cardVariants}
          transition={{ delay: 0.3 }}
        >
          <h4 className="text-2xl font-bold mb-6 text-[#ff7aa8]">責任外包</h4>
          <p className="text-[#eaeaf1] mb-6 leading-relaxed">
            當生命拒絕承擔、拒絕誠實、拒絕面對自身真實時，
            被推開、被否認、被外包的那個「壹」
            就會自然落入「伊」的位置。
          </p>
          <p className="text-[#ff7aa8] italic text-lg">
            「人類文明的混亂起點，就是每個人都在推責任。」
          </p>
        </motion.div>
      </div>

      {/* 陰影本體論修正 */}
      <motion.div
        className="max-w-5xl mx-auto bg-[#141426]/80 backdrop-blur-sm p-10 rounded-2xl border border-[#7ad1ff]/30"
        variants={cardVariants}
        transition={{ delay: 0.4 }}
      >
        <h4 className="text-2xl font-bold mb-8 text-center text-[#7ad1ff]">陰影本體論修正</h4>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-[#ff6b6b] mb-4 font-semibold">❌ 傳統觀點</p>
            <ul className="space-y-2 text-[#a7a7bb]">
              <li>• 陰影是黑暗</li>
              <li>• 陰影是邪惡</li>
              <li>• 陰影是敵人</li>
              <li>• 陰影需要被消滅</li>
            </ul>
          </div>
          <div>
            <p className="text-[#7fe2c5] mb-4 font-semibold">✓ 元壹宇宙觀點</p>
            <ul className="space-y-2 text-[#eaeaf1]">
              <li>• 陰影是被推開的壹</li>
              <li>• 陰影是被迫承受的真實</li>
              <li>• 陰影是唯一的受害者</li>
              <li>• 陰影需要被迎回</li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-center text-[#7ad1ff] italic text-xl">
          「伊不是禍源，伊是唯一受害者。」
        </p>
      </motion.div>
    </motion.div>
  );
}

// 問的律章節
export function InquiryLawSection({ isVisible }: PhilosophySectionProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className="space-y-12"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {/* 提問的本質 */}
      <motion.div
        className="max-w-4xl mx-auto bg-[#141426]/80 backdrop-blur-sm p-10 rounded-2xl border border-[#7fe2c5]/30"
        variants={cardVariants}
      >
        <h3 className="text-3xl font-bold mb-6 text-[#7fe2c5]">提問的本質</h3>
        <p className="text-xl text-[#eaeaf1] mb-6 leading-relaxed">
          在完整性哲學中，壹（One）是所有存在的源頭與本體。
          而提問（Why）是壹在現象界的第一個動作。
        </p>
        <p className="text-lg text-[#a7a7bb] leading-relaxed">
          提問並非好奇心，提問是：「尋找本源（Origin）之必要行為。」
        </p>
      </motion.div>

      {/* 向外與向內的提問 */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <motion.div
          className="bg-[#141426]/80 backdrop-blur-sm p-8 rounded-2xl border border-[#7ad1ff]/30"
          variants={cardVariants}
          transition={{ delay: 0.1 }}
        >
          <h4 className="text-2xl font-bold mb-6 text-[#7ad1ff]">向外的提問</h4>
          <p className="text-[#a7a7bb] mb-4">尋找萬物的回家之路：</p>
          <ul className="space-y-3 text-[#eaeaf1]">
            <li>• 「它為什麼會變成這樣？」</li>
            <li>• 「這段關係從哪裡開始偏移？」</li>
            <li>• 「這個模式的源頭是什麼？」</li>
            <li>• 「這個情緒想回到哪裡？」</li>
          </ul>
          <p className="mt-6 text-[#7fe2c5] italic">
            每一個 Why 都是一種導引
          </p>
        </motion.div>

        <motion.div
          className="bg-[#141426]/80 backdrop-blur-sm p-8 rounded-2xl border border-[#9b8cff]/30"
          variants={cardVariants}
          transition={{ delay: 0.2 }}
        >
          <h4 className="text-2xl font-bold mb-6 text-[#9b8cff]">向內的提問</h4>
          <p className="text-[#a7a7bb] mb-4">尋找自己的弧度：</p>
          <ul className="space-y-3 text-[#eaeaf1]">
            <li>• 「我從哪裡來？」</li>
            <li>• 「我要回去哪裡？」</li>
            <li>• 「我真正的家在哪？」</li>
            <li>• 「我推開了什麼？」</li>
          </ul>
          <p className="mt-6 text-[#7fe2c5] italic">
            向內 Why 是走上「自己的家」
          </p>
        </motion.div>
      </div>

      {/* 提問是修復 */}
      <motion.div
        className="max-w-3xl mx-auto text-center"
        variants={cardVariants}
        transition={{ delay: 0.3 }}
      >
        <div className="bg-[#141426]/60 backdrop-blur-sm p-10 rounded-2xl border border-[#7fe2c5]/30">
          <p className="text-2xl text-[#eaeaf1] leading-relaxed mb-4">
            提問不是學習，而是<span className="text-[#7fe2c5] font-bold">修復</span>。
          </p>
          <p className="text-xl text-[#a7a7bb] leading-relaxed">
            提問是壹向世界伸出的手，
            <br />
            也是世界回到壹的第一步。
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
