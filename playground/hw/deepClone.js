function deeClone(object) {
  // 객체가 아닌 원시 값인 경우엔 그대로 돌려줌.
  if (typeof object !== 'object' || object === null) return object;

  // 객체가 배열인 경우와 아닌 경우로 나누어 주어야함.
  const clonedObject = Array.isArray(object) ? [] : {};

  // 객체인 경우 복사를 진행함
  Object.keys(object).forEach(key => {
    clonedObject[key] = deeClone(object[key]);
  });

  return clonedObject;
}

export default deeClone;

// 코드 리뷰
{
  function deepClone(target) {
    // 원시값과 함수는 그대로 반환한다.
    if (typeof target !== 'object' || target === null) return target;
  
    // 배열인 경우 빈 비열, 객체인 경우 빈 객체를 만든다.
    const clone = Array.isArray(target) ? [] : {};
  
    Object.keys(target).forEach(key => {
      clone[key] = deepClone(target[key]);
    });
  
    return clone;
  }
  
  export default deepClone;
}