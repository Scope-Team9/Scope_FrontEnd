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
    apis
      .login(code)
      // .post(`user/kakao/callback?code=${code}`)
      .then(res => {
        if (res.data.kakaoId) {
          window.alert("추가정보 작성이 필요합니다.");
          history.replace("/signup");
        }

        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        dispatch(
          setUser({
            email: res.data.email,
            nickname: res.data.nickname,
          })
        );
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
    instance
      .get(`user/kakao/callback?code=${code}`)
      .then(res => {
        if (!res.data.githubId) {
          window.alert("추가정보 작성이 필요합니다.");
          history.replace("/signup");
        }

        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        dispatch(
          setUser({
            email: res.data.email,
            nickname: res.data.nickname,
          })
        );
        // window.location.href = "/";
      })
      .catch(err => {
        console.log("소셜로그인 에러", err);
        alert("로그인에 실패하였습니다.");
        history.replace("/"); // 로그인 실패하면 로그인화면으로 돌려보냄
      });
  };
};

//구글 로그인
const googleLoginMiddleware = code => {
  return function (dispatch, getState, { history }) {
    instance
      .get(`user/kakao/callback?code=${code}`)
      .then(res => {
        if (!res.data.googleId) {
          window.alert("추가정보 작성이 필요합니다.");
          history.replace("/signup");
        }

        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        dispatch(
          setUser({
            email: res.data.email,
            nickname: res.data.nickname,
          })
        );
        // window.location.href = "/";
      })
      .catch(err => {
        console.log("소셜로그인 에러", err);
        alert("로그인에 실패하였습니다.");
        history.replace("/"); // 로그인 실패하면 로그인화면으로 돌려보냄
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
  googleLoginMiddleware,
};

export { userCreators };
