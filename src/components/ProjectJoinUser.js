// ProjectJoinUser.js
/* eslint-disable */

// import를 한다.
import React from "react";
import { Grid, Text } from "../elements/Index";
import { useHistory } from "react-router";
import ImgType from "../shared/ImgType";
import styled from "styled-components";

// ProjectJoinUser의 함수형 컴포넌트를 만든다.
const ProjectJoinUser = (props) => {
  const history = useHistory();
  const goToMypage = (userId) => {
    history.push(`/mypage/${userId}`);
  };
  return (
    <React.Fragment>
      <Grid
        textAlign="center"
        height="120px"
        width="80px"
        margin="0 11px 0 0"
        display="flex"
        justifyContent="center"
      >
        <JoinUserMedia>
          <Grid textAlign="center">
            <Writer number={props.number}>게시자</Writer>

            <Grid
              width="60px"
              height="60px"
              borderRadius="50%"
              backgroundColor="#efefef"
              margin="6px 0px"
              boxShadow="0px 0px 10px #C4C4C4"
            >
              <ImgType
                type={props.userPropensityType}
                cursor="pointer"
                _onClick={() => {
                  goToMypage(props.userId);
                }}
              ></ImgType>
              <Text size="12px">{props.nickname}</Text>
              <Grid height="30%">
                <Text size="12px">({props.userPropensityType})</Text>
              </Grid>
            </Grid>
          </Grid>
        </JoinUserMedia>
      </Grid>
    </React.Fragment>
  );
};

const Writer = styled.p`
  opacity: ${(props) => (props.number === 0 ? 1 : 0)};
  width: 60px;
  margin: auto auto auto 0;
  height: 10px;
  color: #4c4759;
`;

const JoinUserMedia = styled.div`
  @media screen and (max-width: 600px) {
    font-size: 12px;
    color: #4c4759;
  }
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default ProjectJoinUser;
