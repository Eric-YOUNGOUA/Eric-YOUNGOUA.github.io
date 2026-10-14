import React, { useState } from 'react';
import { 
  FolderGit2, 
  Search, 
  ExternalLink, 
  Smartphone, 
  ShieldCheck, 
  Server, 
  Bug, 
  Network, 
  GraduationCap, 
  FolderCog, 
  Terminal, 
  Sparkles, 
  Eye, 
  Globe, 
  BarChart3, 
  CreditCard, 
  Lock, 
  Workflow, 
  Cpu, 
  ServerCog, 
  AppWindow, 
  Gamepad2,
  ChevronRight
} from 'lucide-react';
import { projectsList, projectCategories } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const iconMap = {
  Smartphone,
  ShieldCheck,
  Server,
  Bug,
  Network,
  GraduationCap,
  FolderCog,
  Terminal,
  Sparkles,
  Eye,
  Globe,
  BarChart3,
  CreditCard,
  Lock,
  Workflow,
  Cpu,
  ServerCog,
  AppWindow,
  Gamepad2
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = projectsList.filter((project) => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Réalisations & Travaux</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Catalogue des <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">Projets Concrets</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Découvrez une sélection de mes 19 projets académiques, professionnels et personnels en Cybersécurité, Infrastructure, Réseaux et Développement.
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher par techno, mot-clé..."
              className="w-full pl-10 pr-4 py-2 bg-slate-900/90 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 transition-colors"
            />
          </div>

        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            const IconComponent = iconMap[project.icon] || Server;
            return (
              <div
                key={project.id}
                onClick={() => setActiveModalProject(project)}
                className="group relative rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 cursor-pointer transform hover:-translate-y-1"
              >
                {/* Top card bar */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 group-hover:border-cyan-500/30 transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {project.featured && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                        <Sparkles className="w-3 h-3 text-cyan-400" />
                        <span>Majeur</span>
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      {project.context}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-300 line-clamp-3 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>
                </div>

                {/* Bottom card bar */}
                <div className="pt-6 mt-4 border-t border-slate-800/80 space-y-4">
                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-950 border border-slate-800 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-950 text-slate-500">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action link */}
                  <div className="flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                    <span>Voir architecture & détails</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-base">Aucun projet ne correspond à votre recherche.</p>
          </div>
        )}

        {/* Modal */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />

      </div>
    </section>
  );
}
