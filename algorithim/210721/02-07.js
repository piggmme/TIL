// 7. Least Recently Used (카카오 캐시 문제 변형)

// Queue를 이용해서 구현
// input => [0,0,0,0,0] => output

function solution(nums, s) {
  let cache = Array.from({ length: s }, () => 0);
  console.log(cache);

  for (let num of nums) {
    idx = cache.indexOf(num);
    if (idx !== -1) {
      // Cache miss
      cache.splice(idx, 1);
      cache.unshift(num);
    } else {
      // Cache hit
      cache.pop();
      cache.unshift(num);
    }
  }
  return cache.filter((n) => n !== 0); // 0을 포함하지 않는 경우
  //  return cache; // 0 을 포함하는 경우
}

// console.log(solution([1, 2, 3, 2, 6, 2, 3, 5, 7], 5));
