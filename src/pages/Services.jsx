import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import servicesHeroBg from '../assets/hero/services-hero.png';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Hero = () => (
  <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
    <img 
      alt="Modern Interior Architecture" 
      className="absolute inset-0 w-full h-full object-cover" 
      src={servicesHeroBg}
    />
    <div className="absolute inset-0 bg-stone-900/60 backdrop-brightness-75"></div>
    <motion.div 
      className="relative z-10 text-center max-w-3xl px-8 flex flex-col items-center"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      <motion.h1 
        className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 uppercase"
        variants={fadeInUp}
      >
        Our <span className="text-primary">Services</span>
      </motion.h1>
      <motion.p 
        className="text-stone-300 text-lg md:text-xl leading-relaxed mb-10 font-light"
        variants={fadeInUp}
      >
        Discover a comprehensive suite of interior solutions designed to elevate your living experience. 
        Curating every detail to reflect your unique architectural legacy.
      </motion.p>
      <motion.div 
        className="w-24 h-1 bg-primary mx-auto"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
    </motion.div>
  </section>
);

const ServiceCard = ({ img, title, desc, path, index }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    className="h-full"
  >
    <Link to={path || '#'} className="group block h-full relative rounded-2xl overflow-hidden cursor-pointer">
      {/* Image Background */}
      <div className="aspect-[4/5] overflow-hidden">
        <img 
          alt={title} 
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-[0.4] brightness-[0.55]" 
          src={img}
        />
      </div>

      {/* Permanent overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

      {/* Index number */}
      <div className="absolute top-6 right-6 z-10">
        <span className="text-white/20 text-6xl font-serif font-bold group-hover:text-primary/40 transition-colors duration-500">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Content - always visible at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-[2px] bg-primary group-hover:w-12 transition-all duration-500"></div>
          <span className="text-primary text-[10px] font-bold uppercase tracking-[0.25em]">Service</span>
        </div>
        <h3 className="text-xl font-serif text-white mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
        
        {/* Description - slides up on hover */}
        <div className="max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500 ease-out">
          <p className="text-stone-400 text-sm leading-relaxed font-light">{desc}</p>
        </div>

        {/* Arrow CTA */}
        <div className="flex items-center gap-2 mt-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
          <span className="text-primary text-xs font-bold uppercase tracking-widest">Explore</span>
          <span className="material-symbols-outlined text-primary text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </div>
      </div>
    </Link>
  </motion.div>
);

