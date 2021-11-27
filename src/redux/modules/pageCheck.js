/* eslint-disable */
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const GET_PAGECHECK = "GET_PAGECHECK";

const getPageCheck = createAction(GET_PAGECHECK, (data) => ({ data }));

const initialState = {
  pageGo: "/",
};

export default handleActions(
  {
    [GET_PAGECHECK]: (state, action) =>
      produce(state, (draft) => {
        console.log("페이지 위치 저장", action.payload.data);
        draft.pageGo = action.payload.data;
      }),
  },
  initialState
);

const pageCheckAction = {
  getPageCheck,
};
export { pageCheckAction };
