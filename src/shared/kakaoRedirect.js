/* eslint-disable */
import React from "react";

import { userCreators } from "../redux/modules/user";
import Spinner from "./Spinner";
import { useDispatch, useSelector } from "react-redux";

const KakaoRedirect = (props) => {
  const dispatch = useDispatch();
  const pageGo = useSelector((state) => state.pagecheck);

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
