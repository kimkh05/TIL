function solution(n, left, right) {
  var answer = [];
  let setArr = [];
  for (let i = 0; i < n; i++) {
    let temp = [];
    let tmp = 0;
    for (let j = 0; j < n; j++) {
      if (i === 0) {
        temp.push(j + 1);
      } else {

      }
    }
    setArr.push(temp);
  }
  console.log(setArr);
  return answer;
}

solution(3, 2, 5);
