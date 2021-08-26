module.exports = {
  purge: ["src/**/*.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    // tailwind가 제공하는 글자색 배경색 ,.... 확장가능
    // 홈페이지에서 제공함
    // 배경: https://tailwindcss.com/docs/background-image#customizing
    // 글자색: https://tailwindcss.com/docs/gradient-color-stops
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
