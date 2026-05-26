import Wave from './Wave';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 text-center">
      <h1 className="text-5xl font-extrabold text-blue-50 mb-6 tracking-tight">在小說的海洋中遨遊</h1>
      <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">探索最優質的網路小說心得與推薦。</p>
      <a href="#leaderboard" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition">立即探索排行榜</a>
      <Wave direction="bottom" className="text-slate-950" />
    </section>
  );
}
