import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronDown, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { PORTFOLIO_CONTENT } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-12">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/20 rounded-full blur-[100px] -z-10" />

      <div className="max-w-4xl mx-auto px-6 w-full flex flex-col items-center text-center z-10">
        
        {/* Text Content */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 max-w-3xl"
        >
            <div className="inline-block px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono mb-2">
              OPEN TO WORK
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
              {PORTFOLIO_CONTENT.name}
            </h1>
            
            <h3 className="text-2xl md:text-3xl font-light text-slate-300">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-medium">
                {PORTFOLIO_CONTENT.title}
              </span>
            </h3>

            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
                {PORTFOLIO_CONTENT.about[0]}
            </p>

            {/* Contact Info Grid */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 py-4 text-slate-400 font-mono text-sm">
                <div className="flex items-center space-x-2 hover:text-white transition-colors">
                    <Mail size={16} className="text-secondary" />
                    <span>{PORTFOLIO_CONTENT.contact.email}</span>
                </div>
                <div className="flex items-center space-x-2 hover:text-white transition-colors">
                    <Phone size={16} className="text-secondary" />
                    <span>{PORTFOLIO_CONTENT.contact.phone}</span>
                </div>
                 <div className="flex items-center space-x-2 hover:text-white transition-colors">
                    <MapPin size={16} className="text-secondary" />
                    <span>{PORTFOLIO_CONTENT.contact.location}</span>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
                <a 
                href="#contact"
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-primary to-blue-600 px-8 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(14,165,233,0.5)]"
                >
                <span className="mr-2">Contact Me</span>
                <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <button className="h-12 px-8 rounded-full border border-slate-700 text-slate-300 font-medium hover:bg-slate-800 hover:text-white transition-colors flex items-center space-x-2">
                <Download size={18} />
                <span>Download CV</span>
                </button>
            </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 animate-bounce"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;