import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../../../elements/Index";

import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";

const DateWrite = (props) => {
  return (
    <React.Fragment>
      <Text size="18px" bold>
        기간설정
      </Text>
      <Grid display="flex" textAlign="center" margin="20px auto">
        <DateForm
          title={"프로젝트 시작 일"}
          setDate={props.setStartdate}
          dateData={props.startDate}
        />
        <DateForm
          title={"프로젝트 종료 일"}
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
        <Text>{props.title}</Text>
        <SDatePicker
          dateFormat="yyyy - MM - dd"
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
  width: 350px;
  text-align: center;
  font-size: 16px;
  color: black;
  height: 40px;
  margin-top: 0.6rem;
  margin-left: 10px;
  outline: none;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
`;

export default DateWrite;
