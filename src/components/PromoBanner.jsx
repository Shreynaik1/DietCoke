import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import bannerImg from '../assets/drinking.png';

const PromoBanner = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden border-y border-zinc-800">
      <motion.img 
        style={{ y }}
        src={bannerImg} 
        alt="Model drinking Diet Cola" 
        className="absolute inset-0 w-full h-[120%] object-cover opacity-80 filter grayscale contrast-125"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
      
      <div className="relative z-10 text-center px-6">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white drop-shadow-2xl"
        >
          Break The <span className="text-primary block md:inline">Rules</span>
        </motion.h2>
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8 px-10 py-4 bg-white text-black font-bold tracking-widest uppercase rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
        >
          Shop The Collection
        </motion.button>
      </div>
    </section>
  );
};

export default PromoBanner;
