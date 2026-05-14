import { useState } from "react";
import { ArrowRight, Download, FileCheck, Mail } from "lucide-react";
import { Logo, LogoMark } from "./Logo";

export function FinalQuestion() {
  return (
    <section className="relative overflow-hidden bg-cockpit py-24 text-white md:py-32">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">
          One Question
        </div>
        <h2 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
          Before You Automate, <span className="text-blade">Ask One Question.</span>
        </h2>
        <div className="mx-auto mt-8 max-w-2xl rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
          <p className="font-mono text-xs uppercase tracking-widest text-white/50">The question</p>
          <p className="mt-3 text-2xl font-bold leading-tight md:text-3xl">
            Can your system explain why it <span className="text-blade">should not trade</span> today?
          </p>
          <p className="mt-3 text-sm text-white/60" dir="rtl">هل يستطيع نظامك شرح لماذا لا يجب أن يتداول اليوم؟</p>
        </div>
        <p className="mt-6 text-sm text-white/60">
          If the answer is no, you do not have a complete trading system. You have a strategy without a protection layer.
        </p>
        <a href="#audit" className="mt-8 inline-flex items-center gap-2 rounded-xl gradient-blade px-6 py-3.5 text-sm font-semibold text-white shadow-xl glow-magenta transition-transform hover:scale-[1.02]">
          Run the FinPilot Audit <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

export function ExitCapture() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5">
        <div className="grid gap-10 rounded-3xl border border-border bg-card p-8 md:grid-cols-2 md:p-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Control Checklist
            </div>
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              Not Ready to Build Yet?<br /><span className="text-blade">Take the Control Checklist.</span>
            </h2>
            <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground">
              {["Strategy Control Checklist", "Bot Readiness Scorecard", "Risk Gate Framework", "No-Trade Reasons Template"].map((x) => (
                <li key={x} className="flex items-center gap-2"><FileCheck className="h-4 w-4 text-[#4F46E5]" />{x}</li>
              ))}
            </ul>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="rounded-2xl border border-border bg-background p-6"
          >
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full gradient-blade text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <p className="mt-4 font-semibold">Check your inbox</p>
                <p className="mt-1 text-sm text-muted-foreground">Your Control Checklist is on its way.</p>
              </div>
            ) : (
              <>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Name</label>
                    <input required className="mt-1.5 w-full rounded-lg border border-border bg-card px-3 py-2.5 text-sm outline-none focus:border-[#4F46E5]" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</label>
                    <input required type="email" className="mt-1.5 w-full rounded-lg border border-border bg-card px-3 py-2.5 text-sm outline-none focus:border-[#4F46E5]" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Strategy Type</label>
                    <input className="mt-1.5 w-full rounded-lg border border-border bg-card px-3 py-2.5 text-sm outline-none focus:border-[#4F46E5]" placeholder="e.g. EUR/USD trend-following" />
                  </div>
                </div>
                <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl gradient-blade px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.01]">
                  <Download className="h-4 w-4" /> Download Control Checklist
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section id="cta" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-cockpit" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#FF1E56]/15 blur-[140px]" />
      <div className="relative mx-auto max-w-4xl px-5 text-center text-white">
        <h2 className="text-4xl font-bold leading-tight md:text-6xl">
          Stop trading on hope.<br /><span className="text-blade">Start operating on rules.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base text-white/70 md:text-lg">
          FinPilot is the financial autopilot layer behind disciplined automation —
          for traders, builders, and teams who refuse to leave execution to luck.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href="#audit" className="inline-flex items-center gap-2 rounded-xl gradient-blade px-7 py-4 text-sm font-semibold text-white shadow-2xl glow-magenta transition-transform hover:scale-[1.02]">
            Start Strategy Audit <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#pricing" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur hover:bg-white/10">
            Explore Control Layers
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-5 max-w-md text-sm text-muted-foreground">
              FinPilot builds financial autopilot systems for trading automation, risk management,
              dashboards, indicators, and advanced fintech software.
            </p>
            <p className="mt-3 max-w-md text-xs text-muted-foreground/80" dir="rtl">
              يبني FinPilot أنظمة قيادة مالية آلية لأتمتة التداول، إدارة المخاطر، الداشبوردات، المؤشرات، والبرمجيات المالية المتقدمة.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Solutions</p>
            <ul className="mt-4 space-y-2 text-sm">
              {["Trading Bots", "Risk Engines", "Dashboards", "Indicators", "Custom FinTech"].map((x) => (
                <li key={x}><a className="text-foreground/80 hover:text-foreground" href="#systems">{x}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Company</p>
            <ul className="mt-4 space-y-2 text-sm">
              {[["Pricing", "#pricing"], ["Audit", "#audit"], ["Dashboard", "#dashboard"], ["Risk Engine", "#risk"]].map(([t, h]) => (
                <li key={t}><a className="text-foreground/80 hover:text-foreground" href={h}>{t}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 rounded-2xl border border-border bg-card p-5">
          <p className="text-xs leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">Risk Disclaimer.</span> Trading involves risk.
            FinPilot provides technology, automation, and risk management tools. It does not guarantee profits or financial returns.
            <span className="mt-1 block" dir="rtl">التداول ينطوي على مخاطر. يوفر FinPilot أدوات تقنية وأتمتة وإدارة مخاطر، ولا يضمن أرباحاً أو عوائد مالية.</span>
          </p>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
          <div className="flex items-center gap-2">
            <LogoMark className="h-5 w-5" />
            <span>© {new Date().getFullYear()} FinPilot. All rights reserved.</span>
          </div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
