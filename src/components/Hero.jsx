import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-zinc-900 to-black pt-20">
      {/* Background abstract glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-primary/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-6 text-center md:text-left"
        >
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-white">
            Just For The <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-400">
              Taste Of It.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-lg mx-auto md:mx-0">
            Zero sugar. Zero calories. Unapologetically refreshing. Experience the crisp, bold taste of Diet Cola.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center md:justify-start">
            <button className="px-8 py-4 bg-primary text-white font-bold tracking-widest uppercase rounded-full hover:bg-red-700 transition-colors duration-300 w-full sm:w-auto shadow-[0_0_20px_rgba(244,0,9,0.4)]">
              Get Yours Now
            </button>
            <button className="px-8 py-4 bg-transparent border border-white text-white font-bold tracking-widest uppercase rounded-full hover:bg-white hover:text-black transition-colors duration-300 w-full sm:w-auto">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <motion.img 
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            src={heroImg} 
            alt="Diet Cola Can" 
            className="w-full max-w-md md:max-w-lg object-contain drop-shadow-2xl filter contrast-125"
          />
          {/* Subtle reflection */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-10 bg-gradient-to-t from-transparent to-white/10 blur-xl rounded-full" />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
