
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,mdx}",
    "./src/components/**/*.{js,jsx,mdx}",
    "./src/app/**/*.{js,jsx,mdx}",
    "./src/layout/**/*.{js,jsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)',"sans-serif"],
       
      },
    },
  },
  plugins: [],
} 
