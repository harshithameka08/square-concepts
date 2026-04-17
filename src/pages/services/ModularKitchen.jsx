import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] }
};

const fadeInRight = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
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
  <section className="relative min-h-[600px] flex items-center px-6 md:px-24 overflow-hidden pt-20">
    <div className="absolute inset-0 z-0">
      <motion.img 
        className="w-full h-full object-cover" 
        alt="Ultra-modern minimalist modular kitchen" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoBbETew3m1dQNRG-ytnJyABmktzMYe4yieTj3pQ4rudsIzkqyZZ9tRSmJcXeYB2ElewJTHsNaJP3YTsu7iDaaXjipcTpc8AUn150X0sUIPQkzbMG-QMTS_o77_GQTI66nRLMUYlQADPp6x-SL2gfWRqQDCRXR9BxF_iyytAFi9B81lA1y79IWBijAonHv5ZSHSaMguHLXMy8nl92G7hjqW3lKUxyBaQLTohfBslyMwEpWfp23KmPjh3dq7uF7cNVDIF9ItpCagC2Y"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-900/60 via-stone-900/20 to-transparent"></div>
    </div>
    <motion.div 
      className="relative z-10 max-w-3xl"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      <motion.span 
        className="inline-block px-5 py-2 mb-8 text-sm md:text-base font-label uppercase tracking-[0.3em] bg-primary text-on-primary rounded-full shadow-lg shadow-primary/20"
        variants={fadeInUp}
      >
        Bespoke Interiors
      </motion.span>
      <motion.h1 
        className="text-5xl md:text-7xl font-headline italic tracking-tighter leading-[1.1] text-white mb-8"
        variants={fadeInUp}
      >
        The Art of <br/>
        <span className="text-primary-fixed-dim">Culinary Geometry</span>
      </motion.h1>
      <motion.p 
        className="text-xl md:text-2xl font-body text-white max-w-2xl leading-relaxed mb-10"
        variants={fadeInUp}
      >
        Modular kitchen systems that bridge the gap between architectural precision and the warmth of a lived-in home.
      </motion.p>
      <motion.div 
        className="flex flex-col sm:flex-row gap-6"
        variants={fadeInUp}
      >
        <Link to="/contact" className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-4 rounded-md font-label font-bold tracking-widest uppercase shadow-xl hover:scale-95 transition-transform text-sm inline-block">
          Book a Consultation
        </Link>
        <button className="flex items-center gap-3 text-white font-label font-semibold hover:gap-5 transition-all text-sm">
          View Lookbook <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </motion.div>
    </motion.div>
  </section>
);

