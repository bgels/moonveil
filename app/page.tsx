"use client"
import Image from "next/image";
import { useUserPreferences } from "./store"
import { PiMoonStarsFill, PiGithubLogoFill, PiInstagramLogoFill, PiSteamLogoFill} from "react-icons/pi";

export default function Home() {
  const darkMode = useUserPreferences(state => state.darkMode);
  const setDarkMode = useUserPreferences(state => state.setDarkMode);

  return (
    <main className={`relative h-screen w-full ${darkMode ? "bg-gray-900" : "bg-blue-300"}`}>
      
      {/* Background Layer */}
      <div className="absolute inset-0 opacity-70 z-0 pointer-events-none">
        <Image 
          src="/homepage/bg2.png" 
          fill
          alt="Background Image"
          className="object-cover"
          style={{ filter: "blur(0px) drop-shadow(8px 8px 10px lightblue)" }}
          draggable="false"
          priority 
        />
      </div>
      
      {/* Content Layer */}
      <div className={`relative z-10 flex flex-row items-center justify-center h-full gap-8 ${darkMode ? "text-blue-200" : "text-black"}`}>
        <p className={'[writing-mode:vertical-rl] select-none font-tegaki text-s-title tracking-tighter text-nowrap -mr-9 -ml-9'}>卢于</p>

        <PiMoonStarsFill 
          onClick={() => setDarkMode()} 
          className={`relative w-s-button h-s-button transition-all hover:scale-105 ${darkMode ? "text-blue-200" : "text-black"}`}
        />

        <section className={`flex flex-col items-start gap-4 ${darkMode ? "text-blue-200" : "text-black"}`}>
          <p className="text-2xl text-nowrap font-tegaki">Yu Lu @ Stuy 26'</p>
          <hr className="w-full border-t"></hr>

          <div className="flex flex-row items-center justify-items-center gap-4">
            <a href="https://github.com/bgels" target="_blank" rel="noopener noreferrer">
              <PiGithubLogoFill className={`w-s-smallButton h-s-smallButton hover:scale-105`}/>
            </a>
            <a href="https://www.instagram.com/youlucool/" target="_blank" rel="noopener noreferrer">
              <PiInstagramLogoFill className={`w-s-smallButton h-s-smallButton hover:scale-105`}/>
            </a>
            <a href="https://steamcommunity.com/id/crusty_pizza/" target="_blank" rel="noopener noreferrer">
              <PiSteamLogoFill className={`w-s-smallButton h-s-smallButton hover:scale-105`} />
            </a>
          </div>
          <p className="text-sm font-handjet">Better website coming soon ;-;</p>
        </section>
      </div>
      
    </main>
  )
}