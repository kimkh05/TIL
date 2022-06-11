import { atom, selector, useRecoilValue } from "recoil";

const nameState = atom({
  key: "nameState",
  default: ["", "Ella", "Chris", "", "Paul"],
});

const filteredNamesState = selector({
  key: "filteredNamesState",
  get: ({ get }) => get(nameState).filter((str) => str !== ""),
});

const NameDisplay = () => {
  const names = useRecoilValue(nameState);
  const filteredNames = useRecoilValue(filteredNamesState);

  return (
    <>
      Original names: {names.join(",")}
      <br />
      Filtered names: {filteredNames.join(",")}
    </>
  );
};
