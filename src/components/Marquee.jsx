import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
  return (
    <div className="py-12 bg-primary overflow-hidden flex whitespace-nowrap border-y border-zinc-800">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 10,
        }}
        className="flex space-x-8 text-black font-black text-6xl md:text-8xl uppercase tracking-tighter"
      >
        <span>ZERO SUGAR. ZERO CALORIES. 100% ATTITUDE.</span>
        <span>ZERO SUGAR. ZERO CALORIES. 100% ATTITUDE.</span>
        <span>ZERO SUGAR. ZERO CALORIES. 100% ATTITUDE.</span>
        <span>ZERO SUGAR. ZERO CALORIES. 100% ATTITUDE.</span>
      </motion.div>
    </div>
  );
};

export default Marquee;
