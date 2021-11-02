import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Progress = (props) => {
  const scope_list = useSelector((state) => state.scope_list);
  let count = 0;

  return (
    <React.Fragment>
      <ProgressBar></ProgressBar>
    </React.Fragment>
  );
};

const ProgressBar = styled.div`
  background: #ffffff;
  width: 100%;
  height: 20px;
`;

// const HighLight = styled.div`
//   background: orange;
//   heigth: 40px;
//   width: ${(props) => props.width};
//   transition: width 1s;
// `;

export default Progress;
