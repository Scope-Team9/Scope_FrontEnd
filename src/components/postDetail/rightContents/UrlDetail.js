// TitleDetail.js
/* eslint-disable */

// import를 한다.
import React from "react";
import styled from "styled-components";
import Linkify from "react-linkify";
import { Grid, Text } from "../../../elements/Index";

// ContentDetail의 함수형 컴포넌트를 만든다.
const UrlDetail = (props) => {
  return (
    <React.Fragment>
      <UrlMedia>
        <Grid margin="20px auto auto">
          <Text>오픈채팅 URL</Text>

          <Linkify>
            <Text decoration="none"> {props.passedData?.chatUrl}</Text>
          </Linkify>
        </Grid>
      </UrlMedia>
    </React.Fragment>
  );
};

// styled-components
const UrlMedia = styled.div`
  @media screen and (max-width: 600px) {
    width: 100px;
    font-size: 10px;
  }
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default UrlDetail;
