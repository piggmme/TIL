# 이미지 최적화

## 이미지 최적화를 해야하는 이유

<img src="https://miro.medium.com/max/660/1*jvoa4e5EhEav-SwsYjNbQw.png">

위의 통계자료를 보면, 웹 페이지에서 대부분의 용량을 차지하는 것은 이미지이다.

이미지 최적화를 통해 이미지 용량을 줄인다면, 다음과 같은 이점을 얻을 수 있다.

1. 웹 페이지 바이트를 절약할 수 있다.

   > 따라서 사이트 성능 또한 향상할 수 있다.

2. 브라우저가 다운로드해야하는 바이트가 줄어든다.

   > 클라이언트의 대역폭에 여유가 생긴다.

3. 콘텐츠를 더 빨리 다운로드하여 화면에 렌더링한다.

   > 최적의 사용자 경험을 제공할 수 있다.
   > 사이트 방문자의 40%가 3초안에 웹페이지가 로딩되지 않으면 떠난다...

4. 서버 저장공간이 적게 필요한다. (비용절감)

5. 구글의 SEO 순위를 결정할 때 모바일 응답성을 고려하여, 검색순위에 노출한다.
   > 이미지 최적화를 통해서 모바일 응답성을 빠르게 한다면, 검색 결과의 상위권에 노출될 수 있다.

## 이미지 포맷(format) 설정

이미지의 종류에 맞게 포맷을 설정하면 이미지 최적화를 할 수 있다. 전통적으로 많이 사용하는 JPG, PNG 포맷은 다음과 같은 이미지에서 최적화되어있다.

- JPG : 카메라로 찍은 실제 사진
- PNG : 만들어진 이미지

### 예시1 실제 사진

<img src="https://github.com/kheeyaa/TIL/blob/main/image/img/ex.png" width="300">

위의 규격 4032 × 3024 이미지를 JPG와 PNG로 저장했을 때 용량차이는 다음과 같다.

- JPG : 2.7MB
- PNG : 9.9MB

PNG가 JPG의 3.6배 용량이 더 크다.

### 예시2 만들어진 이미지

<img src="https://github.com/kheeyaa/TIL/blob/main/image/img/ex2.png" width="300">

위의 규격 2224 × 1668 이미지를 JPG와 PNG로 저장했을 때 용량차이는 다음과 같다.

- JPG : 907KB
- PNG : 654KB

JPG가 PNG의 1.5배 용량이 더 크다.

따라서 이미지 종류에 맞는 포멧을 사용할 필요가 있다.

## 이미지 폭 조절

페이지에서 사용하는 이미지는 보통 가로폭이 1,000px이 넘지 않는다. 블로그 처럼 좌측 우측 메뉴가 존재한다면 800px로도 충분하다.

DSLR 카메라 또는 핸드폰으로 찍은 사진은 가로폭이 3,000px을 넙기 때문에, 이미지 사이즈를 줄여주는 것 만으로도 큰 효과를 얻을 수 있다.

### 예시

<img src="https://github.com/kheeyaa/TIL/blob/main/image/img/ex.png" width="300">

위의 규격 4032 × 3024 이미지를 800 × 600 규격으로 줄인 결과 용량차이는 다음과 같다.

- 4032 × 3024 : 2.7MB
- 800 × 600 : 133KB

이미지의 크기를 줄인 결과, 20배 정도 용량이 줄어들었다.

## 웹 사이트 성능 및 속도 분석 사이트

웹사이트 성능을 개선하기 위해, 서비스 배포 하기 전에 미리 최적화를 하는 것이 좋다.
아래의 사이트는 최적의 웹사이트를 유지하는데 도움이 되는 분석도구다.

1. [Pingdom](https://tools.pingdom.com/)

<img src="https://github.com/kheeyaa/TIL/blob/main/image/img/pingdom.png" width="400">

핑덤은 페이지 용량이나 다운로드 속도, 코드 분석을 통한 성능 등급과 개발 제안을 하며 웹페이지의 다이어트 진행 상황 또한 기록할 수 있어 매우 유용한 사이트이다.

2. [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)

<img src="https://github.com/kheeyaa/TIL/blob/main/image/img/pagespeed.png" width="400">

구글에서 운영하는 페이지 스피드 인사이트는 웹페이지의 콘텐츠를 분석하여 페이지 속도를 개선할 방법을 추천해준다.
총 페이지 용량이나 다운로드 속도 통계는 표시하지 않지만, 모바일 장치 밑 데스크탑 장치용 페이지의 성능을 측정한다.

3. [Google Lighthouse](https://developers.google.com/web/tools/lighthouse/)

<img src="https://developers.google.com/web/tools/lighthouse/images/lighthouse-logo.svg" width="200">

구글의 크롬 확장 기능으로, 원하는 페이지의 속도와 관련된 문제를 파악할 수 있다.
라이트 하우스는 웹 앱의 품질을 개선하는 오픈 소스 자동화 도구로, 확인할 URL을 지정하고, 페이지에 대한 테스트를 실행한 다음, 페이지에 대한 보고서를 생성한다. 여기에서 실패한 테스트는 앱을 개선하기 위해 할 수 있는 것에 대한 지표로 사용할 수 있다.
