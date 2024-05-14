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
        //gradients
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
        //carousel
        "slimes-text": "#1A3A46",
        "somos-text": "#2A48AF",
        "robbie-text": "#1C1C1C",
        "calder-text": "#511F23",
        "andy-text": "#E62E05",
        "zen0-text": "#1A3A46",
        "sike-text": "#EFB41C",
        "calder-gradient": "#EDD1D3",

        "slimes-gradient": "#F9D6C7",
        "somos-gradient": "#F8B23C",
        "robbie-gradient": "#8F8F8F",
        "zen0-gradient": "#75FBC6",
        "andy-gradient": "#224632",
        "sike-gradient": "",
      },
      screens: {
        "2xs": "320px",
        xs: "420px",
        "3xl": "2160px",
        "4xl": "3000px",
      },
    },
  },
  plugins: [],
};
