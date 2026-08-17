"use client"
import Image from "next/image";
import { useUserPreferences } from "../store"
import Rain from "../assets/animations/rain"

export default function AboutPage() {
  const darkMode = useUserPreferences(state => state.darkMode);
  const setDarkMode = useUserPreferences(state => state.setDarkMode);
  return(
    <main className={`relative w-full ${darkMode ? "bg-gray-900" : "bg-blue-300"} h-screen overflow-hidden`}>
      {/* <CenteredParchmentCard /> */}
      <Rain {...({} as any)} />
    </main>
  )
}
function CenteredParchmentCard() {
  // Ultra-fine SVG noise filter for high-resolution paper/sand grain
  const highResGrain = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'><filter id='fineGrain'><feTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='5' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%' height='100%' filter='url(%23fineGrain)' opacity='0.22'/></svg>`;

  return (
    // Outer Container: Centers content vertically & horizontally on the viewport
    <div className="flex min-h-screen w-full items-center justify-center bg-slate-900 p-4">
      
      {/* Paper Card */}
      <div
        className="relative w-full max-w-md border-2 border-color-wg-5 p-8 text-slate-100 shadow-2xl"
        style={{
          backgroundColor: '#17233D',
          backgroundImage: `
            url("${highResGrain}")
          `,
          boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.8), 0 4px 10px -2px rgba(0, 0, 0, 0.5)',
        }}
      >
        <h2 className="mb-3 text-2xl font-bold tracking-tight text-slate-100">
          Dark Blue Parchment
        </h2>
        <p className="text-sm font-normal leading-relaxed text-slate-300 opacity-90">
          Centered with high-resolution micro-grain, seamless edges, and a realistic matte paper feel with zero borders or glass reflections.
        </p>
      </div>

    </div>
  );
}