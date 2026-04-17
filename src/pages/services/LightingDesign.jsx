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
  <motion.section 
    className="relative min-h-[600px] flex items-center px-6 md:px-12 pt-20 pb-16 overflow-hidden"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
  >
    <div className="absolute inset-0 z-0">
      <motion.img 
        className="w-full h-full object-cover" 
        alt="Interior architectural lighting" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJEJu1SksO79HYzqvBeiVupjeEIGKAe-QoMRL2R5PfXgQKVeHrQm-aLakfsKpWh7maB_0I7J6BVaBtUmThX1AttHSZqgVnWgoPsgXTvc1C_SWBDBtMHh4z2KTi_qL3WYX-ph-d8NoUaf74bQTwEaiFYsI1b7Xx2RC47fZmtkDMo9E4foEejRCGADyilKkAt9sCvNKhwpCbHdEd-Q7hwpvlom2bsvgbtkj6R4URUfhEWbac2sYTpKJBr_cHnomY70Mlr6coBxT9onId"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-900/60 via-stone-900/20 to-transparent"></div>
    </div>
    <motion.div 
      className="relative z-10 max-w-4xl"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      <motion.span 
        className="font-label text-xs uppercase tracking-widest text-primary-fixed-dim bg-primary/10 px-3 py-1 rounded-full mb-4 block w-fit"
        variants={fadeInUp}
      >
        The Curated Environment
      </motion.span>
      <motion.h1 
        className="font-headline text-5xl md:text-6xl tracking-tighter leading-tight mb-8 text-white"
        variants={fadeInUp}
      >
        Lighting Design <br/>
        <span className="italic text-primary-fixed-dim">& Installation.</span>
      </motion.h1>
      <motion.p 
        className="font-body text-base md:text-lg text-stone-300 max-w-xl leading-relaxed"
        variants={fadeInUp}
      >
        We treat light as a physical material—sculpting atmospheres that respond to the rhythm of architecture and the biology of the inhabitant.
      </motion.p>
    </motion.div>
  </motion.section>
);

const LuminousChoreography = () => (
  <motion.section 
    className="py-16 px-6 md:px-12 bg-surface-container-low"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
  >
    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
      <motion.div 
        className="lg:col-span-5"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.h2 
          className="font-headline text-4xl md:text-5xl tracking-tighter mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Luminous <br/>Choreography
        </motion.h2>
        <motion.p 
          className="font-body text-base md:text-lg text-secondary mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Light layering is the art of balancing ambient, task, and accent lighting to eliminate flat spaces. Our curation process involves strategic placement that highlights architectural textures while maintaining a soft, natural glow.
        </motion.p>
        <motion.div 
          className="space-y-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div className="flex gap-6 items-start" variants={fadeInUp}>
            <span className="material-symbols-outlined text-primary text-2xl">filter_tilt_shift</span>
            <div>
              <h4 className="font-bold text-base mb-1">Atmospheric Depth</h4>
              <p className="text-xs text-secondary">Creating visual interest through the interplay of intentional shadows and highlight gradients.</p>
            </div>
          </motion.div>
          <motion.div className="flex gap-6 items-start" variants={fadeInUp}>
            <span className="material-symbols-outlined text-primary text-2xl">layers</span>
            <div>
              <h4 className="font-bold text-base mb-1">Texture Emphasis</h4>
              <p className="text-xs text-secondary">Grazing light techniques to reveal the hidden soul of wood, stone, and plaster finishes.</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div 
        className="lg:col-span-7 relative"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative max-w-lg ml-auto">
          <motion.div 
            className="absolute top-4 left-4 w-full h-full bg-surface-container rounded-lg -z-10"
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: 16, y: 16 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>
          <motion.img 
            className="w-full h-[450px] object-cover rounded-lg shadow-2xl relative z-10" 
            alt="Light layering example" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlSOyE3l6e2SeeTcNW43UWau8wycyLu5u1mR5JUqpMDUNgrXK9H9dItvqzKt1wpvSpHLf4_RS76IS799DHpcA-G5xiVrqu1dG8Imw_H-qFs5_fEYiuU_6J5MYsw7CeM801KiPoZN7Tw3uq1lmvbRWsFmiieFObtulqH6xnJO56X4kVwaRDZyZt-bA62e0RtxpTZFJnp7CtgAFumFEZlKeiCYxU-lnVrKlvNug5_W2SA1iPv8iYntbjFF_WSfxrrvXqoOgFewlP7ytf"
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </motion.div>
    </div>
  </motion.section>
);

