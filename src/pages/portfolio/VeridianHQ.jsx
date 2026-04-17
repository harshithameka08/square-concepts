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
        alt="Veridian HQ"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWWxE2BqbGItOBIrzjIi4afdK1Mwx7Epv6By_7kJ6iS2AJ2DvB_Bs3DKrGg_zjWo39HfLNH1tWfLZF1R_mvxEcgpMA1TiDvu-8ykBBoIR8LSaS0u9Ty4K60vcGHOs7LkkTElAiEwQH57JRO43KyZf2BXNBXjE_5oX4kL635u4tDmIxxuOn9kgX1ykr1D83mW-E08TDRb8AT5rSjgcryC-pn8orDg4DExnbXBosKMeavrQp_-sYzWNObFtYur3cRJohkT46g12UoQf3"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
    </div>
    <motion.div 
      className="relative z-10 px-8 lg:px-16 pb-16 w-full flex flex-col items-center text-center"
      initial="initial"
      animate="animate"
      variants={fadeInUp}
    >
      <span className="text-primary font-extrabold tracking-[0.2em] uppercase text-sm mb-4 block drop-shadow-lg">Commercial • Oslo</span>
      <h1 className="text-5xl md:text-7xl font-headline tracking-tighter text-white drop-shadow-xl">Veridian HQ</h1>
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-8 pt-8 border-t border-white/20">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-1">Area</span>
          <span className="text-white text-sm md:text-base drop-shadow-md">45,000 SQ. FT.</span>
        </div>
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-1">Location</span>
          <span className="text-white text-sm md:text-base drop-shadow-md">Oslo, Norway</span>
        </div>
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-1">Client</span>
          <span className="text-white text-sm md:text-base drop-shadow-md">Veridian Corp</span>
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
        <h2 className="text-3xl font-headline mb-6">Sustainable Innovation</h2>
        <p className="text-on-surface-variant leading-relaxed mb-6">
          Veridian HQ stands as a testament to sustainable corporate architecture. This headquarters seamlessly integrates cutting-edge green technology with sophisticated Scandinavian design principles.
        </p>
        <p className="text-on-surface-variant leading-relaxed mb-8">
          The building achieves carbon neutrality through innovative solar integration, geothermal heating, and a living facade system. Inside, flexible workspaces adapt to the evolving needs of a dynamic workforce.
        </p>
        <div className="grid grid-cols-2 gap-8 border-t border-outline-variant/30 pt-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">Year</span>
            <span className="text-on-surface text-lg">2022</span>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">Area</span>
            <span className="text-on-surface text-lg">45,000 SQ. FT.</span>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">Location</span>
            <span className="text-on-surface text-lg">Oslo, Norway</span>
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
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsyPwy5QtZG76xBEqMm1oQ0ZsrrfYkPS_YSB0SC1v9QLdvBBn30gx_V5Yqnnx4TeVUSj6YImx8cmwCY7DiQik2-Ck3EiKJVM6CpOTN-ZVeMozwC1KvJcITATbOLsZV4teOVUuuedrUjezx9DDF4qSKwJPvhliNQ6bAKHnMSn-dCNzjhgHIDvdHv1wzCnMYvLe5pbahT32eZMWiHpfw4LykWGql-L1m_JJABhGrFAYdG9O3n_6Kre1arcy-2ZaKDDh8sEQuqUtyW38W"
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
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBlYns0aO3jd8bhV62m4kVH8b8ZRjbV8wtRH6-67dVqpiPJ6xml8-Gb2Kbjbm-j-9v1p0RrlsnduEWZvZtEcMco5uFDTHyM6Y-Mz99e01OeDLSB2ODz1jfOWw5zuOvnwW3lHvRraRGzlmT1cmgsqbIbeaOYKHnVzCLN2kuGFJQSWBkukTxh4CSAF8k3o0sXVgqVlBT6WXYTjeo0R3IUtMPsSngmy-8hv7dHn-qziZk7RG-gYdWVHUqr6WtVzq7iYCzBjlKz9xnlLOgq",
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCHVjf7Wo8akLpYoVxpclA_BZX1tJRoMVOFoAAE8v-V8UVBLfNV4j4fU6Tfsl-f_8gqWo5zKyn8gSXIK1mYPsgSQOgpyVehE0slrYyxge9JnlkPcyxj_P4FHpX84rfIEJe-LLNYIrK6g1UL66u3n4XZ54SHVgm34DRRkq4wP9yO3KXJvodp-VmGEN6Q57al1kLcNABM46VIRLVtbLrxq5tfuUMDDzucNjbwCNzrX0OuoXJX6k-rcozP9FnNs58nc11jFrCyH8DljGpa",
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCa7pwQurXoesW2hB_W2r2NVB6AHFy02RMF5blOqhE511u31hRGOMODhQ4FL4Dd8HVSfrUUYSvpJvZU5ZwsfO7p4VMaQ24HkHfkGlbMcQ6_Ejjdei7-CMl3E6d0jA9kW6trYvIDDnGYF8LPYD7BOlS_VnoTDUJM-rn1PoM8GZV1TA06DY8D_uCyTo6a4J64mVIDwOAFICwejVW3jwl_d0-9V9-d1_7wxqrJyS5ba0_Gkbm2ZmwMu2AJuuw4yb5H6ncfagYBhpIEr6dc"
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

const VeridianHQ = () => (
  <main className="pt-20">
    <Hero />
    <ProjectDetails />
    <Gallery />
  </main>
);

export default VeridianHQ;
