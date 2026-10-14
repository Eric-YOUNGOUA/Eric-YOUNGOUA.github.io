import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, FileText, Send, ExternalLink } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cvDropdown, setCvDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#hero", label: "Accueil" },
    { href: "#about", label: "Profil" },
    { href: "#projects", label: "Projets" },
    { href: "#experience", label: "Parcours" },
    { href: "#skills", label: "Compétences" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
              <Shield className="w-5 h-5 text-white transition-transform group-hover:scale-110" />
            </div>
            <div>
              <div className="font-bold text-lg text-white tracking-tight flex items-center gap-2">
                <span>Eric Youngoua</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
              <p className="text-xs text-slate-400 font-mono">ESAIP • Ingénieur Bac+5</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-900/60 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* CVs Dropdown */}
            <div className="relative">
              <button
                onClick={() => setCvDropdown(!cvDropdown)}
                onBlur={() => setTimeout(() => setCvDropdown(false), 200)}
                className="flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 rounded-lg transition-all"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Mes CVs</span>
              </button>

              {cvDropdown && (
                <div className="absolute right-0 mt-2 w-64 bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-xl shadow-2xl py-2 z-50">
                  <div className="px-3 py-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-800/80">
                    Télécharger un format :
                  </div>
                  {personalInfo.cvs.map((cv, idx) => (
                    <a
                      key={idx}
                      href={cv.file}
                      download
                      className="flex items-center justify-between px-3 py-2 text-sm text-slate-300 hover:text-cyan-300 hover:bg-slate-800/60 transition-colors"
                    >
                      <span className="truncate">{cv.label}</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-60 ml-2 shrink-0" />
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Contact Button */}
            <a
              href="#contact"
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 rounded-lg shadow-sm shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Me contacter</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800/80 space-y-2">
            <div className="text-xs font-semibold text-slate-400 px-3 uppercase tracking-wider">
              Télécharger CV :
            </div>
            <div className="grid grid-cols-1 gap-1 px-1">
              {personalInfo.cvs.map((cv, idx) => (
                <a
                  key={idx}
                  href={cv.file}
                  download
                  className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-slate-300 bg-slate-900/60 hover:bg-slate-800"
                >
                  <span>{cv.label}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                </a>
              ))}
            </div>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-lg shadow-md"
            >
              <Send className="w-4 h-4" />
              <span>Me contacter</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
