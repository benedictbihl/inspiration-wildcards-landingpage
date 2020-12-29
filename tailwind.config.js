/* eslint-disable*/
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      header: ["Varela Round"]
    },
    screens: {
      sm: "48em",
      md: "64em",
      lg: "85.375em",
      xl: "120em",
      xxl: "160em"
    },
    extend: {
      colors: {
        primary: {
          lighter: "#EA93B8",
          default: "#B76085",
          dark: "#842D52"
        },
        secondary: {
          lighter: "#FFE6F1",
          default: "#FFE6F1",
          dark: "#CCB3BE"
        },
        accent: {
          lighter: "#FFFFE5",
          default: "#FFF9B2",
          dark: "#CCC67F"
        }
      },
      spacing: {
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
        full: "100%"
      },
      fontSize: {
        "7xl": "5em",
        "8xl": "6em"
      },
      borderRadius: {
        xl: "1em",
        xxl: "2em",
        "2xl": "3em"
      },
      translate: {
        fullNegative: "-100%"
      }
    }
  },
  variants: {},
  plugins: []
};
