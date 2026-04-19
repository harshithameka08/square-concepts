import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
  <section className="relative h-screen flex items-center overflow-hidden pt-20">
    <div className="absolute inset-0 z-0">
      <motion.img 
        className="w-full h-full object-cover" 
        alt="elegant dark minimalist architectural interior" 
        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>
    </div>
    <motion.div 
      className="relative z-10 px-6 md:px-12 lg:px-32 w-full flex flex-col items-end text-right"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      <motion.p 
        className="text-gray-300 font-bold tracking-[0.3em] uppercase mb-6 text-sm"
        variants={fadeInUp}
      >
        Architectural Curator
      </motion.p>
      <motion.h1 
        className="text-4xl md:text-5xl lg:text-[5.5rem] font-serif leading-[1.1] tracking-tight text-gray-200 mb-8"
        variants={fadeInUp}
      >
        <span className="text-primary">Structural Integrity</span> <br/>
        <span className="italic font-light text-gray-300">Organic Warmth</span>
      </motion.h1>
      <motion.div 
        className="max-w-xl"
        variants={fadeInUp}
      >
        <p className="text-lg leading-relaxed text-gray-300 font-body">
          At Square Concepts, we don't just design spaces; we curate habitats that breathe. Our philosophy merges the rigorous precision of engineering with the tactile poetry of high-end interior craft.
        </p>
      </motion.div>
    </motion.div>
    <motion.div 
      className="absolute bottom-12 right-12 hidden lg:block"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.0, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-center gap-4">
        <div className="h-px w-24 bg-white/50"></div>
        <span className="font-serif italic text-white/80">Est. 2023</span>
      </div>
    </motion.div>
  </section>
);

