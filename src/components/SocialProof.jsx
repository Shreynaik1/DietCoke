import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const SocialProof = () => {
  const reviews = [
    { name: "Alex J.", handle: "@alexj_style", review: "The only drink that matches my aesthetic. Cold, crisp, perfect." },
    { name: "Sam R.", handle: "@samruns", review: "Zero calories but packs a serious punch of flavor. My go-to every afternoon." },
    { name: "Jordan T.", handle: "@jordan_creative", review: "Nothing beats the sound of cracking open a cold silver can." }
  ];

  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">
            Loved By <span className="text-primary">Millions</span>
          </h2>
          <p className="text-gray-400">Don't just take our word for it.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-black p-8 rounded-3xl border border-zinc-800 flex flex-col justify-between hover:border-primary/50 transition-colors"
            >
              <div>
                <div className="flex space-x-1 mb-6 text-primary">
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                </div>
                <p className="text-lg text-gray-300 italic mb-8">"{review.review}"</p>
              </div>
              <div>
                <h4 className="text-white font-bold">{review.name}</h4>
                <p className="text-gray-500 text-sm">{review.handle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
