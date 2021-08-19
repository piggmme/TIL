# 반응형 웹

## 1. [yamoo9 - 반응형 웹](https://github.com/yamoo9/cj-olive-networks/wiki/%EC%A0%81%EC%9D%91%ED%98%95-%EC%9B%B9-%EB%94%94%EC%9E%90%EC%9D%B8-VS-%EB%B0%98%EC%9D%91%ED%98%95-%EC%9B%B9-%EB%94%94%EC%9E%90%EC%9D%B8)

1. 유연한 그리드

> 상대 측정 단위 사용

2. 유연한 미디어

> [max-width 100%](https://www.codingfactory.net/10830)
> 부모 영역을 미디어 자식이 넘쳐나는 것을 막아야함!!

3. [미디어 쿼리](https://offbyone.tistory.com/121)

> 사용법이 2가지!

- `<link>` 를 사용, 특성이 조건에 맞을 때 css파일을 불러옴. => html 에서

```html
<link
  rel="stylesheet"
  media="screen and (max-width: 768px)"
  href="mystyle.css"
/>
```

- `@media` 사용 => css 에서..

```css
@media screen and (max-width: 768px) { body { background-color: lightgreen; } }

출처: https://offbyone.tistory.com/121 [쉬고 싶은 개발자]
```

> 모바일 우선? `min-width`

> 데스크탑 우선? `max-width`

4. [뷰포트 메타요소](https://aboooks.tistory.com/352)

> W3C 명세에 없어서 표준은 아니지만, ISO 장치에서 널리 사용됨!

```html
<meta name="viewport" content="width=device-width; initial-scale=1" />
```

- `content="width=device-width;`

  > 브라우저 너비를 장치 너비에 맞추어 표시함.

- `initial-scale=1`

  > 초기 화면 배율 설정

- 뷰포트 메타요소 매우 중요함!! 찾아보자.
- `initial-scale` : pinch in-out

## 2. [반응형 웹 디자인 적용에 고찰](https://github.com/yamoo9/cj-olive-networks/wiki/%EB%B0%98%EC%9D%91%ED%98%95-%EC%9B%B9-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%A0%81%EC%9A%A9%EC%97%90-%EB%8C%80%ED%95%9C-%EA%B3%A0%EC%B0%B0)

1. 사용자 경험 개선 및 사용성 향상

> 적합한 UI 제공

2. 모바일 사용자 >> 데스크톱 사용자

> 좋은 반응형 웹은, `모바일` 디바이스 기준으로!

3. 웹사이트 속도 향상

> 반응형에서 `속도`를 많이 신경써야해...
> 유연한 그리드와 미디어 덕분에 로딩시간 향상!
> 무조건 반응형이 빠른건 아니고, 전문가가 필요함...

4. 전환율 증가

5. 방문자가 구매자로 전환될 확률 증가

6. 검색엔진 최적화

> 구글이 모바일 반응성이 높으면 검색엔진에 표시함!
> SEO 전략

## 3. [반응형 웹 디자인을 시작하는 법](https://github.com/yamoo9/cj-olive-networks/wiki/%EB%B0%98%EC%9D%91%ED%98%95-%EC%9B%B9-%EB%94%94%EC%9E%90%EC%9D%B8%EC%9D%84-%EC%8B%9C%EC%9E%91%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95)

1. 현재 웹사이트에 반응형이 적용되었는가

> [google 모바일 친화성 테스트 도구](https://search.google.com/test/mobile-friendly)

2. 반응형 웹 디자인 사례 검토

> 영감을 얻자! [반응형 웹 예시](http://koreawebdesign.com/tag/responsive/)

3. 전문가 조언

## 4. [반응형 웹 디자인 구현법](https://github.com/yamoo9/cj-olive-networks/wiki/%EB%B0%98%EC%9D%91%ED%98%95-%EC%9B%B9-%EB%94%94%EC%9E%90%EC%9D%B8-%EA%B5%AC%ED%98%84-%EB%B0%A9%EB%B2%95)

- 모바일 경험
- 비주얼보다, 프로토타입 테스트!
- 효율적인 네비게이션.
- 이미지 최적화로 사이트 속도 향상! (압축)
- 모바일 기기를 우선으로 설계
- 미디어 쿼리 사용법
- 작은 모바일화면에서도 쉽게.. (패딩주어 터치쉽게)
- 프레임워크 - [tailwindcss](https://tailwindcss.com/)

## 5. [적응형 웹 vs 반응형 웹](https://github.com/yamoo9/cj-olive-networks/wiki/%EC%A0%81%EC%9D%91%ED%98%95-%EC%9B%B9-%EB%94%94%EC%9E%90%EC%9D%B8-VS-%EB%B0%98%EC%9D%91%ED%98%95-%EC%9B%B9-%EB%94%94%EC%9E%90%EC%9D%B8)

- 면접질문으로 나올 가능성 농후!

> 반응형 웹은 하나의 템플릿을 사용해 모든 기기에 대응하는데 반해, 적응형 웹은 선별된 기기 유형에 따라 별도의 독립적인 템플릿이 요구됩니다. 즉, 별도 페이지 제작이 필요합니다.

- AWD (적응형) vs. RWD (반응형)
