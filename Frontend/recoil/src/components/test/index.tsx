import React from "react";
import { atom, useRecoilState } from "recoil";

const flushPromisesAndTimers = (): Promise<void> => {
  return act(
    () =>
      new Promise((resolve) => {
        setTimeout(resolve, 100);
        jest.runAllTimers();
      })
  );
};

const getDefaultTitleAtomState = async () => {
  const response = await fetch("https://example.com/returns/a/json");
  return await response.json(); // { title: 'real title' };
};

const titleState = atom({
  key: "titleState",
  default: getDefaultTitleAtomState(),
});

function Title() {
  const data = useRecoilValue(titleState);
  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  );
}
