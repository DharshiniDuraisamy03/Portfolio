/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#f6f6f7',
          100: '#e7e7ea',
          200: '#c7c8ce',
          300: '#a3a5ae',
          400: '#71737f',
          500: '#4c4e5a',
          600: '#353741',
          700: '#26272f',
          800: '#18191f',
          900: '#0d0e12',
          950: '#08080b',
        },
        accent: {
          DEFAULT: '#6c5ce7',
          light: '#8b7cf6',
          dark: '#5645c9',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
