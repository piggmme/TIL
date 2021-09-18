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
