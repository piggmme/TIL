/*
name : 파일명
msg : 기록할 내용
https://3dmpengines.tistory.com/1971
*/
function writeFile(name, msg) {
  var fs = require('fs');
  fs.writeFile(`${name}.txt`, msg, 'utf8', function (err) {
    if (err) throw err;
    console.log('write end');
  });
}

const INIT = 0;
const MEMORY = 6;
const STATE_COUNT = 2 ** (MEMORY + 2);

/*
    ************* encoding 과정 트렐리스 다이어그램(인접 행렬)으로 기록 *************
    trellisDiagramBeforeToAfter[before][after] = [input, output]
    trellisDiagramAfterToBefore[after][before] = [input, output]
*/
let trellisDiagramBeforeToAfter = Array(STATE_COUNT)
  .fill()
  .map(() => Array(STATE_COUNT).fill([-1, -1]));

let visitedBeforeToAfter = Array(STATE_COUNT)
  .fill()
  .map(() => Array(STATE_COUNT).fill(0));

let trellisDiagramAfterToBefore = Array(STATE_COUNT)
  .fill()
  .map(() => Array(STATE_COUNT).fill([-1, -1]));

let visitedAfterToBefore = Array(STATE_COUNT)
  .fill()
  .map(() => Array(STATE_COUNT).fill(0));

let activeState = Array(MEMORY + 1)
  .fill()
  .map(() => Array(STATE_COUNT).fill(0));

const visitedState = new Set();

function encoderWithBeforeState(mode, input, level, beforeState) {
  let output;
  const temp = [];
  const S = [];
  const afterState = [];

  for (let i = 0; i < MEMORY; i++) {
    S[i] = beforeState[i];
  }

  if (mode == INIT) {
    S[6] = 0x0;
    S[5] = 0x0;
    S[4] = 0x0;
    S[3] = 0x0;
    S[2] = 0x0;
    S[1] = 0x0;
    S[0] = input;
  } else {
    S[6] = S[5];
    S[5] = S[4];
    S[4] = S[3];
    S[3] = S[2];
    S[2] = S[1];
    S[1] = S[0];
    S[0] = input;
  }
  // modulo-2
  temp[0] = (S[0] + S[2] + S[3] + S[5] + S[6]) % 2;
  temp[1] = (S[0] + S[1] + S[4] + S[6]) % 2;
  temp[2] = (S[0] + S[1] + S[2] + S[3] + S[4] + S[6]) % 2;

  for (let i = 0; i < MEMORY; i++) {
    afterState[i] = S[i];
  }

  // binary -> decimal
  output = 4 * temp[0] + 2 * temp[1] + 1 * temp[2];

  const beforeDec = beforeState.reduce(
    (acc, bit, idx) => acc + bit * 2 ** (MEMORY - idx),
    0,
  );
  const afterDec = afterState.reduce(
    (acc, bit, idx) => acc + bit * 2 ** (MEMORY - idx),
    0,
  );
  visitedState.add(beforeDec);
  visitedState.add(afterDec);

  trellisDiagramBeforeToAfter[beforeDec][afterDec] = [input, output];
  visitedBeforeToAfter[beforeDec][afterDec] = 1;
  // console.log({ input, beforeDec, afterDec, output });

  return afterState;
}

function transposeArray(array, transposedArray) {
  for (let i = 0; i < STATE_COUNT; i++) {
    for (let j = 0; j < STATE_COUNT; j++) {
      transposedArray[j][i] = array[i][j];
    }
  }
}

function main() {
  let beforeState = [0, 0, 0, 0, 0, 0];
  let Q = [];

  for (let i = 0; i < MEMORY + 1; i++) {
    if (i === 0) {
      Q.push([...encoderWithBeforeState(i, 0, i, [0, 0, 0, 0, 0, 0])]);
      Q.push([...encoderWithBeforeState(i, 1, i, [0, 0, 0, 0, 0, 0])]);
      //   console.log('\n' + 2 + '\n');

      const beforeDec = beforeState.reduce(
        (acc, bit, idx) => acc + bit * 2 ** (MEMORY - idx),
        0,
      );
      activeState[i][beforeDec] = 1;
    } else {
      let len = Q.length;
      for (let j = 0; j < len; j++) {
        beforeState = [...Q.shift()];

        Q.push([...encoderWithBeforeState(i, 0, i, beforeState)]);
        Q.push([...encoderWithBeforeState(i, 1, i, beforeState)]);

        const beforeDec = beforeState.reduce(
          (acc, bit, idx) => acc + bit * 2 ** (MEMORY - idx),
          0,
        );
        activeState[i][beforeDec] = 1;
      }
      //   console.log('\n' + len * 2 + '\n');
    }
  }

  transposeArray(trellisDiagramBeforeToAfter, trellisDiagramAfterToBefore);
  transposeArray(visitedBeforeToAfter, visitedAfterToBefore);
  console.log(activeState);

  // console.log(
  //   visitedBeforeToAfter.map(col => col.reduce((acc, row) => acc + row, 0)),
  // );

  writeFile(
    'visitedBeforeToAfter',
    JSON.stringify(visitedBeforeToAfter)
      .replaceAll('[', '{')
      .replaceAll(']', '}'),
  );
  writeFile(
    'trellisDiagramBeforeToAfter',
    JSON.stringify(trellisDiagramBeforeToAfter)
      .replaceAll('[', '{')
      .replaceAll(']', '}'),
  );
  writeFile(
    'trellisDiagramAfterToBefore',
    JSON.stringify(trellisDiagramAfterToBefore)
      .replaceAll('[', '{')
      .replaceAll(']', '}'),
  );
  writeFile(
    'visitedAfterToBefore',
    JSON.stringify(visitedAfterToBefore)
      .replaceAll('[', '{')
      .replaceAll(']', '}'),
  );
  writeFile(
    'activeState',
    JSON.stringify(activeState).replaceAll('[', '{').replaceAll(']', '}'),
  );

  return trellisDiagramBeforeToAfter;
}

main();
// console.log(JSON.stringify(main()).replaceAll('[', '{').replaceAll(']', '}'));
