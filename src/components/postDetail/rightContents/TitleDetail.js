import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../../../elements/Index";

const TitleDetail = (props) => {
  return (
    <React.Fragment>
      <Grid margin="40px auto auto">
        <Text size="40px" bold>
          {props.passedData?.title}
          <Line />
        </Text>
      </Grid>
    </React.Fragment>
  );
};

const Line = styled.hr`
  width: 100%;
`;

export default TitleDetail;
