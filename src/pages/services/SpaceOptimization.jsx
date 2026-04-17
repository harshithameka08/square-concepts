import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] }
};

const fadeInRight = {
  initial: { opacity: 0, x: 50 },
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
  <section className="px-12 mb-12 max-w-[1920px] mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
      <motion.div 
        className="lg:col-span-7"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.span 
          className="inline-block px-4 py-1.5 mb-8 bg-surface-container-high text-primary font-label text-xs tracking-widest uppercase rounded-full"
          variants={fadeInUp}
        >
          Architectural Interiors
        </motion.span>
        <motion.h1 
          className="font-headline text-5xl md:text-7xl italic tracking-tighter leading-tight mb-8"
          variants={fadeInUp}
        >
          Space <span className="text-primary">Optimization</span> Solutions
        </motion.h1>
        <motion.p 
          className="font-body text-xl text-on-surface-variant leading-relaxed max-w-2xl"
          variants={fadeInUp}
        >
          Our approach treats every square inch as a design opportunity. We don't just fill rooms; we curate environments that breathe, adapt, and serve multiple dimensions of modern living.
        </motion.p>
      </motion.div>
      <motion.div 
        className="lg:col-span-5 relative"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div 
          className="absolute -top-10 -left-10 w-48 h-48 bg-surface-container rounded-full -z-10 opacity-50"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        <motion.img 
          className="w-full h-[450px] object-cover rounded-xl shadow-2xl shadow-on-surface/5" 
          alt="Modern minimalist living room" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQCoiDNPwxFwi8va0_S9uxo9kdDHSl_3b4BHqJ3kAh4wb-pCmuW5gQHef3g0Bf6RYRZx8-kTq3Q5YqXJSEpkvvInswj6vs3XWzp3r5T9BDd01Y1pxBmEAL_3jftuYyupzTAt0YkNlPf3Q95bWADwczTv1Mrk69b5WVGDJvt3vL8qHWbQwaVc6qXf81OoRRsE2w6x82MKBB4_qmaFAf4hrR2U2lRyJFOfGALiDEVs1d719kzYs-G337hr7h7eVSOkwJq6hji_BnUKL_"
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
    </div>
  </section>
);

