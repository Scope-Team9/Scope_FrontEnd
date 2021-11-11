import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis, instance } from "../../lib/axios";
import { setCookie } from "../../shared/Cookie";
import Swal from "sweetalert2";
//액션타입
const FIRST_USER = "FIRST_USER";
const TEST_USER = "TEST_USER";
const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";

//액션생성
const firstUser = createAction(FIRST_USER, (user) => ({ user }));
const testUser = createAction(TEST_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));

//초기값
const initialState = {
  nickname: "guest",
  snsId: null,
  email: null,
  userID: null,
  techstack: [],
  is_login: false,
  userList: [],
  userfirst: false,
  sigunupModalState: false,
  userPropensityType: [],
  memberPropensityType: [],
};
//카카오 로그인
const kakaologinMiddleware = (code) => {
  return function (dispatch, getState, { history }) {
    console.log("카카오에서 받아온 코드", code);
    apis
      .kakaoLogin(code)
      .then((res) => {
        console.log(res);
        if (res.data.msg == "추가 정보 작성이 필요한 사용자입니다.") {
          // window.alert("추가정보 작성이 필요합니다.");
          Swal.fire("추가정보 작성이 필요합니다.", "info");
          dispatch(
            firstUser({
              email: res.data.data.email,
              snsId: res.data.data.id,
            })
          );
          history.replace("/");
          return;
        }
        if (res.data.msg == "로그인이 완료되었습니다") {
          let userCookie = res.data.data.token;
          setCookie("ScopeUser", userCookie, 30);
          // const ACCESS_TOKEN = res.data.token;
          // localStorage.setItem("token", ACCESS_TOKEN);
          dispatch(
            setUser({
              email: res.data.data.mail,
              nickname: res.data.data.nickname,
              userId: res.data.data.userId,
              userPropensityType: res.data.data.userPropensityType,
            })
          );
          // window.alert("로그인성공");

          history.replace("/");
          // Swal.fire(
          //   "로그인 완료!",
          //   "최고의 프로젝트를 만들어 보세요!",
          //   "success"
          // );
          return;
        }
      })
      .catch((err) => {
        console.log("소셜로그인 에러", err);
        // alert("로그인에 실패하였습니다.");
        history.replace("/"); // 로그인 실패하면 로그인화면으로 돌려보냄
        Swal.fire("로그인에 실패하였습니다!", "", "warning");
      });
  };
};

//깃허브 로그인
const githubLoginMiddleware = (code) => {
  return function (dispatch, getState, { history }) {
    console.log("깃허브에서 받아온 코드", code);
    apis
      .githubLogin(code)
      .then((res) => {
        console.log(res);
        if (res.data.msg == "추가 정보 작성이 필요한 사용자입니다.") {
          // window.alert("추가정보 작성이 필요합니다.");
          Swal.fire("추가정보 작성이 필요합니다.", "", "info");
          dispatch(
            firstUser({
              email: res.data.data.email,
              snsId: res.data.data.id,
            })
          );

          // history.replace("/");
          return;
        }
        if (res.data.msg == "로그인이 완료되었습니다") {
          let userCookie = res.data.data.token;
          setCookie("ScopeUser", userCookie, 30);
          dispatch(
            setUser({
              email: res.data.data.mail,
              nickname: res.data.data.nickname,
              userId: res.data.data.userId,
              userPropensityType: res.data.data.userPropensityType,
            })
          );
          // window.alert("로그인성공");
          history.replace("/");
        }
        // window.location.href = "/";
      })
      .catch((err) => {
        console.log("소셜로그인 에러", err);
        // alert("로그인에 실패하였습니다.");
        history.replace("/"); // 로그인 실패하면 로그인화면으로 돌려보냄
        Swal.fire("로그인에 실패하였습니다.", "", "warning");
      });
  };
};
// 이메일 중복체크 미들웨어
const emailCheckMiddleWare = (email) => {
  return () => {
    apis
      .checkEmail(email)
      .then((res) => {
        console.log(res);
        if (res.data.msg == "사용 가능한 메일입니다.") {
          return Swal.fire("사용 가능한 메일입니다.", "", "success");
        }
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response.data.msg == "중복된 이메일이 존재합니다.") {
          return Swal.fire("중복된 이메일이 존재합니다", "", "warning");
        }
      });
  };
};

