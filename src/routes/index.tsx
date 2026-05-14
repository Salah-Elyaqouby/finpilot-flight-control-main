import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/finpilot/Header";
import { Hero } from "@/components/finpilot/Hero";
import {
  MarketReality, HiddenFailure, IdentityShift, WhatIsFinPilot,
  PermissionLayer, NoTradeIntelligence, RiskGate, DashboardPreview,
  Services, BeforeAfter, Pricing, TrustPhilosophy,
} from "@/components/finpilot/Sections";
import { Audit } from "@/components/finpilot/Audit";
import { FinalQuestion, ExitCapture, FinalCTA, Footer } from "@/components/finpilot/FinalSections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FinPilot — Your Financial Autopilot for Controlled Trading" },
      { name: "description", content: "FinPilot builds AI-powered trading automation, risk management systems, financial dashboards, custom trading indicators, and fintech software designed for disciplined market execution." },
      { property: "og:title", content: "FinPilot — The Control Layer for Automated Trading" },
      { property: "og:description", content: "Stop guessing. Start operating. The control layer for automated trading — risk gates, no-trade intelligence, profit protection, and live system dashboards." },
      { property: "og:type", content: "website" },
      { name: "keywords", content: "FinTech, trading bot, automated trading, risk management, trading dashboard, financial software, trading indicators, strategy automation, AI trading tools, algorithmic trading" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <MarketReality />
      <HiddenFailure />
      <IdentityShift />
      <WhatIsFinPilot />
      <PermissionLayer />
      <NoTradeIntelligence />
      <RiskGate />
      <DashboardPreview />
      <Services />
      <BeforeAfter />
      <Pricing />
      <Audit />
      <TrustPhilosophy />
      <FinalQuestion />
      <ExitCapture />
      <FinalCTA />
      <Footer />
    </main>
  );
}
