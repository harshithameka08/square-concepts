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
        alt="Lumina Creative Hub"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-cGIcbSjnfcG3-zDVzoag_OsBMND_eqKgZmhO1X3l3lBrw-72-94lmhWee7axTUV9zpw9Rsw5hbmtdkD4VoGNPKZe_lkxrij_m36xCiktiXAL4631BtaTekXzSlLyOOYs5fgZaj7vcIvwoPFPT63Yjp5anqw7oMwUf1YfbN5ucSXY0otZkzoM7HRHz4_hNFUvnG8-xB-3iG_u3XF3FQFPdU6WobEir6v5Hl7bLn3VM4ffnyZZnuvkb2pHV2EVoOHcLn9rb1oFwspH"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
    </div>
    <motion.div 
      className="relative z-10 px-8 lg:px-16 pb-16 w-full flex flex-col items-center text-center"
      initial="initial"
      animate="animate"
      variants={fadeInUp}
    >
      <span className="text-primary font-extrabold tracking-[0.2em] uppercase text-sm mb-4 block drop-shadow-lg">Commercial • Berlin</span>
      <h1 className="text-5xl md:text-7xl font-headline tracking-tighter text-white drop-shadow-xl">Lumina Creative Hub</h1>
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-8 pt-8 border-t border-white/20">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-1">Area</span>
          <span className="text-white text-sm md:text-base drop-shadow-md">12,000 SQ. FT.</span>
        </div>
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-1">Location</span>
          <span className="text-white text-sm md:text-base drop-shadow-md">Berlin, Germany</span>
        </div>
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-1">Client</span>
          <span className="text-white text-sm md:text-base drop-shadow-md">Lumina Collective</span>
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
        <h2 className="text-3xl font-headline mb-6">Where Nature Meets Industry</h2>
        <p className="text-on-surface-variant leading-relaxed mb-6">
          A biophilic workspace that blurs the boundaries between the industrial landscape and internal ecosystems. Lumina Creative Hub redefines the modern office as a living, breathing environment.
        </p>
        <p className="text-on-surface-variant leading-relaxed mb-8">
          Floor-to-ceiling glass walls dissolve the separation between interior and exterior, while integrated planting systems and natural ventilation create a workspace that nurtures creativity and wellbeing.
        </p>
        <div className="grid grid-cols-2 gap-8 border-t border-outline-variant/30 pt-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">Year</span>
            <span className="text-on-surface text-lg">2022</span>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">Area</span>
            <span className="text-on-surface text-lg">12,000 SQ. FT.</span>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">Location</span>
            <span className="text-on-surface text-lg">Berlin, Germany</span>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">Type</span>
            <span className="text-on-surface text-lg">Commercial</span>
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
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWWxE2BqbGItOBIrzjIi4afdK1Mwx7Epv6By_7kJ6iS2AJ2DvB_Bs3DKrGg_zjWo39HfLNH1tWfLZF1R_mvxEcgpMA1TiDvu-8ykBBoIR8LSaS0u9Ty4K60vcGHOs7LkkTElAiEwQH57JRO43KyZf2BXNBXjE_5oX4kL635u4tDmIxxuOn9kgX1ykr1D83mW-E08TDRb8AT5rSjgcryC-pn8orDg4DExnbXBosKMeavrQp_-sYzWNObFtYur3cRJohkT46g12UoQf3"
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
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDq1rDYL5ptDZHxSkC2UeX9jdJzm3EwnnkSHpfixjEB1npxWJKg2M8zWBJkTZEzx2GIv3p2sQzjrWPRmoRAgaB7FC9uVQ6-du1bmvz-uZlkaVca1Z77qJRqpUUQf9YhsfmoNEZJPKNvX3dpqYfGVh_xgsl1O-2MWKeclY7O435AXvpWtcwHgIsqP7PytzH7xaN_2ShYWLkEKWgj5b1RLh6QyNX_vZWxjnuCeNZwM_PWs_yYu5LAHOr15Hl3e4ROupWjkHA_21uI6sSB",
          "https://lh3.googleusercontent.com/aida-public/AB6AXuATuZje8gmP0BuZ22ClafQjdgd3NyX5c1yMvpYkrllA0YiHNco3R2l-kb6xrC0-WfuyReDwWpJSxb9BaYg9pm3RyooSalAJi_niL9teqjoUVyPDA4X9MJifeFoU3DdYPkpaLn-GFnclcfRNbwZuYePbYsrkDt-IHhrC1v5w7dNZ5Cir0HMlDsRBSKgEPLsoRbcBxTLiQuUB8t7QW4uZKepHJ9nie36oCufZqeMdo7syNPgodl9jjz7gOwumoxwGW_POes9IbY0vP2Ld",
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDrJ1vA3CxIb78rGeIw5-Pcfs7k5pLuSzw9uYr2yv7g9GaHFCyYvp0pOx4vo0SBto-optdhVTCotrPB2m5Ra5o9Q0xYX0pJcHUKYQCL9q6iRvGbB9DUSpY_K6yuPXe9OAC__FVGTWWwRNnhVCgdD1moR7x5CxWi8Y-I1zxJZghYYYUjip6FwHo9HJPpa5NFD0iSBxPSIuS1S3buOCjCgNrrmgEPEkvzMI-uv08BtRUNs59oQFduCPueng0WJoSd8o4VwMCXL0wNCXbl"
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

const LuminaCreativeHub = () => (
  <main className="pt-20">
    <Hero />
    <ProjectDetails />
    <Gallery />
  </main>
);

export default LuminaCreativeHub;
