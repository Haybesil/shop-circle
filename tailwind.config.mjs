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
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
    },
  },
  plugins: [],
};
