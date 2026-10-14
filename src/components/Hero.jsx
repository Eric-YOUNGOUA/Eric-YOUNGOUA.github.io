import React from 'react';
import { Shield, ArrowRight, Download, MapPin, Calendar, Award } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import TerminalPreview from './TerminalPreview';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Presentation */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-medium shadow-sm shadow-emerald-500/10">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Recherche Alternance 12 mois • Rentrée Octobre 2026</span>
            </div>

            {/* Main Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Marcel Eric <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">
                  YOUNGOUA
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300">
                Élève Ingénieur Réseaux, Cybersécurité & Full Stack
              </p>
            </div>

            {/* School & Degree Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>ESAIP Angers (Bac+5 / Titre Niveau 6)</span>
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-purple-400" />
                <span>Rythme : 2 sem. école / 2 sem. entreprise</span>
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Angers & Mobile France entière</span>
              </span>
            </div>

            {/* Presentation Bio */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Passionné par la résilience des systèmes d'information, je conçois et sécurise des architectures 
              <strong className="text-cyan-300 font-semibold"> Zero Trust</strong>, des réseaux critiques (Cisco), 
              des infrastructures conteneurisées (Kubernetes, Docker) tout en développant des applications 
              <strong className="text-teal-300 font-semibold"> Full Stack & Mobile</strong> modernes (FastAPI, React Native, Spring Boot).
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2.5 px-6 py-3.5 text-base font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Découvrir mes projets</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="cv/CV_Marcel_ERIC_Global.pdf"
                download
                className="flex items-center gap-2.5 px-5 py-3.5 text-base font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all duration-200"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Télécharger CV</span>
              </a>

              <div className="flex items-center gap-2 pl-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Stat counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60 text-center lg:text-left">
                <div className="text-2xl font-bold text-cyan-400">Bac+5</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Cycle Ingénieur</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60 text-center lg:text-left">
                <div className="text-2xl font-bold text-teal-400">19+</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Projets Réalisés</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60 text-center lg:text-left">
                <div className="text-2xl font-bold text-purple-400">3</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Stages & Pro</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60 text-center lg:text-left">
                <div className="text-2xl font-bold text-emerald-400">B2</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Anglais Pro</div>
              </div>
            </div>

          </div>

          {/* Right Column: Terminal Preview */}
          <div className="lg:col-span-5 flex justify-center">
            <TerminalPreview />
          </div>

        </div>
      </div>
    </section>
  );
}
