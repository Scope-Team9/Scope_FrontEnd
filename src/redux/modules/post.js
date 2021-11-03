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
        let data = { paging, posts, stack };

        dispatch(getPosts(data));
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
        console.log(action);
        let stacks = action.payload.data.stack;
        if (!draft.stacks) {
          draft.stacks = stacks;
          console.log(stacks);
          console.log("우선 스택을 넣고");
          console.log("우선 스택을 넣고", draft.stacks);
        }
        if (state.stacks !== stacks) {
          console.log(draft.stacks !== stacks);
          console.log("받아온 스택", stacks);
          console.log("draft스택", state.stacks);
          console.log("스택이 달라졌을때");
          draft.posts = action.payload.data.posts;
          draft.paging = action.payload.data.paging;
          draft.is_loading = false;
          draft.stacks = stacks;
        } else {
          console.log(draft.stacks === stacks);
          console.log("스택이 그대로일때");
          draft.posts.push(...action.payload.data.posts);
          draft.paging = action.payload.data.paging;
          draft.is_loading = false;
        }
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
