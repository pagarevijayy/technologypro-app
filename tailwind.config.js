const { spacing, fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
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
            a: {
              color: "#3b82f6",
              "&:hover": {
                color: "#1d4ed8",
              },
              "&:visited": {
                color: "#4F46E5",
              },
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
