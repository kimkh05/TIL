const arrTest = () => {
  let cnt = 1;
  const arr = new Array(5).fill(0);
  for (let i = 0; i < arr.length; i++) arr[i] = new Array(10).fill(0);
  for (let i = 0; i < 5; i++) for (let j = 0; j < 10; j++) arr[i][j] = cnt++;
  return arr;
};

const solution = (h, w) => {
  const arr = new Array(h).fill(0);
  let cnt = 1;
  let check = false;
  let rev = false;
  let a = 0;
  let b = w - 1;
  for (let i = 0; i < w; i++) {
    arr[i] = new Array(w).fill(0);
  }
  for (let i = 0; i < h; i++) {
    if (!rev && !check) {
      for (let j = a; j < b; j++) {
        arr[i][j] = cnt++;
        a += 1;
        b -= 1;
      }
    } else if()
  }
  return arr;
};

/*
1  2  3  4  5  6  7  8  9  10
26 27 28 29 30 31 32 33 34 11
25 35 12
24 13
23 22 21 20 19 18 17 16 15 14
*/

console.log(solution(5, 10));
