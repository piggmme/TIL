// Array method

// mutator method: 원본 배열을 직접 변경하는 메서드
// accessor method: 원본 배열을 직접 변경하지 않고 새로운 배열을 생성하여 반환하는 메서드
// 가급적 원본 배열을 직접 변경하지 않는 메서드를 사용하자!

// Array.isArray ------------------------------------------------------------------
{
  // 전달된 인수가 배열이면 true, 배열이 아니면 false
  // 1. true
  Array.isArray([]);
  Array.isArray([1, 2]);
  Array.isArray(new Array());

  // 2. false
  Array.isArray();
  Array.isArray({});
  Array.isArray(null);
  Array.isArray(undefined);
  Array.isArray(1);
  Array.isArray('Array');
  Array.isArray(true);
  Array.isArray(false);
  Array.isArray({ 0: 1, length: 1 });
}

// Array.prototype.indexOf ------------------------------------------------------------------
{
  // 원본 배열에서 인수로 전달된 요소를 검색하여 인덱스를 반환함
  // 1. 중복되는 요소가 여러 개 있다면 첫 번째로 검색된 요소의 인덱스를 반환
  // 2. 존재하지 않으면 -1
  // 3. 두번째 인수는 검색을 시작할 인덱스. 두번째 인수를 생략하면 처음부터 검색함
  // NaN이 포함되어있는지 확인 불가
  const arr = [1, 2, 2, 3];
  console.log(arr.indexOf(2)); // 1
  console.log(arr.indexOf(4)); // -1
  console.log(arr.indexOf(2, 2)); // 2

  // 배열에 특정 요소가 있는지 확인할 때 유용하다
  // ES7 에 도입된 Array.prototype.include 메서드가 가독성이 더 좋다
}

// Array.prototype.push ------------------------------------------------------------------
{
  // 인수로 전달받은 모든 값을 원본 배열의 마지막 요소로 추가
  // 변경된 length 프로퍼티 값을 반환함
  // 원본 배열을 직접 변경 => 부수 효과 => 스프레드 문법을 사용하자 [...arr, 3, 4]
  const arr = [1, 2];
  let result = arr.push(3, 4);
  console.log(arr); // [ 1, 2, 3, 4 ]
  console.log(result); // 4

  // push 메서드는 성능이 좋지 않다.
  // 마지막 요소로 추가할 요소가 하나 뿐이면 length 프로퍼티를 사용해 직접 추가하는 편이 더 빠르다.
  arr[arr.length] = 5;
  console.log(arr); // [ 1, 2, 3, 4, 5 ]
}

// Array.prototype.pop ------------------------------------------------------------------
{
  // 원본 배열에서 마지막 요소를 제거하고 제거한 요소를 반환
  // 빈 배열인 경우 undefined를 반환
  // 원본 배열을 직접 변경
  const arr = [1, 2];
  let result = arr.pop(); // 2
}

// Array.prototype.unshift ------------------------------------------------------------------
{
  // 인수로 전달 받은 모든 값을 원본 배열의 선두에 요소로 추가
  // 변경된 length 프로퍼티 값을 반환
  // 원본 배열을 직접 변겅
  const arr = [1, 2];
  let result = arr.unshift(3, 4); // 4
  console.log(arr); // [ 3, 4, 1, 2 ]

  // 부수효과가 있으니 ES6 스프레드 문법을 사용하자
  const newArr = [5, ...arr];
  console.log(newArr); // [ 5, 3, 4, 1, 2 ]
}

// Array.prototype.shift ------------------------------------------------------------------
{
  // 원본 배열에서 첫 번째 요소를 제거함
  // 제거한 요소를반환
  // 빈 배열인 경우 undefined를 반환
  // 원본 배열 직접 변경
  const arr = [1, 2];
  console.log(arr.shift()); // 1
  console.log(arr); // [2]
}

// Array.prototype.concat ------------------------------------------------------------------
{
  // 인수로 전달된 값들(배열 또는 원시값)을 원본 배열의 마지막 요소로 추가한 새로운 배열을 반환
  // 인수로 전달한 값이 배열인 경우 배열을 해체하여 새로운 배열의 요소로 추가
  // 원본 배열은 변경되지 않음
  const arr1 = [1, 2];
  const arr2 = [3, 4];
  console.log(arr1.concat(arr2)); // [ 1, 2, 3, 4 ]
  console.log(arr1.concat(3)); // [ 1, 2, 3 ]
  console.log(arr1.concat(arr2, 5)); // [ 1, 2, 3, 4, 5 ]
  console.log(arr1); // [ 1, 2 ]

  // unshift와 push 메서드는 인수로 전달 받은 배열을 그대로 원본 배열의 요소로 추가한다.
  const arr = [3, 4];
  arr.unshift([1, 2]);
  arr.push([5, 6]);
  console.log(arr); // [ [ 1, 2 ], 3, 4, [ 5, 6 ] ]

  // concat 메서드는 인수로 전달받은 배열을 해체하여 새로운 배열의 요소로 추가
  let result = [1, 2].concat([3, 4]);
  result = result.concat([5, 6]);
  console.log(result); // [ 1, 2, 3, 4, 5, 6 ]

  // concat은 ES6의 스프레드 문법으로 대체 가능
  let result2 = [...[1, 2], ...[3, 4]];
  console.log(result2); // [ 1, 2, 3, 4 ]
}

