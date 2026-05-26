export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-400">小說海洋</div>
        <div className="hidden md:flex gap-6 text-slate-300">
          <a href="#" className="hover:text-white">首頁</a>
          <a href="#" className="hover:text-white">排行榜</a>
          <a href="#" className="hover:text-white">分類</a>
        </div>
        <button className="md:hidden text-slate-300">選單</button>
      </nav>
    </header>
  );
}
