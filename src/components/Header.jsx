import { Rocket, Search, User } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-gradient-to-b from-gray-950/80 to-gray-950/40 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600/90 text-white shadow-lg shadow-indigo-600/30">
            <Rocket size={18} />
          </div>
          <span className="text-lg font-semibold tracking-tight text-white">InternAI Network</span>
        </div>

        <div className="hidden w-full max-w-md items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white shadow-sm backdrop-blur md:flex">
          <Search size={18} className="text-white/60" />
          <input
            type="text"
            placeholder="Search roles, companies, skills..."
            className="w-full bg-transparent text-sm placeholder-white/50 focus:outline-none"
            aria-label="Search"
          />
        </div>

        <div className="flex items-center gap-3">
          <button className="rounded-lg border border-white/10 px-3 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10">
            For Companies
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow hover:bg-gray-100">
            <User size={16} /> Sign in
          </button>
        </div>
      </div>
    </header>
  );
}
