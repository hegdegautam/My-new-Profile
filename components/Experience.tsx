import React from 'react';
import Section from './Section';
import { PORTFOLIO_CONTENT } from '../constants';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { ExperienceItem } from '../types';

const ExperienceCard: React.FC<{ item: ExperienceItem; isInternship?: boolean }> = ({ item, isInternship }) => (
  <div className="relative pl-8 md:pl-0 group">
    {/* Timeline line - hidden on mobile, visible on md */}
    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2 group-last:bottom-auto group-last:h-full"></div>
    
    <div className={`md:flex justify-between items-start mb-12 ${isInternship ? 'flex-row-reverse' : ''}`}>
      {/* Date & Location (Left side usually) */}
      <div className={`md:w-5/12 mb-4 md:mb-0 ${isInternship ? 'md:pl-12 text-left' : 'md:text-right md:pr-12'}`}>
        <div className="inline-flex items-center space-x-2 text-primary font-mono text-sm mb-2 bg-primary/10 px-3 py-1 rounded-full">
          <Calendar size={12} />
          <span>{item.duration}</span>
        </div>
        <div className="text-slate-500 text-sm flex items-center md:justify-end space-x-1">
            <MapPin size={14} className={isInternship ? "" : "order-last ml-1"} />
            <span>{item.location}</span>
        </div>
      </div>

      {/* Center Dot */}
      <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-slate-950 border-[3px] border-secondary shadow-[0_0_10px_rgba(217,70,239,0.5)] -translate-x-[5px] md:-translate-x-1/2 z-10 group-hover:scale-125 transition-transform duration-300"></div>

      {/* Content (Right side usually) */}
      <div className={`md:w-5/12 ${isInternship ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
        <div className={`bg-slate-900/40 backdrop-blur-sm p-6 rounded-xl border border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/5 hover:-translate-y-1 ${isInternship ? '' : ''}`}>
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{item.role}</h3>
          <h4 className="text-lg text-slate-300 mb-4 flex items-center md:inline-flex gap-2">
            <Briefcase size={16} className="text-secondary" />
            {item.company}
          </h4>
          <ul className="space-y-3">
            {item.description.map((desc, i) => (
              <li key={i} className="text-slate-400 text-sm leading-relaxed flex items-start">
                <span className="text-primary mr-3 mt-1.5 min-w-[6px] h-[6px] rounded-full bg-primary shadow-[0_0_5px_rgba(14,165,233,0.5)]"></span>
                <span>{desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Work History">
      <div className="relative">
        {PORTFOLIO_CONTENT.experience.map((item) => (
          <ExperienceCard key={item.id} item={item} />
        ))}
        
        {/* Separator for Internships */}
        <div className="py-12 flex items-center justify-center md:justify-between">
           <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent flex-1 hidden md:block"></div>
           <div className="px-6 py-2 border border-slate-700 rounded-full bg-slate-900/80 backdrop-blur">
             <span className="text-slate-400 font-mono text-xs uppercase tracking-[0.2em]">Internships</span>
           </div>
           <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent flex-1 hidden md:block"></div>
        </div>

        {PORTFOLIO_CONTENT.internship.map((item) => (
          <ExperienceCard key={item.id} item={item} isInternship={true} />
        ))}
      </div>
    </Section>
  );
};

export default Experience;