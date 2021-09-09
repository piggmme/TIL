{
  const o = { x: { y: 1 } };
  //얕은 복사
  const c1 = { ...o };
  console.log(c1 === o); // false, 객체 {x: {y: 1}}가 복사되어 다른 주소에 값으로 저장됨
  console.log(c1.x === o.x); // true, x가 참조하고 있는 y의 주소값은 동일함. (참조값 동일)

  // 깊은 복사
  const _ = require("lodash");
  const c2 = _.cloneDeep(o);
  console.log(c1 === o); // false
  console.log(c2.x === o.x); // false, 참조값도 달라짐.
}
{
  const v = 1;

  // 깊은 복사
  const c1 = v;
  console.log(c1 === v); // true, 원시 값이 동일함.

  // 얕은 복사
  const o = { x: 1 };
  const c2 = o;
  console.log(c2 === o); // true, 참조값이 동일함. c2의 주소와 o의 주소는 다름
}