// 닉네임 중복체크 미들웨어
const nickCheckMiddleWare = (nickName) => {
  return () => {
    apis
      .checkNick(nickName)
      .then((res) => {
        console.log(res.data);
        if (res.data.msg == "사용가능한 닉네임입니다.") {
          Swal.fire("사용가능한 닉네임입니다.", "", "success");
          return;
        }
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response.data.msg == "중복된 닉네임이 존재합니다.") {
          return Swal.fire("중복된 닉네임이 존재합니다.", "warning");
        }
      });
  };
};

//테스트유저 미들웨어
const testUserMiddleWare = (signupInfo) => {
  return function (dispatch, getState, { history }) {
    console.log(signupInfo);
    dispatch(firstUser(signupInfo));
  };
};

//로그인 정보 유지
const myUserAPI = () => {
  return function (dispatch, getState, { history }) {
    apis
      .myUser()
      .then((res) => {
        console.log(res);
        dispatch(
          setUser({
            email: res.data.data.mail,
            nickname: res.data.data.nickname,
            userId: res.data.data.userId,
            userPropensityType: res.data.data.userPropensityType,
          })
        );
        // history.replace("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
//테스트 마친 회원가입
const signupMiddleware = (signupInfo) => {
  return function (dispatch, getState, { history }) {
    apis
      .signup(signupInfo)
      .then((res) => {
        console.log(res.response);
        // const ACCESS_TOKEN = res.data.token;
        // localStorage.setItem("token", ACCESS_TOKEN);
        dispatch(
          setUser({
            userPropensityType: res.data.data.userPropensityType,
            memberPropensityType: res.data.data.memberPropensityType,
            applicantDate: res.data.data.applicantDate,
            comment: res.data.data.comment,
            isAssessment: res.data.data.isAssessment,
          })
        );
        history.replace("/");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};
//협업테스트 수정 미들웨어
const editTestMiddleware = (userId, testInfo) => {
  return function (dispatch, getState, { history }) {
    apis
      .editTest(userId, testInfo)
      .then((res) => {
        console.log(res);
        dispatch(
          setUser({
            userPropensityType: res.data.data.userPropensityType,
            memberPropensityType: res.data.data.memberPropensityType,
          })
        );

        // Swal.fire("성향 캐릭터가 정해졌습니다!", "", "success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//리듀서
export default handleActions(
  {
    [FIRST_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.email = action.payload.user.email;
        draft.snsId = action.payload.user.snsId;
        draft.techStack = action.payload.user.techStack;
        draft.nickName = action.payload.user.nickName;
        draft.userfirst = true;
        draft.sigunupModalState = true;
      }),
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.userId = action.payload.user.userId;
        draft.nickname = action.payload.user.nickname;
        draft.email = action.payload.user.email;
        draft.techStack = action.payload.user.techStack;
        draft.is_login = true;
        draft.sigunupModalState = false;
        draft.memberPropensityType = action.payload.user.memberPropensityType;
        draft.userPropensityType = action.payload.user.userPropensityType;
        draft.applicantDate = action.payload.user.applicantDate;
        draft.comment = action.payload.user.comment;
        draft.isAssessment = action.payload.user.isAssessment;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.is_login = false;
      }),
  },
  initialState
);

const userCreators = {
  kakaologinMiddleware,
  githubLoginMiddleware,
  signupMiddleware,
  testUserMiddleWare,
  emailCheckMiddleWare,
  nickCheckMiddleWare,
  editTestMiddleware,
  myUserAPI,
  logOut,
};

export { userCreators };
