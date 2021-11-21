import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../../../elements/Index";

const ContentDetail = (props) => {
  return (
    <React.Fragment>
      <Grid margin="10px auto auto">
        <Text size="18px" bold margin="0px 10px 0px 0px">
          프로젝트 내용
        </Text>
        <Content>{props.passedData?.contents}</Content>
      </Grid>
    </React.Fragment>
  );
};

const Content = styled.h4`
  width: 100%;
  height: 340px;
  padding: 10px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  overflow: scroll;
`;

export default ContentDetail;
