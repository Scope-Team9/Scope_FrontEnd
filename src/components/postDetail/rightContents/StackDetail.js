import React from "react";
import { Grid, Text } from "../../../elements/Index";

const StackDetail = props => {
  return (
    <React.Fragment>
      <Grid display="flex" margin="20px auto">
        <Text size="18px" bold margin="auto 10px auto 0px">
          기술스택
        </Text>
        {props.passedData?.techStack.map((item, index) => {
          return (
            <Text margin="auto 5px" key={index}>
              <span
                style={{
                  color: "#554475",
                  textAlign: "center",
                  padding: "4px 10px",
                  border: "1px solid #E6DDF2",
                  background: "#E6DDF2",
                  borderRadius: "10px",
                }}
              >
                {item}
              </span>
            </Text>
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

export default StackDetail;
