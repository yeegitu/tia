"use client";

import { motion } from "framer-motion";

export default function FloatingWordsModern() {
  const lines = [
    { text: "Tia Cantik", size: "text-[8vw] md:text-5xl font-extrabold", isTime: false, isQuote: false },
    { text: "A woman destined to conquer the world and achieve greatness.", size: "text-sm md:text-xl font-medium", isTime: false, isQuote: true },
    { text: `${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`, size: "text-sm md:text-xl font-light", isTime: true, isQuote: false }
  ];

  return (
    <div className="mt-8 mb-[6rem] md:mb-[8rem] text-center space-y-3 z-10">
      {lines.map((line, i) => (
        line.isTime ? (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.3, type: "spring", stiffness: 100 }}
            className="inline-block"
          >
            <div className="relative px-8 py-4 bg-gradient-to-br from-rose-400/20 via-pink-400/20 to-orange-400/20 backdrop-blur-md rounded-2xl border-2 border-rose-300/50 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-2xl"></div>
              <p className={`${line.size} bg-gradient-to-r from-rose-600 via-pink-500 to-orange-500 bg-clip-text text-transparent font-bold relative z-10`}>
                ⏰ {line.text}
              </p>
            </div>
          </motion.div>
        ) : line.isQuote ? (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: i * 0.3,
              type: "spring",
              stiffness: 80,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 3,
              duration: 2
            }}
            className={`${line.size} bg-gradient-to-r from-pink-400 via-rose-300 to-orange-300 bg-clip-text text-transparent drop-shadow-lg italic`}
          >
            ✨ {line.text} ✨
          </motion.p>
        ) : (
          <motion.p
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: i * 0.3,
              duration: 2,    // ⭐ ZOOM IN PELAN
              ease: "easeOut"
            }}
            className={`${line.size} text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]`}
          >
            {line.text}
          </motion.p>
        )
      ))}
    </div>
  );
}
