function solution(nums) {
  var answer = -1;
  let cnt = 0;
  const numsLength = nums.length;
  for (let i = 0; i < numsLength; i++) {
    for (let j = i + 1; j < numsLength; j++) {
      for (let k = j + 1; k < numsLength; k++) {
        let sum = 0;
        sum += nums[i];
        sum += nums[j];
        sum += nums[k];
        console.log(sum);
        console.log(checkPrimeNum(sum));
        checkPrimeNum(sum) ? (cnt += 1) : console.log("false");
        console.log(cnt);
      }
    }
  }
  console.log(cnt);
  answer = cnt;
  return answer;
}

function checkPrimeNum(num) {
  if (num === 2) {
    return true;
  }

  for (let i = 0; i < num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

solution([1, 2, 3, 4]);
