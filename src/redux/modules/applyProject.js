/* eslint-disable */
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../lib/axios";

// 액션타입
const APPLY_PROJEFCT = "APPLY_POST";

// 액션생성
const applyUsers = createAction(APPLY_PROJEFCT, applyUsers => ({
  applyUsers,
}));

const initialState = {
  assessment: false,
};

// 내가만든 프로젝트 신청자 현황 불러오기
const applyUserAPI = postId => {
  return function (dispatch, getState, { history }) {
    apis
      .applyUser(postId)
      .then(res => {
        dispatch(applyUsers(res.data.data));
      })
      .catch(err => {
        window.alert("ERROR: 신청자를 불러오지 못했습니다.");
      });
  };
};
//내가 만든 프로젝트 신청자 수락(팀장)
const acceptOfferAPI = (postId, acceptInfo) => {
  return function (dispatch, getState, { history }) {
    apis
      .aceeptOffer(postId, acceptInfo)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        window.alert("ERROR: 신청자를 불러올 수 없습니다.");
      });
  };
};
//모집중인 프로젝트 지원(팀원)
const applyProjectAPI = (postId, comment) => {
  return function (dispatch, getState, { history }) {
    apis
      .applyProject(postId, comment)
      .then(res => {
        return window.alert("프로젝트에 지원되었습니다.");
      })
      .catch(err => {
        if (err.response.data.msg === "모집중인 프로젝트가 아닙니다.") {
          return window.alert("모집중인 프로젝트가 아닙니다.");
        }
        if (err.response.data.msg === "이미 지원한 프로젝트입니다.") {
          return window.alert("이미 지원한 프로젝트 입니다.");
        } else {
          window.alert(err.response.data.msg);
          return;
        }
      });
  };
};
//모집중인 프로젝트 지원취소(팀원)
const cancelProjectAPI = postId => {
  return function (dispatch, getState, { history }) {
    apis
      .cancelProject(postId)
      .then(res => {
        window.alert("프로젝트 지원이 취소되었습니다.!");
      })
      .catch(err => {
        window.alert("신청자 정보를 찾을 수 없습니다!");
      });
  };
};
//팀장이 수락한 프로젝트 탈퇴(팀원)
const exitTeamAPI = postId => {
  return function (dispatch, getState, { history }) {
    const PostId = postId.postId;

    apis
      .exitTeam(PostId)
      .then(res => {
        window.alert("팀에서 탈출하였습니다!");
      })
      .catch(err => {
        if (err.response.data.msg === "입력 값이 잘못되었습니다.") {
          return window.alert("입력 값이 잘못되었습니다.");
        }
        if (err.response.data.msg === "해당 프로젝트를 찾을 수 없습니다.") {
          return window.alert("해당 프로젝트를 찾을 수 없습니다.");
        }
        if (err.response.data.msg === "이미 진행중인 프로젝트입니다.") {
          return window.alert("이미 진행중인 프로젝트입니다.");
        }
      });
  };
};

// 팀장의 프로젝트 완료후 평가
const starterLikeAPI = (postId, userIds) => {
  return function (dispatch, getState, { history }) {
    apis
      .strterLike(postId, userIds)
      .then(res => {
        let checkApply = getState().apply.assessment;
        dispatch(applyUsers({ assessment: !checkApply }));
      })
      .catch(err => {
        if (err.response.data.msg === "입력 값이 잘못되었습니다.") {
          return window.alert("팀원 평가가 이루어지지 않았습니다.");
        }
        if (err.response.data.msg === "해당 프로젝트를 찾을 수 없습니다.") {
          return window.alert("해당 프로젝트를 찾을 수 없습니다.");
        }
        if (err.response.data.msg === "이미 진행중인 프로젝트입니다.") {
          return window.alert("이미 진행중인 프로젝트입니다.");
        }
      });
  };
};

// 깃허브 제출
const submitUrlAPI = (postId, urls) => {
  return function (dispatch, getState, { history }) {
    apis
      .sumbitUrl(postId, urls)
      .then(res => {
        console.log(res);
        window.alert("프로젝트 URL이 성공적으로 저장되었습니다.");
      })
      .catch(err => {
        console.log(err.response);
      });
  };
};

//마이페이지 프로젝트 팀원정보 조회
const getMemberAPI = postId => {
  return function (dispatch, getState, { history }) {
    apis
      .getMember(postId)
      .then(res => {
        console.log(res);
        window.alert("모라공?");
      })
      .catch(err => {
        console.log(err.response);
      });
  };
};
// 리듀서
export default handleActions(
  {
    [APPLY_PROJEFCT]: (state, action) =>
      produce(state, draft => {
        draft.assessment = true;
      }),
  },
  initialState
);

const applyCreators = {
  applyUserAPI,
  acceptOfferAPI,
  applyProjectAPI,
  cancelProjectAPI,
  exitTeamAPI,
  starterLikeAPI,
  submitUrlAPI,
  getMemberAPI,
};

export { applyCreators };
