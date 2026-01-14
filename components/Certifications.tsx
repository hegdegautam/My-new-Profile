import React from 'react';
import Section from './Section';
import { PORTFOLIO_CONTENT } from '../constants';
import { Award, Heart } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto px-6 pb-24">
      {/* Certifications Column */}
      <div>
        <div className="flex items-center space-x-3 mb-8">
          <Award className="text-primary" size={28} />
          <h2 className="text-3xl font-bold text-white">Certificates</h2>
        </div>
        <div className="space-y-4">
          {PORTFOLIO_CONTENT.certificates.map((cert, idx) => (
            <div key={idx} className="bg-slate-900 p-4 rounded-xl border-l-4 border-primary shadow-sm hover:translate-x-2 transition-transform duration-300">
              <p className="text-slate-200 font-medium">{cert.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Interests Column */}
      <div>
        <div className="flex items-center space-x-3 mb-8">
          <Heart className="text-secondary" size={28} />
          <h2 className="text-3xl font-bold text-white">Interests</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {PORTFOLIO_CONTENT.interests.map((interest, idx) => (
            <div key={idx} className="aspect-square bg-slate-900/50 rounded-2xl border border-slate-800 flex flex-col items-center justify-center p-4 text-center hover:bg-slate-800 transition-colors group">
              <div className="w-2 h-2 rounded-full bg-secondary mb-3 group-hover:scale-150 transition-transform"></div>
              <span className="text-slate-300 font-medium">{interest}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;