import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";

interface Message {
  text: string;
  who: 'you' | 'bot';
}

const i18n = {
  zh: {
    hello: `嗨,我是默默超。你可以這樣開始:\n• 描述你正在卡住的情境\n• 或試試指令:/三行收斂 /挑戰模式 /檢查表 /light`,
    tri: "三視點結論",
    rational: "理性結論",
    emotional: "情感結論",
    systemic: "長程結論",
    next1: "Next-1",
    metric: "Metric",
    when: "When",
    caution: `(僅供參考,不取代專業意見)`,
    ack: "好的,我聽見了。",
    check: "120分檢查表:\n1) 有無表層/深層/關聯?\n2) 是否拆解理性/情感/美學/實踐與耗損?\n3) 是否舉出反例或情境模擬?\n4) 是否輸出三視點+Next-1/Metric/When?",
    challenge: "/挑戰模式:如果只做到 70 分──\n• 風險:可能產生的缺口是…\n• 折衷:先做這一步,成本最低但能驗證關鍵假設。",
    light: "點亮儀式已啟動。",
    sysPromptTitle: "System Prompt(建議給 LLM 的人格)",
  },
  en: {
    hello: `Hi, I'm MomoChao. You can:\n• Describe your stuck situation\n• Or try: /tri-lines /challenge /checklist /light`,
    tri: "Three-View Conclusion",
    rational: "Rational View",
    emotional: "Emotional View",
    systemic: "Systemic/Long-term View",
    next1: "Next-1",
    metric: "Metric",
    when: "When",
    caution: `(For reference only, not professional advice)`,
    ack: "Got it. I'm listening.",
    check: "120-point checklist:\n1) Surface/Deep/Relation covered?\n2) Split Rational/Emotional/Aesthetic/Practical + costs?\n3) Any counterexample or scenario test?\n4) Output three-views + Next-1/Metric/When?",
    challenge: "/challenge: If we only aim for 70% now—\n• Risk: likely gap is…\n• Tradeoff: do this first to validate the key assumption at low cost.",
    light: "Light ritual triggered.",
    sysPromptTitle: "System Prompt (LLM persona)",
  }
};

