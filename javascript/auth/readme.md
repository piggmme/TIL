# v1.0

## 1. eslint

```bash
$ npm init -y
$ npm install eslint eslint-config-airbnb-base eslint-plugin-import eslint-plugin-html eslint-config-prettier babel-eslint --save-dev
```

.eslintrc.json

```json
{
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 12
  },
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true,
    "node": true
  },
  "globals": {
    "_": false
  },
  "plugins": ["import", "html"],
  "extends": ["airbnb-base", "prettier"],
  "rules": {
    // "off" or 0 - turn the rule off
    // "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
    // "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
    // "no-var": "off",
    "no-console": "warn",
    "no-plusplus": "off",
    "no-shadow": "off",
    "vars-on-top": "off",
    "no-underscore-dangle": "off", // var _foo;
    "comma-dangle": "off",
    "func-names": "off", // setTimeout(function () {}, 0);
    "prefer-template": "off",
    "no-nested-ternary": "off",
    "max-classes-per-file": "off",
    "consistent-return": "off",
    "no-restricted-syntax": ["off", "ForOfStatement"], // disallow specified syntax(ex. WithStatement)
    "prefer-arrow-callback": "error", // Require using arrow functions for callbacks
    "require-await": "error",
    "arrow-parens": ["error", "as-needed"], // a => {}
    "no-param-reassign": ["error", { "props": false }],
    "no-unused-expressions": [
      "error",
      {
        "allowTernary": true, // a || b
        "allowShortCircuit": true, // a ? b : 0
        "allowTaggedTemplates": true
      }
    ],
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "max-len": [
      "error",
      {
        "code": 110,
        "ignoreComments": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true
      }
    ] // prettier의 printWidth 옵션 대신 사용
  }
}
```

## 2. webpack

```bash
# babel
$ npm install --save-dev @babel/core @babel/cli @babel/preset-env
$ npm install @babel/polyfill
# webpack
$ npm install --save-dev webpack webpack-cli babel-loader
```

webpack.config.js

```javascript
const path = require('path');

module.exports = {
  // entry file
  // https://webpack.js.org/configuration/entry-context/#entry
  entry: ['@babel/polyfill', './src/js/app.js'],
  // 번들링된 js 파일의 이름(filename)과 저장될 경로(path)를 지정
  // https://webpack.js.org/configuration/output/#outputpath
  // https://webpack.js.org/configuration/output/#outputfilename
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'app.bundle.js'
  },
  // https://webpack.js.org/configuration/module
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src/js')
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      }
    ]
  },
  devtool: 'source-map',
  // https://webpack.js.org/configuration/mode
  mode: 'development'
};
```

package.json

```json
{
  "name": "auth",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "build": "webpack -w"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/cli": "^7.14.5",
    "@babel/core": "^7.14.6",
    "@babel/preset-env": "^7.14.7",
    "babel-eslint": "^10.1.0",
    "babel-loader": "^8.2.2",
    "eslint": "^7.30.0",
    "eslint-config-airbnb-base": "^14.2.1",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-html": "^6.1.2",
    "eslint-plugin-import": "^2.23.4",
    "webpack": "^5.44.0",
    "webpack-cli": "^4.7.2"
  },
  "dependencies": {
    "@babel/polyfill": "^7.12.1"
  }
}
```

## 3. axios

```bash
$ npm install axios
```

## 4. express

```bash
$ npm install express
$ npm install --save-dev nodemon
```

package.json

```json
{
  "name": "auth",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "start": "nodemon server",
    "build": "webpack -w"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/cli": "^7.14.5",
    "@babel/core": "^7.14.6",
    "@babel/preset-env": "^7.14.7",
    "babel-eslint": "^10.1.0",
    "babel-loader": "^8.2.2",
    "eslint": "^7.30.0",
    "eslint-config-airbnb-base": "^14.2.1",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-html": "^6.1.2",
    "eslint-plugin-import": "^2.23.4",
    "nodemon": "^2.0.11",
    "webpack": "^5.44.0",
    "webpack-cli": "^4.7.2"
  },
  "dependencies": {
    "@babel/polyfill": "^7.12.1",
    "axios": "^0.21.1",
    "express": "^4.17.1"
  }
}
```

# v2.0

# 1. server dependencies

```bash
$ npm install jsonwebtoken cookie-parser dotenv
```
