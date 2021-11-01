import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis, instance } from "../../lib/axios";

//액션타입
const FIRST_USER = "FIRST_USER";
const TEST_USER = "TEST_USER";
const SET_USER = "SET_USER";
//액션생성
const firstUser = createAction(FIRST_USER, user => ({ user }));
const testUser = createAction(TEST_USER, user => ({ user }));
const setUser = createAction(SET_USER, user => ({ user }));

//초기값
const initialState = {
  nickname: "guest",
  snsId: null,
  email: null,
  techstack: [],
  is_login: false,
  userList: [],
  userfirst: false,
  sigunupModalState: false,
  userPropensityType: [],
  memberPropensityType: [],
};
//카카오 로그인
const kakaologinMiddleware = code => {
  return function (dispatch, getState, { history }) {
    console.log("카카오에서 받아온 코드", code);
    instance
      .get(`/api/login/kakao?code=${code}`)
      .then(res => {
        console.log(res.data);
        if (res.data.status == 300) {
          window.alert("추가정보 작성이 필요합니다.");
          dispatch(
            firstUser({
              email: res.data.data.email,
              snsId: res.data.data.id,
            })
          );
          history.replace("/");
          return;
        }
        if (res.status === 200 && res.data.token) {
          const ACCESS_TOKEN = res.data.token;
          localStorage.setItem("token", ACCESS_TOKEN);
          dispatch(
            setUser({
              email: res.data.email,
              nickname: res.data.nickname,
            })
          );
          history.replace("/");
        }
        // window.location.href = "/";
      })
      .catch(err => {
        console.log("소셜로그인 에러", err);
        alert("로그인에 실패하였습니다.");
        history.replace("/"); // 로그인 실패하면 로그인화면으로 돌려보냄
      });
  };
};

//깃허브 로그인
const githubLoginMiddleware = code => {
  return function (dispatch, getState, { history }) {
    console.log("깃허브에서 받아온 코드", code);
    instance
      .get(`/api/login/github?code=${code}`)
      .then(res => {
        if (res.data.status == 300) {
          window.alert("추가정보 작성이 필요합니다.");
          dispatch(
            firstUser({
              email: res.data.data.email,
              snsId: res.data.data.id,
            })
          );
          history.replace("/");
          return;
        }
        if (res.status === 200 && res.data.token) {
          const ACCESS_TOKEN = res.data.token;
          localStorage.setItem("token", ACCESS_TOKEN);
          dispatch(
            setUser({
              email: res.data.email,
              nickname: res.data.nickname,
            })
          );
          history.replace("/");
        }
        // window.location.href = "/";
      })
      .catch(err => {
        console.log("소셜로그인 에러", err);
        alert("로그인에 실패하였습니다.");
        history.replace("/"); // 로그인 실패하면 로그인화면으로 돌려보냄
      });
  };
};

//테스트유저 미들웨어
const testUserMiddleWare = signupInfo => {
  return function (dispatch, getState, { history }) {
    console.log(signupInfo);
    dispatch(firstUser(signupInfo));
  };
};

//테스트 마친 회원가입
const signupMiddleware = signupInfo => {
  return function (dispatch, getState, { history }) {
    instance
      .post("/api/signup", signupInfo)
      .then(res => {
        console.log(res);
        const ACCESS_TOKEN = res.data.token;
        localStorage.setItem("token", ACCESS_TOKEN);
        dispatch(
          setUser({
            email: res.data.email,
            nickname: res.data.nickname,
          })
        );
        history.replace("/");
      })
      .catch(err => {
        console.log(err);
      });
  };
};

//리듀서
export default handleActions(
  {
    [FIRST_USER]: (state, action) =>
      produce(state, draft => {
        draft.email = action.payload.user.email;
        draft.snsId = action.payload.user.snsId;
        draft.techStack = action.payload.user.techStack;
        draft.nickName = action.payload.user.nickName;
        draft.userfirst = true;
        draft.sigunupModalState = true;
      }),
    [SET_USER]: (state, action) =>
      produce(state, draft => {
        draft.userId = action.payload.user.userId;
        draft.nickname = action.payload.user.nickname;
        draft.email = action.payload.user.email;
        draft.is_login = true;
        draft.sigunupModalState = false;
      }),
  },
  initialState
);

const userCreators = {
  kakaologinMiddleware,
  githubLoginMiddleware,
  signupMiddleware,
  testUserMiddleWare,
};

export { userCreators };
