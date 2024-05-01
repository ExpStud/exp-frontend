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
        primary: ["Barlow"],
      },
      colors: {
        "exp-gray": {
          200: "#2D2D2D",
          600: "#353535",
        },
        "custom-black": "#0F0F0F",
        "custom-white": "#F3F1EA",
        "custom-purple": "#9D87D9",
        "custom-dark-purple": "#4c4462",
        "footer-purple": "#2B1B57",
        "copyright-purple": "#8374b8",
        "custom-gray": "#a2a2a2",
        "custom-dark-gray": "#7a7a7a",
        "custom-btn-gray": "#2e2e2e",
        "background-black": "#171717",
        "form-background": "#2d2d2d",
        "footer-border": "#423171",
      },
      screens: {
        "3xl": "2160px",
        "4xl": "3000px",
      },
    },
  },
  plugins: [],
};
