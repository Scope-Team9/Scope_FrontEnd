import React from "react";
import { Grid, Text } from "../../../elements/Index";

const StackDetail = (props) => {
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
                  color: "white",
                  textAlign: "center",
                  padding: "4px 10px",
                  border: "1px solid #554475",
                  background: "#554475",
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
