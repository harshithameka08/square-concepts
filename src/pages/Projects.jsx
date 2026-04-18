import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import projectsHeroBg from '../assets/hero/projects-hero.png';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Hero = () => (
  <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
    <motion.div 
      className="absolute inset-0 z-0 w-full h-full"
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <img 
        className="w-full h-full object-cover"
        alt="Architectural Projects Background"
        src={projectsHeroBg}
      />
    </motion.div>
    <div className="absolute inset-0 bg-stone-900/40 backdrop-brightness-75"></div>
    
    <motion.div 
      className="relative z-10 text-center max-w-3xl px-8 flex flex-col items-center"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      <motion.h1 
        className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 uppercase"
        variants={fadeInUp}
      >
        Our <span className="text-primary">Projects</span>
      </motion.h1>
      <motion.p 
        className="text-stone-300 text-lg md:text-xl leading-relaxed mb-10 font-light"
        variants={fadeInUp}
      >
        We curate spaces that dialogue with their surroundings. Every project is an exploration of light, materiality, and the quiet sophistication of modern architecture.
      </motion.p>
      <motion.div 
        className="w-24 h-1 bg-primary mx-auto"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
    </motion.div>
  </section>
);

const FilterBar = ({ activeFilter, setFilter }) => (
  <motion.section 
    className="px-8 md:px-16 lg:px-24 max-w-screen-2xl mx-auto mt-8 mb-10"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
  >
    <div className="flex flex-wrap justify-end items-center gap-x-12 gap-y-4 border-b border-outline-variant/15 pb-8">
      {[
        { name: 'All' },
        { name: 'Residential' },
        { name: 'Commercial' },
        { name: 'Renovation' }
      ].map((filter) => (
        <button 
          key={filter.name}
          onClick={() => setFilter(filter.name)}
          className={`tracking-[0.1em] text-sm font-bold uppercase transition-all duration-300 relative group py-3 cursor-pointer ${
            activeFilter === filter.name
              ? 'text-primary font-black' 
              : 'text-stone-400 hover:text-primary'
          }`}
        >
          {filter.name}
          <span className={`absolute bottom-0 left-0 w-full h-[3px] bg-primary transition-transform duration-500 origin-left ${
            activeFilter === filter.name ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
          }`}></span>
        </button>
      ))}
    </div>
  </motion.section>
);

const ProjectCard = ({ title, location, desc, img, stats, colSpan, mt, aspect, index, category, path }) => (
  <motion.article 
    layout
    className={`${colSpan} group ${mt || ''} relative`}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ 
      duration: 1.0, 
      delay: index * 0.15,
      ease: [0.22, 1, 0.36, 1] 
    }}
  >
    <Link to={path} className="block group cursor-pointer">
    <div className={`relative overflow-hidden ${aspect} rounded-lg bg-surface-container`}>
      <motion.img 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
        alt={title} 
        src={img}
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
      
      {/* Premium Hover Overlay: Details & Stats */}
      <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 md:p-12 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInHover={{ opacity: 1, y: 0 }}
          className="transition-transform duration-500 transform translate-y-4 group-hover:translate-y-0"
        >
          <p className="text-stone-100 text-sm leading-relaxed max-w-sm font-light mb-8">
            {desc}
          </p>
        </motion.div>

        <div className="flex items-center justify-between border-t border-white/10 pt-6">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-stone-400 uppercase tracking-tighter">Completed</span>
            <span className="text-xs text-white font-medium">{stats.year}</span>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="text-[10px] text-stone-400 uppercase tracking-tighter">Project Area</span>
            <span className="text-xs text-white font-medium">{stats.area}</span>
          </div>
        </div>
      </div>
    </div>

    {/* Visible Title & Location */}
    <div className="mt-6 flex flex-col">
      <h3 className="text-2xl font-headline tracking-tight group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-stone-500 text-sm font-body uppercase tracking-[0.15em] mt-1">{location}</p>
    </div>
    </Link>
  </motion.article>
);

const projects = [
  {
    id: 1,
    title: "The Obsidian Penthouse",
    location: "Reykjavík, Iceland",
    desc: "A monolithic exploration of dark materials and shadow play, designed to contrast with the ethereal Arctic light.",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
    stats: { year: 2023, area: "4,500 SQ. FT." },
    category: "Residential",
    colSpan: "md:col-span-6",
    aspect: "aspect-video",
    path: "/portfolio/obsidian-penthouse"
  },
  {
    id: 2,
    title: "Veridian HQ",
    location: "Berlin, Germany",
    desc: "A biophilic workspace that blurs the boundaries between the industrial landscape and internal ecosystems.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    stats: { year: 2022, area: "12,000 SQ. FT." },
    category: "Commercial",
    colSpan: "md:col-span-6",
    aspect: "aspect-video",
    path: "/portfolio/veridian-hq"
  },
  {
    id: 3,
    title: "Serein Residence",
    location: "Kyoto, Japan",
    desc: "Quietude manifested through concrete and light, centered around a meditative private courtyard.",
    img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1200",
    stats: { year: 2024, area: "3,200 SQ. FT." },
    category: "Residential",
    colSpan: "md:col-span-6",
    aspect: "aspect-video",
    path: "/portfolio/serein-residence"
  },
  {
    id: 4,
    title: "Azure Pavilion",
    location: "Côte d'Azur, France",
    desc: "A transparent structure designed to be invisible, prioritizing the panoramic views of the Mediterranean horizon.",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200",
    stats: { year: 2021, area: "1,800 SQ. FT." },
    category: "Renovation",
    colSpan: "md:col-span-6",
    aspect: "aspect-video",
    path: "/portfolio/the-culinaire-studio"
  }
];

