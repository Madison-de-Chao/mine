import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ChapterContainerProps {
  chapterNumber: string;
  chapterTitle: string;
  chapterColor: string;
  children: ReactNode;
  isVisible: boolean;
}

export function ChapterContainer({
  chapterNumber,
  chapterTitle,
  chapterColor,
  children,
  isVisible,
}: ChapterContainerProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      className="min-h-screen py-20 px-4 relative"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {/* Chapter Border Frame */}
      <div
        className="absolute inset-0 border-4 rounded-3xl m-8 opacity-20"
        style={{ borderColor: chapterColor }}
      />

      {/* Chapter Header */}
      <div className="container mx-auto mb-16 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="inline-block px-8 py-3 rounded-full border-2 mb-4"
            style={{
              borderColor: chapterColor,
              backgroundColor: `${chapterColor}15`,
            }}
          >
            <span
              className="text-lg font-semibold"
              style={{ color: chapterColor }}
            >
              {chapterNumber}
            </span>
          </div>
          <h2
            className="text-5xl md:text-6xl font-bold"
            style={{ color: chapterColor }}
          >
            {chapterTitle}
          </h2>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          className="w-32 h-1 mx-auto mt-8 rounded-full"
          style={{ backgroundColor: chapterColor }}
          initial={{ width: 0 }}
          animate={isVisible ? { width: 128 } : { width: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </div>

      {/* Chapter Content */}
      <div className="container mx-auto relative z-10">{children}</div>

      {/* Background Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[150px] opacity-10"
          style={{ backgroundColor: chapterColor }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[150px] opacity-10"
          style={{ backgroundColor: chapterColor }}
        />
      </div>
    </motion.div>
  );
}

