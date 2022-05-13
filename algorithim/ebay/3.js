class Tri {
  constructor(left, right, bottom, color) {
    this.left = left;
    this.right = right;
    this.bottom = bottom;
    this.color = color;
  }
}

class IvtTri {
  constructor(left, right, top, color) {
    this.left = left;
    this.right = right;
    this.top = top;
    this.color = color;
  }
}

function solution(grid) {
  const elements = [];
  for (let i = 0; i <= grid.length; i++) {
    const colorString = grid[i];
    for (let j = 0; j <= grid.length; j++) {
      if (j % 2 === 0) {
          const el = new Tri()
          elements.push();
      }
    }
  }
}
console.log(solution(['B', 'RRB'])); // 3
console.log(solution(['R', 'BBB', 'RBRBR'])); // 7
console.log(solution(['R', 'RRR', 'RBBBB', 'BRRRBRR'])); // 15
