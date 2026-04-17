import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

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

const Hero = ({ activeFilter, setActiveFilter }) => (
  <section className="relative h-[60vh] flex items-center overflow-hidden mb-8 -mx-8 md:-mx-16 lg:-mx-24">
    <motion.div 
      className="absolute inset-0 z-0 w-full h-full"
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <img 
        className="w-full h-full object-cover"
        alt="Portfolio Header Background"
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
      />
    </motion.div>
    <div className="absolute inset-0 bg-stone-900/40 backdrop-brightness-75"></div>
    
    <div className="relative z-10 px-8 md:px-16 lg:px-24 w-full">
      <motion.div 
        className="max-w-3xl"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-headline tracking-tighter text-white mb-6 uppercase"
          variants={fadeInUp}
        >
          Selected Works
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-stone-200 font-body leading-relaxed max-w-xl mb-10 opacity-90"
          variants={fadeInUp}
        >
          A collection of architectural narratives where organic warmth meets structured precision. From brutalist coastal retreats to curated urban penthouses.
        </motion.p>
        
      </motion.div>
    </div>
  </section>
);

const ProjectCard = ({ title, location, type, img, index, path }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ 
      duration: 1.0, 
      delay: index * 0.15,
      ease: [0.22, 1, 0.36, 1] 
    }}
  >
    <Link to={path} className="group block cursor-pointer">
      <article>
        <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-surface-container-high">
          <motion.img 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            alt={title} 
            src={img}
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <motion.div 
          className="mt-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="text-2xl font-headline mb-2 group-hover:text-primary transition-colors">{title}</h3>
          <span className="text-sm font-label uppercase tracking-widest text-on-surface-variant">{type} • {location}</span>
        </motion.div>
      </article>
    </Link>
  </motion.div>
);

