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
        "hero" : "url('../public/images/quote-bg.webp')",
        "hero-h4" : "url('../public/images/about1.webp')",
        "ourteam" : "url('../public/images/ourteam.svg')",
        "about" : "url('../public/images/about1.webp')",
        "news": "url('../public/images/logo-black.svg')",
      },
    },
  },
  plugins: [],
};
