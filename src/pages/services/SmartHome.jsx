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
  <section className="relative min-h-[600px] flex items-center px-8 md:px-24 overflow-hidden pt-20">
    <div className="absolute inset-0 z-0">
      <motion.img 
        className="w-full h-full object-cover brightness-[0.85]" 
        alt="Ultra-modern luxury living room with smart interface" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwFNF6Lzw1rTYbQILJXiMT9KrNW44vN0jqcd_Q1BFl7Ux1BytCdnWcnYGriHT4dZNzicxMOqcNSuUwmnynjWsIsBJVekJjkUEIjJYTHFZOqd7qMVYcJKUIw6AXppea8gXYDAojrSZMfkY3GKT67O8DB8CnVyoUkoc7GEEwyHe7mEomFsyrytXCTyjO1lpTeeiXb9xFGWmsh8Qhw8Y4DI1MLMh0QpivV0TdjSXCIgC3xYYQuCLvwTL63-mN8CikWgbvU6DMBP79S02L"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-900/60 via-stone-900/10 to-transparent"></div>
    </div>
    <motion.div 
      className="relative z-10 max-w-2xl"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      <motion.span 
        className="font-label text-primary-fixed-dim bg-white/5 px-4 py-1 rounded-full font-bold uppercase tracking-[0.2em] text-sm mb-6 block w-fit"
        variants={fadeInUp}
      >
        Intelligent Living
      </motion.span>
      <motion.h1 
        className="font-headline text-5xl md:text-6xl leading-tight mb-8 text-white tracking-tighter"
        variants={fadeInUp}
      >
        Smart Home <br/><span className="italic text-primary-fixed-dim">Integration</span>
      </motion.h1>
      <motion.p 
        className="font-body text-lg text-stone-200 leading-relaxed mb-10 max-w-lg"
        variants={fadeInUp}
      >
        The ultimate architectural luxury is technology that disappears. We weave intelligent systems into the very fabric of your home, creating an environment that anticipates your every need.
      </motion.p>
      <motion.div className="flex items-center gap-6" variants={fadeInUp}>
        <Link to="/contact" className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-md font-bold text-lg tracking-wide hover:shadow-lg transition-transform hover:scale-105 active:scale-95 inline-block">
          Consultation
        </Link>
        <Link to="/portfolio" className="flex items-center gap-2 text-white font-bold group text-base">
          Portfolio 
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </Link>
      </motion.div>
    </motion.div>
  </section>
);

const InvisibleTech = () => (
  <section className="py-16 px-8 md:px-24 bg-surface-container-low">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
      <motion.div 
        className="md:col-span-5 relative"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div 
          className="absolute -top-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        <motion.h2 
          className="font-headline text-3xl md:text-4xl mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Invisible Tech <br/>Architecture
        </motion.h2>
        <motion.p 
          className="font-body text-on-surface-variant text-base mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          True sophistication is the absence of clutter. Our architectural approach ensures hardware is recessed, concealed, and harmonized with your interior design. 
        </motion.p>
        <motion.ul 
          className="space-y-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.li className="flex items-start gap-4" variants={fadeInUp}>
            <span className="material-symbols-outlined text-primary">architecture</span>
            <div>
              <h4 className="font-bold text-on-surface mb-0.5 text-sm">Structural Concealment</h4>
              <p className="text-xs text-on-surface-variant">Speakers and sensors embedded behind acoustic plaster and bespoke paneling.</p>
            </div>
          </motion.li>
          <motion.li className="flex items-start gap-4" variants={fadeInUp}>
            <span className="material-symbols-outlined text-primary">cable</span>
            <div>
              <h4 className="font-bold text-on-surface mb-0.5 text-sm">Zero-Footprint Wiring</h4>
              <p className="text-xs text-on-surface-variant">Centralized rack systems that eliminate visual noise and electronic waste.</p>
            </div>
          </motion.li>
        </motion.ul>
      </motion.div>
      <motion.div 
        className="md:col-span-7 flex justify-end"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative w-full h-[400px] max-w-lg">
          <motion.div 
            className="absolute inset-0 bg-surface-tint opacity-10 rounded-lg"
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: 16, y: 16 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>
          <motion.img 
            className="relative z-10 w-full h-full object-cover rounded-lg shadow-xl shadow-on-surface/5" 
            alt="Minimalist smart controller" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9qfyXPG94XXN5PW-Hek_HHDA0r_iD6Bk0RezBfXgkRx39Z0I9Mq3AMektOel1JWchpFCOirTnKLNPJCJ0gGGSdR6xY0bxIFKXJNHzk97hmdrTWtqghe6rqDc5shDbFlD5CPxeH00RgQMEKKodf77ZjFQIxqApBVrLROalI5afhx-ZCRC4IMJ3i-Il9OHguiJq4Ikx93rltHTKDOq0_nQcvU883vAqSOlOQ_zWE9bMWqd8gLfW9ol4B5yuihoQLzwhZvAIvbgBbxpg"
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </motion.div>
    </div>
  </section>
);

