/*****  spread 와 rest *****/
// 1. spread ...
// 객체/배열의 값들이 원본을 바꾸지않고 잘 복사됨
// 서로 다른 객체/배열을 가리키며 복사만 해온다.
// - spread는 객체나 배열을 펼칠 수 있음
{
  const slime = {
    name: "슬라임",
  };
  const cuteSlime = {
    ...slime,
    attribute: "cute",
  };
  const purpleCuteSlime = {
    ...cuteSlime,
    color: "purple",
  };
  const greenCuteSlime = {
    ...purpleCuteSlime,
    color: "green", // purple에 있던 color값이 덮어쓰여짐
  };
  console.log(slime); // {name: "슬라임"}
  console.log(cuteSlime); // {name: "슬라임", attribute: "cute"}
  console.log(purpleCuteSlime); // {name: "슬라임", attribute: "cute", color: "purple"}
  console.log(greenCuteSlime); // {name: "슬라임", attribute: "cute", color: "green"}
}

// 1-1. spread가 아닌경우
{
  const slime = {
    name: "슬라임",
  };
  const cuteSlime = slime;
  cuteSlime.attribute = "cute";

  const purpleCuteSlime = cuteSlime;
  purpleCuteSlime.color = "purple";

  console.log(slime); // {name: "슬라임", attribute: "cute", color: "purple"}
  console.log(cuteSlime); // {name: "슬라임", attribute: "cute", color: "purple"}
  console.log(purpleCuteSlime); // {name: "슬라임", attribute: "cute", color: "purple"}
  // 세개가 똑같은 객체를 가리킴.
  console.log(purpleCuteSlime === cuteSlime); // true
}

// 1-2. 배열에서 spread 사용
{
  const animals = ["개", "고양이", "참새"];
  const anotherAnimals = [...animals, "비둘기"];
  // const anotherAnimals = animals.concat("비둘기"); //와 동일함

  console.log(animals);
  console.log(anotherAnimals);
}

// 1-3. 여러개의 spread 연산
{
  const numbers = [1, 2, 3, 4, 5];

  const spreadNumers = [...numbers, 1000, ...numbers];
  console.log(spreadNumers); // [1, 2, 3, 4, 5, 1000, 1, 2, 3, 4, 5]
}

// 1-4. 함수 인자에서 spread
{
  function subtract(x, y) {
    return x - y;
  }
  const numbers = [1, 2];
  const result = subtract(...numbers); // 배열로 모아져 있는 값을, 해체해서 보냄
  console.log(result);
}

// 2. rest ...
// 객체, 배열, 함수 파라미터에서 사용가능
// spread와는 역할이 반대임.
// - spread : 특정 객체나 배열을 펼쳐서 다른 객체나 배열에게 전달 하는 것
// - rest : 객체/배열안에서 특정 객체나 배열을 모아서 꺼내옴. 특정 객체 배열을 삭제하고 싶을 때 사용
// 배열에서 rest는 맨 마지막에 와야함
{
  const purpleCuteSlime = {
    name: "슬라임",
    attribute: "cute",
    color: "purple",
  };
  // 비구조화 할당을 하며, rest를 사용하면
  const { color, ...cuteSlime } = purpleCuteSlime;
  console.log(color); // purple
  console.log(cuteSlime); // {name: "슬라임", attribute: "cute"}
  // color은 따로 빼오고, 나머지는 객체 형태로 들어가 있음
  const { attribute, ...slime } = cuteSlime;
  console.log(slime);
  console.log(attribute);
}
// 2-1. 배열에서 rest
{
  const numbers = [0, 1, 2, 3, 4, 5, 6];
  const [one, ...rest] = numbers;
  // const [...rest, last] = numbers; // 이건 안됨!! 배열에서 rest는 맨 마지막에 와야함
  console.log(one); // 0
  console.log(rest); // [1, 2, 3, 4, 5, 6]
}

// 2-2. 함수 파라미터에서 rest
// 배열이 아닌 파라미터를, 배열로 모아서 받을 수 있음!
// 이렇게 하는 이유는, 파라미터를 가지고 연산을 할 때, 하나 누락되면 값이 이상해질 수 있는데
// 배열로 바꿔서 받게되면, 배열 API를 이용해서 연산이 가능하기 때문이다.
{
  function sum(...rest) {
    return rest.reduce((acc, cur) => acc + cur, 0);
  }
  console.log(sum(1, 2, 3, 4, 5, 6, 7, 8)); // 36
}

// Quiz. 함수 n개의 숫자들이 파라미터로 주어졌을 때, 그 중 가장 큰 값을 알아내는 함수는?
{
  function max(...arr) {
    return arr.reduce((acc, cur) => (acc < cur ? cur : acc), 0);
  }

  const result = max(1, 2, 3, 4, 10, 5, 6, 7);
  console.log(result);
}
