import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// Actions
const ADD_POST = "ADD_POST";

// Action Creators
const addPosts = createAction(ADD_POST, (card) => ({ card }));

const initialState = {
  list: [
    {
      title: "제목",
      summary: "한줄설명",
      contents: "내용",
      tectstack: "기술스택",
      totalmember: "제한 인원",
      recruitmentmember: "신청자 목록",
      projectstatus: "프로젝트 상태",
      startdate: "시작 날짜",
      enddate: "끝나는 날짜",
      poststatus: "프로젝트 상태?",
    },
  ],
};

// 미들웨어
export const addPostAPI = (card) => {
  return function (dispatch, getState, { history }) {
    dispatch(addPosts(card));
  };
};

// 리듀서
export default handleActions(
  {
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        console.log("ㅁㄴㅇㅁㄴㅇ", action.payload);
      }),
  },
  initialState
);

const postActions = {
  addPostAPI,
};
export { postActions };
