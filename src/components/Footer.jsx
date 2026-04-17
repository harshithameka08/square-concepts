import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.image.png';

const Footer = () => (
  <footer className="w-full pt-6 pb-10 px-12 mt-auto bg-[#5d5f60] text-[#fbf9f5]">
    <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 font-sans text-sm tracking-wide">
      {/* Branding Side */}
      <div className="lg:col-span-5 max-w-sm flex flex-col items-center text-center">
        <img src={logo} alt="Square Concepts" className="h-24 w-auto object-contain mb-5" />
        <p className="text-[#C8E6C9] leading-relaxed text-sm italic">
          "Curating architectural habitats where precision meets humanity. Crafted with intent since 1994."
        </p>
      </div>

      {/* Navigation Groups Side */}
      <div className="lg:col-span-7 flex flex-wrap gap-x-12 lg:gap-x-16 gap-y-8">
        <div className="flex flex-col gap-3 min-w-[100px]">
          <h5 className="text-white font-bold uppercase tracking-widest mb-3">Nav</h5>
          <Link className="text-[#C8E6C9] hover:text-white transition-colors" to="/">Home</Link>
          <Link className="text-[#C8E6C9] hover:text-white transition-colors" to="/services">Services</Link>
          <Link className="text-[#C8E6C9] hover:text-white transition-colors" to="/projects">Projects</Link>
          <Link className="text-[#C8E6C9] hover:text-white transition-colors" to="/portfolio">Portfolio</Link>
          <Link className="text-[#C8E6C9] hover:text-white transition-colors" to="/about">About</Link>
          <Link className="text-[#C8E6C9] hover:text-white transition-colors" to="/contact">Contact</Link>
        </div>
        <div className="flex flex-col gap-3 min-w-[100px]">
          <h5 className="text-white font-bold uppercase tracking-widest mb-3">Legal</h5>
          <a className="text-[#C8E6C9] hover:text-white transition-colors" href="#">Privacy Policy</a>
          <a className="text-[#C8E6C9] hover:text-white transition-colors" href="#">Terms of Service</a>
        </div>
        <div className="flex flex-col gap-3 min-w-[100px]">
          <h5 className="text-white font-bold uppercase tracking-widest mb-3">Connect</h5>
          <a className="text-[#C8E6C9] hover:text-white transition-colors" href="#">Instagram</a>
          <a className="text-[#C8E6C9] hover:text-white transition-colors" href="#">LinkedIn</a>
        </div>
        <div className="flex flex-col gap-3 min-w-[120px]">
          <h5 className="text-white font-bold uppercase tracking-widest mb-3">Studio</h5>
          <p className="text-[#C8E6C9]">1224 Curated Way<br/>Copenhagen, DK</p>
          <p className="text-[#C8E6C9] mt-1 font-medium">+45 22 34 55 00</p>
        </div>
      </div>
    </div>
    <div className="max-w-[1920px] mx-auto mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs opacity-80">
      <p className="text-[#C8E6C9]">© 2024 Square Concepts. Crafted with Architectural Intent.</p>
    </div>
  </footer>
);

export default Footer;
