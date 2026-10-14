import React from 'react';
import { Briefcase, GraduationCap, Heart, MapPin, Calendar, CheckCircle2, History } from 'lucide-react';
import { experiencesAndEducation } from '../data/portfolioData';

export default function ExperienceTimeline() {
  const getTypeBadge = (type) => {
    switch (type) {
      case 'work':
        return {
          label: "Expérience Professionnelle",
          icon: Briefcase,
          color: "text-cyan-400 bg-cyan-950/40 border-cyan-800/60"
        };
      case 'education':
        return {
          label: "Formation Académique",
          icon: GraduationCap,
          color: "text-purple-400 bg-purple-950/40 border-purple-800/60"
        };
      case 'volunteering':
        return {
          label: "Engagement Solidaire",
          icon: Heart,
          color: "text-rose-400 bg-rose-950/40 border-rose-800/60"
        };
      default:
        return {
          label: "Parcours",
          icon: Briefcase,
          color: "text-slate-400 bg-slate-900 border-slate-800"
        };
    }
  };

  return (
    <section id="experience" className="py-24 bg-slate-900/40 border-t border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <History className="w-3.5 h-3.5" />
            <span>Parcours & Évolution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Expériences Professionnelles & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">Formation</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            De la classe préparatoire PCSI au Cycle Ingénieur ESAIP, découvrez les étapes clés de mon parcours technique et international.
          </p>
        </div>

        {/* Timeline wrapper */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical central line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-slate-800"></div>

          <div className="space-y-12">
            {experiencesAndEducation.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const typeConfig = getTypeBadge(item.type);
              const IconComp = typeConfig.icon;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-8`}
                >
                  {/* Central Node Icon */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-md shadow-cyan-500/20 z-10">
                    <IconComp className="w-4 h-4" />
                  </div>

                  {/* Card content */}
                  <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${isEven ? 'sm:pl-10' : 'sm:pr-10'}`}>
                    <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-xl space-y-4">
                      
                      {/* Top meta */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border ${typeConfig.color}`}>
                          <span>{typeConfig.label}</span>
                        </span>
                        <span className="flex items-center gap-1 text-xs font-mono text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{item.period}</span>
                        </span>
                      </div>

                      {/* Title & Institution */}
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                          {item.role}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-cyan-300 font-medium">
                          <span>{item.institution}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1 text-slate-400 text-xs">
                            <MapPin className="w-3 h-3" />
                            {item.location}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Skill tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {item.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-950 border border-slate-800 text-slate-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
