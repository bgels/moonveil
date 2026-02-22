import {create} from 'zustand'
import { persist } from 'zustand/middleware'

interface userPreferences {
    darkMode: boolean
    setDarkMode: () => void
}

export const useUserPreferences = create<userPreferences>()(
    persist(
        (set) => ({
            darkMode: false,
            setDarkMode: () => set((state) => ({darkMode: !state.darkMode}))
        }),
        { name: 'user-preferences' }
    )
)