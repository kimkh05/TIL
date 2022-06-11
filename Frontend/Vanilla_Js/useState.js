function useState(initalvalue) {
  let value = initalvalue;
  function state() {
    return value;
  }
  function setState(newValue) {
    value = newValue;
  }
  return [state, setState];
}

const [foo, setFoo] = useState(0);

console.log(foo());
setFoo(1);
console.log(foo());
