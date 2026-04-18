import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const ContactHeader = () => (
  <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
    <motion.div 
      className="absolute inset-0 z-0 w-full h-full"
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <img 
        className="w-full h-full object-cover"
        alt="Interior Design Background"
        src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2000"
      />
    </motion.div>
    <div className="absolute inset-0 bg-stone-900/40 backdrop-brightness-75"></div>
    
    {/* Content */}
    <motion.div 
      className="relative z-10 max-w-3xl px-8 flex flex-col items-center text-center"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      <motion.h1 
        className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 uppercase"
        variants={fadeInUp}
      >
        Let's craft your <span className="text-primary italic font-serif">ideal space.</span>
      </motion.h1>
      <motion.p 
        className="text-stone-300 text-lg md:text-xl leading-relaxed mb-10 font-light"
        variants={fadeInUp}
      >
        Whether you are looking to revitalize a single room or envisioning a complete architectural overhaul, our studio is ready to translate your aspirations into reality.
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

const ContactForm = () => (
  <motion.div 
    className="lg:col-span-7 bg-surface-container-low p-8 md:p-12 rounded-xl"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
  >
    <motion.h2 
      className="text-3xl font-bold mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      Start a Conversation
    </motion.h2>
    <motion.form 
      className="space-y-6" 
      onSubmit={(e) => e.preventDefault()}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div className="space-y-2" variants={fadeInUp}>
          <label className="block text-sm font-medium text-on-surface-variant uppercase tracking-wider">Name</label>
          <input className="w-full bg-surface-container-lowest border-none focus:ring-2 focus:ring-primary/20 rounded-lg p-4 text-on-surface transition-all" placeholder="Your name" type="text" required/>
        </motion.div>
        <motion.div className="space-y-2" variants={fadeInUp}>
          <label className="block text-sm font-medium text-on-surface-variant uppercase tracking-wider">Email</label>
          <input className="w-full bg-surface-container-lowest border-none focus:ring-2 focus:ring-primary/20 rounded-lg p-4 text-on-surface transition-all" placeholder="your@email.com" type="email" required/>
        </motion.div>
      </div>
      <motion.div className="space-y-2" variants={fadeInUp}>
        <label className="block text-sm font-medium text-on-surface-variant uppercase tracking-wider">Project Type</label>
        <select className="w-full bg-surface-container-lowest border-none focus:ring-2 focus:ring-primary/20 rounded-lg p-4 text-on-surface transition-all appearance-none">
          <option>Residential Interior Design</option>
          <option>Commercial Space Optimization</option>
          <option>Architectural Consultation</option>
          <option>Custom Furniture Curation</option>
        </select>
      </motion.div>
      <motion.div className="space-y-2" variants={fadeInUp}>
        <label className="block text-sm font-medium text-on-surface-variant uppercase tracking-wider">Message</label>
        <textarea className="w-full bg-surface-container-lowest border-none focus:ring-2 focus:ring-primary/20 rounded-lg p-4 text-on-surface transition-all" placeholder="Tell us about your project and goals..." rows="5" required></textarea>
      </motion.div>
      <motion.button 
        className="w-full md:w-auto bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-4 rounded-md font-bold text-lg shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all flex items-center justify-center gap-3 group" 
        type="submit"
        variants={fadeInUp}
      >
        Send Inquiry
        <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
      </motion.button>
    </motion.form>
  </motion.div>
);

const StudioDetails = () => (
  <motion.div 
    className="lg:col-span-5 space-y-12"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
  >
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h3 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">The Studio</h3>
        <p className="text-2xl font-serif text-on-surface leading-snug">
          Madhapur Pride Pillar No-1722,<br/>
          Design District, Hyderabad,<br/>
          TS 500081
        </p>
      </motion.div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-2">Connect</h3>
          <p className="font-body text-on-surface text-lg">hello@squareconcepts.design</p>
          <p className="font-body text-on-surface text-lg">+91 9010106877</p>
        </div>
        <div>
          <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-2">Hours</h3>
          <p className="font-body text-on-surface text-lg">Mon — Fri: 9am - 6pm</p>
          <p className="font-body text-on-surface text-lg">Sat: By Appointment</p>
        </div>
      </motion.div>
    </div>
    
    <motion.div 
      className="relative group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute -inset-2 bg-surface-tint opacity-[0.03] rounded-2xl group-hover:opacity-[0.05] transition-opacity"></div>
      <div className="relative h-80 rounded-xl overflow-hidden shadow-sm">
        <motion.img 
          className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 transition-all duration-700" 
          alt="Studio Map" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkYlFdYdTomQ7R20co9_HRlas4qd_v8hpisHxL0i0yp9n4aIx7pAIs1xbi9mJbZynRHlXGLcrIpvjJJ7O6R04hHBIaZbBxG1rn_ImsVGoU27JtUqjvgFHdrv5fwoF63mgYrC4OhT1j-7DsVcaIpKIwTFzf-BSD-OVpvPhBz8dAC4en02cfwjyhEEoHqsWkyhpJawIr4mSscnSuAIgCyyDJHiyYyoOOJ21Ug8csia0u3fTeHJ_zaCLe3pd9PlZMt50NvcOdWmDNtuRL"
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div 
            className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-2xl"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="material-symbols-outlined text-on-primary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
          </motion.div>
        </div>
        <motion.div 
          className="absolute bottom-4 right-4 bg-surface/90 backdrop-blur-md px-4 py-2 rounded text-xs font-bold tracking-widest uppercase text-on-surface-variant"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Interactive Map
        </motion.div>
      </div>
    </motion.div>
  </motion.div>
);

const Contact = () => (
  <main className="pt-20">
    <ContactHeader />
    <div className="max-w-screen-2xl mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
      <ContactForm />
      <StudioDetails />
    </div>
  </main>
);

export default Contact;
