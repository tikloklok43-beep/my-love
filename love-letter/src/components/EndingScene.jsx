import React from 'react';
import { motion } from 'framer-motion';

function EndingScene() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 relative overflow-hidden">
      {/* Animated glowing background */}
      <div className="absolute inset-0">
        {/* Multiple glow orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold/20 rounded-full blur-[80px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-rose/15 rounded-full blur-[60px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blush/20 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Floating hearts in background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          >
            {i % 3 === 0 ? '💕' : i % 3 === 1 ? '💖' : '💗'}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-md">
        {/* Thank you message */}
        <motion.p
          className="font-playfair text-2xl md:text-3xl text-purple mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Terima kasih sudah menemaniku 
        </motion.p>

        <motion.p
          className="font-playfair text-2xl md:text-3xl text-purple mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          sayangku<span className="gold-gradient"> nabila</span> 💖
        </motion.p>

        {/* Decorative hearts */}
        <motion.div
          className="flex justify-center gap-4 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[...Array(7)].map((_, i) => (
            <motion.span
              key={i}
              className="text-3xl"
              animate={{ 
                y: [0, -12, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: i * 0.15,
                ease: "easeInOut" 
              }}
            >
              {i % 4 === 0 ? '💕' : i % 4 === 1 ? '💖' : i % 4 === 2 ? '💗' : '💘'}
            </motion.span>
          ))}
        </motion.div>

        {/* Final message */}
        <motion.p
          className="font-lora text-lg text-purple-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Here's to us, to love, and to forever 💫
        </motion.p>

        {/* Sparkle effect container */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gold rounded-full"
              style={{
                left: `${15 + Math.random() * 70}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Footer text */}
      <motion.p
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-inter text-xs text-purple-light/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        By Iski 💖 for Nabila
      </motion.p>
    </section>
  );
}

export default EndingScene;