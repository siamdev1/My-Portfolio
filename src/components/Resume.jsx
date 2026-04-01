import React from 'react';
import { MapPin, Mail, ExternalLink, Download, X } from 'lucide-react';

const ResumeContent = ({ profileMain, fallbackProfile }) => (
  <div className="w-full h-full p-8 sm:p-12 bg-white text-slate-900 box-border text-left flex flex-col font-sans min-h-[297mm]">
    {/* Header */}
    <div className="flex justify-between items-start border-b-[3px] border-blue-600 pb-6 mb-6">
      <div className="flex-1 pr-6">
        <h1 className="text-4xl font-bold text-blue-800 tracking-tight uppercase mb-1">MD SIAM</h1>
        <h2 className="text-lg font-semibold text-slate-600 uppercase tracking-widest mb-4">Senior WordPress Expert</h2>
        <div className="text-sm text-slate-600 space-y-1.5 font-medium">
           <p className="flex items-center gap-2"><MapPin size={16} className="text-blue-500"/> Mymensingh, Bangladesh (Worldwide Remote)</p>
           <p className="flex items-center gap-2"><Mail size={16} className="text-blue-500"/> siam2007net@gmail.com</p>
           <p className="flex items-center gap-2"><ExternalLink size={16} className="text-blue-500"/> buraqwebservice.com</p>
        </div>
      </div>
      <div className="w-32 h-32 rounded-xl overflow-hidden border-4 border-white shadow-lg shrink-0 bg-slate-100 relative">
        <img 
          src={profileMain} 
          onError={(e) => { e.target.onerror = null; e.target.src = fallbackProfile; }}
          alt="MD SIAM" 
          className="w-full h-full object-cover object-top absolute inset-0" 
        />
      </div>
    </div>

    {/* Summary */}
    <section className="mb-6">
      <h3 className="text-lg font-bold text-blue-800 uppercase mb-2 flex items-center gap-2">
        <span className="w-6 h-1 bg-blue-600 rounded-full"></span> Profile Summary
      </h3>
      <p className="text-sm text-slate-700 leading-relaxed text-justify">
        Experienced and results-driven Senior WordPress Expert and Automation Specialist with over 3 years of agency experience. Proven track record of building high-converting Elementor websites, optimizing web infrastructure for speed and security, and implementing n8n automations to streamline business operations and lead generation. Combining a strong technical background with a digital marketing mindset to deliver measurable ROI.
      </p>
    </section>

    {/* Experience */}
    <section className="mb-6">
      <h3 className="text-lg font-bold text-blue-800 uppercase mb-3 flex items-center gap-2">
        <span className="w-6 h-1 bg-blue-600 rounded-full"></span> Professional Experience
      </h3>
      
      <div className="mb-4">
        <div className="flex justify-between items-end mb-1">
          <h4 className="font-bold text-slate-800 text-base">Senior WordPress Expert <span className="text-blue-600 font-normal">| Buraq Web Services</span></h4>
          <span className="text-xs font-bold text-white bg-blue-600 px-2 py-1 rounded">Jan 2022 — Present</span>
        </div>
        <ul className="list-disc list-outside ml-5 text-sm text-slate-700 space-y-1.5 marker:text-blue-400">
          <li>Lead complex WordPress development projects, architecting scalable, secure, and high-performance websites for global clients.</li>
          <li>Spearhead advanced WooCommerce builds, focusing on UI/UX, conversion rate optimization, and extreme speed optimization to reduce cart abandonment.</li>
          <li>Implement n8n business automations, APIs, and custom scripts to sync CRMs, automate lead capture, and eliminate manual data entry.</li>
        </ul>
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-end mb-1">
          <h4 className="font-bold text-slate-800 text-base">Freelance Web Specialist <span className="text-blue-600 font-normal">| Self-Employed</span></h4>
          <span className="text-xs font-bold text-white bg-slate-400 px-2 py-1 rounded">2022 — Present</span>
        </div>
        <ul className="list-disc list-outside ml-5 text-sm text-slate-700 space-y-1.5 marker:text-blue-400">
          <li>Lead complex WordPress development projects, architecting scalable, secure, and high-performance websites for global clients.</li>
          <li>Spearhead advanced WooCommerce builds, focusing on UI/UX, conversion rate optimization, and extreme speed optimization to reduce cart abandonment.</li>
          <li>Implement n8n business automations, APIs, and custom scripts to sync CRMs, automate lead capture, and eliminate manual data entry.</li>
        </ul>
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-end mb-1">
          <h4 className="font-bold text-slate-800 text-base">Freelance Web Specialist <span className="text-blue-600 font-normal">| Self-Employed</span></h4>
          <span className="text-xs font-bold text-white bg-slate-400 px-2 py-1 rounded">2021 — Present</span>
        </div>
        <ul className="list-disc list-outside ml-5 text-sm text-slate-700 space-y-1.5 marker:text-blue-400">
          <li>Design pixel-perfect, mobile-responsive landing pages and full websites using Elementor Pro.</li>
          <li>Implement Technical SEO and create strategic funnel pages optimized for maximum conversion rates for B2B and local service businesses.</li>
        </ul>
      </div>

       <div className="mb-2">
        <div className="flex justify-between items-end mb-1">
          <h4 className="font-bold text-slate-800 text-base">Data Entry Technical Expert <span className="text-blue-600 font-normal">| Bangladesh Election Commission</span></h4>
          <span className="text-xs font-bold text-white bg-slate-400 px-2 py-1 rounded">3 Months</span>
        </div>
        <ul className="list-disc list-outside ml-5 text-sm text-slate-700 space-y-1.5 marker:text-blue-400">
          <li>Managed highly sensitive, large-scale database operations securely and efficiently.</li>
        </ul>
      </div>
    </section>

    {/* Two Column Grid for Skills & Education */}
    <div className="grid grid-cols-2 gap-8 mb-6">
       {/* Technical Skills */}
      <section>
        <h3 className="text-lg font-bold text-blue-800 uppercase mb-3 flex items-center gap-2">
          <span className="w-6 h-1 bg-blue-600 rounded-full"></span> Technical Skills
        </h3>
        <div className="flex flex-col gap-2 text-sm text-slate-700">
          <div><strong className="text-slate-800 block mb-0.5">Web Development:</strong> WordPress, Elementor Pro, WooCommerce, HTML5/CSS3.</div>
          <div><strong className="text-slate-800 block mb-0.5">Automation:</strong> n8n Workflows, Python (Basic), APIs.</div>
          <div><strong className="text-slate-800 block mb-0.5">Digital Marketing:</strong> Technical SEO, CRO, Google Analytics.</div>
        </div>
      </section>

      {/* Education */}
      <section>
        <h3 className="text-lg font-bold text-blue-800 uppercase mb-3 flex items-center gap-2">
          <span className="w-6 h-1 bg-blue-600 rounded-full"></span> Education
        </h3>
        <div className="mb-2">
          <h4 className="font-bold text-slate-800 text-sm">Diploma in Computer Science & Technology</h4>
          <div className="text-sm text-blue-600 font-medium mb-1">Mymensingh Polytechnic Institute</div>
          <div className="text-xs text-slate-600 italic leading-relaxed">Currently in 7th Semester. Building a strong theoretical and practical foundation in software development and computer architecture.</div>
        </div>
      </section>
    </div>

    {/* Signature Section */}
    <section className="mt-auto flex justify-between items-end pt-8 pb-4 border-t-2 border-slate-100">
       <div>
          <div className="text-xs font-medium text-slate-400 mb-1 uppercase tracking-wider">Generated On</div>
          <div className="text-slate-700 font-bold">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
       </div>
       <div className="text-right flex flex-col items-center">
          <div className="font-signature text-4xl text-blue-800 -mb-2 transform -rotate-2">MD SIAM</div>
          <div className="w-48 border-t border-slate-300 mt-2"></div>
          <div className="text-xs font-medium text-slate-400 mt-1 uppercase tracking-wider">Authorized Signature</div>
       </div>
    </section>
  </div>
);

