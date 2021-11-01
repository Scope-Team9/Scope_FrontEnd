import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../lib/axios";

const GET_POST = "GET_POST";
const LOADING = "LOADING";

const getPosts = createAction(GET_POST, (data) => ({ data }));
const isLoading = createAction(LOADING, (loading) => ({ loading }));

const initialState = {
  posts: [],
  is_loaded: false,
  infinityposts: [],
  paging: { start: null, next: null },
  is_loading: false,
};

export const getPostAPI = () => {
  return function (dispatch, getState, { history }) {
    let stack = getState().stack.stack;
    console.log(stack);
    let _paging = getState().post.paging;
    console.log(_paging);

    apis
      .getPost(stack, _paging.next + 1)
      .then((res) => {
        console.log(_paging);
        const posts = res.data.data;

        let paging = {
          start: _paging.next,
          next: _paging.next + 1,
        };
        console.log("어떻게 오는지", res.data.data);

        dispatch(isLoading(true));

        // dispatch(getPosts(posts, paging));
        dispatch(getPosts(paging, posts));
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        console.log("wwgdsagasdf");
        console.log(action);
        console.log(state);

        // draft.products.push(...action.payload.products.data.content);
        draft.paging = action.payload.data;
        draft.is_loading = false;
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
