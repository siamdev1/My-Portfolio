import React from 'react';
import { createPortal } from 'react-dom';
import { MapPin, Mail, ExternalLink, Download, X, Facebook, Github, Linkedin, Phone, Globe } from 'lucide-react';
import qrCode from '../assets/images/qrcode.png';

const ResumeContent = ({ profileMain, fallbackProfile }) => (
  <div className="w-full h-[297mm] max-h-[297mm] bg-white text-slate-700 box-border text-left flex font-sans shadow-2xl overflow-hidden select-none">
    {/* Left Column (Sidebar) */}
    <div className="w-[32%] bg-slate-50 p-5 border-r border-slate-200 flex flex-col justify-between text-slate-700">
      <div className="space-y-4">
        {/* Profile Image */}
        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md mx-auto bg-slate-100 relative">
          <img
            src={profileMain}
            onError={(e) => { e.target.onerror = null; e.target.src = fallbackProfile; }}
            alt="MD SIAM"
            className="w-full h-full object-cover object-top absolute inset-0"
          />
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-[12px] font-bold text-blue-900 uppercase tracking-wider mb-1.5 border-b border-slate-200 pb-0.5">Contact</h3>
          <div className="text-[11px] text-slate-600 space-y-1 font-medium leading-normal">
            <p className="flex items-center gap-1.5 truncate"><MapPin size={12} className="text-blue-600 shrink-0" /> Mymensingh, BD</p>
            <p className="flex items-center gap-1.5 truncate"><Mail size={12} className="text-blue-600 shrink-0" /> siam2007net@gmail.com</p>
            <p className="flex items-center gap-1.5 truncate"><Phone size={12} className="text-blue-600 shrink-0" /> +880 1840-881000</p>
            <p className="flex items-center gap-1.5 truncate"><Github size={12} className="text-blue-600 shrink-0" /> github.com/siamdev1</p>
            <p className="flex items-center gap-1.5 truncate"><Linkedin size={12} className="text-blue-600 shrink-0" /> linkedin.com/in/mdsiam2007</p>
            <p className="flex items-center gap-1.5 truncate"><Globe size={12} className="text-blue-600 shrink-0" /> mdsiam2007.netlify.app</p>
          </div>
        </div>

        {/* Technical Skills */}
        <div>
          <h3 className="text-[12px] font-bold text-blue-900 uppercase tracking-wider mb-1.5 border-b border-slate-200 pb-0.5">Technical Skills</h3>
          <div className="space-y-2.5 text-[10.5px] leading-tight">
            <div>
              <span className="font-bold text-slate-700 block text-[11.5px]">CMS:</span>
              <span className="text-slate-600">WordPress, WooCommerce, Elementor, ACF, CPT</span>
            </div>
            <div>
              <span className="font-bold text-slate-700 block text-[11.5px]">Frontend:</span>
              <span className="text-slate-600">HTML5, CSS3, JavaScript, Bootstrap</span>
            </div>
            <div>
              <span className="font-bold text-slate-700 block text-[11.5px]">Optimization:</span>
              <span className="text-slate-600">LiteSpeed, WP Rocket, Cloudflare, Image Optimization</span>
            </div>
            <div>
              <span className="font-bold text-slate-700 block text-[11.5px]">SEO:</span>
              <span className="text-slate-600">RankMath, Yoast SEO, Technical SEO</span>
            </div>
            <div>
              <span className="font-bold text-slate-700 block text-[11.5px]">Tools:</span>
              <span className="text-slate-600">Git, cPanel, Cloudflare, Figma, Photoshop</span>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-[12px] font-bold text-blue-900 uppercase tracking-wider mb-1.5 border-b border-slate-200 pb-0.5">Education</h3>
          <div className="text-[11px] text-slate-600 leading-tight">
            <span className="font-bold text-slate-700 block text-[12px]">Diploma in CST</span>
            <span className="text-blue-600 block">Mymensingh Polytechnic</span>
            <span className="text-slate-500 italic block mt-0.5">7th Semester</span>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-[12px] font-bold text-blue-900 uppercase tracking-wider mb-1.5 border-b border-slate-200 pb-0.5">Certifications</h3>
          <ul className="list-disc list-inside text-[11px] text-slate-600 space-y-0.5 leading-tight">
            <li>Elementor Expert</li>
            <li>WordPress Development</li>
            <li>Google Analytics & SEO</li>
            <li>UY LAB Certification</li>
          </ul>
        </div>

        {/* Core Competencies */}
        <div>
          <h3 className="text-[12px] font-bold text-blue-900 uppercase tracking-wider mb-1.5 border-b border-slate-200 pb-0.5">Core Competencies</h3>
          <div className="text-[11px] text-slate-600 grid grid-cols-1 gap-y-1 leading-tight">
            <div>• Problem Solving</div>
            <div>• Time Management</div>
            <div>• Team Collaboration</div>
            <div>• Client Handling</div>
            <div>• Critical Thinking</div>
            <div>• Leadership</div>
          </div>
        </div>
      </div>

      {/* QR Code */}
      <div className="flex flex-col items-center gap-1.5 mt-auto pt-3 border-t border-slate-200">
        <div className="w-16 h-16 bg-white p-0.5 rounded border border-slate-200 shadow-sm flex items-center justify-center overflow-hidden">
          <img src={qrCode} alt="Portfolio QR Code" className="w-full h-full object-contain" />
        </div>
        <span className="text-[8px] text-slate-400 uppercase tracking-widest font-bold leading-none">Scan Portfolio</span>
      </div>
    </div>

    {/* Right Column (Content) */}
    <div className="w-[68%] p-8 flex flex-col justify-between text-slate-700">
      <div className="space-y-4">
        {/* Name and Title */}
        <div className="border-b-[3px] border-blue-900 pb-2.5">
          <h1 className="text-3xl font-bold text-blue-900 tracking-tight uppercase mb-0.5">MD SIAM</h1>
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest leading-none">WordPress Developer</h2>
          <span className="text-[11px] text-blue-600 font-bold uppercase tracking-wider mt-1.5 block">Available for Remote Opportunities</span>
        </div>

        {/* Profile Summary */}
        <div>
          <h3 className="text-[12px] font-bold text-blue-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <span className="w-3.5 h-0.5 bg-blue-900 rounded-full"></span> Profile Summary
          </h3>
          <p className="text-[12px] text-slate-600 leading-relaxed text-justify">
            WordPress Developer with 3+ years of experience specializing in Elementor Pro, WooCommerce, responsive website development, speed optimization, and technical SEO. Experienced in converting Figma/XD designs into pixel-perfect WordPress websites and delivering client-focused solutions. Strong problem-solving skills with knowledge of HTML, CSS, JavaScript, and website performance optimization.
          </p>
        </div>

        {/* Professional Experience */}
        <div>
          <h3 className="text-[12px] font-bold text-blue-900 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            <span className="w-3.5 h-0.5 bg-blue-900 rounded-full"></span> Work Experience
          </h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between items-end mb-0.5">
                <h4 className="font-bold text-slate-800 text-[12px]">WordPress Developer <span className="text-blue-600 font-normal">| Buraq Web Services</span></h4>
                <span className="text-[10px] font-bold text-white bg-blue-900 px-1.5 py-0.5 rounded shrink-0">Jan 2022 — Present</span>
              </div>
              <ul className="list-disc list-outside ml-4 text-[11.5px] text-slate-600 space-y-0.5 marker:text-blue-400">
                <li>Developed **50+ responsive WordPress websites** using Elementor Pro for local and international clients.</li>
                <li>Converted **Figma/XD designs** into pixel-perfect, responsive WordPress websites.</li>
                <li>Customized WooCommerce stores with custom checkouts, payment gateways, and variable products.</li>
                <li>Optimized website speed achieving **90–98 PageSpeed Insights scores** using WP Rocket and Cloudflare.</li>
              </ul>
            </div>
            <div>
              <div className="flex justify-between items-end mb-0.5">
                <h4 className="font-bold text-slate-800 text-[12px]">Freelance Web Specialist <span className="text-blue-600 font-normal">| Self-Employed</span></h4>
                <span className="text-[10px] font-bold text-slate-500 bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded shrink-0">2021 — Present</span>
              </div>
              <ul className="list-disc list-outside ml-4 text-[11.5px] text-slate-600 space-y-0.5 marker:text-blue-400">
                <li>Configured Cloudflare, LiteSpeed Cache, WP Rocket, custom SMTP setups, and payment integration.</li>
                <li>Integrated Google Analytics, Search Console, Facebook Pixel, and reCAPTCHA systems.</li>
                <li>Resolved complex WordPress plugin and theme conflicts, malware cleanup, and security hardening.</li>
              </ul>
            </div>
            <div>
              <div className="flex justify-between items-end mb-0.5">
                <h4 className="font-bold text-slate-800 text-[12px]">Data Entry Technical Expert <span className="text-blue-600 font-normal">| Bangladesh Election Commission</span></h4>
                <span className="text-[10px] font-bold text-slate-500 bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded shrink-0">3 Months</span>
              </div>
              <ul className="list-disc list-outside ml-4 text-[11.5px] text-slate-600 marker:text-blue-400">
                <li>Managed highly sensitive, large-scale database operations securely and efficiently.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Highlighted Projects */}
        <div>
          <h3 className="text-[12px] font-bold text-blue-900 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            <span className="w-3.5 h-0.5 bg-blue-900 rounded-full"></span> Highlighted Projects
          </h3>
          <div className="grid grid-cols-3 gap-2.5 text-[10px] leading-tight">
            <div className="bg-slate-50 p-2.5 rounded border border-slate-200/50 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-800 text-[10.5px] mb-0.5">Wholesale B2B Store</h4>
                <p className="text-slate-500 mb-1 leading-normal">WooCommerce, B2B, Elementor</p>
                <p className="text-slate-600 text-[10px] leading-snug">Developed wholesale platform featuring bulk pricing rules, custom roles, and Stripe integration.</p>
              </div>
              <span className="text-[8.5px] font-semibold text-blue-800 bg-blue-50 mt-1.5 px-1 py-0.5 rounded inline-block text-center border border-blue-100/50">E-Commerce</span>
            </div>
            <div className="bg-slate-50 p-2.5 rounded border border-slate-200/50 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-800 text-[10.5px] mb-0.5">Premium Real Estate</h4>
                <p className="text-slate-500 mb-1 leading-normal">WordPress, Elementor, ACF/CPT</p>
                <p className="text-slate-600 text-[10px] leading-snug">Built listing website with custom advanced search filters, custom fields, and Google Maps API.</p>
              </div>
              <span className="text-[8.5px] font-semibold text-blue-800 bg-blue-50 mt-1.5 px-1 py-0.5 rounded inline-block text-center border border-blue-100/50">Corporate</span>
            </div>
            <div className="bg-slate-50 p-2.5 rounded border border-slate-200/50 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-800 text-[10.5px] mb-0.5">Kosa Salon & Barber</h4>
                <p className="text-slate-500 mb-1 leading-normal">WordPress, Booking, Local SEO</p>
                <p className="text-slate-600 text-[10px] leading-snug">Created local service website with online booking system, service grids, and local SEO.</p>
              </div>
              <span className="text-[8.5px] font-semibold text-blue-800 bg-blue-50 mt-1.5 px-1 py-0.5 rounded inline-block text-center border border-blue-100/50">Local Business</span>
            </div>
          </div>
        </div>

        {/* Services & Achievements */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-[12px] font-bold text-blue-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <span className="w-3.5 h-0.5 bg-blue-900 rounded-full"></span> Services Offered
            </h3>
            <div className="text-[12px] text-slate-600 grid grid-cols-1 gap-y-1 leading-tight">
              <div>✓ WordPress Dev</div>
              <div>✓ WooCommerce</div>
              <div>✓ Elementor Pro</div>
              <div>✓ Speed Optimization</div>
              <div>✓ Technical SEO</div>
              <div>✓ Site Security</div>
            </div>
          </div>
          <div>
            <h3 className="text-[12px] font-bold text-blue-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <span className="w-3.5 h-0.5 bg-blue-900 rounded-full"></span> Achievements
            </h3>
            <div className="text-[12px] text-slate-600 space-y-0.5 leading-tight">
              <div>🏆 <strong className="text-slate-700">50+</strong> Websites Delivered</div>
              <div>🏆 <strong className="text-slate-700">35+</strong> Elementor Projects Completed</div>
              <div>🏆 <strong className="text-slate-700">90+</strong> Google PageSpeed Insights Score</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-end pt-2.5 border-t border-slate-200 mt-2">
        <span className="text-[11px] text-slate-500 font-medium">References available upon request.</span>
        <div className="text-right leading-tight">
          <div className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Generated On</div>
          <div className="text-slate-700 text-[11px] font-bold">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
        </div>
      </div>
    </div>
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
                <div className="w-full h-3 bg-slate-300 rounded mb-6"></div>
                <div className="w-3/4 h-2 bg-slate-300 rounded mb-3"></div>
                <div className="w-1/2 h-2 bg-blue-500 rounded mb-8"></div>
                <div className="w-full h-1.5 bg-slate-200 rounded mb-2"></div>
                <div className="w-full h-1.5 bg-slate-200 rounded mb-2"></div>
                <div className="w-5/6 h-1.5 bg-slate-200 rounded mb-8"></div>
                <div className="w-3/4 h-2 bg-slate-300 rounded mb-3"></div>
                <div className="w-full h-1.5 bg-slate-200 rounded mb-2"></div>
                <div className="w-4/5 h-1.5 bg-slate-200 rounded mb-2"></div>
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
                    <Download size={18} /> saveAsPDF()
                  </button>
                  <button onClick={() => setIsResumeModalOpen(false)} className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white transition-colors">
                    <X size={20} />
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
      {isResumeModalOpen && createPortal(
        <div className="print-only w-[210mm] min-h-[297mm] absolute top-0 left-0 bg-white">
          <ResumeContent profileMain={profileMain} fallbackProfile={fallbackProfile} />
        </div>,
        document.body
      )}
    </>
  );
};

export default Resume;
export { ResumeContent };
