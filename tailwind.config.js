/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4a154b',
        "background-gray": "#f5f5f5",
        "background-gray2": "#fafafa",
        "background-light-green": "#f1fdf7",
        "main-cyan": "#36c5f0",
        "main-red": "#e01e5a",
        "main-yellow": "#ecb22e",
        "main-green": "#2eb67d",
        "main-purple": "#4a154b",
        "main-bg": "#eedaf2",
        "bg-home-section": "#8c838d",
        "bg-home-section2": "#e7e1e8",
        "notSoDark-purple": "#472347",
        "facebook-blue": "#1778f2"
      },
      fontFamily: {
        mrgvlovani: ["Mrgvlovani", "sans-serif"],
      },
      wrapper: {
        width: {
          DEFAULT: "85vw",
        },
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "infinite-scroll": "infinite-scroll 35s linear infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};
