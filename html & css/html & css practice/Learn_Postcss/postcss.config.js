module.exports = {
  plugins: [
    require('postcss-normalize'),
    require('autoprefixer'),
    require('postcss-combine-media-query'),
    require('postcss-csso')({
      restructure: false
    })
  ]
}