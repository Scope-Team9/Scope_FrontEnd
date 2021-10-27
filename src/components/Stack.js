/* eslint-disable */
import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { postActions } from "../redux/modules/post";
import { stackAction } from "../redux/modules/stack";

const Stack = () => {
  const dispatch = useDispatch();
  const is_clicked = useSelector((state) => state.stack);

  // const [stackList, setStackList] = React.useState([{}]);

  // 리덕스에서 filter가 잘 되지만, 다시 불러오면 그대로임 ㅡㅡ
  const onclick = (stack) => {
    const result = is_clicked.find((item) => item === stack);
    console.log("이 값이 있으면 지워줘야함", result);
    if (result) {
      console.log("111111111111");
      dispatch(stackAction.setStack(stack));
    } else {
      console.log("222222222222");
      dispatch(stackAction.getStack(stack));
    }
  };

  const test = () => {
    console.log(is_clicked);
  };

  return (
    <div>
      <IMGS
        src="img/react.png"
        onClick={() => {
          onclick("react");
        }}
      ></IMGS>
      <IMGS
        src="img/react.png"
        onClick={() => {
          onclick("java");
        }}
      ></IMGS>
      <IMGS src="img/react.png"></IMGS>
      <IMGS
        src="img/react.png"
        onClick={() => {
          test();
        }}
      ></IMGS>
    </div>
  );
};

const IMGS = styled.img`
  cursor: pointer;
  width: 80px;
  margin: 5px;
`;

export default Stack;
