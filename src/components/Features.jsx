import React from 'react';
import { motion } from 'framer-motion';
import { Droplet, Zap, Heart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Droplet size={40} className="text-primary" />,
      title: "Crisp & Refreshing",
      description: "Served ice cold, it's the perfect companion for any moment that demands a burst of flavor."
    },
    {
      icon: <Zap size={40} className="text-primary" />,
      title: "Zero Calories",
      description: "All the taste you love without the sugar. Guilt-free refreshment anytime."
    },
    {
      icon: <Heart size={40} className="text-primary" />,
      title: "Bold Attitude",
      description: "Not just a drink, it's a lifestyle. Unapologetic, authentic, and always extraordinary."
    }
  ];

  return (
    <section id="discover" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6">
            The <span className="text-primary">Iconic</span> Taste
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Every drop is crafted to perfection. Discover why millions choose the silver standard of refreshment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 hover:border-zinc-600 transition-colors group"
            >
              <div className="bg-black w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
