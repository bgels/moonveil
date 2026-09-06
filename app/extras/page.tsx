"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useUserPreferences } from "../store";
import { PiMoonStarsFill, PiGithubLogoFill, PiInstagramLogoFill, PiSteamLogoFill, PiArrowLeftBold, PiDownloadSimpleBold, PiMusicNotesBold } from "react-icons/pi";

const paperTexture = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`;

// 1. Modular Data Structure (Eventually replaced by fetching local .mdx files)
type TabType = "info" | "cover";

interface TabData {
  id: string;
  category: string;
  type: TabType;
  title: string;
  content?: string[];
  videoUrl?: string;
  pdfUrl?: string;
  originalSongUrl?: string;
  writeup?: string[];
}

const TABS_DATA: TabData[] = [
  {
    id: "general",
    category: "WELCOME",
    type: "info",
    title: "General Info",
    content: [
      "Welcome to my guitar archive. Here you will find my video covers, PDF tabs, and write-ups detailing how I went about learning specific songs.",
      "Select a track from the sidebar to view the cover and download the tabs."
    ]
  },
  {
    id: "cover-1",
    category: "J-ROCK COVERS",
    type: "cover",
    title: "Kessoku Band - Guitar, Loneliness and Blue Planet",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your cover
    pdfUrl: "/tabs/blue-planet.pdf",
    originalSongUrl: "https://spotify.com/...",
    writeup: [
      "Learning the intro riff required a lot of alternate picking practice. I had to completely adjust the neck relief and tremolo springs on my Ibanez AZ and Gotoh bridge to eliminate fret buzz before recording this.",
      "Pay close attention to the syncopation in the chorus. It is entirely driven by the drum and bass lock-in."
    ]
  },
  {
    id: "cover-2",
    category: "VIDEO GAME OST",
    type: "cover",
    title: "Honkai: Star Rail - Wildfire",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    pdfUrl: "/tabs/wildfire.pdf",
    originalSongUrl: "https://spotify.com/...",
    writeup: [
      "A heavy, driving track that relies entirely on tight palm muting and consistent downpicking."
    ]
  }
];

export default function GuitarTabs() {
  const darkMode = useUserPreferences(state => state.darkMode);
  const setDarkMode = useUserPreferences(state => state.setDarkMode);

  // 2. Initialize directly to the general info tab
  const [activeTabId, setActiveTabId] = useState<string>("general");
  const currentTab = TABS_DATA.find(t => t.id === activeTabId) || TABS_DATA[0];

  // 3. Group tabs by category for the sidebar
  const categories = Array.from(new Set(TABS_DATA.map(t => t.category)));

  return (
    <main className={`relative flex min-h-screen w-full items-center justify-center overflow-hidden p-8 font-handjet ${darkMode ? "text-blue-200" : "text-black"}`}>
      
      {/* Background Layer */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-60">
        <Image src="/extras/bg.png" fill alt="Background Image" className="object-cover" style={{ filter: "blur(3px)" }} draggable="false" priority />
      </div>
      <div className="absolute inset-0 z-0 bg-[#0a0a10]/80" />

      {/* Top Left Nav/Controls */}
      <div className="absolute left-8 top-8 z-50 flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2 border-2 border-transparent px-2 py-1 transition-all hover:border-dotted hover:border-slate-400">
          <PiArrowLeftBold className="text-2xl" />
          <span className="font-handjet text-xl tracking-wider">Home</span>
        </Link>
        <div className="border-2 border-transparent px-2 py-1 transition-all hover:border-dotted hover:border-slate-400">
          <PiMoonStarsFill onClick={() => setDarkMode()} className="cursor-pointer text-2xl" />
        </div>
      </div>

      {/* 3-Column Layout Container */}
      <div className="relative z-10 flex h-[85vh] w-full max-w-7xl flex-row items-center justify-center gap-12">

        {/* Left Panel: Sidebar */}
        <div className="relative flex h-[80%] w-64 items-center justify-center">
          <img src="/assets/your-png-here-1.png" alt="Asset 1" className="absolute -left-8 -top-8 z-30 h-20 w-20 border border-dashed border-pink-500 bg-pink-500/20 object-cover" />
          
          <motion.div initial={{ opacity: 0, x: -30, rotate: 0 }} animate={{ opacity: 1, x: 0, rotate: -3 }} transition={{ duration: 0.6, ease: "easeOut" }} className="absolute inset-0 z-0 scale-105 border border-white/20 bg-white/10 shadow-[4px_4px_0px_rgba(0,0,0,0.5)]" />
          
          <div className="relative z-10 flex h-full w-full flex-col overflow-y-auto border-2 border-slate-500 bg-[#16181D] p-6 text-slate-300" style={{ backgroundImage: paperTexture }}>
            
            {/* Modularly map categories and their respective tabs */}
            {categories.map((category) => (
              <div key={category} className="mb-6">
                <h3 className="mb-3 border-b-2 border-dashed border-slate-600 pb-1 text-xl font-bold tracking-widest text-white">{category}</h3>
                <ul className="flex flex-col gap-1 text-lg tracking-wide">
                  {TABS_DATA.filter(t => t.category === category).map((tab) => (
                    <li 
                      key={tab.id}
                      onClick={() => setActiveTabId(tab.id)}
                      className={`cursor-pointer border-2 p-1 pl-3 transition-none ${activeTabId === tab.id ? "border-dashed border-blue-400 bg-[#0f2040] text-white" : "border-transparent text-slate-400 hover:border-dotted hover:border-slate-500 hover:text-slate-200"}`}
                    >
                      {tab.title.length > 20 ? tab.title.substring(0, 20) + "..." : tab.title}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>

        {/* Center Panel: Main Content */}
        <div className="relative flex h-full flex-1 items-center justify-center">
           <motion.div initial={{ opacity: 0, y: 30, rotate: 0 }} animate={{ opacity: 1, y: 0, rotate: 1 }} transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }} className="absolute inset-0 z-0 scale-[1.02] border border-white/20 bg-white/10 shadow-[6px_6px_0px_rgba(0,0,0,0.5)]" />
           <img src="/assets/your-png-here-2.png" alt="Asset 2" className="absolute -bottom-10 -right-10 z-30 h-28 w-28 border border-dashed border-pink-500 bg-pink-500/20 object-cover" />

           <div className="relative z-10 flex h-full w-full flex-col overflow-y-auto border-2 border-slate-500 bg-[#1E2025] p-12 text-gray-200" style={{ backgroundImage: paperTexture }}>
             <h1 className="mb-8 border-b-2 border-dotted border-slate-600 pb-4 text-center font-tegaki text-4xl text-white">
                {currentTab.title}
             </h1>

             {/* Conditional Rendering: General Info vs Song Cover */}
             {currentTab.type === "info" ? (
               <div className="flex flex-col gap-6 font-sans text-sm leading-relaxed tracking-wide">
                 {currentTab.content?.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
               </div>
             ) : (
               <div className="flex flex-col gap-8">
                 
                 {/* Video Embed */}
                 {currentTab.videoUrl && (
                   <div className="aspect-video w-full border-2 border-slate-600 bg-black">
                     <iframe src={currentTab.videoUrl} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="h-full w-full"></iframe>
                   </div>
                 )}

                 {/* Links Row */}
                 <div className="flex gap-4 border-y-2 border-dashed border-slate-700 py-4 font-handjet text-lg">
                   {currentTab.pdfUrl && (
                     <a href={currentTab.pdfUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border-2 border-slate-600 bg-slate-800 px-4 py-1 transition-colors hover:border-blue-400 hover:text-white">
                       <PiDownloadSimpleBold /> Tab PDF
                     </a>
                   )}
                   {currentTab.originalSongUrl && (
                     <a href={currentTab.originalSongUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border-2 border-slate-600 bg-slate-800 px-4 py-1 transition-colors hover:border-blue-400 hover:text-white">
                       <PiMusicNotesBold /> Original Track
                     </a>
                   )}
                 </div>

                 {/* Writeup */}
                 <div className="flex flex-col gap-4 font-sans text-sm leading-relaxed tracking-wide">
                   <h2 className="font-handjet text-2xl text-white">Learning Process</h2>
                   {currentTab.writeup?.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                 </div>

               </div>
             )}
           </div>
        </div>

        {/* Right Panel: Extra Info / Identity */}
        <div className="relative flex h-[70%] w-48 items-center justify-center">
           <img src="/assets/your-png-here-3.png" alt="Asset 3" className="absolute -right-6 -top-12 z-30 h-24 w-24 border border-dashed border-pink-500 bg-pink-500/20 object-cover" />
           <motion.div initial={{ opacity: 0, x: 30, rotate: 0 }} animate={{ opacity: 1, x: 0, rotate: 3 }} transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }} className="absolute inset-0 z-0 scale-105 border border-white/20 bg-white/10 shadow-[4px_4px_0px_rgba(0,0,0,0.5)]" />
           
           <div className="relative z-10 flex h-full w-full flex-col items-center justify-between border-2 border-slate-500 bg-[#16181D] p-6 text-slate-300" style={{ backgroundImage: paperTexture }}>
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