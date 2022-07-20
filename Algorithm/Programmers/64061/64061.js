const solution = (board, moves) => {
  const stack = [];
  const LEN = board.length;
  let answer = 0;
  for (let i = 0; i < LEN; i++) {
    console.log(board[i]);
  }
  moves.forEach((element) => {
    for (let i = 0; i < LEN; i++) {
      const data = board[i][element - 1];
      if (data === 0) continue;
      if (data === stack[stack.length - 1]) {
        stack.pop();
        answer += 2;
      } else {
        stack.push(data);
      }
      board[i][element - 1] = 0;
      break;
    }
  });
  return answer;
};

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);

/* 
0 0 0 0 0
0 0 1 0 3
0 2 5 0 1
4 2 4 4 2
3 5 1 3 1

move: 1 5 3 5 1 2 1 4
*/
