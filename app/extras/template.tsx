"use client";

import { motion } from "framer-motion";
import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  // Define how long you want the fake loading screen to stay visible
  const LOADING_DELAY = 1.2; 

  return (
    <div className="relative min-h-screen w-full">
      
      {/* 1. THE FAKE LOADING OVERLAY */}
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ 
          opacity: 0, 
          y: "-100%", // Slides up and out of the viewport
          transitionEnd: { display: "none" } // CRITICAL: Removes the invisible div so you can click the page
        }}
        transition={{ 
          duration: 0.8, 
          delay: LOADING_DELAY, 
          ease: "easeInOut" 
        }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 text-blue-200"
      >
        <div className="flex flex-row items-center gap-12">
          {/* Animated Line Indicator */}
          <motion.div 
            className="h-32 w-[2px] bg-blue-400/50"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ 
              duration: 0.6, 
              repeat: Infinity, 
              repeatType: "reverse", 
              ease: "easeInOut" 
            }}
          />

          {/* Vertical Japanese stylized text */}
          <div className="flex flex-col items-center gap-6">
            <p className="font-tegaki text-5xl tracking-widest drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] [writing-mode:vertical-rl]">
              読み込み中
            </p>
            <p className="font-handjet text-lg tracking-widest text-slate-400">
              LOADING...
            </p>
          </div>
        </div>
      </motion.div>

      {/* 2. THE ACTUAL PAGE CONTENT ENTRANCE */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ 
          duration: 0.8, 
          delay: LOADING_DELAY, // Starts fading in right as the loading screen leaves
          ease: "easeOut" 
        }}
        className="h-full w-full"
      >
        {children}
      </motion.div>

    </div>
  );
}