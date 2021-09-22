function isEqual(target1, target2) {
  // 1. 인수가 없는 경우
  if (arguments.length === 0)
    throw new Error(`isEqual requires at least 2 argument, but only 0 were passed`);
  if (arguments.length === 1)
    throw new Error(`isEqual requires at least 2 argument, but only 1 were passed`);
  // 2. 원시값
  // 2-1. null
  if (target1 === null && target2 === null) return true;
  // 2-2. 그 외 원시값
  if (typeof target1 !== 'object' && typeof target2 !== 'object') {
    // NaN, 0,-0 비교도 수행함.
    if (Object.is(target1, target2)) return true;
    return false;
  }

  // 3. 객체
  if (typeof target1 === 'object' && typeof target2 === 'object') {
    // 3-1. 빌트인 객체 => 함수, Date, RegExp, Set, Map, Promise 등
    const target1Proto = Object.getPrototypeOf(target1);
    if (
      target1Proto === Function.prototype ||
      target1Proto === Date.prototype ||
      target1Proto === RegExp.prototype ||
      target1Proto === Set.prototype ||
      target1Proto === Map.prototype ||
      target1Proto === Promise.prototype
    )
      return target1 === target2;

    // 3-2. 둘 중 하나만 배열인 경우
    if (Array.isArray(target1) ^ Array.isArray(target2)) {
      return false;
    }
    // 3-3. 일반 객체 or 배열
    const [longObj, shortObj] =
      Object.keys(target1).length > Object.keys(target2).length
        ? [target1, target2]
        : [target2, target1];
    const listFalse = Object.keys(longObj).filter(key => !isEqual(longObj[key], shortObj[key]));
    if (listFalse.length !== 0) return false;
    return true;
  }
  // 위에서 처리되지 않는 경우
  return false;
}

export default isEqual;
