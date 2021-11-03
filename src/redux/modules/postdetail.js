import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../lib/axios";

// 수정
const EDIT_POST = "EDIT_POST";
// 삭제
const DELETE_POST = "DELETE_POST";

// 포스트 수정 액션생성함수 생성
const editPost = createAction(EDIT_POST, (card) => ({ card }));
// 포스트 삭제 액션생성함수 생성
const deletePost = createAction(DELETE_POST, (card) => ({ card }));

// 초기값
const initialState = {
  list: [
    {
      postId: 0,
      title: "제목",
      summary: "한줄설명",
      contents: "내용",
      techStackList: "기술스택",
      totalMember: "제한 인원",
      recruitmentMember: "신청자",
      projectStatus: "프로젝트 상태",
      startDate: "시작 날짜",
      endDate: "끝나는 날짜",
      bookmarkChecked: "북마크",
    },
  ],
};

// 포스트 수정
export const editPostAPI = (card) => {
  return function (dispatch, getState, { history }) {
    apis
      .editPost(card)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
    dispatch(editPost(card));
  };
};

// 포스트 삭제
export const deletePostAPI = (card) => {
  return function (dispatch, getState, { history }) {
    apis
      .deletePost(card)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
    dispatch(deletePost(card));
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

const postActions = {
  editPostAPI,
  deletePostAPI,
};

export { postActions };
