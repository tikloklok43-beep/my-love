import React from 'react';
import { motion } from 'framer-motion';

function AudioControl({ isPlaying, onToggle }) {
  return (
    <motion.button
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full glass-card flex items-center justify-center cursor-pointer group"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      onClick={onToggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-gold/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Icon */}
      <motion.span
        className="relative text-xl"
        animate={{ scale: isPlaying ? 1 : 1 }}
      >
        {isPlaying ? '🎵' : '🔇'}
      </motion.span>
      
      {/* Pulse indicator when playing */}
      {isPlaying && (
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-gold/50"
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      )}
    </motion.button>
  );
}

export default AudioControl;