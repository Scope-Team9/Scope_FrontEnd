// TitleDetail.js
/* eslint-disable */

// import를 한다.
import React from "react";
import styled from "styled-components";
import Linkify from "react-linkify";
import { Grid, Text } from "../../../elements/Index";
import { lightBlue } from "@material-ui/core/colors";

// ContentDetail의 함수형 컴포넌트를 만든다.
const UrlDetail = (props) => {
  return (
    <React.Fragment>
      <UrlMedia>
        <Grid margin="10px auto auto">
          <Text color="#4c4759">오픈채팅 URL</Text>

          <Text
            _onClick={() => {
              window.open(`${props.passedData?.chatUrl}`, "_blank");
            }}
            color="#554475"
            cursor="pointer"
            decoration="none"
          >
            &nbsp; {props.passedData?.chatUrl}
          </Text>
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