const Services = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const servicesData = [
    { 
      title: "Modular Kitchen Installation", 
      desc: "Makeover your kitchen with contemporary designs that blend practicality, flair, and effective use of available space.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBymy19G9_6tov_2bALRzjpZR54lXHv0CwYQNq3B-mJF2uaPV95ucgJQIZ8mwsxCdMhhELFSx623axeA0Q5x1o5SqBve5kB34lKyby3ZqZFBSm1CeRCihBKBAYX1rcnelK61LNOFdv6SNaSgA3nKhPx865hWE-7Rl1i7KwQtaWCpuEdr7o1jFMTjSp5_ZjaL5ZKUATVV8WEBN9A0fzy1khgkrumYX85tVcZm5j-wAKVn0Wi54YihkwkoF1K1469vV_AQr13if3hA55J",
      path: "/services/modular-kitchen"
    },
    { 
      title: "Custom Wardrobe Design", 
      desc: "Make wardrobes that improve the appearance of your spaces in addition to serving as storage solutions.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuArrw7fme5KECCG3EGMYEdIzY8VDN9ocgOtlDYzL3zcH7Yw2R5xGxqTyfQn-Qoo0FXDzxmErc2JQe48iasQbRahgwg5EwTxaDiCcC-0zpfFNesORJMqaXYbvfYWrYn6hsBFvrMcnkyIqtH8f29X75o5UiXJ4k49IOPY_7RvI-fALImDw7omGFUdAZZpS_VwkLJ6k0qYm2EIpKr5-pRQd0r4-qB0l5n8pJSBMu1lGCGvkG0VPwnKGQFy7wyIQtdP6tP05ZQ7ZL0mVztX",
      path: "/services/custom-wardrobe"
    },
    { 
      title: "Space Optimization Solutions", 
      desc: "Rethink your house with creative plans that maximize every available space.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0v_fwIEtKi_6eY-mvvn-msET_JYAttJCFPoQv11tgXkPtfnc7Edtki4qKjNhfCky4Qz-Gi4pBVoRHeCtDItCbuyiLsXX07LR6AJ3W1E_Z_1w_zaV8AYlDcLuisvbfrJjgpvnkOkw1NPRuZvZac5ZGsEbTasfkw9oehoeG8bOGUosRPO9MrlgP-QXL8edIxQX2z8V_eE1MKLKs-lz8WAZV8UufXpfwiahLuco6KlO7FlJGcRfIx73okRy6FNukumV-7X4moxDQRwwk",
      path: "/services/space-optimization"
    },
    { 
      title: "Decorative Wall Paneling", 
      desc: "With high-quality paneling options that complement your décor, you can add a touch of refinement to your walls.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlYns0aO3jd8bhV62m4kVH8b8ZRjbV8wtRH6-67dVqpiPJ6xml8-Gb2Kbjbm-j-9v1p0RrlsnduEWZvZtEcMco5uFDTHyM6Y-Mz99e01OeDLSB2ODz1jfOWw5zuOvnwW3lHvRraRGzlmT1cmgsqbIbeaOYKHnVzCLN2kuGFJQSWBkukTxh4CSAF8k3o0sXVgqVlBT6WXYTjeo0R3IUtMPsSngmy-8hv7dHn-qziZk7RG-gYdWVHUqr6WtVzq7iYCzBjlKz9xnlLOgq",
      path: "/services/wall-panelling"
    },
    { 
      title: "Ceiling Design & False Ceilings", 
      desc: "Update your ceilings with imaginative patterns that improve lighting and give your room depth.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHVjf7Wo8akLpYoVxpclA_BZX1tJRoMVOFoAAE8v-V8UVBLfNV4j4fU6Tfsl-f_8gqWo5zKyn8gSXIK1mYPsgSQOgpyVehE0slrYyxge9JnlkPcyxj_P4FHpX84rfIEJe-LLNYIrK6g1UL66u3n4XZ54SHVgm34DRRkq4wP9yO3KXJvodp-VmGEN6Q57al1kLcNABM46VIRLVtbLrxq5tfuUMDDzucNjbwCNzrX0OuoXJX6k-rcozP9FnNs58nc11jFrCyH8DljGpa",
      path: "/services/ceiling-design"
    },
    { 
      title: "Smart Home Integration", 
      desc: "Enjoy contemporary living with sophisticated automation systems that add flair and convenience to your house.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDK58rLMKE22j3pZBTBU1MvWpCOIuKIrrA5faFoGO6NG-lLweun_lOroWOivYsbcT7ty9Z4Y28ApzECcCworAYXbeQNoLFSJKLoaESX6CPL6B0msHhSyOnXChA6wOMj041Odb8Qoso2XkBgcWw3w4fVKZrqbbT4XrhUNsOtJVjYVj0h4qA78_42RWi8esyWi9dYa1eC_XoZAHM4mFioPcqwVUoZjgcHrxbR8s27eLkN5ypqoAQcEQNKD7PVmVv3Cq92DD7qpbJgLWKn",
      path: "/services/smart-home"
    },
    { 
      title: "Home Renovation And Remodeling", 
      desc: "With extensive renovation services that blend beauty and utility to satisfy contemporary design trends.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDq1rDYL5ptDZHxSkC2UeX9jdJzm3EwnnkSHpfixjEB1npxWJKg2M8zWBJkTZEzx2GIv3p2sQzjrWPRmoRAgaB7FC9uVQ6-du1bmvz-uZlkaVca1Z77qJRqpUUQf9YhsfmoNEZJPKNvX3dpqYfGVh_xgsl1O-2MWKeclY7O435AXvpWtcwHgIsqP7PytzH7xaN_2ShYWLkEKWgj5b1RLh6QyNX_vZWxjnuCeNZwM_PWs_yYu5LAHOr15Hl3e4ROupWjkHA_21uI6sSB",
      path: "/services/home-renovation"
    },
    { 
      title: "Furniture Customization", 
      desc: "Customized furniture options that optimize comfort and usefulness while blending in with your interior decor.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuATuZje8gmP0BuZ22ClafQjdgd3NyX5c1yMvpYkrllA0YiHNco3R2l-kb6xrC0-WfuyReDwWpJSxb9BaYg9pm3RyooSalAJi_niL9teqjoUVyPDA4X9MJifeFoU3DdYPkpaLn-GFnclcfRNbwZuYePbYsrkDt-IHhrC1v5w7dNZ5Cir0HMlDsRBSKgEPLsoRbcBxTLiQuUB8t7QW4uZKepHJ9nie36oCufZqeMdo7syNPgodl9jjz7gOwumoxwGW_POes9IbY0vP2Ld",
      path: "/services/furniture-customization"
    },
    { 
      title: "Lighting Design And Installation", 
      desc: "Innovative lighting alternatives, such as mood lighting, accent lighting, and energy-efficient models.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrJ1vA3CxIb78rGeIw5-Pcfs7k5pLuSzw9uYr2yv7g9GaHFCyYvp0pOx4vo0SBto-optdhVTCotrPB2m5Ra5o9Q0xYX0pJcHUKYQCL9q6iRvGbB9DUSpY_K6yuPXe9OAC__FVGTWWwRNnhVCgdD1moR7x5CxWi8Y-I1zxJZghYYYUjip6FwHo9HJPpa5NFD0iSBxPSIuS1S3buOCjCgNrrmgEPEkvzMI-uv08BtRUNs59oQFduCPueng0WJoSd8o4VwMCXL0wNCXbl",
      path: "/services/lighting-design"
    }
  ];

  const filteredServices = servicesData.filter(service => 
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    service.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="pt-20 overflow-x-hidden">
      <Hero />
      
      {/* Search & Grid Navigation */}
      <section className="max-w-screen-2xl mx-auto px-8 pb-32 pt-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-[11px] font-bold uppercase tracking-[0.3em] mb-4 block">What We Do</span>
            <h2 className="text-4xl md:text-6xl font-serif text-on-surface tracking-tight leading-[1.1]">Our <span className="italic font-light text-on-surface-variant">Expertise</span></h2>
          </motion.div>
          
          <div className="flex flex-col items-start lg:items-end gap-3 w-full lg:w-auto">
            <div className="w-full md:w-[280px] bg-transparent border-b-2 border-primary flex items-center px-1 py-1.5 transition-all focus-within:border-primary-container focus-within:shadow-[0_1px_0_0_rgba(var(--primary-rgb),1)]">
              <span className="material-symbols-outlined text-2xl text-primary mr-1.5 font-black drop-shadow-[0_0_12px_rgba(var(--primary-rgb),0.6)]" style={{ fontVariationSettings: "'wght' 900" }}>
                search
              </span>
              <input 
                type="text" 
                placeholder="Search services..." 
                className="bg-transparent border-none outline-none focus:ring-0 text-on-surface w-full font-body text-sm placeholder:text-stone-500 placeholder:italic"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="ml-2 text-stone-300 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-sm">close</span>
                </button>
              )}
            </div>
            
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 pl-1 lg:pl-0">
              <span>{filteredServices.length} Results Found</span>
            </div>
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, i) => (
              <ServiceCard key={service.title} index={i} {...service} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredServices.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-40 bg-surface-container-lowest rounded-3xl border border-dashed border-outline-variant/30"
          >
            <span className="material-symbols-outlined text-6xl text-stone-200 mb-6 font-light">search_off</span>
            <h3 className="text-2xl font-headline text-stone-500 mb-2">No matching services found</h3>
            <p className="text-stone-400 font-body">Try searching for different keywords or browse our full collection.</p>
          </motion.div>
        )}
      </section>
      
      {/* CTA Section */}
      <section className="relative pt-24 pb-32 overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Background" 
            className="w-full h-full object-cover brightness-[0.2]" 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000"
          />
        </div>
        <motion.div 
          className="relative z-10 max-w-screen-xl mx-auto px-8 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter leading-tight uppercase"
            variants={fadeInUp}
          >
            Transform your home with <br/>
            <span className="text-primary italic font-serif">Appsulate today!</span>
          </motion.h2>
          <motion.p 
            className="text-stone-400 text-lg max-w-2xl mx-auto mb-12"
            variants={fadeInUp}
          >
            Partner with Appsulate Concepts to create a home that reflects your style and needs.
          </motion.p>
          <motion.form 
            className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto"
            variants={fadeInUp}
          >
            <input 
              className="flex-grow bg-white/10 border border-white/20 text-white placeholder:text-stone-300 rounded-md px-6 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none backdrop-blur-sm transition-all" 
              placeholder="Enter your Email" 
              type="email"
            />
            <button className="bg-primary hover:bg-primary-container text-white font-bold px-12 py-4 rounded-md transition-all shadow-xl shadow-primary/20 uppercase tracking-widest text-sm" type="submit">
              Send
            </button>
          </motion.form>
        </motion.div>
      </section>
    </main>
  );
};

export default Services;;
