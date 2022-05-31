import { useState } from "react";
import { atom, useSetRecoilState } from "recoil";

const namesState = atom({
  key: "namesState",
  default: ["Ella", "Chris", "Paul"],
});

const FormContent = ({ setNamesState }) => {
  const [name, setName] = useState("");

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setNamesState((names) => [...names, name])}>
        Add Name
      </button>
    </>
  );
};

function Form() {
  const setNamesState = useSetRecoilState(namesState);

  return <FormContent setNamesState={setNamesState} />;
}
