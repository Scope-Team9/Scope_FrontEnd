// StackDetail.js
// import를 한다.
import React from "react";
import { Grid, Text } from "../../../elements/Index";

// StackDetail의 함수형 컴포넌트를 만든다.
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

// export를 통해 밖에서도 사용할 수 있도록 설정한다.
export default StackDetail;
