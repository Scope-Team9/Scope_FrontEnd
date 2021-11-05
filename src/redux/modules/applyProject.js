import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../lib/axios";

// 액션타입
const APPLY_PROJEFCT = "APPLY_POST";

// 액션생성
const applyUsers = createAction(APPLY_PROJEFCT, applyUser => ({ applyUser }));

const initialState = {
  users: [
    {
      userId: "1813325",
      nickname: "guest",
      email: "aaa@aaa.com",
      userPropensityType: "LVP",
      applicationDate: "2021-11-04",
    },
  ],
};

// 신청자 현황 불러오기 미들웨어
const applyUserMW = postId => {
  return function (dispatch, getState, { history }) {
    apis
      .applyUser(postId)
      .then(res => {
        console.log(res.data.users);
        window.alert("신청자 정보가 잘 불러와졌네용!");
        dispatch(applyUsers(res.data.users));
      })
      .catch(err => {
        console.log(err.response);
        window.alert("4444신청자를 못찾겠네용!");
      });
  };
};
//신청자 수락
const acceptOfferMW = (postId, acceptInfo) => {
  return function (dispatch, getState, { history }) {
    apis
      .aceeptOffer(acceptInfo)
      .then(res => {
        console.log(res.data.users);
        window.alert("신청자 정보가 잘 불러와졌네용!");
        dispatch(applyUsers(res.data.users));
      })
      .catch(err => {
        console.log(err.response);
        window.alert("111신청자를 못찾겠네용!");
      });
  };
};
//프로젝트 지원
const applyProjectMW = (postId, comment) => {
  return function (dispatch, getState, { history }) {
    apis
      .applyProject(postId, comment)
      .then(res => {
        console.log(res);
        window.alert("프로젝트에 지원되었습니다.");
      })
      .catch(err => {
        if (
          err.response.status === 400 &&
          err.response.data.msg === "이미 지원한 프로젝트 입니다."
        ) {
          window.alert("이미 지원한 프로젝트 입니다.");
          return;
        }
        window.alert("신청자 정보를 찾을 수 없습니다.");
      });
  };
};
//프로젝트취소
const cancelProjectMW = postId => {
  return function (dispatch, getState, { history }) {
    apis
      .cancelProject(postId)
      .then(res => {
        console.log(res);
        window.alert("프로젝트 지원이 취소되었습니다.!");
      })
      .catch(err => {
        console.log(err.response);
        window.alert("33333신청자를 못찾겠네용!");
      });
  };
};
// 리듀서
export default handleActions(
  {
    [APPLY_PROJEFCT]: (state, action) =>
      produce(state, draft => {
        console.log("신청자정보", action.payload);
        draft.users = action.payload.users;
      }),
  },
  initialState
);

const applyCreators = {
  applyUserMW,
  acceptOfferMW,
  applyProjectMW,
  cancelProjectMW,
};

export { applyCreators };
