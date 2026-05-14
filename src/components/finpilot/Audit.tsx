import { useMemo, useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";

const questions = [
  "Do you have a daily risk limit?",
  "Can your bot explain why it should not trade?",
  "Is your strategy tested outside sample data?",
  "Do you know your maximum drawdown tolerance?",
  "Do you have spread and volatility filters?",
  "Is profit protection defined?",
  "Do you have a live system dashboard?",
];
const ar = [
  "هل لديك حد مخاطرة يومي؟",
  "هل يستطيع البوت شرح لماذا لا يجب أن يتداول؟",
  "هل اختُبرت الاستراتيجية خارج بيانات التدريب؟",
  "هل تعرف أقصى تراجع مقبول؟",
  "هل لديك فلاتر للسبريد والتذبذب؟",
  "هل حماية الربح محددة؟",
  "هل لديك داشبورد مباشر للنظام؟",
];
const opts = [
  { l: "Yes", v: 14 },
  { l: "Not Sure", v: 7 },
  { l: "No", v: 0 },
];

export function Audit() {
  const [answers, setAnswers] = useState<Record<number, number | null>>({});
  const score = useMemo(
    () => Object.values(answers).reduce<number>((a, b) => a + (b ?? 0), 0),
    [answers]
  );
  const answered = Object.keys(answers).length;
  const done = answered === questions.length;
  const verdict = score < 50
    ? { tier: "Needs Control Layer", color: "text-[#FF1E56]", msg: "Your strategy may generate signals, but it lacks the control layer required for safe automation." }
    : score < 80
      ? { tier: "Has Structure", color: "text-amber-500", msg: "Your strategy has structure, but it needs stronger execution visibility and risk logic." }
      : { tier: "Automation-Ready", color: "text-emerald-500", msg: "Your strategy is close to automation-ready. FinPilot can help turn it into a controlled operating system." };

  return (
    <section id="audit" className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Strategy Audit
          </div>
          <h2 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
            Is Your Strategy <span className="text-blade">Ready for Automation?</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground" dir="rtl">هل استراتيجيتك جاهزة للأتمتة؟</p>
        </div>

        <div className="mt-12 rounded-3xl border border-border bg-card p-6 md:p-10">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Progress · {answered}/{questions.length}
            </span>
            <button onClick={() => setAnswers({})} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground">
              <RotateCcw className="h-3 w-3" /> Reset
            </button>
          </div>
          <div className="mb-8 h-1.5 overflow-hidden rounded-full bg-border">
            <div className="h-full gradient-blade transition-all" style={{ width: `${(answered / questions.length) * 100}%` }} />
          </div>

          <div className="space-y-5">
            {questions.map((q, i) => (
              <div key={q} className="rounded-2xl border border-border bg-background p-5">
                <div className="flex gap-3">
                  <span className="font-mono text-xs font-bold text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex-1">
                    <p className="font-semibold">{q}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground" dir="rtl">{ar[i]}</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {opts.map((o) => {
                    const sel = answers[i] === o.v;
                    return (
                      <button
                        key={o.l}
                        onClick={() => setAnswers((a) => ({ ...a, [i]: o.v }))}
                        className={`rounded-lg border px-3 py-2.5 text-sm font-semibold transition-all ${sel ? "border-transparent gradient-blade text-white shadow-md" : "border-border bg-card hover:border-[#4F46E5]/40"}`}
                      >
                        {o.l}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {done && (
            <div className="mt-8 rounded-2xl border border-border bg-gradient-to-br from-[#1D4ED8]/[0.06] to-[#FF1E56]/[0.06] p-7 text-center animate-fade-up">
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Your Score</div>
              <div className="mt-2 font-mono text-6xl font-bold text-blade">{score}<span className="text-2xl text-muted-foreground">/100</span></div>
              <div className={`mt-3 text-sm font-bold uppercase tracking-widest ${verdict.color}`}>{verdict.tier}</div>
              <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">{verdict.msg}</p>
              <a href="#cta" className="mt-6 inline-flex items-center gap-2 rounded-xl gradient-blade px-6 py-3 text-sm font-semibold text-white shadow-xl transition-transform hover:scale-[1.02]">
                Fix the Control Layer with FinPilot <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
