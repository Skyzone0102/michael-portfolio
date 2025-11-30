import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Different offsets for mobile vs desktop
      const isMobile = window.innerWidth < 768;
      const navbarHeight = isMobile ? 80 : 40; // Mobile: 80px, Desktop: 100px
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'research', 'projects'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'research', label: 'Research' },
    { id: 'projects', label: 'Projects' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-6 md:px-8 py-4 bg-white/5 backdrop-blur-3xl rounded-3xl border border-white/30 shadow-2xl">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-lg md:text-xl font-semibold text-[#E2E2E6] hover:text-[#A8C7FA] transition-colors duration-300"
          >
            Chih-Hao (Michael) Chou
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`transition-all duration-300 font-medium relative ${
                  activeSection === link.id ? 'text-[#E2E2E6]' : 'text-[#C4C6D0] hover:text-[#E2E2E6]'
                }`}
              >
                {link.label}
                <div 
                  className="absolute -bottom-1 left-0 h-0.5 rounded-full transition-all duration-500 ease-out bg-[#A8C7FA]"
                  style={{ 
                    width: activeSection === link.id ? '100%' : '0%'
                  }}
                />
              </button>
            ))}

            <Button 
              className="inline-flex items-center px-6 py-2.5 rounded-full text-sm font-medium transition-colors bg-[#A8C7FA] hover:bg-[#C5DAFC] text-[#062E6F] border-0"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#E2E2E6]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute left-4 right-4 top-full mt-2 rounded-3xl overflow-hidden bg-white/5 backdrop-blur-3xl border border-white/30 shadow-2xl">
            <div className="flex flex-col p-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left px-4 py-2 rounded-3xl transition-all duration-300 font-medium ${
                    activeSection === link.id 
                      ? 'text-[#E2E2E6] bg-[#2A3038]' 
                      : 'text-[#C4C6D0] hover:text-[#E2E2E6] hover:bg-[#2A3038]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              
              <Button 
                className="inline-flex items-center justify-center w-full py-2.5 rounded-full text-sm font-medium bg-[#A8C7FA] hover:bg-[#C5DAFC] text-[#062E6F] border-0"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}