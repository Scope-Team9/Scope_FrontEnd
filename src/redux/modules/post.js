import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../lib/axios";

const GET_POST = "GET_POST";
const LOADING = "LOADING";

const getPost = createAction(GET_POST, (data) => ({ data }));
const isLoading = createAction(LOADING, (loading) => ({ loading }));

const initialState = {
  posts: [],
  // is_loaded: false,
  // infinityProducts: [],
  // paging: { start: null, next: null },
  is_loading: false,
};

export const getPostAPI = () => {
  return function (dispatch, getState, { history }) {
    let _paging = getState().product.paging;
    dispatch(isLoading(true));

    apis.getPost(_paging.next + 1).then((res) => {
      const posts = res.data;
      console.log(res);

      let paging = {
        start: _paging.next,
        next: _paging.next + 1,
      };
      dispatch(getPost(posts, paging));
    });
  };
};

export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        // console.log(action.payload);
        // draft.products.push(...action.payload.products.data.content);
        // draft.paging = action.payload.paging;
        // draft.is_loading = false;
        // draft.search = false;
      }),

    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.is_loading = action.payload.loading;
      }),
  },
  initialState
);

const postActions = {
  getPostAPI,
};
export { postActions };
