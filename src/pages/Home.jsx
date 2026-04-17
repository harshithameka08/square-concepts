import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImage from '../assets/logo.image.png';
import bgLogo from '../assets/bg.logo.png';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const ServiceModal = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center px-6 py-12">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-on-surface/40 backdrop-blur-md transition-opacity duration-500"
          onClick={onClose}
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative bg-surface w-full max-w-5xl h-[80vh] min-h-[500px] overflow-hidden rounded-2xl shadow-2xl flex flex-col lg:flex-row gap-0 overflow-y-auto lg:overflow-visible animate-in fade-in zoom-in duration-300 no-scrollbar"
        >
          <div className="lg:w-1/2 h-[300px] lg:h-full relative shrink-0">
            <img 
              src={service.detailImage} 
              alt={service.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 to-transparent lg:hidden"></div>
            <button 
              onClick={onClose}
              className="absolute top-6 left-6 lg:hidden bg-surface/80 p-2 rounded-full text-on-surface shadow-lg"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div className="lg:w-1/2 p-10 md:pt-10 md:pb-16 md:px-16 flex flex-col overflow-y-auto no-scrollbar">
            <div className="hidden lg:flex justify-end mb-2">
              <button 
                onClick={onClose}
                className="text-on-surface-variant hover:text-on-surface transition-colors"
              >
                <span className="material-symbols-outlined text-3xl">close</span>
              </button>
            </div>
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-2 block"
            >
              Architectural Excellence
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-headline text-4xl mb-8 leading-tight"
            >
              {service.title}
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-6 text-on-surface-variant leading-relaxed font-body"
            >
              <p className="text-lg text-on-surface font-medium italic">"{service.tagline}"</p>
              <p>{service.detailDescription}</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 pt-8 border-t border-outline-variant/30 flex flex-wrap gap-8"
            >
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">{feature.icon}</span>
                  <span className="text-xs font-bold uppercase tracking-widest">{feature.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-24 px-12 min-h-screen flex items-center overflow-hidden">
    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-[1920px] mx-auto">
      <motion.div 
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="z-10"
      >
        <motion.h1 
          variants={fadeInUp}
          className="font-headline text-4xl md:text-6xl tracking-tighter text-on-surface leading-[0.95] mb-8"
        >
          Elevate Your Space with <span className="text-primary italic">Architectural</span> Precision
        </motion.h1>
        <motion.p 
          variants={fadeInUp}
          className="text-lg md:text-xl text-on-surface-variant max-w-xl mb-12 leading-relaxed"
        >
          A dialogue between organic warmth and structural integrity. We curate bespoke environments that balance industrial precision with the poetry of fine living.
        </motion.p>
        <motion.div 
          variants={fadeInUp}
          className="flex flex-wrap gap-6"
        >
          <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-4 rounded-md font-bold tracking-wide uppercase text-sm shadow-xl shadow-primary/10 hover:scale-105 transition-transform active:scale-95">
            View Collections
          </button>
          <button className="text-on-surface font-bold tracking-wide uppercase text-sm px-10 py-4 border-2 border-outline-variant/30 hover:bg-surface-container-high transition-colors rounded-md active:scale-95">
            Our Philosophy
          </button>
        </motion.div>
      </motion.div>
      <div className="relative hidden lg:block">
        <motion.div 
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="architectural-offset w-4/5 ml-auto"
        >
          <img 
            className="rounded-lg shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-700" 
            alt="Luxurious modern minimalist living room" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDS-AzDqc1qaBF0LUCEZbpA25uHxR1i0BtjNEMhJ-ylatwm636faUz7UeeLaZEC3zbSmRtMaoninwR1_gmAnZoh_UszBcJxrP53Olkq1dLhWXcPDyigAWePVySfosMkL_LzYTbkTcWZLpSCVAIWBpaT6gx3tJLgcZ8jvcYE4TiQNl0jO8z4LZkTjvpVg5bNEpDnii4GXTYyniaef8ZW6JcKdKjHtjaW7VLVRxrxHBn4Shxmi4B_jweMANUmwiSRNdaxaxZRKovvcT0b"
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="absolute -bottom-12 -left-12 w-64 h-64 bg-surface-container-highest p-4 rounded-lg shadow-xl z-20"
        >
          <img 
            className="w-full h-full object-cover rounded-md" 
            alt="Architectural materials" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAndaOg6vLcQ8nyCgA7JF6h40_nVpJgKmQ6CVOO8RjoBiWvFKJG2TinWg_qKco_qu8nD1T_usvAc0PrZA8FoVj7k_NpbzDUIacgYNmrgz0s7b14Y6ibjaWQ2iaCBgVS54j5Cnz5IBmSMFlwePiOirs7Z66tywfLHwND2Z-HUIDo43T0gRjbRUhyP7tS8Zhha8dFGU_N3aAHVIO72Y1Yq-HpdfNyXDbaz-3guF5Xh4qxQsNDg3eui5g0gB8zVfnF6mdLSPG5xIVROnRo"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

const Heritage = () => (
  <section className="bg-surface-container-low pt-16 pb-16 px-12 overflow-hidden">
    <div className="max-w-[1920px] mx-auto grid lg:grid-cols-2 gap-24 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="order-2 lg:order-1 flex justify-center lg:justify-start"
      >
        <img 
          className="rounded-lg w-full max-w-xl aspect-square object-cover shadow-inner" 
          alt="Elegant architectural studio" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuByzQZ-8FzAvdY27S8gfeUjHNX0PmRrqo3S8U1duv0B2UdiM_aU6nyHse8IAAyPeUbyCfhMYfpEusEfqS3Ee3mv0jWxP8BS9mCkeUkOH0T9tiicj40l61lgvGUO5rmjCA83eggN638ISAou1V0cj7PBQqsFQ1fvnbmtVRqFBHcJaFkJhrGuYVUlAayzIJ-p3kB0HksULKDv2y59EhD464BjyS7sLDerJgmbag-JTJKrihVN4hK1PqezIJDF-98LBfscuNFy_PLEZtIu"
        />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="order-1 lg:order-2"
      >
        <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Est. 1994</span>
        <h2 className="font-headline text-4xl md:text-5xl text-on-surface mb-8 leading-tight">
          Crafting Exceptional <br/>Legacy Experiences
        </h2>
        <div className="space-y-6 text-on-surface-variant leading-loose">
          <p>Appsulate began with a singular vision: to bridge the gap between architectural engineering and the visceral emotion of interior space. Over three decades, we have evolved into a global authority on curated habitats.</p>
          <p>Our heritage is built on premium market insights and a relentless pursuit of perfection. We don't just design rooms; we engineer legacies that stand the test of temporal trends.</p>
        </div>
        <div className="mt-12 flex items-center gap-4 group cursor-pointer w-fit">
          <div className="h-[1px] w-12 bg-outline group-hover:w-20 transition-all duration-500"></div>
          <span className="font-headline italic text-xl">The Curator's Journey</span>
        </div>
      </motion.div>
    </div>
  </section>
);

const ServiceCard = ({ service, handleOpen }) => (
  <motion.div 
    variants={fadeInUp}
    onClick={() => handleOpen(service)}
    className="pt-6 pb-8 px-8 bg-surface-container-low rounded-lg hover:bg-surface-container-high transition-all duration-300 flex flex-col group cursor-pointer"
  >
    <span className="material-symbols-outlined text-4xl text-primary mb-4">{service.icon}</span>
    <h3 className="font-headline text-2xl mb-2">{service.title}</h3>
    <p className="text-on-surface-variant mb-8 leading-relaxed">{service.description}</p>
    <div 
      className="mt-auto flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary group-hover:gap-4 transition-all"
    >
      Learn More <span className="material-symbols-outlined text-xs">arrow_forward</span>
    </div>
  </motion.div>
);

const Services = ({ onSelectService }) => {
  const serviceList = [
    { 
      id: 'residential',
      icon: 'domain', 
      title: 'Residential', 
      description: 'Full-scale architectural planning for private estates, focusing on flow and luxury utility.',
      tagline: 'Crafting the private sanctuary of your dreams.',
      detailDescription: 'Our residential architecture service transcends basic floorplans. we analyze your daily rituals to create a spatial narrative that balances social fluidity with private retreat. Using adaptive light systems and sustainably sourced materials, we build estates that are as enduring as they are elegant.',
      detailImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMCDDL6NrXkoDfCfu0lUPn1tKCO86uYrX4XeJWAb0EfQWYJTF2vLmzxWV0-o-KH-tMud8whoZzXjbv9YohOJPNhGeJj_7tHKSATMEGiW9KkMwVFGznWxB564TnvvPNVJh1s9StYSrfiEbhrR0Wpfy5o191r__WQnMhrbgaPrphn_RpF2YzTZ62Q5Zctv-fkzOvk3pR-ianr9xFGoIFO3peMUIEYA_PoGs7MrKTtl3wKurvykw1K_h4XaUWFUgG-5i13kNjEkmR6p1F',
      features: [
        { icon: 'architecture', label: 'Spatial Mapping' },
        { icon: 'nature', label: 'Biophilic Design' },
        { icon: 'foundation', label: 'Structural Integrity' }
      ]
    },
    { 
      id: 'modular-kitchen',
      icon: 'countertops', 
      title: 'Modular Kitchen', 
      description: 'Precision-engineered culinary spaces that blend industrial technology with artisanal finishes.',
      tagline: 'The intersection of technical precision and culinary passion.',
      detailDescription: 'Our kitchens are choreographed environments. We integrate German-engineered hardware with hand-finished Italian cabinetry. From motorized pocket doors to antimicrobial stone surfaces, every element is designed to heighten the sensory experience of cooking.',
      detailImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoBbETew3m1dQNRG-ytnJyABmktzMYe4yieTj3pQ4rudsIzkqyZZ9tRSmJcXeYB2ElewJTHsNaJP3YTsu7iDaaXjipcTpc8AUn150X0sUIPQkzbMG-QMTS_o77_GQTI66nRLMUYlQADPp6x-SL2gfWRqQDCRXR9BxF_iyytAFi9B81lA1y79IWBijAonHv5ZSHSaMguHLXMy8nl92G7hjqW3lKUxyBaQLTohfBslyMwEpWfp23KmPjh3dq7uF7cNVDIF9ItpCagC2Y',
      features: [
        { icon: 'settings', label: 'Smart Integration' },
        { icon: 'kitchen', label: 'Ergonomic Flow' },
        { icon: 'layers', label: 'Premium Finishes' }
      ]
    },
    { 
      id: 'living-room',
      icon: 'weekend', 
      title: 'Living Room', 
      description: 'Curated common spaces designed for intellectual exchange and supreme relaxation.',
      tagline: 'The stage for your social and private narrative.',
      detailDescription: 'We treat the living room as a versatile gallery. Through the use of kinetic partitions and acoustic paneling, we create zones that transition effortlessly from expansive entertainment areas to intimate library nooks. Every texture is chosen to evoke tactile warmth.',
      detailImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDS-AzDqc1qaBF0LUCEZbpA25uHxR1i0BtjNEMhJ-ylatwm636faUz7UeeLaZEC3zbSmRtMaoninwR1_gmAnZoh_UszBcJxrP53Olkq1dLhWXcPDyigAWePVySfosMkL_LzYTbkTcWZLpSCVAIWBpaT6gx3tJLgcZ8jvcYE4TiQNl0jO8z4LZkTjvpVg5bNEpDnii4GXTYyniaef8ZW6JcKdKjHtjaW7VLVRxrxHBn4Shxmi4B_jweMANUmwiSRNdaxaxZRKovvcT0b',
      features: [
        { icon: 'surround_sound', label: 'Acoustics' },
        { icon: 'light_mode', label: 'Luminous Layering' },
        { icon: 'widgets', label: 'Modular Seating' }
      ]
    },
    { 
      id: 'bedroom',
      icon: 'bed', 
      title: 'Bedroom', 
      description: 'Sanctuary design focused on acoustic purity, light control, and tactile comfort.',
      tagline: 'Bio-rhythmic environments for ultimate restoration.',
      detailDescription: 'Our bedroom designs focus on circadian wellness. We implement automated shielding and recessed lighting that follows the natural progression of the sun. Acoustic insulation ensures a total retreat from the external world, wrapped in natural fibers and soft-touch surfaces.',
      detailImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYFb08wyGDeEgABooCknmiIyNkXBgkeQtvHBNYg33RYKWAxml4fjqerLvgiN_aXYLEnTctyWFvVxY6joRrNTGRu-UlaaCE0xRMTCTIl2y5gskjFsRtXChnddQfXYZzXlWkwU1kwimAZ3qCnbzuto_8ObOQEvJhuOjveNsA9k_-sMWAhQEFlHN_klbARITEyQi-GKB0x9Qt6P2QNqIe7YAPWce-z5z8qIuGDki1xruu9V5aKIWYGzGP8wzvcUL5Kei-GSEyCZ-wyLzz',
      features: [
        { icon: 'bedtime', label: 'Sleep Science' },
        { icon: 'curtains', label: 'Light Control' },
        { icon: 'hearing', label: 'Acoustic Shield' }
      ]
    },
    { 
      id: 'wardrobe',
      icon: 'shelves', 
      title: 'Wardrobe & Storage', 
      description: 'Invisible organization systems that maximize space while maintaining architectural purity.',
      tagline: 'The art of the curated collection.',
      detailDescription: 'We believe storage should be a sensory experience. Our walk-in systems feature integrated LED sensing, moisture-controlled cedar paneling, and jewelry-grade velvet linings. It is not just about space optimization; it is about the celebration of your personal collection.',
      detailImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA07XjFOsw1-5oj6nUWPLtiZrKL6SHjhse5P2vGqZcrlYPxZUSVgffppdNxWseycSKcrWKqXAQo-MjYXkBBMEiflhkM3oKvfrVE_SYsnPDl3BPZOLe4RU5KBms525hvYNWwaF652Aj5n4Y2YLdX4PVi80br11h2Pxe-_iInCzMbvt9pB_mIFPKG1g5wwMY_r4bpkXwdRV1tQ1FHhUTM_1mmcWssx5d9xqyv5X_EyqEwt4xrZ50VULqo8mYMeFB-V7pKZImta4uzZOdD',
      features: [
        { icon: 'inventory_2', label: 'Archive Systems' },
        { icon: 'sensor_window', label: 'Integrated LED' },
        { icon: 'lock', label: 'Secure Modules' }
      ]
    },
    { 
      id: 'flooring',
      icon: 'layers', 
      title: 'Flooring', 
      description: 'Foundation surfaces using rare stones, reclaimed timbers, and avant-garde polymers.',
      tagline: 'The architectural foundation of tactile luxury.',
      detailDescription: 'Our flooring selections are curated from the world’s most exclusive quarries and timber mills. We specialize in seamless transitions and under-floor thermal integration, ensuring that the ground you walk on is as technologically advanced as it is visually stunning.',
      detailImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAL3uztk-NoD36FV9W1cEA2DY0Vmt5LuQLxF4mKZNGWMIhFd_oAPAxkh698hS-MCo2fwECiL7xND_r7W3lhnbOSKwbDIhSGzoyaibZvAvIJ4hWXIcbvVIrjnXe1YoHGY6XQoqbeOW2TKa-2TtdBMiohkMUsM1aPZnIhotOIUhgkcRBbQOVOtIC10OubEhsua4voBkKTk-9J-xZ4tBNlD5uWSEJ4dVwvU1LVaLJ8BOfEPcKnazN80gAilgtP6Luva4sERnPQAdpPNt0E',
      features: [
        { icon: 'thermometer', label: 'Thermal Integration' },
        { icon: 'texture', label: 'Rare Material' },
        { icon: 'verified', label: 'Heirloom Grade' }
      ]
    }
  ];

  return (
    <section className="pt-16 pb-32 px-12 bg-surface">
      <div className="max-w-[1920px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="font-headline text-5xl text-on-surface mb-4">Services Tailored to Perfection</h2>
          <p className="text-on-surface-variant max-w-2xl font-body">Six pillars of architectural mastery designed to transform every facet of your physical environment.</p>
        </motion.div>
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          {serviceList.map(service => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              handleOpen={onSelectService}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonialsList = [
    {
      name: "Marcus Aurelius",
      role: "Estate Owner",
      text: "The precision of their spatial mapping is unmatched. My estate now feels like a living, breathing extension of my own intent.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAn-QvN_8-M0y0Jp-i_kH8zL6_R9s-v_d-7y6R_D-9-z_P-p-p-p-p-p-p-p-p-p-p-p-p-p"
    },
    {
      name: "Sienna Miller",
      role: "Interior Enthusiast",
      text: "Appsulate doesn't just design rooms; they engineer emotions. The modular kitchen is a technical marvel and a joy to use.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAn-QvN_8-M0y0Jp-i_kH8zL6_R9s-v_d-7y6R_D-9-z_P-p-p-p-p-p-p-p-p-p-p-p-p-p"
    },
    {
      name: "David Chen",
      role: "Tech CEO",
      text: "The integration of smart systems in the bedroom sanctuary has completely transformed my sleep cycles. True excellence.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAn-QvN_8-M0y0Jp-i_kH8zL6_R9s-v_d-7y6R_D-9-z_P-p-p-p-p-p-p-p-p-p-p-p-p-p"
    },
    {
      name: "Elena Rodriguez",
      role: "Art Curator",
      text: "Their understanding of acoustic purity in the living gallery is exceptional. It's the perfect stage for my collection.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAn-QvN_8-M0y0Jp-i_kH8zL6_R9s-v_d-7y6R_D-9-z_P-p-p-p-p-p-p-p-p-p-p-p-p-p"
    },
    {
      name: "Julian Vane",
      role: "Architectural Critic",
      text: "A masterclass in modern brutalism meets soft luxury. They have redefined the vocabulary of the contemporary home.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAn-QvN_8-M0y0Jp-i_kH8zL6_R9s-v_d-7y6R_D-9-z_P-p-p-p-p-p-p-p-p-p-p-p-p-p"
    }
  ];

  // Double the list for seamless marquee
  const extendedList = [...testimonialsList, ...testimonialsList];

  return (
    <section className="pt-16 pb-24 bg-surface-container-low overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="px-12 mb-16"
      >
        <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Client Narratives</span>
        <h2 className="font-headline text-5xl text-on-surface">Voices of Excellence</h2>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex animate-marquee whitespace-nowrap py-4"
      >
        {extendedList.map((t, idx) => (
          <div key={idx} className="inline-block mx-6 whitespace-normal align-top shrink-0">
            <div className="relative p-10 rounded-2xl shadow-sm border border-outline-variant/20 w-[350px] h-[350px] flex flex-col justify-between hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden group">
              {/* Background Logo Image from bg.logo.png - appears on hover */}
              <div 
                className="absolute inset-0 z-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                style={{
                  backgroundImage: `url(${bgLogo})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              ></div>
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 z-[1] bg-surface/80 group-hover:bg-surface/70 transition-colors duration-500"></div>
              {/* Content */}
              <p className="relative z-10 text-lg font-body text-on-surface leading-relaxed italic line-clamp-5">
                "{t.text}"
              </p>
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">person</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest">{t.name}</h4>
                  <span className="text-xs text-on-surface-variant">{t.role}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

const AboutUs = () => (
  <section className="py-24 px-12 bg-surface overflow-hidden">
    <div className="max-w-[1920px] mx-auto grid lg:grid-cols-2 gap-24 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Our Vision</span>
        <h2 className="font-headline text-4xl md:text-5xl text-on-surface mb-8 leading-tight">
          Redesigning the <br/>Vocabulary of Home
        </h2>
        <div className="space-y-6 text-on-surface-variant leading-loose font-body text-lg">
          <p>At Square Concepts, we view interior design as an architectural dialogue between the inhabitant and the environment. Since 1994, our studio has been dedicated to the pursuit of spatial purity—stripping away the superfluous to reveal the essential beauty of form and function.</p>
          <p>Our multidisciplinary team of architects and designers collaborate to engineer environments that are bio-rhythmically synchronized with your life. We don't just design rooms; we curate legacies.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8 border-t border-outline-variant/30 pt-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-4xl font-headline text-primary mb-2">30+</h4>
            <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Years of Precision</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-4xl font-headline text-primary mb-2">500+</h4>
            <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Global Estates</p>
          </motion.div>
        </div>
      </motion.div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <motion.img 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-lg w-full aspect-square object-cover shadow-lg grayscale hover:grayscale-0 transition-all duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuByzQZ-8FzAvdY27S8gfeUjHNX0PmRrqo3S8U1duv0B2UdiM_aU6nyHse8IAAyPeUbyCfhMYfpEusEfqS3Ee3mv0jWxP8BS9mCkeUkOH0T9tiicj40l61lgvGUO5rmjCA83eggN638ISAou1V0cj7PBQqsFQ1fvnbmtVRqFBHcJaFkJhrGuYVUlAayzIJ-p3kB0HksULKDv2y59EhD464BjyS7sLDerJgmbag-JTJKrihVN4hK1PqezIJDF-98LBfscuNFy_PLEZtIu" 
            alt="Structural Detail" 
          />
          <motion.img 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-lg w-full aspect-[3/4] object-cover shadow-lg grayscale hover:grayscale-0 transition-all duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMCDDL6NrXkoDfCfu0lUPn1tKCO86uYrX4XeJWAb0EfQWYJTF2vLmzxWV0-o-KH-tMud8whoZzXjbv9YohOJPNhGeJj_7tHKSATMEGiW9KkMwVFGznWxB564TnvvPNVJh1s9StYSrfiEbhrR0Wpfy5o191r__WQnMhrbgaPrphn_RpF2YzTZ62Q5Zctv-fkzOvk3pR-ianr9xFGoIFO3peMUIEYA_PoGs7MrKTtl3wKurvykw1K_h4XaUWFUgG-5i13kNjEkmR6p1F" 
            alt="Material Narrative" 
          />
        </div>
        <div className="space-y-4 pt-12">
          <motion.img 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-lg w-full aspect-[3/4] object-cover shadow-lg grayscale hover:grayscale-0 transition-all duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoBbETew3m1dQNRG-ytnJyABmktzMYe4yieTj3pQ4rudsIzkqyZZ9tRSmJcXeYB2ElewJTHsNaJP3YTsu7iDaaXjipcTpc8AUn150X0sUIPQkzbMG-QMTS_o77_GQTI66nRLMUYlQADPp6x-SL2gfWRqQDCRXR9BxF_iyytAFi9B81lA1y79IWBijAonHv5ZSHSaMguHLXMy8nl92G7hjqW3lKUxyBaQLTohfBslyMwEpWfp23KmPjh3dq7uF7cNVDIF9ItpCagC2Y" 
            alt="Spatial Design" 
          />
          <motion.img 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-lg w-full aspect-square object-cover shadow-lg grayscale hover:grayscale-0 transition-all duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYFb08wyGDeEgABooCknmiIyNkXBgkeQtvHBNYg33RYKWAxml4fjqerLvgiN_aXYLEnTctyWFvVxY6joRrNTGRu-UlaaCE0xRMTCTIl2y5gskjFsRtXChnddQfXYZzXlWkwU1kwimAZ3qCnbzuto_8ObOQEvJhuOjveNsA9k_-sMWAhQEFlHN_klbARITEyQi-GKB0x9Qt6P2QNqIe7YAPWce-z5z8qIuGDki1xruu9V5aKIWYGzGP8wzvcUL5Kei-GSEyCZ-wyLzz" 
            alt="Architectural Legacy" 
          />
        </div>
      </div>
    </div>
  </section>
);

const Home = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="overflow-x-hidden">
      <Hero />
      <AboutUs />
      <Heritage />
      <Services onSelectService={setSelectedService} />
      <Testimonials />
      <ServiceModal 
        service={selectedService} 
        onClose={() => setSelectedService(null)} 
      />
    </div>
  );
};

export default Home;
