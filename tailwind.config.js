const { spacing, fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  // mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./constants/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...fontFamily.sans],
        sans: ["Roboto", ...fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            "h2,h3,h4": {
              position: "relative",
              "scroll-margin-top": spacing[24],
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
