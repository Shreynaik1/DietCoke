import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import campaignImg from '../assets/campaign.png';
import drinkingImg from '../assets/drinking.png';
import heroImg from '../assets/hero.png';

const Campaigns = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white"
        >
          The <span className="text-primary">Lookbook</span>
        </motion.h1>
      </div>

      {/* Hero Parallax Image */}
      <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden border-y border-zinc-800">
        <motion.img 
          style={{ y }}
          src={campaignImg}
          alt="Diet Cola Editorial Campaign"
          className="absolute inset-0 w-full h-[130%] object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        
        <div className="absolute bottom-12 left-6 md:left-12 max-w-xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="px-4 py-1 border border-white text-white text-xs font-bold uppercase tracking-widest mb-4 inline-block backdrop-blur-sm bg-black/30">
              Summer Collection
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-none uppercase mb-4 shadow-black drop-shadow-2xl">
              Unapologetic.
            </h2>
            <p className="text-gray-300 text-lg drop-shadow-md font-medium max-w-md">
              Style is an attitude. Refreshment is a choice. Make it bold.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Grid Gallery */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Backstage */}
          <div className="bg-zinc-900 aspect-[3/4] md:aspect-square rounded-2xl flex flex-col justify-end relative overflow-hidden group border border-zinc-800 hover:border-primary/50 transition-colors">
            <img src={campaignImg} alt="Backstage" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000 grayscale contrast-125" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="relative z-10 p-8 flex flex-col justify-end h-full">
              <div className="mt-auto">
                <h3 className="text-2xl font-bold text-white uppercase mb-2">Backstage</h3>
                <p className="text-gray-300 text-sm">Behind the scenes of our latest shoot.</p>
                <button className="mt-4 uppercase text-xs font-bold text-primary tracking-widest hover:text-white transition-colors">Watch Video</button>
              </div>
            </div>
          </div>
          
          {/* The Taste */}
          <div className="bg-zinc-900 aspect-[3/4] md:aspect-square rounded-2xl flex flex-col justify-end relative overflow-hidden group border border-zinc-800 hover:border-primary/50 transition-colors">
            <img src={drinkingImg} alt="Model drinking" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="relative z-10 p-8 flex flex-col justify-end h-full">
              <div className="mt-auto">
                <h3 className="text-2xl font-bold text-white uppercase mb-2">The Taste</h3>
                <p className="text-gray-300 text-sm">Crisp, bold, undeniably refreshing.</p>
                <button className="mt-4 uppercase text-xs font-bold text-primary tracking-widest hover:text-white transition-colors">View Gallery</button>
              </div>
            </div>
          </div>

          {/* The Archive */}
          <div className="bg-zinc-900 aspect-[3/4] md:aspect-square rounded-2xl flex flex-col justify-end relative overflow-hidden group border border-zinc-800 hover:border-primary/50 transition-colors">
            <img src={heroImg} alt="The Archive" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000 filter brightness-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            <div className="relative z-10 p-8 flex flex-col justify-end h-full">
              <div className="mt-auto">
                <h3 className="text-2xl font-bold text-white uppercase mb-2">The Archive</h3>
                <p className="text-gray-300 text-sm">Classic campaigns from the vault.</p>
                <button className="mt-4 uppercase text-xs font-bold text-primary tracking-widest hover:text-white transition-colors">Explore</button>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Campaigns;
