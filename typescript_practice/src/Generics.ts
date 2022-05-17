// const getText = (text) => text;

// console.log(getText("hi"));
// console.log(getText(10));
// console.log(getText(true));

function getText<T>(text: T): T {
  return text;
}

console.log(getText<string>("hi"));
console.log(getText<number>(10));
console.log(getText<boolean>(true));

function logText<T>(text: T): T {
  return text;
}

function logTexts(text: any): any {
  return text;
}

const text = logText<string>("Hello Generic");
const texts = logText("Hello Generic");
