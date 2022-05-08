function solution(numbers) {
  var answer = 0;
  let str = [];
  let isPrime = true;
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    let a = numbers.slice(i, i + 1);
    a = Number(a);
    str.push(a);
  }

  for (let i = 2; i <= 10 * numbers.length; i++) {
    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime === true) {
      if (i === str[i]) {
        count += 1;
      } else if (i % str[i] === str[i]) {
        count += 1;
      }
    }
    isPrime = true;
  }
  console.log(count);
  return answer;
}

solution("17");

solution("011");
