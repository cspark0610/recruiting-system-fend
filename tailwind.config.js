/**
 * My tailwind.config.js
 */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#00ADEF',
        'text-color': '#475564'
      },
      fontFamily: {
        'Raleway': ['Raleway', 'sans-serif']
      },
      backgroundImage: {
        'clouds': "url(https://bit.ly/background-cloud)"
      }
    },
  },
  plugins: [],
}