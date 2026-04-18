import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ModularKitchen from './pages/services/ModularKitchen';
import CustomWardrobe from './pages/services/CustomWardrobe';
import SpaceOptimization from './pages/services/SpaceOptimization';
import WallPanelling from './pages/services/WallPanelling';
import CeilingDesign from './pages/services/CeilingDesign';
import SmartHome from './pages/services/SmartHome';
import HomeRenovation from './pages/services/HomeRenovation';
import FurnitureCustomization from './pages/services/FurnitureCustomization';
import LightingDesign from './pages/services/LightingDesign';
import ObsidianPenthouse from './pages/portfolio/ObsidianPenthouse';
import LuminaCreativeHub from './pages/portfolio/LuminaCreativeHub';
import SereinResidence from './pages/portfolio/SereinResidence';
import VeridianHQ from './pages/portfolio/VeridianHQ';
import TheCulinaireStudio from './pages/portfolio/TheCulinaireStudio';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/modular-kitchen" element={<ModularKitchen />} />
            <Route path="/services/custom-wardrobe" element={<CustomWardrobe />} />
            <Route path="/services/space-optimization" element={<SpaceOptimization />} />
            <Route path="/services/wall-panelling" element={<WallPanelling />} />
            <Route path="/services/ceiling-design" element={<CeilingDesign />} />
            <Route path="/services/smart-home" element={<SmartHome />} />
            <Route path="/services/home-renovation" element={<HomeRenovation />} />
            <Route path="/services/furniture-customization" element={<FurnitureCustomization />} />
            <Route path="/services/lighting-design" element={<LightingDesign />} />
            {/* Portfolio Project Pages */}
            <Route path="/portfolio/obsidian-penthouse" element={<ObsidianPenthouse />} />
            <Route path="/portfolio/lumina-creative-hub" element={<LuminaCreativeHub />} />
            <Route path="/portfolio/serein-residence" element={<SereinResidence />} />
            <Route path="/portfolio/veridian-hq" element={<VeridianHQ />} />
            <Route path="/portfolio/the-culinaire-studio" element={<TheCulinaireStudio />} />
            {/* Fallback for other routes */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
