function solution(array, commands) {
  var answer = [];
  const ARRLEN = array.length;
  const COMLEN = commands.length;

  for (let i = 0; i < COMLEN; i++) {
    let arr = [];
    let left = commands[i][0] - 1;
    let right = commands[i][1];
    arr = array.slice(left, right);
    arr.sort((a, b) => a - b);
    answer.push(arr[commands[i][2] - 1]);
  }
  return answer;
}

solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);
