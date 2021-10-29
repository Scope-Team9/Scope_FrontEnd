import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const GET_STACK = "GET_STACK";
const SET_STACK = "SET_STACK";

const getStack = createAction(GET_STACK, (data) => ({ data }));
const setStack = createAction(SET_STACK, (data) => ({ data }));

const initialState = [
  //   "javascript",
  //   "typescript",
  //   "react",
  //   "vue",
  //   "node.js",
  //   "java",
  //   "spring",
  //   "kotlin",
  //   "c++",
  //   "go",
  //   "python",
  //   "django",
  //   "flutter",
  //   "swift",
];

export default handleActions(
  {
    [GET_STACK]: (state, action) =>
      produce(state, (draft) => {
        console.log("wwgdsagasdf");
        console.log(action.payload.data);
        console.log(state);
        draft.push(action.payload.data);
      }),
    [SET_STACK]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.data);
        // draft.splice(draft.findIndex((item) => item === action.payload.data));
        const result = draft.filter((item) => item !== action.payload.data);
        console.log(result);
        draft = result;
      }),
  },
  initialState
);

const stackAction = {
  getStack,
  setStack,
};
export { stackAction };
