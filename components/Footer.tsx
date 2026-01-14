import React from 'react';
import { PORTFOLIO_CONTENT } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-900 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-2">{PORTFOLIO_CONTENT.name}</h2>
        <p className="text-slate-500 mb-8">{PORTFOLIO_CONTENT.title}</p>
        
        <div className="flex justify-center gap-6 text-sm text-slate-600">
           <p>© {new Date().getFullYear()}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;