const CulinaryExperience = () => (
  <section className="py-10 px-6 md:px-24 bg-surface">
    <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-center">
      <motion.div 
        className="relative"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-surface-container-high -z-10 rounded-lg"></div>
        <motion.img 
          className="w-full h-[450px] object-cover rounded-lg shadow-2xl" 
          alt="High-end chef's kitchen" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5Yzv4Z3_MhpQg-ibGdXM-y8w9bE1FDrCazfWgs8JEgt9gHIaL2siSWEaPVbE8HF4JQm_O4YMkXysMB9mfR64-xcoearD3wu2QyAnIDQzO2CZV_u_yzlnTTOmpm3K6CX2grvvdzmm98V9svux3BIhEikHl-VE3DrjHWGqtVP35UuUhaCqTj0Cwky_grPU5G7aCLcuBwniPpNdofq-3sm0yGllJ-6-H49IZ60RPc_UD2xJBDq6m9XfVsq3uFuuC8kQzUiY_DvIfphvn"
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div 
          className="absolute -bottom-8 -right-8 bg-on-background text-white p-6 max-w-[280px] rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-headline italic text-2xl block mb-2 text-serif-italic">"Kitchens should be as dynamic as the chefs who inhabit them."</span>
          <p className="text-[10px] uppercase tracking-widest text-outline-variant">Aethel Design Philosophy</p>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="text-3xl md:text-4xl font-headline italic tracking-tighter mb-6">The Culinary Experience</h2>
        <p className="text-base text-on-surface-variant leading-relaxed mb-6">
          We don't just install cabinets; we choreograph movement. Our design process begins with your ritual—how you move from the pantry to the prep station, how light hits the counter during your morning espresso, and how the space transforms for evening gatherings.
        </p>
        <motion.div 
          className="space-y-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div className="flex items-start gap-4" variants={fadeInUp}>
            <span className="material-symbols-outlined text-primary text-3xl">restaurant</span>
            <div>
              <h4 className="font-bold text-lg mb-1">Ergonomic Workflow</h4>
              <p className="text-sm text-secondary">Optimized "Golden Triangle" configurations tailored to your specific cooking style.</p>
            </div>
          </motion.div>
          <motion.div className="flex items-start gap-4" variants={fadeInUp}>
            <span className="material-symbols-outlined text-primary text-3xl">ac_unit</span>
            <div>
              <h4 className="font-bold text-lg mb-1">Climate Integration</h4>
              <p className="text-sm text-secondary">Discrete ventilation and temperature zones for wine preservation and fresh produce.</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const MaterialPalette = () => (
  <section className="py-32 bg-surface-container-low px-6 md:px-24">
    <div className="max-w-[1400px] mx-auto">
      <motion.div 
        className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <h2 className="text-5xl font-headline italic tracking-tighter mb-4">Material Palette</h2>
          <p className="text-secondary max-w-md">Our curation of textures defines the soul of the kitchen.</p>
        </div>
        <motion.div 
          className="flex gap-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.span className="px-6 py-2 border border-outline-variant rounded-full text-xs uppercase tracking-widest" variants={fadeInUp}>Natural</motion.span>
          <motion.span className="px-6 py-2 border border-outline-variant rounded-full text-xs uppercase tracking-widest" variants={fadeInUp}>Industrial</motion.span>
          <motion.span className="px-6 py-2 border border-outline-variant rounded-full text-xs uppercase tracking-widest" variants={fadeInUp}>Timeless</motion.span>
        </motion.div>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-[800px]">
        <motion.div 
          className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-highest"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            alt="Sculpted Stone" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL3uztk-NoD36FV9W1cEA2DY0Vmt5LuQLxF4mKZNGWMIhFd_oAPAxkh698hS-MCo2fwECiL7xND_r7W3lhnbOSKwbDIhSGzoyaibZvAvIJ4hWXIcbvVIrjnXe1YoHGY6XQoqbeOW2TKa-2TtdBMiohkMUsM1aPZnIhotOIUhgkcRBbQOVOtIC10OubEhsua4voBkKTk-9J-xZ4tBNlD5uWSEJ4dVwvU1LVaLJ8BOfEPcKnazN80gAilgtP6Luva4sERnPQAdpPNt0E" 
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-on-background/80 to-transparent flex flex-col justify-end p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-white text-4xl font-headline italic mb-4">Sculpted Stone</h3>
            <p className="text-surface-variant max-w-sm">Italian Calacatta and Quartzite surfaces, hand-finished for seamless waterfall edges.</p>
          </motion.div>
        </motion.div>
        <motion.div 
          className="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-highest"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.0, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            alt="Deep Timber" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT_WW79LBlNjzeh7FajPGkuuapJCVs73w-IdykYbL7wcd-fm6p9yXvj2oCcPAgYApKWMruMTFiGR_AbWFy3AA3Ua3SrB8NW3Ce7c-PHvn46nstuU3p7rOvfd-Ist0Lda3ZssS6Zp30-D8Z4mUrpnmMIKUR450PZSOmf6jthxx44wSZjOQX562rwHDObXrpxFfMq9dk5vJHDskgyOm4h5C88Q6UtaqaMnzdQe43z81l5imknxhD2zlXReSa7UnF_Weq1fA5oj6o-W1D" 
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-on-background/80 to-transparent flex flex-col justify-end p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-white text-3xl font-headline italic mb-2">Deep Timber</h3>
            <p className="text-surface-variant text-sm">Responsibly sourced European Oak and Walnut veneers, wire-brushed for tactile warmth.</p>
          </motion.div>
        </motion.div>
        <motion.div 
          className="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-highest"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.0, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            alt="Architectural Metal" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrybZ2Xe8W9h2cpA3feVhiu9nBSn9H0VRgY2dSmMWiPtME2mNf-Rw31NA11whggL0H7Ll6Frt0Erq0WJbdl2sRExzkUuTvrNuAK1YdBRWk3yUwzbipzEC-kgIvifLTfCLNdWiO-n-vPIOiWb2QK-jKfgeO1HEExCQbz5umzyJz5NYbX1Av9SSxB_m1ae3WMHLY_tZnGa6RN0cJvltf2Tru9hTdihPyjoyrhHZ-XPdTxPkb7aDLFHzT9e1Vps59DnlFGCM9lYmr0n5o" 
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-on-background/80 to-transparent flex flex-col justify-end p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-white text-3xl font-headline italic mb-2">Architectural Metal</h3>
            <p className="text-surface-variant text-sm">PVD-coated accents in champagne gold and liquid titanium for modern durability.</p>
          </motion.div>
        </motion.div>
        <motion.div 
          className="md:col-span-8 bg-surface-container-highest rounded-xl p-12 flex flex-col justify-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <h4 className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Precision Selection</h4>
              <p className="text-on-surface-variant italic font-headline text-2xl leading-snug">Every slab is hand-selected from our local stone yards to ensure unique veining patterns for your island.</p>
            </motion.div>
            <motion.div 
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="material-symbols-outlined text-[120px] text-outline-variant opacity-20">architecture</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const SmartStorage = () => (
  <section className="py-12 px-6 md:px-24">
    <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="text-3xl md:text-4xl font-headline italic tracking-tighter mb-8">Smart Storage Solutions</h2>
        <motion.div 
          className="space-y-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {[
            { title: 'The Invisible Pantry', desc: 'Full-height pocket doors that disappear into the cabinetry, revealing a fully integrated coffee station and dry-goods storage with internal LED sensors.' },
            { title: 'Motorized Efficiency', desc: 'Servo-drive opening systems for handle-less aesthetics—open drawers with a gentle tap of the knee or hip when your hands are full.' },
            { title: 'Adaptive Interior', desc: 'Adjustable steel dividers and soft-touch lining for delicate glassware and professional cutlery sets.' }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              className={`border-l-4 ${i === 0 ? 'border-primary' : 'border-outline-variant'} pl-8 py-1`}
              variants={fadeInUp}
            >
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-secondary leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <motion.div 
        className="bg-surface-container p-10 rounded-xl flex flex-col justify-between"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="material-symbols-outlined text-primary text-4xl mb-4">settings_suggest</span>
          <h2 className="text-3xl font-headline italic mb-4">Precision Engineering</h2>
          <p className="text-sm text-on-surface-variant mb-8 leading-relaxed">
            Behind the elegant veneers lies a masterpiece of engineering. Our modular carcasses are constructed using high-density 19mm moisture-resistant marine-grade plywood, ensuring your kitchen remains structurally perfect for decades. We utilize Blumotion soft-close technology and custom-milled aluminum profiles for every joint.
          </p>
        </motion.div>
        <motion.img 
          className="w-full h-48 object-cover rounded shadow-inner opacity-80 mix-blend-multiply" 
          alt="Technical blueprint" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcl87Rk_la4jhkzolqQKA5nR0IZ2oyAgzOkYIigi67qNAmYvWoXiJ_XDimUqhS-RxSYo-XTLWbTbzYxJtZfvUrcLJlHvtmyDZM7QWSrBbePRd-wleW--IGlMrrhLzKnwwCjuEQMSV4M_zelUj-nsHZAN0JR-44soaHbacnmyc65-4GiRvU3ImfFh86bd7E-mhm5rKSJJySHNTLtkygtK8loH_hEaMKQNZQgbFopqVpSnpEpYz_RBNe-XlBoGgGom9x9b9gJskq0E7H" 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 0.8, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
    </div>
  </section>
);

const ModularKitchen = () => (
  <main>
    <Hero />
    <CulinaryExperience />
    <MaterialPalette />
    <SmartStorage />
    
    <section className="py-20 bg-on-background relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 opacity-20"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.2 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
      </motion.div>
      <motion.div 
        className="relative z-10 max-w-4xl mx-auto text-center px-6"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-headline italic text-white mb-8 tracking-tighter"
          variants={fadeInUp}
        >
          Ready to design your <br/> dream culinary stage?
        </motion.h2>
        <motion.p 
          className="text-outline-variant text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
          variants={fadeInUp}
        >
          Join us at our flagship studio for an immersive material tour and a one-on-one session with our lead architectural designers.
        </motion.p>
        <motion.div 
          className="flex flex-col md:flex-row gap-8 justify-center items-center"
          variants={fadeInUp}
        >
          <Link to="/contact" className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-5 rounded-md font-label font-bold tracking-widest uppercase text-base shadow-2xl hover:scale-105 transition-transform">
            Book a Consultation
          </Link>
          <a className="text-white border-b border-white pb-2 font-label tracking-widest uppercase text-sm hover:text-primary-fixed-dim hover:border-primary-fixed-dim transition-colors" href="#">
            Request a Brochure
          </a>
        </motion.div>
      </motion.div>
    </section>
  </main>
);

export default ModularKitchen;
