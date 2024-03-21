/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#FEC804",
        indigo: "#181B46",
        plum: "#7A2D59",
        gray: '#393f4d'
      },
    },
  },
  plugins: [],
};
