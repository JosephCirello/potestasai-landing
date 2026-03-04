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

  return (
    <div className="min-h-screen bg-[#05070f] text-white overflow-x-hidden relative">
      {/* Tactical Grid Overlay */}
      <div className="tactical-grid fixed inset-0 pointer-events-none z-[-1]" />

      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center text-xs font-bold font-mono">PA</div>
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
            className="bg-white text-black hover:bg-white/90 font-medium px-8 py-3 text-sm tracking-wider border border-white/20 rounded transition-all"
          >
            LAUNCH COMMAND CENTER
          </button>
        </div>
      </nav>

      {/* HERO – RSCOP in prime real estate */}
      <section className="pt-32 pb-24 relative">
        <div className="scanline" />
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6 leading-none">
            Potestas AI<br />
            <span className="text-emerald-400">Systems Reliability</span> &amp; GLBM-X™ Control
          </h1>
          <p className="text-2xl text-white/80 max-w-3xl mx-auto mb-16">
            AI, Financial &amp; Logistical Systems.<br />Fixed With Mission-Grade Precision.
          </p>

          {/* RSCOP Live Snapshot */}
          <div className="max-w-4xl mx-auto bg-black/70 border border-white/10 backdrop-blur-2xl rounded-3xl p-10 mb-20">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
              <span className="uppercase tracking-[3px] text-sm font-mono text-emerald-400">RSCOP LIVE</span>
            </div>
            <h3 className="text-2xl font-semibold mb-10">Frontier Model Integrity — Latest Katana Run</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {modelData.map((item, i) => (
                <div key={i} className="text-center border-l border-white/10 pl-8 first:pl-0">
                  <div className="font-mono text-5xl font-bold text-white mb-1">{item.score}</div>
                  <div className="text-white/70 text-sm tracking-wide">{item.model}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-white/50 mt-10 font-mono">Data from Run_001 • 13-vector adversarial testing</p>
          </div>
        </div>
      </section>

      {/* KATANA COMMAND CENTER */}
      <section id="katana" className="py-24 border-t border-white/10 bg-black/60">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tighter mb-6">Katana Command Center</h2>
            <p className="text-2xl text-white/80 max-w-3xl mx-auto">
              The red-teamer’s classified-grade adversarial endurance weapon — 150–200+ turn pressure tested, 13-vector self-hardening, offline/air-gapped command post for frontier LLMs.
            </p>
          </div>

          {/* Video Demo Area */}
          <div className="aspect-video bg-zinc-950 rounded-3xl overflow-hidden border border-white/10 mb-12 relative flex items-center justify-center">
            <video 
              src="/demo-video.mp4" 
              controls 
              className="w-full h-full"
            />
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => window.open('https://command-center.potestasai.com', '_blank')}
              className="group bg-emerald-600 hover:bg-emerald-500 text-lg px-12 py-8 rounded transition-all flex items-center gap-4"
            >
              LAUNCH SECURE COMMAND CENTER
              <ExternalLink className="group-hover:rotate-45 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* RSCOP DEDICATED SECTION */}
      <section id="rscop" className="py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-5xl font-bold tracking-tighter mb-6">RSCOP — Reliability &amp; Safety Common Operational Picture</h2>
          <p className="text-2xl text-white/80 max-w-3xl mx-auto mb-16">
            The first multi-agent intelligence system for AI safety and alignment.
          </p>
          <div className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            10 autonomous agents continuously fuse external market signals with internal Katana stress-test performance to deliver real-time situational awareness. No other platform operates with this level of operational intelligence.
          </div>
        </div>
      </section>

      {/* CAPABILITIES, DISPATCHES, LEADERSHIP */}
      {/* (We will fill these exact sections from your current live site in the next step) */}

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center text-sm text-white/50 font-mono">
          © 2026 Potestas AI • All Rights Reserved
          <div className="mt-6 flex items-center justify-center gap-2 text-emerald-400">
            Veteran Owned Small Business 🇺🇸
          </div>
        </div>
      </footer>
    </div>
  );
}