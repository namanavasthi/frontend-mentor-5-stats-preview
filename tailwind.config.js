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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
