// function solution(n, words) {
//   var answer = [0, 0];
//   let left = 0;
//   let right = 0;
//   let tmp = [];
//   for (let i = 0; i < words.length - 1; i++) {
//     if (i > 1) {
//       let last = String(tmp[tmp.length - 1]);
//       if (last.substr(last.length - 1) !== String(words[i]).substr(0, 1)) {
//         right = i + 1;
//         break;
//       }
//     }
//     let temp = words[i];
//     for (let j = i + 1; j < words.length; j++) {
//       if (temp === words[j]) {
//         left = j + 1;
//       }
//     }
//   }
//   left /= n;
//   answer[0] = left;
//   answer[1] = right;
//   console.log(answer);
//   return answer;
// }

function solution(n, words) {
  let answer = [0, 0];
  const LEN = words.length;
  let sum = 1;
  for (let i = 0; i < LEN; i++) {
    const wordsLen = words[i].length;
    if (words.slice(0, i).includes(words[i])) { // includes : 특정문자열 확인 메소드
      break;
    }

    if (wordsLen < 2) {
      break;
    }

    if (i < LEN - 1) {
      if (words[i][words[i].length - 1] !== words[i + 1][0]) {
        sum++;
        break;
      }
    }
    sum++;
  }
  if (sum > LEN) {
    console.log(answer);
    return answer;
  } else {
    answer = [sum % n == 0 ? n : sum % n, Math.ceil(sum / n)];
    // Math.ceil : 소수점 올림
  }
  console.log(answer);
  return answer;
}

console.log("첫번째 결과");

solution(3, [
  "tank",
  "kick",
  "know",
  "wheel",
  "land",
  "dream",
  "mother",
  "robot",
  "tank",
]);

console.log("두번째 결과");

solution(5, [
  "hello",
  "observe",
  "effect",
  "take",
  "either",
  "recognize",
  "encourage",
  "ensure",
  "establish",
  "hang",
  "gather",
  "refer",
  "reference",
  "estimate",
  "executive",
]);

console.log("세번쩨 결과");

solution(2, ["hello", "one", "even", "never", "now", "world", "draw"]);
