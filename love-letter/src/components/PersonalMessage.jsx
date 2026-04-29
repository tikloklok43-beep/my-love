import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function PersonalMessage({ name }) {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const message = `Sayang, gimana kabarnya? 😁.

Aku harap sayang selalu baik-baik ya, sayangku.

Jujur aku kangen banget sama sayang. Tapi aku ingat kita sudah sama-sama janji untuk tidak saling chat lagi… insyaAllah ini yang terbaik untuk kita berdua.

Semoga sayang tidak keberatan kalau sesekali aku kirim hal kecil seperti ini lewat online. Anggap saja ini cara aku melepas rindu, karena aku benar-benar kangen sama sayang.

Oh iya, aku kan pernah janji beliin vitamin. Jangan lupa diminum ya, biar aku senang lihat calon istriku tetap sehat.

Jaga diri baik-baik ya, sayang 🤍.`;

  useEffect(() => {
    let index = 0;
    const timeout = setTimeout(() => {
      const typeInterval = setInterval(() => {
        if (index < message.length) {
          setDisplayText(message.slice(0, index + 1));
          index++;
        } else {
          clearInterval(typeInterval);
        }
      }, 40);
      return () => clearInterval(typeInterval);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-cream to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cream to-transparent" />
      </div>

      <motion.div
        className="relative z-10 max-w-2xl w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        {/* Glass card */}
        <div className="glass-card rounded-3xl p-8 md:p-12">
          {/* Greeting */}
          <motion.p
            className="font-greatvibes text-4xl md:text-5xl text-rose mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Dear {name},
          </motion.p>

          {/* Message with typing effect */}
          <div className="font-lora text-base md:text-lg leading-relaxed text-purple whitespace-pre-wrap">
            {displayText}
            {showCursor && (
              <motion.span
                className="inline-block w-0.5 h-6 md:h-7 bg-rose ml-0.5"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.53, repeat: Infinity }}
              />
            )}
          </div>

          {/* Decorative hearts at bottom */}
          <motion.div
            className="flex justify-center gap-4 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <span className="text-2xl">💝</span>
            <span className="text-2xl">💗</span>
            <span className="text-2xl">💖</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default PersonalMessage;