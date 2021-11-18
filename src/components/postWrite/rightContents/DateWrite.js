import React from "react";
import styled from "styled-components";
import { Grid } from "../../../elements/Index";

import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";

const DateWrite = (props) => {
  return (
    <React.Fragment>
      <Grid display="flex">
        <Grid>기간설정</Grid>
        <DateForm
          title={"프로젝트 시작일"}
          setDate={props.setStartdate}
          dateData={props.startDate}
        />
        <DateForm
          title={"프로젝트 종료일"}
          setDate={props.setEnddate}
          dateData={props.endDate}
        />
      </Grid>
    </React.Fragment>
  );
};

// DateForm은 공통컴포넌트로 활용
const DateForm = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Grid>{props.title}</Grid>
        <SDatePicker
          dateFormat="yyyy/MM/dd"
          selected={props.dateData}
          onChange={(date) => props.setDate(date)}
          locale={ko}
          minDate={new Date()}
        />
      </Grid>
    </React.Fragment>
  );
};

const SDatePicker = styled(DatePicker)`
  box-sizing: border-box;
  width: 120px;
  height: 40px;
  padding: 8px 20px;
  margin-top: 1.5rem;
  outline: none;
  border-radius: 4px;
  border: 1px solid #c4c4c4;
`;

export default DateWrite;
