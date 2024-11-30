import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        myPrimary: '#E52E67',
        myGray: '#D9D9D9',
        'custom-gray': '#9CA0A8',
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(to right, #664BFF, #E32C6A)', 
      },
      borderRadius: {
        'custom': '30px',
      },
    },
  },
  plugins: [],
} satisfies Config;
