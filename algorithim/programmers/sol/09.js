// 파일명 정렬
// https://programmers.co.kr/learn/courses/30/lessons/17686

function solution(files) {
  let answer = [];
  let info = [];
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const HEAD = file.match(/^[^\d]+/g)[0];
    const NUMBER = file.match(/^[^\d]+\d+/g)[0].match(/\d+$/g)[0] || '';
    const TAIL = file.substring(file.indexOf(NUMBER) + NUMBER.length);
    info.push([i, HEAD.toLowerCase(), +NUMBER, TAIL, file]);
  }

  info.sort((a, b) =>
    a[1] > b[1]
      ? 1
      : a[1] < b[1]
      ? -1
      : a[2] > b[2]
      ? 1
      : a[2] < b[2]
      ? -1
      : a[0] - b[0],
  );

  answer = info.map(file => file[4]);

  return answer;
}
console.log(
  solution([
    'img12.png',
    'img10.png',
    'img02.png',
    'img1.png',
    'IMG01.GIF',
    'img2.JPG',
  ]),
);
['img1.png', 'IMG01.GIF', 'img02.png', 'img2.JPG', 'img10.png', 'img12.png'];
console.log(
  solution([
    'F-5 Freedom Fighter',
    'B-50 Superfortress',
    'A-10 Thunderbolt II',
    'F-14 Tomcat',
  ]),
);
// ["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"]
