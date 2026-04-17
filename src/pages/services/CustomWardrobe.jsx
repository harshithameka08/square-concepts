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
  <section className="px-12 mb-10 pt-10 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
    <motion.div 
      className="md:col-span-12 lg:col-span-5 z-10"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <motion.span 
        className="text-primary font-label tracking-widest uppercase text-xs mb-4 block"
        variants={fadeInUp}
      >
        Architectural Interiors
      </motion.span>
      <motion.h1 
        className="font-headline italic text-4xl md:text-5xl tracking-tighter text-on-surface mb-6 leading-tight"
        variants={fadeInUp}
      >
        Custom Wardrobe <br/>Design
      </motion.h1>
      <motion.p 
        className="font-body text-base text-secondary leading-relaxed max-w-md mb-8"
        variants={fadeInUp}
      >
        Precision-engineered storage meets artisanal craftsmanship. We transform dressing spaces into curated sanctuaries of organization.
      </motion.p>
      <motion.div variants={fadeInUp}>
        <Link to="/portfolio" className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-3 rounded-md font-bold tracking-wide shadow-xl shadow-on-surface/5 flex items-center gap-3 text-sm inline-flex">
          Start Your Wardrobe Design
          <span className="material-symbols-outlined text-base">arrow_forward</span>
        </Link>
      </motion.div>
    </motion.div>
    <motion.div 
      className="md:col-span-12 lg:col-span-7 relative"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div 
        className="absolute -top-4 -left-4 w-full h-full bg-surface-container-high rounded-lg -z-10"
        initial={{ x: 0, y: 0 }}
        whileInView={{ x: 8, y: 8 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
      <motion.img 
        alt="Luxury walk-in closet" 
        className="w-full h-[400px] object-cover rounded-lg shadow-2xl" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA07XjFOsw1-5oj6nUWPLtiZrKL6SHjhse5P2vGqZcrlYPxZUSVgffppdNxWseycSKcrWKqXAQo-MjYXkBBMEiflhkM3oKvfrVE_SYsnPDl3BPZOLe4RU5KBms525hvYNWwaF652Aj5n4Y2YLdX4PVi80br11h2Pxe-_iInCzMbvt9pB_mIFPKG1g5wwMY_r4bpkXwdRV1tQ1FHhUTM_1mmcWssx5d9xqyv5X_EyqEwt4xrZ50VULqo8mYMeFB-V7pKZImta4uzZOdD"
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  </section>
);

const Organization = () => (
  <section className="bg-surface-container-low pt-12 pb-16 px-12">
    <div className="max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img 
            alt="Wardrobe organization" 
            className="w-full aspect-square object-cover rounded-full border-[16px] border-surface" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNmvy8Ysv3SBZHT5ISh0i0VoC7BL9Z_PSwr5CKWpAPHPO2NKETjs94GVrsnT-_-cbfHpM8YbjOkOPOj0KpyWenefFlgY5xIm1lzqBAE_CCsU_NjepRIb_8QdBLoKXUQ7yZ0BQoLzmw4DjLOxG9ZMhhd6xAk0GVgz_6XCbCbNcy5eg2nXegJqKL9-sPFVZCXQWjlfseQtaqS58FKPJLgG1sOyZ1cJsqgTs9NyBMYE94c7Cpy6ZiTiFOyJyWz_h6neNR5JfdlX7FElBY"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h2 
            className="font-headline text-5xl italic tracking-tighter text-on-surface"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            The Art of Organization
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-primary"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>
          <motion.p 
            className="font-body text-secondary text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Every garment has its place. Our design philosophy centers on the intuitive flow of your daily routine, ensuring that efficiency never compromises elegance. We analyze your collection to create a spatial map that prioritizes accessibility and visual harmony.
          </motion.p>
          <motion.div 
            className="grid grid-cols-2 gap-6 pt-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="p-6 bg-surface rounded-lg" variants={fadeInUp}>
              <span className="material-symbols-outlined text-primary text-3xl mb-2">inventory_2</span>
              <h4 className="font-bold text-on-surface">Inventory Analysis</h4>
            </motion.div>
            <motion.div className="p-6 bg-surface rounded-lg" variants={fadeInUp}>
              <span className="material-symbols-outlined text-primary text-3xl mb-2">architecture</span>
              <h4 className="font-bold text-on-surface">Spatial Flow</h4>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

const BespokeFinishing = () => (
  <section className="pt-12 pb-16 px-12 max-w-[1440px] mx-auto">
    <motion.div 
      className="text-center mb-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.h2 
        className="font-headline text-5xl italic tracking-tighter mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        Bespoke Finishing
      </motion.h2>
      <motion.p 
        className="text-secondary max-w-2xl mx-auto uppercase tracking-widest text-sm font-label"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        Tactile Luxury in Every Detail
      </motion.p>
    </motion.div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <motion.div 
        className="md:col-span-2 bg-surface-container rounded-xl overflow-hidden group"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.img 
          alt="Wood finishes" 
          className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all duration-700" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgRPMBeIhOhzDtxRvFXY_6x2hHtlBMyzYyPaHsLaKAcSy2rIwiT1leLdvUqNr4EW3CNEOaEv8hwO8Wjy1Jbl4nxUDtwsrelg7uud557dw1q3Rw6B5rRptOza_YdkPAPUzBeAckI6oBECQpKt3BIf97jr3cXsIC6Ftkd2ANQdQYwL8t8pZkOh53pdQTiBHDGtllJyx7TsdGqqiUZDS8PsdICyKqv51OKt5wc5qAn8KRdkC-XbDbgiQb1lYp4hkh95C0tT6w96aKqorI"
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div 
          className="p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="font-headline text-2xl mb-2">Exotic Veneers & Inlays</h3>
          <p className="text-secondary">Hand-selected woods from sustainable sources, finished with natural oils to preserve the living texture of the grain.</p>
        </motion.div>
      </motion.div>
      <motion.div 
        className="bg-surface-container-highest rounded-xl p-8 flex flex-col justify-between"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.0, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="material-symbols-outlined text-primary text-4xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>hardware</span>
          <h3 className="font-headline text-2xl mb-4">Hardware Curation</h3>
          <p className="text-on-surface-variant leading-relaxed">Solid brass, knurled steel, and hand-stitched leather pulls that offer a sensory experience with every touch.</p>
        </motion.div>
        <motion.div 
          className="mt-8 pt-8 border-t border-outline/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-bold text-primary italic">"Detail is not a feature, it's the soul."</p>
        </motion.div>
      </motion.div>
      <motion.div 
        className="bg-surface-container rounded-xl p-8"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.0, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.h3 
          className="font-headline text-2xl mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Textile Linings
        </motion.h3>
        <motion.p 
          className="text-secondary mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Velvet-lined jewelry trays and cedar-backed paneling provide protection and fragrance.
        </motion.p>
        <motion.img 
          alt="Velvet lining" 
          className="w-full h-48 object-cover rounded-lg" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcnuGVmRCRgFGckdD8OWk35x7WBo1BSYUavMbdCInOyvM-GKzAhrHu-WyQsMvRc83q17KWr9ooo7Dz0fwqZLQoiVQgXf3urOY4w4SQimb9u-ZPAeQh7j2LfCHH4YTL_EdGPO0r75Vm05BzDF53a40ZUJhlFZjd5TqhWddRFlklZ_cqoGZhs-OA3Z9oXzWlFHgUTCBB7XVqTXehfficXtpIsW8_U5s0AuqdFHgKdE1AGT4ePy-uGGhaiJiv0EDhzDOKvNBO76g90WSb" 
          initial={{ scale: 1.05, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
      <motion.div 
        className="md:col-span-2 bg-primary-container/10 rounded-xl p-12 flex items-center gap-12"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="font-headline text-3xl mb-4">Master Craftsmanship</h3>
          <p className="text-secondary text-lg">Our artisans combine traditional joinery with modern CNC precision for a fit that is millimeter-perfect.</p>
        </motion.div>
        <motion.span 
          className="material-symbols-outlined text-[120px] opacity-10 text-primary"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          straighten
        </motion.span>
      </motion.div>
    </div>
  </section>
);

const IntegratedLighting = () => (
  <section className="relative py-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <motion.img 
        alt="Modern wardrobe lighting" 
        className="w-full h-full object-cover" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXutsrsjdxSZZSdkyTOPInoJoU_AknbRXGHOilcuGm1YZbByAt5HRsP2udwEfNS9cXTre3Ddhxgh9jZvmwQkZPXbl1byxDrCAcZfKMcEVqNkMNn0lbjuzf8LXcJoOAR4Mi4aNYKDApqXsys0l2gjsMtCRl1r6FUEnVN5USdNvcpD_BTk-kh8ZhEJft5U3N7lmXHRc7Sued3YNcwWiZK1ePcuuXn3Lgis1PaGQCWtv43Iqu45im9gO9_KeE3lzJqpEaqDxn0Kz9eJd6" 
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-on-surface/60 backdrop-blur-sm"></div>
    </div>
    <motion.div 
      className="relative z-10 px-12 max-w-[1440px] mx-auto text-center text-on-primary"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <motion.h2 
        className="font-headline text-3xl md:text-4xl italic mb-6 tracking-tighter"
        variants={fadeInUp}
      >
        Integrated Lighting
      </motion.h2>
      <motion.p 
        className="max-w-3xl mx-auto text-lg font-body leading-relaxed opacity-90 mb-10"
        variants={fadeInUp}
      >
        Light is the final material. We use 2700K warm-spectrum LEDs recessed into gables and shelves to illuminate your collection without glare, creating a boutique atmosphere at home.
      </motion.p>
      <motion.div 
        className="flex flex-wrap justify-center gap-12"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {[
          { icon: 'sensors', label: 'Motion Activated' },
          { icon: 'wb_iridescent', label: 'Color Rendering' },
          { icon: 'settings_input_component', label: 'Smart Integration' }
        ].map((feature, i) => (
          <motion.div key={i} className="flex flex-col items-center" variants={fadeInUp}>
            <motion.div 
              className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center mb-4"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="material-symbols-outlined text-primary-container">{feature.icon}</span>
            </motion.div>
            <span className="text-sm font-label tracking-widest uppercase">{feature.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </section>
);

const Compartmentalization = () => (
  <section className="py-16 px-12 max-w-[1440px] mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
      <motion.div 
        className="md:col-span-4 self-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.h2 
          className="font-headline text-4xl italic mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Smart Compartmentalization
        </motion.h2>
        <motion.p 
          className="text-secondary leading-relaxed mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Beyond shelves and rails, we design specialized modules for the modern lifestyle. From hidden safes and charging stations to motorized shoe carousels.
        </motion.p>
        <motion.ul 
          className="space-y-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {[
            'Hidden Security Compartments',
            'Integrated Watch Winders',
            'Temperature Controlled Storage'
          ].map((item, i) => (
            <motion.li key={i} className="flex items-center gap-3" variants={fadeInUp}>
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span className="font-medium">{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
      <motion.div 
        className="md:col-span-8 grid grid-cols-2 gap-4"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.img 
          alt="Interior detail" 
          className="w-full h-full object-cover rounded-xl" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-SJ6MGfqMiUElxYjR1kM-RQp8Yl8Z04HINnT0hwZ00yyVbckzGqRtgfRTUNnyhVr_3Kh8EYFjxm8RC04KHPvZMAXpciZDk_miB3i5Q7LNuK1hEW47xzTxDLqTlJhaI9xSP7oeCEUS0ugzYXxihGGKxWDWInl7PvO1mV9TmclMEqPDPmAsoCuT692vRuOZAXzfCEf4bUjqxP89Bcs0SWjtcc3ekgQwnigiARxjYAKMMamuT4H94rOQM_C9szIQnNAQUj_pOay3Wiuq" 
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="grid grid-rows-2 gap-4">
          <motion.img 
            alt="Luxury shoe storage" 
            className="w-full h-full object-cover rounded-xl" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPV7jOP9mqVRc6mu0CeCPFkKtPs0aJKbbU9wjSslTcaqrcturl8zTQphRcNr2irSinDvZEnHKW5B30tfpZ28QhkPbj1Y0U1UtThYvSyDwivjbrOHElq-XncXcdUZ1JokSA_ZqFYaP1cPNnB0wEyXGquMUZ43WD9W527fADnOQnFzZvIdl91jtcBV1Uv4Y7Fz5T02Qtdo__HDjfTTe6z092oI_LEItPi9Or_rmVQVALUXijOfc325JbpGn6MRLp-TlAU3QR1hVE7KD_" 
            initial={{ scale: 1.05, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.img 
            alt="Bespoke drawers" 
            className="w-full h-full object-cover rounded-xl" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkbn4Okfo-EEXgx9XkCa3In2ygfuP9i_8SJudooOsAZU_VJ8zO7pvRvyOkpYbmFN1b26wXBhvtNKIsBG9IJaElf7XwaXTtgxVG5APTMw22yX2LMRVond9PSvOmPlEW5fg_cukm76Ld02l2KT4YBvpdHU5jGXmC1tySZkYwMqUNi7rBcHp1oKBjk1e5Yt3N64yJnLJlZWbVF7Af4z75hmlz5gAOuYLhgkRk9uwyd9ywjtVz2-BpOEhWCXVtvKsxAyofdjs-oACrjMQY" 
            initial={{ scale: 1.05, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </motion.div>
    </div>
  </section>
);

const CustomWardrobe = () => (
  <main className="pt-24">
    <Hero />
    <Organization />
    <BespokeFinishing />
    <IntegratedLighting />
    <Compartmentalization />
    
    <section className="py-20 px-12 bg-surface-container-high">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 
          className="font-headline text-4xl italic mb-12"
          variants={fadeInUp}
        >
          Your Curated Life Awaits
        </motion.h2>
        <motion.div 
          className="flex flex-col md:flex-row gap-6 justify-center"
          variants={fadeInUp}
        >
          <Link to="/portfolio" className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-5 rounded-md font-bold text-lg shadow-2xl transition-transform hover:scale-105 active:scale-95">
            Start Your Wardrobe Design
          </Link>
          <button className="bg-surface text-primary border border-primary/20 px-10 py-5 rounded-md font-bold text-lg hover:bg-primary-container/10 transition-colors">
            Download Design Guide
          </button>
        </motion.div>
      </motion.div>
    </section>
  </main>
);

export default CustomWardrobe;
