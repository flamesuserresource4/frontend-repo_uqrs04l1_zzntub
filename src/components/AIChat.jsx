import { useEffect, useMemo, useRef, useState } from "react";
import { Send, Bot, User, Loader2 } from "lucide-react";

export default function AIChat() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hey! I'm your AI mentor. Tell me about your skills and what kind of internship you're aiming for (remote or on‑site). I'll tailor suggestions and outreach tips.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef(null);

  const backendUrl = useMemo(() => import.meta.env.VITE_BACKEND_URL || "http://localhost:8000", []);

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages]);

  async function sendMessage(e) {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input.trim() };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${backendUrl}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg.content }),
      });
      if (!res.ok) throw new Error("Network error");
      const data = await res.json();
      const aiMsg = { role: "assistant", content: data.reply };
      setMessages((m) => [...m, aiMsg]);
    } catch (err) {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            "I couldn't reach the assistant right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="chat" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur">
          <h2 className="px-2 text-lg font-semibold text-white">Your AI Mentor</h2>
          <div ref={listRef} className="mt-3 h-80 overflow-y-auto rounded-xl bg-black/30 p-3">
            {messages.map((msg, i) => (
              <div key={i} className={`mb-3 flex items-start gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "assistant" && (
                  <div className="mt-1 rounded-md bg-indigo-600/20 p-1 text-indigo-300">
                    <Bot size={16} />
                  </div>
                )}
                <div className={`max-w-[75%] rounded-xl px-3 py-2 text-sm leading-relaxed ${msg.role === "user" ? "bg-white text-gray-900" : "bg-white/10 text-white"}`}>
                  {msg.content}
                </div>
                {msg.role === "user" && (
                  <div className="mt-1 rounded-md bg-white p-1 text-gray-900">
                    <User size={16} />
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div className="mb-2 flex items-center gap-2 text-sm text-white/70">
                <Loader2 className="h-4 w-4 animate-spin" /> Thinking...
              </div>
            )}
          </div>
          <form onSubmit={sendMessage} className="mt-3 flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about roles, skills to add, cold emails, or interview prep..."
              className="w-full rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/50 backdrop-blur focus:outline-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send size={16} /> Send
            </button>
          </form>
        </div>

        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-600/20 via-fuchsia-500/10 to-transparent p-6 text-white shadow-sm">
          <h3 className="text-lg font-semibold">How it helps</h3>
          <ul className="mt-3 space-y-3 text-sm text-white/80">
            <li>• Personalized internship recommendations across remote and on‑site options.</li>
            <li>• Profile review with concrete suggestions to improve your chances.</li>
            <li>• Guided outreach: cold email templates and networking prompts.</li>
            <li>• Interview prep with role‑specific questions and feedback.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
