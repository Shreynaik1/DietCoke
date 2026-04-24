import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroImg from '../assets/hero.png';
import limeImg from '../assets/lime.png';
import cherryImg from '../assets/cherry.png';

const products = [
  {
    id: 'classic',
    name: 'Classic Diet Cola',
    color: '#e0e0e0',
    bg: 'from-zinc-800 to-black',
    glow: 'bg-white/20',
    img: heroImg,
    tagline: 'The iconic silver standard.',
  },
  {
    id: 'lime',
    name: 'Diet Cola Lime',
    color: '#84cc16', // lime-500
    bg: 'from-lime-900/40 to-black',
    glow: 'bg-lime-500/20',
    img: limeImg,
    tagline: 'A zesty twist of citrus.',
  },
  {
    id: 'cherry',
    name: 'Diet Cola Cherry',
    color: '#e11d48', // rose-600
    bg: 'from-rose-900/40 to-black',
    glow: 'bg-rose-500/20',
    img: cherryImg,
    tagline: 'Bold, dark, and deliciously fruity.',
  }
];

const Products = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeProduct = products[activeIdx];

  return (
    <div className={`min-h-screen pt-24 pb-12 transition-colors duration-1000 bg-gradient-to-b ${activeProduct.bg}`}>
      
      {/* Background glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] blur-[150px] rounded-full mix-blend-screen pointer-events-none transition-colors duration-1000 ${activeProduct.glow}`} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center relative z-10">
        
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-4">
            Find Your <span style={{ color: activeProduct.color }} className="transition-colors duration-1000">Flavor</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Zero calories. Maximum attitude. Explore the lineup.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-16 w-full mt-8">
          
          {/* Selector */}
          <div className="flex md:flex-col gap-6 order-2 md:order-1">
            {products.map((p, idx) => (
              <button 
                key={p.id}
                onClick={() => setActiveIdx(idx)}
                className={`text-xl md:text-3xl font-bold uppercase tracking-wider transition-all duration-300 text-left ${activeIdx === idx ? 'text-white scale-110 ml-4 md:ml-8' : 'text-gray-600 hover:text-gray-400'}`}
              >
                {p.name}
              </button>
            ))}
          </div>

          {/* Product Image */}
          <div className="relative w-full max-w-md h-[500px] flex justify-center items-center order-1 md:order-2">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeProduct.id}
                initial={{ opacity: 0, y: 50, rotate: -5 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                exit={{ opacity: 0, y: -50, rotate: 5 }}
                transition={{ duration: 0.5 }}
                src={activeProduct.img}
                alt={activeProduct.name}
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </AnimatePresence>
          </div>

          {/* Details */}
          <div className="flex flex-col items-center md:items-start order-3 text-center md:text-left max-w-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-3xl font-bold mb-4" style={{ color: activeProduct.color }}>
                  {activeProduct.name}
                </h3>
                <p className="text-gray-300 text-lg mb-8">
                  {activeProduct.tagline}
                </p>
                <button 
                  className="px-8 py-3 rounded-full text-black font-bold uppercase tracking-widest hover:scale-105 transition-transform"
                  style={{ backgroundColor: activeProduct.color }}
                >
                  Buy Now
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Products;
