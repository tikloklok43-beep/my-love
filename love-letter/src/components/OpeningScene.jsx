import React from 'react';
import { motion } from 'framer-motion';

function OpeningScene({ onStart }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative px-6 py-12">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-rose/10 rounded-full blur-[80px]" />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-blush/30 rounded-full blur-[60px]" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {/* Decorative hearts */}
        <motion.div
          className="text-4xl mb-8"
          animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          💕
        </motion.div>

        {/* Main text */}
        <motion.h1
          className="font-playfair text-3xl md:text-4xl lg:text-5xl text-purple leading-tight mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          This is something I made…<br />
          <span className="gold-gradient">just for you</span>
        </motion.h1>

        <motion.p
          className="font-lora text-purple-light text-lg md:text-xl mt-6 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          A little digital piece of my heart,<br />
          designed with love 😁😄
        </motion.p>

        {/* CTA Button */}
        <motion.button
          onClick={onStart}
          className="group relative px-10 py-4 rounded-full font-inter font-medium text-sm md:text-base overflow-hidden cursor-pointer"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Button gradient background */}
          <span className="absolute inset-0 bg-gradient-to-r from-gold via-gold-light to-gold opacity-90 group-hover:opacity-100 transition-opacity" />
          
          {/* Shine effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shine transition-transform duration-700" />
          
          {/* Button content */}
          <span className="relative flex items-center gap-2 text-purple font-semibold">
            Open My Heart
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              💖
            </motion.span>
          </span>
        </motion.button>
      </motion.div>

      {/* Scroll hint */}
      <motion.p
        className="absolute bottom-8 font-inter text-xs text-purple-light/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        Scroll to explore
      </motion.p>
    </div>
  );
}

export default OpeningScene;