import Wave from './Wave';

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10 border-t border-slate-800 text-center text-slate-500">
      <Wave direction="top" className="text-slate-950" />
      <p>&copy; 2026 小說海洋. All rights reserved.</p>
    </footer>
  );
}