// Array.prototype.splice ------------------------------------------------------------------
{
  // 원본 배열의 중간에 요소를 추가하거나 제거할 때
  // 제거한 요소가 배열로 반환됨
  // 원본 배열을 직접 변경

  // Array.prototype.splice(start, deleteCount, items)
  // * start: 원본 배열의 요소를 제거하기 시작할 인덱스
  // => -1 : 마지막 인덱스, -n: 마지막에서 n번째 요소
  // * deleteCount: 제거할 요소 개수, 0이면 제거되지 않는다, 생략하면 start부터 이후 요소를 모두 삭제한다.
  // * items: 제거한 위치에삽입할 요소들의 목록, 생략하면 요소들을 제거하기만 한다

  const arr = [1, 2, 3, 4];
  const result = arr.splice(1, 2, 20, 30);
  console.log(result); // 제거한 요소: [ 2, 3 ]
  console.log(arr); // 원본 변경: [ 1, 20, 30, 4 ]
}

// Array.prototype.slice ------------------------------------------------------------------
{
  // 인수로 전달된 범위의 요소들을 복사하여 배열로 반환함
  // 원본 배열은 변경되지 않음
  // splice와 혼돈하지 말자

  // Array.prototype.slice(start, end)
  // * start: 복사를 시작할 인덱스
  // => -1 : 마지막 인덱스, -n: 마지막에서 n번째 요소
  // * end: 복사를 종료한 인덱스, 이 인덱스에 해당하는 요소는 복사되지 않는다. 생략하면 끝까지 복사한다.
  // 인수를 모두 생략하면 원본 배열의 복사본을 생성하여 반환함 (얕은 복사. lv1 까지만 복사함.)

  const arr = [1, 2, 3];
  console.log(arr.slice(0, 1)); // [1]
  console.log(arr.slice(1, 2)); // [2]
  console.log(arr.slice(1)); // [2, 3]
  console.log(arr.slice(-2)); // [2, 3] : 끝에서부터 두 개 복사
  console.log(arr.slice()); // [ 1, 2, 3 ] : 원본 배열 복사
  console.log(arr); // [ 1, 2, 3 ] => 원본 그대로
}

// Array.prototype.join ------------------------------------------------------------------
{
  // 원본 배열의 모든 요소를 문자열로 변환한 후
  // 인수로 받은 문자열, 즉 구분자로 연결한 문자열을 반환함.
  // 원본은 변하지 않음
  const arr = [1, 2, 3, 4];

  // 기본은 콤마 (',')
  console.log(arr.join()); // 1,2,3,4
  console.log(arr.join('')); // 1234
  console.log(arr.join(':')); // 1:2:3:4
  console.log(arr); // [ 1, 2, 3, 4 ]
}

// Array.prototype.reserve ------------------------------------------------------------------
{
  // 원본 배열의 순서를 반대로 뒤집음
  // 원본 배열이 변경됨
  // 반환값은 변경된 배열
  const arr = [1, 2, 3];
  const result = arr.reverse();
  console.log(arr); // [ 3, 2, 1 ]
  console.log(result); // [ 3, 2, 1 ]
}

// Array.prototype.fill ------------------------------------------------------------------
{
  // 인수로 전달받은 값을 배열의 처음부터 끝까지 요소로 채운다.
  // 원본 배열이 변경된다
  const arr1 = [1, 2, 3];
  arr1.fill(0);
  console.log(arr1); // [ 0, 0, 0 ]

  // 두 번째 인수로 요소를 채우기 시작할 인덱스를 전달할 수 있다.
  const arr2 = [1, 2, 3, 4, 5];
  arr2.fill(0, 1);
  console.log(arr2); // [ 1, 0, 0, 0, 0 ]

  // 세 번째 인수로 요소 채우기를 멈출 인덱스를 전달
  const arr3 = [1, 2, 3, 4, 5];
  arr3.fill(0, 1, 3);
  console.log(arr3); // [ 1, 0, 0, 4, 5 ]
}

// Array.prototype.includes ------------------------------------------------------------------
{
  // 배열 내에 특정 요소가 포함되어 있는지 확인하여 true 또는 false를 반환
  // 첫 번째 인수로 검색할 대상 지정
  // 두 번째 인수로 검색을 시작할 인덱스 전달, 음수라면 (legnth + index)로 검색 시작 인덱스 설정
  // NaN이 포함되어 있는지 확인 가능

  const arr = [1, 2, 3];
  arr.includes(2); // true
  arr.includes(100); // false
  arr.includes(1, 1); // false
  arr.includes(3, -1); // true
}

// Array.prototype.flat ------------------------------------------------------------------
{
  // 인수로 전달한 깊이 만큼 재귀적으로 배열을 평탄화 한다.
  console.log([1, [2, 3, 4, 5]].flat()); // [ 1, 2, 3, 4, 5 ]

  // 깊이의 기본 값은 1
  console.log([1, [2, [3, [4]]]].flat()); // [ 1, 2, [ 3, [ 4 ] ] ]
  console.log([1, [2, [3, [4]]]].flat(1)); // [ 1, 2, [ 3, [ 4 ] ] ]

  // 중첩 배열 모두 평탄화 Infinity
  console.log([1, [2, [3, [4]]]].flat(Infinity)); // [ 1, 2, 3, 4]
}
