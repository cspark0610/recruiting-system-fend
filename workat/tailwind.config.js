/* My tailwind.config.js */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-body': '#E5E5E5',
        'primary-color': '#00ADEF',
        'text-color': '#475564'
      },
      fontFamily: {
        'Raleway': ['Raleway', 'sans-serif']
      }
    },
  },
  plugins: [],
}