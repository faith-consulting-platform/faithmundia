import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-card/80 backdrop-blur-lg border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-accent to-gold rounded-full"></div>
            <div>
              <div className="text-lg sm:text-2xl font-bold tracking-tight text-primary">Faith Mundia</div>
              <div className="hidden sm:block text-xs text-secondary font-medium tracking-wide">EdTech Strategy Consultant</div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-sm font-medium text-secondary hover:text-primary transition-colors duration-200">Services</a>
            <a href="#packages" className="text-sm font-medium text-secondary hover:text-primary transition-colors duration-200">Packages</a>
            <a href="#about" className="text-sm font-medium text-secondary hover:text-primary transition-colors duration-200">About</a>
            <a href="#contact" className="text-sm font-medium text-secondary hover:text-primary transition-colors duration-200">Contact</a>
          </div>
          
          {/* Desktop CTA Button */}
          <a href="#contact" className="hidden sm:block bg-gradient-to-r from-accent to-gold text-white px-4 sm:px-8 py-2 sm:py-3 rounded-full hover:shadow-lg transition-all duration-300 font-medium text-xs sm:text-sm tracking-wide">
            Book Consultation
          </a>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-secondary hover:text-primary transition-colors p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
              <a href="#services" className="block px-3 py-2 text-base font-medium text-secondary hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#packages" className="block px-3 py-2 text-base font-medium text-secondary hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Packages</a>
              <a href="#about" className="block px-3 py-2 text-base font-medium text-secondary hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#contact" className="block px-3 py-2 text-base font-medium text-secondary hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <a href="#contact" className="block mt-4 bg-gradient-to-r from-accent to-gold text-white px-6 py-3 rounded-full font-medium text-sm tracking-wide text-center" onClick={() => setIsMenuOpen(false)}>
                Book Consultation
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
