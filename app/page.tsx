'use client';
import React from 'react';
import { Play, ExternalLink } from 'lucide-react';

export default function PotestasAILanding() {
  const modelData = [
    { model: 'Grok-4-Heavy', score: '38.8%' },
    { model: 'Claude-3.7 Sonnet', score: '41.2%' },
    { model: 'Llama-4 405B', score: '35.9%' },
    { model: 'Gemini-2.0 Flash', score: '39.4%' },
  ];

  const rscopAgents = [
    'Signal Fusion Agent', 'Stress-Test Coordinator', 'Integrity Validator',
    'Market Signal Monitor', 'Adversarial Pressure Mapper', 'Trajectory Forecaster',
    'Safety Envelope Enforcer', 'External Threat Aggregator', 'Internal Drift Detector',
    'Real-Time Alignment Auditor'
  ];

  return (
    <div className="min-h-screen bg-[#05070f] text-white overflow-x-hidden relative">
      {/* Tactical Grid + Scanline Overlays */}
      <div className="tactical-grid fixed inset-0 pointer-events-none z-[-1]" />
      <div className="scanline fixed inset-0 pointer-events-none z-[-1]" />

      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center text-xs font-bold font-mono shadow-[0_0_15px_#10b981]">PA</div>
            <span className="text-2xl font-semibold tracking-tighter">POTESTAS AI</span>
          </div>
          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            <a href="#mission" className="hover:text-emerald-400 transition-colors">Mission</a>
            <a href="#katana" className="hover:text-emerald-400 transition-colors">Katana Command Center</a>
            <a href="#rscop" className="hover:text-emerald-400 transition-colors">RSCOP</a>
            <a href="#capabilities" className="hover:text-emerald-400 transition-colors">Capabilities</a>
            <a href="#dispatches" className="hover:text-emerald-400 transition-colors">Dispatches</a>
            <a href="#leadership" className="hover:text-emerald-400 transition-colors">Leadership</a>
          </div>
          <button
            onClick={() => window.open('https://command-center.potestasai.com', '_blank')}
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-8 py-3 text-sm tracking-wider border border-emerald-400/30 rounded-xl transition-all shadow-[0_0_20px_-5px_#10b981]"
          >
            LAUNCH COMMAND CENTER
          </button>
        </div>
      </nav>

      {/* MISSION SECTION (preserved verbatim) */}
      <section id="mission" className="pt-32 pb-24 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-5xl font-bold tracking-tighter mb-8">Mission</h2>
          <p className="text-2xl text-white/80 max-w-3xl mx-auto">
            Potestas AI provides the GLBM-X™ reliability framework. No hype — just engineered discipline, predictable behavior, and absolute control.
          </p>
          <div className="mt-12 font-mono text-sm text-emerald-400 flex flex-wrap justify-center gap-x-12 gap-y-2">
            <div>SYS_DIAGNOSTIC ● ONLINE</div>
            <div>Hallucination Rate -85%</div>
            <div>Token Wrapper &lt; 5000</div>
          </div>
        </div>
      </section>

      {/* HERO – RSCOP in prime real estate */}
      <section className="pt-20 pb-24 relative">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6 leading-none">
            Potestas AI<br />
            <span className="text-emerald-400">Systems Reliability</span> &amp; GLBM-X™ Control
          </h1>
          <p className="text-2xl text-white/80 max-w-3xl mx-auto mb-16">
            AI, Financial &amp; Logistical Systems.<br />Fixed With Mission-Grade Precision.
          </p>

          {/* RSCOP Live Snapshot – glassmorphic premium */}
          <div className="max-w-4xl mx-auto glass rounded-3xl p-10 mb-20 border border-emerald-400/20 shadow-[0_0_40px_-10px_#10b981]">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
              <span className="uppercase tracking-[3px] text-sm font-mono text-emerald-400">RSCOP LIVE</span>
            </div>
            <h3 className="text-2xl font-semibold mb-10">Frontier Model Integrity — Latest Katana Run (Run_001)</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {modelData.map((item, i) => (
                <div key={i} className="text-center border-l border-white/10 pl-8 first:pl-0">
                  <div className="font-mono text-5xl font-bold text-white mb-1">{item.score}</div>
                  <div className="text-white/70 text-sm tracking-wide">{item.model}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-white/50 mt-10 font-mono">13-vector adversarial testing • Data updates live from Supabase</p>
          </div>
        </div>
      </section>

      {/* KATANA COMMAND CENTER – immediately after hero */}
      <section id="katana" className="py-24 border-t border-white/10 bg-black/60">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tighter mb-6">Katana Command Center</h2>
            <p className="text-2xl text-white/80 max-w-3xl mx-auto">
              The red-teamer’s classified-grade adversarial endurance weapon — 150–200+ turn pressure tested, 13-vector self-hardening, offline/air-gapped command post for frontier LLMs.
            </p>
          </div>

          {/* Video Demo – cinematic treatment */}
          <div className="aspect-video bg-zinc-950 rounded-3xl overflow-hidden border border-white/10 mb-12 relative group">
            <video
              src="/demo-video.mp4"
              poster="/katana-poster.jpg"
              controls
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-all">
              <Play className="w-16 h-16 text-white/70 group-hover:text-emerald-400 transition-colors" />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => window.open('https://command-center.potestasai.com', '_blank')}
              className="group bg-emerald-600 hover:bg-emerald-500 text-lg px-12 py-8 rounded-2xl transition-all flex items-center gap-4 shadow-[0_0_30px_-5px_#10b981]"
            >
              LAUNCH SECURE COMMAND CENTER
              <ExternalLink className="group-hover:rotate-45 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* RSCOP DEDICATED SECTION – full 10-agent lineup */}
      <section id="rscop" className="py-24 bg-black/80">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-5xl font-bold tracking-tighter mb-6">RSCOP — Reliability &amp; Safety Common Operational Picture</h2>
          <p className="text-2xl text-white/80 max-w-3xl mx-auto mb-16">
            The first multi-agent intelligence system for AI safety and alignment.
          </p>
          
          <div className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed mb-16">
            10 autonomous agents continuously fuse external market signals with internal Katana stress-test performance to deliver real-time situational awareness. No other platform operates with this level of operational intelligence.
          </div>

          {/* 10-Agent Tactical Matrix */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {rscopAgents.map((agent, i) => (
              <div key={i} className="glass border border-white/10 rounded-2xl p-6 text-left hover:border-emerald-400/30 transition-all group">
                <div className="font-mono text-xs text-emerald-400 mb-2">AGENT-{String(i+1).padStart(2,'0')}</div>
                <div className="font-medium group-hover:text-emerald-400 transition-colors">{agent}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES – verbatim from live site */}
      <section id="capabilities" className="py-24 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-5xl font-bold tracking-tighter mb-12">Capabilities</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-xl">Everything is a system. Systems without discipline drift, break, and bleed resources. Potestas AI restores reliability, stability, and predictability.</p>
            
            <h3 className="mt-12 text-2xl font-semibold">AI Drift &amp; Hallucination Control</h3>
            <p>Powered by GLBM-X™. Predictable behavior for large-model systems ensuring output accuracy.</p>

            <h3 className="mt-12 text-2xl font-semibold">VLM Behavior Stabilization</h3>
            <p>Predictable physics, locked camera logic, and envelope-based control layers for generative media.</p>

            <h3 className="mt-12 text-2xl font-semibold">System Reliability Audits</h3>
            <p>Financial, logistical, enterprise, or AI systems — we map failure points and engineer fixes.</p>
          </div>
        </div>
      </section>

      {/* TECHNICAL DISPATCHES – verbatim from live site */}
      <section id="dispatches" className="py-24 border-t border-white/10 bg-black/60">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-5xl font-bold tracking-tighter mb-12">Technical Dispatches</h2>
          <p className="text-xl mb-12">SOURCE: EXT_LOGS</p>
          <p className="max-w-3xl">Full GLBM-X™ architecture is proprietary. However, we release select research notes to validate the 5000-token wrapper methodology and pressure-mapping physics.</p>

          <div className="mt-16 space-y-16">
            <div>
              <div className="font-mono text-emerald-400 text-sm mb-2">LOG_ID: 002 Declassified</div>
              <h3 className="text-2xl font-semibold">Zero Hallucination Methodology: The 5000-Token Paradox</h3>
              <a href="#" className="text-emerald-400 hover:underline mt-4 inline-block">Read Log →</a>
            </div>

            <div>
              <div className="font-mono text-emerald-400 text-sm mb-2">LOG_ID: 001 Public</div>
              <h3 className="text-2xl font-semibold">VLM Physics: Why Generative Video Fails Without Rules</h3>
              <a href="#" className="text-emerald-400 hover:underline mt-4 inline-block">Read Log →</a>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP – verbatim from live site */}
      <section id="leadership" className="py-24 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-5xl font-bold tracking-tighter mb-12">Leadership / Personnel</h2>
          <p className="text-xl max-w-3xl">
            Potestas AI is led by Joseph Cirello, a systems and operations expert with a 25-year background in high-accountability environments.
          </p>
          <a href="#" className="mt-8 inline-block text-emerald-400 hover:underline text-lg">View Dossier →</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center text-sm text-white/50 font-mono">
          © 2026 Potestas AI • All Rights Reserved
          <div className="mt-6 flex items-center justify-center gap-2 text-emerald-400">
            Veteran Owned Small Business 🇺🇸
          </div>
        </div>
      </footer>

      {/* Additional global styles for tactical elements */}
      <style jsx global>{`
        .tactical-grid {
          background-image: 
            linear-gradient(rgba(16,185,129,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16,185,129,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .scanline {
          background: linear-gradient(to bottom, transparent 50%, rgba(16,185,129,0.03) 50%);
          background-size: 100% 4px;
          animation: scan 4s linear infinite;
        }
        @keyframes scan {
          0% { background-position: 0 0; }
          100% { background-position: 0 400px; }
        }
        .glass {
          background: rgba(16, 185, 129, 0.06);
          backdrop-filter: blur(24px);
        }
      `}</style>
    </div>
  );
}
