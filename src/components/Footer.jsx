import React from 'react';
import { Facebook, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-12 border-t border-slate-800 text-center relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6">
        <div className="flex items-center gap-6">
          <a href="https://github.com/siamdev1" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.facebook.com/mdsiam2007" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors">
            <Facebook size={24} />
          </a>
          <a href="mailto:siam2007net@gmail.com" className="text-slate-400 hover:text-red-500 transition-colors" title="siam2007net@gmail.com">
            <Mail size={24} />
          </a>
        </div>
        <p className="text-slate-500 text-sm font-fira">
          // © {new Date().getFullYear()} MD SIAM. WordPress & Automation Specialist.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
