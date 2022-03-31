function solution(array, commands) {
  var answer = [];
  return answer;
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(line);
  rl.close();
}).on("close", () => {
  process.exit();
});

const inputs = [];
let i, j, k;
i = inputs[0];
j = inputs[1];
k = inputs[2];
function check() {
  console.log(inputs);
  console.log(i);
  console.log(j);
  console.log(k);
}

check();
