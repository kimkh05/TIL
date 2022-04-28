function solution(arr1, arr2) {
  var answer = [];
  const arrLen1 = arr1.length;
  const arrLen2 = arr2.length;
  let temp = [];
  console.log(arrLen1, arrLen2, arr1[0].length);
  for (let i = 0; i < arrLen1; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      temp.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(temp);
    temp = [];
  }
  return answer;
}

solution(
  [
    [1, 2],
    [2, 3],
  ],
  [
    [3, 4],
    [5, 6],
  ]
);
