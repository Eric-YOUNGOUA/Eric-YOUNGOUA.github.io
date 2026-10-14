import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Download, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', company: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Opportunité Alternance - ${form.company || form.name}`);
    const body = encodeURIComponent(`Bonjour Eric,\n\nJe suis ${form.name} (${form.company}).\n\n${form.message}\n\nCordialement,`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/60 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Échangeons ensemble</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Prêt à Contribuer à Vos <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">Projets Critiques</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Je recherche une alternance de 12 mois dès <strong>Septembre 2026</strong> (rythme 2 semaines école / 2 semaines entreprise). N'hésitez pas à me contacter pour échanger ou convenir d'un entretien.
          </p>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Coordinates & CV Downloads */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-5">
              <h3 className="text-lg font-bold text-white tracking-tight">
                Coordonnées Directes
              </h3>

              <div className="space-y-4">
                
                {/* Email */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Email personnel</div>
                      <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold text-white hover:text-cyan-400">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                    title="Copier l'adresse email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Téléphone */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Téléphone</div>
                      <a href={`tel:${personalInfo.phone}`} className="text-sm font-semibold text-white hover:text-cyan-400">
                        {personalInfo.phoneDisplay}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Localisation */}
                <div className="flex items-center p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 gap-3">
                  <div className="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Localisation & Mobilité</div>
                    <div className="text-sm font-semibold text-white">
                      Angers (49) • Mobile toute France
                    </div>
                  </div>
                </div>

              </div>

              {/* Social links */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white text-sm font-medium transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white text-sm font-medium transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-200" />
                  <span>GitHub</span>
                </a>
              </div>

            </div>

            {/* CV Download Center */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
              <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <Download className="w-5 h-5 text-cyan-400" />
                <span>Télécharger mon Curriculum Vitae</span>
              </h3>
              <p className="text-xs text-slate-400">
                Sélectionnez le format adapté à votre besoin ou domaine :
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {personalInfo.cvs.map((cv, idx) => (
                  <a
                    key={idx}
                    href={cv.file}
                    download
                    className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/60 transition-all flex items-center justify-between group"
                  >
                    <span className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300 truncate">
                      {cv.label}
                    </span>
                    <Download className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400 ml-2 shrink-0" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Envoyer un Message Direct
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Votre Nom / Prénom</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="ex: Jean Dupont"
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Entreprise / Organisation</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="ex: Entreprise SAS"
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">Votre Message</label>
                  <textarea
                    required
                    rows="5"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Bonjour Eric, nous recherchons un alternant en cybersécurité / infrastructure / développement pour septembre 2026..."
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Envoyer ma proposition</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
