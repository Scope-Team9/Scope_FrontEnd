/* eslint-disable */
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../lib/axios";
import { postActions } from "./post";
import { useSelector, useDispatch } from "react-redux";

const GET_PAGE = "GET_PAGE";
const GET_SCROLL = "GET_SCROLL";

const getPages = createAction(GET_PAGE, (data) => ({ data }));
const getScroll = createAction(GET_SCROLL, (data) => ({ data }));

const initialState = {
  paging: { start: 12, next: 12 },
  currentScroll: null,
};

export const getPage = (data) => {
  return function (dispatch, getState, { history }) {
    let mainPage = getState().post.mainpage;
    let whatPages = getState().post.whatPage;

    if (mainPage === false && whatPages.now !== "mainPage") {
      return;
    } else {
      dispatch(getPages(data));
    }
  };
};

export default handleActions(
  {
    [GET_PAGE]: (state, action) =>
      produce(state, (draft) => {
        let paging = {
          start: state.paging.next,
          next: action.payload.data,
        };

        draft.paging = paging;
      }),
    [GET_SCROLL]: (state, action) =>
      produce(state, (draft) => {
        draft.currentScroll = action.payload.data;
      }),
  },
  initialState
);

const pageAction = {
  getPage,
  getScroll,
};
export { pageAction };
