import React from 'react';
import { ShieldAlert, Server, Code2, Quote, CheckCircle, Languages, Heart, Sparkles } from 'lucide-react';
import { bioPhilosophy, corePillars, languages, interests } from '../data/portfolioData';

const iconMap = {
  ShieldAlert: ShieldAlert,
  Server: Server,
  Code2: Code2
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900/50 border-t border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>À propos de moi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Double Compétence : <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
              Infrastructures Sécurisées & Développement Applicatif
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {bioPhilosophy.lead}
          </p>
        </div>

        {/* Quote / Mindset callout */}
        <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800/60 to-slate-900 border border-slate-700/80 shadow-xl relative overflow-hidden">
          <div className="absolute top-2 right-4 text-cyan-500/10 pointer-events-none">
            <Quote className="w-24 h-24" />
          </div>
          <div className="relative flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
              <Quote className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <p className="text-lg sm:text-xl font-semibold text-cyan-300 italic">
                "{bioPhilosophy.quote}"
              </p>
              <p className="text-sm text-slate-400 leading-relaxed">
                {bioPhilosophy.details[0]}
              </p>
            </div>
          </div>
        </div>

        {/* 3 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {corePillars.map((pillar) => {
            const IconComponent = iconMap[pillar.icon] || Server;
            return (
              <div
                key={pillar.id}
                className={`p-7 rounded-2xl bg-gradient-to-b ${pillar.color} bg-slate-900/80 border ${pillar.border} shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-center text-cyan-400">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-950/60 border border-slate-800">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary Info: Languages & Passions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6">
          
          {/* Languages */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                <Languages className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Langues Maîtrisées</h3>
                <p className="text-xs text-slate-400">Communication professionnelle & internationale</p>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              {languages.map((lang, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-950/50 border border-slate-800/80">
                  <div>
                    <div className="font-semibold text-sm text-slate-200">{lang.name}</div>
                    <div className="text-xs text-slate-400">{lang.level}</div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i < lang.stars ? 'bg-cyan-400' : 'bg-slate-700'
                        }`}
                      ></span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Centres d'Intérêt & Passions</h3>
                <p className="text-xs text-slate-400">Curiosité opérationnelle & veille active</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {interests.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/80 space-y-1">
                  <div className="font-semibold text-xs sm:text-sm text-cyan-300">{item.name}</div>
                  <div className="text-xs text-slate-400 line-clamp-2">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