const MaximizingUnseen = () => (
  <section className="mb-12 px-12 max-w-[1920px] mx-auto">
    <motion.div 
      className="bg-surface-container-low py-16 px-16 rounded-[2rem] overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div 
          className="order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative inline-block mb-12">
            <motion.img 
              className="w-full h-[500px] object-cover rounded-lg" 
              alt="Hidden storage architectural detail" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVUePQUP2QXRMXEuXBzPm62leuCWBEZ0uoJlITs0_Qlwzi1KMOpVJiq8jifTFma8O3NYU44k7hjV_DVwckZjibtmLuf38sufO1TZ7P8t7OabACQUPsvEcwg3rhqU2g1SzS0824pfVNu5M_xmOwiKJazqUfrHfwWW3kBPK0d7-dy0f85cJ7PD0ppAd0-SvzV2KuI_xbAm3E_rsMkNVDYe4V_qTsGj-DbQ_EZW2wQfXLTlCDq9XyxyvK_eDsVySbmjDFfuHnet5wwd8N"
              initial={{ scale: 1.05 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div 
              className="absolute -bottom-8 -right-8 bg-primary p-8 text-on-primary rounded-lg max-w-[240px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="font-headline text-2xl mb-2 italic">Geometric Precision</h3>
              <p className="font-body text-sm opacity-90 leading-relaxed">Finding luxury in the corners most people overlook.</p>
            </motion.div>
          </div>
        </motion.div>
        <motion.div 
          className="order-1 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h2 
            className="font-headline text-5xl mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Maximizing the <span className="italic">Unseen</span>
          </motion.h2>
          <motion.p 
            className="font-body text-lg text-on-surface-variant mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Under-stair voids, bulkhead clearances, and alcoves are not obstacles—they are untapped canvases. We engineer bespoke millwork that vanishes into the architecture, providing immense utility without disrupting visual serenity.
          </motion.p>
          <motion.ul 
            className="space-y-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              'Integrated recessed cabinetry',
              'Ceiling-cavity ambient lighting systems',
              'Sub-floor utility access modules'
            ].map((item, i) => (
              <motion.li key={i} className="flex items-start gap-4" variants={fadeInUp}>
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="font-medium">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

const MultiFunctional = () => (
  <section className="px-12 mb-16 max-w-[1920px] mx-auto">
    <motion.div 
      className="mb-16 text-center max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.h2 
        className="font-headline text-5xl mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        Multi-functional <span className="italic text-primary">Spaces</span>
      </motion.h2>
      <motion.p 
        className="font-body text-on-surface-variant"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        The modern home must perform. Our layouts transition seamlessly from focused productivity to expansive entertaining.
      </motion.p>
    </motion.div>
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-[800px]">
      <motion.div 
        className="md:col-span-8 bg-surface-container relative group overflow-hidden rounded-xl"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.img 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          alt="Transformer layout layout" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFLH-E_E6RvLxM1MBr-nqWq6WvzXnXns6YKysv28c3YyypWnpxUY71MQ8zYOQdKADAtIqTv4bl0AIucadTa7Pv_P-FV1JhwPUU01mmrnbrD5ZxW6LE7PvhtbPaz0DvESkG3w3_n62GEem558hXSC3-geIpuNh4mp4KN8xEkxGjQeKTrEZpytNuf9vBXJoseqUTUkT15qld5tArdU3UHC4GvRt1Kk8gP9Bn8YtbFgixlsldvaebYioZ9om9UOGEsfBYPKnRu_W8ODCX"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-transparent to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-10 left-10 text-on-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <h4 className="font-headline text-3xl italic mb-2">The Transformer Layout</h4>
          <p className="font-body opacity-80 max-w-md">Rooms that change purpose with a simple kinetic motion.</p>
        </motion.div>
      </motion.div>
      <motion.div 
        className="md:col-span-4 grid grid-rows-2 gap-8"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.0, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div 
          className="bg-surface-container-high p-10 flex flex-col justify-center rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="material-symbols-outlined text-primary text-4xl mb-6">settings</span>
          <h4 className="font-headline text-2xl mb-4 italic">Kinetic Partitions</h4>
          <p className="text-sm text-on-surface-variant">Custom sliding screens and pivoting walls to redefine your privacy on demand.</p>
        </motion.div>
        <motion.div 
          className="bg-primary p-10 flex flex-col justify-center text-on-primary rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="material-symbols-outlined text-3xl mb-6">weekend</span>
          <h4 className="font-headline text-2xl mb-4 italic">Modular Seating</h4>
          <p className="text-sm opacity-80">Architectural furniture that reconfigures for intimate dinners or large gatherings.</p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const TrafficFlow = () => (
  <section className="mb-16 max-w-[1920px] mx-auto px-12">
    <div className="flex flex-col md:flex-row gap-16 items-start">
      <motion.div 
        className="md:w-1/3 sticky top-32"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.h2 
          className="font-headline text-5xl mb-8 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Traffic Flow <br/><span className="italic text-primary">Optimization</span>
        </motion.h2>
        <motion.p 
          className="font-body text-on-surface-variant mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Great architecture is felt, not seen. We analyze the daily choreography of your life to eliminate bottlenecks and create a rhythmic journey through your home.
        </motion.p>
        <motion.div 
          className="border-l-2 border-primary-container pl-6 py-2 space-y-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <div className="font-headline text-2xl mb-2 text-primary">01</div>
            <div className="font-semibold uppercase text-xs tracking-widest text-secondary mb-1">Observation</div>
            <p className="text-sm">Mapping movement patterns to identify friction points.</p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <div className="font-headline text-2xl mb-2 text-primary">02</div>
            <div className="font-semibold uppercase text-xs tracking-widest text-secondary mb-1">Recalibration</div>
            <p className="text-sm">Widening sightlines and reorienting structural thresholds.</p>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div 
        className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="space-y-8">
          <motion.img 
            className="w-full aspect-[3/4] object-cover rounded-xl" 
            alt="Corridor corridor" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSyturquD3jysJR9-FPhlqbzKK9zoPLkVMUhBQgn-LtJIoUZgOawIw2JJOfG_sxoP6ZaQHpdB9iqvjTBvTcsZm5JtIj9y3MZ7f26VJaffp5hPR_Bs-8w_Fbt6m1L67CcQ7pZ51QpOsh7J654ApGjM7JgIyNniLFHMXiVXpI_IjWUNdyExa3PGIbJ15REUGOddsaFzxdhEbiWSuv0QbQtyAUOu8jvP_06mn8m5-QMjhk7Pbb2vmTuV-Q7yoSRc5mfzKADp8gMzXQmB7" 
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div 
            className="p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h5 className="font-headline text-xl italic mb-3">The Narrative Path</h5>
            <p className="text-sm text-on-surface-variant">Designing hallways that feel like galleries rather than transitions.</p>
          </motion.div>
        </div>
        <div className="space-y-8 pt-24">
          <motion.img 
            className="w-full aspect-[3/4] object-cover rounded-xl" 
            alt="Open area dynamics" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB37HqYYuVir83Xbwrf1kmS-8IAwDz0V2F_lyGExbn2AC7FKuxsGXTI5o8yvTqgD7Gs-XWiQJOPIGJMw4zZpLk_KP4ou2WrLD0E3Z1uOSDo8CPjdjcFILZQfYVU1aDAlPAHCwQVQ09DHngikx3PK5cg45JwDy1Jzt8Ao2WSKk_PJLpSMFB88k9aE2Y_O5GR1xtjFlrcQiyChJrpiSrNuvzXVY3OOfWOyEarTZqZlPvGEvtU8ve__HUmzP7DDyuYccxQTsgWSeObWNK3" 
            initial={{ scale: 1.05, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div 
            className="p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <h5 className="font-headline text-xl italic mb-3">Open-Zone Dynamics</h5>
            <p className="text-sm text-on-surface-variant">Creating clear physical boundaries without the use of tall visual barriers.</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

const HiddenUtility = () => (
  <section className="mb-16 bg-surface-container px-12 py-16 overflow-hidden">
    <div className="max-w-[1920px] mx-auto relative">
      <motion.div 
        className="absolute right-0 top-0 opacity-10 scale-150 -z-0"
        initial={{ opacity: 0, scale: 1 }}
        whileInView={{ opacity: 0.1, scale: 1.5 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="material-symbols-outlined text-[400px]">architecture</span>
      </motion.div>
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h2 
            className="font-headline text-4xl mb-10 text-center italic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Hidden <span className="text-primary not-italic font-sans font-extrabold uppercase text-3xl tracking-widest block mt-2">Utility</span>
          </motion.h2>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {[
            { icon: 'power_settings_new', title: 'Integrated Tech', desc: 'Outlets, ports, and smart home controls embedded seamlessly into stone and wood surfaces.' },
            { icon: 'ac_unit', title: 'Climate Camouflage', desc: 'HVAC vents and returns disguised as architectural shadow lines or decorative grilles.' },
            { icon: 'home_work', title: 'Pocket Functionalism', desc: 'Laundry, home offices, and wet bars that completely disappear behind flush pocket doors.' }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              className="bg-background p-8 rounded-xl transition-all hover:shadow-xl hover:shadow-on-surface/5"
              variants={fadeInUp}
            >
              <motion.div 
                className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center mb-6"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="material-symbols-outlined text-primary text-2xl">{item.icon}</span>
              </motion.div>
              <h4 className="font-headline text-xl mb-3 italic">{item.title}</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

const SpaceOptimization = () => (
  <main className="pt-24">
    <Hero />
    <MaximizingUnseen />
    <MultiFunctional />
    <TrafficFlow />
    <HiddenUtility />
    
    <section className="px-12 mb-12 max-w-[1920px] mx-auto">
      <motion.div 
        className="bg-on-background p-12 rounded-[3rem] text-center relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
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
            className="font-headline text-4xl md:text-5xl text-on-primary mb-6 italic"
            variants={fadeInUp}
          >
            Ready to rethink your floorplan?
          </motion.h2>
          <motion.p 
            className="text-surface-variant text-lg mb-10 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Discover the untapped potential of your property with an architectural consultation.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link to="/contact" className="bg-primary hover:bg-primary-container text-on-primary px-10 py-4 rounded-md font-bold text-base tracking-widest transition-all duration-300 transform hover:scale-105 inline-block">
              OPTIMIZE YOUR SPACE
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  </main>
);

export default SpaceOptimization;
