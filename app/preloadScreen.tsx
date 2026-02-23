'use client'
import { useEffect, useState } from "react"
import { useUserPreferences } from "./store";
// PreloadScreen component to show a loading screen on first visit
export default function PreloadScreen() {
    const [isLoading, setIsLoading] = useState(false);
    const darkMode = useUserPreferences(state =>state.darkMode);

    useEffect(() => {
    const hasLoaded = sessionStorage.getItem('app_loaded');
    if (!hasLoaded) {
    setIsLoading(true);
    const handleFullyLoaded = () => {
        sessionStorage.setItem('app_loaded', 'true');
        setIsLoading(false);
    };
    if (document.readyState === 'complete') {
        handleFullyLoaded();
    } else {
        window.addEventListener('load', handleFullyLoaded);
        return () => window.removeEventListener('load', handleFullyLoaded);
    }}
    }, []);

    if (!isLoading) return null;

    return(
    <main className={`relative h-screen w-full ${darkMode ? "bg-gray-900" : "bg-blue-300"}`}>
        <p className={`flex items-center justify-center h-full font-tegaki ${darkMode ? "text-blue-200" : "text-black"}`}>loading assets... 😭</p>
    </main>
    )
}