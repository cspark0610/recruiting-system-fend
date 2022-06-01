module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "cyan-color": "#00ADEF",
        "light-blue": "#E8F0FE",
        "dark-blue": "#0A17A7",
        "gray-color": "#475564",
        "red-color": "#FF5B45",
        "light-color": "#F5F5F5",
        "light-gray-color": "#F9F9F9",
        "yellow-color": "#FFC107",
        "red-dark": "#F84D44",
        "silver-color": "#9CA3AF",
        "green-color": "#35C549",
        "white-color": "#D1D2D2",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      backgroundImage: {
        cloud: "url(https://bit.ly/background-cloud-ftf)",
        mobile: "url(https://bit.ly/bg-cloud-mobile)",
      },
      height: {
        maximum: "598px",
      },
    },
    screens: {
      mobile: "320px",
      // => @media (min-width: 320px) { ... }
      tablet: "800px",
      // => @media (min-width: 1024px) { ... }
      laptop: "1280px",
      // => @media (min-width: 1280px) { ... }
      desktop: "1680px",
      // => @media (min-width: 1600px) { ... }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