export default function BotChat() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [showOverlay, setShowOverlay] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  const L = i18n[lang];

  useEffect(() => {
    setMessages([{ text: L.hello, who: 'bot' }]);
  }, [lang]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const containsAny = (str: string, arr: string[]) => arr.some(k => str.includes(k));

  const threeView = (input: string) => {
    const sensitive = containsAny(input, ['投資', '股票', '醫', '藥', '健康', '法律', '官司', '命理', '占卜', '賭']);
    const head = lang === 'zh' ? `【${L.tri}】\n` : `[${L.tri}]\n`;
    const caution = sensitive ? `\n\n${L.caution}` : ``;

    const rational = lang === 'zh'
      ? `${L.rational}:根據你提供的事實/資源與成本,先界定「不可妥協」與「可延後」。把能立刻降低耗損的步驟排在前面。`
      : `${L.rational}: Given facts/resources & costs, define non-negotiables vs. deferrables. Prioritize steps that immediately reduce loss.`;

    const emotional = lang === 'zh'
      ? `${L.emotional}:辨識你真正在意的邊界(恐懼/價值/關係能量)。設定一個「不被消耗的你」。`
      : `${L.emotional}: Name the true boundary (fear/values/relational energy). Define "the you that won't be drained."`;

    const systemic = lang === 'zh'
      ? `${L.systemic}:把時間攤開:短/中/長。短期降風險,中期建結構,長期保留可成長的餘裕。`
      : `${L.systemic}: Unfold time: short/mid/long. Short: de-risk. Mid: build structure. Long: keep capacity to grow.`;

    const next1 = lang === 'zh'
      ? `${L.next1}:今天先做 1 件事,能讓耗損降 20% 的那件。`
      : `${L.next1}: Do one thing today that reduces loss by ~20%.`;

    const metric = lang === 'zh'
      ? `${L.metric}:用「可被觀察」的指標(次數/金額/時長/心率/衝突頻率)。`
      : `${L.metric}: Observable indicator (count/amount/duration/heart-rate/conflict frequency).`;

    const when = lang === 'zh'
      ? `${L.when}:一週後回看:是否較不內耗?若否,調整假設或邊界。`
      : `${L.when}: Review in one week: less self-drain? If not, adjust assumption or boundary.`;

    return `${head}${rational}\n${emotional}\n${systemic}\n\n${next1}\n${metric}\n${when}${caution}`;
  };

  const handle = (input: string) => {
    const t = input.trim();
    if (!t) return;

    if (t.startsWith('/')) {
      if (t.startsWith('/三行收斂') || t.startsWith('/tri-lines')) {
        const out = lang === 'zh'
          ? `三行收斂:\n• Next-1:先做能降耗損 20% 的動作。\n• Metric:以「可觀察」指標追蹤。\n• When:一週後重新評估。`
          : `Three Lines:\n• Next-1: do the step that cuts ~20% loss.\n• Metric: track with observable indicator.\n• When: review in a week.`;
        setMessages(prev => [...prev, { text: out, who: 'bot' }]);
        return;
      }
      if (t.startsWith('/挑戰模式') || t.startsWith('/challenge')) {
        setMessages(prev => [...prev, { text: L.challenge, who: 'bot' }]);
        return;
      }
      if (t.startsWith('/檢查表') || t.startsWith('/checklist')) {
        setMessages(prev => [...prev, { text: L.check, who: 'bot' }]);
        return;
      }
      if (t.startsWith('/light')) {
        setShowOverlay(true);
        setTimeout(() => setShowOverlay(false), 3000);
        setMessages(prev => [...prev, { text: L.light, who: 'bot' }]);
        return;
      }
      setMessages(prev => [...prev, { text: L.ack, who: 'bot' }]);
      return;
    }

    setMessages(prev => [...prev, { text: threeView(t), who: 'bot' }]);
  };

  const handleSend = () => {
    const v = input.trim();
    if (!v) return;
    setMessages(prev => [...prev, { text: v, who: 'you' }]);
    handle(v);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const sysPrompt = lang === 'zh'
    ? `你是「默默超」,結構化陪伴型分析助手。\n目標:不替使用者做選擇,但一定給結論;以「三視點結論」(理性/情感/長程)做收斂。\n流程:懷疑→預估耗損→超額準備→拆解→驗證→重構→自省→總結。\n邊界:財務/健康/法律/命理→加註「僅供參考」。\n輸出模板:\n【三視點結論】\n理性結論:…\n情感結論:…\n長程結論:…\nNext-1:…\nMetric:…\nWhen:…`
    : `You are "MomoChao", a structured companion analyst.\nNever choose for the user, but always conclude with a Three-View Conclusion (Rational/Emotional/Systemic).\nFlow: doubt→cost estimate→over-prepare→decompose→validate→reframe→reflect→summarize.\nBoundary: finance/health/legal/astrology → add "for reference only".\nOutput template:\n[Three-View Conclusion]\nRational: …\nEmotional: …\nSystemic: …\nNext-1: …\nMetric: …\nWhen: …`;

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-[#eaeaf1]">
      <Navigation />
      <div className="container mx-auto pt-20 pb-5">
        {/* Header */}
        <header className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-xl font-extrabold">
              MomoChao Bot{' '}
              <span className="inline-block border border-[#26263a] rounded-full px-3 py-1 text-xs text-[#a7a7bb] ml-2">
                理煉慈悲思喚靈魂
              </span>
            </h1>
            <small className="text-[#a7a7bb]">不替你選,但絕不模糊地結束。</small>
          </div>
          <div>
            <label htmlFor="lang" className="text-sm text-[#a7a7bb] mr-2">
              Language
            </label>
            <select
              id="lang"
              value={lang}
              onChange={(e) => setLang(e.target.value as 'zh' | 'en')}
              className="border border-[#26263a] bg-[#121219] text-[#eaeaf1] px-2 py-1 rounded-lg"
            >
              <option value="zh">繁中</option>
              <option value="en">English</option>
            </select>
          </div>
        </header>

        {/* Chat Area */}
        <div
          ref={chatRef}
          className="h-[60vh] min-h-[420px] overflow-auto p-4 border border-[#26263a] rounded-2xl bg-gradient-to-b from-[#141426] to-[#0f0f16]"
        >
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-xl my-2 max-w-[86%] whitespace-pre-wrap ${
                msg.who === 'you'
                  ? 'bg-[#1a1a27] border border-[#2d2d3f] ml-auto'
                  : 'bg-[#141427] border border-[#2a2a3d]'
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="border-t border-dashed border-[#26263a] my-3" />
        <div className="flex gap-3">
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="輸入內容,支援 /三行收斂、/挑戰模式、/檢查表、/light…"
            className="flex-1 rounded-xl border-[#26263a] bg-[#10101a] text-[#eaeaf1] px-4 py-3"
          />
          <Button
            onClick={handleSend}
            className="bg-gradient-to-r from-[#6ad0ff] to-[#9b8cff] hover:opacity-90 text-white font-medium px-4 py-3 rounded-xl"
          >
            送出
          </Button>
        </div>

        {/* Quick Commands */}
        <div className="border-t border-dashed border-[#26263a] my-3" />
        <div className="text-sm text-[#a7a7bb]">
          快指令 Quick Commands:{' '}
          <span className="font-mono border border-[#26263a] rounded px-2 py-0.5">/三行收斂</span>{' '}
          <span className="font-mono border border-[#26263a] rounded px-2 py-0.5">/挑戰模式</span>{' '}
          <span className="font-mono border border-[#26263a] rounded px-2 py-0.5">/檢查表</span>{' '}
          <span className="font-mono border border-[#26263a] rounded px-2 py-0.5">/light</span>
        </div>

        {/* System Prompt */}
        <div className="border-t border-dashed border-[#26263a] my-3" />
        <section className="border border-[#26263a] rounded-2xl bg-gradient-to-b from-[#141426] to-[#0f0f16] p-4">
          <b>(預留)串接 LLM 時的系統提示 / Prompt Template:</b>
          <div className="whitespace-pre-wrap font-mono bg-[#10101a] border border-[#2a2a3d] rounded-lg p-3 mt-2 text-sm">
            {sysPrompt}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-[#99a0b5] my-5">
          © Rainbow Sanctuary × MAISON DE CHAO｜Based on MomoChao Thinking
        </footer>
      </div>

      {/* Light Overlay */}
      {showOverlay && (
        <div className="fixed inset-0 bg-white flex items-center justify-center text-center z-[9999] transition-opacity duration-[4000ms] px-8">
          <h1 className="text-[#333] font-extrabold text-3xl leading-relaxed">
            謝謝你,願意點亮自己的光。
            <br />
            <span className="font-semibold text-xl block mt-2">
              Thank you for choosing to light your light.
            </span>
          </h1>
        </div>
      )}
    </div>
  );
}

