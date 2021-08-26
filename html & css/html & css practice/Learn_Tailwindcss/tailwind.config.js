module.exports = {
  mode: 'jit',
  purge: [
    "./src/**/*.html"
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'checkbox-default': "url('/../images/checkbox-default.png')",
        'checkbox-checked': "url('/../images/checkbox-checked.png')",
      }),
      colors: {
        // white: "#ffffff",
        // black: "#000000",
        gray1: "#333333",
        gray2: "#4f4f4f",
        gray3: "#828282",
        gray4: "#bdbdbd",
        gray5: "#e0e0e0",
        gray6: "#f2f2f2",
        gray7: "#f9f9f9",
        primary: "#ed234b",
      },
      fontFamily: {
        sans: ["Noto Sans KR", "sans-serif"],
      },
    }
  },
  variants: {
    extend: {
      backgroundImage: ['hover'],
    }
  },
  plugins: [],
}
