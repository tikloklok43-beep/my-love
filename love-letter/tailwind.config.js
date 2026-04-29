/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFF8F5',
        blush: '#FADADD',
        rose: '#E11D48',
        gold: '#D4AF37',
        'gold-light': '#FDE68A',
        purple: '#1E1B2E',
        'purple-light': '#6B5B6B',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        greatvibes: ['"Great Vibes"', 'cursive'],
        inter: ['Inter', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'shine': 'shine 1s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}