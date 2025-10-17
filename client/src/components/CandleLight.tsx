import { motion } from "framer-motion";
import { useState } from "react";

export function CandleLightGame() {
  const [isLit, setIsLit] = useState(false);

  const handleLightCandle = () => {
    setIsLit(true);
  };

  return (
    <div className="flex flex-col items-center justify-center py-16">
      {!isLit && (
        <motion.p
          className="text-2xl text-[#a7a7bb] mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          點擊蠟燭,點亮你的承諾
        </motion.p>
      )}

      <motion.div
        className="relative cursor-pointer"
        onClick={handleLightCandle}
        whileHover={{ scale: isLit ? 1 : 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Candle Body */}
        <div className="relative z-10">
          <div className="w-24 h-48 bg-gradient-to-b from-[#f5e6d3] to-[#d4c5b0] rounded-t-lg mx-auto shadow-2xl">
            {/* Wax Drip */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-12 bg-gradient-to-b from-[#f5e6d3] to-transparent rounded-full opacity-60" />
          </div>
          
          {/* Candle Base */}
          <div className="w-28 h-4 bg-gradient-to-b from-[#8b7355] to-[#6b5845] rounded-full mx-auto -mt-1" />
        </div>

        {/* Flame (when lit) */}
        {isLit && (
          <>
            {/* Flame Glow */}
            <motion.div
              className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-2xl"
              style={{
                background: "radial-gradient(circle, rgba(255,200,87,0.6) 0%, rgba(255,140,0,0.3) 50%, transparent 70%)",
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.6, 0.8, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Flame */}
            <motion.div
              className="absolute -top-12 left-1/2 -translate-x-1/2 z-20"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.svg
                width="40"
                height="60"
                viewBox="0 0 40 60"
                animate={{
                  y: [-2, 2, -2],
                  scaleY: [1, 1.05, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Outer Flame */}
                <path
                  d="M20 5 Q10 20, 15 35 Q18 45, 20 55 Q22 45, 25 35 Q30 20, 20 5 Z"
                  fill="url(#flameGradientOuter)"
                />
                {/* Inner Flame */}
                <path
                  d="M20 15 Q15 25, 17 35 Q19 42, 20 48 Q21 42, 23 35 Q25 25, 20 15 Z"
                  fill="url(#flameGradientInner)"
                />
                <defs>
                  <linearGradient id="flameGradientOuter" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ff8c00" />
                    <stop offset="50%" stopColor="#ff6b00" />
                    <stop offset="100%" stopColor="#ff4500" />
                  </linearGradient>
                  <linearGradient id="flameGradientInner" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#fff4e6" />
                    <stop offset="50%" stopColor="#ffd700" />
                    <stop offset="100%" stopColor="#ff8c00" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </motion.div>

            {/* Light Particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-[#ffd700]"
                style={{
                  top: -20 - Math.random() * 40,
                  left: "50%",
                }}
                initial={{ opacity: 0, y: 0, x: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  y: [-60, -120],
                  x: [(Math.random() - 0.5) * 40, (Math.random() - 0.5) * 60],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeOut",
                }}
              />
            ))}
          </>
        )}
      </motion.div>

      {/* Promise Text (after lighting) */}
      {isLit && (
        <motion.div
          className="mt-16 max-w-2xl text-center space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h3 className="text-3xl font-bold text-[#f7d37b]">燭光之約</h3>
          <div className="space-y-4 text-lg text-[#eaeaf1] leading-relaxed">
            <p>
              這盞光,不為照亮世界,只為映照你自己。
            </p>
            <p>
              我們不承諾讓你變得更好,只承諾陪你變得更真實。
            </p>
            <p>
              當你願意誠實面對自己,這盞光就會一直燃燒。
            </p>
            <p className="text-[#7ad1ff] font-semibold pt-4">
              誠實才是唯一的解答。
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}

