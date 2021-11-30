// DateWrite.js
/* eslint-disable */

// import를 한다.
import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../../../elements/Index";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";

// DateWrite의 함수형 컴포넌트를 만든다.
const DateWrite = (props) => {
  const startDate = (date) => {
    props.setStartdate(date);
    // if (date <= props.endDate) {
    //   props.setStartdate(date);
    // } else {
    //   window.alert("시작일을 잘못 설정했습니다.");
    // }
  };

  const endDate = (date) => {
    if (date > props.startDate) {
      props.setEnddate(date);
    } else {
      window.alert("종료일을 잘못 설정했습니다.");
    }
  };

  return (
    <React.Fragment>
      <DateMedia>
        <Text color="#4e442d">기간설정</Text>
        <Grid display="flex" textAlign="center" margin="10px auto">
          {/* 시작 일*/}
          <Grid>
            <Text color="#4e442d">프로젝트 시작일</Text>
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
            <Text color="#4e442d">프로젝트 종료일</Text>
            <SDatePicker
              dateFormat="yyyy - MM - dd"
              selected={props.endDate}
              onChange={endDate}
              locale={ko}
              minDate={new Date()}
            />
          </Grid>
        </Grid>
      </DateMedia>
    </React.Fragment>
  );
};

// styled-components
const SDatePicker = styled(DatePicker)`
  box-sizing: border-box;
  width: 98%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  color: black;
  font-size: 16px;
  text-align: center;
  margin-top: 0.6rem;
  outline: none;
  box-shadow: 0px 0px 10px #ddd;
`;

const DateMedia = styled.div`
  @media screen and (max-width: 600px) {
    width: 350px;
    font-size: 10px;
  }
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default DateWrite;
