// TitleDetail.js
/* eslint-disable */

// import를 한다.
import React from "react";
import styled from "styled-components";
import Linkify from "react-linkify";
import { Grid, Text } from "../../../elements/Index";

// ContentDetail의 함수형 컴포넌트를 만든다.
const ContentDetail = (props) => {
  return (
    <React.Fragment>
      <Grid margin="20px auto auto">
        <ContentMedia>
          <Text>프로젝트 설명</Text>

          <Linkify>
            <Content>{props.passedData?.contents}</Content>
          </Linkify>
        </ContentMedia>
      </Grid>
    </React.Fragment>
  );
};

// styled-components
const Content = styled.p`
  width: 100%;
  height: 500px;
  padding: 10px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  font-weight: 60;
  line-height: 30px;
  white-space: pre-line;
  overflow: scroll;
  @media screen and (max-width: 600px) {
    height: 300px;
  }
`;

const ContentMedia = styled.div`
  @media screen and (max-width: 600px) {
    font-size: 10px;
    width: 320px;
  }
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default ContentDetail;
