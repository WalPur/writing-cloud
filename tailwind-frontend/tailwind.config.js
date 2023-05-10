/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          100: "#6E656B",
          200: "#7A5B5B",
          300: "#353535",
        },
      },
      fontFamily: {
        main: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
