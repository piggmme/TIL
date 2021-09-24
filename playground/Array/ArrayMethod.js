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
