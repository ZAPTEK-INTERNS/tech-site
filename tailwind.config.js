/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./layouts/**/*.{js,jsx,ts,tsx}",
    "./lib/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../public/images/quote-bg.webp')",
        "hero-h4": "url('../public/images/about1.webp')",
        ourteam: "url('../public/images/ourteam.svg')",
        about: "url('../public/images/about1.webp')",
        news1: "url('../public/images/ourteam.svg')",
        news: "url('../public/images/logo-black.svg')",
        ellipse: "url('../public/images/ellipse.png')",
      },
    },
  },
  plugins: [],
};
