/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        tinos: ["Tinos", "serif"],
      },
      colors: {
        accent: "#2537DD",
        bg_light: "#FFFFF",
        text_light: "#181818",
        description_light: "#707070",
        description_dark: "#A0A0A0",
      },
      backgroundImage: {
        slide1: "url('/banner1.png')",
        slide2: "url('/banner2.png')",
        slide3: "url('/banner3.png')",
        slide4: "url('/banner4.png')",
        slide5: "url('/banner5.png')",
        slide6: "url('/banner6.png')",
        slide7: "url('/banner7.png')",
        slide8: "url('/banner8.png')",
      },
    },
  },
  corePlugins: {
    container: false,
  },
  darkMode: "class",
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1280px",
          },
          "@screen xl": {
            maxWidth: "1440px",
          },
        },
      });
    },
  ],
};
