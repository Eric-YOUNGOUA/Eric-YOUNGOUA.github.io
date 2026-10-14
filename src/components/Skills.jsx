import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Server, 
  Network, 
  Code2, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Award,
  Check
} from 'lucide-react';
import { technicalSkills } from '../data/portfolioData';

const iconMap = {
  ShieldAlert,
  Server,
  Network,
  Code2,
  Sparkles,
  CheckCircle2
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Compétences & Maîtrise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Stack Technique & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">Savoir-Faire</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Une palette complète alliant sécurité opérationnelle, administration des infrastructures et développement de solutions logicielles résilientes.
          </p>
        </div>

        {/* Domain Tabs on Top */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 max-w-4xl mx-auto">
          {technicalSkills.map((cat, idx) => {
            const Icon = iconMap[cat.icon] || Layers;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === idx
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.category}</span>
              </button>
            );
          })}
        </div>

        {/* Active Domain Detail Card */}
        <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl space-y-8">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                {React.createElement(iconMap[technicalSkills[activeTab].icon] || Layers, { className: "w-6 h-6" })}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {technicalSkills[activeTab].category}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-mono">
                  {technicalSkills[activeTab].skills.length} compétences répertoriées
                </p>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {technicalSkills[activeTab].skills.map((skill, sIdx) => (
              <div
                key={sIdx}
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-medium text-slate-200">
                    {skill.name}
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300">
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Banner */}
        <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800/80 to-slate-900 border border-slate-700/80 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Certifications & Référentiels</h4>
              <p className="text-xs sm:text-sm text-slate-300">
                <strong>Cisco CCNA</strong> (Préparation & validation acquis) • <strong>CEH</strong> (Certified Ethical Hacker en cours) • <strong>OWASP Top 10</strong> • <strong>Architecture Zero Trust</strong>
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 shrink-0 transition-colors"
          >
            Discuter de mon profil
          </a>
        </div>

      </div>
    </section>
  );
}
