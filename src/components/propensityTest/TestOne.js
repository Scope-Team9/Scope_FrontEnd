import React from "react";
import styled from "styled-components";
import { Grid, Button, Text } from "../../elements/Index";

const TestOne = props => {
  const { handleUserCreate, handleMemberCreate } = props;
  const [isChecked, setIsChecked] = React.useState("#fff");
  // const [blue, setBlue] = React.useState("L");

  const ToggleButton = answer => {
    console.log(answer);
    if (answer === "L") {
      setIsChecked("#B29CF4");
    } else if (answer === "F") {
      setIsChecked("#fff");
    }
  };
  // const [bChecked, setChecked] = React.useState(false);

  return (
    <Grid>
      <Grid display="flex" flexDirection="column">
        <Grid margin="20px 0">
          <Grid>
            <Grid margin="5px 0">
              Q1.<b>팀 회의할 때 당신의 모습</b>에 더 가까운 것은?
            </Grid>
            <Button
              isChecked={isChecked}
              isTest
              isValue="L"
              _onClick={e => {
                ToggleButton(e.target.value);
                console.log(isChecked);
                handleUserCreate(e.target.value);
              }}
            >
              내 주장을 펼치며 회의 분위기를 탄탄하게 이끌기
            </Button>
            <Button
              isChecked={isChecked}
              isTest
              isValue="F"
              _onClick={e => {
                ToggleButton(e.target.value);
                handleUserCreate(e.target.value);
              }}
            >
              다른 사람들의 의견을 들으며 뭘 맡아서 해야할지 파악하기
            </Button>
          </Grid>
        </Grid>
        <Grid>
          <Grid margin="5px 0">
            Q1.<b>팀 회의할 때 선호하는 팀원의 모습</b>에 더 가까운 것은?
          </Grid>
          <Button
            isTest
            isValue="L"
            _onClick={e => {
              handleMemberCreate(e.target.value);
            }}
          >
            내 주장을 펼치며 회의 분위기를 탄탄하게 이끌기
          </Button>
          <Button
            isTest
            isValue="F"
            _onClick={e => {
              handleMemberCreate(e.target.value);
            }}
          >
            다른 사람들의 의견을 들으며 뭘 맡아서 해야할지 파악하기
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TestOne;
