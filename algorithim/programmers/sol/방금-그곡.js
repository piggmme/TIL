// 방금 그곡
// https://programmers.co.kr/learn/courses/30/lessons/17683

// match(/[CDEFGAB]#?/g)
{
  function solution(m, musicinfos) {
    const memory = m.match(/[CDEFGAB]#?/g);
    let answer = '(None)';

    // 노래 정보의 분단위 시간 계산
    function findTime(t1, t2) {
      const [h1, m1] = t1.split(':');
      const [h2, m2] = t2.split(':');

      return Math.abs(h1 * 60 + m1 * 1 - (h2 * 60 + m2 * 1)) + 1;
    }

    // 노래를 콤마 단위로 분할하여 배열에 저장
    let songs = musicinfos.map(song => song.split(','));

    // 노래의 분단위 시간정보 저장. 인덱스도 추가.
    let i = 0;
    for (let song of songs) {
      const [start, end, name, info] = song;
      song.unshift(i);
      i++;
      song.push(findTime(start, end));
    }
    // 너무 짧은 노래는 제거
    songs = songs.filter(([, , , , , time]) => time > memory.length);
    // 노래 시간을 오름차순으로 정렬
    songs.sort((a, b) => (a[5] > b[5] ? 1 : a[5] < b[5] ? -1 : b[0] - a[0]));

    // m 소문자로 대치
    m = m.replace(/.#/g, match => match[0].toLowerCase());

    // 노래 소문자로 대치하고 노래의 분단위 시간동안 길이를 늘림
    // 기억하는 노래 m이 그 노래에 해당하는지 확인
    for (const song of songs) {
      let [, , , name, info, time] = song;
      info = info.replace(/.#/g, match => match[0].toLowerCase());
      while (info.length <= time) info += info;
      info.slice(0, time);

      if (info.includes(m)) {
        answer = name;
      }
    }
    return answer;
  }
  //  cdcdf cdcdcdf
  console.log(solution('CDCDF', ['12:00,12:14,HELLO,CDCDCDF', '13:00,13:05,WORLD,ABCDEF']));
  console.log(solution('ABCDEFG', ['12:00,12:14,HELLO,CDEFGAB', '13:00,13:05,WORLD,ABCDEF']));
  console.log(
    solution('CC#BCC#BCC#BCC#B', ['03:00,03:30,FOO,CC#B', '04:00,04:08,BAR,CC#BCC#BCC#B'])
  );
  console.log(solution('ABC', ['12:00,12:14,HELLO,C#DEFGAB', '13:00,13:05,WORLD,ABCDEF']));
}
