module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      /* colours */
      colors: {
        "primary-color": "#00ADEF",
        "font-color": "#475564",
        "text-red": "#F84D44",
        "text-gray": "#9CA3B6",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      backgroundImage: {
        clouds: "url(https://bit.ly/background-cloud)",
      },
    },
  },
  plugins: [],
};
