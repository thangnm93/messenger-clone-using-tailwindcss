const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: "475px",
        ...defaultTheme.screens,
        "3xl": "1537px",
        "4xl": "1841px",
        "5xl": "2110px",
      },
      maxHeight: {
        ...defaultTheme.maxHeight,
        "55vh": "55vh",
        "58vh": "58vh",
        "60vh": "60vh",
        "63vh": "63vh",
        "65vh": "65vh",
        "68vh": "68vh",
        "70vh": "70vh",
        "73vh": "73vh",
        "75vh": "75vh",
        "78vh": "78vh",
        "79vh": "79vh",
        "80vh": "80vh",
        "83vh": "83vh",
        "85vh": "85vh",
        "88vh": "88vh",
        "90vh": "90vh",
        "93vh": "93vh",
        "95vh": "95vh",
        "98vh": "98vh",
      },
      colors: {
        ...defaultTheme.colors,
        "bg-main": "#242526",
        "bg-secondary": "#3A3B3C",
        "dark-active": "#25303D",
        "light-active": "#EAF3FF",
        "fb-main": "#0B84FF",
      },
    },
  },
  variants: {
    extend: {
      visibility: ["group-hover", "focus", "group-focus"],
      display: ["group-focus", "focus"],
      overflow: ["hover"],
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      const newComponents = {
        ".scrollbar-w-2::-webkit-scrollbar": {
          width: ".5rem !important",
          height: ".5rem !important",
        },
        ".scrollbar-thumb-rounded::-webkit-scrollbar-thumb": {
          borderRadius: ".25rem !important",
        },
        ".scrollbar-thumb-gray::-webkit-scrollbar-thumb": {
          backgroundColor: "#3A3B3C !important",
        },
        ".scrollbar-track-gray-lighter::-webkit-scrollbar-track": {
          backgroundColor: "transparent",
        },
      };
      addComponents(newComponents, {
        variants: ["responsive"],
      });
    }),
  ],
};
