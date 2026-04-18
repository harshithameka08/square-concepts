import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.image.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fbf9f5]/80 backdrop-blur-xl transition-all duration-300">
      <div className="flex justify-between items-center px-6 md:px-12 py-2 max-w-[1920px] mx-auto">
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="Square Concepts" className="h-10 md:h-14 w-auto object-contain" />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12 items-center">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `font-serif tracking-tight text-sm font-bold uppercase transition-all duration-300 ${
                  isActive 
                    ? 'text-primary border-b-2 border-primary pb-1' 
                    : 'text-[#5d5f60] hover:text-primary'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link to="/contact" className="hidden sm:block">
            <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 md:px-8 py-2 md:py-3 rounded-md font-bold text-xs md:text-sm tracking-widest uppercase hover:opacity-90 active:scale-95 transition-all">
              Inquire
            </button>
          </Link>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#5d5f60] hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-3xl">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-[#fbf9f5] border-t border-black/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `font-serif tracking-tight text-lg font-bold uppercase transition-all duration-300 ${
                      isActive ? 'text-primary' : 'text-[#5d5f60]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)}
                className="mt-4"
              >
                <button className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-4 rounded-md font-bold text-sm tracking-widest uppercase shadow-lg shadow-primary/20">
                  Inquire Now
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
