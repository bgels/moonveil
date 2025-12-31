import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0b] text-[#d1d1d1] font-serif">
      <div className="z-10 text-center space-y-4">
        <h1 className="text-4xl font-light tracking-widest opacity-80">
          DAKARA BOKU WA ONGAKU WO YAMETA
        </h1>
        <p className="text-sm italic opacity-50">That's why I gave up on music.</p>
        
        <div className="mt-10">
          <button className="border border-[#d1d1d1] px-6 py-2 hover:bg-[#d1d1d1] hover:text-black transition-all duration-500">
            ENTER SITE
          </button>
        </div>
      </div>
      
      {/* This is a placeholder for your future film grain */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://media.giphy.com/media/oEI9uWUicKgR2/giphy.gif')]"></div>
    </main>
  );
}