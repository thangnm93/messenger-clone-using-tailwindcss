const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
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
    },
  },
  variants: {
    extend: {
      visibility: ["group-hover"],
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
          backgroundColor: "rgba(156, 163, 175, 1) !important",
        },
        ".scrollbar-track-gray-lighter::-webkit-scrollbar-track": {
          backgroundColor: "rgba(209, 213, 219, 1) !important",
        },
      };
      addComponents(newComponents, {
        variants: ["responsive"],
      });
    }),
  ],
};
