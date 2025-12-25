import { useState } from "react";
import { motion } from "framer-motion";
import { letterPaths } from "./svgPaths";

export function HandwritingAnimation() {
  const [animationCompleted, setAnimationCompleted] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full h-screen flex items-center justify-center bg-black"
    >
      <motion.svg
        viewBox="0 0 1050 200"
        className="max-w-full max-h-full px-4"
        initial={{ scale: 0.3 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.34, 1.56, 0.64, 1], // Bouncy Netflix-style easing
          delay: 0.2,
        }}
      >
        <defs>
          <linearGradient id="netflixTextGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#E50914' }} />
            <stop offset="100%" style={{ stopColor: '#B20710' }} />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {letterPaths.map((letter, index) => (
          <motion.path
            key={letter.id}
            d={letter.path}
            stroke={animationCompleted ? "none" : "#E50914"}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{
              pathLength: 0,
              opacity: 0,
              fill: "transparent",
            }}
            animate={{
              pathLength: 1,
              opacity: 1,
              fill: animationCompleted ? "url(#netflixTextGradient)" : "transparent",
            }}
            transition={{
              pathLength: {
                duration: 0.4,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1], // Netflix-style smooth ease
              },
              opacity: {
                duration: 0.2,
                delay: index * 0.2,
                ease: "easeOut",
              },
              fill: {
                duration: 0.4,
                delay: 0,
                ease: "easeInOut",
              },
            }}
            filter={animationCompleted ? "url(#glow)" : "none"}
            onAnimationComplete={() => {
              if (index === letterPaths.length - 1) {
                setAnimationCompleted(true);
              }
            }}
          />
        ))}
      </motion.svg>

      {/* Netflix-style flash effect */}
      {animationCompleted && (
        <motion.div
          className="absolute inset-0 bg-white pointer-events-none"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      )}
    </motion.div>
  );
}
