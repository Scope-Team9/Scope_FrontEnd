import React from "react";
import { useDispatch } from "react-redux";
import { userCreators } from "../redux/modules/user";
import CircularProgress from "@material-ui/core/CircularProgress";

const KakaoRedirect = props => {
  const dispatch = useDispatch();

  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  React.useEffect(() => {
    dispatch(userCreators.kakaologinMiddleware(code));
  }, []);

  return <CircularProgress />;
};

export default KakaoRedirect;
