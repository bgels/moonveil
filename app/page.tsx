"use client"
import Image from "next/image";
import Link from "next/link"
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { useUserPreferences, useThemeClass} from "./store"

import { PiMoonStarsFill, PiGithubLogoFill, PiInstagramLogoFill, PiSteamLogoFill} from "react-icons/pi";
import WavyBg from "./assets/animations/wavyBg"
import SelectorIcon from "./assets/icons/selector"

export const listVariant = {
  visible: {
    transition: { staggerChildren: 0.2, stiffness: 100, inertia: 1 },
  },
};
export const itemVariant = {
  hidden: { opacity: 0.5 },
  visible: { opacity: 1 },
};

const Selector = () => (
  <motion.div
    initial={{}}
    animate={{ rotate: 45}}
    transition={{ duration: .2, ease: "linear" }}
    exit={{ opacity: 0, rotate: 0}}
    className="flex items-center justify-center w-9 h-9 text-blue-400"
    style={{ transformStyle: "preserve-3d" }}
  >
    <SelectorIcon className="w-9 h-9 text-indigo-600" />
  </motion.div>
);

function Menu() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const theme = useThemeClass();
  const links = [
    { name: "Resume", href: "/resume" },
    { name: "Projects", href: "/projects" },
    { name: "Guitar Tabs / Downloads", href: "/extras" },
    { name: "About Me", href: "/about" },
  ];

  return (
    <motion.div
      variants={listVariant}
      initial="hidden"
      animate="visible"
      className="text-2xl flex flex-col gap-2 font-tegaki"
      onMouseLeave={() => setHoveredIndex(null)} 
    >
    {links.map((link, index) => (
      <motion.div
        key={link.href}
        variants={itemVariant}
        className="relative flex items-center group gap-1"
        onMouseEnter={() => setHoveredIndex(index)}
        whileHover={{translateX:2}}
      >
        <motion.div>
        <Link href={link.href} className={`font-handjet ${hoveredIndex === index ? theme.cn("text-blue-400", "text-blue-200") : theme.cn("text-blue-200", "text-black")}`}>
          {link.name}
        </Link>
        </motion.div>

        <div className="flex items-center w-8 h-8">
          {hoveredIndex === index && (
            <motion.div
              layoutId="menu-indicator"
              initial={{ opacity: 0, }}
              animate={{ opacity: 1,}}
              exit={{ opacity: 0,}}
            >
            <Selector />
            </motion.div>
          )}
        </div>
      </motion.div>
    ))}
    </motion.div>
  );
}

export default function Home() {
  const darkMode = useUserPreferences(state => state.darkMode);
  const setDarkMode = useUserPreferences(state => state.setDarkMode);
  const theme = useThemeClass();

  return (
    <main className={`relative h-screen w-full ${theme.bgPrimary}`}>
      
      {/* Background Layer */}
      <div className="absolute inset-0 opacity-60 z-0 pointer-events-none">
        <Image 
          src="/homepage/bg2.png" 
          fill
          alt="Background Image"
          className="object-cover"
          style={{ filter: "blur(8px) drop-shadow(8px 8px 10px lightblue)" }}
          draggable="false"
          priority 
        />
      </div>

      <WavyBg darkMode={darkMode} />

      {/* Content Layer */}
      <div className={`relative z-10 flex flex-row items-center justify-center h-full gap-8 ${theme.textPrimary}`}>
        
        <p className={'[writing-mode:vertical-rl] select-none font-tegaki text-s-title tracking-tighter text-nowrap -mr-9 -ml-9'}>卢于</p>

        <PiMoonStarsFill 
          onClick={() => setDarkMode()} 
          className={`relative w-s-button h-s-button transition-all hover:scale-105 ${theme.textPrimary}`}
        />

        <section className={`flex flex-col items-start gap-4 ${theme.textPrimary}`}>

          <p className="text-2xl text-nowrap font-tegaki">Yu Lu @ CMU 30'</p>
          <Menu />
          <motion.hr className="w-full border-t"></motion.hr>
          <motion.div   
            variants={listVariant}
            initial="hidden"
            animate="visible"
            className="flex flex-row items-center justify-items-center gap-4">
            <motion.a variants={itemVariant} href="https://github.com/bgels" target="_blank" rel="noopener noreferrer">
              <PiGithubLogoFill className={`w-s-smallButton h-s-smallButton`}/>
            </motion.a>
            <motion.a variants={itemVariant} href="https://www.instagram.com/luyucool/" target="_blank" rel="noopener noreferrer">
              <PiInstagramLogoFill className={`w-s-smallButton h-s-smallButton`}/>
            </motion.a>
            <motion.a variants={itemVariant} href="https://steamcommunity.com/id/crusty_pizza/" target="_blank" rel="noopener noreferrer">
              <PiSteamLogoFill className={`w-s-smallButton h-s-smallButton`} />
            </motion.a>
          </motion.div>

        </section>
      </div>
      
    </main>
  )
}