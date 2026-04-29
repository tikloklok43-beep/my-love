import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const particles = [...Array(20)];

function FloatingParticles() {
  const particleData = useMemo(() => {
    return particles.map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 12 + 8,
      delay: Math.random() * 5,
      duration: Math.random() * 8 + 8,
      emoji: i % 5 === 0 ? '💕' : i % 5 === 1 ? '💖' : i % 5 === 2 ? '✨' : i % 5 === 3 ? '💫' : '🦋',
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particleData.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: particle.left,
            bottom: '-20px',
            fontSize: particle.size,
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            opacity: [0, 1, 1, 0],
            x: [0, Math.sin(particle.id) * 30, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'linear',
            delay: particle.delay,
          }}
        >
          {particle.emoji}
        </motion.div>
      ))}
    </div>
  );
}

export default FloatingParticles;