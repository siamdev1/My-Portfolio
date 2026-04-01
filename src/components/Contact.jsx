import React from 'react';
import { Mail, CheckCircle2, X } from 'lucide-react';

const Contact = ({ 
  formStatus, 
  setFormStatus, 
  handleFormSubmit, 
  isSubmitting, 
  isContactModalOpen, 
  setIsContactModalOpen 
}) => {
  return (
    <>
      <section id="contact" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800/80 backdrop-blur-md rounded-3xl p-8 md:p-12 text-center relative overflow-hidden border border-slate-700 shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Build Something Great.</h2>
              <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-lg">
                Have a project in mind or need help with automation? Drop me a message below and I will get back to you within 24 hours.
              </p>
              
              <div className="bg-slate-900/50 rounded-2xl p-6 md:p-8 max-w-lg mx-auto border border-slate-700 text-left">
                {formStatus === 'success' ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                    <p className="text-slate-400">Thank you for reaching out. I'll review your details and get back to you shortly.</p>
                    <button onClick={() => setFormStatus(null)} className="mt-6 text-blue-400 hover:text-white transition-colors underline">Send another message</button>
                  </div>
                ) : (
                  <form name="contact" method="POST" data-netlify="true" className="space-y-5" onSubmit={handleFormSubmit}>
                    <input type="hidden" name="form-name" value="contact" />
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1.5">Full Name</label>
                      <input type="text" name="name" required className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Alex Sterling" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1.5">Email Address</label>
                      <input type="email" name="email" required className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors" placeholder="hello@brand.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1.5">How can I help you?</label>
                      <textarea name="message" required rows="4" className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Describe your project, website needs, or automation goals..."></textarea>
                    </div>
                    {formStatus === 'error' && <p className="text-red-400 text-sm">Oops! There was a problem submitting your form. Please try again.</p>}
                    <button type="submit" disabled={isSubmitting} className="w-full py-3.5 mt-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2">
                      {isSubmitting ? 'Sending Message...' : 'Send Message'} <Mail size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal Popup */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-900/80 backdrop-blur-sm overflow-y-auto no-print">
          <div className="min-h-full flex items-center justify-center p-4">
            <div className="bg-slate-800 border border-blue-500/20 rounded-3xl p-6 md:p-10 w-full max-w-lg relative shadow-2xl shadow-blue-900/20 animate-in fade-in zoom-in duration-300">
              <button 
                onClick={() => setIsContactModalOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors bg-slate-700/50 hover:bg-slate-700 rounded-full p-2"
              >
                <X size={20} />
              </button>
              
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2 font-fira">
                  <span className="text-blue-500">function</span> <span className="text-blue-300">contactMe</span>() {'{'}
                </h2>
                <p className="text-slate-400 text-sm">
                  Fill out the form below to start a conversation.
                </p>
              </div>
                
              <div className="text-left">
                {formStatus === 'success' ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 font-fira">return "Success!"</h3>
                    <p className="text-blue-100">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                    <button onClick={() => {setFormStatus(null); setIsContactModalOpen(false);}} className="mt-6 px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors font-fira">close()</button>
                  </div>
                ) : (
                  <form name="contact" method="POST" data-netlify="true" className="space-y-4" onSubmit={handleFormSubmit}>
                    <input type="hidden" name="form-name" value="contact" />
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1 font-fira text-xs">name <span className="text-blue-500">=</span></label>
                      <input type="text" name="name" required className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors font-fira text-sm" placeholder='"Alex Sterling"' />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1 font-fira text-xs">email <span className="text-blue-500">=</span></label>
                      <input type="email" name="email" required className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors font-fira text-sm" placeholder='"hello@brand.com"' />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1 font-fira text-xs">message <span className="text-blue-500">=</span></label>
                      <textarea name="message" required rows="3" className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors font-fira text-sm" placeholder='"Describe your project..."'></textarea>
                    </div>
                    {formStatus === 'error' && <p className="text-red-400 text-sm">Oops! There was a problem submitting your form.</p>}
                    <button type="submit" disabled={isSubmitting} className="w-full py-3 mt-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2 font-fira">
                      {isSubmitting ? 'Sending...' : 'Send Message // execute()'}
                    </button>
                  </form>
                )}
              </div>
              <div className="text-center mt-4">
                 <span className="text-2xl font-bold text-white font-fira">{'}'}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
