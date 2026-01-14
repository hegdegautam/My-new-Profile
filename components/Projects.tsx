import React from 'react';
import Section from './Section';
import { PORTFOLIO_CONTENT } from '../constants';
import { Folder, Clock, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid md:grid-cols-2 gap-8">
        {PORTFOLIO_CONTENT.projects.map((project) => (
          <div 
            key={project.id} 
            className="group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-secondary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(217,70,239,0.1)]"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity text-secondary">
              <Folder size={64} />
            </div>
            
            <div className="mb-6 flex justify-between items-start">
              <div className="flex items-center space-x-2 text-primary text-xs font-mono bg-primary/10 px-2 py-1 rounded">
                <Clock size={12} />
                <span>{project.duration}</span>
              </div>
              <ArrowUpRight className="text-slate-600 group-hover:text-secondary transition-colors" size={20} />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4 leading-snug group-hover:text-secondary transition-colors">
              {project.title}
            </h3>
            
            <p className="text-slate-400 leading-relaxed mb-6 text-sm">
              {project.description}
            </p>
            
            <div className="pt-6 border-t border-slate-800/50 flex flex-wrap gap-2">
               {/* Extracting implicit tags from description or title for visual flair */}
               {project.title.toLowerCase().includes('antenna') && <span className="text-xs px-2 py-1 rounded border border-slate-700 text-slate-300 font-mono">HFSS</span>}
               {project.title.toLowerCase().includes('iot') && <span className="text-xs px-2 py-1 rounded border border-slate-700 text-slate-300 font-mono">IoT</span>}
               {project.description.toLowerCase().includes('fractal') && <span className="text-xs px-2 py-1 rounded border border-slate-700 text-slate-300 font-mono">Fractal Geometry</span>}
               {project.description.toLowerCase().includes('sensors') && <span className="text-xs px-2 py-1 rounded border border-slate-700 text-slate-300 font-mono">Sensors</span>}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;