const Resume = ({ isResumeModalOpen, setIsResumeModalOpen, profileMain, fallbackProfile }) => {
  return (
    <>
      <section id="resume" className="py-20 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-600/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center gap-12">
            
            <div className="flex-1">
              <div className="flex items-center gap-2 text-blue-400 font-semibold tracking-wider text-sm uppercase mb-4 font-fira">
                <ExternalLink size={18} /> ATS-Friendly Format
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Generate My <span className="text-blue-400">Professional CV</span>
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                Looking for a formal breakdown of my experience? Generate and download my customized ATS-optimized resume. It dynamically includes my full work history at Buraq Web Services, technical skills, and educational background in a clean, colorful layout perfectly suited for modern HR.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setIsResumeModalOpen(true)}
                  className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition-colors shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 font-fira"
                >
                  <ExternalLink size={20} /> previewAndDownloadCV()
                </button>
              </div>
            </div>

            {/* Visual CV Mockup */}
            <div className="md:w-1/3 w-full flex justify-center perspective-[1000px]">
              <button 
                onClick={() => setIsResumeModalOpen(true)}
                className="relative group cursor-pointer w-64 h-80 bg-slate-100 rounded-lg shadow-2xl p-6 transform transition-all duration-500 group-hover:scale-105 rotate-3 hover:rotate-0 border border-slate-300 text-left"
              >
                {/* Simulated Text Lines */}
                <div className="w-full h-3 bg-slate-300 rounded mb-6"></div>
                <div className="w-3/4 h-2 bg-slate-300 rounded mb-3"></div>
                <div className="w-1/2 h-2 bg-blue-500 rounded mb-8"></div>

                <div className="w-full h-1.5 bg-slate-200 rounded mb-2"></div>
                <div className="w-full h-1.5 bg-slate-200 rounded mb-2"></div>
                <div className="w-5/6 h-1.5 bg-slate-200 rounded mb-8"></div>

                <div className="w-3/4 h-2 bg-slate-300 rounded mb-3"></div>
                <div className="w-full h-1.5 bg-slate-200 rounded mb-2"></div>
                <div className="w-4/5 h-1.5 bg-slate-200 rounded mb-2"></div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-blue-900/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center flex-col gap-3">
                    <ExternalLink size={40} className="text-white" />
                    <span className="text-white font-bold font-fira tracking-wider">GENERATE PDF</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Preview Modal */}
      {isResumeModalOpen && (
        <div className="fixed inset-0 z-[200] bg-slate-900/95 backdrop-blur-md overflow-y-auto no-print">
          <div className="min-h-full flex justify-center p-4 md:py-10">
            <div className="w-full max-w-[210mm] flex flex-col items-center animate-in fade-in zoom-in duration-300">
              
              {/* Controls Header */}
              <div className="flex justify-between items-center w-full bg-slate-800 p-4 rounded-2xl border border-slate-700 mb-6 sticky top-4 z-10 shadow-2xl">
                <div className="flex items-center gap-3">
                  <button onClick={() => window.print()} className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex items-center gap-2 font-fira transition-colors shadow-lg shadow-blue-600/20">
                    <Download size={18}/> saveAsPDF()
                  </button>
                  <button onClick={() => setIsResumeModalOpen(false)} className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white transition-colors">
                    <X size={20}/>
                  </button>
                </div>
              </div>

              {/* Visual Preview Container */}
              <div className="w-full bg-white shadow-2xl rounded-sm overflow-hidden flex flex-col mx-auto border border-slate-300">
                 <ResumeContent profileMain={profileMain} fallbackProfile={fallbackProfile} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hidden Print Container */}
      {isResumeModalOpen && (
        <div className="print-only w-[210mm] min-h-[297mm] absolute top-0 left-0 bg-white">
           <ResumeContent profileMain={profileMain} fallbackProfile={fallbackProfile} />
        </div>
      )}
    </>
  );
};

export default Resume;
export { ResumeContent };
