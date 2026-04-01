import React from 'react';
import { Code, Terminal, TrendingUp, Briefcase } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-800/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Arsenal</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2"><Code size={18} className="text-blue-400"/> Web Dev</h3>
            <div className="flex flex-wrap gap-2">
              {['WordPress', 'Elementor Pro', 'HTML5', 'CSS3', 'JavaScript (Basic)'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-slate-700 text-sm rounded-md text-slate-300">{skill}</span>
              ))}
            </div>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2"><Terminal size={18} className="text-blue-400"/> Automation</h3>
            <div className="flex flex-wrap gap-2">
              {['n8n Workflows', 'Python Basics', 'Webhooks', 'API Integration', 'Data Scraping'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-slate-700 text-sm rounded-md text-slate-300">{skill}</span>
              ))}
            </div>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2"><TrendingUp size={18} className="text-blue-400"/> Marketing</h3>
            <div className="flex flex-wrap gap-2">
              {['Technical SEO', 'SMM', 'SEM Basics', 'Google Analytics', 'Lead Generation'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-slate-700 text-sm rounded-md text-slate-300">{skill}</span>
              ))}
            </div>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2"><Briefcase size={18} className="text-blue-400"/> Core Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['Problem Solving', 'Data Entry & Management', 'Client Communication', 'Time Management'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-slate-700 text-sm rounded-md text-slate-300">{skill}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
