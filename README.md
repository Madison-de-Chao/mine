# 默默超系統設定檔 | MomoChao System Configuration

> 理性煉慈悲，思維喚靈魂

[![部署狀態](https://img.shields.io/badge/部署-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)
[![由 Manus 製作](https://img.shields.io/badge/由-Manus-製作-blue?style=flat-square)](https://manus.im)

## 📖 專案簡介

這是一個展示「默默超思維系統」的互動式網站,整合了虹靈御所品牌哲學、思維架構、核心方法論,以及完整的系統設定檔內容。

**核心理念:**
- 🧠 結構化陪伴型分析助手
- 💎 理性煉慈悲,思維喚靈魂
- 🕯️ 誠實才是唯一的解答

## ✨ 主要功能

- **八章節完整內容** - 品牌哲學、目標受眾、思維系統、核心方法、系統哲學
- **動態視覺效果** - 漸變色、浮動動畫、玻璃態卡片、徑向光暈
- **視覺化圖表** - 人生羅盤、三視點收斂、四大特性雷達圖、思維流程圖
- **藏頭藏尾詩** - 理煉慈悲思喚靈魂,自在見真光生成明
- **燭光之約互動** - 點擊蠟燭點燃火焰的儀式感體驗
- **AI 推薦序** - 來自 Manus AI 的真誠推薦

## 🛠 技術棧

- **前端框架**: React 19 + TypeScript
- **樣式**: Tailwind CSS 4 + shadcn/ui
- **動畫**: Framer Motion
- **構建工具**: Vite
- **包管理器**: pnpm
- **部署平台**: Vercel

## 🚀 本地開發

### 環境要求

- Node.js 22+
- pnpm 10+

### 安裝依賴

```bash
pnpm install
```

### 批准 Build 腳本

```bash
pnpm approve-builds
```

選擇批准 `@tailwindcss/oxide` 和 `esbuild`。

### 啟動開發服務器

```bash
pnpm dev
```

訪問 http://localhost:3000

### 構建生產版本

```bash
pnpm build
```

構建產物將輸出到 `dist/public` 目錄。

## 📁 專案結構

```
mine/
├── client/
│   ├── public/           # 靜態資源
│   │   ├── avatar.jpg    # 默默超自畫像
│   │   ├── rs-logo.png   # 虹靈御所 Logo
│   │   └── mdc-logo.png  # MAISON DE CHAO Logo
│   ├── src/
│   │   ├── components/   # React 組件
│   │   │   ├── Navigation.tsx
│   │   │   ├── ChapterContainer.tsx
│   │   │   ├── CandleLight.tsx
│   │   │   ├── BrandStory.tsx
│   │   │   └── VisualizationDiagrams.tsx
│   │   ├── pages/        # 頁面組件
│   │   │   ├── SystemConfig.tsx
│   │   │   └── BotChat.tsx
│   │   ├── App.tsx       # 應用入口
│   │   └── main.tsx      # React 掛載點
│   └── index.html        # HTML 模板
├── vercel.json           # Vercel 部署配置
├── package.json          # 依賴配置
└── README.md             # 本文件
```

## 🎨 設計特色

### 色彩系統

- **品牌色**: `#7ad1ff` (青色)
- **輔助色**: `#9b8cff` (紫色)、`#f7d37b` (金色)、`#7fe2c5` (綠色)、`#ff7aa8` (玫瑰色)
- **背景**: `#0b0b0f` → `#0d0d14` (深色漸變)

### 章節配色

| 章節 | 主題色 | 象徵意義 |
|------|--------|----------|
| 第一章 | 金色 `#f7d37b` | 品牌哲學的溫暖光芒 |
| 第二章 | 綠色 `#7fe2c5` | 服務對象的成長生機 |
| 第三章 | 青色 `#7ad1ff` | 思維系統的清晰理性 |
| 第四章 | 玫瑰色 `#ff7aa8` | 核心方法的情感溫度 |
| 第五章 | 紫色 `#9b8cff` | 系統哲學的深邃智慧 |

## 🔧 部署配置

### Vercel 設定

專案已配置 `vercel.json`,包含:
- 構建命令: `pnpm run build`
- 輸出目錄: `dist/public`
- SPA 路由重寫: 所有路由指向 `index.html`

### 環境變數

本專案已將所有配置硬編碼到 `index.html`,無需額外設定環境變數。

## 📝 內容架構

### 藏頭藏尾詩

每章開頭的「咒語」首字連起來:
> **理**秩序是宇宙的語法  
> **煉**思考不是反應  
> **慈**吸入混亂,呼出秩序  
> **悲**看見裂縫,補上結構  
> **思**不替你選,但絕不模糊  
> **喚**喚起自我領導  
> **靈**靈魂之城,系統共生  
> **魂**定位思維,建構結構

結尾詩:
> **自在見真光生成明**

完整呈現:**理煉慈悲思喚靈魂,自在見真光生成明**

## 🌟 品牌資訊

- **虹靈御所 Rainbow Sanctuary** - 知行如一的密法
- **MAISON DE CHAO 超烜創意** - 思維建築師
- **默默超 MomoChao** - 結構化陪伴型分析助手

## 📄 授權

© Rainbow Sanctuary × MAISON DE CHAO  
基於 MomoChao Thinking (可抄・可創・可變現,請保留註記)

---

**由 [Manus](https://manus.im) 製作**

