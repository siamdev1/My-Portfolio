import React from 'react';
import { ExternalLink } from 'lucide-react';

const PortfolioGrid = ({ 
  categories, 
  activeTab, 
  handleTabChange, 
  displayedProjects, 
  visibleCount, 
  totalProjects, 
  setVisibleCount 
}) => {
  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-slate-400">Real-world solutions combining design, performance, and automation.</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleTabChange(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === category 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25' 
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <div key={index} className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 flex flex-col hover:border-blue-500/50 transition-all duration-300 group/card shadow-lg hover:shadow-blue-500/10">
              <div className="h-48 bg-slate-700 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover/card:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/30 group-hover/card:bg-slate-900/10 transition-colors duration-500"></div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span key={i} className={`text-xs font-semibold px-2 py-1 rounded ${i === 0 ? 'bg-blue-500/10 text-blue-400' : 'bg-slate-700 text-slate-300'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 flex-1 leading-relaxed">
                  {project.description}
                </p>
                <div className="pt-4 border-t border-slate-700 flex justify-between items-center">
                  <span className="text-xs font-medium text-slate-500">{project.category}</span>
                  <button className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm font-medium transition-colors">
                    View Project <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < totalProjects && (
          <div className="text-center mt-8">
            <button 
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors border border-slate-700 inline-flex items-center gap-2"
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioGrid;