const ProjectGrid = ({ activeFilter }) => {
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);
  
  return (
    <section className="px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
        <AnimatePresence mode="popLayout" initial={false}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id}
                title={project.title}
                location={project.location}
                desc={project.desc}
                img={project.img}
                stats={project.stats}
                colSpan={project.colSpan}
                aspect={project.aspect}
                index={index}
                category={project.category}
                path={project.path}
              />
            ))
          ) : (
            <motion.div 
              className="col-span-12 py-24 text-center border border-dashed border-outline-variant/30 rounded-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className="text-secondary font-body">No projects found in this category.</p>
            </motion.div>
          )}
        </AnimatePresence>

      {/* Decorative Card 1: Craftsmanship */}
      <motion.article 
        className="md:col-span-4 flex items-center justify-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="bg-surface-container-low p-12 rounded-lg border border-outline-variant/10 text-center h-full flex flex-col justify-center">
          <span className="material-symbols-outlined text-primary-container text-5xl mb-6">architecture</span>
          <h4 className="text-xl font-headline mb-4">Custom Craftsmanship</h4>
          <p className="text-secondary font-body text-sm leading-relaxed mb-8">
            Beyond the structure, we design the soul of the space. Every handle, hinge, and hearth is considered.
          </p>
          <a className="text-primary font-bold text-sm tracking-widest uppercase hover:underline" href="#">Process Details</a>
        </div>
      </motion.article>

      {/* Decorative Card 2: Sustainability */}
      <motion.article 
        className="md:col-span-4 flex items-center justify-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="bg-surface-container-low p-12 rounded-lg border border-outline-variant/10 text-center h-full flex flex-col justify-center">
          <span className="material-symbols-outlined text-primary-container text-5xl mb-6">eco</span>
          <h4 className="text-xl font-headline mb-4">Sustainable Philosophy</h4>
          <p className="text-secondary font-body text-sm leading-relaxed mb-8">
            Integrating passive design and sustainable materials to ensure harmony between architecture and nature.
          </p>
          <a className="text-primary font-bold text-sm tracking-widest uppercase hover:underline" href="#">Eco Standards</a>
        </div>
      </motion.article>

      {/* Decorative Card 3: Styling */}
      <motion.article 
        className="md:col-span-4 flex items-center justify-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="bg-surface-container-low p-12 rounded-lg border border-outline-variant/10 text-center h-full flex flex-col justify-center">
          <span className="material-symbols-outlined text-primary-container text-5xl mb-6">auto_awesome</span>
          <h4 className="text-xl font-headline mb-4">Editorial Styling</h4>
          <p className="text-secondary font-body text-sm leading-relaxed mb-8">
            Curating bespoke furniture and art that completes the narrative of your unique living environment.
          </p>
          <a className="text-primary font-bold text-sm tracking-widest uppercase hover:underline" href="#">View Gallery</a>
        </div>
      </motion.article>
    </div>
  </section>
  );
};

const Projects = () => {
  const [activeFilter, setFilter] = useState('All');
  
  return (
    <main className="pt-20 pb-24 overflow-x-hidden">
      <Hero />
      <FilterBar activeFilter={activeFilter} setFilter={setFilter} />
      <ProjectGrid activeFilter={activeFilter} />
    
    {/* CTA Section */}
    <motion.section 
      className="mt-32 px-8 md:px-16 lg:px-24 max-w-[1440px] mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative overflow-hidden rounded-xl bg-surface-container-highest py-24 px-12 text-center">
        <div className="relative z-10">
          <motion.h2 
            className="text-4xl md:text-6xl font-headline tracking-tighter mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Start Your Journey
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-10 font-body"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Do you have a vision that requires an architectural eye? Let's curate your next landmark project together.
          </motion.p>
          <motion.button 
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-4 rounded-md text-lg font-medium hover:opacity-90 transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Consult with us
            <span className="material-symbols-outlined">arrow_forward</span>
          </motion.button>
        </div>
        {/* Architectural Accent Shapes */}
        <motion.div 
          className="absolute top-0 right-0 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl -mr-32 -mt-32"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-0 left-0 w-96 h-96 bg-surface-tint/5 rounded-full blur-3xl -ml-48 -mb-48"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
      </div>
    </motion.section>
  </main>
  );
};

export default Projects;
