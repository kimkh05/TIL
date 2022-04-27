class Stack {
  constructor() {
    this._arr = [];
    this.top = 0;
  } // 생성자
  push(item) {
    this._arr.push(item);
    this.top++;
  } // stack 값 입력
  pop() {
    this.top--;
    return this._arr.pop();
  } // stack 값 삭제
}

function solution(s) {
  const stack = new Stack();
  for (let i = 0; i < s.length; i++) {
    stack._arr[stack._arr.length - 1] !== s[i] ? stack.push(s[i]) : stack.pop();
  }
  console.log(stack.top > 0 ? 0 : 1);
  return stack.top > 0 ? 0 : 1;
}
