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
    className="relative min-h-[600px] flex items-center px-12 mb-16 overflow-hidden bg-surface-container-low pt-8"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
  >
    <div className="absolute inset-0 z-0">
      <motion.img 
        className="w-full h-full object-cover" 
        alt="Modern minimalist living room renovation" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4Oqmafv9ygMH31H9H2ckNnPEDiAoNbRmE7hXNOsMgA9NwR79IH3A2d8iY1ZfzdRJctM0QN0l-57t906iLoxWtHG7PXGzmWiL_lnDrZko_BGhnI1lvcYjDp2gIR61seniBmJ2Pa27bUloicf_8AOCWaoZiMKRcVYWlIZP-8t0xJyOc2zHu09hizoexM5kDgcjCjbSqix4V2JytdjZ3ttmXBJL5wA6boYnSGSfPG6ipxHz3VjLbhelG8h_LKjplcvkgRR2L-X5o1ofT"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-900/60 via-stone-900/10 to-transparent"></div>
    </div>
    <motion.div 
      className="relative z-10 max-w-3xl"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      <motion.p 
        className="font-label text-primary-fixed-dim font-semibold tracking-widest uppercase text-xs mb-4"
        variants={fadeInUp}
      >
        Service Excellence
      </motion.p>
      <motion.h1 
        className="font-headline text-5xl md:text-6xl tracking-tighter text-white leading-[0.9] mb-6"
        variants={fadeInUp}
      >
        Home Renovation <br/><span className="italic text-primary-fixed-dim">&amp; Remodeling</span>
      </motion.h1>
      <motion.p 
        className="font-body text-base md:text-lg text-stone-300 max-w-xl mb-10 leading-relaxed"
        variants={fadeInUp}
      >
        We transcend standard construction to curate living environments. Through structural rebirth and material precision, we redefine the essence of your private sanctuary.
      </motion.p>
      <motion.div className="flex gap-6" variants={fadeInUp}>
        <Link to="/contact" className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-3.5 rounded-md font-medium shadow-lg hover:scale-105 transition-transform text-sm inline-block">
          Begin Transformation
        </Link>
        <Link to="/portfolio" className="flex items-center gap-2 text-white font-semibold hover:text-primary transition-colors group text-sm">
          Explore Portfolio <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </Link>
      </motion.div>
    </motion.div>
  </motion.section>
);