const ProjectGrid = ({ activeFilter }) => {
  const allProjects = [
    {
      title: "The Obsidian Penthouse",
      location: "Manhattan",
      type: "Residential",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkqDclWgxznx2rRqyt4M1lnsLRt25_WKGF-nr14AJROr7YG3duafeg19yt2_034taZ89i_LphG6yOd8bMURWruDj24xtTY_q-jWZIYvCQTZWVCVj3DmOYqxCGrTGJCEjcaGQ7kZe494ey5C9hFtq29VlTGvDzzkvV5FY1luPxvylE0UBgyBFWz3a12QfZWGDahYCzyU_eXlhXGDRuQ7UQS8tor-Y9VwDyTByEgs818EzKSqW9DHnFjiEmY1S5067TKgavxxVFFLmzp",
      path: "/portfolio/obsidian-penthouse"
    },
    {
      title: "Lumina Creative Hub",
      location: "Berlin",
      type: "Commercial",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-cGIcbSjnfcG3-zDVzoag_OsBMND_eqKgZmhO1X3l3lBrw-72-94lmhWee7axTUV9zpw9Rsw5hbmtdkD4VoGNPKZe_lkxrij_m36xCiktiXAL4631BtaTekXzSlLyOOYs5fgZaj7vcIvwoPFPT63Yjp5anqw7oMwUf1YfbN5ucSXY0otZkzoM7HRHz4_hNFUvnG8-xB-3iG_u3XF3FQFPdU6WobEir6v5Hl7bLn3VM4ffnyZZnuvkb2pHV2EVoOHcLn9rb1oFwspH",
      path: "/portfolio/lumina-creative-hub"
    },
    {
      title: "Serein Residence",
      location: "Provence",
      type: "Residential",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYFb08wyGDeEgABooCknmiIyNkXBgkeQtvHBNYg33RYKWAxml4fjqerLvgiN_aXYLEnTctyWFvVxY6joRrNTGRu-UlaaCE0xRMTCTIl2y5gskjFsRtXChnddQfXYZzXlWkwU1kwimAZ3qCnbzuto_8ObOQEvJhuOjveNsA9k_-sMWAhQEFlHN_klbARITEyQi-GKB0x9Qt6P2QNqIe7YAPWce-z5z8qIuGDki1xruu9V5aKIWYGzGP8wzvcUL5Kei-GSEyCZ-wyLzz",
      path: "/portfolio/serein-residence"
    },
    {
      title: "Veridian HQ",
      location: "Oslo",
      type: "Commercial",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWWxE2BqbGItOBIrzjIi4afdK1Mwx7Epv6By_7kJ6iS2AJ2DvB_Bs3DKrGg_zjWo39HfLNH1tWfLZF1R_mvxEcgpMA1TiDvu-8ykBBoIR8LSaS0u9Ty4K60vcGHOs7LkkTElAiEwQH57JRO43KyZf2BXNBXjE_5oX4kL635u4tDmIxxuOn9kgX1ykr1D83mW-E08TDRb8AT5rSjgcryC-pn8orDg4DExnbXBosKMeavrQp_-sYzWNObFtYur3cRJohkT46g12UoQf3",
      path: "/portfolio/veridian-hq"
    },
    {
      title: "The Culinaire Studio",
      location: "Tokyo",
      type: "Residential",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbBgS4NhHn9SQWZ5yJrKvIYxXWvCufGLfrN6J_ncd8EXcqk394gZFla4to0OJy7vhDyoeP2dp5IAS7m_vBNAQ0mAym4ihrAdAKLWhnRUMlQvzBHh4UCdqeVxj4ydEFjLDD8eQlMzguy3nFaziuSUtIvIp1m1GQvx2m48Kw1hp3szAEFhfa6Nzso3j2X3Ajj2jAyFl5xRHw01IskR5g2_loZJcLAO6Ehjzrl70PYQrZSn3fYUT6HB5GdzPhjqTHcL-TGc3eCVDbR0TK",
      path: "/portfolio/the-culinaire-studio"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.type === activeFilter);

  return (
    <motion.section 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]"
      layout
    >
      <AnimatePresence mode="popLayout">
        {filteredProjects.map((project, index) => (
          <ProjectCard 
            key={project.title}
            {...project}
            index={index}
          />
        ))}
      </AnimatePresence>
      {filteredProjects.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="col-span-full py-20 text-center text-stone-400 font-body"
        >
          No projects found in this category.
        </motion.div>
      )}
    </motion.section>
  );
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = React.useState('All');

  return (
    <main className="pt-20 px-8 md:px-16 lg:px-24 max-w-screen-2xl mx-auto overflow-hidden overflow-x-hidden">
      <Hero />
      
      {/* Filter Navigation */}
      <div className="flex justify-start md:justify-end mb-12">
        <div className="flex gap-2 p-1 border border-primary/50 rounded-full w-fit shadow-md bg-surface">
          {['All', 'Residential', 'Commercial'].map((filter) => (
            <button 
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 ${
                activeFilter === filter 
                  ? 'bg-primary text-on-primary shadow-md scale-105' 
                  : 'text-secondary hover:bg-surface-container-high hover:text-on-surface'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <ProjectGrid activeFilter={activeFilter} />
    
    {/* Newsletter / CTA Section with Background Image */}
    <motion.section 
      className="relative mt-20 mb-16 py-16 px-8 md:px-12 lg:px-16 rounded-xl text-center overflow-hidden border border-white/5"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000" 
          alt="Architectural Newsletter Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-[1px]"></div>
      </div>

      <div className="relative z-10">
        <motion.span 
          className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Stay Inspired
        </motion.span>
        <motion.h2 
          className="text-2xl md:text-3xl font-headline mb-6 max-w-xl mx-auto leading-tight text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Join our inner circle for architectural insights and previews.
        </motion.h2>
        <motion.form 
          className="flex flex-col md:flex-row gap-3 max-w-lg mx-auto" 
          onSubmit={(e) => e.preventDefault()}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <input 
            className="flex-grow bg-white/5 border border-white/10 focus:bg-white/10 focus:ring-1 focus:ring-primary rounded px-6 py-3 text-white placeholder:text-stone-300 text-sm outline-none transition-all" 
            placeholder="Your email address" 
            type="email"
          />
          <button className="bg-primary text-on-primary px-8 py-3 rounded font-bold uppercase tracking-wider text-xs hover:bg-primary-container transition-all shadow-md active:scale-95">
            Subscribe
          </button>
        </motion.form>
      </div>
    </motion.section>
    </main>
  );
};

export default Portfolio;
