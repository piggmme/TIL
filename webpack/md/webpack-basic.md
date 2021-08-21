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

## Output 설정

---

## Webpack의 기본구조

### Module의 정의

> 프로그램을 구성하는 내부의 코드가 기능별로 나뉘어져 있는 형태

<img scr="./img/module.png" width="400">

### Module의 표준

Module을 사용하기 위해서는 module을 인식하는 `Module System`과 module을 다루는 `키워드`가 제공되어야함.

1. CommonJS (Node.js)
2. ESM (ECMAScript 2015~)

### Module을 다루는 키워드

#### 1. 내보내기

<img scr="./img/module1.png" width="400">

1-1. 모듈을 내보내는 객체가 있고, 그 객체를 한번에 내보냄

1-2. 내보내는 값을 개별적으로 키워드를 지정해, 키워드가 정의되어 있는 값들만 개별적으로 내보냄

#### 2. 가져오기

<img scr="./img/module2.png" width="400">

코딩할 때 처럼, 객체 형태를 그대로 사용하거나 필요한 기능들만 가져와서 사용하기도 함

### CommonJS

- 모듈을 가져올 때, `require(모듈의 경로)`를 사용함.

- 모듈을 내보낼 때, 모듈이라는 객체(전역)를 사용하여, `module.exports`라는 `key` 안에 담으면 됨

<img scr="./img/commonjs.png" width="400">

---
