// Promise is a JavaScript object for asynchronous operation.
// 자바스크립트 내장 오브젝트 - Promise
// 비동기적인 것을 수행할 때 callback함수 대신에 사용 가능함

// 1) state
// - operation을 수행중일 때 : pending
// - operation을 완료했을 때 : fulfilled
// - file을 찾을 수 없거나, 네트워크 문제 : rejected
// 2) producer & consumer

// 1. Producer : promise 만들기
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files) => 비동기적으로 수행하는것이 좋음
  console.log('doing something...');
  setTimeout(() => {
    resolve('ellie'); // 성공한 경우 전달
    //   reject(new Error('no network')); // 실패한 경우
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise
  .then(value => {
    console.log(value); // 2초후에 ellie => promise의 resolve로 전달된 값
  })
  .catch(error => {
    // promise.then의 반환값이 promise기 때문에 chain으로 연결가능
    console.log(error); // 2초후에 Error => promise의 reject
  })
  .finally(() => {
    console.log('finally'); // 실패하거나 성공하거나 항상 finally를 실행함
  });

// 3. promise chaning
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then(num => num * 2) // then의 반환값이 promise일 수도, 화살표 함수의 리턴값일 수도 있음
  .then(num => num * 3)
  .then(
    num =>
      new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
      })
  )
  .then(num => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen} => 🥚`), 1000)
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen()
  .then(hen => getEgg(hen)) // .then(getEgg) 와 동일함! 매개변수 생략 가능
  .catch(
    error =>
      // getEgg에서 에러가 발생하면, 그것을 처리함
      '🍞'
  )
  .then(egg => cook(egg))
  .then(meal => console.log(meal))
  .catch(error => console.log(error));

// 5. Call back 지옥을 이쁘게 만들자
// callback-to-promise.js
