import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OpeningScene from './components/OpeningScene';
import PersonalMessage from './components/PersonalMessage';
import EmotionalHighlights from './components/EmotionalHighlights';
import MemorySection from './components/MemorySection';
import FinalConfession from './components/FinalConfession';
import EndingScene from './components/EndingScene';
import AudioControl from './components/AudioControl';
import FloatingParticles from './components/FloatingParticles';

function App() {
  const [started, setStarted] = useState(false);
  const [name, setName] = useState('My Love');
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioReady, setAudioReady] = useState(false);
  const audioRef = useRef(null);
  const hasInteracted = useRef(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const nameParam = params.get('name');
    if (nameParam) {
      setName(decodeURIComponent(nameParam));
    }

    // Initialize audio immediately and try to autoplay
    const audio = new Audio('/music/bark alla lakuma بارك الله ماهر زين.mp3');
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    // Try to play immediately (may be blocked by browser)
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          setAudioReady(true);
          hasInteracted.current = true;
        })
        .catch(() => {
          // Autoplay blocked, will play on first user interaction
          setAudioReady(true);
        });
    }

    // Fallback: play on first user interaction if autoplay failed
    const handleFirstInteraction = () => {
      if (!hasInteracted.current && audioRef.current) {
        hasInteracted.current = true;
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(() => {});
        document.removeEventListener('click', handleFirstInteraction);
        document.removeEventListener('keydown', handleFirstInteraction);
      }
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('keydown', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };
  }, []);

  const handleStart = useCallback(() => {
    if (!started) {
      setStarted(true);
    }
  }, [started]);

  // Ensure audio continues playing when started
  useEffect(() => {
    if (started && audioRef.current && !isPlaying) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setAudioReady(true);
        })
        .catch(() => {
          setAudioReady(true);
        });
    }
  }, [started, isPlaying]);

  const togglePlay = useCallback(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => setIsPlaying(true));
      }
    }
  }, [isPlaying]);

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      <FloatingParticles />
      
      <AnimatePresence>
        {!started && (
          <OpeningScene onStart={handleStart} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {started && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <PersonalMessage name={name} />
            <EmotionalHighlights />
            <MemorySection />
            <FinalConfession name={name} />
            <EndingScene />
          </motion.div>
        )}
      </AnimatePresence>

      {started && audioReady && (
        <AudioControl isPlaying={isPlaying} onToggle={togglePlay} />
      )}
    </div>
  );
}

export default App;