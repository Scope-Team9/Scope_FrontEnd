import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../lib/axios";

// 수정
const EDIT_POST = "EDIT_POST";
// 삭제
const DELETE_POST = "DELETE_POST";

// 포스트 수정 액션생성함수 생성
const editPost = createAction(EDIT_POST, (editcard) => ({ editcard }));
// 포스트 삭제 액션생성함수 생성
const deletePost = createAction(DELETE_POST, (card) => ({ card }));

// 초기값
const initialState = {
  list: [],
};

// 포스트 수정
export const editPostAPI = (editcard) => {
  return function (dispatch, getState, { history }) {
    apis
      .editPost(editcard)
      .then((res) => {
        window.alert("수정이 완료되었습니다.");
        history.goBack();
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
        history.goBack();
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

// 리듀서
export default handleActions(
  {
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

const postDetailActions = {
  editPostAPI,
  deletePostAPI,
};

export { postDetailActions };
