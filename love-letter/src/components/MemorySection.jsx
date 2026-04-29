import React from 'react';
import { motion } from 'framer-motion';

function MemorySection() {
  return (
    <section className="relative py-20 px-0 md:px-6 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-cream via-blush/10 to-cream" />
      </div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Image container with glass effect */}
        <div className="relative mx-4 md:mx-0">
          {/* Decorative frame */}
          <div className="absolute -inset-4 bg-gradient-to-br from-gold/30 via-blush/20 to-rose/20 rounded-3xl blur-xl" />
          
          {/* Main image area */}
          <motion.div
            className="relative rounded-2xl overflow-hidden aspect-[4/3] md:aspect-[16/9]"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.5 }}
          >
            {/* Gradient background as placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple/5 via-blush/20 to-cream" />
            
            {/* Decorative elements */}
            <div className="absolute top-8 left-8 text-6xl opacity-20">💑</div>
            <div className="absolute bottom-8 right-8 text-5xl opacity-15">🌹</div>
            <div className="absolute top-1/2 right-1/4 text-4xl opacity-10">✨</div>
            <div className="absolute bottom-1/3 left-1/4 text-3xl opacity-10">💫</div>
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple/60 via-transparent to-purple/20" />
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <motion.p
                className="font-greatvibes text-4xl md:text-5xl text-black mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Our Story
              </motion.p>
              
              <motion.p
                className="font-lora text-lg md:text-xl text-black max-w-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
               كُلُّ لَحْظَةٍ مَعَكِ هِيَ ذِكْرَى أَحْتَفِظُ بِهَا عَمِيقًا فِي قَلْبِي 🤍
              </motion.p>
              
              <motion.div
                className="flex gap-4 mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <span className="text-3xl">💖</span>
                <span className="text-3xl">💕</span>
                <span className="text-3xl">💗</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Quote below */}
        <motion.p
          className="font-playfair text-xl md:text-2xl text-center text-purple mt-10 px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="italic">"</span> I love you sayangku cintaku <span className="italic">"</span>
        </motion.p>
      </motion.div>
    </section>
  );
}

export default MemorySection;