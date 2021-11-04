import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../lib/axios";

const GET_POST = "GET_POST";
const LOADING = "LOADING";
const MAINPAGE = "MAINPAGE";
const WHATPAGE = "WHATPAGE";

const getPosts = createAction(GET_POST, (data) => ({ data }));
const isLoading = createAction(LOADING, (loading) => ({ loading }));
const isMainPage = createAction(MAINPAGE, (data) => ({ data }));
const whatPage = createAction(WHATPAGE, (data) => ({ data }));

const initialState = {
  posts: [],
  is_loaded: false,
  infinityposts: [],
  // paging: { start: null, next: null },
  is_loading: false,
  sorts: "createdAt",
  reBook: "",
  mainpage: true,
  whatPage: { pre: null, now: null },
};

export const getPostAPI = () => {
  return function (dispatch, getState, { history }) {
    let stack = getState().stack.stack;
    let sort = getState().sort.sort;
    let _paging = getState().infinity.paging;
    let reBook = getState().rebook.reBook;
    let mainPage = getState().post.mainpage;
    let whatPages = getState().post.whatPage;
    console.log("mainPage메인페이지", mainPage);

    if (mainPage === false) {
      return;
    }
    if (whatPages.now !== whatPages.pre) {
      dispatch(whatPage("mainPage"));
      return;
    }

    // let _paging = getState().post.paging;
    // console.log(_paging);

    apis
      .getPost(stack, _paging.next + 1, sort, reBook)
      .then((res) => {
        console.log(_paging);
        const posts = res.data.data;

        // let paging = {
        //   start: _paging.start,
        //   next: _paging.next,
        // };
        console.log("어떻게 오는지", res.data.data);

        dispatch(isLoading(true));
        let data = { _paging, posts, stack, sort, reBook };

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
        let sorts = action.payload.data.sort;
        let reBook = action.payload.data.reBook;
        if (!draft.stacks || !draft.sorts || !draft.reBook) {
          draft.stacks = stacks;
          draft.sorts = sorts;
          draft.reBook = reBook;
          // console.log("우선 스택을 넣고", draft.stacks);
          // console.log("우선 스택을 넣고", draft.sorts);
          // console.log(state);
        }
        if (
          state.stacks !== stacks ||
          state.sorts !== sorts ||
          state.reBook !== reBook
        ) {
          // console.log(draft.stacks !== stacks);
          // console.log("받아온 스택", stacks);
          // console.log("draft스택", state.stacks);
          // console.log("스택이 달라졌을때");
          draft.posts = action.payload.data.posts;
          draft.paging = action.payload.data.paging;
          draft.is_loading = false;
          draft.stacks = stacks;
          draft.sorts = sorts;
          draft.reBook = reBook;
        } else if (
          state.stacks === stacks ||
          state.sorts === sorts ||
          state.reBook === reBook
        ) {
          // console.log(draft.stacks === stacks);
          // console.log("스택이 그대로일때");
          draft.posts.push(...action.payload.data.posts);
          draft.paging = action.payload.data.paging;
          draft.is_loading = false;
        }
      }),

    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.is_loading = action.payload.loading;
      }),
    [MAINPAGE]: (state, action) =>
      produce(state, (draft) => {
        // console.log("여기가 메인페이지인가", action.payload.data);
        draft.mainpage = action.payload.data;
      }),
    [WHATPAGE]: (state, action) =>
      produce(state, (draft) => {
        console.log("현재페이지", action.payload.data);
        // console.log(state);
        let page = {
          pre: state.whatPage.now,
          now: action.payload.data,
        };
        // console.log(page);
        draft.whatPage = page;
      }),
  },
  initialState
);

const postActions = {
  getPostAPI,
  isMainPage,
  whatPage,
};
export { postActions };
