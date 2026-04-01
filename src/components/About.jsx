import React from 'react';
import { MapPin, Building2, CheckCircle2, Award, Shield, ExternalLink } from 'lucide-react';

const About = ({ profileSuit, fallbackSuit }) => {
  return (
    <>
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Image */}
            <div className="relative flex justify-center md:justify-start">
              <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-3/4 h-3/4 -z-10"></div>
              <img 
                src={profileSuit} 
                onError={(e) => { e.target.onerror = null; e.target.src = fallbackSuit; }}
                alt="MD SIAM in a suit" 
                className="w-full max-w-md rounded-2xl border border-slate-700 shadow-2xl object-top" 
              />
            </div>

            {/* Right Column: Text & Stats */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Bridging the gap between <span className="text-blue-400">design</span> and <span className="text-blue-400">efficiency</span>.</h2>
              <p className="text-slate-400 mb-4 leading-relaxed">
                For the past 3+ years, I have been working as a <strong className="text-white">Senior WordPress Expert</strong> at <a href="https://buraqwebservice.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline transition-colors">Buraq Web Services</a>, delivering enterprise-grade web solutions. Alongside my professional career, I am a Computer Science & Technology student (7th semester) at Mymensingh Polytechnic Institute.
              </p>
              <p className="text-slate-400 mb-8 leading-relaxed">
                I don't just build websites that look good; I build systems that work for your business. Whether it's designing a pixel-perfect Elementor landing page or setting up complex n8n workflows to automate your lead generation, my goal is to deliver measurable ROI.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                  <h3 className="text-4xl font-bold text-blue-500 mb-2">100%</h3>
                  <p className="text-slate-400 text-sm">Commitment to Client Success</p>
                </div>
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                  <h3 className="text-4xl font-bold text-blue-500 mb-2">24/7</h3>
                  <p className="text-slate-400 text-sm">Automated Systems Running</p>
                </div>
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 col-span-2 hover:border-blue-500/50 transition-colors">
                  <h3 className="text-xl font-bold mb-2">Tech + Marketing Mindset</h3>
                  <p className="text-slate-400 text-sm">Merging code, design, and SEO to create powerful web presences.</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm font-medium text-slate-300">
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg border border-slate-700">
                  <MapPin size={16} className="text-blue-500"/> Bangladesh (Worldwide Remote)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Company Highlight Section */}
      <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800/50 border-y border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-slate-800/40 border border-blue-500/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm shadow-2xl shadow-blue-900/10 flex flex-col md:flex-row items-center gap-10">
            
            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center gap-2 text-blue-400 font-semibold tracking-wider text-sm uppercase mb-4">
                <Building2 size={18} /> Current Full-Time Role
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Senior WordPress Expert <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">@ Buraq Web Services</span>
              </h2>
              <p className="text-slate-400 mb-6 leading-relaxed text-lg">
                For over 3 years, I have been a core technical pillar at Buraq Web Services. As a Senior Expert, I lead complex web development projects, ensuring every client site meets enterprise standards for speed, security, and scalable architecture.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 size={18} className="text-emerald-500" /> Spearheading advanced WordPress & WooCommerce builds.
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 size={18} className="text-emerald-500" /> Implementing n8n business automations & API integrations.
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 size={18} className="text-emerald-500" /> Optimizing server infrastructure and Core Web Vitals.
                </li>
              </ul>
              <a 
                href="https://buraqwebservice.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-lg shadow-blue-600/20"
              >
                Visit Buraq Web Services <ExternalLink size={18} />
              </a>
            </div>
            
            {/* Stats / Visuals */}
            <div className="md:w-1/3 flex flex-col gap-4 w-full">
              <div className="bg-slate-800/80 border border-slate-700 hover:border-blue-500/50 transition-colors p-6 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400">
                  <Award size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">3+ Years</div>
                  <div className="text-sm text-slate-400">Senior Leadership</div>
                </div>
              </div>
              <div className="bg-slate-800/80 border border-slate-700 hover:border-blue-500/50 transition-colors p-6 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-400">
                  <Shield size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">Expert Level</div>
                  <div className="text-sm text-slate-400">Security & Optimization</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
