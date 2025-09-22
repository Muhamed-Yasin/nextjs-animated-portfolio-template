import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      colors: {
        'primary': '#0284c7', // A nice sky blue
        'primary-hover': '#0369a1',
        'neutral': {
          '50': '#f8fafc',  // Off-white for sections
          '100': '#f1f5f9',
          '800': '#1e293b', // Dark slate for text
          '900': '#0f172a', // Darker slate for headings
        },
      },
    },
  },
  plugins: [],
};
export default config;