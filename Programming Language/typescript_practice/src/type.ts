/* 출처 : https://velog.io/@wndud0647/TIL-25-TypeScript-%ED%83%80%EC%9E%85-%EC%84%A0%EC%96%B8-%EB%B0%8F-%EC%A2%85%EB%A5%98 */

// //기본 형태
// function someFunc(a: TYPE_A, b: TYPE_B): TYPE_RETURN {
//   return a + b;
// }

// let some: TYPE_SOME = someFunc(1, 2);

// //실제 사용
// function add(a: number, b: number) {
//   return a + b;
// }

// const sum: number = add(1, 2);
// console.log(sum); // 3

function add(a: number, b: number) {
  return a + b;
}

// const sum: string = add(1, 2); //error
// console.log(sum);

let isBoolean: boolean;
let isDone: boolean = false;

let num: number;
let integer: number = 6;
let float: number = 3.14;
let hex: number = 0xf00d; //61453
let binary: number = 0b1010; // 10
let octal: number = 0o744; // 484
let infinity: number = Infinity;
let nan: number = NaN;

let str: string;
let red: string = "Red";
let green: string = "Green";
let myColor: string = `My color is ${red}`;
let yourColor: string = "Your color is" + green;

// 문자열만 가지는 배열
let fruits1: string[] = ["Apple", "Banana", "Mango"];
let fruits2: Array<String> = ["Apple", "Banana", "Mango"];

// 숫자만 가지는 배열
let oneToSeven1: number[] = [1, 2, 3, 4, 5, 6, 7];
let oneToSeven2: Array<number> = [1, 2, 3, 4, 5, 6, 7];

let array1: (string | number)[] = ["Apple", 1, 2, "Banana", "Mango", 3];
let array2: Array<string | number> = ["Apple", 1, 2, "Banana", "Mango", 3];

let someArr: any[] = [0, 1, {}, [], "str", false];

interface IUser {
  name: string;
  age: number;
  isVaild: boolean;
}

let userArr: IUser[] = [
  {
    name: "Neo",
    age: 10,
    isVaild: true,
  },
  {
    name: "Lewis",
    age: 64,
    isVaild: false,
  },
  {
    name: "Evan",
    age: 123,
    isVaild: true,
  },
];

let arrA: readonly number[] = [1, 2, 3, 4];
let arrB: ReadonlyArray<number> = [2, 4, 6, 8];

let tuple: [string, number];
tuple = ["a", 1];

let userId: number = 1234;
let userName: string = "juyoung";
let isValid: boolean = true;

let userA: [number, string, boolean] = [1234, "juyoung", true];
console.log(userA[0]); // 1234
console.log(userA[1]); // 'juyoung'
console.log(userA[2]); // true

let usersA: [number, string, boolean][];
let usersB: Array<[number, string, boolean]>;
usersA = [
  [1, "chisus", true],
  [2, "jisu", false],
];

let tupleA: [1, number];
tupleA = [1, 2];
// tupleA = [2, 3]; // Error - TS2322: Type '2' is not assignable to type '1'.

//0번 째 요소가 1이라는 값으로 고정되어 있으므로 에러

let tupleB: [string, number];
tupleB = ["a", 1];
tupleB = ["b", 2];
tuple.push(3);
console.log(tupleB); // ['b', 2, 3];
// tupleB.push(true); // Error - TS2345: Argument of type 'true' is not assignable to parameter of type 'string | number'.

//string/number타입만 가지고 있기 때문에 boolean형 할당 불가

let a: readonly [string, number] = ["rest", 123];
// a[0] = "work"; // Error - TS2540: Cannot assign to '0' because it is a read-only property.

enum Week {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}
console.log(Week.Mon); // 1
console.log(Week.Tue); // 2

enum Weeks {
  Sun,
  Mon = 22,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}

console.log(Weeks.Mon); // 22
console.log(Weeks.Tue); // 23
