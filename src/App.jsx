import React, { useState } from 'react';

// Icons
import { ExternalLink } from 'lucide-react';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import PortfolioGrid from './components/PortfolioGrid';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

// Assets - Project images
import projectMiracule from './assets/images/project-miracule.jpg';
import projectApparel from './assets/images/project-apparel.png';
import projectDragonfly from './assets/images/project-dragonfly.png';
import projectFunnel from './assets/images/project-funnel.jpg';
import projectKosa from './assets/images/project-kosa.png';
import projectRealestate from './assets/images/project-realestate.jpg';
import projectNordic from './assets/images/project-nordic.jpg';
import projectWholesale from './assets/images/project-wholesale.jpg';
import projectEmerald from './assets/images/project-emerald.png';
import projectOptical from './assets/images/project-optical.jpg';
import projectCarrental from './assets/images/project-carrental.jpg';
import projectSaas from './assets/images/project-saas.jpg';

// Assets - Profile images
import profileMain from './assets/images/profile-main.png';
import profileSuit from './assets/images/profile-suit.png';
import fallbackProfile from './assets/images/fallback-profile.jpg';
import fallbackSuit from './assets/images/fallback-suit.jpg';

const categories = ["All", "Corporate", "E-Commerce", "Landing Page", "Local Business"];

const portfolioProjects = [
  {
    title: "Miracule Water",
    category: "Corporate",
    tags: ["WordPress", "Elementor"],
    image: projectMiracule,
    description: "Modern, high-converting website design focusing on brand identity and clear user navigation."
  },
  {
    title: "Apparel Shopify Store",
    category: "E-Commerce",
    tags: ["Shopify", "Storefront"],
    image: projectApparel,
    description: "Fully optimized e-commerce clothing store designed to maximize sales and reduce cart abandonment."
  },
  {
    title: "DragonFly Consulting",
    category: "Corporate",
    tags: ["Web Design", "SEO"],
    image: projectDragonfly,
    description: "Professional consulting platform tailored for lead generation and showcasing corporate services."
  },
  {
    title: "High-Converting Funnel",
    category: "Landing Page",
    tags: ["Funnel", "Optimization"],
    image: projectFunnel,
    description: "Strategic funnel page designed for maximum conversion rate, capturing leads and driving sales."
  },
  {
    title: "Kosa Salon & Barber",
    category: "Local Business",
    tags: ["Booking", "Elementor"],
    image: projectKosa,
    description: "Stylish salon and barbershop website featuring online booking integration and service showcases."
  },
  {
    title: "Premium Real Estate",
    category: "Corporate",
    tags: ["WordPress", "Listings"],
    image: projectRealestate,
    description: "Dynamic property listing website featuring advanced search, clean UI, and responsive layouts."
  },
  {
    title: "Nordic Co-operation",
    category: "Corporate",
    tags: ["Corporate", "UI/UX"],
    image: projectNordic,
    description: "Clean, professional corporate website highlighting international cooperation and services."
  },
  {
    title: "Wholesale B2B Store",
    category: "E-Commerce",
    tags: ["WooCommerce", "B2B"],
    image: projectWholesale,
    description: "Robust wholesale e-commerce platform with bulk pricing and streamlined checkout."
  },
  {
    title: "Emerald Capital Partners",
    category: "Corporate",
    tags: ["Finance", "Elementor"],
    image: projectEmerald,
    description: "High-end financial consulting website built to establish trust and capture high-value leads."
  },
  {
    title: "Optical Glasses Shop",
    category: "E-Commerce",
    tags: ["Shopify", "Products"],
    image: projectOptical,
    description: "Visually appealing eyewear store featuring product galleries and easy filtering."
  },
  {
    title: "Car Rental Service",
    category: "Local Business",
    tags: ["Booking System", "Local SEO"],
    image: projectCarrental,
    description: "Local car rental platform with integrated booking, fleet management, and pricing options."
  },
  {
    title: "SaaS Front-End Design",
    category: "Landing Page",
    tags: ["SaaS", "Conversion"],
    image: projectSaas,
    description: "Modern software-as-a-service landing page highlighting features, testimonials, and pricing."
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [formStatus, setFormStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const filteredProjects = portfolioProjects.filter(project => 
    activeTab === "All" ? true : project.category === activeTab
  );

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  const handleTabChange = (category) => {
    setActiveTab(category);
    setVisibleCount(6); 
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const myForm = e.target;
    const formData = new FormData(myForm);

    // Netlify requires application/x-www-form-urlencoded for AJAX
    const encodedData = new URLSearchParams(formData).toString();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodedData,
    })
      .then(() => {
        setFormStatus('success');
        setIsSubmitting(false);
        myForm.reset();
      })
      .catch((error) => {
        setFormStatus('error');
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen bg-slate-900 print:bg-white text-slate-100 font-sans selection:bg-blue-500/30">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&family=Fira+Code:wght@400;500;600;700&display=swap');
        .font-fira { font-family: 'Fira Code', monospace; }
        .font-signature { font-family: 'Caveat', cursive; }
        
        @media print {
            @page { size: A4 portrait; margin: 0; }
            body { margin: 0; padding: 0; background: white !important; }
            .no-print { display: none !important; }
            .print-only { display: block !important; }
            * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        }
        @media screen {
            .print-only { display: none !important; }
        }
      `}</style>
      
      <div className="no-print">
        <Navbar 
          isMenuOpen={isMenuOpen} 
          toggleMenu={toggleMenu} 
          scrollToSection={scrollToSection} 
          setIsContactModalOpen={setIsContactModalOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        
        <Hero 
          profileMain={profileMain} 
          fallbackProfile={fallbackProfile} 
          setIsContactModalOpen={setIsContactModalOpen} 
          scrollToSection={scrollToSection} 
          setIsResumeModalOpen={setIsResumeModalOpen}
        />

        <About 
          profileSuit={profileSuit} 
          fallbackSuit={fallbackSuit} 
        />

        <Services />

        <Skills />

        <PortfolioGrid 
          categories={categories} 
          activeTab={activeTab} 
          handleTabChange={handleTabChange} 
          displayedProjects={displayedProjects}
          visibleCount={visibleCount}
          totalProjects={filteredProjects.length}
          setVisibleCount={setVisibleCount}
        />

        <Experience />

        <Contact 
          formStatus={formStatus} 
          setFormStatus={setFormStatus} 
          handleFormSubmit={handleFormSubmit} 
          isSubmitting={isSubmitting} 
          isContactModalOpen={isContactModalOpen} 
          setIsContactModalOpen={setIsContactModalOpen} 
        />

        <Footer />
      </div>

      <Resume 
        isResumeModalOpen={isResumeModalOpen} 
        setIsResumeModalOpen={setIsResumeModalOpen} 
        profileMain={profileMain} 
        fallbackProfile={fallbackProfile} 
      />
    </div>
  );
}