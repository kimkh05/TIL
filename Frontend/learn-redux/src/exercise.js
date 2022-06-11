import { createStore } from "redux";

const initalState = {
  counter: 0,
  text: "",
  list: [],
};

const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

const increate = () => ({
  type: INCREASE,
});

const decrease = () => ({
  type: DECREASE,
});

const ChangeText = (text) => ({
  type: CHANGE_TEXT,
  text,
});

const addToList = (item) => ({
  type: ADD_TO_LIST,
  item,
});

function reducer(state = initalState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item),
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

console.log(store.getState());

const listener = () => {
  const state = state.getState();
  console.log(state);
};

const unsubscribe = store.subscribe(listener);
