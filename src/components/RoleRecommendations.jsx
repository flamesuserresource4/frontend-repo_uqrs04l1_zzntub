import { Briefcase, MapPin, Building2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export default function RoleRecommendations() {
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const backendUrl = useMemo(() => import.meta.env.VITE_BACKEND_URL || "http://localhost:8000", []);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${backendUrl}/roles`);
        const data = await res.json();
        setRoles(data.roles || []);
      } catch (e) {
        setRoles([
          { id: 1, title: "Frontend Intern", company: "Glow Labs", location: "Remote", type: "Remote" },
          { id: 2, title: "Data Science Intern", company: "Nova AI", location: "Bengaluru, IN", type: "On‑site" },
          { id: 3, title: "Product Intern", company: "Skyline", location: "Remote", type: "Remote" },
        ]);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [backendUrl]);

  return (
    <section id="roles" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-5 flex items-end justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">Recommended internships</h2>
          <p className="text-sm text-white/70">Curated based on your interests and experience.</p>
        </div>
        <a href="#chat" className="text-sm font-medium text-indigo-300 hover:text-indigo-200">Refine with AI →</a>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-36 animate-pulse rounded-2xl bg-white/5" />
          ))
        ) : roles.length === 0 ? (
          <p className="text-white/70">No roles yet. Try adjusting your preferences in chat.</p>
        ) : (
          roles.map((r) => (
            <div key={r.id} className="group rounded-2xl border border-white/10 bg-white/5 p-4 text-white transition hover:bg-white/10">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div className="rounded-lg bg-indigo-600/20 p-2 text-indigo-300">
                    <Briefcase size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">{r.title}</h3>
                    <div className="flex items-center gap-2 text-xs text-white/70">
                      <Building2 size={14} /> {r.company}
                    </div>
                  </div>
                </div>
                <span className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/80">{r.type}</span>
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs text-white/70">
                <MapPin size={14} /> {r.location}
              </div>
              <div className="mt-4">
                <button className="w-full rounded-lg bg-white px-3 py-2 text-xs font-semibold text-gray-900 hover:bg-gray-100">View details</button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
