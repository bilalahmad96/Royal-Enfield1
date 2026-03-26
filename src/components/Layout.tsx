import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, ChevronUp, Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Models', path: '/models' },
    { name: 'History', path: '/history' },
    { name: 'Showrooms', path: '/showrooms' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-bg-dark shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2" aria-label="Royal Enfield Home">
          <span className={`text-2xl font-playfair font-bold tracking-tighter ${isScrolled ? 'text-bg-dark dark:text-white' : 'text-white'}`}>
            ROYAL <span className="text-accent">ENFIELD</span>
          </span>
        </Link>

        {/* Desktop Menu - Navigation links for large screens */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-oswald uppercase text-sm tracking-widest transition-colors hover:text-accent ${
                location.pathname === link.path ? 'text-accent' : isScrolled ? 'text-bg-dark dark:text-white' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle Dark Mode"
            className={`p-2 rounded-full transition-colors ${isScrolled ? 'hover:bg-gray-100 dark:hover:bg-gray-800 text-bg-dark dark:text-white' : 'hover:bg-white/10 text-white'}`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Toggle - Visible on small screens */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle Dark Mode"
            className={`p-2 rounded-full ${isScrolled ? 'text-bg-dark dark:text-white' : 'text-white'}`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            className={`${isScrolled ? 'text-bg-dark dark:text-white' : 'text-white'}`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white dark:bg-bg-dark shadow-xl md:hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-oswald uppercase text-lg tracking-widest ${location.pathname === link.path ? 'text-accent' : 'text-bg-dark dark:text-white'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-secondary dark:bg-black text-bg-dark dark:text-white pt-16 pb-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <h3 className="text-xl font-playfair font-bold">ROYAL ENFIELD</h3>
          <p className="text-sm opacity-70 leading-relaxed">
            Step into the world of Royal Enfield, where heritage meets refined engineering and timeless design. Built Like a Gun, Goes Like a Bullet.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-accent transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Youtube size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-oswald uppercase tracking-widest text-sm mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm opacity-70">
            <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li><Link to="/models" className="hover:text-accent transition-colors">Motorcycles</Link></li>
            <li><Link to="/history" className="hover:text-accent transition-colors">Our Legacy</Link></li>
            <li><Link to="/showrooms" className="hover:text-accent transition-colors">Find a Store</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-oswald uppercase tracking-widest text-sm mb-6">Support</h4>
          <ul className="space-y-3 text-sm opacity-70">
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
            <li><a href="#" className="hover:text-accent transition-colors">Book a Test Ride</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Service Centers</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Owner's Manual</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-oswald uppercase tracking-widest text-sm mb-6">Contact</h4>
          <ul className="space-y-4 text-sm opacity-70">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-accent shrink-0" />
              <span>123 Heritage Way, Chennai, Tamil Nadu, India</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-accent shrink-0" />
              <span>+91 1800 2100 007</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-accent shrink-0" />
              <span>support@royalenfield.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-xs opacity-50">
        <p>© {new Date().getFullYear()} Royal Enfield. All Rights Reserved. Ride Pure.</p>
      </div>
    </footer>
  );
};

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div 
        className="custom-cursor hidden md:block" 
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 2 : 1})`,
          backgroundColor: isPointer ? 'rgba(245, 5, 5, 0.1)' : 'transparent'
        }} 
      />
      <div 
        className="custom-cursor-dot hidden md:block" 
        style={{ left: `${position.x}px`, top: `${position.y}px` }} 
      />
    </>
  );
};

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-accent text-white rounded-full shadow-lg hover:bg-white hover:text-accent border border-accent transition-all duration-300"
        >
          <ChevronUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
