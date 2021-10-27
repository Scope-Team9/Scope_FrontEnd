import React from "react";
import styled from "styled-components";

const Stack = () => {
  const onclick = (stack) => {
    window.alert(stack);
  };
  return (
    <div>
      <IMGS
        src="img/react.png"
        onClick={() => {
          onclick("react");
        }}
      ></IMGS>
      <IMGS src="img/react.png"></IMGS>
      <IMGS src="img/react.png"></IMGS>
      <IMGS src="img/react.png"></IMGS>
    </div>
  );
};

const IMGS = styled.img`
  cursor: pointer;
  width: 80px;
  margin: 5px;
`;

export default Stack;
