"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import Image from "next/image";

// 30 kata romantis
const captions = [
  "My Forever Love",
  "Sweetest Memory",
  "Our Precious Time",
  "Always in My Heart",
  "Unforgettable Day",
  "You Are My Sunshine",
  "Endless Happiness",
  "Journey Together",
  "Our Little World",
  "Pure Happiness",
  "My Favorite Person",
];

// ganti length sesuai jumlah fotomu
const photos = Array.from({ length: 11 }, (_, i) => ({
  src: `/photos/${i + 1}.jpeg`,
  gradient: "from-rose-500/20 to-pink-500/20",
  title: captions[i],
}));

export default function GalleryCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % photos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto mt-12 px-4">
      {/* Main carousel container */}
      <div className="relative h-[500px] overflow-hidden rounded-3xl bg-gradient-to-br from-rose-50/50 via-white/30 to-purple-50/50 backdrop-blur-sm border border-white/20 shadow-2xl">
        
        {/* Background romantic glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/30 via-transparent to-rose-100/30" />
        
        {/* Floating hearts animation */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-rose-300/40"
              style={{
                left: `${20 + i * 12}%`,
                top: `${15 + i * 10}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut",
              }}
            >
              <Heart size={16} fill="currentColor" />
            </motion.div>
          ))}
        </div>

        {/* Photo container */}
        <div className="absolute inset-8 flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="relative"
              initial={{
                opacity: 0,
                x: direction * 100,
                scale: 0.9,
                rotateY: direction * 15,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
                rotateY: 0,
              }}
              exit={{
                opacity: 0,
                x: direction * -100,
                scale: 0.9,
                rotateY: direction * -15,
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              {/* Photo frame */}
              <div className="relative w-[360px] h-[420px] overflow-hidden rounded-xl border-4 border-white/50 shadow-2xl">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${photos[index].gradient} z-10`} />
                
                {/* Photo */}
                <Image
                  src={photos[index].src}
                  alt={photos[index].title}
                  width={360}
                  height={420}
                  className="w-full h-full object-cover"
                />
                
                {/* Photo title */}
                <motion.div
                  className="absolute bottom-4 left-4 right-4 z-20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="text-white text-lg font-medium drop-shadow-lg">
                    {photos[index].title}
                  </p>
                </motion.div>

                {/* Sparkle effect */}
                <motion.div
                  className="absolute top-4 right-4 text-yellow-300 z-20"
                  animate={{
                    rotate: [0, 180, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  ✨
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
