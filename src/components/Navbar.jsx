import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.image.png';

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-[#fbf9f5]/80 backdrop-blur-xl transition-all duration-300">
    <div className="flex justify-between items-center px-12 py-2 max-w-[1920px] mx-auto">
      <NavLink to="/" className="flex items-center">
        <img src={logo} alt="Square Concepts" className="h-14 w-auto object-contain" />
      </NavLink>
      <div className="hidden md:flex gap-12 items-center">
        {[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: 'Projects', path: '/projects' },
          { name: 'Portfolio', path: '/portfolio' },
          { name: 'About', path: '/about' },
          { name: 'Contact', path: '/contact' },
        ].map((link) => (
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
      <Link to="/contact">
        <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-3 rounded-md font-bold text-sm tracking-widest uppercase hover:opacity-90 active:scale-95 transition-all">
          Inquire
        </button>
      </Link>
    </div>
  </nav>
);

export default Navbar;
