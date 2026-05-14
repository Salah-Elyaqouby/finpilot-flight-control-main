import {
  AlertTriangle, Brain, Shield, Activity, Gauge, Lock, Zap, Eye, Bell,
  CircleX, CircleCheck, ArrowRight, ArrowDown, Bot, BarChart3, LineChart,
  Cpu, LayoutDashboard, Code2, TrendingUp, Wallet, Timer, Volume2, Network
} from "lucide-react";

function SectionTitle({ eyebrow, title, subtitle, ar }: { eyebrow?: string; title: React.ReactNode; subtitle?: string; ar?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          {eyebrow}
        </div>
      )}
      <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground md:text-lg">{subtitle}</p>}
      {ar && <p className="mt-2 text-sm text-muted-foreground/80" dir="rtl">{ar}</p>}
    </div>
  );
}

function KeyLine({ en, ar }: { en: string; ar: string }) {
  return (
    <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-border bg-gradient-to-br from-[#1D4ED8]/[0.06] to-[#FF1E56]/[0.06] p-6 text-center">
      <p className="text-base font-semibold md:text-lg">{en}</p>
      <p className="mt-2 text-sm text-muted-foreground" dir="rtl">{ar}</p>
    </div>
  );
}

/* ---------- Market Reality ---------- */
const realityCards = [
  { en: "Signal without permission", ar: "إشارة بدون إذن" },
  { en: "Entry without risk check", ar: "دخول بدون فحص مخاطر" },
  { en: "Position size without discipline", ar: "حجم صفقة بلا انضباط" },
  { en: "Backtest without real friction", ar: "اختبار خلفي لا يشبه الواقع" },
  { en: "Bot behavior without explanation", ar: "بوت يعمل بدون تفسير" },
  { en: "Profit without protection", ar: "ربح بدون حماية" },
];

export function MarketReality() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle
          eyebrow="Market Reality"
          title={<>The Market Does Not Punish Ideas.<br /><span className="text-blade">It Punishes Uncontrolled Execution.</span></>}
          subtitle="Most strategies do not fail because the market is impossible. They fail because execution is uncontrolled."
          ar="معظم الاستراتيجيات لا تفشل لأن السوق مستحيل، بل لأنها تعمل بدون طبقة تحكم واضحة."
        />
        <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {realityCards.map((c) => (
            <div key={c.en} className="group relative rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-[#1D4ED8]/40">
              <CircleX className="h-5 w-5 text-[#FF1E56]" />
              <p className="mt-3 font-semibold">{c.en}</p>
              <p className="mt-1 text-sm text-muted-foreground" dir="rtl">{c.ar}</p>
            </div>
          ))}
        </div>
        <KeyLine en="A strategy without a control layer is just exposure." ar="الاستراتيجية بدون طبقة تحكم ليست نظاماً؛ إنها تعرّض مكشوف للسوق." />
      </div>
    </section>
  );
}

/* ---------- Hidden Failure ---------- */
const failures = [
  { icon: AlertTriangle, t: "Signal Without Permission", d: "The signal appears, but no system asks whether the market condition actually allows entry.", ar: "تظهر الإشارة، لكن لا يوجد نظام يسأل هل ظروف السوق تسمح فعلاً بالدخول." },
  { icon: Brain, t: "Risk Without Memory", d: "Losses pass through the system without becoming new protection rules.", ar: "تمر الخسائر دون أن تتحول إلى قواعد حماية جديدة." },
  { icon: BarChart3, t: "Backtest Without Reality", d: "Historical performance ignores spread, slippage, volatility shifts, and execution pressure.", ar: "الأداء التاريخي قد يتجاهل السبريد، الانزلاق، تغير التذبذب، وضغط التنفيذ." },
  { icon: Eye, t: "Execution Without Explanation", d: "The bot enters, waits, or stops — but the user does not know why.", ar: "البوت يدخل أو ينتظر أو يتوقف، لكن المستخدم لا يعرف لماذا." },
  { icon: Shield, t: "Profit Without Protection", d: "A winning trade becomes fragile when the system has no profit defense logic.", ar: "الصفقة الرابحة تصبح هشة عندما لا توجد طبقة دفاع عن الربح." },
];

