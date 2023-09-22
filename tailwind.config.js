/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#D434FE",
      "primary-light": "#FF26B9",
      "spot-light": "#903AFF",
      background: "#150E28",
      white: "#FFFFFF",
    },
    fontFamily: {
      sans: ["Clash Display", "sans-serif"],
      serif: ["Montserrat", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
