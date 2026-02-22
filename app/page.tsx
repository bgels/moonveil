"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [lightOn, setLight] = useState<boolean>(false);
  return(
    <main className={lightOn ? "bg-yellow-50" : "bg-black"}>
      <div className="relative z-10">
        <button onClick={() => { setLight(!lightOn); }} className="px-4 py-8 border rounded-2xl text-4xl hover:text-2xl">Toggle Light</button>
      </div>
      <Image 
        src="/homepage/bg.png" 
        fill
        alt="Background Image"
        className ="object-cover"
      />
    </main>
  )
}
