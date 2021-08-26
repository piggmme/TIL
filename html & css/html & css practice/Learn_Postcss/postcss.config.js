module.exports = {
  plugins: [
    require("postcss-normalize"),
    require("autoprefixer"),
    require("postcss-combine-media-query"),
    require("postcss-csso")({
      restructure: false,
    }),
  ],
};
// 미디어 쿼리같이 쪼개저 있는 것을 합쳐주는 것
// require('postcss-combine-media-query'), require('postcss-csso')
