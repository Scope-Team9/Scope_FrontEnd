/* eslint-disable */
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const GET_STACK = "GET_STACK";
const SET_STACK = "SET_STACK";

const GET_STACK2 = "GET_STACK2";
const SET_STACK2 = "SET_STACK2";

const getStack = createAction(GET_STACK, (data) => ({ data }));
const setStack = createAction(SET_STACK, (data) => ({ data }));

const getStack2 = createAction(GET_STACK2, (data) => ({ data }));
const setStack2 = createAction(SET_STACK2, (data) => ({ data }));

const initialState = {
  // stack: {
  //   React: "",
  //   Java: "",
  //   JavaScript: "",
  //   Python: "",
  //   Node: "",
  //   cpp: "",
  //   Flask: "",
  //   Django: "",
  //   Vue: "",
  //   Spring: "",
  //   php: "",
  //   Swift: "",
  //   Kotlin: "",
  //   TypeScript: "",
  // },
  stacks: [],
};

export default handleActions(
  {
    [GET_STACK2]: (state, action) =>
      produce(state, (draft) => {
        // console.log("dodoget", action);

        draft.stacks.push(action.payload.data);
      }),
    [SET_STACK2]: (state, action) =>
      produce(state, (draft) => {
        // console.log("dodoset", state.stacks);
        const result = state.stacks.filter((p) => p !== action.payload.data);
        draft.stacks = result;
      }),
  },
  initialState
);

const stackAction = {
  getStack,
  setStack,
  getStack2,
  setStack2,
};
export { stackAction };
