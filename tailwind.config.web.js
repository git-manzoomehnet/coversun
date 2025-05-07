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
        IRANYekan300: ["IRANYekan300"],
        IRANYekan400: ["IRANYekan400"],
        IRANYekan500: ["IRANYekan500"],
        IRANYekan700: ["IRANYekan700"],
        PxGrotesk300: ["PxGrotesk300"],
        PxGrotesk400: ["PxGrotesk400"],
        PxGrotesk700: ["PxGrotesk700"],
        RalewayDots400: ["RalewayDots400"],
 
      },
      translate: {
        'full': '100%',
        '-full': '-100%',
      }
    },
  },
};
