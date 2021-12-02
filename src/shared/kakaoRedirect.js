/* eslint-disable */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userCreators } from "../redux/modules/user";

import Spinner from "./Spinner";

const KakaoRedirect = props => {
  const dispatch = useDispatch();
  const pageGo = useSelector(state => state.pagecheck);

  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  React.useEffect(() => {
    if (pageGo) {
      // console.log(pageGo);
      dispatch(userCreators.kakaologinMiddleware(code, pageGo));
    }
  }, []);

  return <Spinner />;
};

export default KakaoRedirect;
