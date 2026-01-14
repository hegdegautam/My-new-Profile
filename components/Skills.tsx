import React from 'react';
import Section from './Section';
import { PORTFOLIO_CONTENT } from '../constants';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Section id="skills" title="Tech Stack">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PORTFOLIO_CONTENT.skills.map((category, idx) => (
          <div key={idx} className="bg-slate-900/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-colors relative overflow-hidden">
            {/* Subtle background gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-primary to-secondary mr-3 rounded-full"></span>
              {category.category}
            </h3>
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-3"
            >
              {category.items.map((skill, skillIdx) => (
                <motion.div 
                  key={skillIdx} 
                  variants={item}
                  className="group flex justify-between items-center bg-slate-950/50 p-3 rounded-lg border border-slate-800 hover:border-primary/40 hover:bg-slate-900 transition-all duration-300"
                >
                  <span className="text-slate-200 font-medium font-mono text-sm group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                  {skill.description && (
                    <span className="text-[10px] md:text-xs text-slate-500 group-hover:text-slate-300 transition-colors text-right">
                      {skill.description}
                    </span>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;