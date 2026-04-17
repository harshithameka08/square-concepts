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
  <section className="relative min-h-[600px] flex items-center px-8 md:px-24 overflow-hidden pt-8">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full max-w-screen-2xl mx-auto">
      <motion.div 
        className="lg:col-span-6 z-10"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.h4 
          className="font-label uppercase tracking-[0.3em] text-primary text-xs mb-4"
          variants={fadeInUp}
        >
          Service Excellence
        </motion.h4>
        <motion.h1 
          className="font-headline text-5xl md:text-6xl tracking-tighter leading-[0.9] text-on-surface mb-6"
          variants={fadeInUp}
        >
          The Soul of <br/><span className="italic text-primary">Customization.</span>
        </motion.h1>
        <motion.p 
          className="font-body text-base text-on-surface-variant max-w-md leading-relaxed mb-10"
          variants={fadeInUp}
        >
          Merging architectural precision with the intimacy of home. Our furniture customization service transforms raw materials into heirloom statements.
        </motion.p>
        <motion.div className="flex gap-4" variants={fadeInUp}>
          <Link to="/portfolio" className="bg-primary text-on-primary px-8 py-3.5 rounded-md font-label font-bold tracking-widest uppercase text-xs hover:bg-surface-tint transition-all inline-block">
            View Portfolio
          </Link>
        </motion.div>
      </motion.div>
      <motion.div 
        className="lg:col-span-6 relative h-[450px]"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div 
          className="absolute inset-0 bg-surface-container-high rounded-xl"
          initial={{ x: 0, y: 0 }}
          whileInView={{ x: 16, y: 16 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        <motion.img 
          className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-2xl z-10" 
          alt="Artisan at work" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrWDY7L6zZWzp1bNZwALzTBMdPOkBEdKgwP62Sbca0qvL5fscBAPGLRNl1OWzbaYkgjIDLND9antImlCcQ_jxQbN6Y3E5JMciGk36LscJTYeegSN4PQyBBrDrPcMX_dX3O-JEimxCMlfbkvF2cJcE1fnLZXi1d54JE67-nYVjiWWQ9VPGzZuOctZTU3beMUI5DaVlqBYpXkLzRiY10XaIWf_XgmOKPD0DgNE_A6BMdmd9lXv_hINJeDPUYuuNu773X-bMFJ9aX14-o"
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
    </div>
  </section>
);

const ErgonomicSilhouette = () => (
  <section className="py-16 bg-surface-container-low">
    <div className="max-w-screen-2xl mx-auto px-8 md:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          className="order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img 
            className="w-full h-[500px] object-cover rounded-full shadow-lg" 
            alt="Bespoke ergonomic lounge chair" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2hijdifPX7o98TFGl2ZxPWsOhV2DgooQM03EdUd-RV9sTTanLq40OcxuleSS8jQIgTfDDG9dqdaLj_N_GvenxGPxlAJEzD5r6aSoRTioGjgU_pPM63ZALdNbKQDZJPH48vYWKXkrHbbfNa1BfxJtkY8ds12lYMS3gHmiVH83DlncZH409cE9SR7oVMl8zKTyahjKpeYRAksdNmnPp0Mzp2uLkfVKsFZSpIUEhMxX_qsFxK_21oCYXA9ZpyXcItsSF7_xHR6hPz6AC" 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
        <motion.div 
          className="order-1 lg:order-2 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span 
            className="material-symbols-outlined text-4xl text-primary"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            chair
          </motion.span>
          <motion.h2 
            className="font-headline text-4xl lg:text-5xl tracking-tighter text-on-surface"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            The Ergonomic Silhouette
          </motion.h2>
          <motion.p 
            className="font-body text-base text-on-surface-variant leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Form follows life. We believe furniture should be a silent extension of the human frame. Through precise anthropometric mapping, each piece is engineered for an effortless comfort that endures through decades of use.
          </motion.p>
          <motion.div 
            className="grid grid-cols-2 gap-8 pt-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h3 className="font-headline text-xl text-on-surface mb-2 italic">01.</h3>
              <p className="font-label text-xs uppercase tracking-widest font-bold text-primary">Anatomical Fit</p>
              <p className="text-xs text-secondary mt-1">Mapped to your unique posture and spatial requirements.</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h3 className="font-headline text-xl text-on-surface mb-2 italic">02.</h3>
              <p className="font-label text-xs uppercase tracking-widest font-bold text-primary">Dynamic Flow</p>
              <p className="text-xs text-secondary mt-1">Adjustable parameters for modern living environments.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

const MaterialShowcase = () => (
  <section className="pt-12 pb-24">
    <motion.div 
      className="max-w-screen-2xl mx-auto px-8 md:px-24 text-center mb-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.h2 
        className="font-headline text-5xl lg:text-7xl tracking-tighter mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        Timber &amp; Textile
      </motion.h2>
      <motion.p 
        className="font-body text-on-surface-variant max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        Curating the finest raw textures. Every fiber and grain is hand-selected to ensure visual harmony and structural integrity.
      </motion.p>
    </motion.div>
    <motion.div 
      className="max-w-screen-2xl mx-auto px-8 md:px-24 grid grid-cols-1 md:grid-cols-4 gap-6 h-auto md:h-[800px]"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
    >
      <motion.div 
        className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-xl"
        variants={fadeInUp}
      >
        <motion.img 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          alt="Wood grain" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtNSAfIBOHfYMyms0SODXtP5MxIUOHzBXPBjGNz6fNXmYjg95Pd4fM4L3wmVxOTqmkIJtCrRw87IMVqBhjQ_hxiDOF3g7ae5rh0QYddATQ6dBe_aK43x7CMeoRtVsJFDxSK7W84VSfJYhTjyzjoXPJUnJQ8wAjteeMjdc7LF9RCgD4nBPgBuYgtI9s7qDpB9ZS5nMY7k1neXpSI2dV0cLIuQQc36RjvWXh8LyNWzXR-4hgEDzdGxNcKwIS6akWEa_huYKuE3XExt9y" 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent p-12 flex flex-col justify-end"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h4 className="font-headline text-3xl text-surface">Premium Hardwoods</h4>
          <p className="text-surface/80 mt-2 font-body">Sustainable Walnut, Oak, and Ash.</p>
        </motion.div>
      </motion.div>
      <motion.div 
        className="md:col-span-2 group relative overflow-hidden rounded-xl"
        variants={fadeInUp}
      >
        <motion.img 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          alt="Fabric samples" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuANFtObcHU0yYlrZZs9nBOJoZmxAQKTEBN9R2z9p1ZHuGI8pQ0Ww2V7fds3D4XeBenQSLlJ3MIznxDFf3sbZ845OExB610uw7u9B9GTootQxSdgHzQaHDrSbEpjUWvi7-y2mtryoTMRyXuKVA3NNk_Gc-4PnqCz7k8z5CpE6JBVFxL_cJhknDnrNV-gDZtY_sbxP6hIIZnDspDLUVdeG1NOU6S8BAyrfSGFLm5BJiZ6ZlnN7-VnQtEk4QXu_hF7zIvf19JdzOnOc3eh" 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent p-8 flex flex-col justify-end"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <h4 className="font-headline text-2xl text-surface">Textured Weaves</h4>
          <p className="text-surface/80 mt-2 font-body">Italian linens and Belgian wools.</p>
        </motion.div>
      </motion.div>
      <motion.div 
        className="group relative overflow-hidden rounded-xl"
        variants={fadeInUp}
      >
        <motion.img 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          alt="Marble texture" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP25xgFss-CXOf0PfS3MEk642L0kLlaHxfdeU27qDSyxpjDAcOGaaJzlBX-ePphlipZwFHF7gIiTHpp8DbeIyT5ZTXlXv0aVeY4HUu2cAGci1dRQvczDeY1Aqd4g4bbOA1Gl9y-QuGp5cVjwMjjfSQJZa8Dm2U3Ej79NaxSulOYVjLDwd5-DWsk9RvFvHxDYEk8Iy_7VT1aHkQ5neHrwWv-5Jgq73S9U8OAgULvur93oM0uGFWFueBmGEpTuDr02AQHZbY-Y9y0Q0y" 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div 
          className="absolute inset-0 bg-on-surface/20 group-hover:bg-on-surface/40 transition-colors p-6 flex flex-col justify-center items-center text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <h4 className="font-headline text-xl text-surface">Stone Accents</h4>
        </motion.div>
      </motion.div>
      <motion.div 
        className="group relative overflow-hidden rounded-xl bg-surface-container-highest flex flex-col items-center justify-center p-8"
        variants={fadeInUp}
      >
        <motion.span 
          className="material-symbols-outlined text-4xl text-primary mb-4"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          palette
        </motion.span>
        <h4 className="font-label uppercase font-bold tracking-widest text-xs">Custom Finishes</h4>
        <p className="text-secondary text-sm mt-2 text-center">Hand-rubbed oils and bespoke lacquers.</p>
      </motion.div>
    </motion.div>
  </section>
);

const JoineryPrecision = () => (
  <section className="py-16 bg-on-surface text-surface overflow-hidden">
    <div className="max-w-screen-2xl mx-auto px-8 md:px-24">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <motion.div 
          className="w-full lg:w-1/2 space-y-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h2 
            className="font-headline text-4xl lg:text-5xl leading-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Joinery <br/><span className="italic text-primary-container">Precision.</span>
          </motion.h2>
          <motion.div 
            className="space-y-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { title: 'Mortise & Tenon', desc: 'The cornerstone of longevity. We use interlocking joints that strengthen with age, eschewing visible screws for a seamless aesthetic.' },
              { title: 'Dovetail Integrity', desc: 'Structural art. Our hand-cut dovetails ensure drawer durability while showcasing the mark of the master craftsman.' },
              { title: 'Architectural Frame', desc: 'Internal skeletal structures designed with the same rigor as high-rise foundations.' }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                className="border-l-2 border-primary-container/30 pl-6 space-y-1"
                variants={fadeInUp}
              >
                <h4 className="font-label font-bold uppercase tracking-widest text-primary-container text-xs">{feature.title}</h4>
                <p className="font-body text-surface/70 leading-relaxed text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div 
          className="w-full lg:w-1/2 relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="aspect-square relative group">
            <motion.img 
              className="w-full h-full object-cover rounded-lg transition-all duration-1000" 
              alt="Joinery detail" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaX0mOfoS37YP1ivAeSHshzxniQ206ZDSD819OQGa5YeJKW5gWqEURWN_cyCqm6AL8WzTB4a5iYDcKp9k4RLNOw44Ha8Uba1c3nFXjGb9WBv9-wr2lPd3EmtORohdeTx_xKsto3QMNDeJEM0slqdFInpAcsCDJ348T5KEpLLyLgmqMvjJDTgqtgO_bZWjYG-5iWR-PmkezHj3UuMZJINak2ZRYSVaX8yAI2vuddV03H2YJiiXHHBsiSb0_SDsOxvtw2Dm1x8hksjEw" 
              initial={{ scale: 1.05 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div 
              className="absolute -top-10 -right-10 w-48 h-48 bg-primary-container/10 rounded-full blur-3xl"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            ></motion.div>
            <motion.div 
              className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const FurnitureCustomization = () => (
  <main className="pt-12">
    <Hero />
    <ErgonomicSilhouette />
    <MaterialShowcase />
    <JoineryPrecision />
    
    <section className="py-16 bg-surface-container-lowest">
      <motion.div 
        className="max-w-4xl mx-auto text-center px-8"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.span 
          className="font-headline text-3xl md:text-4xl italic text-stone-600 block mb-6 select-none"
          variants={fadeInUp}
        >
          Begin the Journey
        </motion.span>
        <motion.h2 
          className="font-headline text-3xl md:text-4xl tracking-tighter text-on-surface mb-6"
          variants={fadeInUp}
        >
          Inquire about a custom piece.
        </motion.h2>
        <motion.p 
          className="font-body text-on-surface-variant text-base mb-8"
          variants={fadeInUp}
        >
          Let's curate your living space with intention. Our designers are ready to translate your vision into a physical legacy.
        </motion.p>
        <motion.form 
          className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto"
          variants={fadeInUp}
        >
          <input className="flex-1 bg-surface-container-low border-none rounded-md px-6 py-4 focus:ring-2 focus:ring-primary text-on-surface placeholder:text-stone-500" placeholder="Your email address" type="email"/>
          <button className="bg-primary text-on-primary px-8 py-4 rounded-md font-label font-bold tracking-widest uppercase text-xs hover:bg-surface-tint transition-all whitespace-nowrap">
            Send Inquiry
          </button>
        </motion.form>
      </motion.div>
    </section>
  </main>
);

export default FurnitureCustomization;
