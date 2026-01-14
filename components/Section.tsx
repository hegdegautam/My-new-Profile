import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = "" }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        {title && (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 inline-block"
          >
            <h2 className="text-3xl md:text-5xl font-bold pb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-secondary">
              {title}
            </h2>
            <div className="h-1 w-1/2 bg-gradient-to-r from-primary to-transparent rounded-full mt-2"></div>
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;