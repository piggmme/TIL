// Map 객체
// - ES6 문법
// - key, value를 묶어 조회하는 기능을 깔쌈하게 제공함.
// - 객체 프로퍼티(key-value 쌍)을 자주 변경해야 할 때 사용하면 좋다.

{
  // 1. 선언
  let info = new Map();

  // 1-1-1. set: 맵 객체에 key, value 삽입
  info.set("id", 0);
  info.set("이름", "강희");
  info.set("전공", "전자공학");
  info.set("나이", 24);

  // 1-1-2. (set 대신에)이차원 배열로 key, value값을 넘겨줄 수 있다.
  let animal = new Map([
    ["id", 0],
    ["종", "개"],
    ["이름", "멍멍이"],
    ["나이", 2],
  ]);

  // 1-2. get: 맵 객체 조회
  let name = info.get("이름");
  console.log(name); // 강희

  // 1-3. delete : 맵 객체의 key, value 쌍 삭제
  animal.delete("id");
  console.log(animal); // Map(3)

  // 1-3. claer : 맵 안의 프로퍼티 전부 삭제
  info.clear();
  console.log(info); // Map(0)
}

// 2. 맵의 장점

// 2-1. 문자열이 아닌 값을 키로 사용할 수 있다.
// 객체에서는 문자열(string)혹은 심볼(symbol)로만 key값을 사용할 수 있었지만,
// 맵 객체에서는 함수, 객체를 포함한 모든 자료형이 key로 사용가능!!
{
  const errorMessageObj = {
    number404: "예시입니다",
    404: "페이지가 없습니다", // 여기서 키는 int처럼 보이지만 사실 문자열임!
    500: "서버 오류입니다", // 따라서 접근하려면 object[""]로 접근해야해.
    401: "권한이 없습니다",
  };

  const errorMessageMap = new Map([
    [404, "페이지가 없습니다"], // 하지만 맵은 숫자로 접근이 쌉가능이다!
    [500, "서버 오류입니다"],
    [401, "권한이 없습니다"],
  ]);

  // errorMessageObj.404;        // !! unexpected number 에러
  // => 객체에서는 key값을 숫자로 설정할 수 없음... 따라서 위와 같이 접근 불가하다.
  // 보통은 아래와 같이 문자열로 접근함.
  console.log(errorMessageObj.number404); // 예시입니다.
  console.log(errorMessageObj["404"]); // '페이지가 없습니다'
  console.log(errorMessageMap.get(404)); // '페이지가 없습니다'
}

// 2-2. 메소드 사용의 명확성
// 객체는 "." 와 [] 로 접근하는데, 맵은 그럴 필요 없이 >메소드 만으로< 프로퍼티들을 수정하거나 조회할 수 있다.
// set, get, delete, clear이 동작 의도를 정확하게 보여준다.

// 2-3. 깔끔한 순회
// for .. of 로 순회 가능
// entries 메소드로 더 깔끔하게 key와 value에 순회 가능.
{
  let animal = new Map([
    ["id", 0],
    ["종", "개"],
    ["이름", "멍멍이"],
    ["나이", 2],
  ]);

  // entries 메소드는 key와 value값을 반환한다.
  console.log(animal.entries()); // MapIterator {"id" => 0, "종" => "개", "이름" => "멍멍이", "나이" => 2}

  for (let [key, val] of animal) {
    console.log(key, val); // id 0, 종 개, ....
  }
}
