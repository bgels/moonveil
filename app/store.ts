import {create} from 'zustand'
import {persist} from 'zustand/middleware'

interface userPreferences {
    darkMode: boolean
    setDarkMode: () => void
}

export const useUserPreferences = create<userPreferences>()(
    persist(
        (set) => ({
            darkMode: true,
            setDarkMode: () => set(state => ({darkMode: !state.darkMode}))
        }),
        { name: 'user-preferences' }
    )
)

export function useThemeClass() {
    const darkMode = useUserPreferences((state) => state.darkMode);

    return {
        darkMode,
        textPrimary: darkMode ? "text-blue-200" : "text-black",
        textMuted: darkMode ? "text-blue-400" : "text-gray-600",
        bgPrimary: darkMode ? "bg-gray-900" : "bg-blue-300",
        bgSurface: darkMode ? "bg-slate-800" : "bg-white",
        textSelector: darkMode ? "text-white" : "text-black",
        cn: (darkClass: string, lightClass: string) => (darkMode ? darkClass : lightClass),
    };
}
