/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        main: "url('/images/background.png')",
        button: "url('/images/button.png')",
        container: "url('/images/container-transparent.png') 30 round",
        // "background-gradient": `linear-gradient(90deg, rgba(20,20,20,1) 60%, rgba(5,5,22,1) 91%);`,
        "background-gradient": `linear-gradient(0deg, rgba(5,5,22,1) 44%,  rgba(20,20,20,1) 91%)`,
      },
      fontFamily: {
        primary: ["DaysOne"],
      },
      colors: {
        "custom-black": "#0F0F0F",
        "custom-white": "#F3F1EA",
      },
      screens: {
        "3xl": "2160px",
        "4xl": "3000px",
      },
    },
  },
  plugins: [],
};
