# JSON 개념 정리

## HTTP

- client들이 server와 연결하는 방법
- Hypertext Transfer Protocal
- client =(request)=> server
- client <=(response)= server

### Hypertext

- 링크, 문서, 이미지 파일들... 을 포함한 것

## AJAX

- Asynchronous JavaScript And XML
- 웹페이지에서 동적으로 서버에게 데이터를 주고 받을 수 있는 기술

### 대표적인 AJAX의 오브젝트

- XHR (XMLHttpRequest)
- 서버에게 데이터를 요청하고 받아올 수 있다

### XML 이란

- html과 같은 Markup language
- 태그들을 이용해서 데이터를 나타냄
- 요즘엔 잘 사용되지 않고, JSON을 많이 사용한다.

## 😘 JSON

- JavaScript Object Notation
- Object { key: value}
- 브라우저 뿐 아니라, 모바일에서 서버와 데이터를 주고 받을 때,
- 서버와 통신하지 않아도, 오브젝트를 파일 시스템에 저장할 때에도 사용함

### JSON 특징

- 데이터를 주고받을 수 있는 가장 간단한 파일 포멧
- 텍스트로 기반하여 가벼움
- 가독성이 좋음
- key-value
- 데이터를 서버와 주고받을 때, serialization을 위해 사용함 (직렬화)
- 프로그래밍 언어와 플랫폼에 상관없이 사용할 수 있다 🥰

### Client => Server 데이터 전송시...

- client: { key: value } 형태의 string type으로 서버에게 전송함
- server: { key: value } 형태의 string type으로 클라이언트에게 전송함

* Serialize : object => key-value 형태의 string
* Desrialize : key-value 형태의 string => object

## JSON 관련 공부 자료

JSON에 대해 조금더 공부를 하고 싶으시면:

- [MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)
- [JavaScript.info](https://javascript.info/json)
- [JavaScript.info 한국어](https://ko.javascript.info/json)

## JSON 유용한 사이트

- [JSON Diff checker](http://www.jsondiff.com/)
- [JSON Beautifier/editor](https://jsonbeautifier.org/)
- [JSON Parser](https://jsonparser.org/)
- [JSON Validator](https://tools.learningcontainer.com/json-validator/)
