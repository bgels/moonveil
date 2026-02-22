import {create} from 'zustand'
import { persist } from 'zustand/middleware'

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