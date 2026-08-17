"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useUserPreferences } from "../store";
import { PiMoonStarsFill, PiGithubLogoFill, PiInstagramLogoFill, PiSteamLogoFill, PiArrowLeftBold } from "react-icons/pi";

// Generates a fibrous, gritty texture mimicking dark paper or cardboard
const paperTexture = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`;

const tabData: Record<string, { title: string; content: string[] }> = {
  "Common Chords": {
    title: "Common Chords",
    content: ["Loading standard chord shapes...", "Content will be populated from Markdown files."]
  },
  "Power Chords": {
    title: "Power Chords",
    content: ["Power chords are the foundation of rock.", "Composed solely of the root and fifth intervals."]
  },
  "7th Chords": {
    title: "7th Chords",
    content: ["Major 7th, Minor 7th, Dominant 7th.", "Adding color and jazz to your standard progressions."]
  },
  "Overtone Alignment": {
    title: "Overtone Alignment",
    content: ["The physics of string vibration.", "How harmonics align to create pleasing intervals."]
  },
  "Scale Degrees": {
    title: "Scale Degrees and Intervals",
    content: [
      "The core foundation of scale degrees and intervals are just lines that add colors, and understanding scales is all about intervals.",
      "This is the second line of filler text to demonstrate the layout. When playing a melody or doing improvisation, intervals dictate the emotion."
    ]
  }
};

export default function GuitarTabs() {
  const darkMode = useUserPreferences(state => state.darkMode);
  const setDarkMode = useUserPreferences(state => state.setDarkMode);

  const [activeTab, setActiveTab] = useState<string>("Scale Degrees");
  const currentContent = tabData[activeTab];

  return (
    <main className={`relative flex min-h-screen w-full items-center justify-center overflow-hidden p-8 font-handjet ${darkMode ? "text-blue-200" : "text-black"}`}>
      
      {/* Background Image Layer */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-60">
        <Image 
          src="/extras/bg.png" 
          fill
          alt="Background Image"
          className="object-cover"
          style={{ filter: "blur(3px)" }}
          draggable="false"
          priority 
        />
      </div>

      {/* Dark Overlay Layer */}
      <div className="absolute inset-0 z-0 bg-[#0a0a10]/80" />

      {/* Top Left Nav/Controls */}
      <div className="absolute left-8 top-8 z-50 flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2 border-2 border-transparent px-2 py-1 transition-all hover:border-dotted hover:border-slate-400">
          <PiArrowLeftBold className="text-2xl" />
          <span className="font-handjet text-xl tracking-wider">Home</span>
        </Link>
        <div className="border-2 border-transparent px-2 py-1 transition-all hover:border-dotted hover:border-slate-400">
          <PiMoonStarsFill 
            onClick={() => setDarkMode()} 
            className="cursor-pointer text-2xl" 
          />
        </div>
      </div>

      {/* 3-Column Layout Container */}
      <div className="relative z-10 flex h-[85vh] w-full max-w-7xl flex-row items-center justify-center gap-12">

        {/* Left Panel: Sidebar */}
        <div className="relative flex h-[80%] w-64 items-center justify-center">
          
          {/* Aesthetic PNG Placeholder - Top Left */}
          <img 
            src="/assets/your-png-here-1.png" 
            alt="Asset 1" 
            className="absolute -left-8 -top-8 z-30 h-20 w-20 border border-dashed border-pink-500 bg-pink-500/20 object-cover" 
          />

          {/* Slanted Background - Framer Motion */}
          <motion.div 
            initial={{ opacity: 0, x: -30, rotate: 0 }}
            animate={{ opacity: 1, x: 0, rotate: -3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0 z-0 scale-105 border border-white/20 bg-white/10 shadow-[4px_4px_0px_rgba(0,0,0,0.5)]" 
          />
          
          {/* Sharp, Textured Content Box */}
          <div 
            className="relative z-10 flex h-full w-full flex-col overflow-y-auto border-2 border-slate-500 bg-[#16181D] p-6 text-slate-300"
            style={{ backgroundImage: paperTexture }}
          >
            <h3 className="mb-3 border-b-2 border-dashed border-slate-600 pb-1 text-xl font-bold tracking-widest text-white">CHORDS</h3>
            <ul className="mb-8 flex flex-col gap-1 text-lg tracking-wide">
              {["Common Chords", "Power Chords", "7th Chords"].map((tab) => (
                <li 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`cursor-pointer border-2 p-1 pl-3 transition-none ${activeTab === tab ? "border-dashed border-blue-400 bg-[#0f2040] text-white" : "border-transparent text-slate-400 hover:border-dotted hover:border-slate-500 hover:text-slate-200"}`}
                >
                  {tab}
                </li>
              ))}
            </ul>

            <h3 className="mb-3 border-b-2 border-dashed border-slate-600 pb-1 text-xl font-bold tracking-widest text-white">THEORY</h3>
            <ul className="flex flex-col gap-1 text-lg tracking-wide">
              {["Overtone Alignment", "Scale Degrees"].map((tab) => (
                <li 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`cursor-pointer border-2 p-1 pl-3 transition-none ${activeTab === tab ? "border-dashed border-blue-400 bg-[#0f2040] text-white" : "border-transparent text-slate-400 hover:border-dotted hover:border-slate-500 hover:text-slate-200"}`}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Center Panel: Main Content */}
        <div className="relative flex h-full flex-1 items-center justify-center">
           
           {/* Slanted Background - Framer Motion */}
           <motion.div 
             initial={{ opacity: 0, y: 30, rotate: 0 }}
             animate={{ opacity: 1, y: 0, rotate: 1 }}
             transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
             className="absolute inset-0 z-0 scale-[1.02] border border-white/20 bg-white/10 shadow-[6px_6px_0px_rgba(0,0,0,0.5)]" 
           />
           
           {/* Aesthetic PNG Placeholder - Bottom Right */}
           <img 
             src="/assets/your-png-here-2.png" 
             alt="Asset 2" 
             className="absolute -bottom-10 -right-10 z-30 h-28 w-28 border border-dashed border-pink-500 bg-pink-500/20 object-cover" 
           />

           {/* Sharp, Textured Content Box */}
           <div 
             className="relative z-10 flex h-full w-full flex-col overflow-y-auto border-2 border-slate-500 bg-[#1E2025] p-12 text-gray-200"
             style={{ backgroundImage: paperTexture }}
           >
             <h1 className="mb-8 border-b-2 border-dotted border-slate-600 pb-4 text-center font-tegaki text-4xl text-white">
                {currentContent?.title}
             </h1>
             <div className="flex flex-col gap-6 font-sans text-sm leading-relaxed tracking-wide">
               {currentContent?.content.map((paragraph, index) => (
                 <p key={index}>{paragraph}</p>
               ))}
             </div>
           </div>
        </div>

        {/* Right Panel: Extra Info / Identity */}
        <div className="relative flex h-[70%] w-48 items-center justify-center">
           
           {/* Aesthetic PNG Placeholder - Top Right */}
           <img 
             src="/assets/your-png-here-3.png" 
             alt="Asset 3" 
             className="absolute -right-6 -top-12 z-30 h-24 w-24 border border-dashed border-pink-500 bg-pink-500/20 object-cover" 
           />

           {/* Slanted Background - Framer Motion */}
           <motion.div 
             initial={{ opacity: 0, x: 30, rotate: 0 }}
             animate={{ opacity: 1, x: 0, rotate: 3 }}
             transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
             className="absolute inset-0 z-0 scale-105 border border-white/20 bg-white/10 shadow-[4px_4px_0px_rgba(0,0,0,0.5)]" 
           />
           
           {/* Sharp, Textured Content Box */}
           <div 
             className="relative z-10 flex h-full w-full flex-col items-center justify-between border-2 border-slate-500 bg-[#16181D] p-6 text-slate-300"
             style={{ backgroundImage: paperTexture }}
           >
             <div className="flex flex-col items-center gap-4 pt-4">
                <p className="font-tegaki text-4xl text-white [writing-mode:vertical-rl]">卢于</p>
                <div className="text-center font-tegaki text-xl leading-tight">
                  <p>Yu Lu</p>
                  <p className="text-sm font-sans text-slate-400">@ CMU 30'</p>
                </div>
             </div>
             
             <div className="flex w-full justify-center gap-4 border-t-2 border-dashed border-slate-600 pb-2 pt-6">
                <a href="https://github.com/bgels" target="_blank" rel="noopener noreferrer" className="border-2 border-transparent p-1 hover:border-dotted hover:border-blue-400">
                  <PiGithubLogoFill className="text-2xl hover:text-blue-300" />
                </a>
                <a href="https://www.instagram.com/luyucool/" target="_blank" rel="noopener noreferrer" className="border-2 border-transparent p-1 hover:border-dotted hover:border-pink-400">
                  <PiInstagramLogoFill className="text-2xl hover:text-pink-300" />
                </a>
                <a href="https://steamcommunity.com/id/crusty_pizza/" target="_blank" rel="noopener noreferrer" className="border-2 border-transparent p-1 hover:border-dotted hover:border-white">
                  <PiSteamLogoFill className="text-2xl hover:text-white" />
                </a>
             </div>
           </div>
        </div>

      </div>
    </main>
  );
}