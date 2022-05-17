interface Ironman {
  name: string;
}

class Avengers {
  name: string;
}

let iron: Ironman;
iron = new Avengers();

interface Avengers {
  name: string;
}

let hero: Avengers;
let capt = { name: "Captain", location: "Pangyo" };
hero = capt; // able

function assemble(a: Avengers) {
  console.log("어벤져스 모여라", a.name);
}
assemble(capt);

enum Status {
  Ready,
  Waiting,
}
enum Color {
  Red,
  Blue,
  Green,
}

// let status = Status.Ready;
//status = Color.Green; // Error

class Hulk {
  handSize: number;
  constructor(name: string, numHand: number) {}
}

class Captain {
  handSize: number;
  constructor(numHand: number) {}
}

let q: Hulk;
let w: Captain;

q = w; // Ok
w = q; // Ok

// string 타입을 사용할 때
// const name: string = "capt";

// 타입 별칭을 사용할 때
type MyName = string;
const names: MyName = "capt";

type developer = {
  name: string;
  skill: string;
};

type User<T> = {
  name: T;
};
