import React from 'react';
import { motion } from 'framer-motion';

const Nutrition = () => {
  return (
    <div className="min-h-screen pt-32 pb-16 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6">
            Zero <span className="text-primary">Compromise</span>
          </h1>
          <p className="text-xl text-gray-400">
            All the bold, refreshing taste. None of the calories.
          </p>
        </motion.div>

        {/* Big Zero Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-24">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-64 h-64 rounded-full border-[16px] border-primary flex items-center justify-center relative shadow-[0_0_50px_rgba(244,0,9,0.3)]"
          >
            <div className="text-8xl font-black text-white">0</div>
            <div className="absolute -bottom-8 bg-zinc-900 px-6 py-2 rounded-full border border-zinc-800 font-bold uppercase tracking-widest text-sm">
              Calories
            </div>
          </motion.div>

          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="w-64 h-64 rounded-full border-[16px] border-white flex items-center justify-center relative shadow-[0_0_50px_rgba(255,255,255,0.1)]"
          >
            <div className="text-8xl font-black text-white">0</div>
            <div className="absolute -bottom-8 bg-zinc-900 px-6 py-2 rounded-full border border-zinc-800 font-bold uppercase tracking-widest text-sm">
              Sugar
            </div>
          </motion.div>
        </div>

        {/* Nutrition Table */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-black border border-zinc-800 rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-2xl font-bold uppercase tracking-wide text-white mb-8 border-b border-zinc-800 pb-4">Nutrition Facts</h2>
          <div className="space-y-4 font-mono text-sm md:text-base">
            <div className="flex justify-between border-b border-zinc-900 pb-4">
              <span className="text-gray-400">Serving Size</span>
              <span className="text-white font-bold">1 Can (12 fl oz)</span>
            </div>
            <div className="flex justify-between border-b border-zinc-900 pb-4">
              <span className="text-gray-400">Calories</span>
              <span className="text-white font-bold">0</span>
            </div>
            <div className="flex justify-between border-b border-zinc-900 pb-4">
              <span className="text-gray-400">Total Fat</span>
              <span className="text-white font-bold">0g (0% DV)</span>
            </div>
            <div className="flex justify-between border-b border-zinc-900 pb-4">
              <span className="text-gray-400">Sodium</span>
              <span className="text-white font-bold">40mg (2% DV)</span>
            </div>
            <div className="flex justify-between border-b border-zinc-900 pb-4">
              <span className="text-gray-400">Total Carbohydrate</span>
              <span className="text-white font-bold">0g (0% DV)</span>
            </div>
            <div className="flex justify-between pb-2">
              <span className="text-gray-400">Protein</span>
              <span className="text-white font-bold">0g</span>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-8 font-sans">
            *The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default Nutrition;
