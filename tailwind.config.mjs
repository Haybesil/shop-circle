/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        bounce: 'bounce 2s infinite',
      },
      colors: {
        blue: {
          50: '#EBF5FF',
          100: '#D6EFFF',
          200: '#A9D8FF',
          300: '#7CC1FF',
          400: '#4FAAFF',
          500: '#3A86FF', 
          600: '#306ED6',
          700: '#2555AD',
          800: '#1A3D85',
          900: '#0E255C',
        },
        purple: {
          50: '#F5EBFF',
          100: '#EBD6FF',
          200: '#D5A9FF',
          300: '#BF7CFF',
          400: '#A94FFF',
          500: '#8338EC', 
          600: '#6A2CC6',
          700: '#521FA1',
          800: '#39147B',
          900: '#200855',
        },
        pink: {
          500: '#FF006E',
          600: '#E6006E',
        },
        yellow: {
          300: '#FFD60A',
          400: '#FFBE0B',
          500: '#FFC107',
        },
      },
    },
  },
  plugins: [],
};
