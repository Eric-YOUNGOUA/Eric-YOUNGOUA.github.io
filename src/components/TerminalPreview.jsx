import React, { useState } from 'react';
import { Terminal, Shield, CheckCircle2, Play, Sparkles } from 'lucide-react';

export default function TerminalPreview() {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = {
    profile: {
      cmd: "whoami --verbose",
      output: [
        { label: "Nom", val: "Marcel Eric YOUNGOUA TCHONGOUE", color: "text-white" },
        { label: "École", val: "ESAIP Angers (Cycle Ingénieur Bac+5)", color: "text-cyan-300" },
        { label: "Majeure", val: "Réseaux & Cybersécurité", color: "text-emerald-400" },
        { label: "Objectif", val: "Alternance 12 mois (Sept. 2026) • Rythme 2s/2s", color: "text-amber-300" },
        { label: "Mobilité", val: "Angers, Île-de-France, Nantes, France entière", color: "text-slate-300" }
      ]
    },
    zero_trust: {
      cmd: "kubectl get nodes -o wide --zero-trust",
      output: [
        { label: "Cluster", val: "k3s-ha (Multi-nodes Zero Trust)", color: "text-cyan-300" },
        { label: "OS Hardening", val: "sysctl kernel lock + AppArmor + Firejail sandboxing", color: "text-emerald-400" },
        { label: "Surveillance", val: "Suricata IDS (Realtime) + rsyslog TLS", color: "text-purple-300" },
        { label: "IAM & Auth", val: "Keycloak Centralized Engine + MFA SSH", color: "text-amber-300" },
        { label: "Audit status", val: "PASSED (0 critical flaws, USB disabled)", color: "text-emerald-400" }
      ]
    },
    stack: {
      cmd: "cat current_stack.yaml",
      output: [
        { label: "Backend", val: "Python (FastAPI, Flask) | Java (Spring Boot)", color: "text-cyan-300" },
        { label: "Frontend", val: "React Native | React | Angular", color: "text-blue-300" },
        { label: "Infrastructures", val: "Kubernetes, Docker Compose, Proxmox, pfSense", color: "text-purple-300" },
        { label: "Réseaux", val: "Cisco IOS (VLAN, LACP, FHRP, DHCPv6, VPN)", color: "text-emerald-400" },
        { label: "IA & NLP", val: "LLM (Ollama Hermes, Claude API) + Scikit-Learn", color: "text-amber-300" }
      ]
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-2xl overflow-hidden backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/50 glow-cyan">
      {/* Window bar */}
      <div className="bg-slate-950/90 px-4 py-3 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>eric@esaip-box:~</span>
          </span>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800 text-xs font-mono">
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-2.5 py-1 rounded-md transition-all ${
              activeTab === 'profile' ? 'bg-cyan-500 text-slate-950 font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            whoami
          </button>
          <button
            onClick={() => setActiveTab('zero_trust')}
            className={`px-2.5 py-1 rounded-md transition-all ${
              activeTab === 'zero_trust' ? 'bg-cyan-500 text-slate-950 font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            k3s
          </button>
          <button
            onClick={() => setActiveTab('stack')}
            className={`px-2.5 py-1 rounded-md transition-all ${
              activeTab === 'stack' ? 'bg-cyan-500 text-slate-950 font-semibold' : 'text-slate-400 hover:text-white'
            }`}
          >
            stack
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-5 font-mono text-xs sm:text-sm space-y-3 bg-gradient-to-b from-slate-900 to-slate-950/90 min-h-[220px]">
        {/* Command line */}
        <div className="flex items-center gap-2 text-slate-300">
          <span className="text-emerald-400 font-bold">$</span>
          <span className="text-cyan-300 font-semibold">{tabs[activeTab].cmd}</span>
          <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse"></span>
        </div>

        {/* Command Output */}
        <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
          {tabs[activeTab].output.map((row, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
              <span className="text-slate-500 font-semibold text-xs uppercase tracking-wider shrink-0 w-28">
                {row.label} :
              </span>
              <span className={`${row.color} font-medium`}>
                {row.val}
              </span>
            </div>
          ))}
        </div>

        {/* Footer status */}
        <div className="pt-3 mt-3 border-t border-slate-800/60 flex items-center justify-between text-slate-500 text-xs">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Environnement durci & certifié</span>
          </span>
          <span className="text-slate-400 font-mono">Status: READY</span>
        </div>
      </div>
    </div>
  );
}
