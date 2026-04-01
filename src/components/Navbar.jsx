import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ isMenuOpen, toggleMenu, scrollToSection, setIsContactModalOpen, setIsMenuOpen }) => {
  return (
    <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 font-bold text-xl tracking-tighter font-fira">
            <span className="text-blue-500">&lt;</span>MD_SIAM <span className="text-blue-500">/&gt;</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {['About', 'Services', 'Skills', 'Portfolio', 'Experience'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors font-fira"
            >
              Hire_Me()
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-slate-300 hover:text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 border-b border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['About', 'Services', 'Skills', 'Portfolio', 'Experience'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700 rounded-md"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => { setIsContactModalOpen(true); setIsMenuOpen(false); }}
              className="block w-full text-left px-3 py-2 text-base font-medium text-blue-400 hover:text-blue-300 hover:bg-slate-700 rounded-md font-fira"
            >
              Contact()
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
