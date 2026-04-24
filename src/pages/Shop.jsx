import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero.png';
import limeImg from '../assets/lime.png';
import cherryImg from '../assets/cherry.png';
import drinkingImg from '../assets/drinking.png';

const shopItems = [
  { id: 1, name: "Diet Cola Classic (12-Pack)", price: "$14.99", img: heroImg, category: "Beverage" },
  { id: 2, name: "Diet Cola Lime (12-Pack)", price: "$15.99", img: limeImg, category: "Beverage" },
  { id: 3, name: "Diet Cola Cherry (12-Pack)", price: "$15.99", img: cherryImg, category: "Beverage" },
  { id: 4, name: "Vintage Logo Tee", price: "$29.99", img: drinkingImg, category: "Apparel" }
];

const Shop = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-baseline mb-16 border-b border-zinc-800 pb-8"
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
            The <span className="text-primary">Shop</span>
          </h1>
          <p className="text-gray-400 font-medium mt-4 md:mt-0 uppercase tracking-widest text-sm">
            Stock up on the silver standard.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {shopItems.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-black border border-zinc-800 rounded-2xl p-6 flex flex-col h-full group hover:border-primary/50 transition-colors"
            >
              <div className="aspect-square w-full relative mb-6 overflow-hidden rounded-xl bg-zinc-900 flex items-center justify-center p-4">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className={`w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 ${item.category === 'Apparel' ? 'opacity-80 grayscale contrast-125' : ''}`}
                />
              </div>
              <div className="flex flex-col flex-grow">
                <span className="text-xs text-primary font-bold uppercase tracking-widest">{item.category}</span>
                <h3 className="text-lg font-bold text-white mt-1 flex-grow">{item.name}</h3>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-gray-300 font-mono text-lg">{item.price}</span>
                  <button className="px-4 py-2 bg-white text-black text-sm font-bold uppercase tracking-wider rounded-full hover:bg-primary hover:text-white transition-colors">
                    Add
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
