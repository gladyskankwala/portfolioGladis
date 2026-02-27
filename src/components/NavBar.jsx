import { useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const Header = () => {
  const navRef = useRef(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#aboutme', label: 'About me' },
    { href: '#services', label: 'Services' },
    { href: '#mywork', label: 'My Work' },
    { href: 'contactme', label: "Contact me"}
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header ref={navRef} className="bg-neutral-900/50 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto py-0 px-4 md:px-8">
        <div className="flex items-center justify-between text-white h-10 sm:h-12 md:h-16 lg:h-20">
          {/* Logo */}
          <div className="font-bold  text-xl text-primary text-white">Gladis</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>


          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden text-white border-t border-border/50 mt-2 py-1 space-y-4 animate-fade-in overflow-hidden transition-all duration-300 ease-in-out 
          ${isMobileMenuOpen ? " opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 text-black hover:text-primary transition-all duration-500 ease-in-out"
              >
                {item.label}
              </button>
            ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
