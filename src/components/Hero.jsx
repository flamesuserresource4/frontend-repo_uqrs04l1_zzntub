import { Sparkles } from "lucide-react";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7bKkWlUgt1eQwqUl/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gray-950/40 via-gray-950/60 to-gray-950" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
          <Sparkles size={14} className="text-yellow-300" />
          AI career co‑pilot for students
        </span>
        <h1 className="max-w-3xl text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Land the right internship faster with your AI mentor
        </h1>
        <p className="max-w-2xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
          Chat with an intelligent guide that understands your skills and goals, curates personalized roles, and helps you connect with the right companies — remote or on‑site.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <a href="#chat" className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-500">
            Start chatting with InternAI
          </a>
          <a href="#roles" className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10">
            Explore recommendations
          </a>
        </div>
      </div>
    </section>
  );
}
