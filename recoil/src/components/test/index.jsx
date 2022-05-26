import React, { useEffect } from "react";
import { atom, useRecoilState } from "recoil";

export const RecoilObserver = ({ nodes, onChange }) => {
  const value = useRecoilState(nodes);
  useEffect(() => onChange(value), [onChange, value]);
  return null;
};

const nameState = atom({
  key: "nameAtom",
  default: "",
});

const Form = () => {
  const [name, setName] = useRecoilState(nameState);

  return (
    <>
      <form>
        <input
          data-testId="name_input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </>
  );
};


export default Form;