export function HiddenFailure() {
  return (
    <section className="relative bg-gradient-to-b from-background via-card/40 to-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle
          eyebrow="Hidden Failure"
          title={<>The Hidden Failure Is <span className="text-blade">Between Signal and Execution.</span></>}
          ar="الفشل الخفي يحدث بين الإشارة والتنفيذ."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {failures.map((f) => (
            <div key={f.t} className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-[#4F46E5]/40 hover:shadow-xl">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl gradient-blade text-white">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold">{f.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
              <p className="mt-2 text-xs text-muted-foreground/80" dir="rtl">{f.ar}</p>
            </div>
          ))}
        </div>
        <KeyLine
          en="The danger is not that your strategy is wrong. The danger is that your system does not know when to stop trusting it."
          ar="الخطر ليس فقط أن تكون الاستراتيجية خاطئة. الخطر أن النظام لا يعرف متى يجب أن يتوقف عن الوثوق بها."
        />
      </div>
    </section>
  );
}

/* ---------- Identity Shift ---------- */
const trader = ["Reacts to market noise", "Enters emotionally", "Chases movement", "Measures profit only", "Depends on confidence"];
const operator = ["Waits for permission", "Controls exposure", "Monitors system state", "Protects capital first", "Uses rules before emotion"];

export function IdentityShift() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle
          eyebrow="Identity Shift"
          title={<>Don't Just Trade.<br /><span className="text-blade">Operate a Financial System.</span></>}
          ar="لا تتداول فقط. شغّل نظاماً مالياً."
        />
        <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-7">
            <div className="flex items-center gap-2 text-[#FF1E56]">
              <CircleX className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-widest">Trader</span>
            </div>
            <ul className="mt-5 space-y-3">
              {trader.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-[#FF1E56]" />{t}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-2xl border border-[#1D4ED8]/30 bg-gradient-to-br from-[#1D4ED8]/[0.08] to-[#4F46E5]/[0.08] p-7">
            <div className="flex items-center gap-2 text-[#2563EB]">
              <CircleCheck className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-widest">System Operator</span>
            </div>
            <ul className="mt-5 space-y-3">
              {operator.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm font-medium">
                  <CircleCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2563EB]" />{t}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <KeyLine en="FinPilot turns trading from reaction into operation." ar="FinPilot يحوّل التداول من رد فعل إلى تشغيل نظام." />
      </div>
    </section>
  );
}

/* ---------- What Is FinPilot ---------- */
const modules = [
  { icon: Bot, t: "Trading Bots" }, { icon: Shield, t: "Risk Engines" },
  { icon: Cpu, t: "Strategy Automation" }, { icon: LineChart, t: "Trading Indicators" },
  { icon: LayoutDashboard, t: "Financial Dashboards" }, { icon: Bell, t: "Alerts" },
  { icon: Zap, t: "Execution Logic" }, { icon: Activity, t: "Performance Monitoring" },
];

export function WhatIsFinPilot() {
  return (
    <section id="systems" className="relative bg-cockpit py-24 text-white md:py-32">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">
            What Is FinPilot
          </div>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            FinPilot Is the <span className="text-blade">Control Layer</span> Your Strategy Needs Before It Touches the Market.
          </h2>
          <p className="mt-5 text-base text-white/70 md:text-lg">
            FinPilot is not just a trading bot. It is the financial autopilot layer that connects strategy, risk, execution, monitoring, and explanation into one controlled system.
          </p>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((m) => (
            <div key={m.t} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all hover:border-[#4F46E5]/40 hover:bg-white/[0.07]">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#1D4ED8] to-[#4F46E5] text-white">
                <m.icon className="h-5 w-5" />
              </div>
              <p className="mt-4 font-semibold">{m.t}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur">
          <p className="text-base font-semibold md:text-lg">Signals tell you what might happen.<br /><span className="text-blade">FinPilot decides whether the system is allowed to act.</span></p>
          <p className="mt-3 text-sm text-white/60" dir="rtl">الإشارات تخبرك بما قد يحدث. FinPilot يقرر هل يُسمح للنظام أن يتصرف.</p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Permission Layer ---------- */
const pipeline = [
  "Signal Detected", "Market Condition Check", "Spread Check", "Volatility Check",
  "Risk Exposure Check", "Capital Protection Check", "Execution Permission",
];

export function PermissionLayer() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle
          eyebrow="Permission Layer"
          title={<>Every Trade Must <span className="text-blade">Earn Permission.</span></>}
          subtitle="Not every signal is an opportunity. Not every opportunity deserves risk."
          ar="ليست كل إشارة فرصة. وليست كل فرصة تستحق المخاطرة."
        />
        <div className="mx-auto mt-14 max-w-2xl">
          {pipeline.map((step, i) => (
            <div key={step} className="relative">
              <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-[#1D4ED8]/40 animate-fade-up" style={{ animationDelay: `${i * 70}ms` }}>
                <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold ${i === pipeline.length - 1 ? "gradient-blade text-white" : "bg-secondary text-secondary-foreground"}`}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span className="font-semibold">{step}</span>
                {i === pipeline.length - 1 && <CircleCheck className="ml-auto h-5 w-5 text-emerald-500" />}
              </div>
              {i < pipeline.length - 1 && (
                <div className="flex justify-center py-1.5">
                  <ArrowDown className="h-4 w-4 text-muted-foreground/40" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- No-Trade Intelligence ---------- */
const reasons = [
  { t: "Spread Too High", ar: "السبريد مرتفع" },
  { t: "No Valid Signal", ar: "لا توجد إشارة" },
  { t: "Market Closed", ar: "السوق مغلق" },
  { t: "Risk Limit Reached", ar: "حد المخاطرة" },
  { t: "Strategy Cooling Down", ar: "وضع تهدئة" },
  { t: "Volatility Unsafe", ar: "تذبذب غير آمن" },
  { t: "Execution Disabled", ar: "التنفيذ معطل" },
];
const log = [
  { time: "09:41", msg: "Market scan complete", tone: "muted" },
  { time: "09:42", msg: "Signal rejected: spread too high", tone: "warn" },
  { time: "09:43", msg: "Risk status: controlled", tone: "ok" },
  { time: "09:44", msg: "Execution permission: waiting", tone: "muted" },
];

export function NoTradeIntelligence() {
  return (
    <section className="relative bg-gradient-to-b from-background via-card/40 to-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle
          eyebrow="No-Trade Intelligence"
          title={<><span className="text-blade">No-Trade</span> Intelligence</>}
          subtitle="Most systems focus on when to enter. FinPilot also focuses on when not to enter."
          ar="معظم الأنظمة تركز على متى تدخل. FinPilot يركز أيضاً على متى لا تدخل."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
            {reasons.map((r) => (
              <div key={r.t} className="rounded-xl border border-border bg-card p-4">
                <div className="flex items-center gap-2">
                  <CircleX className="h-3.5 w-3.5 text-[#FF1E56]" />
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Blocked</span>
                </div>
                <p className="mt-2 font-semibold text-sm">{r.t}</p>
                <p className="text-xs text-muted-foreground" dir="rtl">{r.ar}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-border bg-[#08142E] p-6 text-white">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">system.log</span>
              <span className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-fp-pulse" /> LIVE
              </span>
            </div>
            <div className="mt-4 space-y-2.5 font-mono text-sm">
              {log.map((l) => (
                <div key={l.time} className="flex gap-3">
                  <span className="text-white/40">{l.time}</span>
                  <span className={l.tone === "warn" ? "text-amber-400" : l.tone === "ok" ? "text-emerald-400" : "text-white/80"}>
                    {l.msg}
                  </span>
                </div>
              ))}
              <div className="flex gap-3">
                <span className="text-white/40">09:45</span>
                <span className="text-white/60">
                  <span className="inline-block h-3 w-2 animate-fp-pulse bg-white/60 align-middle" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <KeyLine
          en="The system that knows when not to trade is already smarter than the one that trades blindly."
          ar="النظام الذي يعرف متى لا يتداول أذكى من النظام الذي ينفذ بعشوائية."
        />
      </div>
    </section>
  );
}

/* ---------- Risk Gate ---------- */
const riskItems = [
  { icon: Wallet, t: "Position Size" }, { icon: TrendingUp, t: "Drawdown Limit" },
  { icon: Volume2, t: "Spread Safety" }, { icon: Activity, t: "Volatility Filter" },
  { icon: Timer, t: "Session Quality" }, { icon: Network, t: "Capital Exposure" },
  { icon: Lock, t: "Risk-Off Mode" },
];

export function RiskGate() {
  return (
    <section id="risk" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle
          eyebrow="Risk Gate"
          title={<>Risk First. <span className="text-blade">Profit Second.</span> Survival Always.</>}
          ar="المخاطرة أولاً. الربح ثانياً. البقاء دائماً."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {riskItems.map((r, i) => (
            <div key={r.t} className={`rounded-2xl border p-5 ${i === 6 ? "border-[#FF1E56]/40 bg-gradient-to-br from-[#FF1E56]/10 to-transparent" : "border-border bg-card"}`}>
              <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${i === 6 ? "bg-[#FF1E56] text-white" : "bg-secondary text-secondary-foreground"}`}>
                <r.icon className="h-5 w-5" />
              </div>
              <p className="mt-4 font-semibold">{r.t}</p>
              <div className="mt-3 h-1 overflow-hidden rounded-full bg-border">
                <div className={`h-full ${i === 6 ? "w-full bg-[#FF1E56]" : "gradient-blade"}`} style={{ width: i === 6 ? "100%" : `${60 + i * 5}%` }} />
              </div>
            </div>
          ))}
        </div>
        <KeyLine en="Profit begins after survival is protected." ar="يبدأ الربح بعد حماية البقاء." />
      </div>
    </section>
  );
}

/* ---------- Dashboard Preview ---------- */
const dashStates = [
  { l: "System Mode", v: "Active", tone: "ok" },
  { l: "Execution Permission", v: "Waiting", tone: "warn" },
  { l: "Current Market State", v: "Trending", tone: "ok" },
  { l: "No Trade Reason", v: "Spread > 2.4 pips", tone: "muted" },
  { l: "Risk Status", v: "Controlled", tone: "ok" },
  { l: "Profit Lock", v: "Armed", tone: "ok" },
  { l: "Drawdown Monitor", v: "-1.2% / -3.0%", tone: "muted" },
  { l: "Telegram Alerts", v: "Enabled", tone: "ok" },
];

export function DashboardPreview() {
  return (
    <section id="dashboard" className="relative overflow-hidden bg-cockpit py-24 text-white md:py-32">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">
            Dashboard Preview
          </div>
          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            A Dashboard That <span className="text-blade">Explains the System.</span>
          </h2>
          <p className="mt-4 text-white/70">Know what your system is doing — and why.</p>
        </div>

        <div className="relative mx-auto mt-14 max-w-6xl">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-[#1D4ED8]/20 via-[#4F46E5]/10 to-[#FF1E56]/20 blur-3xl" />
          <div className="relative rounded-3xl border border-white/10 bg-[#050B1F]/90 p-6 shadow-2xl backdrop-blur md:p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-white/50">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-fp-pulse" /> finpilot · cockpit · live
              </div>
              <div className="hidden gap-4 font-mono text-[10px] text-white/50 md:flex">
                <span>Strategy: EUR-Trend-Pro</span>
                <span>Account: Demo · 50,000</span>
              </div>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-4">
              {dashStates.map((s) => (
                <div key={s.l} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-white/40">{s.l}</span>
                    <span className={`h-1.5 w-1.5 rounded-full ${s.tone === "ok" ? "bg-emerald-400" : s.tone === "warn" ? "bg-amber-400" : "bg-white/30"}`} />
                  </div>
                  <div className="mt-2 font-mono text-sm font-semibold">{s.v}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <div className="md:col-span-2 rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-white/40">Equity Curve · 30D</span>
                  <span className="font-mono text-xs text-emerald-400">+4.8%</span>
                </div>
                <svg viewBox="0 0 400 120" className="mt-3 h-32 w-full">
                  <defs>
                    <linearGradient id="eq" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2563EB" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0 90 L40 80 L80 85 L120 70 L160 72 L200 55 L240 60 L280 45 L320 38 L360 30 L400 22 L400 120 L0 120 Z" fill="url(#eq)" />
                  <path d="M0 90 L40 80 L80 85 L120 70 L160 72 L200 55 L240 60 L280 45 L320 38 L360 30 L400 22" fill="none" stroke="#4F46E5" strokeWidth="2" />
                </svg>
              </div>
              <div className="rounded-xl border border-white/10 bg-gradient-to-br from-[#FF1E56]/15 to-transparent p-5">
                <span className="text-[10px] uppercase tracking-wider text-white/40">Capital Protection</span>
                <div className="mt-2 font-mono text-2xl font-bold">98.8%</div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[98%] gradient-blade" />
                </div>
                <p className="mt-3 text-[11px] text-white/50">Survival before profit.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-2xl text-center text-sm text-white/60">
          No black box. No blind automation. No silent failure.
          <span className="mt-1 block text-white/40" dir="rtl">لا صندوق أسود. لا أتمتة عمياء. لا فشل صامت.</span>
        </div>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
const services = [
  { icon: Bot, t: "Trading Bots", d: "Automated trading systems designed for controlled execution." },
  { icon: Shield, t: "Risk Management Engine", d: "A logic layer built to reduce uncontrolled exposure." },
  { icon: LineChart, t: "Trading Indicators", d: "Custom indicators that clarify market structure and decision context." },
  { icon: Cpu, t: "Strategy Automation", d: "Turn trading logic into operational systems." },
  { icon: LayoutDashboard, t: "Financial Dashboards", d: "Monitor status, risk, execution, and performance in one place." },
  { icon: Code2, t: "Custom FinTech Software", d: "Advanced financial software built around your business logic." },
];

export function Services() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle
          eyebrow="Systems"
          title={<>Build the Financial System <span className="text-blade">Your Strategy Deserves.</span></>}
          ar="ابنِ النظام المالي الذي تستحقه استراتيجيتك."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.t} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-[#4F46E5]/40 hover:shadow-2xl">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-[#1D4ED8]/0 to-[#FF1E56]/0 transition-all group-hover:from-[#1D4ED8]/10 group-hover:to-[#FF1E56]/10" />
              <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-blade text-white shadow-lg">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="relative mt-5 text-lg font-bold">{s.t}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Before / After ---------- */
const before = ["Signal appears, entry happens", "Bot behavior is unclear", "No-trade reason is invisible", "Risk is unmanaged", "Profit protection is weak", "Performance is fragmented", "Automation multiplies errors"];
const after = ["Signal passes Permission Layer", "System explains its state", "No-trade reason is visible", "Risk Gate before execution", "Profit Protection Layer", "Live dashboard monitoring", "Automation becomes infrastructure"];

export function BeforeAfter() {
  return (
    <section className="bg-gradient-to-b from-background via-card/40 to-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle
          eyebrow="Transformation"
          title={<>From Random Automation to <span className="text-blade">Controlled Infrastructure.</span></>}
          ar="من أتمتة عشوائية إلى بنية مالية منضبطة."
        />
        <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-7">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#FF1E56]">Before</div>
            <ul className="mt-4 space-y-3">
              {before.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CircleX className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FF1E56]" />{b}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[#1D4ED8]/30 bg-gradient-to-br from-[#1D4ED8]/[0.06] to-[#4F46E5]/[0.06] p-7">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#2563EB]">After FinPilot</div>
            <ul className="mt-4 space-y-3">
              {after.map((a) => (
                <li key={a} className="flex items-start gap-3 text-sm font-medium">
                  <CircleCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2563EB]" />{a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Pricing ---------- */
const plans = [
  {
    name: "Launch Layer",
    tagline: "For traders with a strategy idea who need structure.",
    desc: "Turn your trading idea into a structured operating system.",
    items: ["Strategy Audit", "Basic Bot Structure", "Demo Mode", "Basic Dashboard", "Alerts", "Initial Risk Rules"],
    cta: "Start Launch Layer",
  },
  {
    name: "Autopilot Layer",
    tagline: "For serious traders who want automation without losing control.",
    desc: "Automate execution without losing control.",
    items: ["Full Trading Bot", "Risk Gate", "No-Trade Intelligence", "Live / Demo Control", "Profit Protection", "Telegram Alerts", "Performance Reports", "Dashboard"],
    cta: "Activate Autopilot Layer",
    featured: true,
  },
  {
    name: "Command Layer",
    tagline: "For advanced traders, teams, and financial systems.",
    desc: "Build a financial command system around your strategy.",
    items: ["Custom Bots", "Custom Indicators", "Advanced Dashboard", "Multi-Strategy Control", "MT5 / API Integrations", "Risk-Off Architecture", "Advanced Reporting", "Continuous Development"],
    cta: "Build Command Layer",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle
          eyebrow="Control Levels"
          title={<>Choose Your <span className="text-blade">Control Level</span></>}
          ar="اختر مستوى التحكم"
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className={`relative rounded-3xl border p-7 transition-all ${p.featured ? "border-transparent bg-gradient-to-br from-[#0B1A3A] via-[#08142E] to-[#050B1F] text-white shadow-2xl glow-blue lg:scale-[1.04]" : "border-border bg-card hover:border-[#4F46E5]/40 hover:-translate-y-1"}`}>
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gradient-blade px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
                  Most Popular
                </div>
              )}
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{p.name}</div>
              <p className={`mt-3 text-sm ${p.featured ? "text-white/70" : "text-muted-foreground"}`}>{p.tagline}</p>
              <p className={`mt-2 text-base font-semibold ${p.featured ? "text-white" : ""}`}>{p.desc}</p>
              <div className={`mt-5 text-2xl font-bold ${p.featured ? "text-blade" : ""}`}>Request Pricing</div>
              <ul className="mt-6 space-y-2.5">
                {p.items.map((i) => (
                  <li key={i} className={`flex items-start gap-2 text-sm ${p.featured ? "text-white/80" : "text-muted-foreground"}`}>
                    <CircleCheck className={`mt-0.5 h-4 w-4 flex-shrink-0 ${p.featured ? "text-[#2563EB]" : "text-[#4F46E5]"}`} />{i}
                  </li>
                ))}
              </ul>
              <a href="#audit" className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${p.featured ? "gradient-blade text-white hover:scale-[1.02]" : "border border-border bg-background hover:bg-accent"}`}>
                {p.cta} <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">
          No fake guarantees. Final pricing is scoped to your strategy and integration needs.
        </p>
      </div>
    </section>
  );
}

/* ---------- Trust ---------- */
export function TrustPhilosophy() {
  return (
    <section className="bg-gradient-to-b from-background via-card/40 to-background py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          Trust Philosophy
        </div>
        <h2 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
          We Do Not Sell Certainty.<br />
          <span className="text-blade">We Build Systems That Respect Uncertainty.</span>
        </h2>
        <div className="mt-8 space-y-4 text-base text-muted-foreground md:text-lg">
          <p>Markets cannot be fully controlled. But your reaction to them can be engineered.</p>
          <p>FinPilot does not sell guaranteed profits. It does not rely on dangerous martingale logic. It does not hide system behavior. It does not automate blindly.</p>
          <p>It builds layers of measurement, control, monitoring, protection, explanation, and discipline.</p>
        </div>
        <KeyLine en="Uncertainty is not the enemy. Uncontrolled exposure is." ar="عدم اليقين ليس العدو. التعرض غير المنضبط هو العدو." />
      </div>
    </section>
  );
}
