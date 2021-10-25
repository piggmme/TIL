// https://programmers.co.kr/learn/courses/30/lessons/17680
// 캐시

{
  function solution(cacheSize, cities) {
    let cache = [];
    let answer = 0;

    const cacheRead = item => {
      cache = [
        ...cache.slice(0, cache.indexOf(item)),
        ...cache.slice(cache.indexOf(item) + 1),
        item,
      ];
      if (cache.length > cacheSize) {
        cache.shift();
        if (cache.includes(item)) return 1;
        return 5;
      }

      return 1;
    };

    const cacheShiftPush = item => {
      cache.shift();
      cache.push(item);
      if (cache.length > cacheSize) {
        cache.shift();
      }
      return 5;
    };

    for (const city of cities) {
      const str = city.toLowerCase();
      if (cache.includes(str)) {
        answer += cacheRead(str);
        continue;
      }
      if (cache.length >= cacheSize) {
        answer += cacheShiftPush(str);
        continue;
      }

      answer += 5;
      cache.push(str);
    }

    return answer;
  }
  console.log(solution(0, ['Jeju', 'Jeju', 'Jeju', 'Jeju'])); // 20
  console.log(
    solution(3, [
      'Jeju',
      'Pangyo',
      'Seoul',
      'NewYork',
      'LA',
      'Jeju',
      'Pangyo',
      'Seoul',
      'NewYork',
      'LA',
    ]),
  );
  console.log(
    solution(3, [
      'Jeju',
      'Pangyo',
      'Seoul',
      'Jeju',
      'Pangyo',
      'Seoul',
      'Jeju',
      'Pangyo',
      'Seoul',
    ]),
  );
  console.log(
    solution(2, [
      'Jeju',
      'Pangyo',
      'Seoul',
      'NewYork',
      'LA',
      'SanFrancisco',
      'Seoul',
      'Rome',
      'Paris',
      'Jeju',
      'NewYork',
      'Rome',
    ]),
  );
  console.log(
    solution(5, [
      'Jeju',
      'Pangyo',
      'Seoul',
      'NewYork',
      'LA',
      'SanFrancisco',
      'Seoul',
      'Rome',
      'Paris',
      'Jeju',
      'NewYork',
      'Rome',
    ]),
  );
  console.log(solution(2, ['Jeju', 'Pangyo', 'NewYork', 'newyork']));
  console.log(solution(0, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA']));
}
