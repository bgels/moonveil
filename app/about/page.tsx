import Image from 'next/image';

export default function AboutPage() {
    return (
    // The background is a very light, cloudy slate-blue
    <main className="min-h-screen bg-slate-50 flex justify-center items-start pt-12 md:pt-24 px-4 font-sans text-slate-600">
        
        {/* The Center Box / Resume Container */}
        <div className="w-full max-w-3xl bg-white/70 backdrop-blur-md rounded-xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(100,116,133,0.08)] p-8 md:p-12 space-y-10">
        
        {/* Header Section */}
        <header className="space-y-2 text-center md:text-left">
            <h1 className="text-3xl text-slate-700 tracking-wide font-medium">
            About
            </h1>
            <p className="text-slate-500 leading-relaxed">
            A quiet space for projects, thoughts, and professional experience.
            </p>
        </header>

        {/* Placeholder for your Aesthetic Assets */}
        <div className="relative aspect-video w-full overflow-hidden rounded-md border border-slate-200/50 bg-[#f4f7f9] flex items-center justify-center group">
            <p className="text-sm text-slate-400 italic tracking-wide">
            [ Placeholder: A quiet neighborhood street or vending machine ]
            </p>
        </div>

        {/* Content Section */}
        <article className="space-y-6 text-slate-600 leading-relaxed">
            <section>
            <h2 className="text-lg font-medium text-slate-700 border-b border-slate-100 pb-2 mb-4">
                The Vision
            </h2>
            <p>
                Moving away from rigid, modern product designs to something that feels more like an afternoon stroll. This site is a digital garden built with Next.js and Tailwind CSS, focusing on a minimal, breathable, and personal atmosphere.
            </p>
            </section>
        </article>

        </div>
    </main>
    );
}