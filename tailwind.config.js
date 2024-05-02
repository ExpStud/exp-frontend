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
        "scum-gradient":
          "linear-gradient(177.97deg, #4BB3A1 1.72%, #F8EFD5 115.63%)",
        "somos-gradient": "linear-gradient(180deg, #000000 0%, #FFFFFF 100%)",
        "robbie-gradient":
          "linear-gradient(180deg, #000000 -8.5%, #F8EFD5 151.17%)",
        "calder-gradient": "linear-gradient(180deg, #E2BBBD 0%, #EDD1D3 100%)",
        "zen0-gradient":
          "background: linear-gradient(180deg, #43FAB2 0%, #75FBC6 100%)",
        "andy-gradient":
          "linear-gradient(180deg, #073517 -8.5%, #F8EFD5 116.75%)",
        "sike-gradient": "linear-gradient(180deg, #000000 0%, #4F170F 103.75%)",
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
        "scum-text": "#511F23",
        "somos-text": "#1A3A46",
        "robbie-text": "#1E1E1E",
        "calder-text": "#511F23",
        "andy-text": "#E62E05",
        "zen0-text": "#1A3A46",
        "sike-text": "#EFB41C",
      },
      screens: {
        "2xs": "320px",
        "3xl": "2160px",
        "4xl": "3000px",
      },
    },
  },
  plugins: [],
};
