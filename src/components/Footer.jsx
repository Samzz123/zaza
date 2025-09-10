import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Aspire Sync</p>
        <p className="text-sm text-slate-500">Guiding Students, Empowering Futures</p>
      </div>
    </footer>
  );
}
