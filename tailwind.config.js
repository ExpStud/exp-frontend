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
        footer: "url('/images/footer.png')",
      },
      fontFamily: {
        barlow: ["Barlow", ""],
      },
      fontWeight: {
        regular: 400, //font-helvetica-neue font-light
        medium: 500,
        bold: 700,
      },
      fontStyle: {
        italic: "italic", // Add "italic" style to the font family
      },
      colors: {
        "exp-purple": {
          200: "#9D87D9",
          500: "#2B1B57",
        },
        "custom-black": "#121212",
        "custom-white": "#F3F1EA",
        "custom-purple": "#9D87D9",
      },
      screens: {
        "3xl": "2160px",
        "4xl": "3000px",
      },
    },
  },
  plugins: [],
};
