import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../lib/axios";

//user.js 로그인
const kakaologinMiddleware = loginInfo => {
  return () => {
    apis
      .login(loginInfo)
      .then(res => {
        console.log(res);
        //인터셉터
      })
      .catch(err => {
        console.log(err);
        //인터셉터
      });
  };
};

const userCreators = {
  kakaologinMiddleware,
};

export { userCreators };
