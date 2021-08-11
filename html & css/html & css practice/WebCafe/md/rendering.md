# Rendering

## 0. 유용한 사이트

- [web rendering](https://developers.google.com/web/updates/2019/02/rendering-on-the-web?hl=ko)

- [SSR vs SPA](https://velog.io/@fromzoo/SSR-vs-SPA)

<br><br>

## 1. 렌더링이란

### 1-1. 렌더링 의미

- 웹페이지 접속시 페이지를 화면에 그려주는 것

- 웹 개발자가 하는 가장 핵심적인 결정 중 하나는 애플리케이션에서 로직과 렌더링을 구현하는 것

- 개발자는 전체 rehydration 접근 방식을 통해 서버 렌더링이나 정적 렌더링을 고려하게됨

- 이런 결정을 내릴 때 우리가 선택한 아키텍처를 더 잘 이해하기 위해, 각 접근법에 대해 이해하고, 일관된 용어를 사용해야함

<br><br>

### 1-2. 용어

#### 렌더링

- SSR

  > Server-Side Rendering (서버 측 렌더링)
  >
  > > 클라이언트 측 또는 유니버설 앱을 서버의 HTML로 렌더링

- CSR

  > Client-Side Rendring (클라이언트 측 렌더링)
  >
  > > 브라우저에서 애플리케이션을 렌더링함. 일반적으로 DOM을 사용

- Rehydration

  > > 클라이언트가 서버에서 렌더링한 HTML의 DOM트리와 데이터를 재사용하도록 자바스크립트 뷰를 "부팅"함

- Prerendering
  > > 빌드 타임에 클라이언트 측 애플리 케이션을 실행하여 초기상태를 정적 HTML로 캡쳐함

#### 성능

- TTFB

  > Time to First Byte
  >
  > > 첫 번째 바이트 까지의 시간.
  > > 링크를 클릭한 후 처음으로 들어오는 콘텐츠 비트 사이의 시간을 나타낸다.

- FP

  > First Paint
  >
  > > 픽셀이 처음으로 사용자에게 표시되는 시점

- FCP

  > First Contentful Paint
  >
  > > 요청 콘텐츠(기사 본문 등)가 표시되는 시점

- TTI
  > Time To Interactive
  >
  > > 페이지가 상호작용 가능하게 될 때까지의 시간 (이벤트 발생등..)

<br><br>

## 2. 서버 렌더링

### 2-1. 서버 렌더링이란

- 서버 렌더링은 탐색에 대한 응답이다

  > 서버의 페이지에 대한 전체 HTML을 생성한다.
  > 이렇게 하면 브라우저에서 응답을 받기 전에 처리되므로, 클라이언트에서 데이터 가져오기 빛 템플릿 작성에 대한 <strong>추가왕복</strong>이 발생하지 않는다!

- 서버 렌더링은 일반적으로 빠른 _First Paint(FP)_ 및 *First Contentful Paint(FCP)*를 생성한다.

- 서버에서 페이지 로직 및 렌더링을 실행하면 _JavaScript를 클라이언트에 보내지 않아도 되므로_ TTI를 빠르게 수행할 수 있다.
  > 서버 렌더링을 통해 실제 사용자의 브라우저에 텍스트와 링크를 보내는 것
  > 브라우저 최적화 가능성

<img src="https://developers.google.com/web/updates/images/2019/02/rendering-on-the-web/server-rendering-tti.png?hl=ko" width="400">

<br><br>

## 3. 정적 렌더링

- 정적 렌더링은 빌드타임에 발생함

  > 서버 렌더링과 달리 페이지의 HTML을 즉석에서 생성할 필요가 없다
  > 따라서 일관성 있게 빠른 _To First Byte_ 생성 가능

- 빠른 *First Paint, First Contentful Paint, Time To Interactive*를 제공

  > 클라이언트 측 JS양이 제한되어 있다고 가정시

- 정적 렌더링은 미리 각 URL에 대해 별도의 HTML 파일을 생성하는 것.

<img src="https://developers.google.com/web/updates/images/2019/02/rendering-on-the-web/static-rendering-tti.png?hl=ko" width="400">

<br><br>

## 4. SSR

- Server Side Rendering (서버 사이드 렌더링)
  > 요청시 마다 새로고침이 일어나며 서버에 새로운 페이지에 대한 요청을 하는 방식.
  > 서버에서 사용자에게 보여줄 페이지를 모두 구성하여 페이지를 보여주는 방식.
  > 기술의 발전으로 웹에서 제공되는 정보량이 많아지며... 여러 문제점이 발견됨. 대안으로 SPA가 등장

## 5. CRS & (SPA)

### 5-1. SPA

> 최초 한번 페이지 전체를 로딩한 후 부터 데이터만 변경해서 사용할 수 있는 웹 애플리케이션
> _Client Side Rendering(CRS)_ 클라이언트사이드 렌더링 기법을 사용함
> 전통적인 SSR은 SPA에 비해 성능이 뒤떨어짐...

### 5-2. 주의점

- CRS != SPA

  > SPA는 CSR 방식을 사용하여 만든 웹 어플이케이션.

- 전통적 웹페이지 렌더링 방식 != SSR
  > 전통적 웹페이지 방식은 SSR 방식을 사용하여 만든 것임.

<br><br>

## 6. SSR vs CSR

### 6-1. 초기 view 로딩 속도

#### SSR

> > view를 서버에서 렌더링 하기 때문에 첫 로딩이 매우 짧음
> > JS 파일을 모두 다운로드하고 적용하기 전까지 어떤 인터렉션에도 반응하지 않지만... 사용자 입장에서 로딩 속도가 짧다고 느낌

#### CSR

> > 서버에서 view를 렌더링 하지 않고, HTML을 다운 받은 다음. JS 파일이나 각종 리소스를 다운 받은 후에 브라우저에 렌더링하여 보여줌
> > SSR보다 초기 view속도가 느림.
> > 하지만 view가 보여진 시점에서 바로 인터렉션 가능.

<br>

### 6-2. SEO 검색 엔지 최적화 차이

- SEO : 검색 엔진 최적화, HTML을 웹 브라우저가 분석하여 검색에 용이하게 함

#### SSR

> > SEO에 유리
> > 서버에서 다 렌더링 된 상태로 제공하기 때문에...

#### CSR

> > SEO에 불리
> > view를 생성하는데 자바스크립트가 필요한데, 그 전 까지는 HTML이 비어있어서 웹 크롤러들은 내용을 알 수 없음...
> > 하지만 구글은 자바스클비트를 해석해서 크로링해주지만... 다른 웹 브라우저를 사용하면 검색에 불리
