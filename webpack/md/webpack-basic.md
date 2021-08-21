# WebPack - 생활코딩

## 웹팩 이전 세계

각각의 js파일을 HTML에서 불러와 사용하면 변수이름이 충돌할 수 있음

- `module`은 이를 보완하기 위해 탄생!

js파일을 모듈화한 후 `import`하면 변수들을 충돌없게 사용할 수 있게됨.

> 하지만 import가 안되는 브라우저도 존재.
> js파일들이 너무 많아지면 서버 부하도 생김.

파일을 묶고싶어..!!

- `bundler`가 이를 보완하기 위해 탄생!

## 웹팩 도입

> 구형 브라우저에서도 사용 가능하고, 모듈을 묶는 번들도 가능

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
