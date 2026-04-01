import React from 'react';
import { ExternalLink } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-800/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Professional Background</h2>
        
        <div className="space-y-8">
          {/* Experience 1 - Highlighted */}
          <div className="relative pl-8 md:pl-0">
            <div className="md:flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 flex-wrap">
                Senior WordPress Expert 
                <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/20">Primary Role</span>
              </h3>
              <span className="text-blue-400 text-sm font-medium mt-2 md:mt-0 inline-block">3+ Years (Present)</span>
            </div>
            <h4 className="text-lg mb-3">
              <a href="https://buraqwebservice.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 w-fit font-medium">
                Buraq Web Services <ExternalLink size={15} />
              </a>
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Leading WordPress development projects, building high-performance Elementor websites, and optimizing web infrastructure for speed, security, and scalability. Managing complex client requirements and delivering premium digital experiences.
            </p>
          </div>

          {/* Experience 2 */}
          <div className="relative pl-8 md:pl-0 pt-8 border-t border-slate-700">
            <div className="md:flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-white">Freelance Web & Automation Specialist</h3>
              <span className="text-slate-400 text-sm font-medium">Present</span>
            </div>
            <h4 className="text-lg text-slate-300 mb-3">Self-Employed / Upwork / Fiverr</h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Working directly with clients worldwide to design professional Elementor websites, optimize load speeds, and create n8n workflows that automate repetitive business tasks.
            </p>
          </div>

          {/* Experience 3 */}
          <div className="relative pl-8 md:pl-0 pt-8 border-t border-slate-700">
            <div className="md:flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-white">Data Entry Technical Expert</h3>
              <span className="text-slate-400 text-sm font-medium">3 Months</span>
            </div>
            <h4 className="text-lg text-slate-300 mb-3">Bangladesh Election Commission</h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Managed highly sensitive data entry and technical troubleshooting. This role developed my extreme attention to detail, accuracy, and ability to handle large-scale database operations securely.
            </p>
          </div>

          {/* Education */}
          <div className="relative pl-8 md:pl-0 pt-8 border-t border-slate-700">
            <div className="md:flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-white">Diploma in Computer Science and Technology</h3>
              <span className="text-slate-400 text-sm font-medium">7th Semester (Current)</span>
            </div>
            <h4 className="text-lg text-slate-300 mb-3">Mymensingh Polytechnic Institute</h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Building a strong theoretical and practical foundation in software development, networking, and computer architecture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
