import React from "react";
import { Grid, Text } from "../../../elements/Index";

const DateDetail = (props) => {
  return (
    <React.Fragment>
      <Grid display="flex" margin="20px auto">
        <Text margin="auto 10px auto 0px">프로젝트 기간 :</Text>
        <Text>
          <span
            style={{
              color: "black",
              textAlign: "center",
              padding: "4px 10px",
              border: "1px solid #E6DDF2",
              borderRadius: "10px",
            }}
          >
            {props.passedData?.startDate} ~ {props.passedData?.endDate}
          </span>
        </Text>
      </Grid>
    </React.Fragment>
  );
};

export default DateDetail;
