import React from 'react';
import Section from './Section';
import { PORTFOLIO_CONTENT } from '../constants';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education">
      <div className="space-y-8">
        {PORTFOLIO_CONTENT.education.map((edu) => (
          <div key={edu.id} className="flex flex-col md:flex-row gap-6 bg-slate-900/30 p-6 md:p-8 rounded-2xl border border-slate-800 hover:bg-slate-900/50 transition-colors">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                <GraduationCap size={32} />
              </div>
            </div>
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                <span className="text-slate-500 font-mono text-sm whitespace-nowrap mt-1 md:mt-0">{edu.duration}</span>
              </div>
              <h4 className="text-lg text-primary mb-4">{edu.institution}</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {edu.details.map((detail, idx) => (
                  <div key={idx} className="bg-slate-950 px-4 py-2 rounded-lg border border-slate-800 text-sm text-slate-400">
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;