const IntuitiveScenes = () => (
  <section className="pt-12 pb-24 px-8 md:px-24 bg-surface">
    <motion.div 
      className="text-center mb-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.h2 
        className="font-headline text-4xl md:text-6xl mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        Intuitive Scenes
      </motion.h2>
      <motion.p 
        className="font-body text-on-surface-variant max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        One touch to orchestrate your entire environment. Transitions that feel natural, never mechanical.
      </motion.p>
    </motion.div>
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full md:h-[600px]"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
    >
      <motion.div 
        className="group relative overflow-hidden rounded-xl bg-surface-container-high col-span-1 md:row-span-2"
        variants={fadeInUp}
      >
        <motion.img 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          alt="Morning Rise" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuxxOkGZHwErz-UPCvoIONAVaTRN-dRmmC4qRBsHnFumj-HyR7qWmyxl1wmM2D9D6EyPTKQbqAVLJtie0vuYLogYFcgn40FpdG2mm0tSa6Dz_Gl2NJNVYZLqAL6og0kQDYAKQHqfJS9idWizabmtym_3nbhw6cZ3HtlNneU5XQwDGMuROCQUTlq_8EmO87_bEzuM3PYYwoe43J5r3R1ooklAf1vgr4QXuAE8NhDC4guLnUc6boqQgm1s3jtcXffSNTPNzd6XIABZHB" 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-0 p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-primary-container font-bold text-xs uppercase tracking-widest mb-2 block">07:00 AM</span>
          <h3 className="font-headline text-3xl text-surface mb-4">Morning Rise</h3>
          <p className="text-surface/80 text-sm leading-relaxed">Gradual lighting mimics the sunrise while curtains tilt to maintain privacy yet invite the morning glow.</p>
        </motion.div>
      </motion.div>
      <motion.div 
        className="group relative overflow-hidden rounded-xl bg-surface-container-high col-span-1"
        variants={fadeInUp}
      >
        <motion.img 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          alt="Evening Repose" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfHMUPk7lOYhCSVtriR46eX6aqtTAz-AuJKU5rz4jLChrXu3DXNxnZ_K6qefbEpzL9pMdmu7HXqV6wR2igwaNJx1DN23NhnVgEG0tGMA3SgGTgFeTUAcGF22hlVVCkthqmQtFNB67urUnSaiEBrqUOjxqYRfdNDd30KII7xnSibZBDE_PmjdHc7fj7Fl5MpsdVhYY60EOCaYLh2lKExnjWNJZa_15ncwLFSTT2cEOfC6Rj09yMaV_DVgCzdEReZi10yNvh_v36PkOe" 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-0 p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="font-headline text-2xl text-surface mb-2">Evening Repose</h3>
          <p className="text-surface/80 text-xs">Warm color temperatures and ambient soundscapes set the stage for transition into rest.</p>
        </motion.div>
      </motion.div>
      <motion.div 
        className="group relative overflow-hidden rounded-xl bg-surface-container-high col-span-1"
        variants={fadeInUp}
      >
        <motion.img 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          alt="Guest Soiree" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3K7_bzJ5RS3PJgSm4Zwj94_EKMOXmnmVQ0hFIv7S4jAkeegztdTjMjXeoLd7zjAu0LFjEkVQX8eQV8uqBra-D4kZPYisDA0GnQBbVo4CpV-qxLr4serNJOjoTnlzpNYXx5ZIAxtRkbi1ufU7hMM1zCa9ST7_9mutpYpUAahY0hlSwxh3iA4n-QsPfB6bkldwi6bIr0dcoZuG4AkOZNYp--HbAMNwtz4sJFAQpR2tSHeVVCmfFMv_iiJyxqBsmDjc-tN5FE-qUaoSD" 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-0 p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="font-headline text-2xl text-surface mb-2">Guest Soirée</h3>
          <p className="text-surface/80 text-xs">High-fidelity audio distribution and dynamic lighting zones designed for social circulation.</p>
        </motion.div>
      </motion.div>
      <motion.div 
        className="bg-surface-container-highest p-8 flex flex-col justify-center rounded-xl md:col-span-2"
        variants={fadeInUp}
      >
        <div className="flex items-center gap-12">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="font-headline text-2xl mb-4">The Command Center</h3>
            <p className="text-on-surface-variant mb-6 italic text-sm">"Atelier Appsulate systems learn from your behavior, suggesting scenes before you even reach for the wall panel."</p>
            <motion.div 
              className="flex gap-4"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span className="bg-surface px-4 py-2 rounded-full text-xs font-bold border border-outline-variant/20" variants={fadeInUp}>Voice Control</motion.span>
              <motion.span className="bg-surface px-4 py-2 rounded-full text-xs font-bold border border-outline-variant/20" variants={fadeInUp}>Biometric Access</motion.span>
            </motion.div>
          </motion.div>
          <motion.div 
            className="hidden md:block w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="material-symbols-outlined text-primary text-5xl">settings_input_component</span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

const SecureEcosystems = () => (
  <section className="pt-12 pb-24 px-8 md:px-24 bg-surface-container">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
      <motion.div 
        className="w-full md:w-1/2 order-2 md:order-1"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div 
          className="grid grid-cols-2 gap-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {[
            { icon: 'encrypted', title: 'Fortified Privacy', desc: 'Local processing ensures your data never leaves your home network.' },
            { icon: 'videocam', title: 'Neural Vision', desc: 'AI-driven perimeter detection that distinguishes residents from visitors.', offset: true },
            { icon: 'key', title: 'Invisible Entry', desc: 'Frictionless biometric entry points disguised as architectural details.' },
            { icon: 'gpp_good', title: 'Active Defense', desc: 'Automated "Mockupancy" light patterns to simulate presence while you travel.', offset: true }
          ].map((feature, i) => (
            <motion.div 
              key={i} 
              className={`bg-background p-8 rounded-lg shadow-sm ${feature.offset ? 'translate-y-8' : ''}`}
              variants={fadeInUp}
            >
              <motion.span 
                className="material-symbols-outlined text-primary text-4xl mb-4" 
                style={{ fontVariationSettings: "'FILL' 1" }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
              >
                {feature.icon}
              </motion.span>
              <h4 className="font-bold text-on-surface mb-2">{feature.title}</h4>
              <p className="text-xs text-on-surface-variant">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <motion.div 
        className="w-full md:w-1/2 order-1 md:order-2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.h2 
          className="font-headline text-4xl md:text-5xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Secure Ecosystems
        </motion.h2>
        <motion.p 
          className="font-body text-on-surface-variant text-lg mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          In an interconnected world, security is the foundation of peace. Our ecosystems prioritize data sovereignty and physical perimeter intelligence, wrapped in a user experience that remains completely intuitive.
        </motion.p>
        <motion.div 
          className="h-[1px] w-full bg-outline-variant/30 mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        <motion.div 
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img 
            className="w-16 h-16 rounded-full object-cover" 
            alt="Security Director" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWJHFEJUteZHzdNWue3Hv-T-T_t8JNXPDBK0vRJ21NwX7w0Dkq172ApulRIOANU59qq15qVcjbjRerMHDi7NH2SWONgBmbc8eRA_mB2ssFsAmu74BArFtvolKiV6W4LfuDUr1gUMw9creMzQUF2zta7Nmm6WU86WurjJ2vWNPtjew88VOzBnBzLy6lU1UesSbeGxr8Qo66YP3Bp91XG0W6NzGRBA5MpsDuZpbyzFkUzN72QEqn7xvNEDGzJBKzJ-BGMq3m2tPr9qXT" 
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
          <div>
            <p className="font-bold text-on-surface">Director of Security</p>
            <p className="text-sm text-on-surface-variant italic">"We design security to be felt, not seen."</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const SmartHome = () => (
  <main>
    <Hero />
    <InvisibleTech />
    <IntuitiveScenes />
    <SecureEcosystems />
    
    <section className="py-16 px-8 md:px-24 text-center">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 
          className="font-headline text-3xl md:text-4xl mb-8 tracking-tight"
          variants={fadeInUp}
        >
          Ready to evolve your <span className="text-primary italic">living space</span>?
        </motion.h2>
        <motion.div variants={fadeInUp}>
          <Link to="/contact" className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-4 rounded-md font-bold text-base tracking-wide hover:scale-105 transition-transform shadow-2xl shadow-primary/20 inline-block">
            System Design Consultation
          </Link>
        </motion.div>
      </motion.div>
    </section>
  </main>
);

export default SmartHome;
