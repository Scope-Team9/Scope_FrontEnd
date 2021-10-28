import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis, instance } from "../../lib/axios";

//액션타입
const LOGIN = "LOGIN";
const SETUSER = "SET_USER";
//액션생성
const logIn = createAction(LOGIN, user => ({ user }));
const setUser = createAction(SETUSER, user => ({ user }));

//카카오 로그인
const kakaologinMiddleware = code => {
  return function (dispatch, getState, { history }) {
    console.log("카카오에서 받아온 코드", code);
    instance
      .get(`/api/login/kakao?code=${code}`)
      .then(res => {
        if (res.status === 300 && !res.data.nickname) {
          window.alert("추가정보 작성이 필요합니다.");
          history.replace("/signup");
          return;
        }
        if (res.status === 200) {
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
        if (res.status === 300 && !res.data.nickname) {
          window.alert("추가정보 작성이 필요합니다.");
          history.replace("/signup");
          return;
        }
        if (res.status === 200) {
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

//회원가입
const signupMiddleware = signupInfo => {
  return () => {
    apis
      .signup(signupInfo)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
};
// //리듀서
// export default handleActions({
//   [SETUSER]: (state, action) => produce(state, draft => {}),
// });

const userCreators = {
  kakaologinMiddleware,
  githubLoginMiddleware,
};

export { userCreators };
