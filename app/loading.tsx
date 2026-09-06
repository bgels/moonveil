'use client'
import { useUserPreferences } from "./store";

export default function Loading() {
    const darkMode = useUserPreferences(state => state.darkMode)

    return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${darkMode ? "bg-gray-900 text-blue-200" : "bg-blue-300 text-black"}`}>
        <p className="font-tegaki">Assets still loading... 😭</p>
    </div>
    );
}