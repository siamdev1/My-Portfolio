import React from 'react';
import { Layout, Zap, TrendingUp, CheckCircle2 } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">How I Can Help Your Business</h2>
          <p className="text-slate-400">I provide end-to-end solutions, focusing on functionality, speed, and business growth.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-6">
              <Layout size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">WordPress & Elementor</h3>
            <p className="text-slate-400 mb-4 text-sm leading-relaxed">
              Custom, fast-loading, and responsive WordPress websites tailored to your brand. From corporate sites to e-commerce, built for conversion.
            </p>
            <ul className="text-sm text-slate-300 space-y-2">
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500"/> Custom Theme Building</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500"/> Speed Optimization</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500"/> Responsive Design</li>
            </ul>
          </div>

          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-6">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Business Automation</h3>
            <p className="text-slate-400 mb-4 text-sm leading-relaxed">
              Stop doing manual data entry. I build custom n8n and Python scripts to connect your apps, manage leads, and save you hours every week.
            </p>
            <ul className="text-sm text-slate-300 space-y-2">
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500"/> n8n Workflow Setup</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500"/> CRM Integrations</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500"/> Python Data Scraping</li>
            </ul>
          </div>

          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-6">
              <TrendingUp size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Digital Marketing & SEO</h3>
            <p className="text-slate-400 mb-4 text-sm leading-relaxed">
              A great website is useless if no one finds it. I implement foundational SEO and marketing strategies to ensure your site drives traffic.
            </p>
            <ul className="text-sm text-slate-300 space-y-2">
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500"/> On-Page SEO Setup</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500"/> High-Converting Landing Pages</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-500"/> Analytics Integration</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
