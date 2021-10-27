/* eslint-disable */
import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { postActions } from "../redux/modules/post";
const Stack = () => {
  const dispatch = useDispatch();

  const [stackList, setStackList] = React.useState({
    JavaScript: null,
    React: null,
    Spring: null,
  });

  const onclick = (stack) => {
    // window.alert(stack);
    console.log(stackList);
    let aa = { stack: stack };
    setStackList(aa);
    // setStackList.stack(stack);
    // dispatch(postActions.getPostAPI());
  };
  return (
    <div>
      <IMGS
        src="img/react.png"
        onClick={() => {
          onclick("React");
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