const Heritage = () => (
  <section className="py-16 px-6 md:px-12 lg:px-32 bg-surface-container-low">
    <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
      <motion.div 
        className="lg:col-span-5 relative"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div 
          className="absolute -top-12 -left-12 w-64 h-64 bg-surface-tint/5 rounded-full blur-3xl"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        <motion.img 
          className="relative z-10 rounded-lg shadow-2xl w-full aspect-[4/5] object-cover" 
          alt="architectural sketch" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZdW9ttCnW3fJYbQyrY-ZlHZZK9_yIKGLvKmQPxR_e7c4aVUtRyvFTkP8tbG1jtEnYDtiKpCnUAIpVCckK39mrpUk6bKp5gDeJF5HCF7VrJYHS9cClhVffYGX7v1SEKPg9aOrhezg4hnQvFO0uDOtjdqzmS6J6LEMozm10j-T78IKebSQbi4HVAGP0VqJfRhQ1d-lZIPNnAmslgns845qE2GbRAiWHdDJH4VAzs0_vmjFiPl1sdXz1LbCy6Ql3kK_B3NOuVR9vi8Fh"
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div 
          className="absolute -bottom-6 -right-6 w-1/2 h-1/2 bg-primary-container/10 -z-10 rounded-lg"
          initial={{ x: 0, y: 0 }}
          whileInView={{ x: 16, y: 16 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
      </motion.div>
      <motion.div 
        className="lg:col-span-7 lg:pl-16"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.h2 
          className="text-headline-lg font-serif text-5xl mb-12 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          A Journey of <br/>Curated Evolution
        </motion.h2>
        <div className="space-y-8 text-on-surface-variant leading-loose">
          <motion.p 
            className="text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Square Concepts began in 2023 as a boutique structural engineering firm. Our founders believed that the soul of a building should be as robust as its skeleton. This technical obsession eventually blossomed into a holistic vision for interior environments.
          </motion.p>
          <motion.p 
            className="text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            By early 2026, we shifted our focus from the "how" to the "why," evolving into an architectural interior studio that prioritizes human experience over mere utility. Today, we stand as curators of light, space, and materiality.
          </motion.p>
          <motion.div 
            className="pt-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <a className="text-primary font-bold flex items-center gap-2 group hover:gap-4 transition-all" href="#">
              View Our Timeline 
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Pillars = () => (
  <section className="pt-16 pb-32 px-6 md:px-12 lg:px-32 bg-background">
    <div className="max-w-[1920px] mx-auto">
      <motion.div 
        className="mb-24 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.h2 
          className="text-display-md font-serif text-6xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          The Curator's Pillars
        </motion.h2>
        <motion.p 
          className="text-on-surface-variant max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Our design methodology is anchored by three immutable principles that guide every stroke of the pen and every choice of stone.
        </motion.p>
      </motion.div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-12"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        {[
          { icon: 'architecture', title: 'Precision', desc: 'The invisible logic of engineering. We believe that true beauty is found in the flawless execution of structural details that others might hide.' },
          { icon: 'favorite', title: 'Humanity', desc: 'Spaces must serve the inhabitant\'s emotional state. We design for the quiet rituals of morning coffee and the celebratory energy of shared meals.' },
          { icon: 'texture', title: 'Materiality', desc: 'Truth in materials. We source honest textures—raw linen, cold steel, and warm oak—to create a sensory dialogue within the architecture.' }
        ].map((pillar, i) => (
          <motion.div 
            key={i} 
            className={`p-12 transition-all hover:bg-surface-container-highest group ${i % 2 === 0 ? 'bg-surface-container' : 'bg-surface-container-low'}`}
            variants={fadeInUp}
          >
            <motion.span 
              className="material-symbols-outlined text-4xl text-primary mb-8" 
              style={{ fontVariationSettings: "'FILL' 1" }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {pillar.icon}
            </motion.span>
            <h3 className="text-headline-md font-serif mb-6">{pillar.title}</h3>
            <p className="text-on-surface-variant leading-relaxed">{pillar.desc}</p>
            <div className="mt-8 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const Team = () => (
  <section className="pt-16 pb-32 px-6 md:px-12 lg:px-32 bg-surface-container-high overflow-hidden">
    <div className="max-w-[1920px] mx-auto">
      <motion.div 
        className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-2xl">
          <motion.h2 
            className="text-display-md font-serif text-5xl mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Masterminds <br/>of the Habitat
          </motion.h2>
          <motion.p 
            className="text-on-surface-variant"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            A collective of architects, interior curators, and structural poets dedicated to the art of fine living.
          </motion.p>
        </div>
        <motion.div 
          className="flex gap-4"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <button className="w-16 h-16 rounded-full border border-outline/20 flex items-center justify-center hover:bg-white transition-colors">
            <span className="material-symbols-outlined">west</span>
          </button>
          <button className="w-16 h-16 rounded-full border border-outline/20 flex items-center justify-center hover:bg-white transition-colors">
            <span className="material-symbols-outlined">east</span>
          </button>
        </motion.div>
      </motion.div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        {[
          { name: 'Elena Vance', role: 'Design Director', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcsmheW4YWmKTvYwU9v5FP4X5H7J1dFO4DoefKlDZt36R0qp1Hm_VTUMzz3DXkxm94Ebh1BuCiB-OHM1fUbjJjyyb7jt5S3siIIMRsC9Kr6nlGhsh0k_bKqkiA6C2Yq1EmhYRrk5gzQ0pKKi4p6gZiYnFB160TVPOIdOFZtzEK7bLwoC0KLA2_4tKSrq1HNr_PynJXi3qp1TPGBOLl55i8aZ8_1XykOZifGyi8iU_n9zE5ouocjm3f_pE7xK2NC68RkTFuZtkgRm4g' },
          { name: 'Marcus Thorne', role: 'Lead Curator', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFVQ5TMEXB9MbSvQld3Ey92duzdfp0X21fW9CU4V4LwY8A3w0fsJS99ymuiSM4DugfJTLlCKxmuLpnFMKVFn-5YHsqqIhs6fA0FymiakXsE-45OsBULvlbXnugYUx8pLvo-lWd-148O8R7o5KS9YiGgpVVaPPB-BJmd_8Auo_E84Wxb19yAscTpj_YCLeDibLvCRXebAp0lugt2v9AQ5p8gW-5iCKq5MGkK8qKei5dMCdTvTpDzBDnDRDOBvq4zEFXekMZxw9Wi8hG', offset: true },
          { name: 'Sarah Chen', role: 'Technical Lead', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDngq2mZSbsXc8uLUFsFUAek1dy4LSrOTgKEJ9gYlorxTklIl1N_3CkH32aamMmUm61vMQw6Sxx3gHNJTfcHZpQmA-mRmOqzFzNFkeMqSTPLrTpAe_yAYbQfA_dwq9ifOleCJrsDS6iLr-1f3ejjKTf9m05VZIJDoO05X8an9BHWiyaGonzossfh9HK9iUOuAVK1ipZR9LaMFHrqmaXUSPaBFmMXBtvKS9XzrO8pZ7e7cLHE2-mNF9WPkA_kWu68Tt1QM1t3LmckesA' },
          { name: 'Julian Aris', role: 'Principal Architect', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDa3_FGX-2o7bse3WNtqXzgQ78kHIy5Psrayr-f9dSmSSXjxUQ5_1SNYB4UdFs869yOWPRgUnhxKc6Sb5-B0wRv8ZQ9u_d9dqQSOgkH1SebUtScqxkNYkL0nkjjwNAHLhl0J39I0J4YUnknYWkQwm_NcelrCEm8NARBmhjy72OY7TKGkAzu9Pk4kZ2PTf5XMwJzkz-s_C0flkkAMnuZtQdRtT_YRFhfDXSQ6aA1LOiKWl7Nbz3qA46G0eXSAab7UMIEYiOmVDpsmKeL', offset: true }
        ].map((member, i) => (
          <motion.div 
            key={i} 
            className={`group relative ${member.offset ? 'md:translate-y-12' : ''}`}
            variants={fadeInUp}
          >
            <div className="aspect-[3/4] overflow-hidden rounded-lg mb-6">
              <motion.img 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                src={member.src} 
                alt={member.name}
                initial={{ scale: 1.05 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <h4 className="text-xl font-serif">{member.name}</h4>
            <p className="text-on-surface-variant text-sm font-label uppercase tracking-widest mt-1">{member.role}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const About = () => {
  return (
    <main>
      <Hero />
      <Heritage />
      <Pillars />
      <Team />
      <motion.section 
        className="py-24 px-6 md:px-12 lg:px-32 relative overflow-hidden bg-primary"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0 z-0 opacity-10">
          <motion.div 
            className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-display-md lg:text-[4rem] font-serif leading-none text-on-primary mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Join the Journey.
          </motion.h2>
          <motion.p 
            className="text-on-primary/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Whether you are envisioning a private sanctuary or a communal masterpiece, our curation begins with a single conversation.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to="/contact" className="bg-white text-primary px-10 py-4 rounded-md font-bold text-base tracking-widest uppercase hover:bg-surface transition-all shadow-xl shadow-black/10">
              Inquire Now
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
};

export default About;
