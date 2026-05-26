/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Leaderboard from './components/Leaderboard';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-950 to-blue-900 text-slate-100 font-sans">
      <Header />
      <main>
        <Hero />
        <Leaderboard />
      </main>
      <Footer />
    </div>
  );
}
