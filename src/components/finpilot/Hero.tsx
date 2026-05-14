import { ArrowRight, Activity, Shield, Lock, Gauge, CircleCheck, AlertCircle } from "lucide-react";

const states = [
  { icon: Activity, label: "System Mode", value: "Active", tone: "ok" },
  { icon: Gauge, label: "Execution Permission", value: "Waiting", tone: "warn" },
  { icon: Shield, label: "Risk Status", value: "Controlled", tone: "ok" },
  { icon: AlertCircle, label: "No Trade Reason", value: "No valid signal", tone: "muted" },
  { icon: Lock, label: "Capital Protection", value: "Enabled", tone: "ok" },
  { icon: CircleCheck, label: "Strategy Health", value: "Stable", tone: "ok" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cockpit text-white">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute -top-32 right-0 h-[500px] w-[500px] rounded-full bg-[#FF1E56]/20 blur-[120px]" />
      <div className="absolute -bottom-40 left-0 h-[600px] w-[600px] rounded-full bg-[#1D4ED8]/25 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pb-24 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-32 lg:pt-28">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF1E56] animate-fp-pulse" />
            Financial Autopilot Layer
          </div>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Stop Guessing.<br />
            <span className="text-blade">Start Operating.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/70 md:text-xl">
            The Control Layer for Automated Trading.
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/60">
            FinPilot helps traders, builders, and financial teams transform strategies into controlled
            execution systems — with risk gates, automation logic, monitoring, and clear decision visibility.
          </p>
          <p className="mt-4 max-w-xl text-sm text-white/50" dir="rtl">
            ابنِ أنظمة تعرف متى تتداول، متى تنتظر، ومتى تحمي رأس المال.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#audit" className="group inline-flex items-center gap-2 rounded-xl gradient-blade px-6 py-3.5 text-sm font-semibold text-white shadow-xl glow-magenta transition-transform hover:scale-[1.02]">
              Start Strategy Audit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#pricing" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10">
              Explore Control Layers
            </a>
          </div>

          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-white/40">
            No hype · No blind execution · No emotional trading
          </p>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "120ms" }}>
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#1D4ED8]/30 via-[#4F46E5]/20 to-[#FF1E56]/20 blur-2xl" />
          <div className="relative rounded-3xl border border-white/10 bg-[#08142E]/90 p-6 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF1E56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FACC15]" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">finpilot · cockpit</span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {states.map((s, i) => (
                <div key={s.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5 animate-fade-up" style={{ animationDelay: `${200 + i * 80}ms` }}>
                  <div className="flex items-center justify-between">
                    <s.icon className="h-3.5 w-3.5 text-white/50" />
                    <span className={`h-1.5 w-1.5 rounded-full ${s.tone === "ok" ? "bg-emerald-400" : s.tone === "warn" ? "bg-amber-400" : "bg-white/30"} animate-fp-pulse`} />
                  </div>
                  <div className="mt-3 text-[10px] uppercase tracking-wider text-white/40">{s.label}</div>
                  <div className="mt-1 font-mono text-sm font-semibold text-white">{s.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-white/10 bg-gradient-to-br from-[#1D4ED8]/15 to-[#FF1E56]/10 p-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider text-white/50">Profit Lock</span>
                <span className="font-mono text-xs text-emerald-400">ARMED</span>
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-3/4 gradient-blade" />
              </div>
              <div className="mt-2 flex justify-between font-mono text-[10px] text-white/50">
                <span>Drawdown: -1.2%</span>
                <span>Limit: -3.0%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
