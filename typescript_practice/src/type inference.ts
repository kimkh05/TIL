let a = 1; // Number
let arr = [1, 2, null]; // (Number, Null)[]

// 문맥상의 타이핑
//Example Code
window.onmousedown = (mouseEvent) => {
  console.log(mouseEvent.button); //<- OK
  console.log(mouseEvent.kangaroo); //<- Error!
};

window.onscroll = (uiEvent) => {
  console.log(uiEvent.button); //<- Error!
};

const handler = (uiEvent) => {
  console.log(uiEvent.button); //<- OK
};

