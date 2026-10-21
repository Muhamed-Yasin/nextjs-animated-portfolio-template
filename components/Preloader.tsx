// components/Preloader.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BOOT_LOGS = [
  "INITIALIZING KERNEL...",
  "MOUNTING VFS...",
  "LOADING UI RESOURCES...",
  "ESTABLISHING UPLINK...",
  "ACCESS GRANTED."
];

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      // Stuttery, uneven mechanical progression
      currentProgress += Math.floor(Math.random() * 15) + 3;
      if (currentProgress > 100) currentProgress = 100;

      setProgress(currentProgress);

      // Reveal logs based on progress percentage
      const logIndex = Math.min(
        Math.floor((currentProgress / 100) * BOOT_LOGS.length),
        BOOT_LOGS.length - 1
      );
      setLogs(BOOT_LOGS.slice(0, logIndex + 1));

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(onComplete, 500); // Hang at 100% for half a second
      }
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Calculate the ASCII progress bar (20 characters long)
  const barLength = 20;
  const filledLength = Math.floor((progress / 100) * barLength);
  const emptyLength = barLength - filledLength;
  const asciiBar = `[${"█".repeat(filledLength)}${"-".repeat(emptyLength)}]`;

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }} 
      className="fixed inset-0 z-[9999] flex flex-col justify-center bg-foreground text-background px-6 md:px-12 lg:px-24 cursor-none overflow-hidden"
    >
      <div className="font-mono flex flex-col items-start w-full max-w-5xl mx-auto">
        
        {/* Boot Sequence Logs */}
        <div className="mb-8 md:mb-12 h-32 md:h-40 flex flex-col justify-end">
          {logs.map((log, index) => (
            <div key={index} className="text-sm md:text-xl text-accent font-bold uppercase tracking-widest mb-2">
              {">"} {log}
            </div>
          ))}
        </div>

        {/* Vintage ASCII Progress Bar */}
        <div className="w-full flex flex-col">
          <div className="text-3xl md:text-6xl lg:text-[7vw] font-bold tracking-tighter whitespace-nowrap overflow-hidden">
            {asciiBar}
          </div>
          
          <div className="flex items-center justify-between mt-4 md:mt-8 w-full max-w-[20ch] md:max-w-none text-xl md:text-4xl font-bold tracking-widest">
            <span>SYS.LOAD</span>
            <span className="flex items-center">
              {progress < 10 ? `0${progress}` : progress}%
              {/* Blinking Terminal Cursor */}
              <motion.span 
                animate={{ opacity: [1, 0] }} 
                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                className="inline-block w-4 h-6 md:w-8 md:h-10 bg-accent ml-4 md:ml-8"
              />
            </span>
          </div>
        </div>

      </div>
    </motion.div>
  );
}