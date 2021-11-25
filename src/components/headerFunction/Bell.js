import React from "react";
import { useSelector, useDispatch } from "react-redux";
import StompJs from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { actionCreators } from "../../redux/modules/user";

const Bell = (props) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.user.userId);
  console.log("유저 아이디", userId);
  const token = document.cookie.includes("USER_TOKEN");

  const sock = new SockJS(``);
  const ws = StompJs.over(sock);
  ws.connect({}, () => {
    if (!token) {
      return null;
    }
    console.log("소리질러");
    ws.subscribe(
      `/sub/${userId}`,
      async (msg) => {
        const alarmDate = JSON.parse(msg.body);
        await dispatch(actionCreators.readAlarm(false));
        dispatch(actionCreators.updateAlarm(alarmDate));
      },
      { token }
    );
  });
  return (
    <React.Fragment>
      <div></div>
    </React.Fragment>
  );
};

export default Bell;
