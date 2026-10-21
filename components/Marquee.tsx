// components/Marquee.tsx
"use client";
import { motion } from "framer-motion";

export default function Marquee({ text }: { text: string }) {
  return (
    <div className="w-full overflow-hidden bg-foreground border-y-2 border-foreground py-4 flex whitespace-nowrap">
      <motion.div
        className="flex font-mono text-2xl font-black uppercase text-background tracking-widest"
        whileInView={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 15,
        }}
      >
        {/* We duplicate the text multiple times to create a seamless loop */}
        <span className="pr-8">{text}</span>
        <span className="pr-8">{text}</span>
        <span className="pr-8">{text}</span>
        <span className="pr-8">{text}</span>
      </motion.div>
    </div>
  );
}