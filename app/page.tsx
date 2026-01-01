"use client";
import Image from "next/image";
import { GithubLogoIcon} from "@phosphor-icons/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0b] font-serif select-none">
      <div className="z-10 text-center">
        <h1 className="text-4xl tracking-widest">
          luyu.dev
        </h1>
        <p className="text-9xl italic opacity-50">lgtm, merge plz 🥺</p>
        <div className="flex justify-center mt-10">
            <a href="https://github.com/bgels" className="flex items-center w-fit border rounded-full border-[#d1d1d1] px-5 py-2 hover:bg-[#d1d1d1] hover:text-black transition-all duration-500"><GithubLogoIcon size={30}/>Github</a>
        </div>
      </div>
      
      {/* film grain in the future */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWVxZHN1ZnExdWlhd3l3djlocjI5dWxyMDJrcjNma25pdTJ1ZDh3diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qHWAmPd3SWyY0/giphy.gif')]"></div>
    </main>
  );
}