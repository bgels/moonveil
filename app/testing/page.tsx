"use client"
import { motion, steps} from "framer-motion";
import { useUserPreferences } from "../store"

export default function Testing() {
    const darkMode = useUserPreferences(state => state.darkMode);
    // const setDarkMode = useUserPreferences(state => state.setDarkMode);
    return(
        <>
        <WavyText duration={4} delay={0} className="[writing-mode:vertical-rl] select-none font-tegaki text-s-title tracking-tighter text-nowrap -mr-9 -ml-9">卢</WavyText>
        <WavyText duration={3.2} delay={0.3} className="[writing-mode:vertical-rl] select-none font-tegaki text-s-title tracking-tighter text-nowrap -mr-9 -ml-9">于</WavyText>
        </>
    )
}

interface JitterTextProps {
    children: React.ReactNode;
    className?: string;
    duration?: number;
    delay?: number;
}

const stepEase = (steps: number) => (progress: number) =>
    Math.floor(progress * steps) / steps;

function WavyText({
    children,
    className = "",
    duration = 0.5,
    delay = 0,
}: JitterTextProps) {
    return (
    <motion.div
        className={`inline-block ${className}`}
        animate={{
            x: [0, -1, 1, -2, 0, 1, 0],
            y: [0, 1, -1, 0, -1, 1, 0],
            rotate: [0, 0.5, -1, 0, 1, 0],
            skewX: [0, .5, -.5, 0, .5, -.5, 0],
        }}
        transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: stepEase(1)
        }}
        >
        {children}
        </motion.div>
    )
}