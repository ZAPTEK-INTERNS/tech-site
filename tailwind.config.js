/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./layouts/**/*.{js,jsx,ts,tsx}",
    "./lib/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../public/images/quote-bg.webp')",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "deep-purple": "rgb(24, 0, 48)",
      },
      screens: {
        vsm: "480px",
        slg: "960px",
      },
    },
  },
  plugins: [],
};
