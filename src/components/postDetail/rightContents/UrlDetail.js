// TitleDetail.js
/* eslint-disable */

// import를 한다.
import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../../../elements/Index";

// ContentDetail의 함수형 컴포넌트를 만든다.
const UrlDetail = (props) => {
  return (
    <React.Fragment>
      <UrlMedia>
        <Grid margin="10px auto auto">
          <Text color="#172d40ab">오픈채팅 URL</Text>

          <Text
            _onClick={() => {
              window.open(`${props.passedData?.chatUrl}`, "_blank");
            }}
            color="#172D40"
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
