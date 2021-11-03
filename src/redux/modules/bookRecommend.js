import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const GET_RB = "GET_SORT";

const getRb = createAction(GET_RB, (data) => ({ data }));

const initialState = {
  RecommendBook: "",
};

export default handleActions(
  {
    [GET_RB]: (state, action) =>
      produce(state, (draft) => {
        console.log(action);
        draft.re_book = action.payload.data;
      }),
  },
  initialState
);

const bookRecommendAction = {
  getRb,
};
export { bookRecommendAction };
