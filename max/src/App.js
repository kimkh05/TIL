import { useDeferredValue, useState, useTransition } from "react";
import TestModal from "./components/testModal/testModal";

let a = new Array(1000).fill(0);

function App() {
  const [name, setName] = useState("");
  const [isPending, 늦게처리] = useTransition();
  let state = useDeferredValue(name);

  return (
    <>
      <input
        onChange={(e) => {
          늦게처리(() => {
            setName(e.target.name);
          });
        }}
      />
      {isPending
        ? "로딩중"
        : a.map(() => {
            return <div>{state}</div>;
          })}
    </>
  );
}

export default App;
