"use client"
import { motion } from "framer-motion";

export default function WavyBackground({ darkMode }: { darkMode: boolean }) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
      <motion.div
        animate={{
          rotate: [0, 360],
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 40% / 50% 60% 30% 60%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 15, // Slow, ambient movement
          ease: "linear",
        }}
        className={`absolute w-[120vw] h-[120vw] max-w-[800px] max-h-[800px] opacity-40 blur-3xl ${
          darkMode ? "bg-blue-800" : "bg-blue-400"
        }`}
      />
    </div>
  );
}