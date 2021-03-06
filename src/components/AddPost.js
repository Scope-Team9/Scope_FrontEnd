// AddPost.js
/* eslint-disable */

// import를 한다.
import React from "react";
import { Grid } from "../elements/Index";
import styled from "styled-components";
import LeftBanner from "../components/postWrite/LeftBanner";
import RightWrite from "../components/postWrite/RightWrite";

// WritePost의 함수형 컴포넌트를 만든다.
const WritePost = (props) => {
  return (
    <React.Fragment>
      <AddMedia>
        <Grid
          display="flex"
          justifyContent="center"
          border="3px solid #C4C4C4"
          borderRadius="30px"
          maxWidth="1400px"
          margin="40px auto"
          boxShadow="0px 0px 10px #C4C4C4"
        >
          <LeftBanner />
          <RightWrite />
        </Grid>
      </AddMedia>
    </React.Fragment>
  );
};

const AddMedia = styled.div`
  @media screen and (max-width: 600px) {
    width: 98%;
  } ;
`;

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default WritePost;
