import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#0b0b0f]/90 backdrop-blur-sm border-b border-[#22223a] z-50">
      <div className="container mx-auto flex justify-center gap-8 py-4">
        <Link
          href="/"
          className={`text-sm font-medium transition-colors ${
            location === '/'
              ? 'text-[#7ad1ff]'
              : 'text-[#a7a7bb] hover:text-[#eaeaf1]'
          }`}
        >
          系統設定檔
        </Link>
        <Link
          href="/bot"
          className={`text-sm font-medium transition-colors ${
            location === '/bot'
              ? 'text-[#7ad1ff]'
              : 'text-[#a7a7bb] hover:text-[#eaeaf1]'
          }`}
        >
          機器人對話
        </Link>
      </div>
    </nav>
  );
}

