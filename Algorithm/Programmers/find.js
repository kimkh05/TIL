const solution = (n, lost, reverse) => {
  let student = Array(n).fill(1);
  for (let i = 1; i <= n; i++) {
    lost.indexOf(i) > -1 ? (student[i - 1] -= 1) : null;
    reverse.indexOf(i) > -1 ? (student[i + 1] += 1) : null;
  }
  for (let [key, value] of student.entries()) {
    if (value === 0 && student[key + 1] > 1) {
      student[key]++;
      student[key + 1]--;
    }
    if (value === 0 && student[key - 1] > 1) {
      student[key]++;
      student[key - 1]--;
    }
    // value === 0 && student[key + 1] > 1
    //   ? () => {
    //     student[key]++;
    //     student[key + 1]--;
    //     }
    //   : null;
    // value === 0 && student[key - 1] > 1
    //   ? () => {
    //       student[key]++;
    //       student[key - 1]--;
    //     }
    //   : null;
  }
  const answer = student.filter((element) => element >= 1).length;
  return answer;
};

console.log(solution(5, [2, 4], [1, 3, 5]));
