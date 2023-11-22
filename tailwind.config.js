import keepPreset from "keep-react/src/keep-preset.js";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      poppins: "'Poppins', sans-serif",
      gugi: "'Gugi', sans-serif",
    },
  },
  presets: [keepPreset],
  plugins: [require("daisyui")],
};
