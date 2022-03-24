module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      /* colors */
      colors: {
        "cyan-color": "#00ADEF",
        "gray-color": "#475564",
        "red-color": "#FF5B45",
        "light-color": "#F5F5F5",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      backgroundImage: {
        cloud: "url(https://bit.ly/backgroundCloud)",
      },
    },
  },
  plugins: [],
};
