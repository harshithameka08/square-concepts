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
  <header className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-surface-container-low">
    <div className="absolute inset-0 z-0">
      <motion.img 
        className="w-full h-full object-cover opacity-90" 
        alt="Architectural Ceiling Design" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuALgX7In3BQBLkrYT8uHOVfOIaxpeovy6TjEbTu8exOeGY45rjxcE0aMs5lK4J8b7urKNzHFTRPgUuZ7jDHQSuFPblyRQ6dWQi1mI1x1UwDLBSlKlxqvPVLSNd4gNlcQ9k616qC2eCrK-5L5vGNiXliliNXIQx4ZvZ7VK5tZeChacVAi9jzCb-PTT2ZecHEc_h28PP6co5ghrepf3dlaIbBiLZRAO2wvdx3ZaKyCgSfQ9Yj0hRdL_Wjs6yVjh3Bd_E46m4VPpJDSxDB"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.9 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-900/60 via-stone-900/10 to-transparent"></div>
    </div>
    <motion.div 
      className="relative z-10 px-8 md:px-20 max-w-4xl"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      <motion.span 
        className="inline-block px-3 py-1 bg-white/5 text-primary-fixed-dim rounded-full text-xs font-bold tracking-widest uppercase mb-6"
        variants={fadeInUp}
      >
        Master Craftsmanship
      </motion.span>
      <motion.h1 
        className="text-5xl md:text-7xl font-bold font-headline text-white leading-[1.1] mb-8 tracking-tight"
        variants={fadeInUp}
      >
        The Zenith of <br/>
        <span className="text-primary-fixed-dim italic">Architectural Flow.</span>
      </motion.h1>
      <motion.p 
        className="text-lg md:text-xl text-stone-200 leading-relaxed mb-10 max-w-xl font-light"
        variants={fadeInUp}
      >
        Redefining the vertical dimension through precision-engineered false ceilings. We treat the fifth wall as a canvas for technical innovation and aesthetic grace.
      </motion.p>
      <motion.div className="flex flex-col sm:flex-row gap-4" variants={fadeInUp}>
        <Link to="/contact" className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-4 rounded-md font-bold text-sm tracking-widest uppercase transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20 inline-block">
          Book a Consultation
        </Link>
      </motion.div>
    </motion.div>
  </header>
);

const LightChoreography = () => (
  <section className="py-16 bg-surface">
    <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
      <motion.div 
        className="md:col-span-7 relative"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div 
          className="absolute -top-10 -left-10 w-64 h-64 bg-surface-tint/5 rounded-full blur-3xl"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        <motion.div 
          className="relative rounded-xl overflow-hidden shadow-2xl z-10"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img 
            className="w-full h-[400px] object-cover" 
            alt="Lighting Detail" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbJofCGHreNlRt75Rhj-qk_J3neuV4QRVr7rqyTP2tVB5NPKndJCBr7mRNdb5lMgXd_Q5xs9HPTZXV7Dj0Wiqt-zKVbPiu-dx2lTGLX3rwYR0r_3JNudEyOebdir7POy5u2Vc79EhiqxN1kznSq3md_5vUwuTD7K9JA__TZ1g_a0vDQoVt1KIA8d6_1WqMrnullxcv-QDkYGVoWhnUFosO6WEGDE7yDKT7i58bdZqI_4aRCskF7jVNE_lMewp26urPADN3DB0lF3Tt"
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
        <motion.div 
          className="absolute -bottom-6 -right-6 w-full h-full border-2 border-outline-variant/20 rounded-xl -z-10"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
      </motion.div>
      <motion.div 
        className="md:col-span-5"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold font-headline mb-4 text-on-surface leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Ambient Light Choreography
        </motion.h2>
        <motion.div 
          className="w-16 h-1 bg-primary mb-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        <motion.p 
          className="text-on-surface-variant leading-loose mb-6 font-light italic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          "Light should not just illuminate a room; it should define its character through subtle transitions and hidden depths."
        </motion.p>
        <motion.p 
          className="text-on-surface-variant leading-relaxed mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          Our integrated lighting systems are embedded directly into the structural vocabulary of the ceiling. We utilize indirect cove lighting and micro-aperture downlights to create a layered atmospheric experience that responds to the time of day.
        </motion.p>
        <motion.ul 
          className="space-y-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.li className="flex items-center gap-3 text-sm font-semibold tracking-wide text-secondary uppercase" variants={fadeInUp}>
            <span className="material-symbols-outlined text-primary">auto_awesome</span>
            Adaptive Spectral Tuning
          </motion.li>
          <motion.li className="flex items-center gap-3 text-sm font-semibold tracking-wide text-secondary uppercase" variants={fadeInUp}>
            <span className="material-symbols-outlined text-primary">blur_on</span>
            Diffused Cove Integration
          </motion.li>
        </motion.ul>
      </motion.div>
    </div>
  </section>
);

