/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./index.html",
    "/**/*.{js,ts,jsx,tsx,html,vue}",
    "/**/*.{scss,css}"
  ],
  mode: 'jit',
  darkMode: "class",

  theme: {
    extend: {
      fontFamily: {
        YekanBakh400: ["YekanBakh400"],
        YekanBakh500: ["YekanBakh500"],
        YekanBakh700: ["YekanBakh700"],
        IRANSans400: ["IRANSans400"],
        IRANSans500: ["IRANSans500"],
        IRANSans700: ["IRANSans700"],
      },
    },
  },
};
