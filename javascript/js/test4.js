// Q1
{
  const people = [
    { name: "박지성", age: 36, hobby: "등산", agegroup: null },
    { name: "김연아", age: 31, hobby: "등산", agegroup: null },
    { name: "손흥민", age: 26, hobby: "등산", agegroup: null },
    { name: "박태환", age: 34, hobby: "등산", agegroup: null },
    { name: "박세리", age: 45, hobby: "등산", agegroup: null },
  ];
  function solution(arr) {
    let answer = [...arr];

    answer.forEach((a) => {
      a.age < 35 ? (a.agegroup = "A") : (a.agegroup = "B");
    });
    return answer;
  }

  let answer = solution(people);
  console.log(answer);
}
// Q2
{
  const animals = ["dog", "cat", "penguin", "cow"];
  const zoo = [...animals];
  const answer =
    animals !== zoo
      ? ([] && "Good") || "Great"
      : undefined || ("Awesome" && !0);
  console.log(answer);
}

// Q3
{
  function solution(...arr) {
    let result = arr
      .filter((a) => a > 0)
      .reduce((acc, cur, idx, arr) => {
        if (idx === arr.length) {
          return (acc + cur) / arr.length;
        } else {
          return acc + cur;
        }
      }, 0);
    return result;
  }
  console.log(solution(4, 2, -2, 2));
}

// Q4
{
  console.log("" ? "null" && true : 0);
  console.log(0 || "0");
  console.log(!{} ? null : "0");
  console.log(!!undefined && !null);
  console.log(NaN ? "1" : !0);
}

// Q5
{
  function myFunction(x, y) {
    return (x || 2) + (y || 2);
  }
  console.log(myFunction(undefined, 1));
}

// Q6
{
  console.log(a, b);
  var a = 10;
  console.log(a, b);
  var b = 20;
  console.log(a, b);
}
// 7

{
  const number = [1, 2, 3, 4, 5, 6, 7];

  function solution(nums) {
    return nums.filter((n, idx) => idx >= 2).reduce((acc, cur) => acc + cur, 0);
  }

  console.log(solution(number));
}

{
  const Hana_profile = {
    firstName: "Hana",
    lastName: "Kim",
    age: 30,
    hobby: "등산",
  };
  const { location = "서울", firstName: Hana_name, hobby } = Hana_profile;
  console.log(`${location} ${Hana_name} ${hobby}`);
}
