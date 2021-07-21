# DOM 이란 무엇인가

## DOM (Document Object Model)

- 문서 객체 모델(DOM)은 XML이나 HTML 문서에 접근하기 위한 일종의 인터페이스
- 문서 내의 모든 요소를 정의하고, 각 요소에 접근하는 방법을 제공함.
- 다음과 같은 계층 구조로 표현됨

![](http://tcpschool.com/lectures/img_js_htmldom.png)

### JS는 DOM을 이용하여 다음과 같은 작업을 할 수 있다.

- 새로운 HTML 요소나 속성을 추가
- 기존에 존재하는 HTML 요소나 속성 제거
- HTML 문서 내의 모든 HTML 요소나 속성을 변경
- HTML 문서 내의 모든 CSS 스타일을 변경
- HTML 문서 내에 새로운 HTML 이벤트 추가
- HTML 문서의 모든 HTML 이벤트에 반응

### DOM의 종류

1. Core DOM : 모든 문서 타입을 위한 DOM 모델
2. HTML DOM : HTML 문서를 위한 DOM 모델
3. XML DOM : XML 문서를 위한 DOM 모델

## Document 객체

### Document 객체

- document 객체는 웹 페이지 그 자체를 의미함.
- 웹 페이지에 존재하는 모든 HTML 요소에 접근할 때 반드시 Document 객체부터 시작

### Document 메소드

Document 객체는 HTML 요소와 관련된 작업을 도와주는 다양한 메소드 제공.

- HTML 요소 선택
- HTML 요소 생성
- HTML 이벤트 핸들러 추가
- HTML 객체의 선택

## 1. HTML 요소 선택

- document.getElementsByTagName(태그이름)
- document.getElementById(아이디)
- document.getElementsByClassName(클래스이름)
- document.getElementsByName(name속성값)
- document.querySelectorAll(선택자)

## 2. HTML 요소 생성

- document.createElement(HTML요소)
- document.write(텍스트)

## 3. HTML 이벤트 핸들러 추가

- document.getElementById(아이디).onclick = function(){ 실행할 코드 }

## 4. HTML 객체의 선택

- document.anchors  
  name 속성을 가지는 `<a>`요소를 모두 반환함.
- document.applets
  applet 요소를 모두 반환함. (HTML5에서 제외됨)
- document.body
  `<body>`요소를 반환함.
- document.cookie  
  HTML 문서의 쿠키(cookie)를 반환함.
- document.domain  
  HTML 문서가 위치한 서버의 도메인 네임(domain name)을 반환함.
- document.forms
  `<form>`요소를 모두 반환함.
- document.images  
  `<img>`요소를 모두 반환함.
- document.links  
  href 속성을 가지는 `<area>`요소와 `<a>`요소를 모두 반환함.
- document.referrer  
  링크(linking)되어 있는 문서의 URI를 반환함.
- document.title
  `<title>`요소를 반환함.
- document.URL  
  HTML 문서의 완전한 URL 주소를 반환함.
- document.baseURI
  HTML 문서의 절대 URI(absolute base URI)를 반환함.
- document.doctype  
  HTML 문서의 문서 타입(doctype)을 반환함.
- document.documentElement
  `<html>`요소를 반환함.
- document.documentMode  
  웹 브라우저가 사용하고 있는 모드를 반환함.
- document.documentURI  
  HTML 문서의 URI를 반환함.
- document.domConfig  
  HTML DOM 설정을 반환함. (더는 사용하지 않음)
- document.embeds  
  `<embed>`요소를 모두 반환함.
- document.head
  `<head>`요소를 반환함.
- document.implementation  
  HTML DOM 구현(implementation)을 반환함.
- document.inputEncoding  
  HTML 문서의 문자 인코딩(character set) 형식을 반환함.
- document.lastModified  
  HTML 문서의 마지막 갱신 날짜 및 시간을 반환함
- document.readyState  
  TML 문서의 로딩 상태(loading status)를 반환함.
- document.scripts
  `<script>`요소를 모두 반환함.
- document.strictErrorChecking  
  오류의 강제 검사 여부를 반환함.
