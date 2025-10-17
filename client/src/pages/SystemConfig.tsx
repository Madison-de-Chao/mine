import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

export default function SystemConfig() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showAuthorWords, setShowAuthorWords] = useState(false);

  const handleLightCandle = () => {
    if (localStorage.getItem('momoCandleLit') === '1') {
      alert('你已經點亮過自己的光了。\nYou\'ve already lit your light.');
      return;
    }
    localStorage.setItem('momoCandleLit', '1');
    setShowOverlay(true);
    
    setTimeout(() => {
      setShowOverlay(false);
      setShowAuthorWords(true);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-[#eaeaf1]">
      <Navigation />
      {/* Header */}
      <header className="container mx-auto pt-24 pb-[10vh] text-center">
        <h1 className="text-4xl font-extrabold mb-2">誠實才是唯一的解答。</h1>
        <p className="text-[#a7a7bb]">
          MomoChao System v2.5 ｜ The Alchemist of Freedom within Cosmic Order
        </p>
      </header>

      {/* Epigraph */}
      <section className="container mx-auto text-center py-8 pb-16">
        <blockquote className="text-2xl font-semibold leading-relaxed">
          "I gave them fire, and they learned to think."<br />
          <span className="text-base font-normal">
            — Aeschylus, <i>Prometheus Bound</i>
          </span>
        </blockquote>
        <p className="text-[#ccc] mt-4">
          火能淬鍊出鑽石,但前提是,你必須被燒毀。<br />
          毀滅不是創造的反面,而是讓動機與結果化為結晶的瞬間。
        </p>
      </section>

      {/* Opening Poem */}
      <section className="container mx-auto text-center py-16 border-t border-dashed border-[#22223a]">
        <p className="text-[#f7d37b] tracking-wider mb-3">理煉慈悲思喚靈魂</p>
        <p>
          這不是口號,而是一種呼吸。<br />
          理性開啟,感性交融。
        </p>
      </section>

      {/* Candle Section */}
      <section className="container mx-auto py-16 border-t border-dashed border-[#22223a]">
        <h2 className="text-2xl font-bold mb-4">🕯 點亮屬於你的光 / Light Your Light</h2>
        <p className="mb-6">
          你願意為自己點燃一盞誠實的燭光嗎?<br />
          Will you light a candle for your own truth?
        </p>
        <Button
          onClick={handleLightCandle}
          className="bg-gradient-to-r from-[#6ad0ff] to-[#9b8cff] hover:opacity-90 text-white font-medium px-6 py-3 rounded-lg"
        >
          點燃蠟燭 / Light the Candle
        </Button>
      </section>

      {/* Soft Overlay */}
      {showOverlay && (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-[9999] transition-opacity duration-[4000ms]">
          <h1 className="text-[#333] font-bold text-3xl text-center leading-relaxed">
            謝謝你,願意點亮自己的光。<br />
            <span className="font-semibold text-2xl block mt-2">
              Thank you for choosing to light your light.
            </span>
          </h1>
        </div>
      )}

      {/* Author Words */}
      {showAuthorWords && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center text-center z-[9999] text-[#444] text-xl leading-[1.9] px-8 transition-opacity duration-[4000ms]">
          <p className="max-w-[600px] mx-auto mb-5">
            人們以為最殘酷的,是謊言。<br />
            但真正會留下傷痕的,是那些被包裝成「善意」的謊言。
          </p>
          <p className="max-w-[600px] mx-auto mb-5">
            因為那種謊,會讓人相信一個本來就不屬於他的世界。<br />
            那不是保護,那是偷走真相。
          </p>
          <p className="max-w-[600px] mx-auto mb-5">
            我不希望每個人都像我一樣苦行,<br />
            我只希望——當你面對自己、面對別人時,能盡可能誠實。
          </p>
          <p className="max-w-[600px] mx-auto mb-5">
            那樣的誠實,也許會讓人痛,<br />
            但它會讓人活。
          </p>
        </div>
      )}
    </div>
  );
}

