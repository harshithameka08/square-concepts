import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] }
};

const Hero = () => (
  <section className="relative h-[70vh] flex items-end overflow-hidden">
    <div className="absolute top-8 left-8 md:top-12 md:left-12 z-50">
      <Link to="/portfolio" className="text-white hover:text-primary hover:-translate-x-2 transition-all inline-block drop-shadow-lg">
        <span className="material-symbols-outlined text-4xl">arrow_back</span>
      </Link>
    </div>
    <div className="absolute inset-0 z-0">
      <img 
        className="w-full h-full object-cover"
        alt="The Culinaire Studio"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbBgS4NhHn9SQWZ5yJrKvIYxXWvCufGLfrN6J_ncd8EXcqk394gZFla4to0OJy7vhDyoeP2dp5IAS7m_vBNAQ0mAym4ihrAdAKLWhnRUMlQvzBHh4UCdqeVxj4ydEFjLDD8eQlMzguy3nFaziuSUtIvIp1m1GQvx2m48Kw1hp3szAEFhfa6Nzso3j2X3Ajj2jAyFl5xRHw01IskR5g2_loZJcLAO6Ehjzrl70PYQrZSn3fYUT6HB5GdzPhjqTHcL-TGc3eCVDbR0TK"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
    </div>
    <motion.div 
      className="relative z-10 px-8 lg:px-16 pb-16 w-full flex flex-col items-center text-center"
      initial="initial"
      animate="animate"
      variants={fadeInUp}
    >
      <span className="text-primary font-extrabold tracking-[0.2em] uppercase text-sm mb-4 block drop-shadow-lg">Residential • Tokyo</span>
      <h1 className="text-5xl md:text-7xl font-headline tracking-tighter text-white drop-shadow-xl">The Culinaire Studio</h1>
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-8 pt-8 border-t border-white/20">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-1">Area</span>
          <span className="text-white text-sm md:text-base drop-shadow-md">2,800 SQ. FT.</span>
        </div>
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-1">Location</span>
          <span className="text-white text-sm md:text-base drop-shadow-md">Tokyo, Japan</span>
        </div>
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-1">Client</span>
          <span className="text-white text-sm md:text-base drop-shadow-md">Private Chef Residence</span>
        </div>
      </div>
    </motion.div>
  </section>
);

const ProjectDetails = () => (
  <section className="py-24 px-8 lg:px-16 max-w-screen-2xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="text-3xl font-headline mb-6">Culinary Artistry at Home</h2>
        <p className="text-on-surface-variant leading-relaxed mb-6">
          The Culinaire Studio represents the pinnacle of residential kitchen design. Created for a Michelin-starred chef, this space transforms cooking into a performance art.
        </p>
        <p className="text-on-surface-variant leading-relaxed mb-8">
          Professional-grade appliances are seamlessly integrated into warm, residential aesthetics. The open-plan design allows the kitchen to serve as both a workspace and an intimate dining venue, perfect for hosting gatherings of discerning guests.
        </p>
        <div className="grid grid-cols-2 gap-8 border-t border-outline-variant/30 pt-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">Year</span>
            <span className="text-on-surface text-lg">2023</span>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">Area</span>
            <span className="text-on-surface text-lg">2,800 SQ. FT.</span>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">Location</span>
            <span className="text-on-surface text-lg">Tokyo, Japan</span>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">Type</span>
            <span className="text-on-surface text-lg">Residential</span>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <img 
          className="rounded-xl w-full aspect-[4/3] object-cover"
          alt="Interior Detail"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDId3IcBavqZ1EzqCX8qt3CisWQ4JFDDtWkeVVkXXdF7A2jK3ilxAHL1ccA6MNUJMNC0QOXiYRZShNz9JF0XF1Lxtfqh5G9JwrfQqdclPBQx5g6ULt7OkNPNOcc4kmxNkBodEx58de7nYToN5zbNC-zIJsKSn4XnSJ0EPOinYX36odIQKyfAcZIT8F4DRj4l-LZULsV-F2ps0bFR-AkX177_fOqZTYzN1rB5SmyyomLffLRL_5Ai_ZxEb6Oq_EgOxvVq0Hdb2rQT02I"
        />
      </motion.div>
    </div>
  </section>
);

const Gallery = () => (
  <section className="py-16 px-8 lg:px-16 bg-surface-container-low">
    <div className="max-w-screen-2xl mx-auto">
      <motion.h2 
        className="text-3xl font-headline mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        Gallery
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDS-AzDqc1qaBF0LUCEZbpA25uHxR1i0BtjNEMhJ-ylatwm636faUz7UeeLaZEC3zbSmRtMaoninwR1_gmAnZoh_UszBcJxrP53Olkq1dLhWXcPDyigAWePVySfosMkL_LzYTbkTcWZLpSCVAIWBpaT6gx3tJLgcZ8jvcYE4TiQNl0jO8z4LZkTjvpVg5bNEpDnii4GXTYyniaef8ZW6JcKdKjHtjaW7VLVRxrxHBn4Shxmi4B_jweMANUmwiSRNdaxaxZRKovvcT0b",
          "https://lh3.googleusercontent.com/aida-public/AB6AXuByzQZ-8FzAvdY27S8gfeUjHNX0PmRrqo3S8U1duv0B2UdiM_aU6nyHse8IAAyPeUbyCfhMYfpEusEfqS3Ee3mv0jWxP8BS9mCkeUkOH0T9tiicj40l61lgvGUO5rmjCA83eggN638ISAou1V0cj7PBQqsFQ1fvnbmtVRqFBHcJaFkJhrGuYVUlAayzIJ-p3kB0HksULKDv2y59EhD464BjyS7sLDerJgmbag-JTJKrihVN4hK1PqezIJDF-98LBfscuNFy_PLEZtIu",
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBXXcex6K_iie5UIoRMH8Y7h0f5rt60SKnvlFwgtMKsgFSGgXVcbZC6eTbZy7MPiBDlQTRRweVTbJxmitmpfnnWt1cT2mESaiKHQfBaoJXRcuLWlOw5_5Jvj0fV7Jc7EGh2BdhC9Os3NYSWqJ2ot_27bNAXmxHq8hXmBLCL48OQaZI87YM1-YXCf9OHeyJDhQHf-_uTLnvVcr7MpBNftSZBw3NHjWmpugoGHj9eoWhV54z9gocE6TDAreYuECyAPwCbx1PgmlPIFbq1"
        ].map((img, i) => (
          <motion.div
            key={i}
            className="aspect-[4/5] rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <img 
              className="w-full h-full object-cover"
              alt={`Gallery ${i + 1}`}
              src={img}
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const TheCulinaireStudio = () => (
  <main className="pt-20">
    <Hero />
    <ProjectDetails />
    <Gallery />
  </main>
);

export default TheCulinaireStudio;
