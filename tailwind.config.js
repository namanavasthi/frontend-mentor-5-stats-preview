module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', "sans-serif"],
        deca: ['"Lexend Deca"', "sans-serif"],
      },
      colors: {
        primary: {
          blue: {
            dark: "hsl(233, 47%, 7%)",
            desaturated: "hsl(244, 38%, 16%)",
          },
          violet: "hsl(277, 64%, 61%)",
        },
        neutral: {
          100: "hsla(0, 0%, 100%, 0.75)",
          200: "hsla(0, 0%, 100%, 0.6)",
        },
      },
      fontSize: {
        12: "12px",
        15: "15px",
        24: "24px",
        28: "28px",
        36: "36px",
      },
      lineHeight: {
        25: "25px",
        29: "29px",
        32: "32px",
        44: "44px",
      },
      letterSpacing: {
        0: "0px",
        1: "1px",
      },
      maxWidth: {
        1110: "1110px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
