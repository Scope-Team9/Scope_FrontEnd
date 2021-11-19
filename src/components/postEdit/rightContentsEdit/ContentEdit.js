import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../../../elements/Index";

const ContentEdit = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Text>프로젝트 내용적기</Text>
        <TextArea
          value={props.contents}
          s
          onChange={(e) => {
            props.setContents(e.target.value);
          }}
        />
      </Grid>
    </React.Fragment>
  );
};

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  border: 1px solid #e7e1ff;
  font-size: 16px;
  outline: none;
`;

export default ContentEdit;
