import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../../../elements/Index";

const ContentEdit = (props) => {
  return (
    <React.Fragment>
      <Grid margin="20px auto">
        <Text size="18px" bold>
          프로젝트 내용적기
        </Text>
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
  width: 97%;
  height: 200px;
  padding: 10px;
  margin: 4px auto;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  font-size: 16px;
  outline: none;
`;

export default ContentEdit;
