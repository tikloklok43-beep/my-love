import React from 'react';
import { motion } from 'framer-motion';

const highlights = [
  {
    id: 1,
    icon: '✨',
    title: 'Calon istriku',
    description: 'Sayang, jangan lupa doakan aku ya… semoga Allah mudahkan segala urusanku dan melapangkan rezekiku, agar aku bisa segera menjadikan sayang sebagai istriku',
    glow: 'bg-gold/10'
  },
  {
    id: 2,
    icon: '🌸',
    title: 'Sayangku',
    description: 'Sayang, tetap sayang dan cinta sama aku ya 😁😁, Sampai nanti aku benar-benar jadi suami sayang 😁🤍',
    glow: 'bg-blush/20'
  },
  {
    id: 3,
    icon: '💫',
    title: 'Nabila cintaku',
    description: 'Aku di sini selalu mendoakan sayang, semoga Allah menjaga sayang dan mempertemukan kita dalam cara yang paling indah',
    glow: 'bg-rose/10'
  }
];

function EmotionalHighlights() {
  return (
    <section className="py-20 px-6 relative">
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-40 h-40 bg-gold/10 rounded-full blur-[60px]" />
        <div className="absolute bottom-1/3 left-0 w-32 h-32 bg-rose/10 rounded-full blur-[50px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <motion.h2
          className="font-playfair text-2xl md:text-3xl text-center text-purple mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Some things I want you to know
        </motion.h2>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item, index) => (
            <motion.div
              key={item.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
            >
              <div className={`glass-card rounded-2xl p-6 h-full transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 ${item.glow}`}>
                {/* Icon */}
                <motion.div
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  {item.icon}
                </motion.div>

                {/* Title */}
                <h3 className="font-playfair text-lg md:text-xl text-purple mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-inter text-sm text-purple-light leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative line */}
                <motion.div
                  className="mt-6 h-0.5 w-0 bg-gradient-to-r from-gold to-gold-light rounded-full"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <span className="text-3xl">💕</span>
        </motion.div>
      </div>
    </section>
  );
}

export default EmotionalHighlights;