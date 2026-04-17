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
  <section className="relative min-h-[700px] flex items-center overflow-hidden bg-surface-container-low px-8 md:px-20 py-12">
    <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <motion.div 
        className="lg:col-span-6 z-10"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.span 
          className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block font-label"
          variants={fadeInUp}
        >
          Bespoke Interiors
        </motion.span>
        <motion.h1 
          className="text-5xl md:text-6xl font-headline font-bold text-on-surface leading-tight mb-8 tracking-tighter"
          variants={fadeInUp}
        >
          The Art of <br/>
          <span className="text-primary italic">Vertical</span> Texture
        </motion.h1>
        <motion.p 
          className="text-on-surface-variant text-lg md:text-xl max-w-md leading-relaxed mb-10"
          variants={fadeInUp}
        >
          Sculptural wall solutions that redefine spatial perception. We blend artisanal craft with architectural precision to transform surfaces into experiences.
        </motion.p>
        <motion.div className="flex gap-4" variants={fadeInUp}>
          <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-4 rounded-md font-bold tracking-wide shadow-xl shadow-primary/20">
            Explore Collection
          </button>
        </motion.div>
      </motion.div>
      <motion.div 
        className="lg:col-span-6 relative"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div 
          className="relative z-10"
          initial={{ x: 16, y: 16 }}
          whileInView={{ x: 32, y: 16 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img 
            className="rounded-xl object-cover w-full h-[450px] shadow-2xl shadow-[#1b1c1a]/10" 
            alt="Textured feature wall" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsyPwy5QtZG76xBEqMm1oQ0ZsrrfYkPS_YSB0SC1v9QLdvBBn30gx_V5Yqnnx4TeVUSj6YImx8cmwCY7DiQik2-Ck3EiKJVM6CpOTN-ZVeMozwC1KvJcITATbOLsZV4teOVUuuedrUjezx9DDF4qSKwJPvhliNQ6bAKHnMSn-dCNzjhgHIDvdHv1wzCnMYvLe5pbahT32eZMWiHpfw4LykWGql-L1m_JJABhGrFAYdG9O3n_6Kre1arcy-2ZaKDDh8sEQuqUtyW38W"
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
        <motion.div 
          className="absolute top-0 right-0 w-3/4 h-3/4 bg-surface-container-highest -z-0 rounded-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
      </motion.div>
    </div>
  </section>
);

const MaterialTextures = () => (
  <section className="bg-surface px-8 md:px-20 py-16 overflow-hidden">
    <div className="max-w-7xl mx-auto">
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
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-on-surface mb-4">Material Textures</h2>
          <p className="text-on-surface-variant text-base">A curated selection of finishes designed to interact with light and shadow in unique ways.</p>
        </motion.div>
        <motion.div 
          className="text-primary font-headline italic text-lg"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          The Curated Palette
        </motion.div>
      </motion.div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-12"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        {[
          { 
            title: 'Architectural Silk', 
            desc: 'Liquid-smooth finishes that capture ambient light, creating a soft atmospheric glow throughout the room.',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDId3IcBavqZ1EzqCX8qt3CisWQ4JFDDtWkeVVkXXdF7A2jK3ilxAHL1ccA6MNUJMNC0QOXiYRZShNz9JF0XF1Lxtfqh5G9JwrfQqdclPBQx5g6ULt7OkNPNOcc4kmxNkBodEx58de7nYToN5zbNC-zIJsKSn4XnSJ0EPOinYX36odIQKyfAcZIT8F4DRj4l-LZULsV-F2ps0bFR-AkX177_fOqZTYzN1rB5SmyyomLffLRL_5Ai_ZxEb6Oq_EgOxvVq0Hdb2rQT02I'
          },
          { 
            title: 'Honest Wood', 
            desc: 'FSC-certified timber, hand-selected for grain consistency and warmth, milled to millimeter precision.',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACUKadQM240Nyv9tESVNt5LCiub6PPNrkCFSOp8gB6PEAw2UHwtOUnczZhJjd5IIoVBSfhR94wZ_3BcU1_ECXsatm76VJlTmfK8l8TnPZ8WxO4ZvcoTRtO2BTWn9R3NqZuH4RPmis6JsI-X_8Jc0I68KRekpS7e_XqNxIDZcHZKYaqNx5IgRoNWEbg48qn8PVUfIshxH8nhPWkKBPRDdqdCm0UdJwMWR9gH30I7QQYwvjB207ez7Eo40ga74UcH5NbZOSTLbdyLHzE',
            offset: true
          },
          { 
            title: 'Brutal Stone', 
            desc: 'Raw travertine and limestone veneers that anchor a space with timeless geological permanence.',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2yO2Vb9WQQsDmTHuLwkefXjlIYT4tzng5p2ahk3cWTcOpT2pReE8HlSJu7V1FpFi5OAj7dL1dP2WWT5jXRlg_u7Ll_MpV8bqDBK_5WlVp8OnguCQztXYMuLdHT_LNt3B_6Dks62-j6v_s5MN4sgiXFwJA3Nk9a7uKH0TlKyQxuhKSUd2Cy3ntvlwSFccnEc2TERQyW4vYiqqX3JjJs6W1ym6k0iMNZuIvOQy8ngFP2oVDkzOXKhIDDFcug0nbZ2iaB8sR_ow-HDUj'
          }
        ].map((item, i) => (
          <motion.div 
            key={i} 
            className={`group ${item.offset ? 'md:translate-y-12' : ''}`}
            variants={fadeInUp}
          >
            <motion.div 
              className="relative overflow-hidden rounded-xl mb-6 bg-surface-container-low aspect-[3/4]"
              initial={{ scale: 1.05, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt={item.title} 
                src={item.img} 
              />
              <div className="absolute inset-0 bg-on-surface/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </motion.div>
            <motion.h3 
              className="text-2xl font-headline font-bold mb-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {item.title}
            </motion.h3>
            <motion.p 
              className="text-on-surface-variant font-body text-sm leading-relaxed"
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

const ArtisanalApplication = () => (
  <section className="bg-surface-container-low py-16 px-8 md:px-20 relative">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <motion.div 
        className="relative order-2 lg:order-1"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div 
          className="bg-surface-container-highest rounded-2xl p-4 shadow-xl shadow-on-surface/5"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img 
            className="rounded-xl w-full object-cover aspect-video" 
            alt="Craftsman installation" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqTMYuHKV5XdcQeYNiWp5riu0l3f5xDLzjDoFuKNI8zvVEhv5S8-WwgeRSJeX5QjcQ2S-16haXKPHw3dO9bUJ2GN_3bVPYYPOJMbrzSHpdYXRoNWoCCxoXoVxz5U6AH4ZMarDNM1y1fvK1EqmsKqB1yAiHv2soCvDMPfw6FbEU7p8dKE1o5TWWBTcXlWzEKftQP7N0GPHhidIi2aZ4ArWmiTqtZWGDS2qobrEP1b6mPgSO8UpT3-6sQ4ufQT3xro0Pag10zaEJKeN2" 
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
        <motion.div 
          className="absolute -bottom-8 -right-8 bg-primary text-on-primary p-6 rounded-lg shadow-xl shadow-primary/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-3xl font-headline font-bold block mb-1">01</span>
          <span className="text-[10px] uppercase tracking-widest font-label font-bold">Micron Precision</span>
        </motion.div>
      </motion.div>
      <motion.div 
        className="order-1 lg:order-2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-headline font-bold text-on-surface mb-8 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Artisanal Application
        </motion.h2>
        <motion.div 
          className="space-y-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {[
            { icon: 'architecture', title: 'Structural Mapping', desc: 'We laser-scan every environment to create a digital twin, ensuring a seamless fit for every custom panel segment.' },
            { icon: 'handyman', title: 'Manual Refinement', desc: 'Every corner is hand-finished by master carpenters, blending modern CNC precision with legacy craft techniques.' },
            { icon: 'auto_awesome', title: 'Invisible Integration', desc: 'Smart technology, climate vents, and atmospheric lighting are hidden within the panel structure for a pure aesthetic.' }
          ].map((feature, i) => (
            <motion.div key={i} className="flex gap-6" variants={fadeInUp}>
              <span className="material-symbols-outlined text-primary text-3xl shrink-0">{feature.icon}</span>
              <div>
                <h4 className="text-xl font-bold font-headline mb-2">{feature.title}</h4>
                <p className="text-on-surface-variant font-body">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const WallPanelling = () => (
  <main className="pt-12">
    <Hero />
    <MaterialTextures />
    <ArtisanalApplication />
    
    <section className="bg-background py-16 px-8 md:px-20 text-center">
      <motion.div 
        className="max-w-3xl mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div 
          className="inline-block px-4 py-1 bg-primary-fixed text-on-primary-fixed-variant rounded-full text-[10px] font-bold tracking-widest uppercase mb-6"
          variants={fadeInUp}
        >
          Direct Consultation
        </motion.div>
        <motion.h2 
          className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-6"
          variants={fadeInUp}
        >
          Feel the Architecture
        </motion.h2>
        <motion.p 
          className="text-on-surface-variant text-lg mb-10 leading-relaxed"
          variants={fadeInUp}
        >
          Visuals capture the form, but texture must be experienced. Request our "Atelier Box" featuring curated samples of our signature silk, wood, and stone finishes.
        </motion.p>
        <motion.div 
          className="flex flex-col md:flex-row gap-6 justify-center"
          variants={fadeInUp}
        >
          <Link to="/portfolio" className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-12 py-4 rounded-md font-bold text-base shadow-xl shadow-primary/20">
            Request a Sample
          </Link>
          <button className="bg-surface-container-high text-on-surface px-12 py-4 rounded-md font-bold text-base hover:bg-surface-container-highest transition-colors">
            Download Catalog
          </button>
        </motion.div>
      </motion.div>
    </section>
  </main>
);

export default WallPanelling;
