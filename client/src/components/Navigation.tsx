import { Link, useLocation } from "wouter";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const chapters = [
    { id: "chapter-0", label: "第0章 完整性哲學" },
    { id: "chapter-05", label: "第0.5章 伊存在論" },
    { id: "inquiry-law", label: "問的律" },
    { id: "chapter-1", label: "第一章 品牌哲學" },
    { id: "chapter-2", label: "第二章 我們為誰服務" },
    { id: "chapter-3", label: "第三章 思維系統" },
    { id: "chapter-4", label: "第四章 核心方法" },
    { id: "chapter-5", label: "第五章 系統哲學" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#0b0b0f]/95 backdrop-blur-md border-b border-[#22223a] z-50">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo / Title */}
        <Link
          href="/"
          className="text-lg font-bold bg-gradient-to-r from-[#7ad1ff] to-[#f7d37b] bg-clip-text text-transparent"
        >
          默默超思維系統
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${
              location === "/"
                ? "text-[#7ad1ff]"
                : "text-[#a7a7bb] hover:text-[#eaeaf1]"
            }`}
          >
            首頁
          </Link>
          
          {/* Chapters Dropdown */}
          <div className="relative group">
            <button className="text-sm font-medium text-[#a7a7bb] hover:text-[#eaeaf1] transition-colors flex items-center gap-1">
              章節導航
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 py-2 w-56 bg-[#141426]/95 backdrop-blur-md rounded-xl border border-[#22223a] shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {chapters.map((chapter) => (
                <button
                  key={chapter.id}
                  onClick={() => scrollToSection(chapter.id)}
                  className="w-full text-left px-4 py-2 text-sm text-[#a7a7bb] hover:text-[#7ad1ff] hover:bg-[#7ad1ff]/10 transition-colors"
                >
                  {chapter.label}
                </button>
              ))}
            </div>
          </div>

          <Link
            href="/bot"
            className={`text-sm font-medium transition-colors ${
              location === "/bot"
                ? "text-[#7ad1ff]"
                : "text-[#a7a7bb] hover:text-[#eaeaf1]"
            }`}
          >
            機器人對話
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#a7a7bb] hover:text-[#eaeaf1]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0b0b0f]/95 backdrop-blur-md border-t border-[#22223a]"
          >
            <div className="container mx-auto py-4 px-4 space-y-2">
              <Link
                href="/"
                className="block py-2 text-sm text-[#a7a7bb] hover:text-[#7ad1ff]"
                onClick={() => setIsMenuOpen(false)}
              >
                首頁
              </Link>
              <div className="border-t border-[#22223a] pt-2 mt-2">
                <p className="text-xs text-[#666] mb-2">章節導航</p>
                {chapters.map((chapter) => (
                  <button
                    key={chapter.id}
                    onClick={() => scrollToSection(chapter.id)}
                    className="block w-full text-left py-2 text-sm text-[#a7a7bb] hover:text-[#7ad1ff]"
                  >
                    {chapter.label}
                  </button>
                ))}
              </div>
              <div className="border-t border-[#22223a] pt-2 mt-2">
                <Link
                  href="/bot"
                  className="block py-2 text-sm text-[#a7a7bb] hover:text-[#7ad1ff]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  機器人對話
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
