const INIT = 0;

/*
    ************* encoding 과정 트렐리스 다이어그램(인접 행렬)으로 기록 *************
    trellisDiagramBeforeToAfter[before][after] = [input, output]
    trellisDiagramAfterToBefore[after][before] = [input, output]
*/
let trellisDiagramBeforeToAfter = Array(4)
  .fill()
  .map(() => Array(4).fill([-1, -1]));

let visitedBeforeToAfter = Array(4)
  .fill()
  .map(() => Array(4).fill(0));

let trellisDiagramAfterToBefore = Array(4)
  .fill()
  .map(() => Array(4).fill([-1, -1]));

let visitedAfterToBefore = Array(4)
  .fill()
  .map(() => Array(4).fill(0));

let activeState = Array(4)
  .fill()
  .map(() => Array(4).fill(0));

function encoderWithBeforeState(mode, input, level, beforeState) {
  let output;
  const temp = [];
  const S = [];
  const afterState = [];

  for (let i = 0; i < 2; i++) {
    S[i] = beforeState[i];
  }

  if (mode == INIT) {
    S[2] = 0x0;
    S[1] = 0x0;
    S[0] = input;
  } else {
    S[2] = S[1];
    S[1] = S[0];
    S[0] = input;
  }
  // modulo-2
  temp[0] = (S[0] + S[2]) % 2;
  temp[1] = (S[0] + S[1] + S[2]) % 2;
  temp[2] = (S[0] + S[1] + S[2]) % 2;

  for (let i = 0; i < 2; i++) {
    afterState[i] = S[i];
  }

  // binary -> decimal
  output = 4 * temp[0] + 2 * temp[1] + 1 * temp[2];

  const beforeDec = beforeState[0] * 2 + beforeState[1];
  const afterDec = afterState[0] * 2 + afterState[1];
  trellisDiagramBeforeToAfter[beforeDec][afterDec] = [input, output];
  visitedBeforeToAfter[beforeDec][afterDec] = 1;

  return afterState;
}

function transposeArray(array, transposedArray) {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      transposedArray[j][i] = array[i][j];
    }
  }
}

function main() {
  let beforeState = [0, 0];
  let Q = [];

  for (let i = 0; i < 3; i++) {
    if (i === 0) {
      Q.push([...encoderWithBeforeState(i, 0, i, [0, 0])]);
      Q.push([...encoderWithBeforeState(i, 1, i, [0, 0])]);

      const beforeDec = beforeState[0] * 2 + beforeState[1];
      activeState[i][beforeDec] = 1;
    } else {
      let len = Q.length;
      for (let j = 0; j < len; j++) {
        beforeState = [...Q.shift()];

        Q.push([...encoderWithBeforeState(i, 0, i, beforeState)]);
        Q.push([...encoderWithBeforeState(i, 1, i, beforeState)]);

        const beforeDec = beforeState[0] * 2 + beforeState[1];
        activeState[i][beforeDec] = 1;
      }
    }
  }

  transposeArray(trellisDiagramBeforeToAfter, trellisDiagramAfterToBefore);
  transposeArray(visitedBeforeToAfter, visitedAfterToBefore);
  console.log(activeState);

  // console.log(trellisDiagramBeforeToAfter);
  // console.log(visitedBeforeToAfter);
  // console.log(trellisDiagramAfterToBefore);
  // console.log(visitedAfterToBefore);

  // console.log(
  //   visitedBeforeToAfter.map(col => col.reduce((acc, row) => acc + row, 0)),
  // );

  return trellisDiagramBeforeToAfter;
}

main();
// console.log(JSON.stringify(main()).replaceAll('[', '{').replaceAll(']', '}'));

// console.log(
//   [1, 0, 0, 0, 0, 0].reduce((acc, bit, idx) => acc + bit * 2 ** (6 - idx), 0),
// );
