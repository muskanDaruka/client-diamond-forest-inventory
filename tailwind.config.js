
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
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
      },
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
