// import React from "react";
// import styled from "styled-components";
// import { Grid, Text } from "../../../elements/Index";

// import DatePicker from "react-datepicker";
// import { ko } from "date-fns/esm/locale";

// const DateEdit = (props) => {
//   return (
//     <React.Fragment>
//       <Grid margin="10px auto">
//         <Grid>
//           <Text>기간설정</Text>
//         </Grid>
//         <Grid display="colum">
//           <Text>프로젝트 시작 일 :</Text>
//           {/* <DateForm title={"프로젝트 시작일"} />
//           <DateForm title={"프로젝트 종료일"} /> */}
//           <SDatePicker
//             selected={new Date(props.startDate)}
//             onChange={(date) => props.setStartdate(date)}
//             startdate={props.startDate}
//             selectsStart
//             locale={ko}
//             minDate={new Date()}
//             placeholderText="프로젝트 시작일 입력"
//           />
//           <Text>프로젝트 종료 일 :</Text>
//           <SDatePicker
//             selected={new Date(props.endDate)}
//             onChange={(date) => props.setEnddate(date)}
//             startdate={props.startDate}
//             enddate={props.endDate}
//             selectsEnd
//             locale={ko}
//             minDate={new Date()}
//             placeholderText="프로젝트 종료일 입력"
//           />
//         </Grid>
//       </Grid>
//     </React.Fragment>
//   );
// };

// const DateForm = (props) => {
//   return (
//     <React.Fragment>
//       <Grid>
//         <Grid>{props.title}</Grid>
//       </Grid>
//     </React.Fragment>
//   );
// };

// const SDatePicker = styled(DatePicker)`
//   box-sizing: border-box;
//   width: 100%;
//   height: 40px;
//   padding: 8px 20px;
//   margin-top: 1.5rem;
//   outline: none;
//   border-radius: 4px;
//   border: 1px solid #c4c4c4;
// `;

// export default DateEdit;
