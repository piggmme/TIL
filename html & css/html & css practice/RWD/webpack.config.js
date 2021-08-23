const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        index: "./source/index.js",
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: '[name]_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                ],
            },
        ],
    },
}