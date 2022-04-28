function solution(numbers) {
  const str = numbers
    .map((index) => String(index))
    .sort((first, last) => {
      return parseInt(last + first) - parseInt(first + last);
    });

  let count = 0;
  // [0, 0, 0] 일때 예외처리
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "0") count++;
  }
  if (count === str.length) {
    for (let i = 0; i < count - 1; i++) {
      str.shift();
    }
  }

  const answer = str.join(""); // 문자열 합치기
  console.log(answer);
  return answer;
}

solution([0, 0, 0]);
