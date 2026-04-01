import React from 'react';
import { ChevronRight, Download } from 'lucide-react';

const Hero = ({ profileMain, fallbackProfile, setIsContactModalOpen, scrollToSection, setIsResumeModalOpen }) => {
  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
      <div className="flex-1">
        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium font-fira">
          const status = "Available for Freelance";
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
          I Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">High-Converting</span> Websites <br className="hidden md:block" />
          & Automate Your Business.
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-slate-400 mb-10 leading-relaxed mx-auto md:mx-0">
          Hi, I'm MD SIAM. <strong className="text-white">Senior WordPress Expert at <a href="https://buraqwebservice.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline decoration-blue-500/30 underline-offset-4 transition-colors">Buraq Web Services</a></strong> with 3+ years of experience. I build custom web solutions and smart n8n automations that help businesses save time and generate more leads.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button 
            onClick={() => setIsContactModalOpen(true)}
            className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2 font-fira"
          >
            initProject() <ChevronRight size={18} />
          </button>
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors border border-slate-700 font-fira"
          >
            viewWork()
          </button>
          <button 
            onClick={() => setIsResumeModalOpen(true)}
            className="px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-blue-400 hover:text-blue-300 rounded-lg font-medium transition-colors border border-slate-700 font-fira flex items-center justify-center gap-2"
          >
            getCV() <Download size={18} />
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-center md:justify-end">
        <img 
          src={profileMain} 
          onError={(e) => { e.target.onerror = null; e.target.src = fallbackProfile; }}
          alt="MD SIAM" 
          className="w-full max-w-md rounded-2xl border-4 border-slate-800 shadow-2xl shadow-blue-500/20" 
        />
      </div>
    </section>
  );
};

export default Hero;
