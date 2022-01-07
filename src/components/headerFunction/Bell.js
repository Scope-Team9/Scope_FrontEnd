// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import StompJs from "@stomp/stompjs";
// import SockJS from "sockjs-client";
// import { actionCreators } from "../../redux/modules/user";

// // Bell
// const Bell = (props) => {
//   const dispatch = useDispatch();
//   const userId = useSelector((state) => state.user.user.userId);
//   const token = document.cookie.includes("USER_TOKEN");
//   const sock = new SockJS(``);
//   const ws = StompJs.over(sock);

//   ws.connect({}, () => {
//     if (!token) {
//       return null;
//     }

//     ws.subscribe(
//       `/sub/${userId}`,
//       async (msg) => {
//         const alarmDate = JSON.parse(msg.body);
//         await dispatch(actionCreators.readAlarm(false));
//         dispatch(actionCreators.updateAlarm(alarmDate));
//       },
//       { token }
//     );
//   });

//   return (
//     <React.Fragment>
//       <div></div>
//     </React.Fragment>
//   );
// };

// export default Bell;