const StructuralRebirth = () => (
  <section className="px-12 mb-16">
    <div className="max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div 
            className="absolute -top-12 -left-12 w-64 h-64 bg-surface-container-high -z-10 rounded-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>
          <motion.img 
            className="rounded-lg shadow-2xl relative z-10 w-full aspect-[4/5] object-cover" 
            alt="Architectural renovation" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2BUhfUu3n9WTH1p9HNGFb_CAVaWqn4kkU6YPM54KDpmgJ-8CzO-Us4A-OfTnsR0HOD0tSS3MFG-xU54MsEMjeKmv86J7HiRBIH0BcfNs2VCgJEncy7IVIbfDIW0oAwIUdr-qkVpYWj59epvvJFRo6mqoETz1TX2HH33aZQG19eOcQZzEKofiHpPgmO0Sh69GNdNLLpCshPw_glpKuz3twhZFfzxeKRWNiS37Sg1BFlcXf1VKnE1bI3fRXCOsVVjI8zdo70S5yOsrl"
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div 
            className="absolute -bottom-8 -right-8 p-8 bg-surface-container-highest rounded-lg shadow-xl max-w-xs z-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-headline text-4xl text-primary italic">01.</span>
            <p className="font-body text-sm font-bold text-on-surface mt-2 uppercase tracking-widest">Structural Integrity</p>
            <p className="font-body text-xs text-secondary mt-2">Precision engineering meets historical preservation.</p>
          </motion.div>
        </motion.div>
        <motion.div 
          className="flex flex-col gap-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h2 
            className="font-headline text-5xl tracking-tight text-on-surface"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Structural Rebirth
          </motion.h2>
          <motion.p 
            className="font-body text-lg text-secondary leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Every renovation begins with a deep dialogue between the existing skeleton and the future vision. Our process identifies the hidden potential within your walls, stripping away the superfluous to reveal a structure capable of supporting modern life without losing its soul.
          </motion.p>
          <motion.div 
            className="space-y-12 mt-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { icon: 'architecture', title: 'Spatial Calibration', desc: 'Adjusting volumes and flows to enhance the rhythm of daily movement.' },
              { icon: 'foundation', title: 'Material Archaeology', desc: 'Sourcing and preserving original elements while integrating advanced high-performance materials.' },
              { icon: 'light_mode', title: 'Luminous Planning', desc: 'Engineering natural light penetration through surgical structural openings.' }
            ].map((step, i) => (
              <motion.div key={i} className="flex gap-8 group" variants={fadeInUp}>
                <motion.div 
                  className="text-primary-container"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="material-symbols-outlined text-4xl">{step.icon}</span>
                </motion.div>
                <div>
                  <h4 className="font-headline text-xl mb-2">{step.title}</h4>
                  <p className="text-secondary font-body">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

const BespokeManagement = () => (
  <section className="bg-surface-container-low py-16 px-12 mb-16">
    <motion.div 
      className="max-w-screen-2xl mx-auto text-center mb-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.p 
        className="font-label text-primary font-semibold tracking-widest uppercase text-sm mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        Total Oversight
      </motion.p>
      <motion.h2 
        className="font-headline text-6xl tracking-tighter"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        Bespoke Management
      </motion.h2>
    </motion.div>
    <motion.div 
      className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
    >
      {[
        { icon: 'content_paste_search', title: 'Curation & Sourcing', desc: 'A dedicated curator manages the selection of rare marbles, reclaimed timbers, and bespoke fixtures from around the globe.' },
        { icon: 'engineering', title: 'Artisan Execution', desc: 'Our network of master craftsmen ensures that every joint, finish, and texture meets architectural standards of excellence.' },
        { icon: 'verified', title: 'Turnkey Handover', desc: 'White-glove project completion. We handle every permit, inspection, and detail, allowing you to simply walk into your new life.' }
      ].map((card, i) => (
        <motion.div 
          key={i} 
          className="bg-surface p-12 rounded-lg flex flex-col gap-6 hover:bg-surface-container-high transition-colors duration-500"
          variants={fadeInUp}
        >
          <motion.span 
            className="material-symbols-outlined text-primary text-5xl"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
          >
            {card.icon}
          </motion.span>
          <h3 className="font-headline text-2xl">{card.title}</h3>
          <p className="font-body text-secondary">{card.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

const MaterialTransformation = () => (
  <section className="px-12 mb-16">
    <div className="max-w-screen-2xl mx-auto">
      <motion.div 
        className="flex flex-col md:flex-row justify-between items-end mb-8 gap-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div 
          className="max-w-xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-headline text-3xl md:text-4xl tracking-tighter mb-4">Material Transformation</h2>
          <p className="font-body text-secondary text-base">Visualizing the intersection of raw materiality and refined design. This is the precision of the Atelier.</p>
        </motion.div>
        <motion.div 
          className="flex gap-4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          >
          <span className="font-headline text-3xl md:text-4xl tracking-tighter italic">2024 Collection</span>
        </motion.div>
      </motion.div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full md:h-[600px]"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <motion.div 
          className="md:col-span-7 relative group overflow-hidden rounded-lg"
          variants={fadeInUp}
        >
          <motion.img 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            alt="Kitchen Sanctuary" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMCDDL6NrXkoDfCfu0lUPn1tKCO86uYrX4XeJWAb0EfQWYJTF2vLmzxWV0-o-KH-tMud8whoZzXjbv9YohOJPNhGeJj_7tHKSATMEGiW9KkMwVFGznWxB564TnvvPNVJh1s9StYSrfiEbhrR0Wpfy5o191r__WQnMhrbgaPrphn_RpF2YzTZ62Q5Zctv-fkzOvk3pR-ianr9xFGoIFO3peMUIEYA_PoGs7MrKTtl3wKurvykw1K_h4XaUWFUgG-5i13kNjEkmR6p1F" 
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div 
            className="absolute inset-0 bg-on-surface/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-white font-headline text-2xl">Kitchen Sanctuary, Chelsea</p>
          </motion.div>
        </motion.div>
        <motion.div 
          className="md:col-span-5 grid grid-rows-2 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {[
            { title: 'The Slate Bath, Kyoto', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCQYte2GlvC58KLdSRrZGVAWEmHO_y-zOTRnyXqAJY8IIAOVt1zst2XYvLZbRiJG6B6ImPDUc1Ydw-gWqMMe0UfV6cba-uPnLSss0Eq2XM9hXdHFWewZW-oWmkxLPE2MzwhAnnodLOqugjJoDj7L7Zqc9_m625FgpZkbvk5LJw0xMgWF-klrwewT4xe58kyNqN9fJzUJv6iYeus_4dNt8zTC2gDTeXipbE9nDEVIuFo5YU9X649_bVihJVn2VAL-kaHiJvIYTY7Psd' },
            { title: 'Heritage Reimagined, Vienna', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVZaLlDDOSmFaHrF6LzkI3CGxgUqOd4VI7fKrPIARe36bK6QGretqRSwzM7z3zRsiUrjHnF7d2g7w9XzfuIF2i7KfCupZoKuTNnzlTkDQMfr2rePzvQmMOGLRq-fnHJNKUK4qOAS5keaOPWw8rlNvxvI-zr85rqi3ntz_Czst2z4aYMOeRv8evIMwIDv0cNX_d_fWHPNeVoasrVpkZGW2Y9cHUbubKN-8bJeHuZ9cFsCeJLEo4vXEtjS3vOimxfPKVnzXQszSlEzr7' }
          ].map((item, i) => (
            <motion.div key={i} className="relative group overflow-hidden rounded-lg" variants={fadeInUp}>
              <motion.img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt={item.title} 
                src={item.img} 
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.1 * (i + 1), ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.div 
                className="absolute inset-0 bg-on-surface/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-white font-headline text-xl">{item.title}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const HomeRenovation = () => (
  <main className="pt-12">
    <Hero />
    <StructuralRebirth />
    <BespokeManagement />
    <MaterialTransformation />
    
    <section className="px-12 mb-8">
      <motion.div 
        className="max-w-screen-2xl mx-auto relative overflow-hidden rounded-xl bg-on-surface text-surface py-32 px-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
          <motion.img 
            className="w-full h-full object-cover" 
            alt="Consultation background" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1ElTITCngnfnoBDQCKIKrN2H88m-dvDd4UfqP2xqXApYnvw4xpn2hZPP1ieC3_ZYiWiaqjChYNi7XJxT4Vc2aRcPtEVIeP810irUaqG6GJW-4ZVcPELEiuWdSZBweFaf9hWwnCYXkwMJePO9Z5Yzs28fohkV_LQp-tcc2p9IRZT4AVVIN_atsE_aclqTa_08koia1p-2snl0f5_igXxykTo1zNOV5MdEQM2TrB3_gVfLXVz0uxRrVZOgbMzg05uv8YHKZA-V4SJTD" 
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <motion.div 
          className="relative z-10 max-w-2xl"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="font-headline text-6xl tracking-tighter mb-8"
            variants={fadeInUp}
          >
            Ready to Curate Your Home's Future?
          </motion.h2>
          <motion.p 
            className="font-body text-xl text-surface-dim mb-12"
            variants={fadeInUp}
          >
            Every masterpiece begins with a conversation. Let our lead architects guide your renovation journey from concept to realization.
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-6" variants={fadeInUp}>
            <Link to="/contact" className="bg-primary-container text-on-primary-container px-10 py-5 rounded-md font-bold text-lg hover:bg-primary transition-colors inline-block">
              Request a Consultation
            </Link>
            <button className="border border-outline-variant/30 px-10 py-5 rounded-md font-medium text-lg hover:bg-surface/10 transition-colors">
              Download Brochure
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  </main>
);

export default HomeRenovation;
