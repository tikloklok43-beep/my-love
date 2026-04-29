import React from 'react';
import { motion } from 'framer-motion';

function FinalConfession({ name }) {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 relative">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-rose/10 rounded-full blur-[60px]" />
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-blush/20 rounded-full blur-[50px]" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Main confession */}
        <motion.p
          className="font-playfair text-3xl md:text-4xl lg:text-5xl text-purple leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          Maaf lebayy dikittt😁
        </motion.p>

        <motion.p
          className="font-playfair text-3xl md:text-4xl lg:text-5xl text-purple leading-tight mt-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          ya sayangku <span className="gold-gradient">Nabila 💞</span>
        </motion.p>

        {/* Decorative line */}
        <motion.div
          className="relative h-px max-w-xs mx-auto mt-10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gold rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Emotion description */}
        <motion.p
          className="font-lora text-lg md:text-xl text-purple-light mt-10 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Semoga Allah menjaga kita,
          menyatukan kita dalam kebaikan,dan menjadikan kita bersama hingga halal nanti, Allahumma amiin.
        </motion.p>

        {/* Hearts */}
        <motion.div
          className="flex justify-center gap-6 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.span
              key={i}
              className="text-2xl"
              animate={{ y: [0, -8, 0], scale: [1, 1.1, 1] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: i * 0.2,
                ease: "easeInOut" 
              }}
            >
              {i % 2 === 0 ? '💖' : '💕'}
            </motion.span>
          ))}
        </motion.div>

        {/* Signature */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="font-inter text-sm text-purple-light/70">
            — From someone who truly cares
          </p>
          <p className="font-greatvibes text-3xl text-rose mt-2">
            With all my heart, {name}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default FinalConfession;