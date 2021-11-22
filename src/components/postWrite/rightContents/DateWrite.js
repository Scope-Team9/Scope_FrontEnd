import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../../../elements/Index";

import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";

const DateWrite = (props) => {
  console.log("빼기", props.startDate > props.endDate);

  const startDate = (date) => {
    if (date <= props.endDate) {
      props.setStartdate(date);
    } else {
      window.alert("시작일을 잘못 설정했습니다.");
    }
  };

  const endDate = (date) => {
    props.setEnddate(date);
  };

  return (
    <React.Fragment>
      <Text size="18px" bold>
        기간설정
      </Text>
      <Grid display="flex" textAlign="center" margin="20px auto">
        {/* 시작 일*/}
        <Grid>
          <Text>프로젝트 시작일</Text>
          <SDatePicker
            dateFormat="yyyy - MM - dd"
            selected={props.startDate}
            onChange={startDate}
            locale={ko}
            minDate={new Date()}
          />
        </Grid>
        {/* 종료 일*/}
        <Grid>
          <Text>프로젝트 종료일</Text>
          <SDatePicker
            dateFormat="yyyy - MM - dd"
            selected={props.endDate}
            onChange={endDate}
            locale={ko}
            minDate={new Date()}
          />
        </Grid>
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
