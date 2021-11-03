import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../lib/axios";

const GET_PAGE = "GET_PAGE";

const getPage = createAction(GET_PAGE, (data) => ({ data }));

const initialState = {
  paging: { start: null, next: null },
};

export default handleActions(
  {
    [GET_PAGE]: (state, action) =>
      produce(state, (draft) => {
        // console.log("액션값을 받아야함", action);
        // console.log(state.paging);
        let paging = {
          start: state.paging.next,
          next: action.payload.data,
        };
        // console.log("액션값을 받아야함2222", paging);
        draft.paging = paging;
      }),
  },
  initialState
);

const pageAction = {
  getPage,
};
export { pageAction };
