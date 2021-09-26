const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active", "hover", "disabled"],
      textColor: ["active", "hover", "disabled"],
      outline: ["hover", "active"],
      opacity: ["disabled"],
      cursor: ["hover", "disabled"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