const TechnicalIntegration = () => (
  <section className="pt-12 pb-24 px-6 md:px-12 bg-background">
    <div className="max-w-screen-2xl mx-auto">
      <motion.div 
        className="flex flex-col md:flex-row justify-between items-end mb-10 gap-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-headline text-5xl tracking-tighter mb-6">Technical Integration</h2>
          <p className="font-body text-secondary">Sophistication through simplicity. Our smart lighting controls are invisible, intuitive, and architecturally integrated.</p>
        </motion.div>
        <motion.div 
          className="flex gap-4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span 
            className="w-12 h-[2px] bg-primary-container self-center"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          ></motion.span>
          <span className="font-label text-xs uppercase tracking-widest">The Smart Core</span>
        </motion.div>
      </motion.div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <motion.div 
          className="md:col-span-2 md:row-span-2 bg-surface-container p-12 rounded-xl flex flex-col justify-between"
          variants={fadeInUp}
        >
          <div>
            <motion.span 
              className="material-symbols-outlined text-4xl text-primary mb-8" 
              style={{ fontVariationSettings: "'FILL' 1" }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              settings_input_component
            </motion.span>
            <h3 className="font-headline text-3xl mb-4">Invisible Control</h3>
            <p className="text-secondary leading-relaxed">Centralized dimming panels that eliminate wall clutter, replacing banks of switches with single, elegant keypads.</p>
          </div>
          <motion.img 
            className="w-full h-48 object-cover rounded-lg mt-12" 
            alt="Minimalist light panel" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKJIGu9xUXsjxH1lADmHcG7ZJgkmEsx3t3LjJelwgAssuCRKl5DkSSuWPBtEdw-kkypZoqDuPH-EaGxvLbvU9zE5USYVCHGOrKvTblV1aEjwHo8jYfunIJhBrawAQjxCpDzs64bUYOmXlUHxV0lhDwyxFz9AOOa54sfhn_nJzbxOfIb6iSvp8hwoufa6AfJlpl7gQ3X0kphPPqtC4X4RYcECzQV6baY3d6onGnvfPHzVHzCmkZubx9LK3CCIJ3V5Dy5FajeJ09hbsr" 
            initial={{ scale: 1.05, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
        <motion.div 
          className="md:col-span-2 bg-surface-container-high p-12 rounded-xl flex items-center gap-8"
          variants={fadeInUp}
        >
          <div className="flex-1">
            <h3 className="font-headline text-2xl mb-2">Automated Scenes</h3>
            <p className="text-sm text-secondary">One-touch transitions from 'Culinary Focus' to 'Evening Lounge'.</p>
          </div>
          <motion.span 
            className="material-symbols-outlined text-5xl text-outline-variant"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            routine
          </motion.span>
        </motion.div>
        <motion.div 
          className="bg-primary-container/10 p-12 rounded-xl border border-primary-container/20"
          variants={fadeInUp}
        >
          <motion.span 
            className="material-symbols-outlined text-primary text-3xl mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            smartphone
          </motion.span>
          <h4 className="font-bold mb-2">Remote Management</h4>
          <p className="text-xs text-secondary">Global control of your estate's lighting environment via encrypted cloud architecture.</p>
        </motion.div>
        <motion.div 
          className="bg-surface-container-highest p-12 rounded-xl"
          variants={fadeInUp}
        >
          <motion.span 
            className="material-symbols-outlined text-on-surface-variant text-3xl mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            sensors
          </motion.span>
          <h4 className="font-bold mb-2">Occupancy Logic</h4>
          <p className="text-xs text-secondary">Lighting that anticipates your movement, gently fading as you enter and leave architectural zones.</p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const CircadianWellness = () => (
  <section className="relative py-16 px-6 md:px-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <motion.img 
        className="w-full h-full object-cover" 
        alt="Soft morning light" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFo9-uCV152t_MUR3tbCydEdoiydSog7ULKdsJXoY-8E0K060lockz1eB3yIWnyAaByViR67mDVwMo033G7mPllOcDVM92TX606PUM3M3b0AxIAe8FRY_pwJnrbbKHqopNa3MRuXdXu9wcUzh9nQmbD1_HQpr50xqHJWHgrO-bAh7_YJfXpuoOoKopn5ZjY23XyYtFSOq5i8jRpF5crzSdEAwW5xdAlvNvM84-RPusYSTXKwys13JEHK9McTdw05xKLllsN4R39Izx" 
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
    <div className="relative z-10 max-w-screen-2xl mx-auto">
      <motion.div 
        className="max-w-md p-8 bg-surface/80 backdrop-blur-2xl rounded-xl shadow-sm border border-outline-variant/10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.span 
          className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-3 block"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Human-Centric Design
        </motion.span>
        <motion.h2 
          className="font-headline text-3xl tracking-tighter mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Circadian Wellness
        </motion.h2>
        <motion.p 
          className="font-body text-sm md:text-base text-secondary mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          We synchronize your home's artificial lighting with the solar cycle. From crisp, energizing 5000K daylight in the morning to warm, sleep-inducing 2200K amber tones in the evening—protecting your natural rhythm.
        </motion.p>
        <motion.div 
          className="flex items-center gap-4 text-primary group cursor-pointer"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-bold text-xs tracking-widest uppercase">Biophilic Light</span>
          <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">trending_flat</span>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const LightingDesign = () => (
  <main className="pt-12">
    <Hero />
    <LuminousChoreography />
    <TechnicalIntegration />
    <CircadianWellness />
    
    <section className="py-16 px-6 md:px-12 bg-background text-center">
      <motion.div 
        className="max-w-3xl mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 
          className="font-headline text-5xl md:text-6xl tracking-tighter mb-8 leading-tight text-on-surface"
          variants={fadeInUp}
        >
          Ready to illuminate your <br/><span className="italic text-primary">architectural vision?</span>
        </motion.h2>
        <motion.p 
          className="font-body text-secondary text-lg mb-10 max-w-xl mx-auto"
          variants={fadeInUp}
        >
          Schedule a design consultation with our lighting architects to discuss technical integration and aesthetic choreography for your next project.
        </motion.p>
        <motion.div className="flex flex-col sm:flex-row gap-6 justify-center" variants={fadeInUp}>
          <Link to="/contact" className="bg-gradient-to-r from-primary to-primary-container text-white px-8 py-4 rounded-md font-semibold tracking-wide hover:shadow-xl transition-all inline-block">
            Book a Consultation
          </Link>
          <Link to="/portfolio" className="px-8 py-4 text-primary font-semibold tracking-wide hover:bg-surface-container-high transition-colors inline-block">
            View Portfolio
          </Link>
        </motion.div>
      </motion.div>
    </section>
  </main>
);

export default LightingDesign;
