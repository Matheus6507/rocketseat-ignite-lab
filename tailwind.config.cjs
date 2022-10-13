/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32
    },
    colors: {
      transparent: 'transparent',

      gray: {
        900: '#111827',
        600: '#4b5563',
        500: '#6b7280',
        200: '#e5e7eb',
      },

      blue: {
        500: '#2065d1',
        700: '#103996',
      },

      red: {
        500: '#e53e3e',
        700: '#9b2c2c',
      },

      green: {
        600: '#16a34a',
        800: '#166534'
      }
    },
    extend: {
      fontFamily: {
        sans: 'Mukta, sans-serif'
      }
    },
  },
  plugins: [],
}
