/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': "'Poppins',sans-serif",
        'Roboto': 'Roboto,sans-serif',
      },

      backgroundImage: {
        'gradient': 'linear-gradient(180deg, #243040 0%, #8B929B 100%)'
      },
      backgroundImage: {
        'gradient1': 'linear-gradient(180deg, #243040 0%, #8B929B 100%)'
      },
      backgroundSize: {
        'size': '100% 100%'
      }
    },
  },
  plugins: [],
}
