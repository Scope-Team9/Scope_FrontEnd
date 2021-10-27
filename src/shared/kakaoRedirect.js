import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../redux/modules/user";
import CircularProgress from "@material-ui/core/CircularProgress";

const kakaoRedirect = props => {
  const dispatch = useDispatch();

  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  React.useEffect(() => {
    dispatch(actionCreators.kakaologinMiddleware(code));
  }, []);

  return <CircularProgress color="inherit" />;
};

export default kakaoRedirect;
