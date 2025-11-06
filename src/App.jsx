import Header from "./components/Header";
import Hero from "./components/Hero";
import AIChat from "./components/AIChat";
import RoleRecommendations from "./components/RoleRecommendations";

function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10 bg-black/40 py-10 text-center text-sm text-white/60">
      Built with care to help students find meaningful internships. © {new Date().getFullYear()} InternAI Network
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-dvh bg-gray-950 text-white">
      <Header />
      <Hero />
      <AIChat />
      <RoleRecommendations />
      <Footer />
    </div>
  );
}
