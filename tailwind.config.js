/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#104F03', // Dark Green requested by user
          dark: '#0A3302',    // Darker shade
          light: '#4C9F38',   // Lighter shade derived from #104F03
        },
        secondary: {
          DEFAULT: '#60A5FA', // Soft Blue
          dark: '#3B82F6',
        },
        accent: {
          DEFAULT: '#A78BFA', // Soft Lilac
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
