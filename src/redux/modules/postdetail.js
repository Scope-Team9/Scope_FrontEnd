import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../lib/axios";

// CHECK
const CHECK_POST = "CHECK_POST";
// 수정
const EDIT_POST = "EDIT_POST";
// 삭제
const DELETE_POST = "DELETE_POST";

// 포스트 CHECK 액션생성함수 생성
const checkPost = createAction(CHECK_POST, (card) => ({ card }));
// 포스트 수정 액션생성함수 생성
const editPost = createAction(EDIT_POST, (card) => ({ card }));
// 포스트 삭제 액션생성함수 생성
const deletePost = createAction(DELETE_POST, (card) => ({ card }));

// 초기값
const initialState = {
  list: [],
};

// 포스트 CHECK
export const checkPostAPI = (postId) => {
  return function (dispatch, getState, { history }) {
    apis
      .detailPost(postId)
      .then((res) => {
        // 버스기사가 checkpost라는 주소로 postid를 들고 간다.
        dispatch(checkPost(postId));
      })
      .catch((err) => {
        console.logg(err.response);
      });
  };
};
// 포스트 수정
export const editPostAPI = (card) => {
  return function (dispatch, getState, { history }) {
    apis
      .editPost(card)
      .then((res) => {
        dispatch(editPost(card));
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};
// 포스트 삭제
export const deletePostAPI = (postId) => {
  return function (dispatch, getState, { history }) {
    apis
      .deletePost(postId)
      .then((res) => {
        dispatch(deletePost(postId));
        console.log(postId);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

// 리듀서
export default handleActions(
  {
    [CHECK_POST]: (state, action) =>
      produce(state, (draft) => {
        console.log("포스트 CHECK", action.payload);
      }),
    [EDIT_POST]: (state, action) =>
      produce(state, (draft) => {
        console.log("포스트 수정", action.payload);
      }),
    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        console.log("포스트 삭제", action.payload);
      }),
  },
  initialState
);

const postActions = {
  checkPostAPI,
  editPostAPI,
  deletePostAPI,
};

export { postActions };
