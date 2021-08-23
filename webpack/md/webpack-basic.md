# WebPack - 생활코딩

[Webpack](https://webpack.kr/)

## 웹팩 이전 세계

각각의 js파일을 HTML에서 불러와 사용하면 변수이름이 충돌할 수 있음

- `module`은 이를 보완하기 위해 탄생!

js파일을 모듈화한 후 `import`하면 변수들을 충돌없게 사용할 수 있게됨.

> 하지만 import가 안되는 브라우저도 존재.
> js파일들이 너무 많아지면 서버 부하도 생김.

파일을 묶고싶어..!!

- `bundler`가 이를 보완하기 위해 탄생!

<br>

## 웹팩 도입

> 구형 브라우저에서도 사용 가능하고, 모듈을 묶는 번들도 가능

### 웹팩 사용

1. node.js 설치

2. 터미널에서 `npm` 실행

3. `npm init`

4. public 폴더 생성

5. index.js 파일을 웹팩으로 번들링 하기

5.1.
`npx webpack --entry ./source/index.js --output-path ./public/ --output-filename index_bundle.js`

5.2. [webpack.config.js](https://webpack.kr/configuration/#options)

- `webpack.config.js` 파일 생성후 다음을 저장

```js
const path = require("path");

module.exports = {
  entry: "./source/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "index_bundle.js",
  },
};
```

- `npx webpack --config webpack.config.js`

또는

- `npx webpack`

입력하면 번들링 됨.

<br>

### [웹팩 모드 설정](https://webpack.kr/configuration/mode/)

1. 개발 모드

```js
// webpack.development.config.js
module.exports = {
  mode: "development",
};
Mode;
```

- 또는 터미널에 다음과 같이 `--config`플래그를 붙여 입력하면 개발모드로 번들링 가능

`npx webpack --config webpack.config.prod.js`

2. 프로덕션 모드

```js
// webpack.production.config.js
module.exports = {
  mode: "production",
};
```

3. none

```js
// webpack.custom.config.js
module.exports = {
  mode: "none",
};
```

<br>

## 웹팩의 로더

자바스크립트 안에 css파일 또한 넣어놓고 싶다!

그걸 가능하게 하기위해 로더가 탄생.

### [Loading CSS](https://webpack.kr/guides/asset-management/#loading-css)

JavaScript 모듈 내에서 CSS 파일을 import 하려면 style-loader와 css-loader를 설치하고 module 설정에 추가해야 합니다.

`npm install --save-dev style-loader css-loader`

- webpack.config.js 에 다음을 추가.

```js
 const path = require('path');

 module.exports = {
   entry: './src/index.js',
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
+  module: {
+    rules: [
+      {
+        test: /\.css$/i,
+        use: ['style-loader', 'css-loader'],
+      },
+    ],
+  },
 };
```

모듈 로더는 체인으로 연결할 수 있습니다. 체인의 각 로더는 리소스에 변형을 적용합니다. 체인은 역순으로 실행됩니다. 첫 번째 로더는 결과(변형이 적용된 리소스)를 다음 로더로 전달합니다. 마지막으로 webpack은 체인의 마지막 로더가 JavaScript를 반환할 것으로 예상합니다.

위의 로더 순서는 유지되어야 합니다. 'style-loader'가 먼저 오고 그 뒤에 'css-loader'가 따라오게 됩니다. 이 컨벤션을 따르지 않으면 webpack에서 오류가 발생할 수 있습니다.

- `styel.css`를 source 폴더에 추가.

- `index.js`에 css `import`

  `import css from "./style.css";`

- `npx webpack` 으로 실행하면 됨.

  > "style-loader" : 스타일을 html의 헤더에 추가함
  > "css-loader" : css를 읽어와서 웹팩에 가져옴 (순서는 뒤에!)

- [Loaders](https://webpack.kr/loaders/)

<br>

## [Output 설정](https://webpack.kr/configuration/output/)

두 개의 html파일을 만들어, 그 것과 연결된 js파일도 따로 생성.
그 다음 각각을 번들링 하기 위해서는 다음과 같이한다.

- webpack.config.js

```js
const path = require("path");

module.exports = {
  // 번들링 할 두개의 js파일들
  entry: {
    index: "./source/index.js",
    about: "./source/about.js",
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name]_bundle.js", // entry에서 두 개의 파일을 [name]변수로 받아옴.
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
```

- html

```html
<html>
  <head> </head>
  <body>
    <h1>Hello, Webpack</h1>
    <div id="root"></div>
    <!-- 번들링 한 최종 파일을 연결 -->
    <script src="./public/index_bundle.js"></script>
    <a href="./about.html">about</a>
  </body>
</html>
```

- index.js

```js
// 번들링 하기 위한 js파일들을 index.js파일에 참조시켜놓음
import hello_word from "./hello.js";
import world_word from "./world.js";
import css from "./style.css";
document.querySelector("#root").innerHTML = hello_word + " " + world_word;
console.log("css", css);
```

## [플러그인의 도입](https://webpack.kr/plugins/)

로더는 모듈을 최종적인 아웃풋으로 만들어가는 과정에서 사용하는 것.

만들어진 최종적인 결과물을 변형하는 것이 플러그인.

플러그인은 더 복합적이고 자유로운 일을 많이할 수 있다.

플러그인은 플러그인 마다 사용방법이 제각각 다르다.

### [HtmlWebpackPlugin](https://webpack.kr/plugins/html-webpack-plugin/)

- install

npm install --save-dev html-webpack-plugin

- webpack.config.js

```js
const path = require("path");
// html webpack plugin
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./source/index.js",
    about: "./source/about.js",
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name]_bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  // plugins 추가
  plugins: [
    new HtmlWebpackPlugin({
      // source에 있는 index.html를 가지고 번들러로 합쳐져
      template: "./source/index.html",
      // 다음과 같은 index.html로 만들어짐
      filename: "./index.html",
      // html에 연결되는 js파일을 하나로 결정해줌
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
    template: "./source/about.html",
    filename: "./about.html",
    chunks: ["about"],
  ],
};
```

- `npx webpack` 으로 실행하면.. 다음과 같은 결과

      - public/about_bundle.js
      - public/index_bundle.js
      - public/index.html
      ```html
      <html>
        <head>
            <script defer="defer" src="index_bundle.js"></script>
        </head>
        <body>
            <h1>Hello, Webpack</h1>
            <div id="root"></div>
            <a href="./about.html">about</a>
        </body>
        </html>

      ```

## 자동화

`npx webpack --watch`

위의 명령어를 입력하면, 파일을 수정했을 때 자동으로 컴파일해서 번들링됨

## npm 패키지 사용

- `npm install lodash`

lodash라는 파일이 생성됨

- index.js

```js
import hello_word from "./hello.js";
import world_word from "./world.js";
// lodash 추가
import _ from "lodash";
import css from "./style.css";
// lodash로 다음과같이 추가
document.querySelector("#root").innerHTML = _.join(
  [hello_word, world_word],
  " "
);
console.log("css", css);
```

---

## [PostCSS](https://postcss.org/)

- prefix : `:-webkit`, `:-ms`

### PostCSS, AutoPrefixer 설치

webpack이 처리하게 할 것임. 따라서 postcss loader도 추가할 것

- `npm i postcss postcss-loader autoprefixer -D`

- postcss.config.js 파일 추가

```js
module.exports = {
  plugins: [require("autoprefixer")],
};
```
