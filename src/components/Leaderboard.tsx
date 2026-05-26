import { books } from '../data/books';

export default function Leaderboard() {
  return (
    <section id="leaderboard" className="py-20 px-6 container mx-auto">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">熱門排行</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book) => (
          <div key={book.id} className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-blue-500 transition-all hover:-translate-y-2 shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">{book.title}</h3>
              <span className={`px-2 py-1 rounded text-xs ${book.status === 'completed' ? 'bg-green-900 text-green-300' : 'bg-blue-900 text-blue-300'}`}>
                {book.status === 'completed' ? '已完結' : '連載中'}
              </span>
            </div>
            <div className="flex gap-2 mb-4">
              {book.tags.map(tag => <span key={tag} className="text-xs text-blue-400 border border-blue-900 px-2 py-1 rounded">{tag}</span>)}
            </div>
            <p className="text-slate-400 mb-6 h-12 overflow-hidden">{book.summary}</p>
            <div className="flex justify-between items-center">
              <span className="text-yellow-400">★ {book.rating}</span>
              <a href={book.url} className="text-blue-400 hover:underline">前往閱讀 →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
