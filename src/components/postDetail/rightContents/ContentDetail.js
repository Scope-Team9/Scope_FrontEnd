import React from "react";
import styled from "styled-components";
import { Grid } from "../../../elements/Index";

const ContentDetail = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Content>{props.passedData?.contents}</Content>
      </Grid>
    </React.Fragment>
  );
};

const Content = styled.h3`
  width: 96%;
  height: 180px;
  padding: 10px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  overflow: scroll;
`;

export default ContentDetail;