const AcousticEngineering = () => (
  <section className="py-16 bg-surface-container-low">
    <div className="max-w-7xl mx-auto px-8">
      <motion.div 
        className="text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold font-headline mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Acoustic Engineering
        </motion.h2>
        <motion.p 
          className="text-on-surface-variant font-medium tracking-widest uppercase text-xs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Precision sound management
        </motion.p>
      </motion.div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-4 gap-6 h-auto md:h-[600px]"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <motion.div 
          className="md:col-span-2 md:row-span-2 bg-surface-container-lowest p-10 rounded-xl flex flex-col justify-between shadow-sm"
          variants={fadeInUp}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="material-symbols-outlined text-4xl text-primary mb-6">graphic_eq</span>
            <h3 className="text-2xl font-bold font-headline mb-4">Sonic Absorption</h3>
            <p className="text-on-surface-variant leading-relaxed">Advanced micro-perforated panels and mineral fiber cores designed to eliminate standing waves and echo in high-ceiling environments.</p>
          </motion.div>
          <motion.img 
            className="w-full h-48 object-cover rounded-lg mt-8" 
            alt="Acoustic Texture" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAH5zBTxtHqZAGzOp3qFBclWyx6-Du3RWtGImpTpWAIAub9Wyoum4PFJXteF0wMlUJ_nh1H-GYURWyEJcmpY0UL20u0dO8fW1K9UOdq4vFdzsGT5bX4p1i-btDHa9jCALOaqg_JAYv1rAxgBL6X215ZQYPfsjhecQRlmfT5ynZvsa6FiG_fP1tMTsVlknWdrQA3Y1j5mfQvAag0khG5LYmsZu3G4F7kgBX8C3-TLUjXe394o8LfYObQDJlLNsyhUEUd9_jFWlFah6JO" 
            initial={{ scale: 1.05, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
        <motion.div 
          className="md:col-span-2 bg-surface-container-highest p-8 rounded-xl flex items-center gap-8"
          variants={fadeInUp}
        >
          <div className="flex-1">
            <h3 className="text-xl font-bold font-headline mb-2">Decibel Decoupling</h3>
            <p className="text-sm text-on-surface-variant">Mechanical isolation systems that prevent vibration transfer between floors.</p>
          </div>
          <motion.div 
            className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center border border-white/30"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-3xl font-bold font-headline text-primary">-42dB</span>
          </motion.div>
        </motion.div>
        <motion.div 
          className="bg-primary p-8 rounded-xl flex flex-col justify-center text-on-primary"
          variants={fadeInUp}
        >
          <motion.span 
            className="material-symbols-outlined text-3xl mb-4" 
            style={{ fontVariationSettings: "'FILL' 1" }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            verified
          </motion.span>
          <h4 className="font-bold text-lg leading-tight">NRC Certified</h4>
          <p className="text-xs opacity-80 mt-2">Class A Performance</p>
        </motion.div>
        <motion.div 
          className="bg-surface-container-lowest p-8 rounded-xl flex flex-col justify-center"
          variants={fadeInUp}
        >
          <h4 className="font-bold text-on-surface font-headline">Zero-Sag Technology</h4>
          <p className="text-xs text-on-surface-variant mt-2">Humidity resistant substrate for lifelong structural integrity.</p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const StructuralElegance = () => (
  <section className="pt-12 pb-12 bg-surface">
    <div className="max-w-7xl mx-auto px-8">
      <motion.div 
        className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8"
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
          <h2 className="text-4xl md:text-5xl font-bold font-headline mb-6 text-on-surface leading-tight">Structural Elegance</h2>
          <p className="text-on-surface-variant leading-relaxed">Our ceilings are more than just finishes—they are engineered sculptures. From parametric 3D forms to seamless monolithic spans, we push the boundaries of what is possible overhead.</p>
        </motion.div>
        <motion.div 
          className="pb-2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link to="/portfolio" className="group flex items-center gap-2 text-primary font-bold tracking-widest text-xs uppercase">
            Explore Materials 
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
          </Link>
        </motion.div>
      </motion.div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        {[
          { title: 'The Timber Rib', desc: 'Sustainably sourced oak slats engineered for complex radial curves and organic warmth.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIoA76_6QJi-rqGgotovlUW6bOvV0GH6fs2dcRINxvKcc-UNb4MRpLbadCPMfVE7SWrspZJZKwA08XpNwnYw24GGbG3vuXkG2I6Z5wVon1_iCTT-660_Ykono4ybZXvVQSxCybQEo1Vgz7UeiBTG5oGNBQWaO9UPoTimCZ_jRzdNZI9f5D0QTNNUelmGF70WqnqpT541WgmdX3exxr0kPKQ-3jECWWXCzB_mbiyQtxYQsRPYdud5_QPNjuQHb7Cn6c10vfpHrU3BbR' },
          { title: 'Parametric Relief', desc: 'Precision CNC-milled plaster forms that create a dynamic interplay of light and shadow.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrUPVOYOcwNLok3mN-aFlny6NYjJvhdv3uF49NHCxugUPaLHZ8aaXtqppY2hzYaIQj5G6rKfqaqXQrUOK_eX0FLxJ3ZJo5lrJGaLVK5j7s4pyuVtGPyLXciA4GUcv1LTl7Xr8xzReZoGG9sAehnyEwu81LJn5NcqHCeI5BN1XfgURJeNnzXsQI08jGtwLtisKNHoXozLOb5_57PDOKIwBy3vX-2_VOXzeqKDDu8nFYrAhDtFmOI3r8f-t-k4ueTevoxbhQXotJ2-9x' },
          { title: 'Monolithic Float', desc: 'Hidden-suspension systems that create the illusion of weightless, expansive surfaces.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4P_0ryjLADT1ZWlNi8Xs_EP0ZMOaz5Qc8Y5Y0nKS1fQ5KFQYUZ643Q2TL7XZPJy6s35-fzrIIhsWk1s-QscpesZa_RfzyZ9UcU6fnc7xZuTzPfCLsAFku28FexWj54GmPc_BXbYDCTXWolWhhJXU3r4X96vxEBy2qioa2j48gWFDgarBk8gkH4URuvHSjXUOkVl8s4llyf6M_DbFUyJ_i49kIhPmtANoZK1n3uvqJHTZ75sZi9ubbX4BtFo2EHgOfoTiiyy3C_2Zz' }
        ].map((item, i) => (
          <motion.div key={i} className="group cursor-pointer" variants={fadeInUp}>
            <motion.div 
              className="h-[300px] overflow-hidden rounded-lg mb-4"
              initial={{ scale: 1.05, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} src={item.img} />
            </motion.div>
            <motion.h4 
              className="text-lg font-bold font-headline mb-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {item.title}
            </motion.h4>
            <motion.p 
              className="text-xs text-on-surface-variant leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {item.desc}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const CeilingDesign = () => (
  <main>
    <Hero />
    <LightChoreography />
    <AcousticEngineering />
    <StructuralElegance />
    
    <section className="py-10 px-8">
      <motion.div 
        className="max-w-5xl mx-auto bg-on-surface rounded-2xl p-10 md:p-12 relative overflow-hidden text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div 
          className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        <motion.div 
          className="relative z-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold font-headline text-white mb-6"
            variants={fadeInUp}
          >
            Architectural elevation starts with a conversation.
          </motion.h2>
          <motion.p 
            className="text-white/70 max-w-2xl mx-auto mb-8 text-base font-light leading-relaxed"
            variants={fadeInUp}
          >
            Collaborate with our structural designers to craft a ceiling that defines your space. From technical drawings to final installation.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link to="/contact" className="bg-primary text-white px-10 py-4 rounded-md font-bold text-xs tracking-[0.2em] uppercase transition-all hover:bg-primary-container shadow-xl shadow-black/20 inline-block">
              Book a Consultation
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  </main>
);

export default CeilingDesign;
