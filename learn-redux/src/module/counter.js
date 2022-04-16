const SET_DIFF = "counter/SET_DIFF";
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

export const setDiff = (diff) => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

const initalState = {
  number: 0,
  diff: 1,
};

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        number: state.number + action.diff,
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - action.diff,
      };
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff,
      };
    default:
      return state;
  }
}
