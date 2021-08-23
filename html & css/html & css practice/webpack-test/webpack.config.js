const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",

  entry: ["./css/style.css", "./js/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "autoprefixer",
                    { overrideBrowserslist: ["> 1%", "last 2 versions"] },
                  ],
                ],
              },
            },
          },
        ],
      },
      {
        test: /.(png|svg|jpg|gif|)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ["dist"],
    }),
    new HtmlWebpackPlugin({
      template: "./main.html",
      filename: "main.html",
    }),
  ],
};
