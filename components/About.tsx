import React from 'react';
import Section from './Section';
import { PORTFOLIO_CONTENT } from '../constants';

const About: React.FC = () => {
  return (
    <Section id="about" title="Profile">
      <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
        <div className="space-y-6 text-slate-300 leading-relaxed">
          {PORTFOLIO_CONTENT.about.map((paragraph, index) => (
            <p key={index} className="flex items-start">
              <span className="text-primary mr-4 text-xl">•</span>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;