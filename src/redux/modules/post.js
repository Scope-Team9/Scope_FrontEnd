import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../lib/axios";
import Swal from "sweetalert2";

const GET_POST = "GET_POST";
const LOADING = "LOADING";
const MAINPAGE = "MAINPAGE";
const WHATPAGE = "WHATPAGE";
const PAGECHECK = "PAGECHECK";

const getPosts = createAction(GET_POST, (data) => ({ data }));
const isLoading = createAction(LOADING, (loading) => ({ loading }));
const isMainPage = createAction(MAINPAGE, (data) => ({ data }));
const whatPage = createAction(WHATPAGE, (data) => ({ data }));
const pageCheck = createAction(PAGECHECK, (data) => ({ data }));

const initialState = {
  posts: [],
  is_loaded: false,
  infinityposts: [],
  // paging: { start: null, next: null },
  is_loading: false,
  sorts: "createdAt",
  reBook: "",
  mainpage: true,
  whatPage: { pre: "mainPage", now: "mainPage" },
  pageCheck: false,
  render: false,
};

export const getPostAPI = () => {
  return function (dispatch, getState, { history }) {
    let stack = getState().stack.stack;
    let sort = getState().sort.sort;
    let _paging = getState().infinity.paging;
    let reBook = getState().rebook.reBook;
    let mainPage = getState().post.mainpage;
    let whatPages = getState().post.whatPage;
    // console.log("mainPage메인페이지", mainPage);

    // if (mainPage === false) {
    //   console.log("끊겠음1");
    //   return;
    // }
    if (whatPages.now !== whatPages.pre) {
      console.log(whatPages.now, whatPages.pre);
      console.log("끊겠음2");
      dispatch(whatPage("mainPage"));
      return;
    }

    // console.log(_paging);

    apis
      .getPost(stack, _paging.next + 1, sort, reBook)
      .then((res) => {
        console.log(_paging);
        const posts = res.data.data;

        console.log("어떻게 오는지", res.data.data);

        dispatch(isLoading(true));
        let data = { _paging, posts, stack, sort, reBook };

        dispatch(getPosts(data));
      })
      .catch((err) => {
        // console.log(err.response);
        Swal.fire(
          "로그인 후 이용하실 수 있습니다!",
          "간단한 테스트를 진행해 주세요.",
          "info"
        );
      });
  };
};

export default handleActions(
  {
    // 백엔드와 통신
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
          console.log("스택이 달라졌을때");
          console.log(action);
          draft.paging = action.payload.data.paging;
          draft.posts = action.payload.data.posts;
          draft.is_loading = false;
          draft.stacks = stacks;
          draft.sorts = sorts;
          draft.reBook = reBook;
          draft.render = true;
        } else if (
          state.stacks === stacks ||
          state.sorts === sorts ||
          state.reBook === reBook
        ) {
          // console.log(draft.stacks === stacks);
          console.log("스택이 그대로일때");
          // draft.posts.push(...action.payload.data.posts);
          draft.posts = action.payload.data.posts;
          draft.paging = action.payload.data.paging;
          draft.is_loading = false;
          draft.render = false;
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
        // console.log("현재페이지", action.payload.data);
        // console.log(state);
        let page = {
          pre: state.whatPage.now,
          now: action.payload.data,
        };
        console.log(page);
        draft.whatPage = page;
      }),
    [PAGECHECK]: (state, action) =>
      produce(state, (draft) => {
        console.log("페이지 체크", action);
        draft.pageCheck = action.payload.data;
      }),
  },
  initialState
);

const postActions = {
  getPostAPI,
  isMainPage,
  whatPage,
  pageCheck,
};
export { postActions };
