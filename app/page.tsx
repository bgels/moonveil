"use client"
import Image from "next/image";
import { useUserPreferences } from "./store"
import { PiMoonStarsFill } from "react-icons/pi";


export default function Home() {
  const darkMode = useUserPreferences(state => state.darkMode);
  const setDarkMode = useUserPreferences(state => state.setDarkMode);

  return (
    <main className={`relative h-screen w-full ${darkMode ? "bg-gray-900" : "bg-blue-200"}`}>
        
          <PiMoonStarsFill onClick={() => setDarkMode()} 
          className={`relative z-10 p-0 w-f-button h-f-button transition-all hover:scale-105 ${darkMode ? "text-blue-200" : "text-black"}`}/>

        <Image 
          src="/homepage/bg.png" 
          fill
          alt="Background Image"
          className="object-cover z-0" 
          priority 
        />
    </main>
  )
}