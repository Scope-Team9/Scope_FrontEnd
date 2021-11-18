import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../../../elements/Index";

const TitleDetail = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Text color="#C4C4C4" size="20px" bold>
          <Text>제목</Text> : {props.passedData?.title}
          <Line />
        </Text>
      </Grid>
    </React.Fragment>
  );
};

const Line = styled.hr`
  width: 92%;
`;

export default TitleDetail;
